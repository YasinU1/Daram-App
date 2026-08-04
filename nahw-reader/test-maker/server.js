// Daram — Test Maker backend
// A small Express server that serves the static reader/test-maker pages and
// exposes three Claude-backed endpoints:
//   POST /api/generate-test  — turn selected chapter content into an exam paper
//   POST /api/grade          — mark a single typed answer against its mark scheme
//   POST /api/help           — give hints / supporting explanation when stuck
//
// The Anthropic API key lives ONLY here (server side), never in the browser.

import express from 'express';
import { spawn } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── minimal .env loader (avoids a dotenv dependency) ──────────────────────────
const envPath = join(__dirname, '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

// This app drives the local Claude Code CLI in headless mode, so it uses the SAME
// login as your `claude` terminal (your Claude subscription) — no API key required.
const MODEL = process.env.CLAUDE_MODEL || 'claude-opus-4-8';
const CLAUDE_BIN = process.env.CLAUDE_BIN || 'claude';

const app = express();
app.use(express.json({ limit: '6mb' }));
// Serve the reader pages (book.html, styles.css, data files, test-maker.html …).
// `dotfiles: 'deny'` keeps .env / .git out of reach — the static root is the
// parent of this folder, so it contains test-maker/.env.
app.use(express.static(join(__dirname, '..'), { dotfiles: 'deny', index: false }));

// ── helpers ───────────────────────────────────────────────────────────────────

// Pull the first JSON value out of a model response, tolerant of code fences
// or stray prose around it.
function extractJson(text) {
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const start = t.search(/[[{]/);
  if (start === -1) throw new Error('No JSON found in model response');
  // walk to the matching closing bracket
  const open = t[start];
  const close = open === '{' ? '}' : ']';
  let depth = 0, inStr = false, esc = false, end = -1;
  for (let i = start; i < t.length; i++) {
    const c = t[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
    } else if (c === '"') inStr = true;
    else if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) { end = i; break; } }
  }
  if (end === -1) throw new Error('Unbalanced JSON in model response');
  return JSON.parse(t.slice(start, end + 1));
}

// Tools we never want the headless call to use — it should just return text.
const NO_TOOLS = ['Bash', 'Edit', 'Write', 'Read', 'Glob', 'Grep', 'WebFetch', 'WebSearch', 'NotebookEdit', 'Task', 'TodoWrite'];

// Run one headless `claude -p` call. Runs in a temp cwd so it never picks up the
// project's CLAUDE.md / MCP servers, replaces the system prompt with ours, and
// forbids tools so the model just produces text. Returns the model's text output.
function callClaude({ system, user }) {
  return new Promise((resolve, reject) => {
    const args = ['-p', '--output-format', 'json', '--model', MODEL, '--strict-mcp-config'];
    if (system) args.push('--system-prompt', system);
    args.push('--disallowedTools', ...NO_TOOLS);

    const child = spawn(CLAUDE_BIN, args, { cwd: tmpdir(), env: process.env });
    let out = '', err = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (err += d));
    child.on('error', (e) =>
      reject(e.code === 'ENOENT'
        ? new Error('`claude` CLI not found. Install Claude Code and run `claude login`, or set CLAUDE_BIN.')
        : e));
    child.on('close', (code) => {
      let env;
      try { env = JSON.parse(out); } catch { /* response wasn't the JSON envelope */ }
      if (env && typeof env.result === 'string' && !env.is_error) return resolve(env.result);
      const msg = (env && (env.result || env.error)) || err.trim() || out.trim() || `claude exited with code ${code}`;
      reject(new Error(msg));
    });
    child.stdin.write(user);
    child.stdin.end();
  });
}

// ── request validation ──────────────────────────────────────────────────────
// The endpoints spawn the local `claude` CLI on the user's own login, so every
// request costs real quota. Cap and type-check whatever the page sends.
const MAX_CHAPTERS = 40;
const MAX_CORPUS_CHARS = 400_000;
const MAX_FIELD_CHARS = 20_000;
const MAX_ANSWER_CHARS = 20_000;

