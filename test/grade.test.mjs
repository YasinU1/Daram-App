import assert from 'node:assert/strict';
import test from 'node:test';

import { normalizeGrade } from '../nahw-reader/test-maker/lib/grade.mjs';

test('keeps a sane mark as-is and stamps the maximum', () => {
  const graded = normalizeGrade({ awarded: 4, max: 99, verdict: 'strong', feedback: 'good' }, 5);

  assert.deepEqual(graded, { awarded: 4, max: 5, verdict: 'strong', feedback: 'good' });
});

test('clamps a mark above the maximum', () => {
  assert.equal(normalizeGrade({ awarded: 12 }, 5).awarded, 5);
});

test('clamps a negative mark to zero', () => {
  assert.equal(normalizeGrade({ awarded: -3 }, 5).awarded, 0);
});

test('treats a non-numeric or missing mark as zero', () => {
  assert.equal(normalizeGrade({ awarded: 'four' }, 5).awarded, 0);
  assert.equal(normalizeGrade({}, 5).awarded, 0);
});

test('coerces a numeric string mark', () => {
  assert.equal(normalizeGrade({ awarded: '3' }, 5).awarded, 3);
});

test('an unknown question maximum grades to zero', () => {
  assert.deepEqual(normalizeGrade({ awarded: 7 }, undefined), { awarded: 0, max: 0 });
});

test('does not mutate the model result', () => {
  const raw = { awarded: 12, max: 12 };
  normalizeGrade(raw, 5);

  assert.deepEqual(raw, { awarded: 12, max: 12 });
});
