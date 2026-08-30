// One-off: ADD more questions to four chapters whose existing pool is exhausted
// (m1-bab-2, m1-bab-3, m1-kh, m2-bab-1) WITHOUT wiping what's already there.
//
// m1-bab-2 and m2-bab-1 have real reader-transcribed source (books/kubra-nahw/*.js).
// m1-bab-3 and m1-kh have no reader transcription yet (BOOK_PROGRESS.md: pp.104-130
// still ⬜) — their source text is pulled from the Daram Learn lesson files instead
// (learn/lessons/m1-bab3a.js, m1-bab3b.js, m1-khatima.js), which already carry
// page-cited, book-derived content authored straight from the PDF.
//
//   node add-more-bank.mjs                 → append to all 4 chapters
//   node add-more-bank.mjs m1-bab-3 m1-kh  → append to just these

import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import vm from 'node:vm';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const READER = join(__dirname, '..');
const LEARN = join(READER, 'learn');
const outPath = join(READER, 'questions-bank.js');

const MODEL = process.env.CLAUDE_MODEL || 'claude-opus-4-8';
const CLAUDE_BIN = process.env.CLAUDE_BIN || 'claude';
const NO_TOOLS = ['Bash', 'Edit', 'Write', 'Read', 'Glob', 'Grep', 'WebFetch', 'WebSearch', 'NotebookEdit', 'Task', 'TodoWrite'];

// ── reader-source chapters (mirrors build-bank.mjs) ────────────────────────────
const DATA_FILES = ['muqaddimah.js', 'muqaddimah-bab2.js', 'muqaddimah-bab3.js', 'maqsad1-muq.js', 'maqsad1-bab1.js', 'maqsad1-bab2.js', 'maqsad2a.js', 'maqsad2b.js']
  .map((f) => join('books', 'kubra-nahw', f));
const DATA_GLOBALS = ['DATA', 'DATA_BAB2', 'DATA_BAB3', 'DATA_M1_MUQ', 'DATA_M1_BAB1', 'DATA_M1_BAB2', 'DATA_M2A', 'DATA_M2B'];
function loadReaderGlobals() {
  const src = DATA_FILES.map((f) => readFileSync(join(READER, f), 'utf8')).join('\n')
    + `\n;({ ${DATA_GLOBALS.join(', ')} })`;
  return vm.runInNewContext(src, {});
}
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

// ── learn-lesson-source chapters (m1-bab-3, m1-kh: no reader transcription yet) ─
function loadLearnCourse(file) {
  const ctx = { window: { DARAM_COURSES: [] } };
  vm.createContext(ctx);
  vm.runInContext(readFileSync(join(LEARN, 'lessons', file), 'utf8'), ctx);
  return ctx.window.DARAM_COURSES[0];
}
function courseToText(course) {
  const out = [`\n# ${course.titleAr}  (${course.titleEn})`];
  for (const sec of course.sections || []) {
    out.push(`\n## ${sec.title || ''}${sec.subtitle ? '  — ' + sec.subtitle : ''}`);
    for (const step of sec.steps || []) {
      if (step.t === 'teach') {
        out.push(`### ${step.title || ''}${step.page ? ' (p.' + step.page + ')' : ''}`);
        if (step.ar) out.push(`${step.ar}${step.arEn ? '  — ' + step.arEn : ''}`);
        if (step.body) out.push(step.body);
        for (const p of step.points || []) out.push(`- ${p}`);
        if (step.after) out.push(step.after);
      } else if (step.t === 'written') {
        out.push(`[Summary] ${step.model}`);
      }
    }
  }
  return out.join('\n');
}

// ── chapter registry for this run ──────────────────────────────────────────────
const CHAPTERS = [
  {
    id: 'm1-bab-2', ar: 'الباب الثاني في الحرف', en: 'The Particle',
    text: (g) => blocksToText(g.DATA_M1_BAB2),
  },
  {
    id: 'm1-bab-3', ar: 'الباب الثالث في الاسم', en: 'The Noun',
    text: () => [courseToText(loadLearnCourse('m1-bab3a.js')), courseToText(loadLearnCourse('m1-bab3b.js'))].join('\n'),
  },
  {
    id: 'm1-kh', ar: 'خاتمة المقصد الأول: التنازع وحذف العامل', en: 'Aim One Epilogue — tanāzuʿ & the deleted governor',
    text: () => courseToText(loadLearnCourse('m1-khatima.js')),
  },
  {
    id: 'm2-bab-1', ar: 'الباب الأول في الاسم (إلى نهاية المستثنى)', en: 'Aim Two, Bab One — up to the end of the Mustathnā',
    text: (g) => blocksToText([...g.DATA_M2A, ...g.DATA_M2B.slice(0, 74)]),
  },
];

const CANON_MARKS = {
  'explain-line': 5, 'state-types': 6, 'compare': 8, 'explain-statement': 15,
  'define-types-examples': 15, 'enumerate': 12, 'classify-tarkib': 9,
};
const ARCHETYPES = Object.keys(CANON_MARKS);

function extractJson(text) {
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const start = t.search(/[[{]/);
  if (start === -1) throw new Error('No JSON found in model response');
  const open = t[start], close = open === '{' ? '}' : ']';
  let depth = 0, inStr = false, esc = false, end = -1;
  for (let i = start; i < t.length; i++) {
    const c = t[i];
    if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === '"') inStr = false; }
    else if (c === '"') inStr = true;
    else if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) { end = i; break; } }
  }
  if (end === -1) throw new Error('Unbalanced JSON in model response');
  const slice = t.slice(start, end + 1);
  try { return JSON.parse(slice); }
  catch { return JSON.parse(slice.replace(/,(\s*[}\]])/g, '$1')); }
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