// Mirrors the #difficulty options in test-maker.html.
const DIFFICULTIES = new Set(['foundation', 'standard', 'challenging']);

function str(v, max) {
  return typeof v === 'string' ? v.slice(0, max) : '';
}

function clampInt(v, min, max, fallback) {
  const n = Math.round(Number(v));
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function badRequest(message) {
  const err = new Error(message);
  err.status = 400;
  return err;
}

// Normalise the question object echoed back by the client into a fixed shape.
function cleanQuestion(q) {
  if (!q || typeof q !== 'object') throw badRequest('Missing question.');
  const marks = Math.round(Number(q.marks));
  if (!Number.isFinite(marks) || marks < 1 || marks > 100) throw badRequest('Invalid marks.');
  const promptEn = str(q.promptEn, MAX_FIELD_CHARS);
  if (!promptEn.trim()) throw badRequest('Missing question prompt.');
  return {
    marks,
    promptEn,
    promptAr: str(q.promptAr, MAX_FIELD_CHARS),
    markScheme: str(q.markScheme, MAX_FIELD_CHARS),
  };
}

function fail(res, err) {
  console.error(err);
  const status = err?.status || 500;
  res.status(status).json({ error: err?.message || 'Request failed' });
}

// ── prompts ─────────────────────────────────────────────────────────────────

const EXAM_STYLE = `You write past-paper-style exam questions for a classical-Arabic grammar (نحو) course,
modelled exactly on the "Dar al-Ulum Oxford" Nahw (al-Kubrā) papers. The house style is:

- ALL questions are written/free-response (no multiple choice). Each carries a mark value;
  the values must sum to (approximately) the requested total.
- Questions are drawn ONLY from the supplied chapter content. Never test material that is not present.
- Use these recurring question archetypes (mix them, weight marks by depth):
  1. "explain-line"      — quote a matn line in Arabic, ask the student to explain it. (~5 marks)
  2. "state-types"       — state the types of X and, for each, a recognising characteristic / علامة. (~6)
  3. "compare"           — explain, with examples, the difference between two terms. (~8)
  4. "explain-statement" — quote a fuller statement/rule in Arabic, ask the student to explain it
                           "as fully as possible, with examples". (~15)
  5. "define-types-examples" — "What is X? What are its types? Give examples." (~15)
  6. "enumerate"         — list/recall items with meanings (e.g. give 6 of the 13 أخوات كان). (~12)
  7. "classify-tarkib"   — classify a word's category, then translate and give the tarkīb/iʿrāb
                           of a supplied Arabic sentence. (~9)
- Arabic (matn lines, terms, example sentences) should carry full ḥarakāt where natural.
- For EACH question also produce a private mark scheme: the model answer plus how the marks break down.
  The mark scheme is for the examiner only and must never be shown to the student.`;

// ── routes ──────────────────────────────────────────────────────────────────

// Generate an exam paper from selected chapters.
app.post('/api/generate-test', async (req, res) => {
  try {
    const body = req.body || {};
    const chapters = Array.isArray(body.chapters) ? body.chapters : [];
    if (!chapters.length) throw badRequest('No chapters supplied.');
    if (chapters.length > MAX_CHAPTERS) throw badRequest('Too many chapters supplied.');

    const totalMarks = clampInt(body.totalMarks, 1, 500, 70);
    const numQuestions = clampInt(body.numQuestions, 1, 30, 7);
    const difficulty = DIFFICULTIES.has(body.difficulty) ? body.difficulty : 'standard';

    const corpus = chapters
      .map((c) => {
        const ch = c && typeof c === 'object' ? c : {};
        return `### Chapter: ${str(ch.ar, 200)} (${str(ch.en, 200)}) [id:${str(ch.id, 100)}]\n${str(ch.text, MAX_CORPUS_CHARS)}`;
      })
      .join('\n\n')
      .slice(0, MAX_CORPUS_CHARS);

    const user = `Create an exam paper of ${numQuestions} questions totalling about ${totalMarks} marks,
at "${difficulty}" difficulty, drawn strictly from the chapter content below.

Return ONLY a JSON object of this exact shape (no prose, no code fence):
{
  "title": "short paper title in English",
  "questions": [
    {
      "n": 1,
      "type": "one of: explain-line | state-types | compare | explain-statement | define-types-examples | enumerate | classify-tarkib",
      "marks": 5,
      "promptEn": "the instruction to the student, in English",
      "promptAr": "optional Arabic matn line / statement / sentence to display (omit or empty string if none)",
      "markScheme": "the model answer and a brief breakdown of how the marks are awarded (examiner-only)"
    }
  ]
}
The "marks" across all questions should sum to about ${totalMarks}. Vary the archetypes.

--- CHAPTER CONTENT ---
${corpus}`;

    const text = await callClaude({ system: EXAM_STYLE, user, maxTokens: 8000 });
    const paper = extractJson(text);
    res.json(paper);
  } catch (err) {
    fail(res, err);
  }
});

// Mark one answer against its (hidden) mark scheme.
app.post('/api/grade', async (req, res) => {
  try {
    const question = cleanQuestion((req.body || {}).question);
    const answer = str((req.body || {}).answer, MAX_ANSWER_CHARS);

    const system = `You are a fair but rigorous nahw examiner marking a written answer against a mark scheme.
Award partial credit. Be specific about what earned marks and what was missing. Reward correct Arabic
examples and correct iʿrāb/tarkīb. Do not penalise minor transliteration choices. Never award more than the maximum.`;

    const user = `Mark this answer.

QUESTION (${question.marks} marks): ${question.promptEn}
${question.promptAr ? `Arabic shown to student: ${question.promptAr}` : ''}

MARK SCHEME (examiner-only): ${question.markScheme || '(none provided — judge against standard nahw knowledge)'}

STUDENT ANSWER:
${answer.trim() || '(left blank)'}

Return ONLY this JSON (no prose, no code fence):
{
  "awarded": <integer 0..${question.marks}>,
  "max": ${question.marks},
  "verdict": "strong | partial | weak | off",
  "feedback": "2-4 sentences of constructive feedback addressed to the student",
  "good": ["points the student got right"],
  "missing": ["key points the student missed or got wrong"]
}`;

    const text = await callClaude({ system, user, maxTokens: 1600 });
    const result = extractJson(text);
    result.max = question.marks;
    result.awarded = Math.max(0, Math.min(question.marks, Number(result.awarded) || 0));
    res.json(result);
  } catch (err) {
    fail(res, err);
  }
});

// Offer hints / a supporting explanation when the student is stuck or way off.
app.post('/api/help', async (req, res) => {
  try {
    const question = cleanQuestion((req.body || {}).question);
    const answer = str((req.body || {}).answer, MAX_ANSWER_CHARS);

    const system = `You are a warm, encouraging nahw tutor. Help the student think the question through.
Give graded hints that nudge without handing over the full answer. Keep it focused and supportive.`;

    const user = `The student needs help with this question.

QUESTION (${question.marks} marks): ${question.promptEn}
${question.promptAr ? `Arabic: ${question.promptAr}` : ''}
${answer.trim() ? `Their attempt so far:\n${answer.trim()}` : 'They have not written an answer yet.'}

Return ONLY this JSON (no prose, no code fence):
{
  "hints": ["2-4 progressively more concrete hints"],
  "explanation": "a short paragraph explaining the underlying concept, with a worked example",
  "encouragement": "one short encouraging line"
}`;

    const text = await callClaude({ system, user, maxTokens: 1400 });
    res.json(extractJson(text));
  } catch (err) {
    fail(res, err);
  }
});

// Bind to loopback only: the endpoints are unauthenticated and spend the local
// Claude login's quota, so they must not be reachable from the network.
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '127.0.0.1';
app.listen(PORT, HOST, () => {
  console.log(`\n  Daram Test Maker running → http://localhost:${PORT}/test-maker.html\n`);
});
