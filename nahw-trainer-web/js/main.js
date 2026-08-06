import {
  MODULES,
  QUIZ_PASS_RATIO,
  getModule,
  getLesson,
  isModuleUnlocked,
  isLessonUnlocked,
  isLessonComplete,
  isModuleComplete,
  areAllConceptsPassed,
  isQuizPassed,
  conceptKey,
  getBankPool,
  getMcqPool,
  getTarkeebPool,
  getAllMcqPool,
  getAllTarkeebPool,
  totalLessonsCleared,
} from '../content/index.js';
import {
  createInitialState, shuffleQuizOrder, shuffle, buildPracticeQueue,
  buildRevisionQueue, buildMasteryQueue, MASTERY_TARGET_STREAK,
} from './state.js';
import { render, FACES, KUFI_HEAD_FONT } from './render.js';
import { checkMcq, checkTarkeeb } from './checker.js';
import { persistSoon, flushPersist, todayISO } from './persistence.js';
import { awardXp, awardBadge, xpForQuiz, xpForPracticeCorrect, checkStreakBadges } from './gamification.js';

const state = createInitialState();
state.tarkeebState = {}; // key -> { chipPool, chipOrder, placements, selectedChip, submitted, feedback, passed }
// A returning learner who already has a 7-day streak sees the "On Fire"
// badge unlock immediately on launch, rather than waiting for their next
// XP-earning action to trigger the check.
checkStreakBadges(state);

const root = document.getElementById('root');

// --- boot sanitation --------------------------------------------------

(function sanitizeBootNav() {
  // 'drill' and 'drillComplete' are pre-redesign views that no longer exist.
  if (state.view === 'drill') state.view = 'lesson';
  if (state.view === 'drillComplete') state.view = 'lessonComplete';

  if (state.moduleId && !getModule(state.moduleId)) {
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
    return;
  }
  if (state.moduleId && !isModuleUnlocked(state.moduleId, state.completed)) {
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
  }
  // 'bank' is the pre-Practice-Mode drill bank view; an in-progress practice/
  // revision/mastery session doesn't survive a reload either (its queue/log
  // aren't persisted), so any of these just fall back to the module page,
  // or the Schedule tab for the two session kinds that have no module page.
  if (['bank', 'practiceSetup', 'practice', 'practiceReview', 'masteryComplete'].includes(state.view)) {
    state.view = state.moduleId ? 'module' : 'schedule';
  }
  if (state.view === 'lessonComplete') {
    if (state.moduleId) state.view = 'module';
  } else if (['lesson', 'quiz'].includes(state.view)) {
    // Where inside the lesson the learner was is derived from exStates on
    // render, so a reload only has to check the lesson is still reachable.
    if (!(state.moduleId && state.lessonId && isLessonUnlocked(state.moduleId, state.lessonId, state.completed))) {
      state.view = state.moduleId ? 'module' : 'dashboard';
    }
  }
  if (state.view === 'quiz' && state.moduleId && state.lessonId) {
    const lesson = getLesson(state.moduleId, state.lessonId);
    if (lesson) state.quizOptionOrder = shuffleQuizOrder(lesson);
  }
  if (state.view === 'lesson' && state.moduleId && state.lessonId) {
    shuffleLessonOptions(state.moduleId, state.lessonId);
  }
})();

// Entrance animations are keyed, not blanket: an element animates only on
// the render where its data-anim-key first appears. Re-rendering an
// unchanged exercise card therefore doesn't replay its reveal.
let seenAnimKeys = new Set();

// `duringViewTransition`: a view transition freezes a screenshot of the new
// page for its whole crossfade and only reveals the live, animating DOM
// once that finishes -- so a CSS entrance animation that starts the instant
// its class is added (the normal path here) ticks entirely out of sight
// during the crossfade, and is partway through -- or already done -- by
// the time it's actually visible. Unnoticeable for a single quick fade, but
// for the module page's multi-row staggered slide-in it read as "rows just
// there, some still mid-animation" instead of a clean cascade. So while a
// view transition is in flight, lesson rows are held back from `next` and
// returned instead, for the caller to set `.anim-in` on once the
// transition's `.finished` promise resolves -- everything else still
// enters immediately, since a lone fade being a few frames late is fine.
function markEntrances(duringViewTransition) {
  const next = new Set();
  const deferred = [];
  root.querySelectorAll('[data-anim-key]').forEach((el) => {
    const key = el.dataset.animKey;
    next.add(key);
    if (seenAnimKeys.has(key)) return;
    if (duringViewTransition && el.classList.contains('lesson-row')) {
      el.classList.add('entrance-pending');
      deferred.push(el);
      return;
    }
    el.classList.add('anim-in');
  });
  seenAnimKeys = next;
  return deferred;
}

// The page-turn crossfade is for moving between screens. Answering a
// question in place shouldn't fade the whole page out and back.
function navSignature() {
  return [state.view, state.moduleId, state.lessonId, state.practice && state.practice.index].join('|');
}
let lastNav = null;