function userPrompt(chapter, text, marks, existingPrompts, archetypes) {
  const focused = archetypes.length < ARCHETYPES.length;
  return `Chapter: ${chapter.ar} (${chapter.en}).

Produce a NEW POOL of exam questions drawn strictly from this chapter's content, additional to an
existing pool the student has already worked through. ${focused
      ? `ONLY write questions of these archetypes: ${archetypes.join(', ')}. Write 2–3 distinct NEW
questions per archetype listed (skip an archetype only if the chapter genuinely cannot support it).`
      : `For EACH archetype that the content can GENUINELY support, write 1–2 distinct NEW questions.
Skip any archetype the chapter cannot support honestly. Aim for roughly 8–12 questions total.`}
Vary the lines/terms used.

Use exactly these mark values per archetype: ${JSON.stringify(marks)}.

Do NOT repeat or closely rephrase any of these ${existingPrompts.length} questions already in the bank:
${existingPrompts.map((p, i) => `${i + 1}. ${p}`).join('\n')}

Return ONLY a JSON array (no prose, no code fence) of objects of this exact shape:
[
  {
    "archetype": "one of: ${archetypes.join(' | ')}",
    "marks": <the canonical value for that archetype>,
    "promptEn": "the instruction to the student, in English",
    "promptAr": "Arabic matn line / statement / sentence to display, with ḥarakāt (empty string if none)",
    "markScheme": ["array of 3-7 short bullet strings (examiner-only): model answer points then mark breakdown, nahw/sarf terms in Arabic script not transliteration, last string is 'Total: n marks'"]
  }
]

--- CHAPTER CONTENT ---
${text}`;
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function main() {
  const only = process.argv.slice(2);
  const targets = only.length ? CHAPTERS.filter((c) => only.includes(c.id)) : CHAPTERS;
  if (!targets.length) {
    console.error(`No matching chapter ids. Known: ${CHAPTERS.map((c) => c.id).join(', ')}`);
    process.exit(1);
  }

  const archetypes = process.env.ONLY_ARCHETYPES
    ? process.env.ONLY_ARCHETYPES.split(',').map((s) => s.trim()).filter((a) => ARCHETYPES.includes(a))
    : ARCHETYPES;
  const marks = Object.fromEntries(archetypes.map((a) => [a, CANON_MARKS[a]]));

  const src = readFileSync(outPath, 'utf8');
  const m = src.match(/QUESTION_BANK\s*=\s*(\[[\s\S]*\]);/);
  const bank = JSON.parse(m[1]);

  const readerGlobals = loadReaderGlobals();

  for (const c of targets) {
    const text = c.text(readerGlobals);
    if (!text.trim()) { console.warn(`! ${c.id}: no text extracted, skipping`); continue; }
    const existingPrompts = bank.filter((q) => q.chapterId === c.id).map((q) => q.promptEn);
    process.stdout.write(`• ${c.id} (${c.en}) — ${existingPrompts.length} existing … `);
    const t0 = Date.now();
    try {
      let items;
      for (let attempt = 1; ; attempt++) {
        try { items = extractJson(await callClaude({ system: SYSTEM, user: userPrompt(c, text, marks, existingPrompts, archetypes) })); break; }
        catch (e) { if (attempt >= 2) throw e; process.stdout.write('(retry) '); }
      }
      let added = 0;
      for (const it of (Array.isArray(items) ? items : [])) {
        const arch = String(it.archetype || '').trim();
        if (!archetypes.includes(arch)) continue;
        if (!it.promptEn) continue;
        bank.push({
          id: `${c.id}--${arch}--${slug(it.promptEn).slice(0, 32)}-${(bank.length).toString(36)}`,
          chapterId: c.id, chapterAr: c.ar, chapterEn: c.en,
          archetype: arch,
          marks: CANON_MARKS[arch],
          promptEn: String(it.promptEn).trim(),
          promptAr: String(it.promptAr || '').trim(),
          markScheme: Array.isArray(it.markScheme)
            ? it.markScheme.map((s) => String(s).trim()).filter(Boolean)
            : String(it.markScheme || '').trim(),
        });
        added++;
      }
      console.log(`+${added} questions  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
    } catch (e) {
      console.log(`FAILED — ${e.message}`);
    }
  }

  const ORDER = ['muq-bab-1', 'muq-bab-2', 'muq-bab-3', 'm1-muq', 'm1-bab-1a', 'm1-bab-1b', 'm1-bab-1c', 'm1-bab-1d', 'm1-bab-1e', 'm1-bab-2', 'm1-bab-3', 'm1-kh', 'm2-bab-1'];
  bank.sort((a, b) => ORDER.indexOf(a.chapterId) - ORDER.indexOf(b.chapterId)
    || ARCHETYPES.indexOf(a.archetype) - ARCHETYPES.indexOf(b.archetype));

  const header = `// Daram — pre-generated question bank.  DO NOT EDIT BY HAND.
// Built by test-maker/build-bank.mjs (+ add-more-bank.mjs) on ${new Date().toISOString()}.
// ${bank.length} questions across ${new Set(bank.map((q) => q.chapterId)).size} chapters.
// Each item: { id, chapterId, chapterAr, chapterEn, archetype, marks, promptEn, promptAr, markScheme }.
`;
  writeFileSync(outPath, `${header}const QUESTION_BANK =\n${JSON.stringify(bank, null, 2)};\n`);
  console.log(`\n✓ wrote ${bank.length} questions → ${outPath}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
