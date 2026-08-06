import { bootProgress } from './persistence.js';

export function createInitialState() {
  const boot = bootProgress();
  const nav = boot.nav || {};
  return {
    view: nav.view || 'dashboard',
    moduleId: nav.moduleId || null,
    lessonId: nav.lessonId || null,
    // conceptKey -> 0 (exercise hidden) or 1 (exercise shown). Persisted;
    // never resets once revealed. How far down the lesson page the learner
    // has got is NOT stored -- it's derived from exStates on every render
    // (see conceptsToRender), so it can't drift.
    revealState: boot.revealState || {},
    practiceModuleId: nav.practiceModuleId || null,
    // "<moduleId>_<lessonId>" -> { view } -- concepts page or quiz
    lessonPos: boot.lessonPos || {},
    // Transient: the lesson whose "Start lesson" modal is open. Not persisted.
    lessonPreviewId: null,
    // exercise key -> display order of that question's options. Reshuffled
    // every time the question is entered afresh, so revisiting a solved
    // question doesn't show the answer sitting where you left it. Transient:
    // an option's stored `selected` is always the ORIGINAL index, so nothing
    // here needs persisting.
    optionOrder: {},
    // Lesson quiz: one question at a time, reveal-on-click (no separate
    // submit step -- see selectQuizOption in main.js). quizIndex is the
    // current question (0-based); quizSelected is that question's chosen
    // option (ORIGINAL index) once quizRevealed flips true; quizAnswers
    // collects each question's committed answer as you advance, so the
    // final score/streak/tier can be computed from it once quizShowResult
    // is true. None of this is persisted (same as practice below) -- a
    // reload always starts the quiz fresh at question 1.
    quizIndex: 0,
    quizSelected: null,
    quizRevealed: false,
    quizAnswers: [],
    quizShowResult: false,
    quizPassed: false,
    quizOptionOrder: {},
    // Bumped on every fresh attempt; keys the quiz entrance animations so a
    // retake's reshuffled options cascade in again.
    quizAttempt: 0,
    // Transient: which tab ("mcq" | "tarkeeb") the Practice Mode setup
    // popout is showing. Not persisted -- always reopens on "mcq".
    practiceSetupKind: null,
    // Transient: whether the Practice Mode setup popout is expanded under
    // the module page's "Practice Mode" button. Not persisted -- a reload
    // always lands with it collapsed.
    practiceSetupOpen: false,
    // Transient: the active Practice Mode session, or null between sessions.
    // { kind, moduleId, queue: [key,...], index, log: [{key,title,correct}],
    //   startedAt, selected, submitted, correct }
    // Not persisted -- an in-progress session doesn't survive a reload,
    // same as tarkeebState below.
    practice: null,
    // Practice Mode's spaced-repetition-ish memory: bank key -> { lastSeen,
    // lastCorrect, timesSeen, timesWrong }. Persisted, and never reset --
    // it's what lets a new session weight older/wrong answers back in.
    // Revision Mode reads/writes this exact same store (see buildRevisionQueue
    // below) rather than keeping its own "last seen" memory -- one shared
    // history for both.
    practiceHistory: boot.practiceHistory || {},
    // Schedule tab, "Deadline" sub-tab: the target completion date (YYYY-MM-DD)
    // or null if unset. The daily lesson target is never stored -- it's
    // recomputed live from this date plus totalLessons()/totalLessonsCleared()
    // on every render (see scheduleHtml), so falling behind or ahead just
    // reflows the remaining days automatically instead of needing a stored
    // plan to be kept in sync.
    scheduleDeadline: boot.scheduleDeadline || null,
    // Schedule tab, "Revision" sub-tab: how many days a question is allowed
    // to go unseen before it's due again. Null until the learner sets it --
    // the tab requires a value before "Start Revision" is enabled.
    revisionFrequencyDays: boot.revisionFrequencyDays || null,
    // Schedule tab, "Mastery" sub-tab: bank key -> { streak, mastered }.
    // streak is consecutive correct answers *within Mastery Mode specifically*
    // (a wrong answer resets it to 0 -- see recordPracticeAnswer in main.js);
    // once streak reaches MASTERY_TARGET_STREAK the card is mastered and
    // permanently excluded from future Mastery Mode queues for its lesson
    // (see buildMasteryQueue). Persisted, never reset except by a wrong answer.
    masteryProgress: boot.masteryProgress || {},
    // Transient: which of the three Schedule sub-tabs is showing. Not
    // persisted -- always reopens on "deadline".
    scheduleTab: 'deadline',
    // Bumped on every tab switch (see setScheduleTab in main.js). Threaded
    // into that tab's content as part of its data-anim-key/data-reveal-key
    // scope, so switching Deadline -> Revision -> Deadline re-triggers the
    // slide-in every time, rather than the entrance/reveal-on-scroll systems'
    // usual "already seen this key, don't replay" behavior (see
    // markEntrances/revealedKeys in main.js) -- switching schedule sub-tabs
    // doesn't change state.view, so without this the content would look
    // identical to a screen those systems have already animated once.
    scheduleTabAttempt: 0,
    // Transient: Revision's kind toggle, and Mastery's module/lesson filter
    // dropdowns. Not persisted -- Practice Mode's own per-module popout
    // treats its kind tab the same way. Mastery has no kind toggle of its
    // own -- تركيب doesn't count toward mastering a lesson, so a Mastery
    // session is always MCQ (see startMastery in main.js).
    scheduleRevisionKind: 'mcq',
    scheduleMasteryModuleId: null,
    scheduleMasteryLessonId: null,
    completed: boot.completed,
    quizScores: boot.quizScores,
    exStates: boot.exStates,
    streak: boot.streak,
    lastVisit: boot.lastVisit,
    xp: boot.xp,
    badges: boot.badges,
    // Appearance: colour theme and Arabic typeface (see js/render.js THEMES/
    // FACES). Persisted, applied to <html data-theme> and the --font-ar*
    // custom properties on every render (see applyAppearance in main.js).
    theme: boot.theme || 'manuscript',
    arabicFace: boot.arabicFace || 'naskh',
    // Independent of arabicFace -- layers Reem Kufi onto headings app-wide
    // over whichever body face (Naskh/Uthmani) is set, rather than being a
    // third body face of its own. See applyAppearance in main.js.
    kufiHeadings: boot.kufiHeadings || false,
    // Transient gamification UI: XP-toast text and the earned-badge modal.
    // Neither is persisted -- a reload shouldn't replay a stale
    // notification (same treatment as lessonPreviewId/practiceSetupOpen).
    toast: null,
    badgeModal: null,
  };
}

