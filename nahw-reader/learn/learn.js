/* ═══════════════════════════════════════════════════════════════
   Daram Learn — adaptive lesson engine, "Grammar & Grace" layout
   (copied from the Stitch project «Nahw al-Kubra Adaptive Learning»).

   Shell: fixed sidebar course navigation + content canvas.
   Each section is ONE path: learning phase (all teach cards) first,
   then quiz phase (all questions), Stitch select-then-check MCQs.

   Step types (lessons/*.js):
     { t:'teach',  kicker?, title?, page?, ar?, arEn?, body?, points?[], examples?[{ar,en,note?}] }
     { t:'mcq',    q, ar?, arEn?, choices[], correct:<idx>, why }
     { t:'written', prompt, ar?, model, marks? }
     { t:'bank',   id }        → resolved from QUESTION_BANK (self-graded flashcard)

   Adaptivity: wrong answers requeue within the session (up to 3 rounds);
   per-question stats persist in localStorage and feed the Smart Review
   deck with spaced intervals.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── shared helpers (shared/core.js) ──────────────────────────
     `el` writes innerHTML here, so its text must already have gone
     through esc()/fmt(). */
  const D = window.Daram;
  const esc = D.esc, fmt = D.fmt, el = D.elHtml, icon = D.icon, shuffle = D.shuffle;

  const COURSES = window.DARAM_COURSES || [];
  const BANK = (typeof QUESTION_BANK !== 'undefined') ? QUESTION_BANK : [];
  const bankById = Object.fromEntries(BANK.map(q => [q.id, q]));

  /* per-book config — a page may set window.DARAM_LEARN_CONFIG before this script */
  const CFG = Object.assign({
    bookTitle: 'al-Kubrā fī an-Naḥw',
    brand: 'Nahw al Kubra',
    brandSub: 'Mastery of Arabic Grammar',
    storeKey: 'daram-learn-v1',
    gameUrl: null,            // set per book → sidebar link to the timed Bomb Game
  }, window.DARAM_LEARN_CONFIG || {});

  const STORE_KEY = CFG.storeKey;
  const DAY = 24 * 60 * 60 * 1000;
  const INTERVALS = [1 * DAY, 3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY];
  const REVIEW_LIMIT = 15;

  const root = document.getElementById('learn-root');

  /* ── sound ───────────────────────────────────────────────────── */
  let audioCtx = null;
  function playCorrect() {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const t0 = audioCtx.currentTime;
      // two-note rising chime: E5 → A5
      [[659.25, 0], [880, 0.09]].forEach(([freq, dt]) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, t0 + dt);
        gain.gain.linearRampToValueAtTime(0.18, t0 + dt + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dt + 0.35);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(t0 + dt);
        osc.stop(t0 + dt + 0.4);
      });
    } catch (e) { /* audio unavailable — stay silent */ }
  }

  /* ── persistence ─────────────────────────────────────────────── */
  const store = D.loadJSON(localStorage, STORE_KEY, { sections: {}, q: {} });
  function save() { D.saveJSON(localStorage, STORE_KEY, store); }

  function recordAnswer(qKey, correct) {
    const s = store.q[qKey] || { seen: 0, wrong: 0, streak: 0, due: 0 };
    s.seen++;
    if (correct) { s.streak++; s.due = Date.now() + INTERVALS[Math.min(s.streak - 1, INTERVALS.length - 1)]; }
    else { s.wrong++; s.streak = 0; s.due = Date.now() + 10 * 60 * 1000; }
    store.q[qKey] = s;
    save();
  }

  /* ── question index (for smart review) ───────────────────────── */
  const QINDEX = {}; // qKey → { step, course, section }
  COURSES.forEach(course => course.sections.forEach(section => {
    resolvedSteps(course, section).forEach(st => {
      if (st.qKey) QINDEX[st.qKey] = { step: st, course, section };
    });
  }));

  function resolvedSteps(course, section) {
    const out = [];
    section.steps.forEach((raw, i) => {
      if (raw.t === 'bank') {
        const b = bankById[raw.id];
        if (!b) return; // bank question missing — skip quietly
        out.push({ t: 'written', prompt: b.promptEn, ar: b.promptAr || null, model: b.markScheme,
          marks: b.marks, exam: true, qKey: 'bank|' + b.id, label: 'Exam practice · ' + b.archetype });
      } else if (raw.t === 'teach') {
        out.push(Object.assign({}, raw));
      } else {
        out.push(Object.assign({}, raw, { qKey: course.id + '|' + section.id + '|' + i }));
      }
    });
    return out;
  }

  // ONE learning path: content first, then the questions that test it.
  function pathSteps(course, section) {
    const steps = resolvedSteps(course, section);
    return steps.filter(s => !s.qKey).concat(steps.filter(s => s.qKey));
  }

  function dueReview() {
    const now = Date.now();
    return Object.keys(store.q)
      .filter(k => QINDEX[k] && store.q[k].due <= now)
      .sort((a, b) => store.q[a].due - store.q[b].due);
  }

  /* ══ MATN PANEL — interactive book excerpt ═══════════════════──
     Renders slices of the reader's block data (books/<slug>/*.js) with
     the same word-hover glosses and line-translation toggle as the
     reader. A section opts in with:
       matn: { src:'DATA', from:2, to:6, check:'الْبَابُ' }
     and each teach step picks its blocks with focus:[indices].       */
  const MATN = { tr: false, open: false }; // toggle state persists within a session

  function matnData(m) {
    let arr = null;
    try { arr = new Function('return (typeof ' + m.src + ' !== "undefined") ? ' + m.src + ' : null;')(); }
    catch (e) { /* fall through */ }
    if (!arr) { console.warn('matn source not loaded:', m.src); return null; }
    if (m.check) {
      const b = arr[m.from];
      const firstAr = b && (b.ar || (b.w && (b.w.find(t => t.a) || {}).a) ||
        (b.lines && (b.lines[0].find(t => t.a) || {}).a)) || '';
      if (!String(firstAr).startsWith(m.check))
        console.warn('matn check mismatch in ' + m.src + '[' + m.from + ']: expected "' + m.check + '", found "' + firstAr + '" — block indices may have shifted');
    }
    return arr;
  }

  /* the reader's own block renderer + word popover (shared/blocks.js):
     page rules and footnotes are dropped — a lesson shows an excerpt */
  const hidePop = D.WordPop.hide;

  function matnBody(blocks) {
    const body = el('div', 'mbody' + (MATN.tr ? ' show-tr' : ''));
    D.Blocks.render(body, blocks, { pages: false, notes: false });
    D.WordPop.bind(body);
    return body;
  }
  function matnTrToggle(getBody) {
    const tr = el('button', 'mtr label-caps' + (MATN.tr ? ' on' : ''));
    tr.append(icon('translate'), el('span', null, 'Translation'));
    tr.onclick = e => {
      e.stopPropagation();
      MATN.tr = !MATN.tr;
      tr.classList.toggle('on', MATN.tr);
      getBody().classList.toggle('show-tr', MATN.tr);
    };
    return tr;
  }

  /* teach phase: panel showing just the active card's blocks */
  function matnPanel(section, step) {
    const m = section && section.matn;
    if (!m || !step.focus || !step.focus.length) return null;
    const data = matnData(m);
    if (!data) return null;
    const panel = el('section', 'matn-panel');
    const head = el('div', 'mhead');
    head.append(el('span', 'label-caps mlabel', 'From the matn'));
    const body = matnBody(step.focus.map(i => data[i]));
    head.append(matnTrToggle(() => body));
    panel.append(head, body);
    return panel;
  }

  /* quiz phase: collapsed bar, expands to the section's full passage */
  function matnPeek(wrap) {
    if (!S || S.mode !== 'section' || !S.section || !S.section.matn) return;
    const m = S.section.matn;
    const data = matnData(m);
    if (!data) return;
    const holder = el('div', 'matn-peek' + (MATN.open ? ' open' : ''));
    const bar = el('button', 'peek-bar');
    const chev = icon(MATN.open ? 'expand_less' : 'expand_more', 'chev');
    bar.append(icon('menu_book'), el('span', 'label-caps', 'View matn'), chev);
    const body = matnBody(data.slice(m.from, m.to + 1));
    bar.onclick = () => {
      MATN.open = !MATN.open;
      holder.classList.toggle('open', MATN.open);
      chev.textContent = MATN.open ? 'expand_less' : 'expand_more';
    };
    holder.append(bar, body);
    wrap.append(holder);
  }

  /* ══ SHELL: sidebar + top bar + canvas ══════════════════════── */
  const UI = { open: {}, active: null, crumb: '' };
  if (COURSES.length) UI.open[COURSES[0].id] = true;

  let shellEl = null, canvasEl = null, crumbEl = null, navEl = null;

  function buildShell() {
    root.innerHTML = '';
    shellEl = el('div', 'shell');

    const toggle = el('button', 'nav-toggle');
    toggle.append(icon('menu'));
    toggle.onclick = () => shellEl.classList.toggle('nav-open');
    shellEl.append(toggle);

    navEl = el('nav', 'snav');
    shellEl.append(navEl);

    const col = el('div', 'canvas-col');
    const bar = el('header', 'cbar');
    crumbEl = el('div', 'crumbs label-caps');
    bar.append(crumbEl);
    const acts = el('div', 'acts');
    /* The Bomb Game lives here rather than in the sidebar footer: it is a
       destination of its own, not a lesson, so it belongs beside Library. */
    if (CFG.gameUrl) {
      const game = el('a', 'act-btn');
      game.href = CFG.gameUrl;
      game.title = 'Bomb Game — timed MCQ arcade';
      game.append(icon('timer'), el('span', null, 'Bomb Game'));
      acts.append(game);
    }
    const lib = el('a');
    lib.href = '../index.html';
    lib.title = 'Library';
    lib.append(icon('collections_bookmark'));
    acts.append(lib);
    bar.append(acts);
    col.append(bar);

    canvasEl = el('main', 'canvas');
    col.append(canvasEl);
    shellEl.append(col);
    root.append(shellEl);
  }

  function setCrumb(right) {
    crumbEl.innerHTML = '';
    crumbEl.append(el('span', 'c1', CFG.bookTitle));
    if (right) {
      crumbEl.append(icon('chevron_right'));
      crumbEl.append(el('span', null, fmt(right)));
    }
  }

  function firstUnfinished() {
    for (const c of COURSES) for (const s of c.sections) {
      const rec = store.sections[c.id + '|' + s.id];
      if (!rec || !rec.done) return { course: c, section: s };
    }
    return COURSES.length ? { course: COURSES[0], section: COURSES[0].sections[0] } : null;
  }

  function renderNav() {
    const prevTree = navEl.querySelector('.tree');
    const prevScroll = prevTree ? prevTree.scrollTop : 0;
    navEl.innerHTML = '';
    const brand = el('div', 'brand');
    brand.append(el('h1', null, CFG.brand), el('p', null, CFG.brandSub));
    navEl.append(brand);

    const tree = el('div', 'tree');
    COURSES.forEach((course, ci) => {
      const wrap = el('div');
      const recs = course.sections.map(s => store.sections[course.id + '|' + s.id]);
      const started = recs.some(r => r);
      const allDone = recs.length > 0 && recs.every(r => r && r.done);
      const btn = el('button', 'chap-btn' + (allDone ? ' done' : started ? ' started' : ''));
      btn.append(icon(allDone ? 'circle' : started ? 'data_usage' : 'radio_button_unchecked', 'dot-ic' + (started ? ' fill' : '')));
      btn.append(el('span', null, (course.num != null ? course.num : (ci + 1)) + ' ' + fmt(course.titleEn || course.titleAr || '')));
      btn.append(icon(UI.open[course.id] ? 'keyboard_arrow_down' : 'keyboard_arrow_right', 'chev'));
      btn.onclick = () => { UI.open[course.id] = !UI.open[course.id]; renderNav(); };
      wrap.append(btn);

      if (UI.open[course.id]) {
        const subs = el('div', 'subs');
        course.sections.forEach((section, si) => {
          const sKey = course.id + '|' + section.id;
          const rec = store.sections[sKey];
          const done = !!(rec && rec.done);
          const partial = !!(rec && !rec.done);
          const b = el('button', 'sub' + (done ? ' done' : partial ? ' started' : '') + (UI.active === sKey ? ' active' : ''));
          b.append(icon(done ? 'radio_button_checked' : partial ? 'data_usage' : 'radio_button_unchecked', 'radio' + (done || partial ? ' fill' : '')));
          const st = el('span', 'st', (ci + 1) + '.' + (si + 1) + ' ' + fmt(section.title));
          if (done) st.append(el('span', 'pct', 'Best ' + rec.best + '%'));
          else if (partial) st.append(el('span', 'pct', 'In progress'));
          b.append(st);
          b.onclick = () => { shellEl.classList.remove('nav-open'); startSection(course, section); };
          subs.append(b);
        });
        wrap.append(subs);
      }
      tree.append(wrap);
    });
    navEl.append(tree);
    tree.scrollTop = prevScroll;

    const foot = el('div', 'foot');
    const resume = el('button', 'resume', 'Resume Learning');
    resume.onclick = () => {
      const nx = firstUnfinished();
      if (nx) { shellEl.classList.remove('nav-open'); startSection(nx.course, nx.section); }
    };
    foot.append(resume);
    const back = el('a');
    back.href = '../index.html';
    back.append(icon('arrow_back'), el('span', null, 'Back to Library'));
    foot.append(back);
    navEl.append(foot);
  }

  /* ══ HOME (canvas only — navigation lives in the sidebar) ═════ */
  function renderHome() {
    UI.active = null;
    renderNav();
    setCrumb('Dashboard');
    canvasEl.innerHTML = '';
    const inner = el('div', 'inner');

    const hero = el('div', 'home-hero');
    hero.append(
      el('div', 'eyebrow label-caps', 'Adaptive learning'),
      el('h2', null, CFG.bookTitle),
      el('p', null, 'One path per lesson: read the content first, then answer the questions on it. Miss one and it comes back until it sticks — then again days later, right before you forget.')
    );
    inner.append(hero);

    const due = dueReview();
    if (due.length) {
      const b = el('div', 'review-banner');
      b.append(icon('cached'));
      const t = el('div', 'txt');
      t.append(el('div', 't', 'Smart review'),
        el('div', 's', due.length + ' question' + (due.length === 1 ? '' : 's') + ' due — answered before, worth another pass'));
      b.append(t);
      const go = el('button', 'btn primary', 'Review now');
      go.onclick = () => startReview(due);
      b.append(go);
      inner.append(b);
    }

    const cta = el('div', 'actionbar');
    cta.style.borderTop = '0';
    cta.style.justifyContent = 'center';
    const start = el('button', 'btn primary');
    const nx = firstUnfinished();
    const nxRec = nx && store.sections[nx.course.id + '|' + nx.section.id];
    start.append(el('span', null, nxRec && nxRec.done ? 'Start again' : 'Resume Learning'), icon('arrow_forward'));
    start.onclick = () => { if (nx) startSection(nx.course, nx.section); };
    cta.append(start);
    inner.append(cta);

    canvasEl.append(inner);
    window.scrollTo(0, 0);
  }

  /* ══ SESSION RUNNER ═════════════════════════════════════════── */
  let S = null; // session state

  function startSection(course, section) {
    MATN.open = false;
    const queue = pathSteps(course, section);
    S = {
      mode: 'section', course, section,
      queue, i: 0, round: 1, retry: [],
      total: 0, firstTry: 0, missed: [],
      title: section.title,
      teachTotal: queue.filter(s => !s.qKey).length,
    };
    S.total = queue.length - S.teachTotal;
    UI.active = course.id + '|' + section.id;
    if (!store.sections[UI.active]) {
      store.sections[UI.active] = { done: false, started: true, ts: Date.now() };
      save();
    }
    renderNav();
    const ci = COURSES.indexOf(course), si = course.sections.indexOf(section);
    S.num = (course.num != null ? course.num : (ci + 1)) + '.' + (si + 1);
    setCrumb('Lesson ' + S.num + ': ' + section.title);
    renderStep();
  }

  function startReview(dueKeys) {
    const steps = shuffle(dueKeys.slice(0, REVIEW_LIMIT)).map(k => Object.assign({}, QINDEX[k].step));
    S = {
      mode: 'review', course: null, section: null,
      queue: steps, i: 0, round: 1, retry: [],
      total: steps.length, firstTry: 0, missed: [],
      title: 'Smart review', teachTotal: 0, num: '',
    };
    UI.active = null;
    renderNav();
    setCrumb('Smart review');
    renderStep();
  }

  function next() {
    S.i++;
    if (S.i < S.queue.length) return renderStep();
    if (S.retry.length && S.round < 3) {
      S.round++;
      S.queue = shuffle(S.retry);
      S.retry = [];
      S.i = 0;
      S.teachTotal = 0;
      return renderInterstitial();
    }
    renderSummary();
  }

  function onAnswered(step, correct) {
    recordAnswer(step.qKey, correct);
    if (S.round === 1) {
      if (correct) S.firstTry++;
      else S.missed.push(step);
    }
    if (!correct) S.retry.push(step);
  }

  function inner() {
    canvasEl.innerHTML = '';
    const n = el('div', 'inner');
    if (S && S.course && S.course.id) n.dataset.course = S.course.id;
    canvasEl.append(n);
    return n;
  }

  /* unified lesson progress: teach + quiz steps share one bar.
     Teach steps count as done while viewed; quiz steps count once answered. */
  function progressPct(extra) {
    return Math.round(((S.i + (extra || 0)) / Math.max(S.queue.length, 1)) * 100) + '%';
  }
  function bumpProgress() {
    const f = document.querySelector('.pbar .fill');
    if (f) f.style.width = progressPct(1);
    const n = document.querySelector('.qprog .n');
    if (n) n.textContent = (S.i + 1) + '/' + S.queue.length;
  }

  /* learning-phase header: big centred progress */
  function teachChrome(wrap) {
    const prog = el('div', 'lprog');
    const row = el('div', 'row');
    row.append(el('span', 'lbl label-caps', 'Lesson progress'),
      el('span', 'lbl label-caps', (S.i + 1) + ' of ' + S.queue.length));
    prog.append(row);
    const bar = el('div', 'pbar');
    const fill = el('div', 'fill');
    fill.style.width = progressPct(1);
    bar.append(fill);
    prog.append(bar);
    wrap.append(prog);
  }

  /* quiz-phase header: close · lesson label · compact bar */
  function quizChrome(wrap) {
    const q = el('div', 'qprog');
    const left = el('div', 'left');
    const quit = el('button');
    quit.title = 'Back to dashboard';
    quit.append(icon('close'));
    quit.onclick = renderHome;
    left.append(quit);
    left.append(el('span', 'label-caps', S.num ? 'Lesson ' + S.num + ': ' + fmt(S.title) : fmt(S.title)));
    q.append(left);
    const right = el('div', 'right');
    if (S.round > 1) right.append(el('span', 'round-tag label-caps', 'Round ' + S.round));
    const bar = el('div', 'pbar');
    const fill = el('div', 'fill');
    fill.style.width = progressPct(0);
    bar.append(fill);
    right.append(bar);
    right.append(el('span', 'n label-caps', S.i + '/' + S.queue.length));
    q.append(right);
    wrap.append(q);
  }

  function renderStep() {
    const wrap = inner();
    const step = S.queue[S.i];
    hidePop();
    if (step.t === 'teach') renderTeach(wrap, step);
    else { quizChrome(wrap); matnPeek(wrap); if (step.t === 'mcq') renderMcq(wrap, step); else renderWritten(wrap, step); }
    window.scrollTo(0, 0);
  }

  function arBlock(step) {
    const w = el('div', 'ar-wrap');
    w.append(el('div', 'ar-line', step.ar));
    if (step.arEn) w.append(el('div', 'ar-sub', '“' + esc(step.arEn) + '”'));
    return w;
  }

  /* ── teach card (learning phase) ── */
  function renderTeach(wrap, step) {
    teachChrome(wrap);

    const title = el('div', 'ltitle');
    if (step.title) title.append(el('h2', null, fmt(step.title)));
    const lede = step.body ? String(step.body).split('\n\n') : [];
    if (lede.length) title.append(el('p', null, fmt(lede[0])));
    wrap.append(title);

    const mp = matnPanel(S.mode === 'section' ? S.section : null, step);
    if (mp) wrap.append(mp);

    const paper = el('div', 'paper');
    const pad = el('div', 'pad');
    const headRow = el('div', 'cardhead-row');
    headRow.append(el('h3', 'cardhead', step.kicker ? fmt(step.kicker) : 'Key idea'));
    if (step.page) headRow.append(el('span', 'pgref label-caps', 'Book p. ' + step.page));
    pad.append(headRow);
    if (step.ar) pad.append(arBlock(step));
    lede.slice(1).forEach(p => pad.append(el('p', 'prose', fmt(p))));
    if (step.points) {
      const ul = el('ul', 'pts');
      step.points.forEach(p => {
        const li = el('li');
        li.append(icon('check_circle', 'fill'));
        li.append(el('span', null, fmt(p)));
        ul.append(li);
      });
      pad.append(ul);
    }
    if (step.examples) {
      const g = el('div', 'ex-grid');
      step.examples.forEach(x => {
        const c = el('div', 'ex-cell');
        c.append(el('span', 'xar', x.ar));
        const f = el('div', 'xfoot');
        if (x.note) f.append(el('span', 'xnote label-caps', fmt(x.note)));
        f.append(el('span', 'xen', fmt(x.en || '')));
        c.append(f);
        g.append(c);
      });
      pad.append(g);
    }
    if (step.after) pad.append(el('p', 'prose synth', fmt(step.after)));
    paper.append(pad);
    wrap.append(paper);

    const bar = el('div', 'actionbar');
    if (S.i > 0 && S.queue[S.i - 1].t === 'teach') {
      const prev = el('button', 'btn nav-prev');
      prev.append(icon('arrow_back'), el('span', null, 'Previous'));
      prev.onclick = () => { S.i -= 2; next(); };
      bar.append(prev);
    } else bar.append(el('span', 'spacer'));
    const nextIsQuiz = !S.queue[S.i + 1] || !!S.queue[S.i + 1].qKey;
    const btn = el('button', 'btn primary');
    btn.append(el('span', null, nextIsQuiz ? 'Continue to Quiz' : 'Continue'), icon('arrow_forward'));
    btn.onclick = next;
    bar.append(btn);
    wrap.append(bar);
    bindKeys({ Enter: () => btn.click() });
  }

  /* ── mcq card (quiz phase, select → check) ── */
  function renderMcq(wrap, step) {
    const paper = el('div', 'paper');
    const pad = el('div', 'pad');
    const head = el('div', 'qhead');
    head.append(el('h2', null, fmt(step.q)));
    pad.append(head);
    if (step.ar) pad.append(arBlock(step));

    const short = step.choices.every(c => String(c).length <= 48);
    const order = shuffle(step.choices.map((_, i) => i));
    const box = el('div', 'qopts' + (short && step.choices.length >= 2 ? ' grid2' : ''));

    let selected = null, checked = false;
    const check = el('button', 'btn primary');
    check.append(el('span', null, 'Check Answer'), icon('arrow_forward'));
    check.disabled = true;

    const btns = order.map(origIdx => {
      const b = el('button', 'qopt');
      const badge = el('span', 'badge');
      badge.append(icon('check', 'fill'));
      b.append(badge);
      b.append(el('span', 'txt', fmt(step.choices[origIdx])));
      b.onclick = () => {
        if (checked) return;
        selected = origIdx;
        btns.forEach(bb => bb.classList.remove('sel'));
        b.classList.add('sel');
        check.disabled = false;
      };
      box.append(b);
      return b;
    });
    pad.append(box);

    const fbHost = el('div');
    pad.append(fbHost);
    paper.append(pad);
    wrap.append(paper);

    const bar = el('div', 'actionbar');
    bar.append(el('span', 'spacer'));
    bar.append(check);
    wrap.append(bar);

    check.onclick = () => {
      if (checked || selected == null) return;
      checked = true;
      const correct = selected === step.correct;
      btns.forEach((bb, p) => {
        bb.disabled = true;
        bb.classList.remove('sel');
        if (order[p] === step.correct) {
          bb.classList.add('correct');
        } else if (order[p] === selected) {
          bb.classList.add('wrong');
          bb.querySelector('.badge .msym').textContent = 'close';
        } else bb.classList.add('dim');
      });
      bumpProgress();
      if (correct) playCorrect();
      else paper.classList.add('shake');
      const fb = el('div', 'fb ' + (correct ? 'good' : 'bad'));
      const fh = el('div', 'fh');
      fh.append(icon(correct ? 'check_circle' : 'cancel', 'fill'));
      fh.append(el('span', null, correct ? 'Correct' : 'Not quite — it comes back this session'));
      fb.append(fh);
      if (step.why) fb.append(el('div', 'fw', fmt(step.why)));
      fbHost.append(fb);
      check.remove();
      const cont = el('button', 'btn primary');
      cont.append(el('span', null, 'Continue'), icon('arrow_forward'));
      cont.onclick = () => { onAnswered(step, correct); next(); };
      bar.append(cont);
      bindKeys({ Enter: () => cont.click() });
      cont.focus({ preventScroll: true });
    };

    const keys = { Enter: () => { if (!check.disabled) check.click(); } };
    btns.forEach((b, i) => { keys[String(i + 1)] = () => b.click(); });
    bindKeys(keys);
  }

  /* ── written / flashcard card (quiz phase) ── */
  function renderWritten(wrap, step) {
    const paper = el('div', 'paper');
    const pad = el('div', 'pad');
    const kick = el('div', 'label-caps');
    kick.style.color = 'var(--secondary)';
    kick.style.display = 'flex';
    kick.style.marginBottom = '12px';
    kick.append(el('span', null, fmt(step.label || 'Written answer')));
    if (step.marks) kick.append(el('span', 'marks-chip', step.marks + ' marks'));
    pad.append(kick);
    const head = el('div', 'qhead');
    head.append(el('h2', null, fmt(step.prompt)));
    pad.append(head);
    if (step.ar) pad.append(arBlock(step));

    const ta = el('textarea', 'wans');
    ta.placeholder = 'Write your answer — then reveal the model answer and grade yourself.';
    pad.append(ta);
    paper.append(pad);
    wrap.append(paper);

    const bar = el('div', 'actionbar');
    bar.append(el('span', 'spacer'));
    const reveal = el('button', 'btn primary');
    reveal.append(el('span', null, 'Reveal model answer'), icon('visibility'));
    bar.append(reveal);
    wrap.append(bar);

    reveal.onclick = () => {
      bumpProgress();
      reveal.remove();
      const m = el('div', 'model');
      m.append(el('div', 'mh label-caps', 'Model answer' + (step.marks ? ' · mark scheme' : '')));
      m.append(el('div', 'mb', fmt(step.model)));
      pad.append(m);

      const sg = el('div', 'selfgrade');
      sg.append(el('span', 'lbl', 'How did you do? Be honest — misses come back.'));
      const good = el('button', 'btn good', 'Got it');
      const mid = el('button', 'btn mid', 'Partly');
      const bad = el('button', 'btn bad', 'Missed it');
      good.onclick = () => { playCorrect(); onAnswered(step, true); next(); };
      mid.onclick = () => { onAnswered(step, false); next(); };
      bad.onclick = () => { onAnswered(step, false); next(); };
      sg.append(good, mid, bad);
      pad.append(sg);
      bindKeys({ '1': () => good.click(), '2': () => mid.click(), '3': () => bad.click() });
    };

    bindKeys({});
    ta.focus({ preventScroll: true });
  }

  /* ── interstitial between rounds ── */
  function renderInterstitial() {
    const wrap = inner();
    quizChrome(wrap);
    const paper = el('div', 'paper center-card');
    const pad = el('div', 'pad');
    pad.append(icon('cached', 'bigico'));
    pad.append(el('h2', null, 'Round ' + S.round + ' — fix the misses'));
    pad.append(el('p', 'sub', S.queue.length + ' question' + (S.queue.length === 1 ? '' : 's') +
      ' you got wrong. They repeat until you get them right.'));
    const bar = el('div', 'actionbar');
    const btn = el('button', 'btn primary');
    btn.append(el('span', null, "Let's go"), icon('arrow_forward'));
    btn.onclick = renderStep;
    bar.append(btn);
    pad.append(bar);
    paper.append(pad);
    wrap.append(paper);
    bindKeys({ Enter: () => btn.click() });
    window.scrollTo(0, 0);
  }

  /* ── summary ── */
  function renderSummary() {
    bindKeys({});
    const pct = S.total ? Math.round((S.firstTry / S.total) * 100) : 100;

    if (S.mode === 'section') {
      const sKey = S.course.id + '|' + S.section.id;
      const prev = store.sections[sKey];
      store.sections[sKey] = { done: true, best: Math.max(prev && prev.best ? prev.best : 0, pct), last: pct, ts: Date.now() };
      save();
      renderNav();
    }

    const wrap = inner();
    const paper = el('div', 'paper center-card');
    const pad = el('div', 'pad');
    pad.append(icon(pct >= 80 ? 'workspace_premium' : pct >= 50 ? 'fitness_center' : 'menu_book', 'bigico fill'));
    pad.append(el('h2', null, S.mode === 'review' ? 'Review complete' : 'Section complete'));
    pad.append(el('div', 'scorering ' + (pct >= 80 ? 'good' : pct >= 50 ? 'mid' : 'low'), pct + '%'));
    pad.append(el('div', 'score-sub', S.firstTry + ' of ' + S.total + ' right first try'));
    if (S.missed.length) {
      const ml = el('div', 'miss-list');
      ml.append(el('div', 'mh label-caps', 'Worth revisiting'));
      S.missed.slice(0, 6).forEach(st => {
        const label = st.q || st.prompt || '';
        ml.append(el('div', 'mi', fmt(label.length > 90 ? label.slice(0, 90) + '…' : label)));
      });
      pad.append(ml);
    }

    const bar = el('div', 'actionbar');
    const home = el('button', 'btn quiet', 'Dashboard');
    home.onclick = renderHome;
    bar.append(home);
    if (S.mode === 'section') {
      const redo = el('button', 'btn quiet', 'Redo section');
      const c = S.course, s = S.section;
      redo.onclick = () => startSection(c, s);
      bar.append(redo);
      const idx = c.sections.indexOf(s);
      if (idx >= 0 && idx + 1 < c.sections.length) {
        const nx = el('button', 'btn primary');
        nx.append(el('span', null, 'Next: ' + fmt(c.sections[idx + 1].title)), icon('arrow_forward'));
        nx.onclick = () => startSection(c, c.sections[idx + 1]);
        bar.append(nx);
      }
    }
    pad.append(bar);
    paper.append(pad);
    wrap.append(paper);
    window.scrollTo(0, 0);
  }

  /* ── keyboard ── */
  let keyMap = {};
  function bindKeys(map) { keyMap = map; }
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
    const fn = keyMap[e.key];
    if (fn) { e.preventDefault(); fn(); }
  });

  buildShell();
  renderHome();
})();
