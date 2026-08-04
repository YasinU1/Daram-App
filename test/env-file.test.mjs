import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

import { loadEnvFile, parseEnvFile } from '../nahw-reader/test-maker/lib/env-file.mjs';

test('parses keys, strips quotes and ignores noise', () => {
  const vars = parseEnvFile([
    'CLAUDE_MODEL=claude-opus-4-8',
    'CLAUDE_BIN="/usr/local/bin/claude"',
    "PORT='3002'",
    '  SPACED = value with spaces  ',
    '# a comment',
    '',
    'not a key line',
  ].join('\n'));

  assert.deepEqual(vars, {
    CLAUDE_MODEL: 'claude-opus-4-8',
    CLAUDE_BIN: '/usr/local/bin/claude',
    PORT: '3002',
    SPACED: 'value with spaces',
  });
});

test('parses an empty value and tolerates no input', () => {
  assert.deepEqual(parseEnvFile('EMPTY='), { EMPTY: '' });
  assert.deepEqual(parseEnvFile(undefined), {});
});

test('loadEnvFile fills only the variables that are unset', () => {
  const dir = mkdtempSync(join(tmpdir(), 'daram-env-'));
  const path = join(dir, '.env');
  writeFileSync(path, 'CLAUDE_MODEL=from-file\nPORT=3002\n');

  const env = { CLAUDE_MODEL: 'from-shell' };
  loadEnvFile(path, env);

  assert.deepEqual(env, { CLAUDE_MODEL: 'from-shell', PORT: '3002' });
});

test('loadEnvFile is a no-op when there is no .env', () => {
  const env = { PORT: '3001' };

  assert.deepEqual(loadEnvFile(join(mkdtempSync(join(tmpdir(), 'daram-env-')), '.env'), env), { PORT: '3001' });
});
