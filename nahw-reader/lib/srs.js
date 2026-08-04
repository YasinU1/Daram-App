/* Daram — spaced-repetition scheduling for Learn.
   Shared by learn.js (browser, as window.DaramSrs) and the tests. */

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = api;
  else root.DaramSrs = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const DAY = 24 * 60 * 60 * 1000;
  const INTERVALS = [1 * DAY, 3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY];
  const LAPSE_DELAY = 10 * 60 * 1000; // a wrong answer comes back in ten minutes
  const REVIEW_LIMIT = 15;

  function blankStat() { return { seen: 0, wrong: 0, streak: 0, due: 0 }; }

  // Interval a card earns after `streak` consecutive correct answers.
  function intervalFor(streak) {
    return INTERVALS[Math.min(Math.max(streak, 1) - 1, INTERVALS.length - 1)];
  }

  // Grade one answer: returns the updated stat (the input is not mutated).
  function applyAnswer(stat, correct, now) {
    const s = Object.assign(blankStat(), stat);
    s.seen++;
    if (correct) {
      s.streak++;
      s.due = now + intervalFor(s.streak);
    } else {
      s.wrong++;
      s.streak = 0;
      s.due = now + LAPSE_DELAY;
    }
    return s;
  }

  // Keys of the cards due for review, soonest first. `isKnown` drops stats whose
  // question no longer exists in the lessons (renamed / removed steps).
  function dueKeys(stats, isKnown, now, limit) {
    const known = typeof isKnown === 'function' ? isKnown : () => true;
    const keys = Object.keys(stats || {})
      .filter((k) => known(k) && stats[k] && stats[k].due <= now)
      .sort((a, b) => stats[a].due - stats[b].due);
    return typeof limit === 'number' ? keys.slice(0, limit) : keys;
  }

  return { DAY, INTERVALS, LAPSE_DELAY, REVIEW_LIMIT, blankStat, intervalFor, applyAnswer, dueKeys };
});