function smoothScrollTo(container, targetY, duration = 850) {
  const startY = container.scrollTop;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;
  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    container.scrollTop = startY + distance * easedProgress;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

let titleObserver = null;
const revealedKeys = new Set();

function setupScrollObserver(changedScreen) {
  if (changedScreen) {
    revealedKeys.clear();
  }

  if (titleObserver) {
    titleObserver.disconnect();
    titleObserver = null;
  }

  const topbar = root.querySelector('.app-header');
  const scrollContainer = root.querySelector('.main-content') || root.querySelector('.main');
  const headerTitle = root.querySelector('.home-hero-title');

  // Lives on document.body, not inside #root, so a plain root.innerHTML
  // swap on the next render doesn't clean it up -- do that ourselves,
  // unconditionally, before possibly creating a fresh one.
  document.querySelectorAll('.title-dock-clone').forEach((el) => el.remove());

  if (!scrollContainer) return;

  // Header title reveal: a plain fade, not a tracked slide/morph. A clone
  // of the lesson's <h1> sits fixed at the header's own center and fades
  // in once the real title (still in normal flow, still what actually
  // scrolls) has scrolled up to roughly the header's bottom edge; fades
  // back out if you scroll back down past that point. No position/size
  // tracking, no concept-dots clone -- both of those existed in an earlier
  // version and made this fragile against layout changes elsewhere in the
  // header for very little payoff over a simple crossfade.
  if (state.view === 'lesson' && topbar && headerTitle) {
    const titleClone = document.createElement('div');
    titleClone.className = 'title-dock-clone';
    titleClone.setAttribute('aria-hidden', 'true');
    titleClone.innerHTML = headerTitle.innerHTML;
    document.body.appendChild(titleClone);

    const FADE_RANGE = 56;

    const updateHeaderState = () => {
      const topbarRect = topbar.getBoundingClientRect();
      const titleRect = headerTitle.getBoundingClientRect();
      // How far the title's top has pushed past the topbar's bottom edge
      // -- 0 or negative while it's still visibly below the topbar
      // (normal flow, no hand-off yet), growing positive the further past
      // it scrolls.
      const d = topbarRect.bottom - titleRect.top;

      titleClone.style.left = `${topbarRect.left + topbarRect.width / 2}px`;
      titleClone.style.top = `${topbarRect.top + topbarRect.height / 2}px`;
      titleClone.style.opacity = d <= 0 ? '0' : String(Math.min(1, d / FADE_RANGE));
    };

    updateHeaderState();
    scrollContainer.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState, { passive: true });

    titleObserver = new IntersectionObserver(() => {
      updateHeaderState();
    }, {
      root: scrollContainer,
      threshold: [0, 0.5, 1.0],
    });
    titleObserver.observe(headerTitle);
  }

  // 2. Scroll-triggered item reveal.
  //
  // Main column (.lesson-main -- concept text, headings, exercises): a
  // fixed line at the container's vertical center, i.e. an item slides in
  // once it's scrolled up past the middle of the page. Reaching that line
  // needs some room below the item to keep scrolling -- .lesson-main
  // itself only carries a little (see styles.css; it used to carry 50vh
  // for exactly this, at the cost of leaving that much blank scroll space
  // past the real end of the lesson). The `atBottom` check below is the
  // actual guarantee now: once you've scrolled as far as the container
  // will physically go, everything still unrevealed force-reveals
  // regardless of the line check, so a short last item can never get
  // stuck permanently invisible just because there wasn't quite enough
  // padding to carry its top up to the trigger line.
  //
  // Sidebar (.lesson-sidebar -- objectives/examples/progress cards): short
  // and sticky, so it gets its own item's-own-midpoint-vs-container-bottom
  // check instead of the fixed line -- always satisfiable regardless of how
  // little the page scrolls.
  //
  // The module page's lesson list is NOT part of this -- its rows just
  // play a plain staggered slide-in once on arrival (see .lesson-row in
  // styles.css and markEntrances() above), not a scroll-gated reveal.
  //
  // The dashboard's chapter grid (.chapter-grid -- chapter headers and
  // chapter cards) reuses the exact same "main column" fixed-line check as
  // .lesson-main, for the same reason: it's the top-level scrolling content
  // on its screen, not a short sticky column. .dashboard-page carries the
  // same 50vh trailing padding as .lesson-main so the last row of cards can
  // always reach the line too. .schedule-page (Schedule tab's "Up Next"
  // list) joins the same group and carries the same trailing padding, but
  // an individual item can override the line itself via data-reveal-line
  // (e.g. "0.75" instead of the 0.5 default) -- read per-element rather
  // than once for the whole container, since a single screen may want most
  // items revealing at the usual halfway point but one particular box
  // revealing later, deeper into the scroll.
  if (state.view === 'lesson' || state.view === 'dashboard' || state.view === 'schedule') {
    const lessonMain = root.querySelector('.lesson-main') || root.querySelector('.chapter-grid') || root.querySelector('.schedule-page');
    const lessonSidebar = root.querySelector('.lesson-sidebar');

    const handleScrollReveal = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      if (!containerRect.height) return;

      if (lessonMain) {
        // -1px slack for sub-pixel scroll positions that never quite hit
        // the exact integer max (fractional zoom/DPI scaling).
        const atBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 1;
        lessonMain.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
          const frac = el.dataset.revealLine ? parseFloat(el.dataset.revealLine) : 0.5;
          const triggerLine = containerRect.top + containerRect.height * frac;
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine || atBottom) {
            const key = el.dataset.revealKey;
            el.classList.add('is-revealed');
            if (key) revealedKeys.add(key);
          }
        });
      }

      if (lessonSidebar) {
        lessonSidebar.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top + rect.height / 2 <= containerRect.bottom) {
            const key = el.dataset.revealKey;
            el.classList.add('is-revealed');
            if (key) revealedKeys.add(key);
          }
        });
      }
    };

    handleScrollReveal();
    scrollContainer.addEventListener('scroll', handleScrollReveal, { passive: true });
  }
}

