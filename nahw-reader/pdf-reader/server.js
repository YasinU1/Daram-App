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

// Missing file = nothing saved yet. Anything else (unreadable or corrupt file) is a
// real fault and must surface: silently returning an empty store would make the next
// POST overwrite whatever is still on disk.
function readHighlights() {
  let raw;
  try {
    raw = fs.readFileSync(HL_FILE, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') return { highlights: [], comments: [] };
    throw err;
  }
  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    throw new Error(`${HL_FILE} is not valid JSON (${err.message}) — fix or move it before saving again.`);
  }
  return { highlights: data.highlights || [], comments: data.comments || [] };
}

function sendError(res, status, err) {
  if (status >= 500) console.error(err);
  if (res.headersSent || res.writableEnded) return;
  res.writeHead(status, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ error: err.message || 'Request failed' }));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  // --- highlights API ---
  if (url.pathname === '/api/highlights') {
    if (req.method === 'GET') {
      try {
        const store = readHighlights();
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(store));
      } catch (err) {
        sendError(res, 500, err);
      }
      return;
    }
    if (req.method === 'POST') {
      let body = '', aborted = false;
      const abort = (status, err) => { aborted = true; sendError(res, status, err); req.destroy(); };
      req.on('error', (err) => { aborted = true; console.error('request aborted:', err.message); });
      req.on('data', (c) => {
        if (aborted) return;
        body += c;
        if (body.length > 10e6) abort(413, new Error('Payload too large.'));
      });
      req.on('end', () => {
        if (aborted) return;
        let data;
        try {
          data = JSON.parse(body);
          if (!Array.isArray(data.highlights)) throw new Error('highlights must be an array');
          if (data.comments !== undefined && !Array.isArray(data.comments)) throw new Error('comments must be an array');
        } catch (err) {
          sendError(res, 400, err);
          return;
        }
        try {
          const prev = readHighlights();
          fs.writeFileSync(HL_FILE, JSON.stringify({
            highlights: data.highlights,
            comments: data.comments !== undefined ? data.comments : prev.comments,
          }, null, 2));
        } catch (err) {
          sendError(res, 500, err);
          return;
        }
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end('{"ok":true}');
      });
      return;
    }
    res.writeHead(405).end();
    return;
  }

  // --- static files ---
  let filePath;
  try {
    filePath = path.normalize(path.join(ROOT, decodeURIComponent(url.pathname)));
  } catch (err) { // malformed percent-encoding
    sendError(res, 400, err);
    return;
  }
  if (!filePath.startsWith(ROOT)) { res.writeHead(403).end('Forbidden'); return; }
  try {
    if (fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, 'index.html');
  } catch (err) {
    if (err.code !== 'ENOENT') { sendError(res, 500, err); return; }
  }
  fs.readFile(filePath, (err, buf) => {
    if (err) {
      // Only a genuinely absent path is a 404; permission or IO faults are ours.
      if (err.code === 'ENOENT' || err.code === 'EISDIR') { res.writeHead(404).end('Not found'); return; }
      sendError(res, 500, err);
      return;
    }
    res.writeHead(200, { 'content-type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    res.end(buf);
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use — stop the other server or set a different PORT.`);
  } else {
    console.error('server error:', err);
  }
  process.exit(1);
});

server.listen(PORT, () => {
  console.log(`Daram PDF Reader → http://localhost:${PORT}/pdf-reader/`);
});
