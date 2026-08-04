import assert from 'node:assert/strict';
import test, { after, before } from 'node:test';

// The routes shell out to the local `claude` CLI; point it at a binary that
// cannot exist so the failure path is exercised without any model call.
process.env.CLAUDE_BIN = 'daram-no-such-claude-binary';

const { default: app } = await import('../nahw-reader/test-maker/server.js');

let server;
let base;

before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});

after(() => new Promise((resolve) => server.close(resolve)));

const post = (path, body) => fetch(base + path, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

test('serves the test-maker page statically', async () => {
  const res = await fetch(`${base}/test-maker.html`);

  assert.equal(res.status, 200);
  assert.match(await res.text(), /Daram — Practice Papers/);
});

test('generate-test rejects an empty chapter selection', async () => {
  for (const body of [{}, { chapters: [] }]) {
    const res = await post('/api/generate-test', body);

    assert.equal(res.status, 400);
    assert.deepEqual(await res.json(), { error: 'No chapters supplied.' });
  }
});

test('grade and help reject a missing question', async () => {
  for (const path of ['/api/grade', '/api/help']) {
    const res = await post(path, { answer: 'something' });

    assert.equal(res.status, 400);
    assert.deepEqual(await res.json(), { error: 'Missing question.' });
  }
});

test('a missing claude CLI surfaces as a 500 with a helpful message', async () => {
  const res = await post('/api/grade', { question: { marks: 5, promptEn: 'Explain', markScheme: 'x' }, answer: 'a' });

  assert.equal(res.status, 500);
  assert.match((await res.json()).error, /`claude` CLI not found/);
});
