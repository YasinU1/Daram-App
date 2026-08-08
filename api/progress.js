// Single-slot remote copy of the nahw-trainer-web save data, so the "2"
// unlock code (see nahw-trainer-web/js/unlock.js) can pull whatever
// progress was most recently pushed from any browser, instead of a frozen
// snapshot baked into the bundle. Gated by the same non-secret "2" the
// unlock widget already uses -- this is obfuscation, not real auth, in
// keeping with that widget's own threat model.
const { Redis } = require('@upstash/redis');

const CODE = '2';
const KEY = 'an-nahw-web-progress';

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

module.exports = async function handler(req, res) {
  if (req.query.code !== CODE) {
    res.status(403).json({ error: 'bad code' });
    return;
  }

  if (req.method === 'GET') {
    const data = await redis.get(KEY);
    res.status(200).json(data || null);
    return;
  }

  if (req.method === 'POST') {
    if (!req.body || typeof req.body !== 'object') {
      res.status(400).json({ error: 'bad body' });
      return;
    }
    await redis.set(KEY, req.body);
    res.status(200).json({ ok: true });
    return;
  }

  res.status(405).json({ error: 'method not allowed' });
};
