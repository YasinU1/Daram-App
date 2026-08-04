#!/usr/bin/env node
/**
 * Daram PDF Reader server.
 * Serves the whole nahw-reader site and persists highlights to pdf-reader/highlights.json.
 *
 *   node pdf-reader/server.js        (from nahw-reader/)
 *   → http://localhost:8017/pdf-reader/
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8017;
// Loopback only: the highlights API is unauthenticated and writes to disk.
const HOST = '127.0.0.1';
const ROOT = path.join(__dirname, '..'); // nahw-reader/
const HL_FILE = path.join(__dirname, 'highlights.json');
const MAX_BODY = 10e6;
const MAX_ITEMS = 20000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

// Keep only plain JSON values of a sane size, so a malformed POST can't grow
// highlights.json without bound or push functions/prototypes into it.
function sanitiseItems(arr, what) {
  if (!Array.isArray(arr)) throw new Error(what + ' must be an array');
  if (arr.length > MAX_ITEMS) throw new Error('too many ' + what);
  return arr.map((item) => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      throw new Error(what + ' entries must be objects');
    }
    const out = {};
    for (const [k, v] of Object.entries(item)) {
      const t = typeof v;
      if (t === 'string') out[k] = v.slice(0, 20000);
      else if (t === 'number' || t === 'boolean' || v === null) out[k] = v;
    }
    return out;
  });
}

function readHighlights() {
  try {
    const data = JSON.parse(fs.readFileSync(HL_FILE, 'utf8'));
    return { highlights: data.highlights || [], comments: data.comments || [] };
  } catch (_) {
    return { highlights: [], comments: [] };
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  // --- highlights API ---
  if (url.pathname === '/api/highlights') {
    if (req.method === 'GET') {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(readHighlights()));
      return;
    }
    if (req.method === 'POST') {
      let body = '';
      req.on('data', (c) => { body += c; if (body.length > MAX_BODY) req.destroy(); });
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          const highlights = sanitiseItems(data.highlights, 'highlights');
          const prev = readHighlights();
          const comments = data.comments !== undefined
            ? sanitiseItems(data.comments, 'comments')
            : prev.comments;
          fs.writeFileSync(HL_FILE, JSON.stringify({ highlights, comments }, null, 2));
          res.writeHead(200, { 'content-type': 'application/json' });
          res.end('{"ok":true}');
        } catch (err) {
          res.writeHead(400, { 'content-type': 'application/json' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });
      return;
    }
    res.writeHead(405).end();
    return;
  }

  // --- static files ---
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch (_) { res.writeHead(400).end(); return; }
  if (pathname.includes('\0')) { res.writeHead(400).end(); return; }
  let filePath = path.normalize(path.join(ROOT, pathname));
  // path.sep guards against a sibling directory sharing ROOT's name as a prefix.
  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) { res.writeHead(403).end(); return; }
  // Never serve dotfiles (.env, .git…) or dependency trees.
  const rel = path.relative(ROOT, filePath);
  if (rel.split(path.sep).some((seg) => seg.startsWith('.') || seg === 'node_modules')) {
    res.writeHead(403).end();
    return;
  }
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  fs.readFile(filePath, (err, buf) => {
    if (err) { res.writeHead(404).end('Not found'); return; }
    res.writeHead(200, { 'content-type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    res.end(buf);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Daram PDF Reader → http://localhost:${PORT}/pdf-reader/`);
});
