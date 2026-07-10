/* ─────────────────────────────────────────────────────────────────────────
   Daram shared reader engine
   ----------------------------------------------------------------------------
   Renders an interactive word-by-word classical text. A book page supplies a
   `TOC` (table of contents, mirroring the printed/worksheet structure) and a
   `CONTENT` map (toc-id → { blocks }), then calls Reader.init(TOC, CONTENT).

   The page must contain: #page, #pop, #toc, #toc-list, #crumb, #tr-toggle —
   see any book.html for the markup. Styling lives in the shared styles.css.

   Token / block format (shared with every book's data file):
     Word   {a:Arabic, t:translit, e:English, n?:grammar note, q?:1 Qur'an word}
     Glyph  {g:'،'}  punctuation / braces / refs (not interactive)
     Blocks page | h1 | h2(c:green|blue|red|plain) | line | box | table | grid | note
   ──────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  function makeWord(tok) {
    if (tok.g !== undefined) {
      const s = document.createElement('span');
      const brace = tok.g === '﴿' || tok.g === '﴾';
      s.className = 'glyph' + (brace ? ' qbrace' : ''); s.textContent = tok.g; return s;
    }
    const s = document.createElement('span');
    s.className = 'word' + (tok.q ? ' qz' : '') + (tok.c ? ' hl-' + tok.c : '');
    s.dataset.tr = tok.t || ''; s.dataset.en = tok.e || ''; s.dataset.note = tok.n || '';
    s.textContent = tok.a; return s;
  }
  function lineTranslation(words) {
    return words.filter(t => t.g === undefined && t.e).map(t => t.e)
      .join(' ').replace(/\s+([,.;:!?])/g, '$1').replace(/\(\s+/g, '(').trim();
  }
  function makeLine(words, cls) {
    const block = document.createElement('div'); block.className = 'line-block';
    const p = document.createElement('p'); p.className = 'line' + (cls ? ' ' + cls : '');
    words.forEach(tok => { p.appendChild(makeWord(tok)); p.appendChild(document.createTextNode(' ')); });
    block.appendChild(p);
    const tr = lineTranslation(words);
    if (tr) { const d = document.createElement('div'); d.className = 'line-tr'; d.textContent = tr; block.appendChild(d); }
    return block;
  }
  function renderBlocks(page, blocks) {
    page.className = 'page'; page.innerHTML = '';
    blocks.forEach(b => {
      if (b.t === 'page') {
        const d = document.createElement('div'); d.className = 'pdiv';
        d.innerHTML = '<span class="rule"></span><span class="num">صفحة ' + b.n + '</span><span class="rule"></span>';
        page.appendChild(d);
      } else if (b.t === 'h1' || b.t === 'h2') {
        const h = document.createElement('div');
        h.className = b.t === 'h1' ? ('h1' + (b.c ? ' ' + b.c : '')) : 'h2 ' + (b.c || 'plain');
        h.innerHTML = '<span class="ar"></span>' + (b.en ? '<span class="en"></span>' : '');
        h.querySelector('.ar').textContent = b.ar; if (b.en) h.querySelector('.en').textContent = b.en;
        page.appendChild(h);
      } else if (b.t === 'line') {
        page.appendChild(makeLine(b.w));
      } else if (b.t === 'box') {
        const box = document.createElement('div'); box.className = 'box';
        if (b.label) {
          const lab = document.createElement('div'); lab.className = 'box-label'; lab.textContent = b.label;
          if (b.labelEn) { const e = document.createElement('span'); e.className = 'en'; e.textContent = b.labelEn; lab.appendChild(e); }
          box.appendChild(lab);
        }
        b.lines.forEach(ln => box.appendChild(makeLine(ln)));
        page.appendChild(box);
      } else if (b.t === 'table') {
        const wrap = document.createElement('div'); wrap.className = 'tbl-wrap';
        const t = document.createElement('table'); t.className = 'bk';
        t.innerHTML =
          '<tr><th colspan="2">' + b.head[0] + '</th><th rowspan="2">' + b.head[1] + '</th></tr>' +
          '<tr><th class="sub">' + b.sub[0] + '</th><th class="sub">' + b.sub[1] + '</th></tr>' +
          b.rows.map(r => '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>').join('');
        wrap.appendChild(t);
        if (b.caption) { const c = document.createElement('div'); c.className = 'tbl-cap'; c.textContent = b.caption; wrap.appendChild(c); }
        page.appendChild(wrap);
      } else if (b.t === 'grid') {
        const wrap = document.createElement('div'); wrap.className = 'tbl-wrap';
        const t = document.createElement('table'); t.className = 'grid';
        t.innerHTML =
          '<tr><th class="corner"></th>' + b.cols.map(c => '<th>' + c + '</th>').join('') + '</tr>' +
          b.rows.map(r => '<tr><th class="rowlab">' + r.h + '</th>' +
            r.c.map(c => '<td' + (c === '✗' ? ' class="x"' : '') + '>' + c + '</td>').join('') + '</tr>').join('');
        wrap.appendChild(t);
        if (b.caption) { const c = document.createElement('div'); c.className = 'tbl-cap'; c.textContent = b.caption; wrap.appendChild(c); }
        page.appendChild(wrap);
      } else if (b.t === 'note') {
        let host = page.lastElementChild;
        if (!host || !host.classList.contains('notes')) {
          host = document.createElement('div'); host.className = 'notes';
          host.innerHTML = '<div class="ftitle">Footnotes · فوائد</div>'; page.appendChild(host);
        }
        const n = document.createElement('div'); n.className = 'note';
        const num = document.createElement('div'); num.className = 'n'; num.textContent = b.n || '•';
        const body = document.createElement('div'); body.className = 'body';
        const ar = document.createElement('div'); ar.className = 'nar'; ar.textContent = b.ar;
        const en = document.createElement('div'); en.className = 'nen'; en.textContent = b.en;
        body.appendChild(ar); body.appendChild(en); n.appendChild(num); n.appendChild(body); host.appendChild(n);
      }
    });
  }
  function renderPlaceholder(page, item) {
    page.className = ''; page.innerHTML = '';
    const d = document.createElement('div'); d.className = 'placeholder';
    d.innerHTML = '<div class="ar"></div><div class="en"></div><div class="tag"></div>';
    d.querySelector('.ar').textContent = item.ar; d.querySelector('.en').textContent = item.en;
    d.querySelector('.tag').textContent = 'Not yet transcribed · ' + (item.src || ('page ' + item.page + ' in the book'));
    page.appendChild(d);
  }

  function init(TOC, CONTENT) {
    const page  = document.getElementById('page');
    const pop   = document.getElementById('pop');
    const tocList = document.getElementById('toc-list');
    const crumb = document.getElementById('crumb');
    let activeBtn = null;

    function selectChapter(item, btn) {
      if (activeBtn) activeBtn.classList.remove('active');
      if (btn) { btn.classList.add('active'); activeBtn = btn; }
      const content = CONTENT[item.id];
      if (content) renderBlocks(page, content.blocks); else renderPlaceholder(page, item);
      crumb.innerHTML = '';
      const g = document.createElement('span'); g.textContent = item._group;
      const pip = document.createElement('span'); pip.className = 'pip';
      const c = document.createElement('span'); c.textContent = item.en;
      const pip2 = document.createElement('span'); pip2.className = 'pip';
      const pg = document.createElement('span'); pg.textContent = item.src || ('page ' + item.page);
      crumb.append(g, pip, c, pip2, pg);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.getElementById('toc').classList.add('collapsed');
    }

    TOC.forEach(group => {
      const g = document.createElement('div'); g.className = 'grp';
      const gh = document.createElement('div'); gh.className = 'grp-h';
      gh.innerHTML = '<span class="ar"></span><span class="en"></span>';
      gh.querySelector('.ar').textContent = group.ar; gh.querySelector('.en').textContent = group.en;
      g.appendChild(gh);
      group.items.forEach(item => {
        item._group = group.ar;
        const isReady = !!CONTENT[item.id];
        const b = document.createElement('button');
        b.className = 'item' + (isReady ? ' ready' : '');
        b.innerHTML = '<span class="dot"></span><span class="ar"></span><span class="pg"></span>';
        b.querySelector('.ar').textContent = item.ar;
        b.querySelector('.pg').textContent = item.label || item.page;
        b.addEventListener('click', () => selectChapter(item, isReady ? b : null));
        g.appendChild(b);
        item._btn = b;
      });
      tocList.appendChild(g);
    });

    /* open the first ready chapter by default */
    const first = TOC.flatMap(g => g.items).find(it => CONTENT[it.id]);
    if (first) selectChapter(first, first._btn);

    /* ── translation popover ── */
    let activeEl = null, pinned = false;
    const canHover = window.matchMedia('(hover: hover)').matches;
    function showPop(el) {
      if (activeEl && activeEl !== el) activeEl.classList.remove('active');
      activeEl = el; el.classList.add('active');
      pop.querySelector('.p-ar').textContent = el.textContent;
      pop.querySelector('.p-tr').textContent = el.dataset.tr;
      pop.querySelector('.p-en').textContent = el.dataset.en;
      const noteEl = pop.querySelector('.p-note');
      noteEl.textContent = el.dataset.note || ''; noteEl.style.display = el.dataset.note ? 'block' : 'none';
      pop.classList.add('show');
      const r = el.getBoundingClientRect(), pr = pop.getBoundingClientRect();
      const sx = window.scrollX, sy = window.scrollY, vw = document.documentElement.clientWidth, m = 10;
      let left = r.left + sx + r.width / 2 - pr.width / 2;
      left = Math.max(m + sx, Math.min(left, sx + vw - pr.width - m));
      let top = r.top + sy - pr.height - 12;
      if (top < sy + 4) top = r.bottom + sy + 12;
      pop.style.left = left + 'px'; pop.style.top = top + 'px';
      pop.style.setProperty('--arrow', ((r.left + sx + r.width / 2) - left) + 'px');
    }
    function hidePop() { pop.classList.remove('show'); if (activeEl) { activeEl.classList.remove('active'); activeEl = null; } }
    page.addEventListener('mouseover', e => { const w = e.target.closest('.word'); if (w && canHover && !pinned) showPop(w); });
    page.addEventListener('mouseout',  e => { const w = e.target.closest('.word'); if (w && canHover && !pinned) hidePop(); });
    page.addEventListener('click', e => {
      const w = e.target.closest('.word'); if (!w) return; e.stopPropagation();
      if (pinned && activeEl === w) { pinned = false; hidePop(); return; }
      pinned = true; showPop(w);
    });
    document.addEventListener('click', () => { if (pinned) { pinned = false; hidePop(); } });
    pop.addEventListener('click', e => e.stopPropagation());
    window.addEventListener('keydown', e => { if (e.key === 'Escape') { pinned = false; hidePop(); } });

    /* ── line-by-line translation toggle ── */
    document.getElementById('tr-toggle').addEventListener('change', e => {
      document.body.classList.toggle('show-tr', e.target.checked);
    });
  }

  window.Reader = { init };
})();
