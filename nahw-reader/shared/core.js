/* ═══════════════════════════════════════════════════════════════
   Daram shared core — text, DOM and storage helpers used by every app
   (reader.js · learn/learn.js · learn/game.js · the qiraah reader).

   Loaded as a plain script before the app that uses it; everything
   hangs off the global `Daram` object:

     Daram.esc(s)                HTML-escape (text and attribute safe)
     Daram.fmt(s)                esc + **bold** + <bdi class="arb"> Arabic runs
     Daram.mostlyArabic(s)       >60% of the letters are Arabic
     Daram.el(tag, cls, text)    element with textContent — the safe default
     Daram.elHtml(tag, cls, html)  …with innerHTML: pass esc()/fmt() output only
     Daram.icon(name, extra)     Material Symbols <span>
     Daram.shuffle(a)            Fisher–Yates, in place
     Daram.loadJSON(store, key, fallback)   parse; fallback on miss/corruption
     Daram.saveJSON(store, key, value)      stringify; false if unavailable
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── text ─────────────────────────────────────────────────────── */
  const AR_RE = /[«\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\uFD3E\uFD3F][\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\uFD3E\uFD3F\s\u060C\u061B\u061F.:()«»0-9\u0660-\u0669…!?-]*/g;
  const WEAK_TAIL = /[\s.:()!?…0-9-]+$/;
  const AR_CHAR = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/g;

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* Escape first, then apply markup, so repo data with `<` or `&` renders
     instead of parsing. Arabic runs are wrapped in <bdi> so a mixed
     English/Arabic line keeps its bidi ordering. */
  function fmt(s) {
    if (s == null) return '';
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
      .replace(AR_RE, m => {
        const t = m.match(WEAK_TAIL);
        const core = t ? m.slice(0, m.length - t[0].length) : m;
        if (!core) return m;
        return '<bdi class="arb">' + core + '</bdi>' + (t ? t[0] : '');
      });
  }

  /* A string that is *entirely* Arabic reads better set right-to-left as a
     whole than as an inline <bdi> island. */
  function mostlyArabic(s) {
    const letters = String(s).replace(/[\s\d.,;:!?()«»""''…\-–—]/g, '');
    if (!letters) return false;
    return (letters.match(AR_CHAR) || []).length / letters.length > 0.6;
  }

  /* ── DOM ──────────────────────────────────────────────────────── */
  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function elHtml(tag, cls, html) {
    const n = el(tag, cls);
    if (html != null) n.innerHTML = html;
    return n;
  }
  function icon(name, extra) { return el('span', 'msym' + (extra ? ' ' + extra : ''), name); }

  /* ── misc ─────────────────────────────────────────────────────── */
  /* Fisher–Yates. (sort(() => Math.random() - .5) is measurably biased.) */
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ── storage (localStorage / sessionStorage) ──────────────────── */
  function loadJSON(store, key, fallback) {
    try {
      const raw = store.getItem(key);
      return raw == null ? fallback : (JSON.parse(raw) || fallback);
    } catch (e) { return fallback; }   /* private mode / corrupt value */
  }
  function saveJSON(store, key, value) {
    try { store.setItem(key, JSON.stringify(value)); return true; }
    catch (e) { return false; }        /* private mode / quota — carry on */
  }

  window.Daram = Object.assign(window.Daram || {}, {
    esc, fmt, mostlyArabic, el, elHtml, icon, shuffle, loadJSON, saveJSON,
  });
})();
