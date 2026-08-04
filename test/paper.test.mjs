import assert from 'node:assert/strict';
import test from 'node:test';

import daramPaper from '../nahw-reader/lib/paper.js';

const { TEMPLATE, assemblePaper, paperTitle, templateMarks } = daramPaper;

// keep sampling deterministic
const noShuffle = (a) => a;

const q = (id, archetype, chapterId, extra = {}) => ({
  id, archetype, chapterId, marks: (TEMPLATE.find((s) => s.archetype === archetype) || {}).marks,
  promptEn: `prompt ${id}`, promptAr: `عربي ${id}`, markScheme: `scheme ${id}`, ...extra,
});

const CHAPTERS = [{ id: 'muq-bab-1', en: 'The Word' }, { id: 'muq-bab-2', en: 'The Sentence' }];

test('templateMarks sums the first N template slots', () => {
  assert.equal(templateMarks(1), 5);
  assert.equal(templateMarks(3), 19);
  assert.equal(templateMarks(7), 70);
  assert.equal(templateMarks(0), 70, 'falls back to a full paper');
});

test('paperTitle names a single chapter and counts several', () => {
  assert.equal(paperTitle(['muq-bab-1'], CHAPTERS), 'Practice Paper — The Word');
  assert.equal(paperTitle(['muq-bab-1', 'muq-bab-2'], CHAPTERS), 'Practice Paper — 2 chapters');
  assert.equal(paperTitle(['unknown'], CHAPTERS), 'Practice Paper — selected chapter');
});

test('follows the template archetype order, one question per slot', () => {
  const bank = [
    q('c1', 'compare', 'muq-bab-1'),
    q('e1', 'explain-line', 'muq-bab-1'),
    q('s1', 'state-types', 'muq-bab-1'),
  ];
  const paper = assemblePaper({ bank, ids: ['muq-bab-1'], want: 3, chapters: CHAPTERS, shuffle: noShuffle });

  assert.deepEqual(paper.questions.map((x) => x.type), ['explain-line', 'state-types', 'compare']);
  assert.deepEqual(paper.questions.map((x) => x.n), [1, 2, 3]);
  assert.deepEqual(paper.questions.map((x) => x.marks), [5, 6, 8]);
  assert.equal(paper.questions[0].promptEn, 'prompt e1');
  assert.equal(paper.questions[0].markScheme, 'scheme e1');
});

test('ignores questions from unselected chapters', () => {
  const bank = [q('a', 'explain-line', 'muq-bab-1'), q('b', 'explain-line', 'muq-bab-2')];
  const paper = assemblePaper({ bank, ids: ['muq-bab-2'], want: 5, chapters: CHAPTERS, shuffle: noShuffle });

  assert.deepEqual(paper.questions.map((x) => x.promptEn), ['prompt b']);
});

test('stops at the requested number of questions', () => {
  const bank = TEMPLATE.map((slot, i) => q('q' + i, slot.archetype, 'muq-bab-1'));
  const paper = assemblePaper({ bank, ids: ['muq-bab-1'], want: 2, chapters: CHAPTERS, shuffle: noShuffle });

  assert.equal(paper.questions.length, 2);
});

test('tops up with unused questions when the template cannot be filled', () => {
  const bank = [
    q('e1', 'explain-line', 'muq-bab-1'),
    q('e2', 'explain-line', 'muq-bab-1'),
    q('e3', 'explain-line', 'muq-bab-1'),
  ];
  const paper = assemblePaper({ bank, ids: ['muq-bab-1'], want: 3, chapters: CHAPTERS, shuffle: noShuffle });

  assert.deepEqual(paper.questions.map((x) => x.promptEn), ['prompt e1', 'prompt e2', 'prompt e3']);
});

test('never repeats a question', () => {
  const bank = [q('e1', 'explain-line', 'muq-bab-1'), q('s1', 'state-types', 'muq-bab-1')];
  const paper = assemblePaper({ bank, ids: ['muq-bab-1'], want: 7, chapters: CHAPTERS, shuffle: noShuffle });

  assert.equal(paper.questions.length, 2);
  assert.equal(new Set(paper.questions.map((x) => x.promptEn)).size, 2);
});

test('an empty bank yields a titled paper with no questions', () => {
  const paper = assemblePaper({ bank: [], ids: ['muq-bab-1'], want: 7, chapters: CHAPTERS });

  assert.deepEqual(paper.questions, []);
  assert.equal(paper.title, 'Practice Paper — The Word');
});

test('assemblePaper is callable with no arguments', () => {
  assert.deepEqual(assemblePaper().questions, []);
});

test('shuffle permutes without losing or duplicating items', () => {
  const items = Array.from({ length: 50 }, (_, i) => i);
  const shuffled = daramPaper.shuffle(items.slice());

  assert.equal(shuffled.length, items.length);
  assert.deepEqual(shuffled.slice().sort((a, b) => a - b), items);
});