// Applies the active theme + Arabic typeface to the document root: data-
// theme drives every var(--color-*)/legacy-alias in styles.css (see the
// theme blocks there), and the two custom properties drive every Arabic
// run app-wide (bdi/.ar, and h1-h3 via --font-ar-heading), not just the
// literal Settings specimen. Idempotent, so calling it on every rerender
// (cheap: three property writes) is simpler than tracking whether theme/
// arabicFace actually changed since the last call.
function applyAppearance(state) {
  document.documentElement.dataset.theme = state.theme;
  const face = FACES[state.arabicFace] || FACES.naskh;
  document.documentElement.style.setProperty('--font-ar', face.body);
  document.documentElement.style.setProperty('--font-ar-heading', state.kufiHeadings ? KUFI_HEAD_FONT : face.body);
}

function rerender() {
  applyAppearance(state);
  const nav = navSignature();
  const changedScreen = nav !== lastNav;
  lastNav = nav;

  if (changedScreen) {
    revealedKeys.clear();
  }

  const html = render(state, MODULES, revealedKeys);

  const scrollContainer = root.querySelector('.main-content') || root.querySelector('.main');
  const prevScrollTop = changedScreen ? 0 : (scrollContainer?.scrollTop || 0);

  const usingViewTransition = changedScreen && !!document.startViewTransition;
  let deferredEntrances = [];
  const swap = () => {
    root.innerHTML = html;
    deferredEntrances = markEntrances(usingViewTransition);
    const newContainer = root.querySelector('.main-content') || root.querySelector('.main');
    if (newContainer && prevScrollTop) newContainer.scrollTop = prevScrollTop;
    setupScrollObserver(changedScreen);
  };
  if (usingViewTransition) {
    const transition = document.startViewTransition(swap);
    transition.finished.finally(() => {
      deferredEntrances.forEach((el) => {
        el.classList.remove('entrance-pending');
        el.classList.add('anim-in');
      });
    });
  } else {
    swap();
  }
  persistSoon(state);
}

function savePos() {
  if (!state.moduleId || !state.lessonId) return;
  if (state.view !== 'lesson' && state.view !== 'quiz') return;
  state.lessonPos[`${state.moduleId}_${state.lessonId}`] = { view: state.view };
}

// --- option shuffling ---------------------------------------------------
// Every question gets a fresh arrangement each time it is entered, so a
// question you have already solved doesn't show the answer sitting exactly
// where you left it. The order is regenerated on entry, not on every render:
// reshuffling under the cursor mid-answer would be maddening.

function shuffledIndices(n) {
  return shuffle(Array.from({ length: n }, (_, i) => i));
}

function shuffleLessonOptions(moduleId, lessonId) {
  const lesson = getLesson(moduleId, lessonId);
  if (!lesson) return;
  lesson.concepts.forEach((concept, i) => {
    if (!concept.exercise) return;
    state.optionOrder[conceptKey(moduleId, lessonId, i)] = shuffledIndices(concept.exercise.options.length);
  });
}

// Resets the lesson quiz to a fresh, from-question-1 attempt -- shared by
// "Start lesson" (landing straight on the quiz), "Continue to quiz", and
// "Retake quiz". Bumping quizAttempt keys the entrance animations so a
// retake's reshuffled options cascade in again instead of looking static.
function startQuizAttempt(lesson) {
  state.quizOptionOrder = shuffleQuizOrder(lesson);
  state.quizIndex = 0;
  state.quizSelected = null;
  state.quizRevealed = false;
  state.quizAnswers = [];
  state.quizShowResult = false;
  state.quizAttempt += 1;
}

// Resets a bank item's per-attempt display state fresh, whether it's an MCQ
// (new shuffled option order) or a تركيب (new chip-tray shuffle) -- used
// each time Practice Mode advances to a new question, even a repeat one.
function prepPracticeQuestion(key) {
  const entry = findBankItem(key);
  if (!entry) return;
  if (entry.item.kind === 'tarkeeb') {
    state.tarkeebState[key] = initTarkeeb(entry.item);
  } else {
    state.optionOrder[key] = shuffledIndices(entry.item.options.length);
  }
}

