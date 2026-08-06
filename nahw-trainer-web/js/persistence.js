// Web build of the trainer (served at /nahw-trainer) -- the Electron
// desktop app persists to a real file via nodeIntegration (see
// nahw-trainer/js/persistence.js); this copy has no filesystem access, so
// it persists to localStorage instead. Separate save, separate storage --
// progress made here does not sync with the desktop app.
const SAVE_KEY = 'an-nahw-save-data';

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayISO() {
  return new Date(Date.now() - 86400000).toISOString().slice(0, 10);
}

export function loadRaw() {
  try {
    return JSON.parse(localStorage.getItem(SAVE_KEY) || '{}');
  } catch (e) {
    return {};
  }
}

export function saveRaw(data) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(data));
}

// Called once on boot. Returns the full initial state fragment, applying the
// streak algorithm: +1 on a consecutive calendar day, reset to 1 on a gap,
// unchanged on a same-day revisit.
export function bootProgress() {
  const saved = loadRaw();
  const today = todayISO();
  const yesterday = yesterdayISO();

  let streak = saved.streak || 1;
  if (saved.lastVisit === today) {
    streak = saved.streak || 1;
  } else if (saved.lastVisit === yesterday) {
    streak = (saved.streak || 1) + 1;
  } else if (saved.lastVisit) {
    streak = 1;
  }

  const next = {
    completed: saved.completed || {},
    quizScores: saved.quizScores || {},
    exStates: saved.exStates || {},
    lessonPos: saved.lessonPos || {},
    revealState: saved.revealState || {},
    practiceHistory: saved.practiceHistory || {},
    scheduleDeadline: saved.scheduleDeadline || null,
    revisionFrequencyDays: saved.revisionFrequencyDays || null,
    masteryProgress: saved.masteryProgress || {},
    streak,
    lastVisit: today,
    xp: saved.xp || 0,
    badges: saved.badges || [],
    theme: saved.theme || 'manuscript',
    arabicFace: saved.arabicFace || 'naskh',
    kufiHeadings: saved.kufiHeadings || false,
    nav: saved.nav || null,
  };
  saveRaw(next);
  return next;
}

let pendingTimer = null;
let pendingState = null;

export function persistSoon(state, delay = 400) {
  pendingState = state;
  if (pendingTimer) return;
  pendingTimer = setTimeout(() => {
    pendingTimer = null;
    const s = pendingState;
    pendingState = null;
    if (s) persist(s);
  }, delay);
}

export function flushPersist() {
  if (pendingTimer) {
    clearTimeout(pendingTimer);
    pendingTimer = null;
  }
  if (pendingState) {
    const s = pendingState;
    pendingState = null;
    persist(s);
  }
}

function snapshot(state) {
  return {
    completed: state.completed,
    quizScores: state.quizScores,
    exStates: state.exStates,
    lessonPos: state.lessonPos,
    revealState: state.revealState,
    practiceHistory: state.practiceHistory,
    scheduleDeadline: state.scheduleDeadline,
    revisionFrequencyDays: state.revisionFrequencyDays,
    masteryProgress: state.masteryProgress,
    streak: state.streak,
    lastVisit: state.lastVisit,
    xp: state.xp,
    badges: state.badges,
    theme: state.theme,
    arabicFace: state.arabicFace,
    kufiHeadings: state.kufiHeadings,
    nav: {
      view: state.view,
      moduleId: state.moduleId,
      lessonId: state.lessonId,
      practiceModuleId: state.practiceModuleId,
    },
  };
}

export function persist(state) {
  saveRaw(snapshot(state));
}
