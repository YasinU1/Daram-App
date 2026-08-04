// Question-bank shaping: archetypes, ids and ordering. Pure helpers so the
// offline builder (build-bank.mjs) stays a thin CLI around them.

// canonical mark value per archetype, taken from the Year 2 Term 1 paper
export const CANON_MARKS = {
  'explain-line': 5, 'state-types': 6, 'compare': 8, 'explain-statement': 15,
  'define-types-examples': 15, 'enumerate': 12, 'classify-tarkib': 9,
};
export const ARCHETYPES = Object.keys(CANON_MARKS);

export const slug = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Turn one model-generated pool into bank items, dropping anything that isn't a
// usable question. `offset` keeps ids unique across chapters within a run.
export function toBankItems(chapter, items, offset = 0) {
  const out = [];
  for (const it of (Array.isArray(items) ? items : [])) {
    const archetype = String((it && it.archetype) || '').trim();
    if (!ARCHETYPES.includes(archetype)) continue;
    if (!it.promptEn) continue;
    out.push({
      id: `${chapter.id}--${archetype}--${slug(it.promptEn).slice(0, 32)}-${(offset + out.length).toString(36)}`,
      chapterId: chapter.id, chapterAr: chapter.ar, chapterEn: chapter.en,
      archetype,
      marks: CANON_MARKS[archetype],   // pin to canonical so papers sum cleanly
      promptEn: String(it.promptEn).trim(),
      promptAr: String(it.promptAr || '').trim(),
      markScheme: String(it.markScheme || '').trim(),
    });
  }
  return out;
}

// Chapter order first (as listed in the registry), then archetype order.
export function sortBank(bank, chapterIds) {
  const rank = (id) => { const i = chapterIds.indexOf(id); return i === -1 ? chapterIds.length : i; };
  return bank.slice().sort((a, b) => rank(a.chapterId) - rank(b.chapterId)
    || ARCHETYPES.indexOf(a.archetype) - ARCHETYPES.indexOf(b.archetype));
}

// Read an existing questions-bank.js back into an array (best effort).
export function parseBankFile(source) {
  const m = String(source || '').match(/QUESTION_BANK\s*=\s*(\[[\s\S]*?\]);/);
  if (!m) return [];
  try { return JSON.parse(m[1]); } catch { return []; }
}

export function bankFileSource(bank, builtAt = new Date()) {
  const header = `// Daram — pre-generated question bank.  DO NOT EDIT BY HAND.
// Built by test-maker/build-bank.mjs on ${builtAt.toISOString()}.
// ${bank.length} questions across ${new Set(bank.map((q) => q.chapterId)).size} chapters.
// Each item: { id, chapterId, chapterAr, chapterEn, archetype, marks, promptEn, promptAr, markScheme }.
`;
  return `${header}const QUESTION_BANK =\n${JSON.stringify(bank, null, 2)};\n`;
}
