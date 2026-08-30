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

// ── chapter registry (mirrors CHAPTERS in test-maker.html — 13 chapters, kept in
//    lockstep with that file since bank.sort() and the merge-guard both key off
//    every real chapterId being present here, not just the ones this script can
//    still LLM-generate) ──────────────────────────────────────────────────────
const DATA_FILES = [
  'muqaddimah.js', 'muqaddimah-bab2.js', 'muqaddimah-bab3.js',
  'maqsad1-muq.js', 'maqsad1-bab1.js', 'maqsad1-bab2.js',
  'maqsad2a.js', 'maqsad2b.js',
].map((f) => join('books', 'kubra-nahw', f));
// Fixed list of the DATA_* globals each DATA_FILES entry declares, in file order — loadChapterData()
// grabs exactly these out of the vm context; CHAPTERS below reads them via each entry's own blocks(g).
const DATA_GLOBALS = ['DATA', 'DATA_BAB2', 'DATA_BAB3', 'DATA_M1_MUQ', 'DATA_M1_BAB1', 'DATA_M1_BAB2', 'DATA_M2A', 'DATA_M2B'];
const CHAPTERS = [
  { id: 'muq-bab-1',  blocks: (g) => g.DATA,         group: 'المُقَدِّمَة',       ar: 'الباب الأول في الكلمة',                       en: 'The Word (al-kalimah)' },
  { id: 'muq-bab-2',  blocks: (g) => g.DATA_BAB2,    group: 'المُقَدِّمَة',       ar: 'الباب الثاني في الجملة وشبه الجملة والكلام',  en: 'Sentence, quasi-sentence & speech' },
  { id: 'muq-bab-3',  blocks: (g) => g.DATA_BAB3,    group: 'المُقَدِّمَة',       ar: 'الباب الثالث في العامل والمعمول والإعراب',    en: 'Governor, governed & iʿrāb' },
  { id: 'm1-muq',     blocks: (g) => g.DATA_M1_MUQ,  group: 'المَقْصِدُ الأوَّل',   ar: 'المقدمة',                                    en: 'Introduction (Aim One)' },
  { id: 'm1-bab-1a',  blocks: (g) => g.DATA_M1_BAB1.slice(0, 10),    group: 'المَقْصِدُ الأوَّل',   ar: 'القياسي: اللازم',                            en: 'The Regular Verb I — intransitive (lāzim)' },
  { id: 'm1-bab-1b',  blocks: (g) => g.DATA_M1_BAB1.slice(10, 66),   group: 'المَقْصِدُ الأوَّل',   ar: 'القياسي: المتعدي',                           en: 'The Regular Verb II — transitive (mutaʿaddī)' },
  { id: 'm1-bab-1c',  blocks: (g) => g.DATA_M1_BAB1.slice(66, 133),  group: 'المَقْصِدُ الأوَّل',   ar: 'السماعي: الأفعال الناقصة',                   en: 'The Heard Verb I — defective verbs' },
  { id: 'm1-bab-1d',  blocks: (g) => g.DATA_M1_BAB1.slice(133, 149), group: 'المَقْصِدُ الأوَّل',   ar: 'أفعال المدح والذم',                          en: 'Verbs of Praise & Blame' },
  { id: 'm1-bab-1e',  blocks: (g) => g.DATA_M1_BAB1.slice(149),      group: 'المَقْصِدُ الأوَّل',   ar: 'صيغ التعجب',                                 en: 'Forms of Wonder (taʿajjub)' },
  { id: 'm1-bab-2',   blocks: (g) => g.DATA_M1_BAB2, group: 'المَقْصِدُ الأوَّل',   ar: 'الباب الثاني في الحرف',                       en: 'The Particle' },
  { id: 'm1-bab-3',   blocks: () => [],              group: 'المَقْصِدُ الأوَّل',   ar: 'الباب الثالث في الاسم',                       en: 'The Noun' },
  { id: 'm1-kh',      blocks: () => [],              group: 'المَقْصِدُ الأوَّل',   ar: 'خاتمة المقصد الأول: التنازع وحذف العامل',    en: 'Aim One Epilogue — tanāzuʿ & the deleted governor' },
  { id: 'm2-bab-1',   blocks: (g) => [...g.DATA_M2A, ...g.DATA_M2B.slice(0, 74)], group: 'المَقْصِدُ الثاني', ar: 'الباب الأول في الاسم (إلى نهاية المستثنى)', en: 'Aim Two, Bab One — up to the end of the Mustathnā' },
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
    + `\n;({ ${DATA_GLOBALS.join(', ')} })`;
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
- Mark schemes are written in ENGLISH PROSE with Arabic dropped in only for: technical
  grammar terms (اسم فاعل، حرف الجر، الأصلي — never transliterated, e.g. not "ḥarf al-jarr"),
  quoted matn words/phrases, and iʿrāb labels. Do NOT write whole explanatory clauses or
  sentences in Arabic — the reasoning, connective words ("because", "since", "note that"),
  and grammar-in-English go in English; only the term/word being discussed switches to Arabic
  script, inline, the way a bilingual textbook glosses a term. Every bullet should read as an
  English sentence with Arabic terms embedded, not an Arabic sentence with English embedded.
- For EACH question also produce a private mark scheme: the model answer PLUS how the marks
  break down. The mark scheme is examiner-only and must never be shown to the student. It is
  an ARRAY of short bullet strings, never one paragraph — each entry is one idea/point, one
  short sentence; the last entry is "Total: n marks".

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
    "markScheme": ["array of 3-7 short bullet strings (examiner-only): model answer points then mark breakdown, nahw/sarf terms in Arabic script not transliteration, last string is 'Total: n marks'"]
  }
]