// Practice Mode's memory: bumps timesSeen/timesWrong and stamps lastSeen/
// lastCorrect for the item just answered, and appends to the session's log
// for the end-of-session review. Shared by all three session sources
// ('module', 'revision', 'mastery') -- Revision Mode deliberately reads and
// writes this SAME store rather than keeping a separate "last seen" memory,
// so answering a question here also resets its due countdown everywhere else.
function recordPracticeAnswer(key, title, pass) {
  const h = state.practiceHistory[key] || { timesSeen: 0, timesWrong: 0 };
  h.timesSeen += 1;
  if (!pass) h.timesWrong += 1;
  h.lastSeen = Date.now();
  h.lastCorrect = pass;
  state.practiceHistory[key] = h;
  state.practice.log.push({ key, title, correct: pass });

  // Mastery's own counter: consecutive correct answers for this exact card,
  // reset to 0 on a wrong answer -- tracked no matter which of the three
  // session sources the answer came from (regular per-module Practice Mode,
  // Revision Mode, or Mastery Mode itself), so grinding a card in ordinary
  // practice contributes to mastering it too, not just dedicated Mastery
  // sessions. Hits MASTERY_TARGET_STREAK -> the card is buried from future
  // Mastery queues for its lesson (see buildMasteryQueue / the refill branch
  // in nextPracticeQuestion) and the module page marks its lesson mastered
  // once every card in it has cleared this same way.
  const mp = state.masteryProgress[key] || { streak: 0, mastered: false };
  mp.streak = pass ? mp.streak + 1 : 0;
  if (mp.streak >= MASTERY_TARGET_STREAK) mp.mastered = true;
  state.masteryProgress[key] = mp;
}

function markLessonComplete(moduleId, lessonId) {
  state.completed[moduleId] = state.completed[moduleId] || {};
  state.completed[moduleId][lessonId] = todayISO();
}

// The XP toast auto-dismisses like the prototype's -- awardXp only sets the
// text, the caller schedules the clear (a fresh award restarts the clock).
let toastTimer = null;
function scheduleToastClear() {
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    state.toast = null;
    rerender();
  }, 1800);
}

// --- tarkeeb helpers ----------------------------------------------------

function initTarkeeb(item) {
  const chipPool = item.labels.concat(item.distractors || []);
  return {
    chipPool,
    chipOrder: shuffle(chipPool.map((_, i) => i)),
    placements: new Array(item.words.length).fill(null),
    selectedChip: null,
    submitted: false,
    feedback: null,
    passed: false,
  };
}

function ensureTarkeeb(key, item) {
  if (!state.tarkeebState[key]) state.tarkeebState[key] = initTarkeeb(item);
  return state.tarkeebState[key];
}

// The active session's source decides which pool findBankItem/prepPracticeQuestion/
// checkTarkeeb etc. all resolve keys against -- 'module' (undefined source,
// the original per-module Practice Mode) looks up practiceModuleId/moduleId
// as before; 'revision' spans the whole unlocked course; 'mastery' is
// pinned to one lesson. Everything downstream of this (selectPracticeOption,
// checkTarkeeb, tarkeebChipClick...) is unchanged and source-agnostic.
function bankPool() {
  const p = state.practice;
  if (p && p.source === 'revision') {
    return p.kind === 'tarkeeb' ? getAllTarkeebPool(state.completed) : getAllMcqPool(state.completed);
  }
  if (p && p.source === 'mastery') {
    return getBankPool(p.moduleId, state.completed)
      .filter((e) => e.lessonId === p.lessonId && e.item.kind !== 'tarkeeb');
  }
  return getBankPool(state.practiceModuleId || state.moduleId, state.completed);
}

// Mastery Mode's own lesson-scoped pool, needed outside an active session too
// (the Schedule tab's setup panel shows counts before "Start" is pressed).
// MCQ only -- تركيب doesn't count toward mastering a lesson (see
// isLessonFullyMastered's matching filter in render.js), so it's never part
// of a Mastery session's own pool either.
function masteryLessonPool(moduleId, lessonId) {
  if (!moduleId || !lessonId) return [];
  return getBankPool(moduleId, state.completed)
    .filter((e) => e.lessonId === lessonId && e.item.kind !== 'tarkeeb');
}

function findBankItem(key) {
  return bankPool().find((p) => p.key === key);
}

// --- action handlers ------------------------------------------------------
// A handler returning `false` means "nothing changed, skip the re-render".

