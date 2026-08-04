/* ═══════════════════════════════════════════════════════════════
   Daram shared block renderer + word popover
   ---------------------------------------------------------------
   One renderer for the token/block format every book data file uses
   (books/<slug>/*.js), shared by the reader (whole chapters) and by
   Learn's matn panels (a slice of the same blocks inside a lesson).

     Word   {a:Arabic, t:translit, e:English, n?:grammar note, q?:1 Qur'an word}
     Glyph  {g:'،'}  punctuation / braces / refs (not interactive)
     Blocks page | h1 | h2(c:green|blue|red|plain) | line | box | table | grid | note

   API (needs shared/core.js first):
     Daram.Blocks.word(tok)                 → span
     Daram.Blocks.line(words, cls?)         → .line-block with its translation
     Daram.Blocks.translation(words)        → the joined English line
     Daram.Blocks.render(host, blocks, opts)  opts.pages / opts.notes (default
                                              true) drop page rules + footnotes,
                                              which lesson excerpts don't show
     Daram.WordPop.bind(host)               hover/click glosses on .word inside
     Daram.WordPop.hide()
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const D = window.Daram;
  const esc = D.esc, el = D.el;

  /* ── tokens ───────────────────────────────────────────────────── */
  function word(tok) {
    if (tok.g !== undefined) {
      const brace = tok.g === '﴿' || tok.g === '﴾';
      const s = el('span', 'glyph' + (brace ? ' qbrace' : ''));
      s.textContent = tok.g;
      return s;
    }
    const s = el('span', 'word' + (tok.q ? ' qz' : '') + (tok.c ? ' hl-' + tok.c : ''));
    s.dataset.tr = tok.t || '';
    s.dataset.en = tok.e || '';
    s.dataset.note = tok.n || '';
    s.textContent = tok.a;
    return s;
  }

  function translation(words) {
    return words.filter(t => t.g === undefined && t.e).map(t => t.e)
      .join(' ').replace(/\s+([,.;:!?])/g, '$1').replace(/\(\s+/g, '(').trim();
  }

  function line(words, cls) {
    const block = el('div', 'line-block');
    const p = el('p', 'line' + (cls ? ' ' + cls : ''));
    words.forEach(tok => { p.append(word(tok)); p.append(document.createTextNode(' ')); });
    block.append(p);
    const tr = translation(words);
    if (tr) block.append(el('div', 'line-tr', tr));
    return block;
  }

  /* ── blocks ───────────────────────────────────────────────────── */
  function heading(b) {
    const h = el('div', b.t === 'h1' ? 'h1' + (b.c ? ' ' + b.c : '') : 'h2 ' + (b.c || 'plain'));
    h.append(el('span', 'ar', b.ar));
    if (b.en) h.append(el('span', 'en', b.en));
    return h;
  }

  function box(b) {
    const node = el('div', 'box');
    if (b.label) {
      const lab = el('div', 'box-label', b.label);
      if (b.labelEn) lab.append(el('span', 'en', b.labelEn));
      node.append(lab);
    }
    b.lines.forEach(ln => node.append(line(ln)));
    return node;
  }

  function tableWrap(t, caption) {
    const wrap = el('div', 'tbl-wrap');
    wrap.append(t);
    if (caption) wrap.append(el('div', 'tbl-cap', caption));
    return wrap;
  }

  function table(b) {
    const t = D.elHtml('table', 'bk',
      '<tr><th colspan="2">' + esc(b.head[0]) + '</th><th rowspan="2">' + esc(b.head[1]) + '</th></tr>' +
      '<tr><th class="sub">' + esc(b.sub[0]) + '</th><th class="sub">' + esc(b.sub[1]) + '</th></tr>' +
      b.rows.map(r => '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>').join(''));
    return tableWrap(t, b.caption);
  }

  function grid(b) {
    const t = D.elHtml('table', 'grid',
      '<tr><th class="corner"></th>' + b.cols.map(c => '<th>' + esc(c) + '</th>').join('') + '</tr>' +
      b.rows.map(r => '<tr><th class="rowlab">' + esc(r.h) + '</th>' +
        r.c.map(c => '<td' + (c === '✗' ? ' class="x"' : '') + '>' + esc(c) + '</td>').join('') + '</tr>').join(''));
    return tableWrap(t, b.caption);
  }

  function pageRule(b) {
    const d = el('div', 'pdiv');
    d.append(el('span', 'rule'), el('span', 'num', 'صفحة ' + b.n), el('span', 'rule'));
    return d;
  }

  /* footnotes collect into one trailing block, so this one appends itself */
  function appendNote(host, b) {
    let holder = host.lastElementChild;
    if (!holder || !holder.classList.contains('notes')) {
      holder = el('div', 'notes');
      holder.append(el('div', 'ftitle', 'Footnotes · فوائد'));
      host.append(holder);
    }
    const n = el('div', 'note');
    const body = el('div', 'body');
    body.append(el('div', 'nar', b.ar), el('div', 'nen', b.en));
    n.append(el('div', 'n', b.n || '•'), body);
    holder.append(n);
  }

  function render(host, blocks, opts) {
    const o = opts || {};
    const withPages = o.pages !== false, withNotes = o.notes !== false;
    blocks.forEach(b => {
      if (!b) return;
      if (b.t === 'page') { if (withPages) host.append(pageRule(b)); }
      else if (b.t === 'h1' || b.t === 'h2') host.append(heading(b));
      else if (b.t === 'line') host.append(line(b.w));
      else if (b.t === 'box') host.append(box(b));
      else if (b.t === 'table') host.append(table(b));
      else if (b.t === 'grid') host.append(grid(b));
      else if (b.t === 'note') { if (withNotes) appendNote(host, b); }
    });
    return host;
  }

  /* ══ word popover ═══════════════════════════════════════════════
     One element for the whole page: hover shows a gloss (pointer devices
     only), click pins it so touch users — and anyone copying a note —
     keep it open until the next click or Escape. */
  let popEl = null, active = null, pinned = false;

  function ensurePop() {
    if (popEl) return popEl;
    popEl = document.getElementById('pop');
    if (!popEl) {
      popEl = D.elHtml('div', 'pop',
        '<div class="p-ar"></div><div class="p-tr"></div><div class="p-en"></div><div class="p-note"></div>');
      document.body.append(popEl);
    }
    popEl.addEventListener('click', e => e.stopPropagation());
    document.addEventListener('click', () => { if (pinned) { pinned = false; hide(); } });
    window.addEventListener('keydown', e => { if (e.key === 'Escape') { pinned = false; hide(); } });
    return popEl;
  }

  function show(w) {
    const pop = ensurePop();
    if (active && active !== w) active.classList.remove('active');
    active = w; w.classList.add('active');
    pop.querySelector('.p-ar').textContent = w.textContent;
    pop.querySelector('.p-tr').textContent = w.dataset.tr;
    pop.querySelector('.p-en').textContent = w.dataset.en;
    const noteEl = pop.querySelector('.p-note');
    noteEl.textContent = w.dataset.note || '';
    noteEl.style.display = w.dataset.note ? 'block' : 'none';
    pop.classList.add('show');

    const r = w.getBoundingClientRect(), pr = pop.getBoundingClientRect();
    const sx = window.scrollX, sy = window.scrollY, vw = document.documentElement.clientWidth, m = 10;
    let left = r.left + sx + r.width / 2 - pr.width / 2;
    left = Math.max(m + sx, Math.min(left, sx + vw - pr.width - m));
    let top = r.top + sy - pr.height - 12;
    if (top < sy + 4) top = r.bottom + sy + 12;
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
    pop.style.setProperty('--arrow', ((r.left + sx + r.width / 2) - left) + 'px');
  }

  function hide() {
    if (popEl) popEl.classList.remove('show');
    if (active) { active.classList.remove('active'); active = null; }
  }

  function bind(host) {
    ensurePop();
    const canHover = window.matchMedia('(hover: hover)').matches;
    host.addEventListener('mouseover', e => { const w = e.target.closest('.word'); if (w && canHover && !pinned) show(w); });
    host.addEventListener('mouseout', e => { const w = e.target.closest('.word'); if (w && canHover && !pinned) hide(); });
    host.addEventListener('click', e => {
      const w = e.target.closest('.word'); if (!w) return;
      e.stopPropagation();
      if (pinned && active === w) { pinned = false; hide(); return; }
      pinned = true; show(w);
    });
  }

  D.Blocks = { word, line, translation, render };
  D.WordPop = { bind, show, hide };
})();
