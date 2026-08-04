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

const __dirname = dirname(fileURLToPath(import.meta.url));
const READER = join(__dirname, '..');

// ── minimal .env loader (mirror server.js) ────────────────────────────────────
const envPath = join(__dirname, '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
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

// canonical mark value per archetype, taken from the Year 2 Term 1 paper
const CANON_MARKS = {
  'explain-line': 5, 'state-types': 6, 'compare': 8, 'explain-statement': 15,
  'define-types-examples': 15, 'enumerate': 12, 'classify-tarkib': 9,
};
const ARCHETYPES = Object.keys(CANON_MARKS);

// ── load the DATA_* globals in one vm context (const ⇒ read via trailing expr) ─
function loadChapterData() {
  const src = DATA_FILES.map((f) => readFileSync(join(READER, f), 'utf8')).join('\n')
    + `\n;({ ${CHAPTERS.map((c) => c.global).join(', ')} })`;
  return vm.runInNewContext(src, {});
}

// ── block → compact text (copied verbatim from test-maker.html) ───────────────
function tokLine(w) {
  const ar = (w || []).filter((t) => t && t.a).map((t) => t.a).join(' ');
  const en = (w || []).filter((t) => t && t.e).map((t) => t.e).join(' ');
  return { ar, en };
}
function deepText(v) {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) return v.map(deepText).filter(Boolean).join(' ');
  if (typeof v === 'object') {
    const parts = [];
    for (const k of ['a', 'e', 'ar', 'en', 'label', 'labelEn', 'text', 'caption']) if (typeof v[k] === 'string') parts.push(v[k]);
    for (const k of Object.keys(v)) if (Array.isArray(v[k])) parts.push(deepText(v[k]));
    return parts.join(' ');
  }
  return '';
}
function blocksToText(blocks) {
  const out = [];
  for (const b of (blocks || [])) {
    if (!b || typeof b !== 'object') continue;
    switch (b.t) {
      case 'page': break;
      case 'h1': out.push(`\n# ${b.ar || ''}${b.en ? '  (' + b.en + ')' : ''}`); break;
      case 'h2': out.push(`\n## ${b.ar || ''}${b.en ? '  (' + b.en + ')' : ''}`); break;
      case 'line': { const { ar, en } = tokLine(b.w); if (ar) out.push(`${ar}${en ? '  — ' + en : ''}`); break; }
      case 'box': {
        out.push(`[${b.label || ''}${b.labelEn ? ' / ' + b.labelEn : ''}]`);
        (b.lines || []).forEach((ln) => { const { ar, en } = tokLine(ln); if (ar) out.push(`  ${ar}${en ? '  — ' + en : ''}`); });
        break;
      }
      case 'table': {
        if (b.head) out.push(`[table: ${[].concat(b.head).join(' | ')}]`);
        (b.rows || []).forEach((r) => out.push('  ' + [].concat(r).join(' | ')));
        break;
      }
      default: { const s = deepText(b); if (s) out.push(s); }
    }
  }
  return out.join('\n');
}