const actions = {
  openDashboard() {
    state.view = 'dashboard';
    state.moduleId = null;
    state.lessonId = null;
  },
  openModule(el) {
    state.moduleId = el.dataset.moduleId;
    state.view = 'module';
    state.lessonId = null;
    state.practiceSetupOpen = false;
  },
  // Toggles the setup popout under the module page's button. Coming from
  // anywhere else (lesson-complete, the session review's "Practice again"),
  // it always opens rather than toggles, since there's nothing open yet.
  openPractice() {
    const moduleId = state.practice ? state.practice.moduleId : state.moduleId;
    const alreadyOpenHere = state.view === 'module' && state.moduleId === moduleId && state.practiceSetupOpen;
    state.practice = null;
    state.moduleId = moduleId;
    state.view = 'module';
    state.practiceModuleId = moduleId;
    state.practiceSetupOpen = !alreadyOpenHere;
    if (!state.practiceSetupKind) state.practiceSetupKind = 'mcq';
  },
  // Plays the popout's entrance animation in reverse before actually
  // closing it -- an immediate state flip would just yank it out of the
  // DOM on the next render, with no exit motion at all. Returns false to
  // skip that immediate rerender; the real state change (and the rerender
  // that removes the popout for good) happens once the animation finishes.
  closePracticeSetup() {
    const popout = root.querySelector('.practice-popout');
    if (popout && !popout.classList.contains('closing')) {
      popout.classList.add('closing');
      setTimeout(() => {
        state.practiceSetupOpen = false;
        rerender();
      }, 260);
      return false;
    }
    state.practiceSetupOpen = false;
  },
  setPracticeTab(el) {
    state.practiceSetupKind = el.dataset.kind;
  },
  startPractice(el) {
    const kind = el.dataset.kind;
    const count = +el.dataset.count;
    const pool = kind === 'tarkeeb'
      ? getTarkeebPool(state.practiceModuleId, state.completed)
      : getMcqPool(state.practiceModuleId, state.completed);
    if (!pool.length) return false;
    const queue = buildPracticeQueue(pool, state.practiceHistory, count);
    state.practiceSetupOpen = false;
    state.practice = {
      kind,
      moduleId: state.practiceModuleId,
      queue,
      index: 0,
      log: [],
      startedAt: Date.now(),
      selected: undefined,
      submitted: false,
      correct: false,
      combo: 0,
      xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  // Reveal-on-click, matching the lesson quiz: choosing an option grades
  // and reveals it immediately, no separate Check step.
  selectPracticeOption(el) {
    const p = state.practice;
    if (!p || p.kind !== 'mcq' || p.submitted) return false;
    const key = p.queue[p.index];
    const entry = findBankItem(key);
    if (!entry) return false;
    const selected = +el.dataset.option;
    const { pass } = checkMcq(entry.item, selected);
    p.selected = selected;
    p.submitted = true;
    p.correct = pass;
    recordPracticeAnswer(key, entry.title, pass);
    if (pass) {
      p.combo = (p.combo || 0) + 1;
      const gained = xpForPracticeCorrect(p.combo);
      p.xpGained = (p.xpGained || 0) + gained;
      awardXp(state, gained);
      scheduleToastClear();
    } else {
      p.combo = 0;
    }
  },
  nextPracticeQuestion() {
    const p = state.practice;
    if (!p) return false;
    p.index += 1;

    // Mastery Mode doesn't end when its queue runs out -- it refills from
    // whatever's left in the lesson (excluding anything just mastered) and
    // keeps looping until either the learner ends it manually or nothing
    // unmastered remains, in which case the whole lesson is done.
    if (p.source === 'mastery') {
      if (p.index >= p.queue.length) {
        const refill = buildMasteryQueue(masteryLessonPool(p.moduleId, p.lessonId), state.masteryProgress);
        if (!refill.length) {
          state.view = 'masteryComplete';
          return;
        }
        p.queue = refill;
        p.index = 0;
      }
      p.selected = undefined;
      p.submitted = false;
      p.correct = false;
      prepPracticeQuestion(p.queue[p.index]);
      return;
    }

    if (p.index >= p.queue.length) {
      if (p.source === 'module' && p.log.length >= 10) awardBadge(state, 'devoted');
      state.view = 'practiceReview';
      return;
    }
    p.selected = undefined;
    p.submitted = false;
    p.correct = false;
    prepPracticeQuestion(p.queue[p.index]);
  },
  // 'module' (undefined source) exits back to the module page it was
  // launched from, matching the original behaviour; Revision/Mastery have
  // no module context to return to, so they exit back to the Schedule tab
  // instead -- both mid-session (no answers yet) and after reviewing.
  endPracticeSession() {
    const src = state.practice && state.practice.source;
    if (state.practice && state.practice.log.length > 0) {
      if (src === 'module' && state.practice.log.length >= 10) awardBadge(state, 'devoted');
      state.view = 'practiceReview';
    } else {
      state.view = src === 'revision' || src === 'mastery' ? 'schedule' : 'module';
      state.practice = null;
    }
  },
  closePracticeReview() {
    const src = state.practice && state.practice.source;
    state.view = src === 'revision' || src === 'mastery' ? 'schedule' : 'module';
    state.practice = null;
  },

  // --- Schedule tab: Deadline / Revision / Mastery ---
  openSchedule() {
    state.view = 'schedule';
  },
  openSettings() {
    state.view = 'settings';
  },
  pickTheme(el) {
    state.theme = el.dataset.theme;
  },
  pickFace(el) {
    state.arabicFace = el.dataset.face;
  },
  toggleKufiHeadings() {
    state.kufiHeadings = !state.kufiHeadings;
  },
  resetAppearance() {
    state.theme = 'manuscript';
    state.arabicFace = 'naskh';
    state.kufiHeadings = false;
  },
  // Home hero's "Continue/Start lesson N" -- unlike openLessonPreview
  // (reached only from inside a module page, where state.moduleId is
  // already that module), the hero can fire from the dashboard with no
  // module context set yet, so this sets it first.
  continueLesson(el) {
    state.moduleId = el.dataset.moduleId;
    state.lessonPreviewId = el.dataset.lessonId;
  },
  // Home hero's "Review N cards" -- same moduleId problem as continueLesson
  // above, for openPractice's own reliance on state.moduleId already being
  // set to the module it should open Practice Mode's setup popout for.
  reviewModule(el) {
    state.moduleId = el.dataset.moduleId;
    actions.openPractice();
  },
  setScheduleTab(el) {
    state.scheduleTab = el.dataset.tab;
    state.scheduleTabAttempt += 1;
  },
  setScheduleRevisionKind(el) {
    state.scheduleRevisionKind = el.dataset.kind;
  },
  // Builds and enters today's due deck. Disabled in the UI (see scheduleHtml)
  // until a frequency is set and at least one question is actually due, so
  // the defensive checks here are a backstop, not the primary gate.
  startRevision() {
    const kind = state.scheduleRevisionKind || 'mcq';
    const freq = state.revisionFrequencyDays;
    if (!freq) return false;
    const pool = kind === 'tarkeeb' ? getAllTarkeebPool(state.completed) : getAllMcqPool(state.completed);
    const queue = buildRevisionQueue(pool, state.practiceHistory, freq);
    if (!queue.length) return false;
    state.practice = {
      source: 'revision', kind, moduleId: null, lessonId: null,
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  // The two <select> dropdowns and the date/number inputs below all reach
  // their handler through the same data-action dispatch as clicks (see the
  // 'change' listener further down) -- `el` is the <select>/<input> itself,
  // so these read el.value rather than a dataset attribute.
  setScheduleMasteryModule(el) {
    state.scheduleMasteryModuleId = el.value || null;
    state.scheduleMasteryLessonId = null;
  },
  setScheduleMasteryLesson(el) {
    state.scheduleMasteryLessonId = el.value || null;
  },
  setScheduleDeadline(el) {
    state.scheduleDeadline = el.value || null;
  },
  setRevisionFrequency(el) {
    const n = parseInt(el.value, 10);
    state.revisionFrequencyDays = Number.isFinite(n) && n > 0 ? n : null;
  },
  startMastery() {
    const moduleId = state.scheduleMasteryModuleId;
    const lessonId = state.scheduleMasteryLessonId;
    const kind = 'mcq'; // تركيب doesn't count toward mastering a lesson.
    if (!moduleId || !lessonId) return false;
    const pool = masteryLessonPool(moduleId, lessonId);
    const queue = buildMasteryQueue(pool, state.masteryProgress);
    if (!queue.length) return false;
    state.practice = {
      source: 'mastery', kind, moduleId, lessonId,
      queue, index: 0, log: [], startedAt: Date.now(),
      selected: undefined, submitted: false, correct: false, combo: 0, xpGained: 0,
    };
    state.view = 'practice';
    prepPracticeQuestion(queue[0]);
  },
  backToSchedule() {
    state.view = 'schedule';
    state.practice = null;
  },

  // --- "Start lesson" modal ---
  openLessonPreview(el) {
    state.lessonPreviewId = el.dataset.lessonId;
  },
  // Fires from the backdrop; a click that landed inside the dialog is not a
  // click-outside, so it changes nothing.
  closeLessonPreview(el, e) {
    if (e && e.target !== el) return false;
    state.lessonPreviewId = null;
  },
  cancelLessonPreview() {
    state.lessonPreviewId = null;
  },
  startLesson(el) {
    const lessonId = el.dataset.lessonId;
    state.lessonPreviewId = null;
    state.lessonId = lessonId;
    // Only two positions exist inside a lesson now. Older save files can
    // hold 'drill'/'drillComplete' here -- treat anything else as the
    // concepts page rather than navigating to a view that no longer exists.
    const pos = state.lessonPos[`${state.moduleId}_${lessonId}`];
    state.view = pos && pos.view === 'quiz' ? 'quiz' : 'lesson';
    shuffleLessonOptions(state.moduleId, lessonId);
    if (state.view === 'quiz') startQuizAttempt(getLesson(state.moduleId, lessonId));
  },

  backToLesson() {
    state.view = 'lesson';
    shuffleLessonOptions(state.moduleId, state.lessonId);
    savePos();
  },
  gotoQuiz() {
    const lesson = getLesson(state.moduleId, state.lessonId);
    if (!areAllConceptsPassed(lesson, state.exStates, state.moduleId, state.lessonId)) return false;
    if (state.view !== 'quiz') startQuizAttempt(lesson);
    state.view = 'quiz';
    savePos();
  },

  // --- concept exercises (one block per concept, all on one page) ---
  revealExercise(el) {
    const idx = +el.dataset.index;
    const key = conceptKey(state.moduleId, state.lessonId, idx);
    state.revealState[key] = 1;

    const exCardKey = `ex_${state.moduleId}_${state.lessonId}_${idx}`;

    setTimeout(() => {
      const scrollContainer = root.querySelector('.main-content') || root.querySelector('.main');
      const exCard = root.querySelector(`[data-reveal-key="${exCardKey}"]`) || root.querySelector(`[data-anim-key="ex${idx}"]`);
      if (exCard && scrollContainer) {
        const cardRect = exCard.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        const targetY = scrollContainer.scrollTop + (cardRect.top - containerRect.top) - (containerRect.height / 2) + (cardRect.height / 2);

        smoothScrollTo(scrollContainer, Math.max(0, targetY), 850);
      }
    }, 40);
  },
  // Sidebar "In This Lesson" list -- clicking a concept you've already
  // reached scrolls back up to it. No state changes, so this returns
  // false to skip the usual rerender: rerender() replaces .main-content
  // wholesale, which would yank the DOM node out from under
  // smoothScrollTo's rAF loop mid-animation.
  scrollToConcept(el) {
    const idx = +el.dataset.index;
    const scrollContainer = root.querySelector('.main-content') || root.querySelector('.main');
    const target = root.querySelector(`[data-concept-index="${idx}"]`);
    if (target && scrollContainer) {
      const cardRect = target.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      const targetY = scrollContainer.scrollTop + (cardRect.top - containerRect.top) - (containerRect.height / 2) + (cardRect.height / 2);
      smoothScrollTo(scrollContainer, Math.max(0, targetY), 850);
    }
    return false;
  },
  selectConceptOption(el) {
    const key = conceptKey(state.moduleId, state.lessonId, +el.dataset.index);
    const ex = (state.exStates[key] = state.exStates[key] || {});
    if (ex.passed) return false;
    ex.selected = +el.dataset.option;
  },
  checkConceptExercise(el) {
    const idx = +el.dataset.index;
    const lesson = getLesson(state.moduleId, state.lessonId);
    const concept = lesson.concepts[idx];
    const key = conceptKey(state.moduleId, state.lessonId, idx);
    const ex = state.exStates[key];
    if (!ex || ex.selected === undefined) return false;
    const { pass } = checkMcq(concept.exercise, ex.selected);
    ex.submitted = true;
    if (pass) {
      ex.passed = true;
      state.revealState[key] = 1;
    }
  },
  retryConceptExercise(el) {
    const key = conceptKey(state.moduleId, state.lessonId, +el.dataset.index);
    const ex = state.exStates[key];
    if (!ex) return false;
    ex.submitted = false;
    ex.selected = undefined;
  },

  // Reveal-on-click: choosing an option immediately shows correct/incorrect
  // (see quizHtml) rather than waiting on a separate submit step.
  selectQuizOption(el) {
    if (state.quizRevealed) return false;
    state.quizSelected = +el.dataset.option;
    state.quizRevealed = true;
  },
  // Commits the just-revealed answer and either advances to the next
  // question or, on the last one, scores the attempt and shows the result
  // screen. quizScores is written here exactly where submitQuiz used to
  // write it, so finishLesson's gating/XP logic below is untouched.
  nextQuizQuestion() {
    if (!state.quizRevealed) return false;
    const lesson = getLesson(state.moduleId, state.lessonId);
    const answers = [...state.quizAnswers, state.quizSelected];
    if (state.quizIndex + 1 < lesson.quiz.length) {
      state.quizAnswers = answers;
      state.quizIndex += 1;
      state.quizSelected = null;
      state.quizRevealed = false;
      return;
    }
    const total = lesson.quiz.length;
    const correct = answers.filter((a, qi) => a === lesson.quiz[qi].correct).length;
    state.quizAnswers = answers;
    state.quizScores[state.moduleId] = state.quizScores[state.moduleId] || {};
    state.quizScores[state.moduleId][state.lessonId] = { correct, total };
    state.quizShowResult = true;
    state.quizPassed = correct / total >= QUIZ_PASS_RATIO;
  },
  retakeQuiz() {
    startQuizAttempt(getLesson(state.moduleId, state.lessonId));
  },
  // Passing the quiz is the end of the lesson -- there is no drill step.
  finishLesson() {
    if (!isQuizPassed(state.moduleId, state.lessonId, state.quizScores)) return false;
    // Computed before markLessonComplete mutates state.completed: XP and
    // badges only fire on a lesson's first-ever completion, so retaking an
    // already-passed quiz can't be used to farm XP.
    const alreadyComplete = isLessonComplete(state.moduleId, state.lessonId, state.completed);
    const wasFirstEver = totalLessonsCleared(state.completed) === 0;
    markLessonComplete(state.moduleId, state.lessonId);
    state.view = 'lessonComplete';
    // Re-opening a cleared lesson should land on the concepts, not the quiz.
    state.lessonPos[`${state.moduleId}_${state.lessonId}`] = { view: 'lesson' };
    const score = state.quizScores[state.moduleId][state.lessonId];
    if (!alreadyComplete) {
      awardXp(state, xpForQuiz(score.correct, score.total));
      scheduleToastClear();
      if (wasFirstEver) awardBadge(state, 'first-steps');
      if (isModuleComplete(state.moduleId, state.completed)) awardBadge(state, 'scholar');
    }
    // Sharp Tongue is "score 100% on any quiz" -- unlike XP, a later
    // retake earning it for the first time still should, since it isn't
    // repeatable/farmable (awardBadge no-ops once owned).
    if (score.correct === score.total) awardBadge(state, 'sharp-tongue');
  },

  tarkeebChipClick(el) {
    const key = el.dataset.key;
    const entry = findBankItem(key);
    const ts = ensureTarkeeb(key, entry.item);
    if (ts.submitted) return false;
    const chipIdx = +el.dataset.chip;
    if (ts.placements.includes(chipIdx)) return false; // already placed; use the slot to remove it
    ts.selectedChip = ts.selectedChip === chipIdx ? null : chipIdx;
  },
  tarkeebSlotClick(el) {
    const key = el.dataset.key;
    const entry = findBankItem(key);
    const ts = ensureTarkeeb(key, entry.item);
    if (ts.submitted) return false;
    const slotIdx = +el.dataset.slot;
    if (ts.placements[slotIdx] !== null) {
      ts.placements[slotIdx] = null;
      ts.submitted = false;
    } else if (ts.selectedChip !== null) {
      ts.placements[slotIdx] = ts.selectedChip;
      ts.selectedChip = null;
      ts.submitted = false;
    } else {
      return false;
    }
  },
  checkTarkeeb(el) {
    const key = el.dataset.key;
    const entry = findBankItem(key);
    const ts = state.tarkeebState[key];
    if (!entry || !ts) return false;
    const given = entry.item.words.map((_, i) => (ts.placements[i] === null ? null : ts.chipPool[ts.placements[i]]));
    const { feedback, allPass } = checkTarkeeb(entry.item, given);
    ts.feedback = feedback;
    ts.submitted = true;
    ts.passed = allPass;
    const p = state.practice;
    if (p && p.kind === 'tarkeeb' && p.queue[p.index] === key) {
      recordPracticeAnswer(key, entry.title, allPass);
      if (allPass) {
        p.combo = (p.combo || 0) + 1;
        const gained = xpForPracticeCorrect(p.combo);
        p.xpGained = (p.xpGained || 0) + gained;
        awardXp(state, gained);
        scheduleToastClear();
      } else {
        p.combo = 0;
      }
    }
  },
  resetTarkeeb(el) {
    const key = el.dataset.key;
    const entry = findBankItem(key);
    if (!entry) return false;
    state.tarkeebState[key] = initTarkeeb(entry.item);
  },

  closeBadgeModal() {
    state.badgeModal = null;
  },
};

// --- event delegation -------------------------------------------------

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el || el.disabled) return;
  // Native form controls (the Schedule tab's date/number inputs and
  // module/lesson <select>s) carry data-action too, but only so the
  // 'change' listener below can find them the same way -- their action
  // must fire once a value is actually committed, not on the click that
  // merely focuses the field or opens the picker/dropdown. Without this
  // guard, that opening click fires the action immediately (with the
  // stale value) and the resulting rerender replaces the input out from
  // under the still-open native picker/dropdown, closing it before a
  // date/option can ever be chosen.
  if (el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'TEXTAREA') return;
  const handler = actions[el.dataset.action];
  if (!handler) return;
  if (handler(el, e) === false) return;
  rerender();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.lessonPreviewId) {
    state.lessonPreviewId = null;
    rerender();
  }
});