// A fresh per-attempt shuffle of each quiz question's option order, so the
// correct choice doesn't always land in the same position.
export function shuffleQuizOrder(lesson) {
  const order = {};
  lesson.quiz.forEach((q, qi) => {
    const indices = q.options.map((_, oi) => oi);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    order[qi] = indices;
  });
  return order;
}

// Practice Mode's selection weight for one candidate: never-seen items
// dominate (so a fresh pool gets covered before anything repeats), then
// among seen items, the longer since last seen and any wrong last answer
// both push the weight up -- never so low it can't still come up, never
// forced so it must.
const PRACTICE_UNSEEN_WEIGHT = 1000;
const PRACTICE_WRONG_BOOST = 3;

function practiceWeight(entry, history) {
  const h = history[entry.key];
  if (!h || !h.lastSeen) return PRACTICE_UNSEEN_WEIGHT;
  const hoursSince = Math.max(0, (Date.now() - h.lastSeen) / 3600000);
  let weight = 1 + hoursSince;
  if (h.lastCorrect === false) weight *= PRACTICE_WRONG_BOOST;
  return weight;
}

// Weighted sampling without replacement: builds an ordered, deduplicated
// queue of up to `count` bank keys drawn from `pool`, favoring items that
// are unseen, were last seen longest ago, or were answered wrong last time.
export function buildPracticeQueue(pool, history, count) {
  const remaining = pool.slice();
  const queue = [];
  const n = Math.min(count, remaining.length);
  for (let i = 0; i < n; i++) {
    const weights = remaining.map((e) => practiceWeight(e, history));
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (; idx < weights.length - 1; idx++) {
      r -= weights[idx];
      if (r <= 0) break;
    }
    queue.push(remaining[idx].key);
    remaining.splice(idx, 1);
  }
  return queue;
}

