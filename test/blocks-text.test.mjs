import assert from 'node:assert/strict';
import test from 'node:test';

import blocksText from '../nahw-reader/lib/blocks-text.js';

const { tokLine, deepText, blocksToText } = blocksText;

test('tokLine joins Arabic and English sides separately', () => {
  const line = tokLine([{ a: 'الْكَلِمَةُ', e: 'the word' }, { a: 'ثَلَاثَةٌ', e: 'three' }]);
  assert.deepEqual(line, { ar: 'الْكَلِمَةُ ثَلَاثَةٌ', en: 'the word three' });
});

test('tokLine skips empty tokens and tolerates missing input', () => {
  assert.deepEqual(tokLine([null, { a: 'بَابٌ' }, { e: 'chapter' }, {}]), { ar: 'بَابٌ', en: 'chapter' });
  assert.deepEqual(tokLine(undefined), { ar: '', en: '' });
});

test('deepText walks strings, arrays and known object keys', () => {
  assert.equal(deepText(null), '');
  assert.equal(deepText('plain'), 'plain');
  assert.equal(deepText(['a', '', 'b']), 'a b');
  assert.equal(deepText({ ar: 'عَرَبِيّ', en: 'arabic', ignored: 42 }), 'عَرَبِيّ arabic');
  assert.equal(deepText({ label: 'L', items: [{ text: 'one' }, { text: 'two' }] }), 'L one two');
  assert.equal(deepText(7), '');
});

test('blocksToText renders each block type in reading order', () => {
  const text = blocksToText([
    { t: 'page', n: 6 },
    { t: 'h1', ar: 'الْمُقَدِّمَة', en: 'Introduction' },
    { t: 'h2', ar: 'الْبَابُ الْأَوَّلُ' },
    { t: 'line', w: [{ a: 'الْكَلِمَةُ', e: 'the word' }] },
    { t: 'line', w: [{ e: 'no arabic side' }] },
    { t: 'box', label: 'تَنْبِيه', labelEn: 'Note', lines: [[{ a: 'مِثَالٌ', e: 'example' }], [{ e: 'skipped' }]] },
    { t: 'table', head: ['نَوْع', 'Type'], rows: [['اسْم', 'noun'], ['فِعْل', 'verb']] },
    { t: 'note', text: 'a footnote' },
    null,
    'not an object',
  ]);

  assert.deepEqual(text.split('\n'), [
    '',
    '# الْمُقَدِّمَة  (Introduction)',
    '',
    '## الْبَابُ الْأَوَّلُ',
    'الْكَلِمَةُ  — the word',
    '[تَنْبِيه / Note]',
    '  مِثَالٌ  — example',
    '[table: نَوْع | Type]',
    '  اسْم | noun',
    '  فِعْل | verb',
    'a footnote',
  ]);
});

test('blocksToText returns an empty string for missing block data', () => {
  assert.equal(blocksToText(), '');
  assert.equal(blocksToText([]), '');
});
