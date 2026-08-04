import assert from 'node:assert/strict';
import test from 'node:test';

import srs from '../nahw-reader/lib/srs.js';

const { DAY, INTERVALS, LAPSE_DELAY, applyAnswer, blankStat, dueKeys, intervalFor } = srs;

const NOW = 1_700_000_000_000;

test('intervalFor walks the interval ladder and then plateaus', () => {
  assert.equal(intervalFor(1), 1 * DAY);
  assert.equal(intervalFor(2), 3 * DAY);
  assert.equal(intervalFor(5), 30 * DAY);
  assert.equal(intervalFor(9), INTERVALS[INTERVALS.length - 1]);
  assert.equal(intervalFor(0), 1 * DAY, 'a streak below one still earns the first interval');
});

test('a first correct answer schedules the card a day out', () => {
  assert.deepEqual(applyAnswer(undefined, true, NOW), { seen: 1, wrong: 0, streak: 1, due: NOW + DAY });
});

test('consecutive correct answers lengthen the interval', () => {
  let stat;
  const dues = [];
  for (let i = 0; i < 6; i++) { stat = applyAnswer(stat, true, NOW); dues.push(stat.due - NOW); }

  assert.deepEqual(dues, [1 * DAY, 3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY, 30 * DAY]);
  assert.equal(stat.seen, 6);
  assert.equal(stat.wrong, 0);
});

test('a wrong answer resets the streak and requeues within the session', () => {
  const learned = { seen: 4, wrong: 0, streak: 3, due: NOW + 7 * DAY };
  const lapsed = applyAnswer(learned, false, NOW);

  assert.deepEqual(lapsed, { seen: 5, wrong: 1, streak: 0, due: NOW + LAPSE_DELAY });
  assert.equal(learned.streak, 3, 'the input stat is not mutated');
});

test('recovering after a lapse starts the ladder again', () => {
  const recovered = applyAnswer({ seen: 5, wrong: 1, streak: 0, due: NOW }, true, NOW);

  assert.equal(recovered.streak, 1);
  assert.equal(recovered.due, NOW + DAY);
});

test('blankStat is a fresh unseen card', () => {
  assert.deepEqual(blankStat(), { seen: 0, wrong: 0, streak: 0, due: 0 });
});

test('dueKeys returns cards due now, soonest first', () => {
  const stats = {
    late: { due: NOW - 5 * DAY },
    justDue: { due: NOW },
    later: { due: NOW - DAY },
    future: { due: NOW + DAY },
  };

  assert.deepEqual(dueKeys(stats, null, NOW), ['late', 'later', 'justDue']);
});

test('dueKeys drops stats whose question no longer exists', () => {
  const stats = { 'muq|1|0': { due: NOW - DAY }, 'gone|9|3': { due: NOW - 2 * DAY } };

  assert.deepEqual(dueKeys(stats, (k) => k.startsWith('muq|'), NOW), ['muq|1|0']);
});

test('dueKeys caps the deck at the requested limit', () => {
  const stats = Object.fromEntries(Array.from({ length: 20 }, (_, i) => ['q' + i, { due: NOW - i }]));

  assert.equal(dueKeys(stats, null, NOW, srs.REVIEW_LIMIT).length, srs.REVIEW_LIMIT);
  assert.deepEqual(dueKeys(stats, null, NOW, 2), ['q19', 'q18']);
});

test('dueKeys tolerates an empty or missing store', () => {
  assert.deepEqual(dueKeys(undefined, null, NOW), []);
  assert.deepEqual(dueKeys({}, null, NOW), []);
});
