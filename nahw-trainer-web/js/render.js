import { esc, escAttr, escBidi, isolateArabicHtml } from './html.js';
import {
  QUIZ_PASS_RATIO,
  isModuleUnlocked,
  completedCount,
  isLessonUnlocked,
  isLessonComplete,
  lessonProgress,
  conceptsToRender,
  areAllConceptsPassed,
  isConceptExercisePassed,
  conceptKey,
  conceptLines,
  getBankPool,
  getMcqPool,
  getTarkeebPool,
  getAllMcqPool,
  getAllTarkeebPool,
  totalLessonsCleared,
  totalLessons,
} from '../content/index.js';
import { levelInfo, xpForQuiz, BADGE_DEFS, quizCosmeticXp, quizTier, longestStreak } from './gamification.js';
import { buildRevisionQueue, MASTERY_TARGET_STREAK } from './state.js';
import { todayISO } from './persistence.js';

// --- Line icons -----------------------------------------------------------
// Lucide-style strokes, no fills, inheriting `currentColor` so the colour is
// a CSS concern. These replace the emoji the first draft leaned on.

const ICON_PATHS = {
  book: '<path d="M2 5c2.2-1.3 5-2 8-2s5.8.7 8 2v14c-2.2-1.3-5-2-8-2s-5.8.7-8 2z"/><path d="M12 3v16"/>',
  flame: '<path d="M12 2c1 3-2 4-2 7a4 4 0 1 0 8 0c0-1-.5-2-1-2 .3 2-1 3-2 2 1-2-1-3-1-5 0-1 .3-2-2-2z"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  archive: '<path d="M4 4h5a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 4h-5a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h5z"/>',
  check: '<path d="M5 12l5 5L19 7"/>',
  star: '<path d="M12 2l2.9 6.5 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7-5.4-4.7 7.1-.6z"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="M9 12l-2 8 5-3 5 3-2-8"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>',
  cross: '<path d="M6 6l12 12M18 6L6 18"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18"/><path d="M8 2.5v4M16 2.5v4"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/>',
};

function icon(name, size = 16, strokeWidth = 1.6) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true" focusable="false">${ICON_PATHS[name]}</svg>`;
}

// --- Appearance: themes & Arabic typefaces ---------------------------------
// Mirrors the theme blocks in styles.css exactly (kept as data here too,
// rather than read from CSS, because Settings' theme-card swatches preview
// each theme in ITS OWN colours regardless of which theme is currently
// active -- that needs literal hex values to inline, not var(--color-*)).

const THEME_ORDER = ['manuscript', 'mushaf', 'lamp', 'ink', 'sepia'];
const THEMES = {
  manuscript: { name: 'Manuscript', note: 'default', bg: '#f3f2f2', surface: '#eae9e9', text: '#201f1d', accent: '#b68235' },
  mushaf: { name: 'Mushaf', note: 'ivory', bg: '#f7f1e1', surface: '#efe7d2', text: '#22271f', accent: '#2f6b4f' },
  lamp: { name: 'Lamp', note: 'night', bg: '#16130f', surface: '#211d16', text: '#ece3d1', accent: '#c9a04a' },
  ink: { name: 'Ink', note: 'sober', bg: '#eceef1', surface: '#e0e4ea', text: '#1b2028', accent: '#3d4d80' },
  sepia: { name: 'Sepia', note: 'aged', bg: '#ece0ca', surface: '#e2d4b9', text: '#2d2115', accent: '#7d5029' },
};

// Body face (Naskh/Uthmani) and the Kufi-headings toggle are independent
// choices -- Kufi headings layers over whichever body face is active,
// rather than being a third, mutually-exclusive body face of its own.
const FACE_ORDER = ['naskh', 'uthmani'];
export const FACES = {
  naskh: { name: 'Naskh', note: 'textbook', body: "'Noto Naskh Arabic', serif" },
  uthmani: { name: 'Uthmani', note: 'mushaf', body: "'Amiri', serif" },
};
export const KUFI_HEAD_FONT = "'Reem Kufi', serif";

// --- Header -------------------------------------------------------------
// One bar, every screen: wordmark left, nav right -- Home, Schedule, and
// Settings, the only three screens that actually exist. On module/lesson/
// quiz screens the same right-hand slot swaps the tab list for a back-arrow
// + breadcrumb instead, so it's always exactly one bar, never two stacked.
// Streak/XP/level (no equivalent in the design handoff, which has no
// gamification layer) rides along in the same right-hand group as a small
// tabular cluster.

function headerHtml(state, MODULES) {
  const li = levelInfo(state.xp);
  const inCourse = state.view === 'module' || state.view === 'lesson' || state.view === 'quiz';
  const mod = inCourse ? MODULES.find((m) => m.id === state.moduleId) : null;
  const lesson = mod && (state.view === 'lesson' || state.view === 'quiz')
    ? mod.lessons.find((l) => l.id === state.lessonId)
    : null;
  // Falls back to the plain tab list if the course context is somehow gone
  // (e.g. a stale moduleId) rather than rendering a broken breadcrumb.
  const showCrumbs = inCourse && mod && (state.view === 'module' || lesson);

  // Back button + breadcrumb live on the left, next to the brand -- "where
  // you are / how to get back" reads as one group there, distinct from the
  // right side's forward-navigation (tabs) and stats.
  let leftExtra = '';
  let rightInner = '';
  let dotsHtml = '';

  if (showCrumbs) {
    let crumbs;
    let backAction;
    let backExtra;
    if (state.view === 'module') {
      crumbs = [{ label: mod.title }];
      backAction = 'openDashboard';
      backExtra = '';
    } else if (state.view === 'lesson') {
      crumbs = [{ label: mod.title, action: 'openModule', extra: `data-module-id="${escAttr(mod.id)}"` }];
      // No static "mini title" markup here -- on the lesson view, main.js
      // clones the real page <h1> (and .concept-dots) into fixed-position
      // elements it drives continuously from scroll position, so the
      // title visually keeps traveling into this header instead of
      // crossfading with a separate pre-rendered copy. See
      // setupScrollObserver's docking section.
      backAction = 'openModule';
      backExtra = `data-module-id="${escAttr(mod.id)}"`;
    } else {
      crumbs = [
        { label: mod.title, action: 'openModule', extra: `data-module-id="${escAttr(mod.id)}"` },
        { label: lesson.title, action: 'backToLesson' },
        { label: 'Quiz', en: true },
      ];
      backAction = 'backToLesson';
      backExtra = '';
      const activeIdx = state.quizShowResult ? lesson.quiz.length - 1 : state.quizIndex;
      dotsHtml = `<div class="app-header-dots">${lesson.quiz.map((_, i) => {
        const cls = ['app-header-dot', i === activeIdx ? 'active' : '', i < activeIdx || state.quizShowResult ? 'done' : ''].join(' ').trim();
        return `<div class="${cls}"></div>`;
      }).join('')}</div>`;
    }

    const crumbsHtml = crumbs.map((c, i) => {
      const sep = i > 0 ? '<span class="app-header-crumb-sep">/</span>' : '';
      const nodeCls = ['app-header-crumb-current', c.en ? 'app-header-crumb-en' : ''].join(' ').trim();
      const node = c.action
        ? `<button class="app-header-crumb-link" data-action="${c.action}" ${c.extra || ''}>${esc(c.label)}</button>`
        : `<span class="${nodeCls}">${esc(c.label)}</span>`;
      return sep + node;
    }).join('');

    leftExtra = `
      <div class="app-header-crumbs-group">
        <button class="app-header-back" data-action="${backAction}" ${backExtra} aria-label="Back">${icon('arrowLeft', 16, 2)}</button>
        <div class="app-header-crumbs">${crumbsHtml}</div>
      </div>`;
  } else {
    // Highlights Schedule for the whole time a Revision/Mastery session it
    // launched is running too, not just on the Schedule screen itself --
    // those sessions have no module page of their own to look "active"
    // under instead.
    const scheduleActive = state.view === 'schedule' || state.view === 'masteryComplete'
      || (state.practice && state.practice.source && state.practice.source !== 'module');
    const tab = (label, action, active) =>
      `<button class="app-header-tab ${active ? 'is-active' : ''}" data-action="${action}">${esc(label)}</button>`;

    rightInner = `
      <nav class="app-header-nav" aria-label="Primary">
        ${tab('Home', 'openDashboard', state.view === 'dashboard')}
        ${tab('Schedule', 'openSchedule', scheduleActive)}
        ${tab('Settings', 'openSettings', state.view === 'settings')}
      </nav>`;
  }

  return `
    <header class="app-header">
      <div class="app-header-left">
        <div class="app-header-brand" data-action="openDashboard">
          <span class="app-header-kicker">نحو</span>
          <span class="app-header-rule"></span>
          <span class="app-header-name">Nahw Trainer</span>
        </div>
        ${leftExtra}
      </div>
      <div class="app-header-right">
        ${rightInner}
        <div class="app-header-stats">
          <span class="app-header-stat" title="Current streak">${icon('flame', 15, 1.7)}${state.streak || 1}</span>
          <span class="app-header-stat" title="Total XP">${icon('star', 14, 1.8)}${state.xp} XP</span>
          <span class="app-header-level" title="Level ${li.level}">${li.level}</span>
        </div>
      </div>
      ${dotsHtml}
    </header>`;
}

// --- Footer ---------------------------------------------------------------

function footerHtml(state) {
  const theme = THEMES[state.theme] || THEMES.manuscript;
  const face = FACES[state.arabicFace] || FACES.naskh;
  const faceLabel = face.name + (state.kufiHeadings ? ' + Kufi' : '');
  return `
    <footer class="app-footer">
      <span>Nahw Trainer — a private study desk</span>
      <span class="app-footer-state">${esc(theme.name)} · ${esc(faceLabel)}</span>
    </footer>`;
}

function backLink(label, action, extra = '') {
  return `<button class="back-link" data-action="${action}" ${extra}>← ${esc(label)}</button>`;
}

function progressBar(pct) {
  return `<div class="progress-bar"><div class="progress-bar-fill" style="width:${pct}%"></div></div>`;
}

// --- Dashboard (Home) -------------------------------------------------
// Per the design handoff's Screen 1 -- hero panel, arabesque separator,
// chapters grid -- populated with real progress data rather than the
// handoff's fixed sample copy.

// The next thing to do: the first incomplete lesson in course order. Since
// isLessonUnlocked already gates lessons sequentially within an unlocked
// module, and isModuleUnlocked gates modules sequentially too, the first
// incomplete lesson found this way is always already reachable -- no
// separate unlocked-check needed. Returns null once every lesson in every
// module is complete.
function findContinueLesson(state, MODULES) {
  for (const m of MODULES) {
    if (!isModuleUnlocked(m.id, state.completed)) break;
    for (let i = 0; i < m.lessons.length; i++) {
      const lesson = m.lessons[i];
      if (!isLessonComplete(m.id, lesson.id, state.completed)) {
        return { mod: m, lesson, index: i };
      }
    }
  }
  return null;
}

