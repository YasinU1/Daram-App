/* Daram PDF Reader — highlight a word, AI reads + translates it, saved to highlights.json.
   Anchored comment tooltips (double-click a spot) + chapter TOC mapped to PDF pages. */
(function () {
  'use strict';

  const PDF_URL = '../books/kubra-nahw/notes/an-Nahw al-Kubra (Website).pdf';
  const PDF_ID = 'kubra-nahw-2026';
  const GEMINI_LS_KEY = 'daram-gemini-key';
  const ANTHROPIC_LS_KEY = 'daram-anthropic-key';
  const GEMINI_MODEL = 'gemini-flash-lite-latest'; // floating alias — cheaper/higher-quota tier than flash, survives model retirements
  const ANTHROPIC_MODEL = 'claude-haiku-4-5-20251001'; // cheapest model — this is just a Gemini-failure fallback
  const MAX_CSS_WIDTH = 860;
  const TOC_W = 252;
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
  const btnLearn = document.getElementById('btnLearn');
  const tocPanel = document.getElementById('tocPanel');

  let pdfDoc = null;
  let scaleMult = 1;
  let hlMode = true;
  let learnMode = false;
  let baseAspect = 1.414;
  let pages = []; // 1-indexed: {container, layer, canvas, rendered, rendering}
  let highlights = []; // {id, pdf, page, x, y, w, h, ar, en}
  let comments = [];   // {id, pdf, page, x, y, text, ts}
  let serverOk = false;
  let observer = null;
  let popupPinned = false;
  let draft = null;      // {page, x, y} while composing a new comment (never persisted)
  let openTipEl = null;  // the one expanded tooltip, if any — session-only UI state
  let openCid = null;    // its comment id (or DRAFT_ID)
  let openAnchor = null; // {page, x, y} the open tooltip is pinned to
  let tipSticky = false; // opened by click / editing / draft — hovering away must not close it

  /* ================= storage (JSON via server, localStorage fallback) ================= */

  async function loadStore() {
    try {
      const res = await fetch('/api/highlights');
      if (res.ok) {
        serverOk = true;
        const data = await res.json();
        highlights = (data.highlights || []).filter(h => h.pdf === PDF_ID);
        comments = (data.comments || []).filter(c => c.pdf === PDF_ID);
        normalizeComments();
        return;
      }
    } catch (_) { /* no server — fall back */ }
    serverOk = false;
    try { highlights = JSON.parse(localStorage.getItem('daram-pdf-hl::' + PDF_ID)) || []; } catch (_) { highlights = []; }
    try { comments = JSON.parse(localStorage.getItem('daram-pdf-cmt::' + PDF_ID)) || []; } catch (_) { comments = []; }
    normalizeComments();
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

  /* ================= translation (Gemini primary, Anthropic fallback) =================
     Both are called straight from the browser with a key held in this browser's
     localStorage. Gemini is tried first; if it throws for any reason (no key, HTTP
     error, blocked image, unparseable reply) Anthropic is tried next. If neither
     provider has a key the key panel opens.                                          */

  const BLOCKED_REASONS = ['SAFETY', 'RECITATION', 'PROHIBITED_CONTENT', 'BLOCKLIST', 'SPII', 'IMAGE_SAFETY'];

  /* Shared prompt + field spec, so both providers are asked for exactly the same thing. */
  function buildSpec(learn) {
    const props = {
      arabic: { type: 'string', description: 'The Arabic text exactly as written in the image' },
      translation: { type: 'string', description: 'Concise English translation' },
    };
    const order = ['arabic', 'translation'];
    let prompt =
      'This image is a small crop from a classical Arabic grammar (nahw) textbook, an-Nahw al-Kubra. ' +
      'Read the Arabic word or short phrase exactly as written, including harakat if visible, ' +
      'and give one concise English translation suited to the grammar context. ' +
      'If several words are shown, translate them as one phrase.';
    if (learn) {
      props.explanation = {
        type: 'string',
        description: 'A short, self-contained teaching explanation of the nahw/sarf concept this word or phrase ' +
                     'relates to, for a student learning classical Arabic grammar. Exactly 2–3 complete sentences, ' +
                     'no more than ~60 words total. Plain English; transliterated technical terms (e.g. mubtada, ' +
                     'iʿrab, marfuʿ) are fine with a brief gloss. Must end with a complete sentence — never trail off.',
      };
      order.push('explanation');
      prompt += ' Then, since the reader is studying this, add a short explanation of the underlying grammar ' +
                'concept: what kind of word/construction this is, the rule that governs it, and why it matters. ' +
                'Keep it to 2–3 complete sentences (~60 words max) and pitched at a student. Do not trail off mid-sentence.';
    }
    return { props, order, required: order.slice(), prompt };
  }

  /* Coerce — a missing field must not persist the string "undefined" into highlights.json. */
  function toResult(parsed) {
    const out = {
      ar: String(parsed.arabic || ''),
      en: String(parsed.translation || ''),
      ex: String(parsed.explanation || ''),
    };
    if (!out.ar && !out.en) throw new Error('The model’s reply was missing the text and translation.');
    return out;
  }

  async function callGemini(b64png, learn, key) {
    const spec = buildSpec(learn);
    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + GEMINI_MODEL + ':generateContent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-goog-api-key': key, // header, not ?key= — query strings leak into logs/referrers
      },
      body: JSON.stringify({
        contents: [{
          role: 'user',
          parts: [
            { inline_data: { mime_type: 'image/png', data: b64png } },
            { text: spec.prompt },
          ],
        }],
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: 'object',
            properties: spec.props,
            required: spec.required,
            propertyOrdering: spec.order,
          },
          // Budget covers thinking tokens too — thinking-capable models spend from this.
          maxOutputTokens: learn ? 4096 : 2048,
          temperature: 0,
        },
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error((err && err.error && err.error.message) || 'HTTP ' + res.status);
    }
    const data = await res.json();
    const cand = (data.candidates || [])[0];
    if (!cand || BLOCKED_REASONS.indexOf(cand.finishReason) !== -1) throw new Error('Model declined this image.');
    // Skip thought parts; the answer itself may span several text parts.
    const text = ((cand.content && cand.content.parts) || [])
      .filter(p => !p.thought)
      .map(p => p.text || '')
      .join('');
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (_) {
      if (cand.finishReason === 'MAX_TOKENS') throw new Error('Response was cut off — try again.');
      throw new Error('Could not read the model’s reply.');
    }
    return toResult(parsed);
  }

  async function callAnthropic(b64png, learn, key) {
    const spec = buildSpec(learn);
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        // Required for calls made straight from a browser; without it the API
        // rejects the request rather than sending CORS headers.
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        // Thinking is on by default on this model and shares the max_tokens budget,
        // so leave headroom above what the JSON answer alone needs.
        max_tokens: learn ? 8192 : 4096,
        output_config: {
          effort: 'low', // short OCR + gloss; low effort keeps latency and cost down
          format: {
            type: 'json_schema',
            schema: {
              type: 'object',
              properties: spec.props,
              required: spec.required,
              additionalProperties: false,
            },
          },
        },
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: 'image/png', data: b64png } },
            { type: 'text', text: spec.prompt },
          ],
        }],
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error((err && err.error && err.error.message) || 'HTTP ' + res.status);
    }
    const data = await res.json();
    if (data.stop_reason === 'refusal') throw new Error('Model declined this image.');
    const text = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text || '')
      .join('');
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (_) {
      if (data.stop_reason === 'max_tokens') throw new Error('Response was cut off — try again.');
      throw new Error('Could not read the model’s reply.');
    }
    return toResult(parsed);
  }

  const PROVIDERS = [
    { name: 'Gemini',    lsKey: GEMINI_LS_KEY,    call: callGemini },
    { name: 'Anthropic', lsKey: ANTHROPIC_LS_KEY, call: callAnthropic },
  ];

  async function translateImage(b64png, learn) {
    const configured = PROVIDERS
      .map(p => ({ p, key: localStorage.getItem(p.lsKey) }))
      .filter(x => x.key);

    if (!configured.length) {
      openKeyPanel();
      throw new Error('Set a Gemini or Anthropic API key first (⚙︎ Key).');
    }

    const PROVIDER_TIMEOUT_MS = 30000;

    function withTimeout(promise, ms) {
      return new Promise((resolve, reject) => {
        const t = setTimeout(() => reject(new Error('timed out after ' + Math.round(ms / 1000) + 's')), ms);
        promise.then(v => { clearTimeout(t); resolve(v); }, e => { clearTimeout(t); reject(e); });
      });
    }

    const failures = [];
    for (const { p, key } of configured) {
      try {
        return await withTimeout(p.call(b64png, learn, key), PROVIDER_TIMEOUT_MS);
      } catch (err) {
        failures.push(p.name + ': ' + err.message);
      }
    }
    throw new Error(failures.join(' · '));
  }

  /* ================= page rendering ================= */

  function cssPageWidth() {
    const tocW = document.body.classList.contains('toc-open') ? TOC_W : 0;
    const avail = Math.min(window.innerWidth - tocW - 48, MAX_CSS_WIDTH);
    return Math.max(280, Math.round(avail * scaleMult));
  }

  function buildPages() {
    const w = cssPageWidth();
    for (let n = 1; n <= pdfDoc.numPages; n++) {
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

      wireSelection(layer, n);
      container.addEventListener('dblclick', (e) => onPageDblClick(e, n));

      viewer.appendChild(container);
      pages[n] = { container, layer, canvas: null, rendered: false, rendering: false };
      renderHighlights(n);
      renderPins(n);
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
      schedulePlace();
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
    }
    setupObserver();
    schedulePlace();
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
    el.className = 'hl' + (h.ex ? ' learned' : '');
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
      ar: '', en: '', ex: '',
    };
    const learn = learnMode;

    const el = makeHlEl(h);
    el.classList.add('pending');
    p.layer.appendChild(el);
    showPopup(el, { status: learn ? 'Reading & explaining…' : 'Translating…' }, false);

    const run = async () => {
      try {
        const b64 = cropToBase64(p.canvas, rect);
        const t = await translateImage(b64, learn);
        h.ar = t.ar; h.en = t.en; h.ex = t.ex;
        highlights.push(h);
        persist();
        el.classList.remove('pending', 'err');
        el.classList.toggle('learned', !!h.ex);
        showPopup(el, h, false);
        setTimeout(() => { if (!popupPinned) hidePopup(); }, h.ex ? 4200 : 2600);
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

  /* ================= anchored comment tooltips =================
     Double-click anywhere on a page → a small gold pin at that exact spot.
     Clicking the pin expands it in place into a bubble (one open at a time).
     Pins and bubbles are children of .pdf-page positioned in page-relative %,
     so scrolling, zooming and re-rendering keep them glued to their anchor.
     Expanded/collapsed is session-only UI state — never persisted. */

  const DRAFT_ID = '__draft__';
  const DEFAULT_CMT_X = 0.97; // comments saved before x existed hugged the right edge
  const DEFAULT_CMT_Y = 0.5;  // a comment with no usable y at all sits mid-page, not nowhere
  const TIP_GAP = 18;         // px between the anchor and the bubble
  const HOVER_IN = 120;       // ms on the pin before the bubble opens by itself
  const HOVER_OUT = 250;      // ms of grace to cross the gap from pin into bubble

  const clamp01 = (v) => Math.max(0, Math.min(v, 1));
  // Number.isFinite, not typeof — a stored NaN is still a "number" and would poison every
  // percentage and every --tip-* offset we print from it
  const cmtX = (c) => (Number.isFinite(c.x) ? clamp01(c.x) : DEFAULT_CMT_X);
  const cmtY = (c) => (Number.isFinite(c.y) ? clamp01(c.y) : DEFAULT_CMT_Y);
  const cmtById = (id) => comments.find(z => z.id === id) || null;

  function normalizeComments() {
    for (const c of comments) {
      if (!Number.isFinite(c.x)) c.x = DEFAULT_CMT_X;
      if (!Number.isFinite(c.y)) c.y = DEFAULT_CMT_Y;
    }
  }

  function newComment(n, x, y, text) {
    return {
      id: 'c_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      pdf: PDF_ID, page: n, x, y, text, ts: Date.now(),
    };
  }

  function fmtWhen(ts) {
    return new Date(ts).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function onPageDblClick(e, n) {
    if (e.target.closest('.cmt-pin') || e.target.closest('.cmt-tip')) return;
    const p = pages[n];
    if (!p) return;
    const r = p.container.getBoundingClientRect();
    closeTip();
    discardDraft(); // a new draft replaces any earlier unsaved one, parked or open
    draft = {
      page: n,
      x: clamp01((e.clientX - r.left) / r.width),
      y: clamp01((e.clientY - r.top) / r.height),
      text: '',
    };
    p.container.appendChild(pinEl(draft, true));
    openTip(draft, true, true);
  }

  /* ---- pins (collapsed state) ---- */

  function pinPreview(text) {
    const t = (text || '').trim();
    return t.length > 90 ? t.slice(0, 90) + '…' : t;
  }

  function pinEl(c, isDraft) {
    const pin = document.createElement('button');
    pin.type = 'button';
    pin.className = 'cmt-pin' + (isDraft ? ' draft' : '');
    pin.dataset.cid = isDraft ? DRAFT_ID : c.id;
    pin.style.left = (cmtX(c) * 100) + '%';
    pin.style.top = (cmtY(c) * 100) + '%';
    if (isDraft) {
      pin.setAttribute('aria-label', 'New comment');
      // a parked draft (typing interrupted by another comment) reopens from its own pin
      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        cancelHover();
        if (!draft) return;
        // toggles like a comment pin — parkDraft() first so the typing survives the close
        if (openCid === DRAFT_ID) { parkDraft(); dismissTip(); return; }
        if (editorHolds()) return; // some other note is mid-edit and unsaved
        openTip(draft, true, true, true);
      });
    } else {
      // no `title` — the browser's own tooltip would duplicate the bubble we open on hover
      pin.setAttribute('aria-label', 'Comment: ' + pinPreview(c.text));
      pin.addEventListener('mouseenter', () => {
        cancelClose();
        if (openCid === c.id) return;          // already showing — nothing to do
        // only an editor or the draft owns the screen; a merely click-pinned bubble
        // steps aside so hovering another pin still previews it
        if (openTipEl && (openCid === DRAFT_ID || openTipEl.classList.contains('editing'))) return;
        hoverTimer = setTimeout(() => openTip(c, false, false, false), HOVER_IN);
      });
      pin.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer); hoverTimer = 0;
        // re-arm for whatever is open, not just this pin — brushing past a second pin
        // cancelled the first bubble's close and nothing else would ever re-arm it
        scheduleClose();
      });
      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        cancelHover();
        // hover already opened it → this click pins it; a second click closes (touch: open, close)
        if (openCid === c.id) {
          if (!tipSticky) tipSticky = true;
          else if (!editorHolds()) closeTip();
        } else if (!editorHolds()) openTip(c, false, false, true);
      });
    }
    pin.addEventListener('dblclick', (e) => e.stopPropagation());
    return pin;
  }

  /* ---- hover timers: pin → gap → bubble has to read as one hover ---- */

  let hoverTimer = 0, closeTimer = 0;

  function cancelHover() { clearTimeout(hoverTimer); hoverTimer = 0; cancelClose(); }
  function cancelClose() { clearTimeout(closeTimer); closeTimer = 0; }
  function scheduleClose() {
    if (!openTipEl) return; // nothing on screen to close
    if (tipSticky) return; // clicked open, editing, or the draft — only an explicit close ends it
    cancelClose();
    closeTimer = setTimeout(() => { if (!tipSticky) closeTip(); }, HOVER_OUT);
  }

  function pinFor(cid, n) {
    const p = pages[n];
    // ids come out of highlights.json — a stray " or \ in one would throw SyntaxError here
    // and leave the bubble open with no pin state to close it by
    return p ? p.container.querySelector('.cmt-pin[data-cid="' + CSS.escape(String(cid)) + '"]') : null;
  }

  function renderPins(n) {
    const p = pages[n];
    if (!p) return;
    p.container.querySelectorAll('.cmt-pin').forEach(el => el.remove());
    for (const c of comments) if (c.page === n) p.container.appendChild(pinEl(c, false));
    if (draft && draft.page === n) p.container.appendChild(pinEl(draft, true));
    if (openCid) {
      const pin = pinFor(openCid, n);
      if (pin) pin.classList.add('open');
    }
  }

  /* ---- the bubble (expanded state) ---- */

  let tipInRaf = 0; // pending fade-in — dismissTip() cancels it so it can't land on a closing tip

  function openTip(c, editing, isDraft, sticky) {
    const p = pages[c.page];
    if (!p) return;
    if (!isDraft) parkDraft(); // before dismissTip() — it reads the editor that is about to go
    dismissTip();
    hidePopup(); // the translate popup and a comment bubble never share the screen

    const tip = document.createElement('div');
    tip.className = 'cmt-tip';
    tip.dataset.cid = isDraft ? DRAFT_ID : c.id;
    // an editor or a draft is never dismissed by the pointer wandering off — that would lose
    // typing. Nor by a pin click: the draft parks its text, and editorHolds() refuses to let
    // any other pin tear down an editor whose text has changed.
    tipSticky = !!sticky || !!editing || !!isDraft;
    tip.addEventListener('mouseenter', cancelClose);
    tip.addEventListener('mouseleave', scheduleClose);
    const body = document.createElement('div');
    body.className = 'cmt-tip-body';
    tip.appendChild(body);
    fillTip(tip, c, editing, isDraft);
    p.container.appendChild(tip);

    openTipEl = tip;
    openCid = isDraft ? DRAFT_ID : c.id;
    openAnchor = { page: c.page, x: cmtX(c), y: cmtY(c) };
    const pin = pinFor(openCid, c.page);
    if (pin) pin.classList.add('open');

    growTip(tip); // before placing — an un-grown editor would be measured at its 46px minimum
    placeTip();
    tipInRaf = requestAnimationFrame(() => {
      tipInRaf = 0;
      if (!tip.classList.contains('closing')) tip.classList.add('in');
    });
    if (editing) focusTip(tip);
  }

  function fillTip(tip, c, editing, isDraft) {
    const body = tip.querySelector('.cmt-tip-body');
    body.innerHTML = '';
    tip.classList.toggle('editing', !!editing);
    if (editing) tipSticky = true; // covers the Edit button on an only-hovered bubble

    const x = document.createElement('button');
    x.type = 'button'; x.className = 'cmt-tip-x'; x.textContent = '×';
    x.title = 'Close'; x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', (e) => { e.stopPropagation(); closeTip(); });
    body.appendChild(x);

    if (editing) {
      // what the note said when the editor opened — editorHolds() compares against it to tell
      // "nothing typed yet" (safe to collapse) from "unsaved changes" (never thrown away)
      tip.dataset.baseText = c.text || '';
      const ta = document.createElement('textarea');
      ta.className = 'cmt-input'; ta.rows = 3; ta.placeholder = 'Write a note…';
      ta.value = c.text || ''; ta.dir = 'auto';
      ta.setAttribute('inputmode', 'none'); // suppress the browser's own virtual keyboard — we show ours
      ta.addEventListener('input', () => { autoGrow(ta); placeTip(); });
      const foot = document.createElement('div'); foot.className = 'cmt-foot';
      const ok = document.createElement('button'); ok.type = 'button'; ok.className = 'cmt-btn primary'; ok.textContent = 'Save';
      const no = document.createElement('button'); no.type = 'button'; no.className = 'cmt-btn'; no.textContent = 'Cancel';
      ok.addEventListener('click', (e) => { e.stopPropagation(); saveTip(tip, c, ta.value.trim(), isDraft); });
      no.addEventListener('click', (e) => { e.stopPropagation(); cancelTip(tip, c, isDraft); });
      ta.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); ok.click(); }
        if (e.key === 'Escape') { e.stopPropagation(); cancelTip(tip, c, isDraft); }
      });
      foot.append(ok, no);
      body.append(ta, foot);
    } else {
      delete tip.dataset.baseText;
      const txt = document.createElement('div');
      txt.className = 'cmt-text'; txt.textContent = c.text; txt.dir = 'auto';
      const foot = document.createElement('div'); foot.className = 'cmt-foot';
      const when = document.createElement('span'); when.className = 'cmt-when'; when.textContent = fmtWhen(c.ts);
      const ed = document.createElement('button'); ed.type = 'button'; ed.className = 'cmt-btn'; ed.textContent = 'Edit';
      const del = document.createElement('button'); del.type = 'button'; del.className = 'cmt-btn'; del.textContent = 'Delete';
      ed.addEventListener('click', (e) => {
        e.stopPropagation();
        // editing forces sticky; remember whether the bubble was deliberately pinned before
        tip.dataset.wasSticky = tipSticky ? '1' : '';
        fillTip(tip, c, true, false);
        growTip(tip);
        placeTip();
        focusTip(tip);
      });
      del.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!confirm('Delete this comment?')) return;
        const n = c.page;
        comments = comments.filter(z => z.id !== c.id);
        persist();
        closeTip();
        renderPins(n);
      });
      foot.append(when, ed, del);
      body.append(txt, foot);
    }
  }

  function saveTip(tip, c, text, isDraft) {
    if (!text) return; // an empty note is never worth saving
    // the textarea is about to be removed from under the focus; removing a focused node does
    // not reliably fire focusout, so hide the keyboard here rather than trust that it will
    setKbHidden(true);
    if (isDraft) {
      const n = c.page;
      const fresh = newComment(n, c.x, c.y, text);
      discardDraft();
      comments.push(fresh);
      persist();
      renderPins(n);
      openTip(fresh, false, false, true); // stay open, now in display mode
      return;
    }
    c.text = text;
    persist();
    const pin = pinFor(c.id, c.page);
    // still no `title` here — see pinEl(); the aria-label is the only thing that needs refreshing
    if (pin) pin.setAttribute('aria-label', 'Comment: ' + pinPreview(c.text));
    fillTip(tip, c, false, false);
    restoreSticky(tip);
    placeTip();
  }

  function cancelTip(tip, c, isDraft) {
    setKbHidden(true); // same as saveTip() — the focused textarea is going away
    if (isDraft) { closeTip(); return; } // nothing was ever saved — discard the draft
    fillTip(tip, c, false, false);
    restoreSticky(tip);
    placeTip();
  }

  // Leaving the editor must not leave a merely-hovered bubble pinned open for good: fillTip()
  // forces sticky while editing, so Save/Cancel put back whatever it was before.
  function restoreSticky(tip) {
    tipSticky = tip.dataset.wasSticky === '1';
    delete tip.dataset.wasSticky;
  }

  function focusTip(tip) {
    const ta = tip.querySelector('textarea');
    if (!ta) return;
    autoGrow(ta);
    ta.focus();
    ta.setSelectionRange(ta.value.length, ta.value.length);
  }

  function autoGrow(ta) {
    ta.style.height = 'auto';
    // box-sizing is border-box everywhere here, but scrollHeight measures the padding box —
    // add the border back or the textarea is 2px short and scrolls its own last line
    ta.style.height = (ta.scrollHeight + (ta.offsetHeight - ta.clientHeight)) + 'px';
  }

  // placeTip() measures the bubble, so any editor inside it has to be at its real height first
  function growTip(tip) {
    const ta = tip.querySelector('.cmt-input');
    if (ta) autoGrow(ta);
  }

  function dismissTip() {
    cancelHover();
    setKbHidden(true); // whatever the editor was, it is going with the bubble
    cancelAnimationFrame(tipInRaf); tipInRaf = 0;
    if (openTipEl) {
      const old = openTipEl;
      old.classList.remove('in');
      old.classList.add('closing');
      setTimeout(() => old.remove(), 180); // let it fade before it leaves the DOM
    }
    openTipEl = null; openCid = null; openAnchor = null; tipSticky = false;
    document.querySelectorAll('.cmt-pin.open').forEach(el => el.classList.remove('open'));
  }

  function discardDraft() {
    if (!draft) return;
    const p = pages[draft.page];
    draft = null;
    if (p) p.container.querySelectorAll('.cmt-pin.draft').forEach(el => el.remove());
  }

  // Opening some other comment must not silently bin a half-typed note: keep the text on the
  // draft and leave its pin behind so a click resumes it. An untouched draft is just dropped.
  function parkDraft() {
    if (!draft) return;
    if (openCid === DRAFT_ID && openTipEl) {
      const ta = openTipEl.querySelector('.cmt-input');
      if (ta) draft.text = ta.value;
    }
    if (!(draft.text || '').trim()) discardDraft();
  }

  // Closing the draft's own bubble throws the draft away; closing anything else must leave a
  // parked draft alone — its pin is the only way back to text that was never saved.
  function closeTip() {
    const wasDraft = openCid === DRAFT_ID;
    dismissTip();
    if (wasDraft) discardDraft();
  }

  // The one invariant the editor has: typing is never binned by anything other than Save,
  // Cancel or Escape. So a pin click asking to collapse or replace an editor whose text has
  // changed is refused outright — and nudged, or the click looks like it did nothing.
  function editorHolds() {
    // the draft is exempt: parkDraft() keeps its text and leaves its pin behind, so opening
    // something else over it loses nothing
    if (!openTipEl || openCid === DRAFT_ID || !openTipEl.classList.contains('editing')) return false;
    const ta = openTipEl.querySelector('.cmt-input');
    if (!ta || ta.value === (openTipEl.dataset.baseText || '')) return false; // nothing typed yet
    const tip = openTipEl;
    ta.focus();
    tip.classList.remove('nudge');
    void tip.offsetWidth; // reflow, so a second refused click replays the animation
    tip.classList.add('nudge');
    return true;
  }

  // Escape closes a pinned bubble. The editor's own handler only sees it while the caret is in
  // the textarea — focus may be on Save/Cancel, or on nothing — so route it to cancel here too.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !openTipEl) return;
    if (openTipEl.classList.contains('editing')) {
      const isDraft = openCid === DRAFT_ID;
      const c = isDraft ? draft : cmtById(openCid);
      if (c) { cancelTip(openTipEl, c, isDraft); return; }
    }
    closeTip();
  });

  /* ---- placement: next to the anchor, flipped/clamped to stay on screen ---- */

  function viewTop() {
    const tb = document.querySelector('.pdf-toolbar');
    return (tb ? tb.getBoundingClientRect().bottom : 60) + 10;
  }

  function viewBottom() {
    // the on-screen Arabic keyboard is fixed to the bottom — never sit under it
    if (arKb && !arKb.hidden) return arKb.getBoundingClientRect().top - 10;
    return window.innerHeight - 12;
  }

  function placeTip() {
    if (!openTipEl || !openAnchor) return;
    const p = pages[openAnchor.page];
    if (!p) return;
    const tip = openTipEl;
    tip.style.left = (openAnchor.x * 100) + '%';
    tip.style.top = (openAnchor.y * 100) + '%';

    const cr = p.container.getBoundingClientRect();
    const ax = cr.left + openAnchor.x * cr.width; // anchor, in viewport coords
    const ay = cr.top + openAnchor.y * cr.height;
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    const left = 10, right = window.innerWidth - 10;

    // prefer the right of the anchor; flip left if it would overflow; clamp if neither fits
    let dx = TIP_GAP;
    let flip = false;
    if (ax + dx + tw > right && ax - TIP_GAP - tw >= left) { dx = -TIP_GAP - tw; flip = true; }
    if (ax + dx + tw > right) dx = right - tw - ax;
    if (ax + dx < left) dx = left - ax;
    tip.classList.toggle('flip', flip);

    const top = viewTop(), bot = viewBottom();
    let dy = -th / 2;                                  // centred on the anchor by default
    if (ay + dy + th > bot) dy = bot - th - ay;
    if (ay + dy < top) dy = top - ay;

    tip.style.setProperty('--tip-dx', Math.round(dx) + 'px');
    tip.style.setProperty('--tip-dy', Math.round(dy) + 'px');
    // keep the little arrow level with the anchor even once the bubble is clamped vertically
    const gapY = -dy; // the anchor, as an offset down from the bubble's top edge
    const arrow = Math.max(12, Math.min(gapY, th - 12));
    tip.style.setProperty('--tip-ay', Math.round(arrow) + 'px');
    // an arrow can only tell the truth while the anchor is beside the bubble. Clamped against
    // the toolbar or the keyboard the anchor leaves that span, and horizontally the arrow is
    // fixed to the near edge, so once clamping slides that edge over the anchor it points at
    // empty page. Either way there is nowhere honest to put it — drop it.
    const gapX = flip ? -(dx + tw) : dx; // px from the anchor to the bubble's near edge
    tip.classList.toggle('no-arrow', gapX < 6 || gapY < 0 || gapY > th);
  }

  let placeRaf = 0;
  function schedulePlace() {
    if (placeRaf || !openTipEl) return;
    placeRaf = requestAnimationFrame(() => { placeRaf = 0; placeTip(); });
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
  // The keyboard eats the bottom of the screen, so every show/hide has to re-place an
  // open bubble — the editor is opened before focus lands, i.e. before the keyboard exists.
  function setKbHidden(hidden) {
    if (arKb.hidden === hidden) return;
    arKb.hidden = hidden;
    schedulePlace();
  }
  function showKb() { if (!kbDismissed) setKbHidden(false); }
  function hideKb() { setKbHidden(true); kbDismissed = true; }

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
      if (!a || !a.classList || !a.classList.contains('cmt-input')) { setKbHidden(true); }
    }, 150);
  });

  buildArKb();

  /* ================= popup ================= */

  function showPopup(anchorEl, data, pinned) {
    // one at a time, both ways: openTip() hides this popup, and this closes an open bubble.
    // A highlight click stops propagation, so the outside-click handler never sees it.
    if (openTipEl) {
      if (openTipEl.classList.contains('editing')) return; // never over an editor — it would cover it
      closeTip();
    }
    popupPinned = pinned;
    popup.innerHTML = '';
    popup.classList.remove('has-explain');
    if (data.status) {
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
      if (data.ex) {
        popup.classList.add('has-explain');
        const ex = document.createElement('div');
        ex.className = 'explain'; ex.textContent = data.ex;
        popup.appendChild(ex);
      }
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
    if (popupPinned && !popup.contains(e.target) && !e.target.classList.contains('hl')) hidePopup();
    // a click off the bubble un-pins it — otherwise it hangs around off-screen after a scroll.
    // Pin and in-bubble buttons stop propagation, so this only sees genuine clicks elsewhere.
    // An editor (which includes the draft) is never closed this way: that would lose typing.
    // The keyboard is part of the editor even though it lives outside the bubble.
    // The toolbar is exempt too: zoom keeps the bubble glued, so it must not dismiss it.
    if (openTipEl && !openTipEl.classList.contains('editing') && openCid !== DRAFT_ID &&
        !e.target.closest('.cmt-tip') && !e.target.closest('.cmt-pin') &&
        !e.target.closest('.ar-kb') && !e.target.closest('.pdf-toolbar')) closeTip();
  });
  window.addEventListener('scroll', () => {
    if (!popupPinned) hidePopup();
    updatePageLabel();
    schedulePlace(); // the anchor moved: the viewport clamp and the arrow both go stale
  }, { passive: true });

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

  const pageInput = document.getElementById('pageInput');
  function jumpToInput() {
    const n = parseInt(pageInput.value, 10);
    if (!pdfDoc || isNaN(n)) return;
    scrollToPage(Math.max(1, Math.min(n, pdfDoc.numPages)));
    pageInput.blur();
  }
  pageInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') jumpToInput(); });
  pageInput.addEventListener('change', jumpToInput);

  btnHlMode.onclick = () => {
    hlMode = !hlMode;
    btnHlMode.classList.toggle('on', hlMode);
    document.querySelectorAll('.hl-layer').forEach(l => l.classList.toggle('active', hlMode));
  };

  btnLearn.onclick = () => {
    learnMode = !learnMode;
    btnLearn.classList.toggle('on', learnMode);
    // Learn needs highlight mode to actually capture a word.
    if (learnMode && !hlMode) btnHlMode.onclick();
  };

  const keyPanel = document.getElementById('keyPanel');
  const keyInput = document.getElementById('keyInput');
  const keyInputAnthropic = document.getElementById('keyInputAnthropic');
  function openKeyPanel() {
    keyInput.value = localStorage.getItem(GEMINI_LS_KEY) || '';
    keyInputAnthropic.value = localStorage.getItem(ANTHROPIC_LS_KEY) || '';
    keyPanel.hidden = false;
    keyInput.focus();
  }
  document.getElementById('btnKey').onclick = openKeyPanel;
  document.getElementById('btnKeyClose').onclick = () => { keyPanel.hidden = true; };
  document.getElementById('btnKeySave').onclick = () => {
    const save = (lsKey, input) => {
      const v = input.value.trim();
      if (v) localStorage.setItem(lsKey, v);
      else localStorage.removeItem(lsKey);
    };
    save(GEMINI_LS_KEY, keyInput);
    save(ANTHROPIC_LS_KEY, keyInputAnthropic);
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
    if (document.activeElement !== pageInput) pageInput.placeholder = current;
    updateActiveChapter(current);
  }

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(rerenderAll, 300);
  });

  /* ================= init ================= */

  (async function init() {
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
    pageInput.max = pdfDoc.numPages;
    buildToc();
    buildPages();
    setupObserver();
    updatePageLabel();
  })();
})();