// Fisher-Yates, used to shuffle a tarkeeb item's drag-tray chips on entry.
export function shuffle(arr) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// --- Revision Mode --------------------------------------------------------
// Builds today's due deck from the course-wide pool: every question that's
// either never been seen, or was last seen `frequencyDays`+ ago. Anything
// seen more recently than that is left out entirely -- it isn't due yet, so
// it doesn't count toward the session at all (not even as a low-priority
// filler). Order: unseen first (shuffled among themselves), then the due
// "seen" items split into three roughly-equal bands by how long overdue
// they are (most-overdue band first), each band shuffled independently.
// This isn't a strict lastSeen sort -- see the "bucketed shuffle" tradeoff
// discussed with the user -- so within a band a slightly-fresher item can
// land before a slightly-staler one, but the overall trend is still oldest
// to newest.
const REVISION_BUCKETS = 3;

export function buildRevisionQueue(pool, history, frequencyDays) {
  const now = Date.now();
  const unseen = [];
  const due = []; // { key, lastSeen }
  pool.forEach((entry) => {
    const h = history[entry.key];
    if (!h || !h.lastSeen) {
      unseen.push(entry.key);
      return;
    }
    const daysSince = (now - h.lastSeen) / 86400000;
    if (daysSince >= frequencyDays) due.push({ key: entry.key, lastSeen: h.lastSeen });
  });

  due.sort((a, b) => a.lastSeen - b.lastSeen);
  const bucketSize = Math.ceil(due.length / REVISION_BUCKETS) || 1;
  const buckets = [];
  for (let i = 0; i < due.length; i += bucketSize) {
    buckets.push(shuffle(due.slice(i, i + bucketSize).map((d) => d.key)));
  }

  return shuffle(unseen).concat(...buckets);
}

// --- Mastery Mode -----------------------------------------------------
// A card is "mastered" once it's been answered correctly this many times
// *in a row within Mastery Mode* -- a wrong answer resets that card's
// streak to 0 (see recordPracticeAnswer in main.js). Once mastered it's
// permanently excluded from future Mastery queues for that lesson.
export const MASTERY_TARGET_STREAK = 25;

// Plain shuffle of whatever in `pool` isn't mastered yet -- no weighting
// beyond that; the 25-correct-in-a-row requirement already does the work
// of resurfacing anything the learner is shaky on (one wrong answer sends
// a card back to the bottom of its own streak, not out of the pool).
export function buildMasteryQueue(pool, masteryProgress) {
  const remaining = pool.filter((e) => !(masteryProgress[e.key] && masteryProgress[e.key].mastered));
  return shuffle(remaining.map((e) => e.key));
}

export function sidebarRows(state, MODULES, helpers) {
  const { isModuleUnlocked, completedCount } = helpers;
  return MODULES.map((m) => {
    const unlocked = isModuleUnlocked(m.id, state.completed);
    const isActive = state.moduleId === m.id;
    const done = completedCount(m.id, state.completed);
    return {
      id: m.id,
      title: m.title,
      unlocked,
      isActive,
      locked: !unlocked,
      progressLabel: `${done}/${m.lessons.length}`,
    };
  });
}
