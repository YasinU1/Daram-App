/* Daram PDF Reader — highlight a word, AI reads + translates it, saved to highlights.json.
   Margin comments (Word-style, right of the page) + chapter TOC mapped to PDF pages. */
(function () {
  'use strict';

  const PDF_URL = '../books/kubra-nahw/an-Nahw al-Kubra 2026 May (Website).pdf';
  const PDF_ID = 'kubra-nahw-2026';
  const API_LS_KEY = 'daram-anthropic-key';
  const MODEL = 'claude-opus-4-8';
  const MAX_CSS_WIDTH = 860;
  const TOC_W = 252;
  const RAIL_W = 280;
  const PAGE_OFFSET = 0; // printed page N = PDF page N (verified against the PDF)

  /* Chapter map — printed page numbers from the line-by-line reader's TOC (book.html) */
  const CHAPTERS = [
    { ar: 'المُقَدِّمَة', en: 'Introduction', items: [
      { ar: 'الباب الأول في الكلمة', en: 'The Word (al-kalimah)', page: 6 },
      { ar: 'الباب الثاني في الجملة وشبه الجملة والكلام', en: 'Sentence, quasi-sentence & speech', page: 10 },
      { ar: 'الباب الثالث في العامل والمعمول والإعراب', en: 'Governor, governed & iʿrāb', page: 17 },
    ]},
    { ar: 'المَقْصِدُ الأوَّل: في العامل وغير العامل', en: 'Aim 1 — The governing & non-governing', items: [
      { ar: 'المقدمة', en: 'Introduction', page: 22 },
      { ar: 'الباب الأول في الفعل', en: 'The Verb', page: 22 },
      { ar: 'الباب الثاني في الحرف', en: 'The Particle', page: 41 },
      { ar: 'الباب الثالث في الاسم', en: 'The Noun', page: 104 },
      { ar: 'الباب الرابع في العامل المعنوي', en: 'The abstract governor', page: 120 },
      { ar: 'الخاتمة', en: 'Conclusion', page: 121 },
    ]},
    { ar: 'المَقْصِدُ الثاني: في المعمول وغير المعمول', en: 'Aim 2 — The governed & non-governed', items: [
      { ar: 'المقدمة', en: 'Introduction', page: 132 },
      { ar: 'الباب الأول في الاسم', en: 'The Noun', page: 132 },
      { ar: 'الباب الثاني في الفعل', en: 'The Verb', page: 163 },
      { ar: 'الباب الثالث في الجملة', en: 'The Sentence', page: 164 },
      { ar: 'الباب الرابع في شبه الجملة', en: 'The quasi-sentence', page: 172 },
    ]},
    { ar: 'المَقْصِدُ الثالث: في الإعراب', en: 'Aim 3 — Iʿrāb (inflection)', items: [
      { ar: 'المقدمة', en: 'Introduction', page: 176 },
      { ar: 'الباب الأول في إعراب الاسم', en: 'Iʿrāb of the noun', page: 177 },
      { ar: 'الباب الثاني في إعراب الفعل وبنائه', en: 'Iʿrāb & bināʾ of the verb', page: 192 },
      { ar: 'الباب الثالث في إعراب الجملة وشبه الجملة', en: 'Iʿrāb of the sentence', page: 197 },
    ]},
    { ar: 'الخَاتِمَة', en: 'Conclusion', items: [
      { ar: 'الباب الأول في أحكام الاسم', en: 'Rulings of the noun', page: 200 },
      { ar: 'الباب الثاني في أحكام الفعل', en: 'Rulings of the verb', page: 220 },
      { ar: 'الخاتمة', en: 'Conclusion', page: 228 },
    ]},
  ];

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  const viewer = document.getElementById('viewer');
  const popup = document.getElementById('popup');
  const zoomLabel = document.getElementById('zoomLabel');
  const pageLabel = document.getElementById('pageLabel');
  const btnHlMode = document.getElementById('btnHlMode');
  const tocPanel = document.getElementById('tocPanel');

  let pdfDoc = null;
  let scaleMult = 1;
  let hlMode = true;
  let baseAspect = 1.414;
  let pages = []; // 1-indexed: {row, container, layer, rail, canvas, rendered, rendering}
  let highlights = []; // {id, pdf, page, x, y, w, h, ar, en}
  let comments = [];   // {id, pdf, page, y, text, ts}
  let serverOk = false;
  let observer = null;
  let popupPinned = false;
  let draft = null;    // {page, y} while composing a new comment
  let editId = null;   // comment id being edited

  const railVisible = () => window.innerWidth >= 1000;

  /* ================= storage (JSON via server, localStorage fallback) ================= */

  async function loadStore() {
    try {
      const res = await fetch('/api/highlights');
      if (res.ok) {
        serverOk = true;
        const data = await res.json();
        highlights = (data.highlights || []).filter(h => h.pdf === PDF_ID);
        comments = (data.comments || []).filter(c => c.pdf === PDF_ID);
        return;
      }
    } catch (_) { /* no server — fall back */ }
    serverOk = false;
    try { highlights = JSON.parse(localStorage.getItem('daram-pdf-hl::' + PDF_ID)) || []; } catch (_) { highlights = []; }
    try { comments = JSON.parse(localStorage.getItem('daram-pdf-cmt::' + PDF_ID)) || []; } catch (_) { comments = []; }
    console.warn('highlights.json server not reachable — using localStorage. Run: node pdf-reader/server.js');
  }

  let saveTimer = null;
  function persist() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      if (serverOk) {
        try {
          await fetch('/api/highlights', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ highlights, comments }),
          });
          return;
        } catch (_) { serverOk = false; }
      }
      localStorage.setItem('daram-pdf-hl::' + PDF_ID, JSON.stringify(highlights));
      localStorage.setItem('daram-pdf-cmt::' + PDF_ID, JSON.stringify(comments));
    }, 250);
  }

  /* ================= translation (Anthropic API, direct from browser) ================= */

  async function translateImage(b64png) {
    const key = localStorage.getItem(API_LS_KEY);
    if (!key) {
      openKeyPanel();
      throw new Error('Set your Anthropic API key first (⚙︎ Key).');
    }
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 512,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: 'image/png', data: b64png } },
            {
              type: 'text',
              text: 'This image is a small crop from a classical Arabic grammar (nahw) textbook, an-Nahw al-Kubra. ' +
                    'Read the Arabic word or short phrase exactly as written, including harakat if visible, ' +
                    'and give one concise English translation suited to the grammar context. ' +
                    'If several words are shown, translate them as one phrase.',
            },
          ],
        }],
        output_config: {
          format: {
            type: 'json_schema',
            schema: {
              type: 'object',
              properties: {
                arabic: { type: 'string', description: 'The Arabic text exactly as written in the image' },
                translation: { type: 'string', description: 'Concise English translation' },
              },
              required: ['arabic', 'translation'],
              additionalProperties: false,
            },
          },
        },
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error((err && err.error && err.error.message) || 'HTTP ' + res.status);
    }
    const data = await res.json();
    if (data.stop_reason === 'refusal') throw new Error('Model declined this image.');
    const text = (data.content.find(b => b.type === 'text') || {}).text || '';
    const parsed = JSON.parse(text);
    return { ar: parsed.arabic, en: parsed.translation };
  }

  /* ================= page rendering ================= */

  function cssPageWidth() {
    const tocW = document.body.classList.contains('toc-open') ? TOC_W : 0;
    const railW = railVisible() ? RAIL_W + 18 : 0;
    const avail = Math.min(window.innerWidth - tocW - railW - 48, MAX_CSS_WIDTH);
    return Math.max(280, Math.round(avail * scaleMult));
  }

  function buildPages() {
    const w = cssPageWidth();
    for (let n = 1; n <= pdfDoc.numPages; n++) {
      const row = document.createElement('div');
      row.className = 'page-row';

      const container = document.createElement('div');
      container.className = 'pdf-page';
      container.dataset.page = n;
      container.style.width = w + 'px';
      container.style.height = Math.round(w * baseAspect) + 'px';

      const layer = document.createElement('div');
      layer.className = 'hl-layer' + (hlMode ? ' active' : '');
      container.appendChild(layer);

      const num = document.createElement('span');
      num.className = 'pnum';
      num.textContent = n;
      container.appendChild(num);

      const rail = document.createElement('div');
      rail.className = 'pdf-cmt-rail';

      wireSelection(layer, n);
      container.addEventListener('dblclick', (e) => onPageDblClick(e, n));

      row.append(container, rail);
      viewer.appendChild(row);
      pages[n] = { row, container, layer, rail, canvas: null, rendered: false, rendering: false };
      renderHighlights(n);
      renderComments(n);
    }
  }

  async function renderPage(n) {
    const p = pages[n];
    if (!p || p.rendered || p.rendering) return;
    p.rendering = true;
    try {
      const page = await pdfDoc.getPage(n);
      const vp1 = page.getViewport({ scale: 1 });
      const w = cssPageWidth();
      const scale = w / vp1.width;
      const vp = page.getViewport({ scale });
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const canvas = document.createElement('canvas');
      canvas.width = Math.round(vp.width * dpr);
      canvas.height = Math.round(vp.height * dpr);
      const ctx = canvas.getContext('2d');
      await page.render({ canvasContext: ctx, viewport: vp, transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null }).promise;

      p.container.style.width = Math.round(vp.width) + 'px';
      p.container.style.height = Math.round(vp.height) + 'px';
      if (p.canvas) p.canvas.remove();
      p.container.insertBefore(canvas, p.container.firstChild);
      p.canvas = canvas;
      p.rendered = true;
      layoutComments(n);
    } finally {
      p.rendering = false;
    }
  }

  function unrenderPage(n) {
    const p = pages[n];
    if (!p || !p.rendered) return;
    if (p.canvas) { p.canvas.remove(); p.canvas = null; }
    p.rendered = false;
  }

  function setupObserver() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        const n = +e.target.dataset.page;
        if (e.isIntersecting) renderPage(n);
        else unrenderPage(n);
      }
    }, { rootMargin: '1400px 0px' });
    for (let n = 1; n <= pdfDoc.numPages; n++) observer.observe(pages[n].container);
  }

  function rerenderAll() {
    if (!pdfDoc) return;
    const w = cssPageWidth();
    for (let n = 1; n <= pdfDoc.numPages; n++) {
      const p = pages[n];
      unrenderPage(n);
      p.container.style.width = w + 'px';
      p.container.style.height = Math.round(w * baseAspect) + 'px';
      layoutComments(n);
    }
    setupObserver();
  }

  /* ================= highlights ================= */

  function renderHighlights(n) {
    const p = pages[n];
    p.layer.querySelectorAll('.hl').forEach(el => el.remove());
    for (const h of highlights) {
      if (h.page !== n) continue;
      p.layer.appendChild(makeHlEl(h));
    }
  }

  function makeHlEl(h) {
    const el = document.createElement('div');
    el.className = 'hl';
    el.style.left = (h.x * 100) + '%';
    el.style.top = (h.y * 100) + '%';
    el.style.width = (h.w * 100) + '%';
    el.style.height = (h.h * 100) + '%';
    el.addEventListener('mouseenter', () => { if (!popupPinned) showPopup(el, h, false); });
    el.addEventListener('mouseleave', () => { if (!popupPinned) hidePopup(); });
    el.addEventListener('click', (e) => { e.stopPropagation(); showPopup(el, h, true); });
    return el;
  }

  /* ================= selection (drag to highlight) ================= */

  function wireSelection(layer, pageNum) {
    let selBox = null, sx = 0, sy = 0;

    layer.addEventListener('pointerdown', (e) => {
      if (!hlMode || e.button !== 0 || e.target.classList.contains('hl')) return;
      e.preventDefault();
      layer.setPointerCapture(e.pointerId);
      const r = layer.getBoundingClientRect();
      sx = e.clientX - r.left; sy = e.clientY - r.top;
      selBox = document.createElement('div');
      selBox.className = 'sel-box';
      layer.appendChild(selBox);
      position(e);
    });

    function position(e) {
      const r = layer.getBoundingClientRect();
      const cx = Math.max(0, Math.min(e.clientX - r.left, r.width));
      const cy = Math.max(0, Math.min(e.clientY - r.top, r.height));
      const x = Math.min(sx, cx), y = Math.min(sy, cy);
      selBox.style.left = x + 'px'; selBox.style.top = y + 'px';
      selBox.style.width = Math.abs(cx - sx) + 'px'; selBox.style.height = Math.abs(cy - sy) + 'px';
      return { x, y, w: Math.abs(cx - sx), h: Math.abs(cy - sy), rw: r.width, rh: r.height };
    }

    layer.addEventListener('pointermove', (e) => { if (selBox) position(e); });

    layer.addEventListener('pointerup', (e) => {
      if (!selBox) return;
      const rect = position(e);
      selBox.remove(); selBox = null;
      if (rect.w < 10 || rect.h < 8) return; // too small — treat as click
      createHighlight(pageNum, {
        x: rect.x / rect.rw, y: rect.y / rect.rh,
        w: rect.w / rect.rw, h: rect.h / rect.rh,
      });
    });

    layer.addEventListener('pointercancel', () => { if (selBox) { selBox.remove(); selBox = null; } });
  }

  async function createHighlight(pageNum, rect) {
    const p = pages[pageNum];
    if (!p.rendered) return;

    const h = {
      id: 'hl_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      pdf: PDF_ID, page: pageNum,
      x: rect.x, y: rect.y, w: rect.w, h: rect.h,
      ar: '', en: '',
    };

    const el = makeHlEl(h);
    el.classList.add('pending');
    p.layer.appendChild(el);
    showPopup(el, { status: 'Translating…' }, false);

    const run = async () => {
      try {
        const b64 = cropToBase64(p.canvas, rect);
        const t = await translateImage(b64);
        h.ar = t.ar; h.en = t.en;
        highlights.push(h);
        persist();
        el.classList.remove('pending', 'err');
        showPopup(el, h, false);
        setTimeout(() => { if (!popupPinned) hidePopup(); }, 2600);
      } catch (err) {
        el.classList.remove('pending');
        el.classList.add('err');
        showPopup(el, { status: err.message, error: true, retry: run, el }, true);
      }
    };
    run();
  }

  function cropToBase64(canvas, rect) {
    const sx = Math.round(rect.x * canvas.width);
    const sy = Math.round(rect.y * canvas.height);
    const sw = Math.max(1, Math.round(rect.w * canvas.width));
    const sh = Math.max(1, Math.round(rect.h * canvas.height));
    const tmp = document.createElement('canvas');
    tmp.width = sw; tmp.height = sh;
    tmp.getContext('2d').drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh);
    return tmp.toDataURL('image/png').split(',')[1];
  }

  /* ================= margin comments (Word-style, right of the page) =================
     Double-click anywhere on a page → comment anchored to that point.
     Cards live in a per-page rail on the right; anchor shown as a gold tick. */

  function onPageDblClick(e, n) {
    if (e.target.closest('.cmt-marker')) return;
    const r = pages[n].container.getBoundingClientRect();
    const y = Math.max(0, Math.min((e.clientY - r.top) / r.height, 1));
    if (!railVisible()) {
      openFloatingEditor(n, y, e.clientX, e.clientY, null);
      return;
    }
    draft = { page: n, y };
    editId = null;
    renderComments(n);
  }

  /* floating editor — used when the rail doesn't fit (narrow windows) */
  let floatEd = null;
  function closeFloatingEditor() {
    if (floatEd) { floatEd.remove(); floatEd = null; }
  }
  function openFloatingEditor(n, y, cx, cy, existing) {
    closeFloatingEditor();
    hidePopup();
    const card = cmtEditor(existing ? existing.text : '',
      (t) => {
        if (existing) { existing.text = t; }
        else comments.push(newComment(n, y, t));
        persist();
        closeFloatingEditor();
        renderComments(n);
      },
      () => closeFloatingEditor(), n);
    card.classList.add('floating');
    document.body.appendChild(card);
    let left = Math.max(8, Math.min(cx - 140, window.innerWidth - 288));
    let top = Math.max(70, Math.min(cy - 30, window.innerHeight - 260));
    card.style.left = left + 'px';
    card.style.top = top + 'px';
    floatEd = card;
    const ta = card.querySelector('textarea');
    ta.focus();
    ta.setSelectionRange(ta.value.length, ta.value.length);
  }

  function newComment(n, y, text) {
    return {
      id: 'c_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      pdf: PDF_ID, page: n, y, text, ts: Date.now(),
    };
  }

  function fmtWhen(ts) {
    return new Date(ts).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function cmtEditor(value, onSave, onCancel, n) {
    const el = document.createElement('div');
    el.className = 'cmt-card editing';
    const ta = document.createElement('textarea');
    ta.className = 'cmt-input'; ta.rows = 3; ta.placeholder = 'Write a note…';
    ta.value = value; ta.dir = 'auto';
    ta.setAttribute('inputmode', 'none'); // suppress the browser's own virtual keyboard — we show ours
    ta.addEventListener('input', () => { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; layoutComments(n); });
    const foot = document.createElement('div'); foot.className = 'cmt-foot';
    const ok = document.createElement('button'); ok.type = 'button'; ok.className = 'cmt-btn primary'; ok.textContent = 'Save';
    const no = document.createElement('button'); no.type = 'button'; no.className = 'cmt-btn'; no.textContent = 'Cancel';
    ok.addEventListener('click', () => { const t = ta.value.trim(); if (t) onSave(t); });
    no.addEventListener('click', onCancel);
    ta.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') ok.click();
      if (e.key === 'Escape') { e.stopPropagation(); onCancel(); }
    });
    foot.append(ok, no);
    el.append(ta, foot);
    return el;
  }

  function cmtDisplay(c) {
    const el = document.createElement('div');
    el.className = 'cmt-card';
    const txt = document.createElement('div'); txt.className = 'cmt-text'; txt.textContent = c.text; txt.dir = 'auto';
    const foot = document.createElement('div'); foot.className = 'cmt-foot';
    const when = document.createElement('span'); when.className = 'cmt-when';
    when.textContent = fmtWhen(c.ts); when.title = 'Jump to the spot this comment is on';
    when.addEventListener('click', () => flashMarker(c));
    const ed = document.createElement('button'); ed.type = 'button'; ed.className = 'cmt-btn'; ed.textContent = 'Edit';
    const del = document.createElement('button'); del.type = 'button'; del.className = 'cmt-btn'; del.textContent = 'Delete';
    ed.addEventListener('click', () => { editId = c.id; draft = null; renderComments(c.page); });
    del.addEventListener('click', () => {
      if (!confirm('Delete this comment?')) return;
      comments = comments.filter(x => x.id !== c.id);
      persist();
      renderComments(c.page);
    });
    el.addEventListener('mouseenter', () => toggleMarker(c, true));
    el.addEventListener('mouseleave', () => toggleMarker(c, false));
    foot.append(when, ed, del);
    el.append(txt, foot);
    return el;
  }

  function markerEl(c, isDraft) {
    const mk = document.createElement('div');
    mk.className = 'cmt-marker' + (isDraft ? ' draft' : '');
    mk.style.top = (c.y * 100) + '%';
    if (!isDraft) {
      mk.dataset.cid = c.id;
      mk.title = c.text;
      mk.addEventListener('click', (e) => {
        e.stopPropagation();
        if (railVisible()) {
          const card = pages[c.page].rail.querySelector('[data-cid="' + c.id + '"]');
          if (card) { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); card.classList.add('flash'); setTimeout(() => card.classList.remove('flash'), 900); }
        } else {
          showCommentPopup(mk, c);
        }
      });
      mk.addEventListener('dblclick', (e) => e.stopPropagation());
    }
    return mk;
  }

  function toggleMarker(c, on) {
    const mk = pages[c.page].container.querySelector('.cmt-marker[data-cid="' + c.id + '"]');
    if (mk) mk.classList.toggle('hot', on);
  }

  function flashMarker(c) {
    const mk = pages[c.page].container.querySelector('.cmt-marker[data-cid="' + c.id + '"]');
    if (mk) {
      mk.scrollIntoView({ behavior: 'smooth', block: 'center' });
      mk.classList.add('hot');
      setTimeout(() => mk.classList.remove('hot'), 1200);
    }
  }

  function renderComments(n) {
    const p = pages[n];
    p.rail.innerHTML = '';
    p.container.querySelectorAll('.cmt-marker').forEach(m => m.remove());

    const entries = [];
    for (const c of comments) {
      if (c.page !== n) continue;
      p.container.appendChild(markerEl(c, false));
      const el = (c.id === editId)
        ? cmtEditor(c.text,
            (t) => { c.text = t; persist(); editId = null; renderComments(n); },
            () => { editId = null; renderComments(n); }, n)
        : cmtDisplay(c);
      el.dataset.cid = c.id;
      entries.push({ y: c.y, el });
    }
    if (draft && draft.page === n) {
      p.container.appendChild(markerEl(draft, true));
      entries.push({
        y: draft.y,
        el: cmtEditor('',
          (t) => { comments.push(newComment(n, draft.y, t)); persist(); draft = null; renderComments(n); },
          () => { draft = null; renderComments(n); }, n),
      });
    }
    entries.sort((a, b) => a.y - b.y);
    for (const en of entries) { en.el._y = en.y; p.rail.appendChild(en.el); }
    layoutComments(n);
    const ta = p.rail.querySelector('textarea');
    if (ta) { ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); }
  }

  function layoutComments(n) {
    const p = pages[n];
    if (!p || !railVisible()) return;
    const H = p.container.offsetHeight;
    let bottom = 0;
    for (const el of p.rail.children) {
      let top = el._y * H;
      if (top < bottom) top = bottom;
      el.style.top = top + 'px';
      bottom = top + el.offsetHeight + 10;
    }
    p.rail.style.minHeight = Math.max(H, bottom) + 'px';
  }

  function showCommentPopup(anchorEl, c) {
    showPopup(anchorEl, {
      comment: c,
    }, true);
  }

  /* ================= on-screen Arabic keyboard =================
     Pops up whenever a comment textarea (.cmt-input) gains focus.
     Keys insert at the caret; "Done" hides it. */

  const arKb = document.getElementById('arKb');
  let kbTarget = null;

  const KB_ROWS = [
    ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د'],
    ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'ذ'],
    ['ئ', 'ء', 'ؤ', 'ر', 'ى', 'ة', 'و', 'ز', 'ظ', 'لا'],
    ['أ', 'إ', 'آ', 'ٱ', 'ـ', '،', '؛', '؟', '!'],
    ['َ', 'ً', 'ُ', 'ٌ', 'ِ', 'ٍ', 'ْ', 'ّ', 'ٰ', 'ٓ'],
  ];
  const HARAKAT = new Set(KB_ROWS[4]);

  function buildArKb() {
    for (const row of KB_ROWS) {
      const r = document.createElement('div');
      r.className = 'kb-row';
      for (const ch of row) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'kb-key' + (HARAKAT.has(ch) ? ' hk' : '');
        b.textContent = HARAKAT.has(ch) ? 'ـ' + ch : ch; // show harakat on a tatweel carrier
        b.addEventListener('mousedown', (e) => e.preventDefault()); // keep textarea focus
        b.addEventListener('click', () => kbInsert(ch));
        r.appendChild(b);
      }
      arKb.appendChild(r);
    }
    const r = document.createElement('div');
    r.className = 'kb-row';
    const bs = kbSpecial('⌫', 'Backspace', kbBackspace);
    const sp = kbSpecial('مسافة', 'Space', () => kbInsert(' '));
    sp.classList.add('wide');
    const done = kbSpecial('Done ✓', 'Hide keyboard', () => { hideKb(); if (kbTarget) kbTarget.focus(); });
    done.classList.add('done');
    r.append(bs, sp, done);
    arKb.appendChild(r);
  }

  function kbSpecial(label, title, fn) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'kb-key sp';
    b.textContent = label;
    b.title = title;
    b.addEventListener('mousedown', (e) => e.preventDefault());
    b.addEventListener('click', fn);
    return b;
  }

  function kbInsert(ch) {
    if (!kbTarget || !document.contains(kbTarget)) return;
    kbTarget.focus();
    const s = kbTarget.selectionStart, e = kbTarget.selectionEnd;
    kbTarget.setRangeText(ch, s, e, 'end');
    kbTarget.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function kbBackspace() {
    if (!kbTarget || !document.contains(kbTarget)) return;
    kbTarget.focus();
    const s = kbTarget.selectionStart, e = kbTarget.selectionEnd;
    if (s !== e) kbTarget.setRangeText('', s, e, 'end');
    else if (s > 0) kbTarget.setRangeText('', s - 1, s, 'end');
    kbTarget.dispatchEvent(new Event('input', { bubbles: true }));
  }

  let kbDismissed = false; // "Done" pressed — stay hidden until the next editor opens
  function showKb() { if (!kbDismissed) arKb.hidden = false; }
  function hideKb() { arKb.hidden = true; kbDismissed = true; }

  document.addEventListener('focusin', (e) => {
    if (e.target.classList && e.target.classList.contains('cmt-input')) {
      if (kbTarget !== e.target) kbDismissed = false; // new editor → keyboard comes back
      kbTarget = e.target;
      showKb();
    }
  });
  document.addEventListener('focusout', () => {
    setTimeout(() => {
      const a = document.activeElement;
      if (!a || !a.classList || !a.classList.contains('cmt-input')) { arKb.hidden = true; }
    }, 150);
  });

  buildArKb();

  /* ================= popup ================= */

  function showPopup(anchorEl, data, pinned) {
    popupPinned = pinned;
    popup.innerHTML = '';
    if (data.comment) {
      const c = data.comment;
      const txt = document.createElement('div');
      txt.className = 'en'; txt.textContent = c.text; txt.dir = 'auto';
      popup.appendChild(txt);
      const acts = document.createElement('div');
      acts.className = 'pp-actions';
      const ed = document.createElement('button');
      ed.textContent = 'Edit';
      ed.style.color = 'var(--gold-hover, #8F6D2C)';
      ed.onclick = (e) => {
        e.stopPropagation();
        const r = anchorEl.getBoundingClientRect();
        hidePopup();
        openFloatingEditor(c.page, c.y, r.left, r.top, c);
      };
      const del = document.createElement('button');
      del.textContent = 'Delete';
      del.onclick = (e) => {
        e.stopPropagation();
        if (!confirm('Delete this comment?')) return;
        comments = comments.filter(x => x.id !== c.id);
        persist();
        renderComments(c.page);
        hidePopup();
      };
      acts.append(ed, del);
      popup.appendChild(acts);
    } else if (data.status) {
      const s = document.createElement('div');
      s.className = 'status' + (data.error ? ' err' : '');
      s.textContent = data.status;
      popup.appendChild(s);
      if (data.error && data.retry) {
        const acts = document.createElement('div');
        acts.className = 'pp-actions';
        const retry = document.createElement('button');
        retry.textContent = 'Retry';
        retry.style.color = 'var(--gold-hover, #8F6D2C)';
        retry.onclick = (e) => { e.stopPropagation(); hidePopup(); data.retry(); };
        const rm = document.createElement('button');
        rm.textContent = 'Remove';
        rm.onclick = (e) => { e.stopPropagation(); data.el.remove(); hidePopup(); };
        acts.append(retry, rm);
        popup.appendChild(acts);
      }
    } else {
      const ar = document.createElement('div');
      ar.className = 'ar'; ar.textContent = data.ar;
      const en = document.createElement('div');
      en.className = 'en'; en.textContent = data.en;
      popup.append(ar, en);
      if (pinned) {
        const acts = document.createElement('div');
        acts.className = 'pp-actions';
        const del = document.createElement('button');
        del.textContent = 'Delete highlight';
        del.onclick = (e) => {
          e.stopPropagation();
          highlights = highlights.filter(x => x.id !== data.id);
          persist();
          renderHighlights(data.page);
          hidePopup();
        };
        acts.appendChild(del);
        popup.appendChild(acts);
      }
    }
    popup.hidden = false;
    const r = anchorEl.getBoundingClientRect();
    const pw = popup.offsetWidth, ph = popup.offsetHeight;
    let left = r.left + r.width / 2 - pw / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
    let top = r.top - ph - 10;
    if (top < 60) top = r.bottom + 10;
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
  }

  function hidePopup() { popup.hidden = true; popupPinned = false; }

  document.addEventListener('click', (e) => {
    if (popupPinned && !popup.contains(e.target) && !e.target.classList.contains('hl') && !e.target.closest('.cmt-marker')) hidePopup();
  });
  window.addEventListener('scroll', () => { if (!popupPinned) hidePopup(); updatePageLabel(); }, { passive: true });

  /* ================= chapter TOC ================= */

  const tocItems = []; // {el, pdfPage}

  function buildToc() {
    tocPanel.innerHTML = '';
    for (const group of CHAPTERS) {
      const g = document.createElement('div');
      g.className = 'toc-group';
      const gAr = document.createElement('div'); gAr.className = 'tg-ar'; gAr.textContent = group.ar;
      const gEn = document.createElement('div'); gEn.className = 'tg-en'; gEn.textContent = group.en;
      g.append(gAr, gEn);
      tocPanel.appendChild(g);
      for (const it of group.items) {
        const pdfPage = it.page + PAGE_OFFSET;
        const a = document.createElement('button');
        a.type = 'button';
        a.className = 'toc-item';
        a.innerHTML = '<span class="ti-ar">' + it.ar + '</span><span class="ti-en">' + it.en + '</span><span class="ti-pg">p.' + it.page + '</span>';
        a.addEventListener('click', () => scrollToPage(pdfPage));
        tocPanel.appendChild(a);
        tocItems.push({ el: a, pdfPage });
      }
    }
  }

  function scrollToPage(n) {
    const p = pages[Math.max(1, Math.min(n, pdfDoc.numPages))];
    if (p) p.container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.innerWidth < 900) setToc(false);
  }

  function updateActiveChapter(current) {
    let active = null;
    for (const t of tocItems) {
      if (t.pdfPage <= current) active = t;
      t.el.classList.remove('active');
    }
    if (active) active.el.classList.add('active');
  }

  function setToc(open) {
    document.body.classList.toggle('toc-open', open);
    document.getElementById('btnToc').classList.toggle('on', open);
    rerenderAll();
  }
  document.getElementById('btnToc').onclick = () =>
    setToc(!document.body.classList.contains('toc-open'));

  /* ================= toolbar ================= */

  document.getElementById('btnZoomIn').onclick = () => setZoom(scaleMult + 0.15);
  document.getElementById('btnZoomOut').onclick = () => setZoom(scaleMult - 0.15);
  function setZoom(z) {
    scaleMult = Math.max(0.5, Math.min(2.5, Math.round(z * 100) / 100));
    zoomLabel.textContent = Math.round(scaleMult * 100) + '%';
    rerenderAll();
  }

  btnHlMode.onclick = () => {
    hlMode = !hlMode;
    btnHlMode.classList.toggle('on', hlMode);
    document.querySelectorAll('.hl-layer').forEach(l => l.classList.toggle('active', hlMode));
  };

  const keyPanel = document.getElementById('keyPanel');
  const keyInput = document.getElementById('keyInput');
  function openKeyPanel() {
    keyInput.value = localStorage.getItem(API_LS_KEY) || '';
    keyPanel.hidden = false;
    keyInput.focus();
  }
  document.getElementById('btnKey').onclick = openKeyPanel;
  document.getElementById('btnKeyClose').onclick = () => { keyPanel.hidden = true; };
  document.getElementById('btnKeySave').onclick = () => {
    const v = keyInput.value.trim();
    if (v) localStorage.setItem(API_LS_KEY, v);
    else localStorage.removeItem(API_LS_KEY);
    keyPanel.hidden = true;
  };

  function updatePageLabel() {
    if (!pdfDoc) return;
    const mid = window.innerHeight / 2;
    let current = 1;
    for (let n = 1; n <= pdfDoc.numPages; n++) {
      const r = pages[n].container.getBoundingClientRect();
      if (r.top <= mid) current = n; else break;
    }
    pageLabel.textContent = current + ' / ' + pdfDoc.numPages;
    updateActiveChapter(current);
  }

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.toggle('cmt-side', railVisible());
      rerenderAll();
    }, 300);
  });

  /* ================= init ================= */

  (async function init() {
    document.body.classList.toggle('cmt-side', railVisible());
    if (window.innerWidth >= 1200) document.body.classList.add('toc-open'), document.getElementById('btnToc').classList.add('on');
    await loadStore();
    try {
      pdfDoc = await pdfjsLib.getDocument(PDF_URL).promise;
    } catch (err) {
      document.getElementById('loading').textContent =
        'Could not load PDF. Serve the site over HTTP (node pdf-reader/server.js) — file:// will not work. (' + err.message + ')';
      return;
    }
    const page1 = await pdfDoc.getPage(1);
    const vp1 = page1.getViewport({ scale: 1 });
    baseAspect = vp1.height / vp1.width;
    document.getElementById('loading').remove();
    buildToc();
    buildPages();
    setupObserver();
    updatePageLabel();
  })();
})();
