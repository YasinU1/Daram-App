import assert from 'node:assert/strict';
import test from 'node:test';

import {
  ARCHETYPES, CANON_MARKS, bankFileSource, parseBankFile, slug, sortBank, toBankItems,
} from '../nahw-reader/test-maker/lib/bank.mjs';

const CHAPTER = { id: 'muq-bab-1', ar: 'الباب الأول في الكلمة', en: 'The Word (al-kalimah)' };

test('every archetype has a canonical mark value', () => {
  assert.deepEqual(ARCHETYPES, Object.keys(CANON_MARKS));
  for (const a of ARCHETYPES) assert.equal(typeof CANON_MARKS[a], 'number');
});

test('slug lowercases and collapses non-alphanumerics', () => {
  assert.equal(slug('Explain the line: الكلمة!'), 'explain-the-line');
  assert.equal(slug('  Types of Iʿrāb  '), 'types-of-i-r-b');
  assert.equal(slug(undefined), '');
});

test('toBankItems pins marks to the canonical value and trims text', () => {
  const [item] = toBankItems(CHAPTER, [{
    archetype: 'compare', marks: 99, promptEn: '  Compare X and Y  ', promptAr: '  عربي  ', markScheme: ' scheme ',
  }]);

  assert.equal(item.marks, CANON_MARKS.compare);
  assert.equal(item.promptEn, 'Compare X and Y');
  assert.equal(item.promptAr, 'عربي');
  assert.equal(item.markScheme, 'scheme');
  assert.equal(item.chapterId, CHAPTER.id);
  assert.equal(item.chapterEn, CHAPTER.en);
  assert.equal(item.id, 'muq-bab-1--compare--compare-x-and-y-0');
});

test('toBankItems drops unknown archetypes and promptless items', () => {
  const items = toBankItems(CHAPTER, [
    { archetype: 'freestyle', promptEn: 'nope' },
    { archetype: 'compare' },
    { archetype: ' compare ', promptEn: 'kept' },
    null,
  ]);

  assert.deepEqual(items.map((i) => i.promptEn), ['kept']);
});

test('toBankItems fills optional fields and offsets ids so they stay unique', () => {
  const items = toBankItems(CHAPTER, [
    { archetype: 'enumerate', promptEn: 'List the sisters of kana' },
    { archetype: 'enumerate', promptEn: 'List the sisters of inna' },
  ], 35);

  assert.deepEqual(items.map((i) => i.id.split('-').pop()), ['z', '10'], 'base-36 suffixes continue from the offset');
  assert.equal(items[0].promptAr, '');
  assert.equal(items[0].markScheme, '');
});

test('toBankItems returns nothing for a non-array pool', () => {
  assert.deepEqual(toBankItems(CHAPTER, null), []);
  assert.deepEqual(toBankItems(CHAPTER, { archetype: 'compare', promptEn: 'x' }), []);
});

test('sortBank orders by chapter registry then archetype', () => {
  const bank = [
    { chapterId: 'b', archetype: 'compare' },
    { chapterId: 'a', archetype: 'state-types' },
    { chapterId: 'b', archetype: 'explain-line' },
    { chapterId: 'a', archetype: 'explain-line' },
    { chapterId: 'retired', archetype: 'explain-line' },
  ];

  assert.deepEqual(sortBank(bank, ['a', 'b']).map((q) => `${q.chapterId}/${q.archetype}`), [
    'a/explain-line', 'a/state-types', 'b/explain-line', 'b/compare', 'retired/explain-line',
  ]);
});

test('sortBank leaves the input array untouched', () => {
  const bank = [{ chapterId: 'b', archetype: 'compare' }, { chapterId: 'a', archetype: 'compare' }];
  sortBank(bank, ['a', 'b']);

  assert.equal(bank[0].chapterId, 'b');
});

test('a written bank file parses back into the same questions', () => {
  const bank = toBankItems(CHAPTER, [{ archetype: 'compare', promptEn: 'Compare X and Y', promptAr: 'عربي' }]);
  const source = bankFileSource(bank, new Date('2026-01-02T03:04:05.000Z'));

  assert.match(source, /DO NOT EDIT BY HAND/);
  assert.match(source, /Built by test-maker\/build-bank\.mjs on 2026-01-02T03:04:05\.000Z/);
  assert.match(source, /1 questions across 1 chapters/);
  assert.deepEqual(parseBankFile(source), bank);
});

test('parseBankFile is forgiving about junk', () => {
  assert.deepEqual(parseBankFile('const SOMETHING_ELSE = [];'), []);
  assert.deepEqual(parseBankFile('const QUESTION_BANK = [not json];'), []);
  assert.deepEqual(parseBankFile(undefined), []);
});
