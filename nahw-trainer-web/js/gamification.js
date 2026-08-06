// Pure XP/level/badge logic -- no DOM, no persistence, same shape as
// checker.js. Callers (main.js's action handlers) apply the state mutation
// and decide what happens next (rerender, toast timers, etc).

// Each level needs progressively more XP than the last (100, 150, 200, ...)
// rather than a flat 100/level -- early levels come quickly, later ones
// take real, sustained study.
export function xpForNextLevel(level) {
  return 100 + (level - 1) * 50;
}

// Walks the level curve once to get level, progress-into-level, and the
// current level's requirement together -- the three numbers the UI wants
// are awkward to keep in sync if derived separately.
export function levelInfo(xp) {
  let level = 1;
  let remaining = xp;
  let need = xpForNextLevel(level);
  while (remaining >= need) {
    remaining -= need;
    level += 1;
    need = xpForNextLevel(level);
  }
  return { level, xpIntoLevel: remaining, xpNeeded: need, xpToNext: need - remaining };
}

// +10 bonus on a perfect score, on top of the Sharp Tongue badge -- gives
// aiming for 100% (not just a pass) a payoff every time, not just once.
export function xpForQuiz(correct, total) {
  const base = 20 + correct * 5;
  return correct === total ? base + 10 : base;
}

// A small bonus for a sustained Practice Mode combo (+1 every 5 in a row)
// -- gives the combo counter already shown in the UI an actual payoff
// instead of being a number that just goes up for its own sake.
export function xpForPracticeCorrect(combo) {
  return 2 + Math.floor((combo || 0) / 5);
}

// --- Quiz-session cosmetics ------------------------------------------------
// Shown live while taking the lesson quiz (per-question XP/streak strip,
// the Gold/Silver/Bronze result tier) -- purely a display layer computed
// from the in-progress attempt. The XP actually persisted to the player's
// account still comes from xpForQuiz() alone, awarded once at lesson-finish;
// nothing here is ever added to state.xp.
export function quizCosmeticXp(correct) {
  return correct ? 10 : 2;
}

export function quizTier(fraction) {
  if (fraction === 1) return 'Gold';
  if (fraction >= 0.75) return 'Silver';
  if (fraction >= 0.5) return 'Bronze';
  return null;
}

// Longest run of consecutive `true` values -- used for the result screen's
// "Best streak" tag.
export function longestStreak(bools) {
  let best = 0;
  let run = 0;
  bools.forEach((ok) => {
    run = ok ? run + 1 : 0;
    if (run > best) best = run;
  });
  return best;
}

export const BADGE_DEFS = {
  'first-steps': { name: 'First Steps', desc: 'Complete your first lesson.' },
  'sharp-tongue': { name: 'Sharp Tongue', desc: 'Score perfectly on a quiz.' },
  devoted: { name: 'Devoted', desc: 'Answer ten or more practice drills in one session.' },
  scholar: { name: 'Scholar', desc: 'Complete every lesson in a module.' },
  'on-fire': { name: 'On Fire', desc: 'Reach a seven-day streak.' },
  grammarian: { name: 'Grammarian', desc: 'Reach level 5.' },
};

// Bumps XP and queues a toast -- upgraded to announce a level-up when the
// award crosses a level threshold, and checks the level-gated badge.
export function awardXp(state, amount) {
  const before = levelInfo(state.xp).level;
  state.xp += amount;
  const after = levelInfo(state.xp).level;
  state.toast = after > before ? `+${amount} XP — Level ${after}!` : `+${amount} XP earned`;
  if (after >= 5) awardBadge(state, 'grammarian');
}

// No-ops if the badge is already owned; otherwise adds it and queues the
// unlock modal (explicit-dismiss -- see closeBadgeModal in main.js).
export function awardBadge(state, id) {
  if (state.badges.includes(id)) return false;
  state.badges.push(id);
  state.badgeModal = { id, ...BADGE_DEFS[id] };
  return true;
}

// Streak length is computed once at boot (see persistence.js), so this
// only needs checking once per launch rather than after every action.
export function checkStreakBadges(state) {
  if (state.streak >= 7) awardBadge(state, 'on-fire');
}
