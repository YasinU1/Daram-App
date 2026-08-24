import m01 from './module-01.js';
import m02 from './module-02.js';
import m03 from './module-03.js';
import m04 from './module-04.js';
import m05 from './module-05.js';
import m06 from './module-06.js';
import m07 from './module-07.js';
import m08 from './module-08.js';
import m09 from './module-09.js';
import m10 from './module-10.js';
import m11 from './module-11.js';
import m12 from './module-12.js';
import m13 from './module-13.js';
import m14 from './module-14.js';
import m15 from './module-15.js';
import m16 from './module-16.js';
import m17 from './module-17.js';
import m18 from './module-18.js';

export const MODULES = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15, m16, m17, m18];

// Fraction of quiz questions that must be correct to unlock a lesson's drills.
export const QUIZ_PASS_RATIO = 0.8;

export function getModule(moduleId) {
  return MODULES.find((m) => m.id === moduleId);
}

export function getLesson(moduleId, lessonId) {
  const mod = getModule(moduleId);
  return mod && mod.lessons.find((l) => l.id === lessonId);
}

export function moduleIndex(moduleId) {
  return MODULES.findIndex((m) => m.id === moduleId);
}

export function lessonIndex(moduleId, lessonId) {
  const mod = getModule(moduleId);
  return mod.lessons.findIndex((l) => l.id === lessonId);
}

export function isLessonComplete(moduleId, lessonId, completed) {
  return !!(completed[moduleId] && completed[moduleId][lessonId]);
}

// All lessons are unlocked regardless of progress.
export function isLessonUnlocked(moduleId, lessonId, completed) {
  return true;
}

export function completedCount(moduleId, completed) {
  const mod = getModule(moduleId);
  const done = completed[moduleId] || {};
  return mod.lessons.filter((l) => done[l.id]).length;
}

export function isModuleComplete(moduleId, completed) {
  const mod = getModule(moduleId);
  return completedCount(moduleId, completed) === mod.lessons.length;
}

// All modules are unlocked regardless of progress.
export function isModuleUnlocked(moduleId, completed) {
  return true;
}

export function totalLessonsCleared(completed) {
  return MODULES.reduce((sum, m) => sum + completedCount(m.id, completed), 0);
}

export function totalLessons() {
  return MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
}

export function conceptKey(moduleId, lessonId, conceptIndex) {
  return `${moduleId}_${lessonId}_c${conceptIndex}`;
}

export function bankKey(moduleId, lessonId, bankIndex) {
  return `${moduleId}_${lessonId}_b${bankIndex}`;
}

export function isConceptExercisePassed(lesson, idx, exStates, moduleId, lessonId) {
  const concept = lesson.concepts[idx];
  if (!concept || !concept.exercise) return true;
  return !!(exStates[conceptKey(moduleId, lessonId, idx)] || {}).passed;
}

// How many concepts the lesson page renders: every consecutively-passed
// concept plus the one the learner is working on. Derived from exStates on
// every render rather than stored, so it can never drift out of sync.
export function conceptsToRender(lesson, exStates, moduleId, lessonId) {
  let leading = 0;
  while (leading < lesson.concepts.length
    && isConceptExercisePassed(lesson, leading, exStates, moduleId, lessonId)) {
    leading += 1;
  }
  return Math.min(leading + 1, lesson.concepts.length);
}

export function areAllConceptsPassed(lesson, exStates, moduleId, lessonId) {
  return lesson.concepts.every((_, i) => isConceptExercisePassed(lesson, i, exStates, moduleId, lessonId));
}

export function isQuizPassed(moduleId, lessonId, quizScores) {
  const score = (quizScores[moduleId] && quizScores[moduleId][lessonId]) || null;
  if (!score) return false;
  return score.correct / score.total >= QUIZ_PASS_RATIO;
}

// A lesson is "concepts, then quiz" -- the progress tag on a lesson card
// counts cleared concept exercises only.
export function lessonProgress(lesson, exStates, moduleId, lessonId) {
  let done = 0;
  lesson.concepts.forEach((_, i) => {
    if (isConceptExercisePassed(lesson, i, exStates, moduleId, lessonId)) done += 1;
  });
  return { done, total: lesson.concepts.length };
}

// --- Concept prose --------------------------------------------------------
// A concept's `body` is authored as one prose string but renders as one <p>
// per sentence, for breathing room on the combined lesson page. The split
// lives here so content files stay readable prose; a concept can also
// author a `lines` array directly to override the automatic split.

// Words that end in a period without ending a sentence.
const ABBREVIATIONS = new Set(['e.g', 'i.e', 'etc', 'vs', 'cf', 'approx']);

function endsSentence(html, i) {
  // A real break needs whitespace and then more text after it; anything
  // else (".)" , '."', end of string) is handled by the caller's tail.
  if (!/^\s+\S/.test(html.slice(i + 1))) return false;
  const plain = html
    .slice(0, i)
    .replace(/<[^>]*>/g, '')
    .replace(/[)\]}"'»›﴾]+$/u, ''); // a sentence may close a bracket first
  // \p{M} keeps Arabic harakat attached to their letter; the letter count
  // (not the raw length) is what tells an initial from a word.
  const word = (plain.match(/[\p{L}\p{M}.]+$/u) || [''])[0].toLowerCase();
  const letters = word.replace(/[\p{M}.]/gu, '');
  if (letters.length <= 1) return false; // an initial, e.g. the "e" of "e.g."
  return !ABBREVIATIONS.has(word);
}