--- CHAPTER CONTENT ---
${text}`;
}

// ── main ──────────────────────────────────────────────────────────────────────
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function main() {
  const only = process.argv.slice(2);
  const explicit = only.length > 0;
  const targets = explicit ? CHAPTERS.filter((c) => only.includes(c.id)) : CHAPTERS;
  if (!targets.length) {
    console.error(`No matching chapter ids. Known: ${CHAPTERS.map((c) => c.id).join(', ')}`);
    process.exit(1);
  }

  const globals = loadChapterData();

  const outPath = join(READER, 'questions-bank.js');
  let bank = [];
  if (existsSync(outPath)) {
    const m = readFileSync(outPath, 'utf8').match(/QUESTION_BANK\s*=\s*(\[[\s\S]*?\]);/);
    if (m) { try { bank = JSON.parse(m[1]); } catch { /* ignore, rebuild clean */ } }
  }

  // The whole bank is now hand-authored/hand-maintained (see its own header comment) — an
  // implicit no-arg run must never silently discard that by re-running the LLM over every
  // chapter. Only chapters named explicitly on the CLI are allowed to be wiped-and-regenerated;
  // a no-arg run just re-sorts/re-writes the file as-is (still useful after hand-edits).
  const regenTargets = explicit
    ? targets
    : targets.filter((c) => !bank.some((q) => q.chapterId === c.id));
  if (!explicit && regenTargets.length < targets.length) {
    console.log(`No chapter ids given — leaving ${targets.length - regenTargets.length} chapter(s) with existing (hand-authored) bank content untouched.`);
    console.log(`Pass a chapter id explicitly (e.g. \`node build-bank.mjs ${targets[0].id}\`) to force-regenerate one via the LLM.\n`);
  }
  bank = bank.filter((q) => !regenTargets.some((t) => t.id === q.chapterId));

  for (const c of regenTargets) {
    const blocks = c.blocks(globals);
    if (!blocks.length) { console.warn(`! ${c.id}: no reader-transcribed source, skipping (bank-only chapter)`); continue; }
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
      let added = 0;
      for (const it of (Array.isArray(items) ? items : [])) {
        const arch = String(it.archetype || '').trim();
        if (!ARCHETYPES.includes(arch)) continue;
        if (!it.promptEn) continue;
        bank.push({
          id: `${c.id}--${arch}--${slug(it.promptEn).slice(0, 32)}-${(bank.length + added).toString(36)}`,
          chapterId: c.id, chapterAr: c.ar, chapterEn: c.en,
          archetype: arch,
          marks: CANON_MARKS[arch],            // pin to canonical so papers sum cleanly
          promptEn: String(it.promptEn).trim(),
          promptAr: String(it.promptAr || '').trim(),
          markScheme: Array.isArray(it.markScheme)
            ? it.markScheme.map((s) => String(s).trim()).filter(Boolean)
            : String(it.markScheme || '').trim(),
        });
        added++;
      }
      console.log(`${added} questions  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
    } catch (e) {
      console.log(`FAILED — ${e.message}`);
    }
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
}

main().catch((e) => { console.error(e); process.exit(1); });
