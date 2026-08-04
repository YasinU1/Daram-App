import assert from 'node:assert/strict';
import test from 'node:test';

import { extractJson } from '../nahw-reader/test-maker/lib/extract-json.mjs';

test('parses a bare JSON object', () => {
  assert.deepEqual(extractJson('{"a":1}'), { a: 1 });
});

test('parses a JSON array wrapped in prose', () => {
  const text = 'Sure — here is the pool:\n[{"archetype":"compare"}]\nHope that helps!';
  assert.deepEqual(extractJson(text), [{ archetype: 'compare' }]);
});

test('unwraps a ```json fenced block', () => {
  assert.deepEqual(extractJson('```json\n{"marks": 5}\n```'), { marks: 5 });
});

test('unwraps an unlabelled fenced block', () => {
  assert.deepEqual(extractJson('```\n[1, 2]\n```'), [1, 2]);
});

test('stops at the matching bracket and ignores trailing prose', () => {
  assert.deepEqual(extractJson('{"a":{"b":[1,2]}} and then some chatter } ]'), { a: { b: [1, 2] } });
});

test('ignores brackets and escapes inside strings', () => {
  const value = extractJson('{"promptAr":"قال: {هذا} \\"باب\\" [١]"}');
  assert.equal(value.promptAr, 'قال: {هذا} "باب" [١]');
});

test('repairs a trailing comma before a closing bracket', () => {
  assert.deepEqual(extractJson('[{"n":1,},]'), [{ n: 1 }]);
});

test('throws when the response has no JSON', () => {
  assert.throws(() => extractJson('I cannot help with that.'), /No JSON found/);
});

test('throws when the JSON is never closed', () => {
  assert.throws(() => extractJson('{"a": [1, 2'), /Unbalanced JSON/);
});

test('throws when the JSON is malformed beyond the trailing-comma repair', () => {
  assert.throws(() => extractJson('{"a": nope}'), SyntaxError);
});
