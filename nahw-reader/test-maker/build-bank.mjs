// Daram — Question Bank builder (offline, run on demand)
//
//   node build-bank.mjs            → (re)build the whole bank
//   node build-bank.mjs m1-bab-1   → rebuild only the listed chapter id(s)
//
// Drives the local Claude Code CLI (same auth as `claude`) to pre-generate a pool
// of exam questions per chapter, each tagged with its archetype, canonical marks
// and an examiner-only mark scheme. Writes ../questions-bank.js, which the
// test-maker page samples INSTANTLY (no LLM call) to assemble a paper.
//
// The questions don't need to be fresh every time — only the GRADING of a
// student's answer is per-attempt. So we generate once here and reuse forever.

import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import vm from 'node:vm';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnvFile } from './lib/env-file.mjs';
import { extractJson } from './lib/extract-json.mjs';
import { ARCHETYPES, CANON_MARKS, bankFileSource, parseBankFile, sortBank, toBankItems } from './lib/bank.mjs';
import blocksText from '../lib/blocks-text.js';

const { blocksToText } = blocksText;

const __dirname = dirname(fileURLToPath(import.meta.url));
const READER = join(__dirname, '..');

// ── minimal .env loader (mirror server.js) ────────────────────────────────────
loadEnvFile(join(__dirname, '.env'));
const MODEL = process.env.CLAUDE_MODEL || 'claude-opus-4-8';
const CLAUDE_BIN = process.env.CLAUDE_BIN || 'claude';
const NO_TOOLS = ['Bash', 'Edit', 'Write', 'Read', 'Glob', 'Grep', 'WebFetch', 'WebSearch', 'NotebookEdit', 'Task', 'TodoWrite'];

// ── chapter registry (mirrors CHAPTERS in test-maker.html) ────────────────────
const DATA_FILES = ['muqaddimah.js', 'muqaddimah-bab2.js', 'muqaddimah-bab3.js', 'maqsad1-muq.js', 'maqsad1-bab1.js', 'maqsad1-bab2.js']
  .map((f) => join('books', 'kubra-nahw', f));
const CHAPTERS = [
  { id: 'muq-bab-1', global: 'DATA',         group: 'المُقَدِّمَة',     ar: 'الباب الأول في الكلمة',                       en: 'The Word (al-kalimah)' },
  { id: 'muq-bab-2', global: 'DATA_BAB2',    group: 'المُقَدِّمَة',     ar: 'الباب الثاني في الجملة وشبه الجملة والكلام',  en: 'Sentence, quasi-sentence & speech' },
  { id: 'muq-bab-3', global: 'DATA_BAB3',    group: 'المُقَدِّمَة',     ar: 'الباب الثالث في العامل والمعمول والإعراب',    en: 'Governor, governed & iʿrāb' },
  { id: 'm1-muq',    global: 'DATA_M1_MUQ',  group: 'المَقْصِدُ الأوَّل', ar: 'المقدمة',                                    en: 'Introduction (Aim One)' },
  { id: 'm1-bab-1',  global: 'DATA_M1_BAB1', group: 'المَقْصِدُ الأوَّل', ar: 'الباب الأول في الفعل',                        en: 'The Verb' },
  { id: 'm1-bab-2',  global: 'DATA_M1_BAB2', group: 'المَقْصِدُ الأوَّل', ar: 'الباب الثاني في الحرف',                       en: 'The Particle' },
];

// ── load the DATA_* globals in one vm context (const ⇒ read via trailing expr) ─
function loadChapterData() {
  const src = DATA_FILES.map((f) => readFileSync(join(READER, f), 'utf8')).join('\n')
    + `\n;({ ${CHAPTERS.map((c) => c.global).join(', ')} })`;
  return vm.runInNewContext(src, {});
}

function callClaude({ system, user }) {
  return new Promise((resolve, reject) => {
    const args = ['-p', '--output-format', 'json', '--model', MODEL, '--strict-mcp-config'];
    if (system) args.push('--system-prompt', system);
    args.push('--disallowedTools', ...NO_TOOLS);
    const child = spawn(CLAUDE_BIN, args, { cwd: tmpdir(), env: process.env });
    let out = '', err = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (err += d));
    child.on('error', (e) => reject(e.code === 'ENOENT'
      ? new Error('`claude` CLI not found. Install Claude Code and run `claude login`, or set CLAUDE_BIN.') : e));
    child.on('close', (code) => {
      let env;
      try { env = JSON.parse(out); } catch { /* not the envelope */ }
      if (env && typeof env.result === 'string' && !env.is_error) return resolve(env.result);
      reject(new Error((env && (env.result || env.error)) || err.trim() || out.trim() || `claude exited with code ${code}`));
    });
    child.stdin.write(user);
    child.stdin.end();
  });
}