document.addEventListener('change', (e) => {
  // The Schedule tab's date/number inputs and the Mastery module/lesson
  // <select>s reach their handler through this exact same data-action
  // dispatch as clicks -- see setScheduleDeadline/setRevisionFrequency/
  // setScheduleMasteryModule/setScheduleMasteryLesson, which read el.value.
  const el = e.target.closest('[data-action]');
  if (el && !el.disabled && actions[el.dataset.action]) {
    if (actions[el.dataset.action](el, e) !== false) rerender();
    return;
  }
});

// --- drag-and-drop for tarkeeb (native events bubble, so this is delegated
// on the document exactly like clicks -- no per-render remount needed) ---

let dragChipIdx = null;
let dragKey = null;

document.addEventListener('dragstart', (e) => {
  const chip = e.target.closest('.tarkeeb-chip[draggable="true"]');
  if (!chip) return;
  dragChipIdx = +chip.dataset.chip;
  dragKey = chip.dataset.key;
  e.dataTransfer.effectAllowed = 'move';
  // Deferred a frame so the browser snapshots the chip at full opacity for
  // the drag image, then dims the original.
  requestAnimationFrame(() => chip.classList.add('dragging'));
});

document.addEventListener('dragover', (e) => {
  const slot = e.target.closest('.tarkeeb-slot');
  if (!slot) return;
  e.preventDefault();
  if (!slot.classList.contains('drag-over')) {
    document.querySelectorAll('.tarkeeb-slot.drag-over').forEach((s) => s.classList.remove('drag-over'));
    slot.classList.add('drag-over');
  }
});

