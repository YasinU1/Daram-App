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
const ROOT = path.join(__dirname, '..'); // nahw-reader/
const HL_FILE = path.join(__dirname, 'highlights.json');

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
      req.on('data', (c) => { body += c; if (body.length > 10e6) req.destroy(); });
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (!Array.isArray(data.highlights)) throw new Error('highlights must be an array');
          if (data.comments !== undefined && !Array.isArray(data.comments)) throw new Error('comments must be an array');
          const prev = readHighlights();
          fs.writeFileSync(HL_FILE, JSON.stringify({
            highlights: data.highlights,
            comments: data.comments !== undefined ? data.comments : prev.comments,
          }, null, 2));
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
  let filePath = path.normalize(path.join(ROOT, decodeURIComponent(url.pathname)));
  if (!filePath.startsWith(ROOT)) { res.writeHead(403).end(); return; }
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  fs.readFile(filePath, (err, buf) => {
    if (err) { res.writeHead(404).end('Not found'); return; }
    res.writeHead(200, { 'content-type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    res.end(buf);
  });
});

server.listen(PORT, () => {
  console.log(`Daram PDF Reader → http://localhost:${PORT}/pdf-reader/`);
});