const ARABESQUE_SVG = `
  <svg width="188" height="26" viewBox="0 0 188 26" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
    <path d="M94 13 L102 5 L110 13 L102 21 Z"></path>
    <path d="M86 13 C 74 13, 74 3, 62 3 C 50 3, 50 13, 38 13"></path>
    <path d="M86 13 C 74 13, 74 23, 62 23 C 50 23, 50 13, 38 13"></path>
    <path d="M118 13 C 130 13, 130 3, 142 3 C 154 3, 154 13, 166 13"></path>
    <path d="M118 13 C 130 13, 130 23, 142 23 C 154 23, 154 13, 166 13"></path>
    <path d="M38 13 L4 13 M166 13 L184 13"></path>
    <circle cx="4" cy="13" r="2"></circle>
    <circle cx="184" cy="13" r="2"></circle>
  </svg>`;

// --- Hero panel (reusable) -------------------------------------------------
// The bordered, corner-bracketed, watermarked panel the design handoff
// specifies for Home. Reused -- in lighter or heavier configurations -- as
// the page header on Module, Lesson, and Schedule, and (as just the corner
// brackets, via cornerBracketsHtml/frameCls below) around the exercise
// card on Quiz/Practice Mode/تركيب, per the user's request to carry this
// same treatment across the whole app rather than confine it to Home.

function cornerBracketsHtml() {
  return `
    <span aria-hidden="true" class="home-hero-corner tl"></span>
    <span aria-hidden="true" class="home-hero-corner tr"></span>
    <span aria-hidden="true" class="home-hero-corner bl"></span>
    <span aria-hidden="true" class="home-hero-corner br"></span>`;
}

function heroBadgeHtml(text) {
  return `
    <div class="home-hero-badge">
      <span class="home-hero-badge-mark" aria-hidden="true"></span>
      <span class="home-hero-badge-text" lang="ar" dir="rtl">${esc(text)}</span>
      <span class="home-hero-badge-mark" aria-hidden="true"></span>
    </div>`;
}

// `rows` is [label, value] pairs; value is inserted raw (tabular numbers,
// so callers pass already-formatted strings/numbers, not HTML).
function heroLedgerHtml(rows) {
  return `
    <dl class="home-ledger">
      ${rows.map(([label, value]) => `<div class="home-ledger-row"><dt class="home-ledger-label">${esc(label)}</dt><dd class="home-ledger-value">${value}</dd></div>`).join('')}
    </dl>`;
}

// title/body are inserted raw (callers esc/escBidi their own content, since
// title often wraps a term in <bdi>); badge/watermark are plain strings.
function heroPanelHtml({ watermark, badge, title, body, actions, ledger }) {
  return `
    <section class="home-hero">
      ${watermark ? `<span aria-hidden="true" class="home-hero-watermark" lang="ar" dir="rtl">${esc(watermark)}</span>` : ''}
      <div class="home-hero-row">
        <div class="home-hero-main">
          ${badge ? heroBadgeHtml(badge) : ''}
          <h1 class="home-hero-title">${title}</h1>
          ${body ? `<p class="home-hero-body">${body}</p>` : ''}
          ${actions ? `<div class="home-hero-actions">${actions}</div>` : ''}
        </div>
        ${ledger || ''}
      </div>
      ${cornerBracketsHtml()}
    </section>`;
}

function separatorHtml() {
  return `
    <div class="home-separator">
      <span class="home-separator-line" aria-hidden="true"></span>
      <span class="home-separator-icon" style="color:var(--color-accent);display:flex;">${ARABESQUE_SVG}</span>
      <span class="home-separator-line" aria-hidden="true"></span>
    </div>`;
}

function homeHeroHtml(state, MODULES) {
  const continueInfo = findContinueLesson(state, MODULES);
  const lessonsCleared = totalLessonsCleared(state.completed);
  const li = levelInfo(state.xp);
  const ledger = heroLedgerHtml([
    ['Lessons done', `${lessonsCleared} / ${totalLessons()}`],
    ['Level', li.level],
    ['XP', state.xp],
    ['Streak', `${state.streak || 1}d`],
  ]);

  if (continueInfo) {
    const { mod, lesson, index } = continueInfo;
    const started = lessonsCleared > 0;
    const bankPool = getBankPool(mod.id, state.completed);
    const actions = `
      <button class="ds-btn ds-btn-primary" data-action="continueLesson" data-module-id="${escAttr(mod.id)}" data-lesson-id="${escAttr(lesson.id)}">${started ? 'Continue' : 'Start'} lesson ${index + 1}</button>
      ${bankPool.length ? `<button class="ds-btn ds-btn-secondary" data-action="reviewModule" data-module-id="${escAttr(mod.id)}">Review ${bankPool.length} cards</button>` : ''}`;
    return heroPanelHtml({
      watermark: 'وَالْعِلْمُ نُورٌ',
      badge: mod.heading || mod.title,
      title: `${started ? 'Continue' : 'Begin'}: <bdi lang="ar">${esc(lesson.title)}</bdi>`,
      body: escBidi(lesson.subtitle || ''),
      actions,
      ledger,
    });
  }

  return heroPanelHtml({
    watermark: 'وَالْعِلْمُ نُورٌ',
    badge: 'تمّ بحمد الله',
    title: 'Every lesson, complete',
    body: `All ${totalLessons()} lessons across every chapter are done. Revisit anything from Schedule, or step back into a module to drill it further.`,
    actions: '<button class="ds-btn ds-btn-primary" data-action="openSchedule">Go to Schedule</button>',
    ledger,
  });
}

function dashboardHtml(state, MODULES, revealedKeys = new Set()) {
  let lastGroupKey = null;
  const cards = MODULES.map((m, i) => {
    // The very first module is the dashboard's "above the fold" content --
    // gating it behind a scroll trigger would mean a learner who never
    // scrolls (the grid can fit on-screen on a tall enough window) never
    // sees chapter 01 slide in at all. Every chapter after it still
    // reveals on scroll as normal.
    const isFirst = i === 0;
    // One divider per distinct (heading, subheading) pair -- every module
    // that starts a new pair gets its own line, always showing both the
    // heading (right) and the subheading (left); modules with no
    // subheading of their own repeat the heading there instead, rather
    // than leaving that side blank. Heading on the right, subheading on
    // the left is a two-child flex row relying on RTL + space-between
    // (the first DOM child lands at the inline-start, the right edge in
    // RTL) rather than separate left/right markup.
    const groupKey = `${m.heading || ''}|${m.subheading || ''}`;
    const groupChanged = groupKey !== lastGroupKey;
    lastGroupKey = groupKey;
    let chapterHtml = '';
    if (groupChanged && m.heading) {
      const subText = m.subheading || m.heading;
      chapterHtml = `<div class="home-chapter-heading" lang="ar" dir="rtl"><span class="home-chapter-heading-main">${esc(m.heading)}</span><span class="home-chapter-subheading">${esc(subText)}</span></div>`;
    }

    const done = completedCount(m.id, state.completed);
    const unlocked = isModuleUnlocked(m.id, state.completed);
    const cardKey = `dash_card_${m.id}`;
    return `${chapterHtml}
      <button class="${revealCls(cardKey, 'chapter-card', revealedKeys, isFirst)}" data-reveal-key="${cardKey}" ${unlocked ? `data-action="openModule" data-module-id="${escAttr(m.id)}"` : 'disabled'}>
        <div class="chapter-card-top">
          <span class="chapter-card-kicker">${unlocked ? `MODULE ${esc(m.id)}` : icon('lock', 12, 2)}</span>
          <span class="chapter-card-arabic" lang="ar" dir="rtl">${esc(m.heading || '')}</span>
        </div>
        <h3 class="chapter-card-title" lang="ar" dir="rtl">${esc(m.title)}</h3>
        <p class="chapter-card-body">${escBidi(m.blurb)}</p>
        <div class="chapter-card-footer">
          <span class="chapter-card-track"><span class="chapter-card-fill" style="width:${m.lessons.length ? Math.round((done / m.lessons.length) * 100) : 0}%"></span></span>
          <span class="chapter-card-meta">${done} of ${m.lessons.length}</span>
        </div>
      </button>`;
  }).join('');

  return `
    <div class="dashboard-page">
      ${homeHeroHtml(state, MODULES)}
      ${separatorHtml()}
      <section class="home-chapters">
        <h2>Chapters</h2>
        <div class="chapter-grid">${cards}</div>
      </section>
      ${state.badges.length ? `
      <div class="badges-row">
        ${state.badges.map((id) => `<span class="tag tag-outline badge-tag">${icon('award', 13, 2)}${esc(BADGE_DEFS[id].name)}</span>`).join('')}
      </div>` : ''}
    </div>`;
}

// --- Module (lesson grid) ------------------------------------------------

function modulePageHtml(state, MODULES) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  if (!mod) return dashboardHtml(state, MODULES);

  const done = completedCount(mod.id, state.completed);
  const pct = mod.lessons.length ? Math.round((done / mod.lessons.length) * 100) : 0;
  const bankPool = getBankPool(mod.id, state.completed);

  const rows = mod.lessons.map((lesson, i) => {
    const unlocked = isLessonUnlocked(mod.id, lesson.id, state.completed);
    const complete = isLessonComplete(mod.id, lesson.id, state.completed);
    // Mastered: every MCQ card for this lesson has hit MASTERY_TARGET_STREAK
    // -- تركيب doesn't count toward mastering a lesson (see scheduleMasteryHtml,
    // which never offers it as a Mastery Mode kind choice). Only meaningful
    // once the lesson is complete (an incomplete lesson's bank pool is empty
    // -- see getBankPool), so it can only ever be true alongside `complete`.
    const lessonPool = bankPool.filter((e) => e.lessonId === lesson.id && e.item.kind !== 'tarkeeb');
    const mastered = complete && lessonPool.length > 0
      && lessonPool.every((e) => state.masteryProgress[e.key] && state.masteryProgress[e.key].mastered);
    const rowCls = ['lesson-row', unlocked ? '' : 'locked', mastered ? 'mastered' : ''].join(' ').trim();
    const indicatorCls = ['lesson-row-indicator', unlocked ? '' : 'locked'].join(' ').trim();
    const indicator = !unlocked
      ? icon('lock', 17, 2)
      : complete
        ? icon('check', 19, 2.4)
        : String(i + 1);
    const tag = !unlocked
      ? `<span class="tag tag-neutral">Locked</span>`
      : mastered
        ? `<span class="tag tag-accent">${icon('award', 11, 2.6)} Mastered</span>`
        : complete
          ? `<span class="tag tag-accent">${icon('check', 11, 2.6)} Done</span>`
          : `<span class="tag tag-accent">Start</span>`;
    return `
    <button class="${rowCls}" data-anim-key="lr${i}" ${unlocked ? `data-action="openLessonPreview" data-lesson-id="${escAttr(lesson.id)}"` : 'disabled'}>
      <div class="${indicatorCls}">${indicator}</div>
      <div class="lesson-row-body">
        <h3>${esc(lesson.title)}</h3>
        <div class="lesson-row-subtitle">${escBidi(lesson.subtitle || '')}</div>
      </div>
      ${tag}
    </button>`;
  }).join('');

  const hero = heroPanelHtml({
    watermark: mod.title,
    badge: mod.heading || null,
    title: `<bdi lang="ar">${esc(mod.title)}</bdi>`,
    body: escBidi(mod.blurb),
    actions: `<button class="ds-btn ds-btn-secondary" ${bankPool.length ? 'data-action="openPractice"' : 'disabled'}>${icon('archive', 15, 1.7)} Practice Mode</button>`,
    ledger: heroLedgerHtml([
      ['Lessons done', `${done} / ${mod.lessons.length}`],
      ['Progress', `${pct}%`],
      ['Cards in pool', `${bankPool.length}`],
    ]),
  });

  return `
    <div class="hero-page">
      ${hero}
      ${separatorHtml()}
      <div class="col-wide">
        ${progressBar(pct)}
        ${state.practiceSetupOpen && state.practiceModuleId === mod.id ? practiceSetupPanelHtml(state, mod) : ''}
        <div class="lesson-list">${rows}</div>
      </div>
    </div>`;
}