document.addEventListener('dragleave', (e) => {
  const slot = e.target.closest('.tarkeeb-slot');
  if (slot) slot.classList.remove('drag-over');
});

document.addEventListener('drop', (e) => {
  const slot = e.target.closest('.tarkeeb-slot');
  if (!slot || dragChipIdx === null) return;
  e.preventDefault();
  slot.classList.remove('drag-over');
  const key = slot.dataset.key;
  if (key !== dragKey) return;
  const entry = findBankItem(key);
  const ts = ensureTarkeeb(key, entry.item);
  if (!ts.submitted) {
    ts.placements[+slot.dataset.slot] = dragChipIdx;
    ts.selectedChip = null;
    ts.submitted = false;
  }
  dragChipIdx = null;
  dragKey = null;
  rerender();
});

document.addEventListener('dragend', (e) => {
  const chip = e.target.closest('.tarkeeb-chip');
  if (chip) chip.classList.remove('dragging');
  document.querySelectorAll('.tarkeeb-slot.drag-over').forEach((s) => s.classList.remove('drag-over'));
  dragChipIdx = null;
  dragKey = null;
});

// --- lifecycle ----------------------------------------------------------

window.addEventListener('beforeunload', flushPersist);

// Boot renders straight into whatever screen the learner left off on -- there
// is no real "previous screen" to crossfade from, so pre-seeding lastNav to
// the initial signature skips rerender()'s page-turn view transition for
// this first paint. Without this, the first paint fades in from a blank
// root over the transition's own duration on top of the page's normal load
// time, reading as a stuck/blank window before the app "pops in" late.
lastNav = navSignature();
rerender();