// ── JSON extraction (copied from server.js) ───────────────────────────────────
function extractJson(text) {
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const start = t.search(/[[{]/);
  if (start === -1) throw new Error('No JSON found in model response');
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
  const slice = t.slice(start, end + 1);
  try { return JSON.parse(slice); }
  catch (e) {
    // common model glitch: a trailing comma before } or ]. Strip and retry once.
    const repaired = slice.replace(/,(\s*[}\]])/g, '$1');
    return JSON.parse(repaired);
  }
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
    // Writing the prompt to a child that never started (or already exited) fails on
    // stdin; unhandled that would kill the build instead of reporting the chapter.
    child.stdin.on('error', (e) => { if (e.code !== 'EPIPE') reject(e); });
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
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function main() {
  const only = process.argv.slice(2);
  const targets = only.length ? CHAPTERS.filter((c) => only.includes(c.id)) : CHAPTERS;
  if (!targets.length) {
    console.error(`No matching chapter ids. Known: ${CHAPTERS.map((c) => c.id).join(', ')}`);
    process.exit(1);
  }

  const globals = loadChapterData();

  // The whole file is rewritten every run, so the existing questions of every chapter
  // are kept per chapter and only replaced once that chapter regenerates successfully.
  const outPath = join(READER, 'questions-bank.js');
  const byChapter = new Map();
  if (existsSync(outPath)) {
    const m = readFileSync(outPath, 'utf8').match(/QUESTION_BANK\s*=\s*(\[[\s\S]*?\]);/);
    const unreadable = (why) => {
      // A partial rebuild would silently drop every chapter it was not asked to build.
      if (only.length) throw new Error(`${why} in ${outPath}. Rebuild the whole bank (no chapter ids) to recreate it.`);
      console.warn(`! ${why} — rebuilding from scratch.`);
    };
    if (!m) unreadable('Could not find QUESTION_BANK');
    else {
      let parsed = null;
      try { parsed = JSON.parse(m[1]); }
      catch (e) { unreadable(`QUESTION_BANK is not valid JSON (${e.message})`); }
      for (const q of (parsed || [])) {
        if (!byChapter.has(q.chapterId)) byChapter.set(q.chapterId, []);
        byChapter.get(q.chapterId).push(q);
      }
    }
  }

  const failed = [];
  for (const c of targets) {
    const kept = byChapter.get(c.id) || [];
    const keepNote = kept.length ? ` — keeping the ${kept.length} question(s) already in the bank` : '';
    const blocks = globals[c.global];
    const text = blocksToText(blocks);
    if (!text.trim()) {
      console.warn(`! ${c.id}: no text extracted, skipping${keepNote}`);
      failed.push(`${c.id}: no text extracted from ${c.global}`);
      continue;
    }
    process.stdout.write(`• ${c.id} (${c.en}) … `);
    const t0 = Date.now();
    try {
      // one retry: generation is stochastic, so a malformed-JSON run usually parses on a second pass.
      let items;
      for (let attempt = 1; ; attempt++) {
        try { items = extractJson(await callClaude({ system: SYSTEM, user: userPrompt(c, text, CANON_MARKS) })); break; }
        catch (e) { if (attempt >= 2) throw e; process.stdout.write('(retry) '); }
      }
      const produced = [];
      for (const it of (Array.isArray(items) ? items : [])) {
        const arch = String(it.archetype || '').trim();
        if (!ARCHETYPES.includes(arch)) continue;
        if (!it.promptEn) continue;
        produced.push({
          id: `${c.id}--${arch}--${slug(it.promptEn).slice(0, 32)}-${produced.length.toString(36)}`,
          chapterId: c.id, chapterAr: c.ar, chapterEn: c.en,
          archetype: arch,
          marks: CANON_MARKS[arch],            // pin to canonical so papers sum cleanly
          promptEn: String(it.promptEn).trim(),
          promptAr: String(it.promptAr || '').trim(),
          markScheme: String(it.markScheme || '').trim(),
        });
      }
      // A reply we could parse but got nothing usable out of is a failure, not an
      // instruction to empty the chapter.
      if (!produced.length) throw new Error('the model returned no usable questions');
      byChapter.set(c.id, produced);
      console.log(`${produced.length} questions  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
    } catch (e) {
      console.log(`FAILED — ${e.message}${keepNote}`);
      failed.push(`${c.id}: ${e.message}`);
    }
  }

  const bank = [...byChapter.values()].flat();

  const report = () => {
    if (!failed.length) return;
    console.error(`\n✗ ${failed.length} of ${targets.length} chapters did not build:`);
    for (const f of failed) console.error(`  - ${f}`);
    process.exitCode = 1;
  };

  // Never replace a usable bank with an empty one just because every call failed.
  if (!bank.length) {
    console.error('\n✗ nothing to write — leaving the existing bank untouched.');
    report();
    process.exitCode = 1;
    return;
  }

  bank.sort((a, b) => CHAPTERS.findIndex((c) => c.id === a.chapterId) - CHAPTERS.findIndex((c) => c.id === b.chapterId)
    || ARCHETYPES.indexOf(a.archetype) - ARCHETYPES.indexOf(b.archetype));

  const header = `// Daram — pre-generated question bank.  DO NOT EDIT BY HAND.
// Built by test-maker/build-bank.mjs on ${new Date().toISOString()}.
// ${bank.length} questions across ${new Set(bank.map((q) => q.chapterId)).size} chapters.
// Each item: { id, chapterId, chapterAr, chapterEn, archetype, marks, promptEn, promptAr, markScheme }.
`;
  writeFileSync(outPath, `${header}const QUESTION_BANK =\n${JSON.stringify(bank, null, 2)};\n`);
  console.log(`\n✓ wrote ${bank.length} questions → ${outPath}`);

  // The file is still written (the chapters that worked are worth keeping) but an
  // incomplete build must not look like a clean one.
  report();
}

main().catch((e) => { console.error(e); process.exit(1); });
