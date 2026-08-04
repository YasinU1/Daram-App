/* Daram — practice-paper assembly from the pre-generated question bank.
   Shared by test-maker.html (browser, as window.DaramPaper) and the tests. */

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = api;
  else root.DaramPaper = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // The Year 2 Term 1 template: archetype order + canonical marks.
  const TEMPLATE = [
    { archetype: 'explain-line', marks: 5 },
    { archetype: 'state-types', marks: 6 },
    { archetype: 'compare', marks: 8 },
    { archetype: 'explain-statement', marks: 15 },
    { archetype: 'define-types-examples', marks: 15 },
    { archetype: 'enumerate', marks: 12 },
    { archetype: 'classify-tarkib', marks: 9 },
  ];

  function shuffleInPlace(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  // Marks a freshly generated paper of `want` questions should add up to.
  function templateMarks(want) {
    return TEMPLATE.slice(0, want).reduce((a, s) => a + s.marks, 0) || 70;
  }

  function paperTitle(ids, chapters) {
    const one = ids.length === 1 ? (chapters || []).find((c) => c.id === ids[0]) : null;
    const what = ids.length === 1 ? (one && one.en) || 'selected chapter' : ids.length + ' chapters';
    return `Practice Paper — ${what}`;
  }

  // Assemble a paper INSTANTLY by sampling the bank to fit the template.
  function assemblePaper({ bank = [], ids = [], want = 7, chapters = [], shuffle = shuffleInPlace } = {}) {
    const pool = bank.filter((q) => ids.includes(q.chapterId));
    const byArch = {};
    for (const q of pool) (byArch[q.archetype] || (byArch[q.archetype] = [])).push(q);
    Object.values(byArch).forEach(shuffle);
    const used = new Set();
    const picked = [];
    // 1) follow the template order, one question per archetype slot
    for (const slot of TEMPLATE) {
      const cand = (byArch[slot.archetype] || []).find((q) => !used.has(q.id));
      if (cand) { used.add(cand.id); picked.push(cand); if (picked.length >= want) break; }
    }
    // 2) if the chapters can't fill the template, top up with any unused questions
    if (picked.length < want) {
      for (const q of shuffle(pool.slice())) {
        if (used.has(q.id)) continue;
        used.add(q.id);
        picked.push(q);
        if (picked.length >= want) break;
      }
    }
    return {
      title: paperTitle(ids, chapters),
      questions: picked.map((q, i) => ({ n: i + 1, type: q.archetype, marks: q.marks, promptEn: q.promptEn, promptAr: q.promptAr, markScheme: q.markScheme })),
    };
  }

  return { TEMPLATE, assemblePaper, paperTitle, templateMarks, shuffle: shuffleInPlace };
});