// --- "Start lesson" modal ------------------------------------------------

function lessonPreviewHtml(state, MODULES) {
  if (!state.lessonPreviewId) return '';
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const idx = mod ? mod.lessons.findIndex((l) => l.id === state.lessonPreviewId) : -1;
  if (!mod || idx < 0) return '';
  const lesson = mod.lessons[idx];
  const complete = isLessonComplete(mod.id, lesson.id, state.completed);

  return `
    <div class="modal-backdrop" data-anim-key="modalbd" data-action="closeLessonPreview">
      <div class="modal" data-anim-key="modal:${escAttr(lesson.id)}" role="dialog" aria-modal="true" aria-label="${escAttr(lesson.title)}">
        <div class="card-kicker modal-kicker">LESSON ${idx + 1} &middot; ${esc(mod.title)}</div>
        <h3>${esc(lesson.title)}</h3>
        <p class="modal-sub">${escBidi(lesson.subtitle || '')}</p>
        <div class="modal-buttons">
          <button class="btn btn-ghost" data-action="cancelLessonPreview">Cancel</button>
          <button class="btn btn-primary" data-action="startLesson" data-lesson-id="${escAttr(lesson.id)}">${complete ? 'Review lesson' : 'Start lesson'}</button>
        </div>
      </div>
    </div>`;
}

// --- XP toast + badge-unlock modal ---------------------------------------

function toastHtml(state) {
  if (!state.toast) return '';
  return `<div class="xp-toast">${esc(state.toast)}</div>`;
}

function badgeModalHtml(state) {
  if (!state.badgeModal) return '';
  const b = state.badgeModal;
  return `
    <div class="modal-backdrop" data-anim-key="badgemodalbd" style="z-index:60;">
      <div class="modal" data-anim-key="badgemodal:${escAttr(b.id)}" role="dialog" aria-modal="true" aria-label="${escAttr(b.name)}">
        <div class="badge-modal-icon">${icon('award', 36, 1.6)}</div>
        <div class="badge-modal-title">Badge Earned</div>
        <p class="badge-modal-desc">${esc(b.name)} — ${esc(b.desc)}</p>
        <div class="modal-buttons">
          <button class="btn btn-primary" data-action="closeBadgeModal">Continue</button>
        </div>
      </div>
    </div>`;
}

// --- MCQ option rendering (shared) --------------------------------------

// `order` lists the ORIGINAL option indices in the order they should appear.
// data-option always carries the original index, so `selected` and `correct`
// stay meaningful no matter how the options are arranged on screen.
function renderMcqOptions({ options, correct, selected, submitted, actionName, extraData = '', animScope = '', order }) {
  const seq = order && order.length === options.length ? order : options.map((_, i) => i);
  return `
  <div class="mcq-options">
    ${seq.map((orig, pos) => {
      let cls = 'mcq-option';
      // Part of the anim key, so pass/fail feedback animates on the render
      // it appears -- but merely selecting an option does not replay it.
      let feedback = 'n';
      if (selected === orig) cls += ' selected';
      if (submitted) {
        if (orig === correct) {
          cls += ' correct';
          feedback = 'c';
        } else if (orig === selected) {
          cls += ' incorrect';
          feedback = 'x';
        }
      }
      return `<button class="${cls}" data-anim-key="${escAttr(animScope)}o${orig}${feedback}" data-action="${actionName}" data-option="${orig}" ${extraData} ${submitted ? 'disabled' : ''}>
        <span class="mcq-letter">${String.fromCharCode(65 + pos)}</span>
        <span class="mcq-text">${escBidi(options[orig])}</span>
      </button>`;
    }).join('')}
  </div>`;
}

function checkButton(actionName, enabled, extraData = '') {
  return `<button class="btn btn-primary" data-action="${actionName}" ${extraData} ${enabled ? '' : 'disabled'}>Check</button>`;
}

// --- Concept exercise: chip-style choices ---------------------------------
// Distinct from renderMcqOptions (the lettered-circle style used by the
// lesson quiz and Practice Mode MCQ, see the handoff's separate Quiz-screen
// component) -- concept exercises render as small wrapping pill buttons,
// matching the handoff's "Try It" exercise cards.
function renderExerciseChoices({ options, correct, selected, submitted, actionName, extraData = '', animScope = '', order, prefix = '', revealedKeys = null }) {
  const seq = order && order.length === options.length ? order : options.map((_, i) => i);
  const choicesKey = prefix ? `${prefix}_choices` : '';
  const containerCls = choicesKey ? revealCls(choicesKey, 'exercise-choices', revealedKeys) : 'exercise-choices';
  const containerAttr = choicesKey ? ` data-reveal-key="${choicesKey}"` : '';

  return `
  <div class="${containerCls}"${containerAttr}>
    ${seq.map((orig) => {
      let cls = 'exercise-choice';
      let feedback = 'n';
      if (selected === orig) cls += ' selected';
      if (submitted) {
        if (orig === correct) {
          cls += ' correct';
          feedback = 'c';
        } else if (orig === selected) {
          cls += ' incorrect';
          feedback = 'x';
        }
      }
      return `<button class="${cls}" data-anim-key="${escAttr(animScope)}o${orig}${feedback}" data-action="${actionName}" data-option="${orig}" ${extraData} ${submitted ? 'disabled' : ''}><span>${escBidi(options[orig])}</span></button>`;
    }).join('')}
  </div>`;
}

// Applied to the very first concept's opening paragraph only, and only when
// it actually starts with a Latin letter -- most concept bodies open with
// an Arabic <bdi> term (see content/module-0N.js), and a drop-cap forced
// onto Arabic script would fight the "keep the Arabic font as-is" brief, so
// this quietly no-ops rather than mis-styling a هذا.
// The class list on that opening <p> also carries the reveal-on-scroll
// classes and a data-reveal-key (see conceptProseHtml/revealCls below), so
// the match has to tolerate anything after "concept-line" inside the tag --
// pinning it to a bare class="concept-line" silently never matched.
// It is applied to the concept BODY html only (see conceptBlockHtml), which
// is what keeps the cap on the first paragraph of the prose rather than on
// the TL;DR line that now sits above it.
function applyDropCap(html) {
  return html.replace(/^(<p class="concept-line[^"]*"[^>]*>)([A-Za-z])/, (_m, open, letter) => `${open}<span class="dropcap">${letter}</span>`);
}

// --- Lesson: every reached concept on one scrolling page -----------------

// Shared prose renderer -- one <p> per sentence, enumerations collapsed
// into a <ul>, exactly like a concept's main body. Takes anything
// conceptLines can read (a real concept, or a synthetic {body: text}), so
// a clarification note reads with the same rhythm as the prose above it
// instead of landing as one dense paragraph.
function conceptProseHtml(pseudoConcept, prefix = '', revealedKeys = null, forceReveal = false) {
  let html = '';
  let openList = false;
  let lineIdx = 0;
  conceptLines(pseudoConcept).forEach((line) => {
    lineIdx++;
    const itemKey = prefix ? `${prefix}_p${lineIdx}` : '';
    const lineHtml = isolateArabicHtml(line.html);
    const cls = itemKey ? revealCls(itemKey, 'concept-line', revealedKeys, forceReveal) : 'concept-line';
    const attr = itemKey ? ` data-reveal-key="${itemKey}"` : '';

    if (line.list) {
      if (!openList) {
        html += '<ul class="concept-list">';
        openList = true;
      }
      const liCls = itemKey ? revealCls(itemKey, line.bullet ? 'bulleted' : '', revealedKeys, forceReveal) : (line.bullet ? 'bulleted' : '');
      html += `<li class="${liCls}"${attr}>${lineHtml}</li>`;
    } else {
      if (openList) {
        html += '</ul>';
        openList = false;
      }
      html += `<p class="${cls}"${attr}>${lineHtml}</p>`;
    }
  });
  if (openList) html += '</ul>';
  return html;
}

// A supplementary note for the handful of concepts whose prose alone left a
// gap -- added context under the concept, not a rewrite of the body above
// it.
function revealCls(key, baseCls, revealedKeys, forceReveal = false) {
  const isRev = forceReveal || (revealedKeys && revealedKeys.has(key));
  return `${baseCls} reveal-on-scroll${isRev ? ' is-revealed' : ''}`;
}

function conceptClarificationHtml(text, key, revealedKeys, forceReveal = false) {
  if (!text) return '';
  return `
    <div class="${revealCls(key, 'concept-clarification', revealedKeys, forceReveal)}" data-reveal-key="${key}">
      <div class="concept-clarification-label">Clarification</div>
      ${conceptProseHtml({ body: text })}
    </div>`;
}

// The one-sentence takeaway, between the concept heading and the prose --
// "the point" for a learner skimming the page rather than reading it.
// Deliberately NOT run through conceptProseHtml: a tldr is one sentence by
// spec, so splitting it is never right, and splitList() actively mangles it
// -- "One تاء does seven jobs: قَسَم, …, and زَائِدَة on رُبَّتَ، ثُمَّتَ، ثَمَّتَ."
// is a colon followed by five-plus short comma-separated terms, so it came
// out as nine <li> under a lead-in that says "seven", the Arabic commas
// inside the last term splitting it into three. One <p>, same authored-
// markup contract as body/clarification (an inline <bdi> term is honoured),
// same bidi isolation helper.
function conceptTldrHtml(text, key, revealedKeys, forceReveal = false) {
  if (!text) return '';
  return `
    <div class="${revealCls(key, 'concept-tldr', revealedKeys, forceReveal)}" data-reveal-key="${key}">
      <div class="concept-tldr-label">In short</div>
      <p class="concept-line">${isolateArabicHtml(text)}</p>
    </div>`;
}

// Rows for the worked-examples box: the authored `examples` array when the
// concept has one, otherwise the legacy `sample` string (a <br>-separated
// list of "term — instance" pairs, authored on nearly every concept and
// previously never rendered). The fallback rows are Arabic-only -- `sample`
// carries no gloss or note -- so the box degrades to a plain examples list
// on content that hasn't been rewritten yet.
// The fallback keys off the *rendered rows*, not off `examples` merely
// existing: a half-authored entry ({ note: 'why' } with no ar/en yet) is
// filtered out here, and keying off the array's length would have left a
// concept mid-rewrite with no examples box at all -- strictly worse than
// the sample it still carries.
function conceptExampleRows(concept) {
  if (Array.isArray(concept.examples) && concept.examples.length) {
    const rows = concept.examples
      .filter((e) => e && (e.ar || e.en))
      .map((e) => ({ ar: e.ar || '', en: e.en || '', note: e.note || '' }));
    if (rows.length) return rows;
  }
  if (typeof concept.sample === 'string' && concept.sample.trim()) {
    return concept.sample
      .split(/<br\s*\/?>/i)
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => ({ ar: s, en: '', note: '' }));
  }
  return [];
}