// A sentence that enumerates -- "…six signs: (1) a, (2) b, …" or
// "Five rules: a; b; c" -- reads as a wall of text on one line. Break it
// into a lead-in plus one entry per item. Returns null when the sentence
// isn't a list.
function splitList(sentence) {
  const numbered = sentence.split(/(?=\((?:[1-9]|1[0-9])\)\s)/);
  if (numbered.length >= 3) {
    const lead = numbered.shift().trim();
    // Drop the separator the item carried in the running sentence -- the
    // trailing comma, or the full stop that ended the last one.
    const items = numbered.map((t) => ({ html: t.trim().replace(/[,.]$/, ''), list: true }));
    return lead ? [{ html: lead, list: false }, ...items] : items;
  }

  // Semicolons only enumerate when there are several of them and the
  // sentence introduces the list with a colon.
  const semis = sentence.split(';');
  if (semis.length >= 3 && /:/.test(semis[0])) {
    const colon = semis[0].indexOf(':');
    const lead = semis[0].slice(0, colon + 1).trim();
    const rest = [semis[0].slice(colon + 1), ...semis.slice(1)];
    const items = rest
      .map((t) => t.replace(/\s*\.\s*$/, '').trim())
      .filter(Boolean)
      .map((t) => ({ html: t, list: true, bullet: true }));
    return [{ html: lead, list: false }, ...items];
  }

  // "…has eleven types: a، b، c, and d." -- a run of short comma-separated
  // terms filling the rest of the sentence. The length guard is what keeps
  // ordinary prose that merely contains a comma-separated aside out of it.
  const colonAt = sentence.indexOf(':');
  if (colonAt !== -1) {
    const tail = sentence.slice(colonAt + 1).replace(/\s*\.\s*$/, '').trim();
    const terms = tail.split(/[،,]/).map((t) => t.trim()).filter(Boolean);
    const bare = (t) => t.replace(/^(?:and|or)\s+/i, '').replace(/<[^>]*>/g, '');
    if (terms.length >= 5 && terms.every((t) => bare(t).length <= 30)) {
      return [
        { html: sentence.slice(0, colonAt + 1).trim(), list: false },
        ...terms.map((t) => ({ html: t, list: true, bullet: true })),
      ];
    }
  }

  return null;
}

// Returns [{ html, list, bullet }] -- `list` entries render as list items.
export function conceptLines(concept) {
  const authored = Array.isArray(concept.lines) ? concept.lines : null;
  const sentences = [];

  if (authored) {
    sentences.push(...authored);
  } else {
    const html = concept.body || '';
    let start = 0;
    let inTag = false;
    for (let i = 0; i < html.length; i++) {
      const ch = html[i];
      if (ch === '<') inTag = true;
      else if (ch === '>') inTag = false;
      else if (!inTag && '.?!؟'.includes(ch) && endsSentence(html, i)) {
        sentences.push(html.slice(start, i + 1).trim());
        start = i + 1;
      }
    }
    const tail = html.slice(start).trim();
    if (tail) sentences.push(tail);
    if (!sentences.length) sentences.push(html);
  }

  return sentences.flatMap((s) => splitList(s) || [{ html: s, list: false }]);
}

// Practice pool: the larger practice pool (lesson.bank), unlocked once that
// lesson is complete. Pooled per-module.
export function getBankPool(moduleId, completed) {
  const mod = getModule(moduleId);
  const done = completed[moduleId] || {};
  const pool = [];
  mod.lessons.forEach((lesson) => {
    if (!done[lesson.id]) return;
    (lesson.bank || []).forEach((item, idx) => {
      pool.push({
        key: bankKey(moduleId, lesson.id, idx),
        moduleId,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        bankIndex: idx,
        title: item.title,
        item,
      });
    });
  });
  return pool;
}

// Practice Mode splits the pool by kind: MCQ questions run as a weighted
// quiz-style session, تركيب items as their own drag-and-drop session.
export function getMcqPool(moduleId, completed) {
  return getBankPool(moduleId, completed).filter((p) => p.item.kind !== 'tarkeeb');
}

// Course-wide pool, for the Schedule tab's Revision and Mastery modes:
// every bank item across every module the learner has actually unlocked
// (i.e. completed) so far, not just the current module's. Reuses
// getBankPool per module -- same "only completed lessons contribute"
// semantics as regular Practice Mode, just spanning the whole course.
export function getAllBankPool(completed) {
  return MODULES.reduce((acc, m) => acc.concat(getBankPool(m.id, completed)), []);
}

export function getAllMcqPool(completed) {
  return getAllBankPool(completed).filter((p) => p.item.kind !== 'tarkeeb');
}

export function getAllTarkeebPool(completed) {
  return getAllBankPool(completed).filter((p) => p.item.kind === 'tarkeeb');
}

export function getTarkeebPool(moduleId, completed) {
  return getBankPool(moduleId, completed).filter((p) => p.item.kind === 'tarkeeb');
}
