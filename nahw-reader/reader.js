/* ─────────────────────────────────────────────────────────────────────────
   Daram shared reader engine
   ----------------------------------------------------------------------------
   Renders an interactive word-by-word classical text. A book page supplies a
   `TOC` (table of contents, mirroring the printed/worksheet structure) and a
   `CONTENT` map (toc-id → { blocks }), then calls Reader.init(TOC, CONTENT).

   The page must contain: #page, #pop, #toc, #toc-list, #crumb, #tr-toggle —
   see any book.html for the markup. Styling lives in the shared styles.css.

   Blocks and word glosses are rendered by shared/blocks.js — Learn's matn
   panels render the same data with it. Load shared/core.js + shared/blocks.js
   before this file.
  ──────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  const Blocks = window.Daram.Blocks, WordPop = window.Daram.WordPop;

  function renderBlocks(page, blocks) {
    page.className = 'page'; page.innerHTML = '';
    Blocks.render(page, blocks);
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
    const tocList = document.getElementById('toc-list');
    const crumb = document.getElementById('crumb');
    let activeBtn = null;
    const cmt = setupComments();

    function selectChapter(item, btn) {
      if (activeBtn) activeBtn.classList.remove('active');
      if (btn) { btn.classList.add('active'); activeBtn = btn; }
      const content = CONTENT[item.id];
      if (content) renderBlocks(page, content.blocks); else renderPlaceholder(page, item);
      cmt.chapter(item.id, !!content);
      crumb.innerHTML = '';
      const g = document.createElement('span'); g.textContent = item._group;
      const pip = document.createElement('span'); pip.className = 'pip';
      const c = document.createElement('span'); c.textContent = item.en;
      const pip2 = document.createElement('span'); pip2.className = 'pip';
      const pg = document.createElement('span'); pg.textContent = item.src || ('page ' + item.page);
      crumb.append(g, pip, c, pip2, pg);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.getElementById('toc').classList.add('collapsed');
      closeDrawer();
    }

    /* ── mobile TOC drawer (elements are optional; no-op if absent) ── */
    const tocEl    = document.getElementById('toc');
    const navBtn   = document.getElementById('navToggle');
    const backdrop = document.getElementById('tocBackdrop');
    function openDrawer()  { tocEl.classList.add('open');  if (backdrop) backdrop.classList.add('show'); }
    function closeDrawer() { tocEl.classList.remove('open'); if (backdrop) backdrop.classList.remove('show'); }
    const mobileMq = window.matchMedia('(max-width:900px)');
    if (navBtn)   navBtn.addEventListener('click', () => {
                    if (mobileMq.matches) {           /* narrow: off-canvas drawer */
                      tocEl.classList.contains('open') ? closeDrawer() : openDrawer();
                    } else {                          /* wide: fully hide/show the column */
                      const lay = document.querySelector('.layout');
                      if (lay) lay.classList.toggle('toc-hidden');
                    }
                  });
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

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

    /* ── translation popover (shared with Learn's matn panels) ── */
    WordPop.bind(page);

    /* ── line-by-line translation toggle ── */
    document.getElementById('tr-toggle').addEventListener('change', e => {
      document.body.classList.toggle('show-tr', e.target.checked);
    });

    /* ── margin comments ──────────────────────────────────────────
       Any top-level block (line, heading, box, table, notes…) can carry
       personal comments shown in a Word-style column right of the page.
       Stored in localStorage per book: daram-comments:<book-slug> =
       { chapterId: [ {id, ci, text, ts} ] } where ci = index of the
       block among #page's children for that chapter.
       Add: hover a block → “+” button in the margin (or double-click
       the block — the only way on narrow screens, where the column
       stacks under the page instead). */
    function setupComments() {
      const read = page.parentElement;
      const wrap = document.createElement('div'); wrap.className = 'page-wrap';
      read.insertBefore(wrap, page); wrap.appendChild(page);
      const rail = document.createElement('div'); rail.className = 'cmt-rail'; wrap.appendChild(rail);
      const addBtn = document.createElement('button');
      addBtn.className = 'cmt-add'; addBtn.type = 'button'; addBtn.textContent = '+';
      addBtn.title = 'Add a comment here (or double-click the line)';
      wrap.appendChild(addBtn);

      const bookId = (location.pathname.match(/books\/([^\/]+)/) || [0, 'book'])[1];
      const KEY = 'daram-comments:' + bookId;
      let store = {};
      try { store = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { /* corrupt → start fresh */ }
      const save = () => localStorage.setItem(KEY, JSON.stringify(store));

      let chapter = null, ready = false, hoverCi = -1, draftCi = -1, editId = null;
      const list = () => store[chapter] || [];

      function fmtWhen(ts) {
        return new Date(ts).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
      }
      function topBlock(node) {
        let n = node;
        while (n && n.parentElement !== page) n = n.parentElement;
        return n;
      }
      function hideAdd() { addBtn.classList.remove('show'); hoverCi = -1; }

      function editorCard(value, onSave, onCancel) {
        const el = document.createElement('div'); el.className = 'cmt-card editing';
        const ta = document.createElement('textarea');
        ta.className = 'cmt-input'; ta.rows = 3; ta.placeholder = 'Write a note…';
        ta.value = value; ta.dir = 'auto';
        ta.addEventListener('input', () => { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; layout(); });
        const foot = document.createElement('div'); foot.className = 'cmt-foot';
        const ok = document.createElement('button'); ok.type = 'button'; ok.className = 'cmt-btn primary'; ok.textContent = 'Save';
        const no = document.createElement('button'); no.type = 'button'; no.className = 'cmt-btn'; no.textContent = 'Cancel';
        ok.addEventListener('click', () => { const t = ta.value.trim(); if (t) onSave(t); });
        no.addEventListener('click', onCancel);
        ta.addEventListener('keydown', e => {
          if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') ok.click();
          if (e.key === 'Escape') { e.stopPropagation(); onCancel(); }
        });
        foot.append(ok, no); el.append(ta, foot); return el;
      }

      function displayCard(c) {
        const el = document.createElement('div'); el.className = 'cmt-card';
        const txt = document.createElement('div'); txt.className = 'cmt-text'; txt.textContent = c.text; txt.dir = 'auto';
        const foot = document.createElement('div'); foot.className = 'cmt-foot';
        const when = document.createElement('span'); when.className = 'cmt-when';
        when.textContent = fmtWhen(c.ts); when.title = 'Jump to the line this comment is on';
        when.addEventListener('click', () => {
          const a = page.children[c.ci];
          if (a) a.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        const ed = document.createElement('button'); ed.type = 'button'; ed.className = 'cmt-btn'; ed.textContent = 'Edit';
        const del = document.createElement('button'); del.type = 'button'; del.className = 'cmt-btn'; del.textContent = 'Delete';
        ed.addEventListener('click', () => { editId = c.id; draftCi = -1; render(); });
        del.addEventListener('click', () => {
          if (!confirm('Delete this comment?')) return;
          store[chapter] = list().filter(x => x.id !== c.id);
          if (!store[chapter].length) delete store[chapter];
          save(); render();
        });
        el.addEventListener('mouseenter', () => { const a = page.children[c.ci]; if (a) a.classList.add('cmt-hl'); });
        el.addEventListener('mouseleave', () => { const a = page.children[c.ci]; if (a) a.classList.remove('cmt-hl'); });
        foot.append(when, ed, del); el.append(txt, foot); return el;
      }

      function render() {
        hideAdd();
        rail.innerHTML = '';
        [...page.children].forEach(el => el.classList.remove('has-cmt', 'cmt-hl'));
        if (chapter && ready) {
          const entries = list().map(c => ({
            ci: c.ci,
            el: c.id === editId
              ? editorCard(c.text, t => { c.text = t; save(); editId = null; render(); },
                           () => { editId = null; render(); })
              : displayCard(c)
          }));
          if (draftCi >= 0) entries.push({
            ci: draftCi,
            el: editorCard('', t => {
              (store[chapter] = list()).push({ id: Date.now(), ci: draftCi, text: t, ts: Date.now() });
              save(); draftCi = -1; render();
            }, () => { draftCi = -1; render(); })
          });
          entries.sort((a, b) => a.ci - b.ci);
          entries.forEach(en => { en.el._ci = en.ci; rail.appendChild(en.el); });
          list().forEach(c => { const a = page.children[c.ci]; if (a) a.classList.add('has-cmt'); });
        }
        layout();
        const ta = rail.querySelector('textarea');
        if (ta) { ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); }
      }

      function layout() {
        const cs = getComputedStyle(read);
        const inner = read.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        const GAP = 20, MIN_PAGE = 480, MIN_RAIL = 170, MAX_RAIL = 280;
        /* rail width kept modest so the reading column isn't squashed; it only
           grows toward MAX_RAIL on wide panes where the page can stay full */
        const railW = Math.max(MIN_RAIL,
          Math.min(MAX_RAIL, Math.round(inner * 0.24), inner - GAP - MIN_PAGE));
        /* keep the column to the right whenever the page can still hold MIN_PAGE;
           only genuinely tiny widths fall back to stacking below */
        const side = inner - GAP - MIN_RAIL >= MIN_PAGE;
        document.body.classList.toggle('cmt-side', side);
        if (!side) {
          wrap.style.maxWidth = ''; wrap.style.marginLeft = '';
          [...rail.children].forEach(el => { el.style.top = ''; });
          wrap.style.minHeight = '';
          return;
        }
        rail.style.width = railW + 'px';
        /* shrink + left-align the page to open a gutter for the rail — but only
           once there are cards, so comment-free reading stays full and centred */
        const hasCards = rail.children.length > 0;
        if (hasCards) {
          wrap.style.maxWidth = Math.min(840, inner - GAP - railW) + 'px';
          wrap.style.marginLeft = '';                 /* falls back to CSS margin-left:0 */
        } else {
          wrap.style.maxWidth = Math.min(840, inner) + 'px';
          wrap.style.marginLeft = 'auto';             /* keep centred while empty */
        }
        let bottom = 0;
        [...rail.children].forEach(el => {
          const a = page.children[el._ci];
          let top = a ? a.offsetTop : 0;
          if (top < bottom) top = bottom;              /* push down so cards never overlap */
          el.style.top = top + 'px';
          bottom = top + el.offsetHeight + 10;
        });
        wrap.style.minHeight = bottom ? Math.max(page.offsetHeight, bottom) + 'px' : '';
      }

      page.addEventListener('mouseover', e => {
        if (!ready || !document.body.classList.contains('cmt-side')) return;
        const b = topBlock(e.target); if (!b) return;
        hoverCi = [...page.children].indexOf(b);
        addBtn.style.top = b.offsetTop + 'px';
        addBtn.classList.add('show');
      });
      wrap.addEventListener('mouseleave', hideAdd);
      addBtn.addEventListener('click', () => {
        if (hoverCi < 0) return;
        draftCi = hoverCi; editId = null; render();
      });
      page.addEventListener('dblclick', e => {
        if (!ready) return;
        const b = topBlock(e.target); if (!b) return;
        draftCi = [...page.children].indexOf(b); editId = null; render();
      });

      window.addEventListener('resize', layout);
      /* observe the reading pane, not the page: collapsing the TOC widens the
         pane while the page's own width stays pinned by its inline max-width,
         so observing page alone would miss the reflow */
      if (window.ResizeObserver) new ResizeObserver(() => layout()).observe(read);

      return { chapter(id, isReady) { chapter = id; ready = isReady; draftCi = -1; editId = null; render(); } };
    }
  }

  window.Reader = { init };
})();