function conceptExamplesHtml(concept, key, revealedKeys, forceReveal = false) {
  const rows = conceptExampleRows(concept);
  if (!rows.length) return '';
  const body = rows.map((r) => `
        <div class="concept-example">
          ${r.ar ? `<div class="concept-example-ar" lang="ar" dir="rtl">${esc(r.ar)}</div>` : ''}
          ${r.en ? `<div class="concept-example-en">${escBidi(r.en)}</div>` : ''}
          ${r.note ? `<div class="concept-example-note">${escBidi(r.note)}</div>` : ''}
        </div>`).join('');
  return `
    <div class="${revealCls(key, 'concept-examples', revealedKeys, forceReveal)}" data-reveal-key="${key}">
      <div class="concept-examples-label">Worked examples</div>
      ${body}
    </div>`;
}

function conceptBlockHtml(state, mod, lesson, i, revealedKeys) {
  const concept = lesson.concepts[i];
  const key = conceptKey(mod.id, lesson.id, i);
  const stage = state.revealState[key] || 0;
  const exState = state.exStates[key] || {};
  const isFirstConcept = i === 0;

  const cbKey = `cb_${mod.id}_${lesson.id}_${i}`;
  const exCardKey = `ex_${mod.id}_${lesson.id}_${i}`;
  const clKey = `cl_${mod.id}_${lesson.id}_${i}`;
  const tlKey = `tl_${mod.id}_${lesson.id}_${i}`;
  const exmKey = `exm_${mod.id}_${lesson.id}_${i}`;

  let lines = conceptProseHtml(concept, `${cbKey}_prose`, revealedKeys, isFirstConcept);
  if (i === 0) lines = applyDropCap(lines);

  let tail = '';
  if (concept.exercise && stage < 1) {
    const btnKey = `ex_btn_${mod.id}_${lesson.id}_${i}`;
    tail = `<button class="${revealCls(btnKey, 'btn btn-outline', revealedKeys)}" data-reveal-key="${btnKey}" data-action="revealExercise" data-index="${i}">Show exercise</button>`;
  } else if (concept.exercise) {
    const ex = concept.exercise;
    const submitted = !!exState.submitted;
    const passed = !!exState.passed;
    const wasCorrect = exState.selected === ex.correct;
    const feedback = submitted
      ? `<div class="exercise-feedback ${wasCorrect ? 'correct' : 'incorrect'}">${wasCorrect ? icon('check', 13, 2.4) : ''}${wasCorrect ? 'Correct.' : `Not quite — the answer is ${escBidi(ex.options[ex.correct])}.`}</div>`
      : '';
    tail = `
    <div class="${revealCls(exCardKey, 'card exercise-card', revealedKeys)}" data-reveal-key="${exCardKey}">
      <div class="card-kicker">EXERCISE</div>
      <div class="exercise-content">
        <div class="exercise-left">
          <p class="${revealCls(`${exCardKey}_prompt`, 'exercise-prompt', revealedKeys)}" data-reveal-key="${exCardKey}_prompt">${escBidi(ex.prompt)}</p>
          ${feedback}
          <div class="action-row">
            ${!submitted ? checkButton('checkConceptExercise', exState.selected !== undefined && exState.selected !== null, `data-index="${i}"`) : ''}
            ${passed
              ? `<span class="tag tag-accent" data-anim-key="ex${i}ok">${icon('check', 11, 2.6)} Correct</span>`
              : submitted ? `<button class="btn btn-ghost" data-action="retryConceptExercise" data-index="${i}">Try again</button>` : ''}
          </div>
        </div>
        <div class="exercise-right">
          ${renderExerciseChoices({
            options: ex.options,
            correct: ex.correct,
            selected: exState.selected,
            submitted,
            actionName: 'selectConceptOption',
            extraData: `data-index="${i}"`,
            animScope: `ex${i}`,
            order: state.optionOrder[key],
            prefix: exCardKey,
            revealedKeys,
          })}
        </div>
      </div>
      ${cornerBracketsHtml()}
    </div>`;
  }

  return `
    <div class="concept-block" data-anim-key="c${i}" data-concept-index="${i}">
      <div class="card-kicker">// CONCEPT ${i + 1}</div>
      <h3 class="${revealCls(`${cbKey}_h3`, '', revealedKeys, isFirstConcept)}" data-reveal-key="${cbKey}_h3">${esc(concept.heading)}</h3>
      ${conceptTldrHtml(concept.tldr, tlKey, revealedKeys, isFirstConcept)}
      <div class="concept-body">${lines}</div>
      ${conceptExamplesHtml(concept, exmKey, revealedKeys, isFirstConcept)}
      ${conceptClarificationHtml(concept.clarification, clKey, revealedKeys, isFirstConcept)}
      ${tail}
    </div>`;
}

