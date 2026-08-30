// One-off: reformat existing string-blob markSchemes into bullet arrays,
// WITHOUT touching content/facts (these chapters have no reader-transcribed
// source text for build-bank.mjs to regenerate from, so this is a pure
// restructure pass, not a content regen).
import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const READER = join(__dirname, '..');
const outPath = join(READER, 'questions-bank.js');

const MODEL = process.env.CLAUDE_MODEL || 'claude-opus-4-8';
const CLAUDE_BIN = process.env.CLAUDE_BIN || 'claude';
const NO_TOOLS = ['Bash', 'Edit', 'Write', 'Read', 'Glob', 'Grep', 'WebFetch', 'WebSearch', 'NotebookEdit', 'Task', 'TodoWrite'];

function callClaude({ system, user }) {
  return new Promise((resolve, reject) => {
    const args = ['-p', '--output-format', 'json', '--model', MODEL, '--strict-mcp-config'];
    if (system) args.push('--system-prompt', system);
    args.push('--disallowedTools', ...NO_TOOLS);
    const child = spawn(CLAUDE_BIN, args, { cwd: tmpdir(), env: process.env });
    let out = '', err = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (err += d));
    child.on('error', reject);
    child.on('close', (code) => {
      let env;
      try { env = JSON.parse(out); } catch {}
      if (env && typeof env.result === 'string' && !env.is_error) return resolve(env.result);
      reject(new Error((env && (env.result || env.error)) || err.trim() || out.trim() || `exit ${code}`));
    });
    child.stdin.write(user);
    child.stdin.end();
  });
}

function extractJson(text) {
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const start = t.search(/[[{]/);
  if (start === -1) throw new Error('No JSON found');
  const open = t[start], close = open === '{' ? '}' : ']';
  let depth = 0, inStr = false, esc = false, end = -1;
  for (let i = start; i < t.length; i++) {
    const c = t[i];
    if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === '"') inStr = false; }
    else if (c === '"') inStr = true;
    else if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) { end = i; break; } }
  }
  if (end === -1) throw new Error('Unbalanced JSON');
  const slice = t.slice(start, end + 1);
  try { return JSON.parse(slice); }
  catch { return JSON.parse(slice.replace(/,(\s*[}\]])/g, '$1')); }
}

const SYSTEM = `You reformat existing exam mark-scheme text into ADHD-friendly bullet arrays.
RULES — this is a pure RESTRUCTURE task, not a content-writing task:
- Do NOT change any fact, claim, example, or number. Do NOT add or remove information.
- Nahw/sarf technical terms should be in Arabic script — if the input already uses Arabic
  script for a term, keep it exactly. If a term appears ONLY as transliteration (e.g.
  "ḥarf al-jarr", "aṣlī"), convert it to its Arabic script equivalent (e.g. حرف الجر، الأصلي)
  since that is the correct house style; keep transliteration only as an optional one-time
  parenthetical gloss right after, never as the only form.
- Split the prose into short bullet strings: one idea/point per bullet, one short sentence each.
- Preserve any existing "Breakdown: n — reason; n — reason" mark allocation as separate bullets
  (one bullet per mark item), and the final line must be "Total: n marks".`;

function userPrompt(items) {
  return `Reformat each of these ${items.length} mark schemes into a bullet array. Return ONLY a JSON array
(no prose, no code fence) of ${items.length} objects, same order as input:
[{ "id": "<id>", "markScheme": ["bullet 1", "bullet 2", ..., "Total: n marks"] }]

--- INPUT ---
${JSON.stringify(items.map(({ id, marks, markScheme }) => ({ id, marks, markScheme })), null, 2)}`;
}

async function main() {
  const src = readFileSync(outPath, 'utf8');
  const m = src.match(/QUESTION_BANK\s*=\s*(\[[\s\S]*\]);/);
  const bank = JSON.parse(m[1]);

  const byChapter = {};
  for (const q of bank) {
    if (Array.isArray(q.markScheme)) continue;
    (byChapter[q.chapterId] ||= []).push(q);
  }

  const byId = new Map(bank.map((q) => [q.id, q]));
  for (const [chapterId, items] of Object.entries(byChapter)) {
    process.stdout.write(`• ${chapterId} (${items.length} entries) … `);
    const t0 = Date.now();
    try {
      let result;
      for (let attempt = 1; ; attempt++) {
        try { result = extractJson(await callClaude({ system: SYSTEM, user: userPrompt(items) })); break; }
        catch (e) { if (attempt >= 2) throw e; process.stdout.write('(retry) '); }
      }
      let applied = 0;
      for (const r of (Array.isArray(result) ? result : [])) {
        const q = byId.get(r.id);
        if (!q || !Array.isArray(r.markScheme) || !r.markScheme.length) continue;
        q.markScheme = r.markScheme.map((s) => String(s).trim()).filter(Boolean);
        applied++;
      }
      console.log(`${applied}/${items.length} reformatted  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
    } catch (e) {
      console.log(`FAILED — ${e.message}`);
    }
  }

  const header = `// Daram — pre-generated question bank.  DO NOT EDIT BY HAND.
// Built by test-maker/build-bank.mjs on ${new Date().toISOString()}.
// ${bank.length} questions across ${new Set(bank.map((q) => q.chapterId)).size} chapters.
// Each item: { id, chapterId, chapterAr, chapterEn, archetype, marks, promptEn, promptAr, markScheme }.
`;
  writeFileSync(outPath, `${header}const QUESTION_BANK =\n${JSON.stringify(bank, null, 2)};\n`);
  console.log(`\n✓ rewrote ${outPath}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