// ── generation prompt ─────────────────────────────────────────────────────────
const SYSTEM = `You write past-paper-style exam questions for a classical-Arabic grammar (نحو) course,
modelled exactly on the "Dar al-Ulum Oxford" Nahw (al-Kubrā) papers. House style:

- ALL questions are written/free-response (no multiple choice).
- Questions are drawn ONLY from the supplied chapter content. Never test material not present.
- Arabic (matn lines, terms, example sentences) carries full ḥarakāt where natural.
- For EACH question also produce a private mark scheme: the model answer plus how the marks break down.
  The mark scheme is examiner-only and must never be shown to the student.

The seven archetypes and their fixed mark values:
  explain-line (5)          — quote a matn line in Arabic, ask the student to explain it.
  state-types (6)           — state the types of X and, for each, a recognising علامة.
  compare (8)               — explain, with examples, the difference between two terms.
  explain-statement (15)    — quote a fuller rule/statement in Arabic, explain "as fully as possible, with examples".
  define-types-examples (15)— "What is X? What are its types? Give examples."
  enumerate (12)            — list/recall items with meanings (only if the chapter has an enumerable set).
  classify-tarkib (9)       — classify a word's category, then translate and give the tarkīb/iʿrāb of an Arabic sentence.`;

function userPrompt(chapter, text, marks) {
  return `Chapter: ${chapter.ar} (${chapter.en}).

Produce a POOL of exam questions drawn strictly from this chapter's content. For EACH archetype that the
content can GENUINELY support, write 1–2 distinct questions. Skip any archetype the chapter cannot support
honestly (e.g. "enumerate" only if there is a real enumerable set; "explain-line"/"explain-statement" only
for lines/rules that actually appear). Aim for roughly 8–12 questions total. Vary the lines/terms used.

Use exactly these mark values per archetype: ${JSON.stringify(marks)}.

Return ONLY a JSON array (no prose, no code fence) of objects of this exact shape:
[
  {
    "archetype": "one of: ${ARCHETYPES.join(' | ')}",
    "marks": <the canonical value for that archetype>,
    "promptEn": "the instruction to the student, in English",
    "promptAr": "Arabic matn line / statement / sentence to display, with ḥarakāt (empty string if none)",
    "markScheme": "model answer + brief breakdown of how the marks are awarded (examiner-only)"
  }
]

--- CHAPTER CONTENT ---
${text}`;
}

// ── main ──────────────────────────────────────────────────────────────────────
async function main() {
  const only = process.argv.slice(2);
  const targets = only.length ? CHAPTERS.filter((c) => only.includes(c.id)) : CHAPTERS;
  if (!targets.length) {
    console.error(`No matching chapter ids. Known: ${CHAPTERS.map((c) => c.id).join(', ')}`);
    process.exit(1);
  }

  const globals = loadChapterData();

  // start from the existing bank so a per-chapter rebuild only replaces its slice
  const outPath = join(READER, 'questions-bank.js');
  let bank = [];
  if (existsSync(outPath) && only.length) {
    bank = parseBankFile(readFileSync(outPath, 'utf8'))
      .filter((q) => !targets.some((t) => t.id === q.chapterId));
  }

  for (const c of targets) {
    const blocks = globals[c.global];
    const text = blocksToText(blocks);
    if (!text.trim()) { console.warn(`! ${c.id}: no text extracted, skipping`); continue; }
    process.stdout.write(`• ${c.id} (${c.en}) … `);
    const t0 = Date.now();
    try {
      // one retry: generation is stochastic, so a malformed-JSON run usually parses on a second pass.
      let items;
      for (let attempt = 1; ; attempt++) {
        try { items = extractJson(await callClaude({ system: SYSTEM, user: userPrompt(c, text, CANON_MARKS) })); break; }
        catch (e) { if (attempt >= 2) throw e; process.stdout.write('(retry) '); }
      }
      const fresh = toBankItems(c, items, bank.length);
      bank.push(...fresh);
      console.log(`${fresh.length} questions  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
    } catch (e) {
      console.log(`FAILED — ${e.message}`);
    }
  }

  bank = sortBank(bank, CHAPTERS.map((c) => c.id));
  writeFileSync(outPath, bankFileSource(bank));
  console.log(`\n✓ wrote ${bank.length} questions → ${outPath}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