function lessonHtml(state, MODULES, revealedKeys) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === state.lessonId);
  if (!mod || !lesson) return modulePageHtml(state, MODULES);

  const shown = conceptsToRender(lesson, state.exStates, mod.id, lesson.id);
  const allPassed = areAllConceptsPassed(lesson, state.exStates, mod.id, lesson.id);

  const dots = lesson.concepts
    .map((_, i) => `<div class="concept-dot ${i < shown ? 'filled' : ''}"></div>`)
    .join('');

  const blocks = lesson.concepts
    .slice(0, shown)
    .map((_, i) => conceptBlockHtml(state, mod, lesson, i, revealedKeys))
    .join('');

  const qpKey = `qp_${mod.id}_${lesson.id}`;
  const quizPrompt = allPassed ? `
    <div class="${revealCls(qpKey, 'quiz-prompt', revealedKeys)}" data-reveal-key="${qpKey}">
      <div class="kicker">LESSON COMPLETE</div>
      <h3>Move onto the quiz?</h3>
      <p>You've cleared every concept in ${esc(lesson.title)}. Answer the quiz to complete this lesson.</p>
      <button class="ds-btn ds-btn-primary" data-action="gotoQuiz">Continue to quiz →</button>
    </div>` : '';

  const objectives = lesson.concepts.map((c, i) => {
    const reached = i < shown;
    const done = reached && isConceptExercisePassed(lesson, i, state.exStates, mod.id, lesson.id);
    const objKey = `sb_obj_item_${mod.id}_${lesson.id}_${i}`;
    const cls = revealCls(objKey, 'lesson-objective' + (done ? ' done' : '') + (reached ? ' clickable' : ''), revealedKeys);
    // Only concepts already reached actually exist in the page below to
    // scroll to -- anything further along in the lesson than the reader
    // has gotten isn't rendered yet, so it stays a plain (unclickable)
    // label of what's coming.
    const action = reached ? ` data-action="scrollToConcept" data-index="${i}"` : '';
    return `
      <div class="${cls}" data-reveal-key="${objKey}"${action}>
        <div class="lesson-objective-dot"></div>
        ${esc(c.heading)}
      </div>`;
  }).join('');

  const sbObjKey = `sb_obj_${mod.id}_${lesson.id}`;
  const sbProgKey = `sb_prog_${mod.id}_${lesson.id}`;

  const prog = lessonProgress(lesson, state.exStates, mod.id, lesson.id);
  const lessonIdx = mod.lessons.findIndex((l) => l.id === lesson.id);

  const hero = heroPanelHtml({
    watermark: lesson.title,
    badge: mod.heading || mod.title,
    title: `<bdi lang="ar">${esc(lesson.title)}</bdi>`,
    body: escBidi(lesson.subtitle || ''),
    ledger: heroLedgerHtml([
      ['Lesson', `${lessonIdx + 1} / ${mod.lessons.length}`],
      ['Concepts cleared', `${prog.done} / ${prog.total}`],
    ]),
  });

  return `
    <div class="hero-page">
      ${hero}
      ${separatorHtml()}
      <div class="col col-wide">
        <div class="concept-dots" style="justify-content:center;">${dots}</div>

        <div class="lesson-layout" style="margin-top:28px;">
          <div class="lesson-main">
            ${blocks}
            ${quizPrompt}
          </div>
          <div class="lesson-sidebar">
            <div class="${revealCls(sbObjKey, 'card lesson-sidebar-card', revealedKeys, true)}" data-reveal-key="${sbObjKey}">
              <div class="card-kicker">In This Lesson</div>
              <div class="lesson-objectives">${objectives}</div>
            </div>
            <div class="${revealCls(sbProgKey, 'card lesson-sidebar-card lesson-progress-card', revealedKeys)}" data-reveal-key="${sbProgKey}">
              <div class="card-kicker" style="text-align:center;">Your Progress</div>
              <div class="lesson-progress-value">${prog.done}/${prog.total}</div>
              <div class="lesson-progress-label">concepts cleared</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

// --- Quiz -------------------------------------------------------------
// One question at a time, reveal-on-click (see selectQuizOption/
// nextQuizQuestion in main.js) -- matches the handoff's Quiz screen. The
// live streak/XP strip and the result screen's tier badge + confetti are a
// purely cosmetic session layer (see gamification.js's quizCosmeticXp/
// quizTier/longestStreak); the XP actually credited to the player still
// comes from xpForQuiz alone, awarded once via the existing finishLesson
// flow -- so this screen never shows its own "+XP" total, which would
// otherwise disagree with the real toast a moment later.

function quizResultHtml(state, mod, lesson) {
  const total = lesson.quiz.length;
  const correct = state.quizAnswers.filter((a, qi) => a === lesson.quiz[qi].correct).length;
  const frac = correct / total;
  const tier = quizTier(frac);
  const best = longestStreak(state.quizAnswers.map((a, qi) => a === lesson.quiz[qi].correct));
  const passPct = Math.round(QUIZ_PASS_RATIO * 100);
  const passed = frac >= QUIZ_PASS_RATIO;

  const message = frac === 1
    ? 'A flawless recitation.'
    : passed
      ? 'A solid grasp — review what you missed.'
      : `Revisit the lesson before moving on — you need ${passPct}% to complete it.`;

  const confetti = frac === 1
    ? Array.from({ length: 10 }, (_, i) => `<span class="confetti-piece" style="left:${i * 9 + 5}%;animation-delay:${(i * 0.08).toFixed(2)}s;"></span>`).join('')
    : '';

  const footer = passed ? `
      <div class="action-row" style="justify-content:center;">
        <button class="btn btn-secondary" data-action="retakeQuiz">Retake Quiz</button>
        <button class="btn btn-primary" data-action="finishLesson">Finish Lesson →</button>
      </div>` : `
      <div class="action-row" style="justify-content:center;">
        <button class="btn btn-secondary" data-action="backToLesson">Back to Lesson</button>
        <button class="btn btn-primary" data-action="retakeQuiz">Retake Quiz</button>
      </div>`;

  return `
    <div class="quiz-result" data-anim-key="quizresult${state.quizAttempt || 0}">
      ${confetti}
      <div class="card-kicker" style="text-align:center;">Quiz Complete</div>
      <div class="quiz-result-score">${correct} / ${total}</div>
      <div class="page-header-hr"></div>
      <p class="quiz-result-message">${esc(message)}</p>
      <div class="quiz-result-tags">
        ${tier ? `<span class="tag tag-outline">${icon('award', 13, 2)} ${tier}</span>` : ''}
        ${best > 1 ? `<span class="tag tag-neutral">Best streak ${best}</span>` : ''}
      </div>
      ${footer}
      ${cornerBracketsHtml()}
    </div>`;
}

function quizHtml(state, MODULES) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === state.lessonId);
  if (!mod || !lesson) return modulePageHtml(state, MODULES);

  if (state.quizShowResult) {
    return `<div class="col">${quizResultHtml(state, mod, lesson)}</div>`;
  }

  const qi = state.quizIndex;
  const q = lesson.quiz[qi];
  const revealed = state.quizRevealed;
  const wasCorrect = state.quizSelected === q.correct;

  // Live, session-only streak/XP -- every already-committed answer plus the
  // current one once revealed.
  const settled = state.quizAnswers.map((a, i) => a === lesson.quiz[i].correct);
  if (revealed) settled.push(wasCorrect);
  const liveStreak = (() => {
    let run = 0;
    for (let i = settled.length - 1; i >= 0 && settled[i]; i--) run += 1;
    return run;
  })();
  const liveXp = settled.reduce((sum, ok) => sum + quizCosmeticXp(ok), 0);

  const scope = `q${state.quizAttempt || 0}i${qi}`;
  const feedback = revealed
    ? `<div class="quiz-feedback-line ${wasCorrect ? 'correct' : 'incorrect'}">${wasCorrect ? `Correct — +${quizCosmeticXp(true)} XP` : `Not quite — the answer is ${escBidi(q.options[q.correct])} — +${quizCosmeticXp(false)} XP`}</div>`
    : '';

  return `
    <div class="col">
      <div class="quiz-question-single" data-anim-key="${scope}">
        <div class="quiz-gamify-strip">
          <span class="quiz-gamify-stat">${icon('flame', 15, 1.7)} ${liveStreak} streak</span>
          <span class="quiz-gamify-stat">${icon('star', 14, 1.8)} ${liveXp} XP</span>
        </div>
        <div class="card-kicker" style="text-align:center;">Question ${qi + 1} of ${lesson.quiz.length}</div>
        <h2>${escBidi(q.q)}</h2>
        ${renderMcqOptions({ options: q.options, correct: q.correct, selected: state.quizSelected, submitted: revealed, actionName: 'selectQuizOption', animScope: scope, order: state.quizOptionOrder[qi] })}
        ${feedback}
        <button class="btn btn-primary btn-block" data-action="nextQuizQuestion" style="margin-top:16px;" ${revealed ? '' : 'disabled'}>${qi + 1 < lesson.quiz.length ? 'Next Question' : 'See Results'}</button>
        ${cornerBracketsHtml()}
      </div>
    </div>`;
}

// --- Lesson complete ---------------------------------------------------

function lessonCompleteHtml(state, MODULES) {
  const mod = MODULES.find((m) => m.id === state.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === state.lessonId);
  if (!mod || !lesson) return modulePageHtml(state, MODULES);

  const score = (state.quizScores[mod.id] || {})[lesson.id];
  const xpTag = score
    ? `<div class="tag tag-accent" style="margin:12px auto 0;font-size:13px;">+${xpForQuiz(score.correct, score.total)} XP</div>`
    : '';

  return `
    <div class="col complete-col">
      <div class="kicker" style="justify-content:center;display:flex;">LESSON CLEARED</div>
      <h1 style="text-align:center;">أحسنت! — Well done</h1>
      <p class="lede" style="text-align:center;margin:0 auto;">You've completed <strong>${esc(lesson.title)}</strong>. Progress saved to disk.</p>
      <div style="text-align:center;">${xpTag}</div>
      <div class="complete-buttons">
        <button class="btn btn-ghost" data-action="openModule" data-module-id="${escAttr(mod.id)}">Back to chapters</button>
        <button class="btn btn-primary" data-action="openPractice">Practice this chapter →</button>
      </div>
    </div>`;
}

// --- Practice: تركيب widget ------------------------------------------------

function renderTarkeeb(state, item, key) {
  const ts = state.tarkeebState[key];
  const submitted = !!ts.submitted;
  const feedback = ts.feedback;

  const wordCols = item.words.map((word, i) => {
    const chipIdx = ts.placements[i];
    const chipText = chipIdx === null || chipIdx === undefined ? null : ts.chipPool[chipIdx];
    let slotCls = 'tarkeeb-slot';
    let slotState = 'empty';
    if (chipText) {
      slotCls += ' filled';
      slotState = `f${chipIdx}`;
    }
    if (submitted && feedback) {
      slotCls += feedback[i].pass ? ' correct' : ' incorrect';
      slotState += feedback[i].pass ? '-ok' : '-no';
    }
    return `
    <div class="tarkeeb-col" data-anim-key="tc:${escAttr(key)}:${i}">
      <div class="tarkeeb-word">${esc(word)}</div>
      <div class="${slotCls}" data-anim-key="ts:${escAttr(key)}:${i}:${slotState}" data-action="tarkeebSlotClick" data-slot="${i}" data-key="${escAttr(key)}">${chipText ? esc(chipText) : ''}</div>
    </div>`;
  }).join('');

  const usedChipIdx = new Set(ts.placements.filter((p) => p !== null && p !== undefined));
  const tray = ts.chipOrder.map((chipIdx) => {
    const used = usedChipIdx.has(chipIdx);
    let cls = 'tarkeeb-chip';
    if (used) cls += ' used';
    if (ts.selectedChip === chipIdx) cls += ' selected';
    const draggable = !used && !submitted;
    return `<div class="${cls}" draggable="${draggable ? 'true' : 'false'}" data-action="tarkeebChipClick" data-chip="${chipIdx}" data-key="${escAttr(key)}">${esc(ts.chipPool[chipIdx])}</div>`;
  }).join('');

  const allPlaced = ts.placements.every((p) => p !== null && p !== undefined);
  const passed = submitted && feedback && feedback.every((f) => f.pass);

  return `
  <div class="tarkeeb" data-tarkeeb-key="${escAttr(key)}">
    <p class="exercise-prompt">${escBidi(item.instruction)}</p>
    ${item.source ? `<div class="tarkeeb-source" dir="rtl">${esc(item.source)}</div>` : ''}
    <div class="tarkeeb-row" dir="rtl">${wordCols}</div>
    <div class="tarkeeb-tray-label">Drag each label onto its word (tap a filled slot to clear it)</div>
    <div class="tarkeeb-tray" dir="rtl">${tray}</div>
    <div class="action-row">
      ${!submitted ? checkButton('checkTarkeeb', allPlaced, `data-key="${escAttr(key)}"`) : ''}
      ${!submitted ? `<button class="btn btn-ghost" data-action="resetTarkeeb" data-key="${escAttr(key)}">Reset</button>` : ''}
      ${submitted ? `<span class="tag ${passed ? 'tag-accent' : 'tag-outline'}" data-anim-key="tk:${escAttr(key)}:${passed ? 'ok' : 'no'}">${passed ? '✓ Correct' : '✗ Not quite'}</span>` : ''}
    </div>
  </div>`;
}

// --- Practice Mode --------------------------------------------------------

const PRACTICE_PRESET_COUNTS = [10, 20, 40];

// Presets smaller than the pool stay selectable as-is; "All" always appears
// and covers whatever's left, so there's never a redundant pair of buttons
// offering the same count.
function practiceCountOptions(poolLen) {
  const opts = PRACTICE_PRESET_COUNTS.filter((n) => n < poolLen).map((n) => ({ label: String(n), count: n }));
  opts.push({ label: 'All', count: poolLen });
  return opts;
}

// The popout that expands under the module page's "Practice Mode" button --
// picking a tab and a count starts the session immediately (see
// startPractice), so there's no separate "confirm" step.
function practiceSetupPanelHtml(state, mod) {
  const kind = state.practiceSetupKind || 'mcq';
  const mcqPool = getMcqPool(mod.id, state.completed);
  const tarkeebPool = getTarkeebPool(mod.id, state.completed);
  const pool = kind === 'tarkeeb' ? tarkeebPool : mcqPool;
  const kindLabel = kind === 'tarkeeb' ? 'تركيب' : 'MCQ';

  const body = pool.length === 0
    ? `<p class="empty-state">Complete a lesson to unlock ${kindLabel} practice questions.</p>`
    : `
      <p class="lede">Choose how many to practice.</p>
      <div class="practice-count-grid">
        ${practiceCountOptions(pool.length).map((o) => `<button class="btn btn-outline practice-count-btn" data-action="startPractice" data-kind="${kind}" data-count="${o.count}">${o.label}</button>`).join('')}
      </div>`;

  return `
    <div class="card practice-popout" data-anim-key="practicepopout">
      <div class="practice-popout-head">
        <div class="practice-tabs">
          <button class="practice-tab ${kind === 'mcq' ? 'active' : ''}" data-action="setPracticeTab" data-kind="mcq">MCQ</button>
          <button class="practice-tab ${kind === 'tarkeeb' ? 'active' : ''}" data-action="setPracticeTab" data-kind="tarkeeb">تركيب</button>
        </div>
        <button class="practice-popout-close" data-action="closePracticeSetup" aria-label="Close">✕</button>
      </div>
      ${body}
    </div>`;
}

function nextPracticeButton(isLast) {
  return `<button class="btn btn-primary btn-push-right" data-action="nextPracticeQuestion">${isLast ? 'See results →' : 'Next question →'}</button>`;
}

// Shared by all three session sources -- 'module' (undefined/default) is
// the original per-module Practice Mode; 'revision' and 'mastery' route
// their "session over/missing" bail-outs back to the Schedule tab instead
// of a module page, since neither has one.
function sessionFallback(state, MODULES) {
  const src = state.practice && state.practice.source;
  return src === 'revision' || src === 'mastery' ? scheduleHtml(state, MODULES) : modulePageHtml(state, MODULES);
}

function sessionKicker(p) {
  const label = p.kind === 'tarkeeb' ? 'تركيب' : 'MCQ';
  if (p.source === 'revision') return `REVISION · ${label}`;
  if (p.source === 'mastery') return `MASTERY · ${label}`;
  return `PRACTICE · ${label}`;
}

function practiceHtml(state, MODULES) {
  const p = state.practice;
  if (!p) return modulePageHtml(state, MODULES);
  // 'revision' spans every unlocked lesson at once -- no single owning
  // module to look up. 'module' and 'mastery' both have one.
  const mod = p.source === 'revision' ? null : MODULES.find((m) => m.id === p.moduleId);
  if (p.source !== 'revision' && !mod) return sessionFallback(state, MODULES);

  // Mastery is always MCQ -- تركيب doesn't count toward mastering a lesson
  // (see scheduleMasteryHtml/isLessonFullyMastered), so there's no kind
  // branch to check here the way 'revision' and 'module' both need.
  const pool = p.source === 'revision'
    ? (p.kind === 'tarkeeb' ? getAllTarkeebPool(state.completed) : getAllMcqPool(state.completed))
    : p.source === 'mastery'
      ? getBankPool(p.moduleId, state.completed).filter((e) => e.lessonId === p.lessonId && e.item.kind !== 'tarkeeb')
      : (p.kind === 'tarkeeb' ? getTarkeebPool(mod.id, state.completed) : getMcqPool(mod.id, state.completed));
  const key = p.queue[p.index];
  const entry = pool.find((e) => e.key === key);
  // The unlocked pool can only grow between sessions, never shrink mid-one --
  // but bail safely rather than render a missing item.
  if (!entry) return sessionFallback(state, MODULES);

  const isLast = p.index + 1 >= p.queue.length;
  const progressPct = Math.round((p.index / p.queue.length) * 100);
  // Mastery Mode never "ends" at a fixed question count -- it loops
  // indefinitely over the lesson's not-yet-mastered cards (see
  // nextPracticeQuestion's refill branch in main.js), so nothing here
  // shows a question counter, a progress bar tied to a total, or a "See
  // Results" label that would falsely imply an endpoint. Just the card,
  // answered, then the next one.
  const isMastery = p.source === 'mastery';

  // تركيب has no equivalent in the end-of-lesson quiz to mirror -- it keeps
  // its own bordered-card presentation, unchanged.
  if (p.kind === 'tarkeeb') {
    let body = renderTarkeeb(state, entry.item, entry.key);
    const ts = state.tarkeebState[entry.key];
    if (ts && ts.submitted) {
      body += `<div class="action-row">${nextPracticeButton(isMastery ? false : isLast)}</div>`;
    }
    return `
      <div class="col">
        ${backLink('End session', 'endPracticeSession')}
        <div class="kicker">${sessionKicker(p)}</div>
        ${isMastery ? '' : `
        <p class="lede">Question ${p.index + 1} of ${p.queue.length} ${p.combo > 1 ? `<span class="tag tag-accent">Combo ×${p.combo}</span>` : ''}</p>
        ${progressBar(progressPct)}`}
        <div class="card exercise-card" data-anim-key="practice:${p.startedAt}:${p.index}">
          <div class="card-kicker">${escBidi(entry.title)}</div>
          ${body}
          ${cornerBracketsHtml()}
        </div>
      </div>`;
  }

  // MCQ practice mirrors the end-of-lesson quiz's presentation exactly:
  // the same unboxed .quiz-question-single layout, live gamify strip,
  // centered "Question X of Y", <h2> prompt, feedback line, and full-width
  // primary button -- using the combo/XP practice already tracks per
  // session in place of the quiz's own live streak/XP. Reveal-on-click,
  // same as the quiz: picking an option grades and shows it immediately
  // (see selectPracticeOption in main.js).
  const scope = `prac${p.startedAt}i${p.index}`;
  const feedback = p.submitted
    ? `<div class="quiz-feedback-line ${p.correct ? 'correct' : 'incorrect'}">${p.correct ? 'Correct.' : `Not quite — the answer is ${escBidi(entry.item.options[entry.item.correct])}.`}</div>`
    : '';

  return `
    <div class="col">
      ${backLink('End session', 'endPracticeSession')}
      <div class="kicker" style="justify-content:center;display:flex;">${sessionKicker(p)}</div>
      <div class="quiz-question-single" data-anim-key="${scope}">
        <div class="quiz-gamify-strip">
          <span class="quiz-gamify-stat">${icon('flame', 15, 1.7)} ${p.combo || 0} streak</span>
          <span class="quiz-gamify-stat">${icon('star', 14, 1.8)} ${p.xpGained || 0} XP</span>
        </div>
        ${isMastery ? '' : `<div class="card-kicker" style="text-align:center;">Question ${p.index + 1} of ${p.queue.length}</div>`}
        <h2>${escBidi(entry.item.prompt)}</h2>
        ${renderMcqOptions({ options: entry.item.options, correct: entry.item.correct, selected: p.selected, submitted: p.submitted, actionName: 'selectPracticeOption', animScope: scope, order: state.optionOrder[key] })}
        ${feedback}
        <button class="btn btn-primary btn-block" data-action="nextPracticeQuestion" style="margin-top:16px;" ${p.submitted ? '' : 'disabled'}>${isMastery ? 'Next' : (isLast ? 'See Results' : 'Next Question')}</button>
        ${cornerBracketsHtml()}
      </div>
    </div>`;
}

function practiceReviewHtml(state, MODULES) {
  const p = state.practice;
  if (!p) return modulePageHtml(state, MODULES);
  const total = p.log.length;
  const correctCount = p.log.filter((l) => l.correct).length;
  const pct = total ? Math.round((correctCount / total) * 100) : 0;
  const missedCount = total - correctCount;

  const rows = p.log.map((l, i) => `
    <div class="review-row ${l.correct ? 'correct' : 'incorrect'}">
      <span class="review-row-num">${i + 1}</span>
      <span class="review-row-title">${escBidi(l.title)}</span>
      <span class="tag ${l.correct ? 'tag-accent' : 'tag-outline'}">${l.correct ? '✓' : '✗'}</span>
    </div>`).join('');

  // The real total, not recomputed -- xpForPracticeCorrect scales with the
  // combo at the moment each answer landed, so a flat correctCount*rate
  // formula would only be right if the combo never varied.
  const xpGained = p.xpGained || 0;

  // 'module' Practice Mode offers "Practice again" (reopens the per-module
  // popout) and returns to that module's page. Revision/Mastery have
  // neither a popout nor a module page to go back to -- they offer to
  // re-run the exact same session (a fresh due-deck for Revision, the
  // lesson's remaining unmastered cards for Mastery) and otherwise return
  // to the Schedule tab.
  const footer = p.source === 'revision' ? `
      <div class="complete-buttons">
        <button class="btn btn-primary" data-action="startRevision">Revise again</button>
        <button class="btn btn-ghost" data-action="closePracticeReview">Back to Schedule</button>
      </div>` : p.source === 'mastery' ? `
      <div class="complete-buttons">
        <button class="btn btn-primary" data-action="startMastery">Keep practicing</button>
        <button class="btn btn-ghost" data-action="closePracticeReview">Back to Schedule</button>
      </div>` : `
      <div class="complete-buttons">
        <button class="btn btn-primary" data-action="openPractice">Practice again</button>
        <button class="btn btn-ghost" data-action="closePracticeReview">Back to chapters</button>
      </div>`;

  return `
    <div class="col">
      <div class="kicker" style="justify-content:center;display:flex;">SESSION COMPLETE</div>
      <h1 style="text-align:center;">${correctCount} / ${total} correct</h1>
      <div style="text-align:center;"><div class="tag tag-accent" style="font-size:13px;">+${xpGained} XP</div></div>
      <div class="stat-row">
        <div class="card stat-card"><div class="stat-kicker">Score</div><div class="stat-value">${pct}%</div></div>
        <div class="card stat-card"><div class="stat-kicker">Missed</div><div class="stat-value">${missedCount}</div></div>
      </div>
      <div class="review-list">${rows}</div>
      ${footer}
    </div>`;
}

// --- Schedule tab: Deadline / Revision / Mastery --------------------------
// Three independent planning tools sharing one landing page. Deadline picks
// a target date and works out a daily lesson quota, recomputed live on every
// render from remaining/days-left rather than a stored plan (see state.js's
// scheduleDeadline comment). Revision builds a due-today deck from the
// whole unlocked course, spaced by a learner-set frequency. Mastery drills
// one lesson at a time until every card in it has been answered correctly
// MASTERY_TARGET_STREAK times in a row. All three sessions reuse the exact
// same practice/practiceReview screens (see practiceHtml's `source` handling)
// -- this file only builds the setup panels that launch them.

// Every element below that wants a staggered slide-in carries a
// data-anim-key scoped by the current scheduleTabAttempt (see state.js),
// so switching tabs -- which doesn't change state.view, and so wouldn't
// otherwise retrigger the usual "only animate a key once" entrance system
// (markEntrances in main.js) -- replays the whole cascade every single
// time, not just the first visit to each tab. The inline animation-delay
// is used instead of the nth-child stagger this app uses elsewhere (see
// .lesson-list .lesson-row:nth-child(N) in styles.css) because these
// panels' structure genuinely varies by state (an overdue warning, the
// lesson <select>, the mastery summary etc. each only sometimes render),
// so a fixed sibling-position map isn't reliable here the way it is for a
// lesson list of fixed shape.
function animAttr(key, order = 0) {
  const delay = (order * 0.07).toFixed(2);
  return `data-anim-key="${escAttr(key)}"${order ? ` style="animation-delay:${delay}s"` : ''}`;
}

function scheduleHtml(state, MODULES, revealedKeys) {
  const tab = state.scheduleTab || 'deadline';
  const attempt = state.scheduleTabAttempt || 0;
  const tabs = [
    { id: 'deadline', label: 'Deadline' },
    { id: 'revision', label: 'Revision' },
    { id: 'mastery', label: 'Mastery' },
  ];
  const tabsHtml = tabs.map((t) => `<button class="practice-tab ${tab === t.id ? 'active' : ''}" data-action="setScheduleTab" data-tab="${t.id}">${t.label}</button>`).join('');

  let panel;
  if (tab === 'revision') panel = scheduleRevisionHtml(state, attempt);
  else if (tab === 'mastery') panel = scheduleMasteryHtml(state, MODULES, attempt);
  else panel = scheduleDeadlineHtml(state, MODULES, revealedKeys, attempt);

  const hero = heroPanelHtml({
    watermark: 'الجدول',
    badge: 'الجدول الزمني',
    title: 'Study Planner',
    body: 'Plan a deadline, keep everything fresh with spaced revision, or drill one lesson to true mastery.',
    ledger: heroLedgerHtml([
      ['Lessons cleared', `${totalLessonsCleared(state.completed)} / ${totalLessons()}`],
      ['Streak', `${state.streak || 1}d`],
      ['Deadline', state.scheduleDeadline || 'Not set'],
    ]),
  });

  return `
    <div class="hero-page">
      ${hero}
      ${separatorHtml()}
      <div class="col schedule-page">
        <div class="practice-tabs">${tabsHtml}</div>
        ${panel}
      </div>
    </div>`;
}

// The next few not-yet-completed lessons in course order. Thanks to the
// app's own sequential gating (a lesson unlocks only once the one before it
// is done, a module only once the one before IT is fully done -- see
// isLessonUnlocked/isModuleUnlocked in content/index.js), at most the very
// first entry here is ever actually unlocked; everything after it is
// necessarily locked until that one is cleared. Still computed per-entry via
// isLessonUnlocked rather than assumed, so this stays correct even if that
// gating logic ever changes.
function upcomingLessons(state, MODULES, limit = 5) {
  const out = [];
  for (const m of MODULES) {
    for (const l of m.lessons) {
      if (isLessonComplete(m.id, l.id, state.completed)) continue;
      out.push({ mod: m, lesson: l, unlocked: isLessonUnlocked(m.id, l.id, state.completed) });
      if (out.length >= limit) return out;
    }
  }
  return out;
}

// The one deliberately-different reveal on this page: rather than the
// app's usual halfway-down-the-container trigger (see handleScrollReveal
// in main.js), this box waits until it's ~75% of the way down the visible
// container before sliding in -- reached via data-reveal-line, which
// handleScrollReveal reads per-element instead of assuming 0.5. The card
// itself is the one reveal-on-scroll target; its rows aren't independently
// scroll-gated at all -- they cascade in together via a plain CSS
// transition-delay keyed off the card's own .is-revealed (see
// .schedule-upcoming-rows in styles.css, the same technique
// .exercise-choices already uses), so "the box, and each of its
// sub-components" reads as one continuous reveal rather than several
// separate scroll-triggered pops.
function scheduleUpcomingHtml(state, MODULES, revealedKeys, attempt) {
  const upcoming = upcomingLessons(state, MODULES);
  if (!upcoming.length) return '';
  const rows = upcoming.map(({ mod, lesson, unlocked }) => {
    const cls = `schedule-upcoming-row ${unlocked ? 'unlocked' : 'locked'}`;
    const clickAttr = unlocked ? ` data-action="openModule" data-module-id="${escAttr(mod.id)}"` : '';
    return `
      <div class="${cls}"${clickAttr}>
        <span class="schedule-upcoming-icon">${unlocked ? icon('book', 15, 1.6) : icon('lock', 13, 2)}</span>
        <div class="schedule-upcoming-body">
          <div class="schedule-upcoming-title">${esc(lesson.title)}</div>
          <div class="schedule-upcoming-module">${esc(mod.title)}</div>
        </div>
        <span class="tag ${unlocked ? 'tag-accent' : 'tag-neutral'}">${unlocked ? 'Next' : 'Locked'}</span>
      </div>`;
  }).join('');
  const revealKey = `sched${attempt}_upnext`;
  return `
    <div class="${revealCls(revealKey, 'card schedule-upcoming-card', revealedKeys)}" data-reveal-key="${revealKey}" data-reveal-line="0.75" style="margin-top:16px;">
      <div class="card-kicker">UP NEXT</div>
      <div class="schedule-upcoming-rows">${rows}</div>
    </div>`;
}

function scheduleDeadlineHtml(state, MODULES, revealedKeys, attempt) {
  const total = totalLessons();
  const cleared = totalLessonsCleared(state.completed);
  const remaining = Math.max(0, total - cleared);

  // How many lessons were finished today specifically -- state.completed's
  // per-lesson value is already the ISO completion date (see main.js's
  // markLessonComplete), so this is a plain scan, no extra tracking needed.
  let completedToday = 0;
  Object.values(state.completed).forEach((lessons) => {
    Object.values(lessons || {}).forEach((v) => { if (v === todayISO()) completedToday += 1; });
  });

  const dateInput = `
    <div class="schedule-field" ${animAttr(`sched${attempt}_date`, 0)}>
      <label for="schedule-deadline-input">Target completion date</label>
      <input id="schedule-deadline-input" type="date" class="schedule-input" value="${escAttr(state.scheduleDeadline || '')}" min="${todayISO()}" data-action="setScheduleDeadline" />
    </div>`;
  const upcoming = scheduleUpcomingHtml(state, MODULES, revealedKeys, attempt);

  if (remaining === 0) {
    return `<div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}>${dateInput}<p class="lede" style="margin-top:16px;">You've completed every lesson in the course — nothing left to schedule.</p></div>`;
  }
  if (!state.scheduleDeadline) {
    return `<div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}>${dateInput}${upcoming}<p class="empty-state">Pick a date to see how many lessons a day that works out to.</p></div>`;
  }

  const today = new Date(`${todayISO()}T00:00:00`);
  const deadline = new Date(`${state.scheduleDeadline}T00:00:00`);
  const diffDays = Math.round((deadline - today) / 86400000);
  const overdue = diffDays < 0;
  const dailyTarget = Math.ceil(remaining / Math.max(1, diffDays));
  const todayDone = Math.min(completedToday, dailyTarget);
  const todayPct = dailyTarget ? Math.round((todayDone / dailyTarget) * 100) : 100;

  return `
    <div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}>
      ${dateInput}
      ${overdue ? `<p class="lede" style="margin-top:14px;color:var(--brick);" ${animAttr(`sched${attempt}_overdue`, 1)}>Your deadline was ${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? '' : 's'} ago, with ${remaining} lesson${remaining === 1 ? '' : 's'} still left — catch up as soon as you can.</p>` : ''}
      <div class="stat-row" style="margin-top:20px;" ${animAttr(`sched${attempt}_stats`, 1)}>
        <div class="card stat-card"><div class="stat-kicker">Lessons left</div><div class="stat-value">${remaining}</div></div>
        <div class="card stat-card"><div class="stat-kicker">${overdue ? 'Days overdue' : 'Days left'}</div><div class="stat-value">${Math.abs(diffDays)}</div></div>
        <div class="card stat-card"><div class="stat-kicker">Today's target</div><div class="stat-value">${dailyTarget}</div></div>
      </div>
      <div class="card" style="margin-top:16px;" ${animAttr(`sched${attempt}_checklist`, 2)}>
        <div class="card-kicker">TODAY'S CHECKLIST</div>
        <p class="lede">${todayDone} / ${dailyTarget} lesson${dailyTarget === 1 ? '' : 's'} completed today</p>
        ${progressBar(todayPct)}
        <p class="lede" style="font-size:12.5px;margin-top:10px;">Recalculated every time you check — fall behind or get ahead and tomorrow's target just adjusts, no fixed plan to fall out of sync with.</p>
      </div>
      ${upcoming}
    </div>`;
}

function scheduleRevisionHtml(state, attempt) {
  const kind = state.scheduleRevisionKind || 'mcq';
  const kindLabel = kind === 'tarkeeb' ? 'تركيب' : 'MCQ';
  const pool = kind === 'tarkeeb' ? getAllTarkeebPool(state.completed) : getAllMcqPool(state.completed);
  const freq = state.revisionFrequencyDays;
  const dueCount = freq ? buildRevisionQueue(pool, state.practiceHistory, freq).length : 0;

  const kindTabs = `
    <div class="practice-tabs" ${animAttr(`sched${attempt}_kind`, 0)}>
      <button class="practice-tab ${kind === 'mcq' ? 'active' : ''}" data-action="setScheduleRevisionKind" data-kind="mcq">MCQ</button>
      <button class="practice-tab ${kind === 'tarkeeb' ? 'active' : ''}" data-action="setScheduleRevisionKind" data-kind="tarkeeb">تركيب</button>
    </div>`;

  if (!pool.length) {
    return `<div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}>${kindTabs}<p class="empty-state">Complete a lesson to unlock ${kindLabel} revision questions.</p></div>`;
  }

  const freqField = `
    <div class="schedule-field" ${animAttr(`sched${attempt}_freq`, 1)}>
      <label for="schedule-frequency-input">See every question again within</label>
      <div class="schedule-field-inline">
        <input id="schedule-frequency-input" type="number" min="1" max="365" class="schedule-input schedule-input-narrow" value="${freq ? escAttr(String(freq)) : ''}" placeholder="3" data-action="setRevisionFrequency" />
        <span>day${freq === 1 ? '' : 's'}</span>
      </div>
    </div>`;

  return `
    <div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}>
      ${kindTabs}
      ${freqField}
      ${freq ? `
        <div ${animAttr(`sched${attempt}_duecount_${kind}`, 2)}>
          <p class="lede" style="margin-top:16px;">${dueCount} of ${pool.length} question${pool.length === 1 ? '' : 's'} due today.</p>
          ${dueCount
            ? `<button class="btn btn-primary btn-block" data-action="startRevision">Start Revision (${dueCount})</button>`
            : `<p class="empty-state">Nothing's due yet — everything's been seen within the last ${freq} day${freq === 1 ? '' : 's'}. Check back later.</p>`}
        </div>
      ` : `<p class="empty-state">Set how often you want to see every question again to build today's deck.</p>`}
    </div>`;
}

function scheduleMasteryHtml(state, MODULES, attempt) {
  const moduleId = state.scheduleMasteryModuleId;
  const lessonId = state.scheduleMasteryLessonId;

  const availableModules = MODULES.filter((m) => completedCount(m.id, state.completed) > 0);
  const mod = moduleId ? MODULES.find((m) => m.id === moduleId) : null;
  const availableLessons = mod ? mod.lessons.filter((l) => isLessonComplete(mod.id, l.id, state.completed)) : [];

  if (!availableModules.length) {
    return `<div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}><p class="empty-state">Complete a lesson to unlock Mastery Mode.</p></div>`;
  }

  const moduleSelect = `
    <div class="schedule-field" ${animAttr(`sched${attempt}_module`, 0)}>
      <label for="schedule-mastery-module">Module</label>
      <select id="schedule-mastery-module" class="schedule-input" data-action="setScheduleMasteryModule">
        <option value="">Choose a module…</option>
        ${availableModules.map((m) => `<option value="${escAttr(m.id)}" ${m.id === moduleId ? 'selected' : ''}>${esc(m.title)}</option>`).join('')}
      </select>
    </div>`;

  // Keyed by moduleId (on top of the tab-switch attempt) so picking a
  // *different* module also slides the lesson dropdown in fresh, not just
  // the first time the Mastery tab is opened.
  const lessonSelect = mod ? `
    <div class="schedule-field" ${animAttr(`sched${attempt}_lesson_${moduleId}`, 1)}>
      <label for="schedule-mastery-lesson">Lesson</label>
      <select id="schedule-mastery-lesson" class="schedule-input" data-action="setScheduleMasteryLesson">
        <option value="">Choose a lesson…</option>
        ${availableLessons.map((l) => `<option value="${escAttr(l.id)}" ${l.id === lessonId ? 'selected' : ''}>${esc(l.title)}</option>`).join('')}
      </select>
    </div>` : '';

  // MCQ only -- تركيب doesn't count toward mastering a lesson (see
  // isLessonFullyMastered's matching filter in modulePageHtml), so Mastery
  // Mode never offers it as a kind choice the way Practice/Revision do.
  let summary = '';
  if (mod && lessonId) {
    const pool = getBankPool(mod.id, state.completed)
      .filter((e) => e.lessonId === lessonId && e.item.kind !== 'tarkeeb');
    const masteredCount = pool.filter((e) => state.masteryProgress[e.key] && state.masteryProgress[e.key].mastered).length;
    const remaining = pool.length - masteredCount;
    const summaryBody = pool.length ? `
      <div class="stat-row" style="margin-top:16px;">
        <div class="card stat-card"><div class="stat-kicker">Mastered</div><div class="stat-value">${masteredCount}/${pool.length}</div></div>
      </div>
      ${remaining
        ? `<button class="btn btn-primary btn-block" style="margin-top:12px;" data-action="startMastery">Start Mastery Practice</button>`
        : `<p class="lede" style="margin-top:16px;">Every card in this lesson is already mastered.</p>`}
    ` : `<p class="empty-state">No MCQ cards in this lesson.</p>`;
    // Keyed by lessonId too, for the same reason the lesson <select> above
    // is keyed by moduleId -- picking a different lesson re-slides this in.
    summary = `<div ${animAttr(`sched${attempt}_summary_${moduleId}_${lessonId}`, 2)}>${summaryBody}</div>`;
  }

  return `
    <div class="schedule-panel" ${animAttr(`sched${attempt}_panel`)}>
      ${moduleSelect}
      ${lessonSelect}
      ${summary}
      <p class="lede" style="font-size:12.5px;margin-top:16px;">MCQ only — تركيب doesn't count toward mastering a lesson. A card is mastered once you've answered it correctly ${MASTERY_TARGET_STREAK} times in a row — one mistake resets that card's own streak, not your progress on the rest.</p>
    </div>`;
}

function masteryCompleteHtml(state, MODULES) {
  const p = state.practice;
  const mod = p && MODULES.find((m) => m.id === p.moduleId);
  const lesson = mod && mod.lessons.find((l) => l.id === p.lessonId);
  return `
    <div class="col complete-col">
      <div class="kicker" style="justify-content:center;display:flex;">MASTERY ACHIEVED</div>
      <h1 style="text-align:center;">${lesson ? esc(lesson.title) : 'Lesson'} mastered!</h1>
      <p class="lede" style="text-align:center;margin:0 auto;">Every card in this lesson has been answered correctly ${MASTERY_TARGET_STREAK} times in a row.</p>
      <div class="complete-buttons">
        <button class="btn btn-primary" data-action="backToSchedule">Back to Schedule</button>
      </div>
    </div>`;
}

// --- Settings (placeholder) ------------------------------------------------
// Preferences (theme, Arabic typeface, etc.) aren't built yet -- this is
// just a landing spot for the Settings tab so the global nav has somewhere
// to send it, not a stand-in for the eventual feature.

// --- Settings ---------------------------------------------------------
// Per the design handoff's Screen 2. Theme and typeface both apply
// immediately and persist automatically (this app auto-saves on every
// state change -- see persistSoon in main.js -- there's no separate "Save"
// step anywhere else in it either, so the handoff's own Save button is
// dropped as not meaningful here; only Reset carries over).

const SPECIMEN_WORDS = [
  { text: 'إِنَّ', label: 'حرف توكيد ونصب' },
  { text: 'اللهَ', label: 'اسم إنّ منصوب' },
  { text: 'مَعَ', label: 'ظرف مكان منصوب' },
  { text: 'الصَّابِرِينَ', label: 'مضاف إليه مجرور' },
];

function settingsHtml(state) {
  const theme = state.theme || 'manuscript';
  const face = state.arabicFace || 'naskh';
  const currentFace = FACES[face] || FACES.naskh;

  const themeCards = THEME_ORDER.map((key) => {
    const th = THEMES[key];
    const selected = key === theme;
    return `
      <button class="theme-card ${selected ? 'is-selected' : ''}" role="radio" aria-checked="${selected}" data-action="pickTheme" data-theme="${key}">
        <div class="theme-swatch" style="background:${th.bg}">
          <span class="theme-swatch-rule" style="background:${th.text};opacity:.75;width:70%"></span>
          <span class="theme-swatch-rule" style="background:${th.text};opacity:.4;width:86%"></span>
          <span class="theme-swatch-rule" style="background:${th.text};opacity:.4;width:52%;margin-bottom:0"></span>
          <span class="theme-swatch-mark" style="border-color:${th.accent}"></span>
        </div>
        <div class="theme-card-caption">
          <span class="theme-card-name">${esc(th.name)}</span>
          <span class="theme-card-note">${esc(th.note)}</span>
        </div>
      </button>`;
  }).join('');

  const faceRows = FACE_ORDER.map((key) => {
    const f = FACES[key];
    const selected = key === face;
    return `
      <button class="face-row ${selected ? 'is-selected' : ''}" role="radio" aria-checked="${selected}" data-action="pickFace" data-face="${key}">
        <span class="face-radio"><span class="face-radio-dot"></span></span>
        <span class="face-row-body">
          <span class="face-row-head">
            <span class="face-row-name">${esc(f.name)}</span>
            <span class="face-row-note">${esc(f.note)}</span>
          </span>
          <div class="face-row-sample" lang="ar" dir="rtl" style="font-family:${f.body}">وَالصَّابِرِينَ عَلَى مَا أَصَابَهُم</div>
        </span>
      </button>`;
  }).join('');

  // Independent of the body face above -- layers Reem Kufi onto headings
  // (hero title/badge, chapter titles, the header wordmark...) app-wide,
  // whichever of Naskh/Uthmani is set for the body text.
  const kufiOn = !!state.kufiHeadings;
  const kufiToggle = `
    <button class="face-row ${kufiOn ? 'is-selected' : ''}" role="checkbox" aria-checked="${kufiOn}" data-action="toggleKufiHeadings">
      <span class="face-radio"><span class="face-radio-dot"></span></span>
      <span class="face-row-body">
        <span class="face-row-head">
          <span class="face-row-name">Kufi headings</span>
          <span class="face-row-note">works with either face above</span>
        </span>
        <div class="face-row-sample" lang="ar" dir="rtl" style="font-family:${KUFI_HEAD_FONT}">وَالصَّابِرِينَ عَلَى مَا أَصَابَهُم</div>
      </span>
    </button>`;

  const words = SPECIMEN_WORDS.map((w) => `
    <div class="specimen-word">
      <span class="specimen-word-text" lang="ar" style="font-family:${currentFace.body}">${w.text}</span>
      <span class="specimen-word-label">${esc(w.label)}</span>
    </div>`).join('');

  return `
    <div class="settings-page">
      <div class="settings-col">
        <span class="settings-kicker">Preferences</span>
        <h1 class="settings-title">The page, set to your hand</h1>
        <p class="settings-lede">Everything here changes only how the text is set. Nothing changes what is taught.</p>

        <hr class="settings-hr">

        <h2 class="settings-group-title">Paper &amp; ink</h2>
        <p class="settings-group-sub">Five grounds. The structure of the page does not change with them.</p>
        <div class="theme-grid" role="radiogroup" aria-label="Colour theme">${themeCards}</div>

        <hr class="settings-hr">

        <h2 class="settings-group-title">Arabic typeface</h2>
        <p class="settings-group-sub">Each specimen is set in the face it names.</p>
        <div class="face-list">
          <div class="face-group" role="radiogroup" aria-label="Arabic body face">${faceRows}</div>
          ${kufiToggle}
        </div>
      </div>

      <aside class="settings-col specimen-rail">
        <span aria-hidden="true" class="specimen-watermark" lang="ar">خَطٌّ وَقَلَمٌ</span>
        <div class="specimen-inner">
          <span class="settings-kicker">Specimen</span>
          <p class="settings-group-sub" style="margin:12px 0 26px">A parsed line, set with your current choices.</p>
          <div class="specimen-box" dir="rtl">
            <div class="specimen-words">${words}</div>
            <div class="specimen-divider" dir="ltr">
              <span class="specimen-divider-line" aria-hidden="true"></span>
              <span class="specimen-divider-mark" aria-hidden="true"></span>
              <span class="specimen-divider-line" aria-hidden="true"></span>
            </div>
            <div class="specimen-gloss" dir="ltr">Indeed Allah is with the patient. The ḥarf inna governs naṣb in the noun that follows it.</div>
          </div>
          <div class="specimen-actions">
            <button class="ds-btn ds-btn-ghost" data-action="resetAppearance">Reset to Manuscript</button>
          </div>
        </div>
      </aside>
    </div>`;
}

// --- top-level dispatch ---------------------------------------------------

export function render(state, MODULES, revealedKeys = new Set()) {
  let body;
  switch (state.view) {
    case 'module':
      body = modulePageHtml(state, MODULES);
      break;
    case 'lesson':
      body = lessonHtml(state, MODULES, revealedKeys);
      break;
    case 'quiz':
      body = quizHtml(state, MODULES);
      break;
    case 'lessonComplete':
      body = lessonCompleteHtml(state, MODULES);
      break;
    case 'practice':
      body = practiceHtml(state, MODULES);
      break;
    case 'practiceReview':
      body = practiceReviewHtml(state, MODULES);
      break;
    case 'schedule':
      body = scheduleHtml(state, MODULES, revealedKeys);
      break;
    case 'masteryComplete':
      body = masteryCompleteHtml(state, MODULES);
      break;
    case 'settings':
      body = settingsHtml(state);
      break;
    default:
      body = dashboardHtml(state, MODULES, revealedKeys);
  }
  return `${headerHtml(state, MODULES)}<main class="main"><div class="main-content">${body}</div></main>${footerHtml(state)}${lessonPreviewHtml(state, MODULES)}${toastHtml(state)}${badgeModalHtml(state)}`;
}
