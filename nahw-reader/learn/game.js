/* ═══════════════════════════════════════════════════════════════
   Daram Learn — "Bomb Game" (نحو): beat the fuse.

   A timed MCQ arcade over the SAME question data the lesson app
   teaches from. Nothing is authored here: every question is harvested
   at load time from the `t:'mcq'` steps already sitting in
   window.DARAM_COURSES. Add a course file to game.html and its
   chapter shows up on its own. Two sources feed it:
     · lessons/*.js   — the lesson courses, shared with learn.html
     · game-bank/*.js — MCQ-only courses (chapters A1–A7) built from the
       «النَحْوُ» Anki deck; loaded by game.html ONLY, since they carry no
       teach/written steps and would be pointless as lessons.

   Rules
     · 15s per question. The fuse burns left→right; a bomb rides its
       edge (⏱️ >10s · ⏰ 6–10s · 💣 ≤5s). Green → yellow ≤7s → red ≤3s.
     · Run out of time and the bomb goes off: the whole run is lost.
     · Right answer → 1.5s, wrong answer → 2.5s (long enough to read
       the correct choice and the lesson's own `why`), then auto-advance.

   Chapter = one course object. Modes: sequential · random (sections
   shuffled, questions kept together) · chaos (everything shuffled).

   Owns storage key `daram-game-v1` — it never touches the lesson
   app's `daram-learn-v1` progress store.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const COURSES = window.DARAM_COURSES || [];

  const ROUND = 15;                       // seconds on the fuse
  const WARN_AT = 7;                      // bar turns yellow at/below
  const CRIT_AT = 3;                      // bar turns red + pulses at/below
  const ALERT_AT = 5;                     // "BOMB ALERT" text at/below
  const DELAY_RIGHT = 1500;               // ms of feedback after a correct answer
  const DELAY_WRONG = 2500;               // …and after a wrong one
  const LIMITS = [10, 50, 100, null];     // null = ∞ (the whole pool)
  const STORE_KEY = 'daram-game-v1';      // NOT the lesson app's store
  const ALL_ID = '__all__';

  const MODES = [
    { id: 'sequential', label: '📋 Sequential' },
    { id: 'random', label: '🔀 Random' },
    { id: 'chaos', label: '🎲 Chaos' },
  ];

  const root = document.getElementById('game-root');

  /* ── shared helpers (shared/core.js) ──────────────────────────
     `el` is text-only — the safe default. `elHtml` is the one and only
     innerHTML sink, so every markup-bearing call site is visible by name;
     its argument must already have gone through esc()/fmt(). `fmt` gives
     a question the same **bold** + Arabic-run treatment as learn.js, so
     it reads identically in both apps. */
  const D = window.Daram;
  const fmt = D.fmt, el = D.el, elHtml = D.elHtml, icon = D.icon,
        shuffle = D.shuffle, mostlyArabic = D.mostlyArabic;

  /* ── harvest: courses → chapters → section groups → questions ────
     A question is only playable if it has a prompt, ≥2 choices and a
     `correct` index that actually points into `choices` (some future
     lesson file may fall short — skip it rather than crash the run). */
  function harvest() {
    const chapters = [];
    COURSES.forEach((course, ci) => {
      const groups = [];
      let count = 0;
      (course.sections || []).forEach(section => {
        const items = [];
        (section.steps || []).forEach((step, si) => {
          if (step.t !== 'mcq') return;
          const choices = step.choices;
          if (!step.q || !Array.isArray(choices) || choices.length < 2) return;
          if (!Number.isInteger(step.correct) || step.correct < 0 || step.correct >= choices.length) return;
          items.push({
            key: course.id + '|' + section.id + '|' + si,
            q: step.q, ar: step.ar || null, arEn: step.arEn || null,
            choices: choices, correct: step.correct, why: step.why || '',
            courseTitle: course.titleEn || course.titleAr || course.id,
            sectionTitle: section.title || '',
          });
        });
        if (items.length) { groups.push(items); count += items.length; }
      });
      if (count) {
        chapters.push({
          id: course.id, num: (course.num != null ? course.num : ci + 1),
          titleEn: course.titleEn || course.id, titleAr: course.titleAr || '',
          groups: groups, count: count,
        });
      }
    });

    if (chapters.length > 1) {
      const all = { id: ALL_ID, num: null, titleEn: 'All chapters', titleAr: 'كُلُّ الْأَبْوَابِ', groups: [], count: 0 };
      chapters.forEach(ch => { all.groups = all.groups.concat(ch.groups); all.count += ch.count; });
      chapters.unshift(all);
    }
    return chapters;
  }

  /* prototype-free map: a stored pref of "toString" (or any other
     Object.prototype key) must miss, not hand back a Function. */
  const CHAPTERS = harvest();
  const chapterById = Object.create(null);
  CHAPTERS.forEach(ch => { chapterById[ch.id] = ch; });
  function hasChapter(id) {
    return typeof id === 'string' && Object.prototype.hasOwnProperty.call(chapterById, id);
  }

  /* ── prefs (game-only store) ─────────────────────────────────── */
  function loadPrefs() {
    return D.loadJSON(localStorage, STORE_KEY, {});
  }
  function savePrefs() {
    D.saveJSON(localStorage, STORE_KEY, { chapter: G.chapterId, mode: G.mode, limit: G.limit });
  }

  /* ── state ───────────────────────────────────────────────────── */
  const G = {
    chapterId: null, mode: 'sequential', limit: 10,
    queue: [], index: 0, score: 0, answered: 0,
    timeLeft: ROUND, checked: false, screen: 'loading',
  };

  let tickTimer = null;   // the 1s countdown
  let advTimer = null;    // the auto-advance after feedback

  /* The fuse must never burn while the tab is hidden — a background
     interval would detonate a bomb the player cannot see. `startTick` is
     the only place the interval is created: it refuses to double-start
     and refuses to start at all while `document.hidden`; the
     visibilitychange handler below starts it on the way back in. */
  function startTick() {
    if (tickTimer || document.hidden) return;
    tickTimer = setInterval(tick, 1000);
  }
  function stopTick() {
    if (tickTimer) { clearInterval(tickTimer); tickTimer = null; }
  }
  function clearTimers() {
    stopTick();
    if (advTimer) { clearTimeout(advTimer); advTimer = null; }
  }

  /* live nodes the countdown pokes at, so a tick never re-renders the card */
  let fuseEl = null, fillEl = null, bombEl = null, alertEl = null,
      progEl = null, qnumEl = null, scoreEl = null, leftEl = null,
      cardEl = null, hostEl = null;

  function total() { return G.limit ? Math.min(G.limit, G.queue.length) : G.queue.length; }

  /* ── queue building ──────────────────────────────────────────── */
  function buildQueue() {
    const ch = chapterById[G.chapterId];
    if (!ch) return [];
    let out = [];
    if (G.mode === 'random') {
      // sections shuffled; the questions inside one section stay together, in order
      shuffle(ch.groups.slice()).forEach(g => { out = out.concat(g); });
    } else {
      ch.groups.forEach(g => { out = out.concat(g); });
      if (G.mode === 'chaos') shuffle(out);   // every question independent
    }
    if (G.limit && out.length > G.limit) out = out.slice(0, G.limit);
    return out;
  }

  function resetRun() {
    clearTimers();
    G.queue = buildQueue();
    G.index = 0; G.score = 0; G.answered = 0;
    G.checked = false; G.timeLeft = ROUND;
    G.screen = G.queue.length ? 'play' : 'empty';
    render();
  }

  /* ══ SCREENS ════════════════════════════════════════════════── */
  function render() {
    clearKeys();
    root.innerHTML = '';
    if (G.screen === 'loading') return renderLoading();
    if (G.screen === 'error') return renderError();
    if (G.screen === 'boom') return renderBoom();
    if (G.screen === 'done') return renderDone();
    if (G.screen === 'empty') return renderEmpty();
    renderPlay();
  }

  function endBox(kind, emoji, title, panel, acts) {
    const scr = el('div', 'g-end ' + kind);
    const box = el('div', 'box');
    box.append(el('div', 'emoji', emoji), el('h2', null, title), panel);
    const row = el('div', 'acts');
    acts.forEach(a => row.append(a));
    box.append(row);
    scr.append(box);
    root.append(scr);
    window.scrollTo(0, 0);
    return scr;
  }

  function backLink(label) {
    const a = el('a', 'g-linkbtn');
    a.href = 'learn.html';
    a.textContent = label || 'Back to lessons';
    return a;
  }

  function renderLoading() {
    const scr = el('div', 'g-end');
    const box = el('div', 'box');
    box.append(el('div', 'emoji', '💣'), el('h2', null, 'Arming the bomb…'), el('div', 'g-spin'));
    scr.append(box);
    root.append(scr);
  }

  function renderError() {
    const p = el('div', 'panel');
    p.append(el('div', 'lead', 'No lesson data loaded'),
      el('div', 'sub', 'game.html must load the kubra-nahw lesson files (lessons/*.js) before game.js. ' +
        'Open the page over the same path as learn.html.'));
    endBox('boom', '⚠️', 'Nothing to play', p, [backLink('Back to lessons')]);
  }

  function renderEmpty() {
    const p = el('div', 'panel');
    p.append(el('div', 'lead', 'This chapter has no multiple-choice questions.'),
      el('div', 'sub', 'Pick another chapter — or “All chapters” to pool the whole book.'));
    const again = el('button', 'btn g-btn-danger', 'Pick a chapter');
    again.onclick = () => {
      G.chapterId = CHAPTERS[0].id; savePrefs(); resetRun();
    };
    endBox('boom', '🗒️', 'Empty chapter', p, [again, backLink()]);
  }

  function renderBoom() {
    const p = el('div', 'panel');
    p.append(el('div', 'lead', 'The bomb exploded! 💣'),
      el('div', 'sub', 'You ran out of time and lost the run.'),
      el('div', 'sub', 'Lost score: ' + G.score + '/' + G.answered));
    const again = el('button', 'btn g-btn-danger', 'Start Over');
    again.onclick = resetRun;
    endBox('boom', '💥', "BOOM! Time's Up!", p, [again, backLink()]);
    bindKeys({ Enter: () => again.click() });
  }

  function renderDone() {
    const pct = G.answered ? Math.round((G.score / G.answered) * 100) : 0;
    const p = el('div', 'panel');
    p.append(el('div', 'lead', 'Your score'),
      el('div', 'big', G.score + '/' + G.answered),
      el('div', 'sub', pct + '% correct'));
    if (G.limit) {
      p.append(el('div', 'sub', G.answered >= G.limit
        ? 'Completed all ' + G.limit + ' questions!'
        : 'Finished ' + G.answered + '/' + G.limit + ' questions'));
    }
    const again = el('button', 'btn primary', 'Play Again');
    again.onclick = resetRun;
    endBox('win', '🏆', 'أحسنت! Well done!', p, [again, backLink()]);
    bindKeys({ Enter: () => again.click() });
  }

  /* ── the playing field: top bar · HUD · question card ─────────── */
  function renderPlay() {
    const page = el('div', 'g-page');
    const wrap = el('div', 'g-wrap');

    const top = el('div', 'g-top');
    const back = el('a');
    back.href = 'learn.html';
    back.append(icon('arrow_back'), el('span', null, 'Lessons'));
    top.append(back, elHtml('h1', 'g-title', '💣 Bomb Game<span class="g-sfx"> · an-Naḥw</span>'));
    wrap.append(top);

    wrap.append(buildHud());

    hostEl = el('div');
    wrap.append(hostEl);
    page.append(wrap);
    root.append(page);

    renderQuestion();
  }

  function buildHud() {
    const hud = el('div', 'g-hud');

    /* row 1 — score + chapter picker */
    const row = el('div', 'g-row');
    const scores = el('div', 'g-scores');
    qnumEl = el('div', 'g-qnum label-caps');
    scoreEl = el('div', 'g-score');
    leftEl = el('div', 'g-left');
    scores.append(qnumEl, scoreEl, leftEl);
    row.append(scores, buildDropdown());
    hud.append(row);

    /* row 2 — question limit (left) + mode (right) */
    const controls = el('div', 'g-controls');
    const limits = el('div', 'g-chips');
    limits.append(el('span', 'g-caption label-caps', 'Limit'));
    LIMITS.forEach(n => {
      const b = el('button', 'g-chip' + (G.limit === n ? ' on' : ''), n === null ? '∞' : String(n));
      b.onclick = () => { if (G.limit === n) return; G.limit = n; savePrefs(); resetRun(); };
      limits.append(b);
    });
    const modes = el('div', 'g-chips');
    modes.append(el('span', 'g-caption label-caps', 'Mode'));
    MODES.forEach(m => {
      const b = el('button', 'g-chip' + (G.mode === m.id ? ' on' : ''), m.label);
      b.onclick = () => { if (G.mode === m.id) return; G.mode = m.id; savePrefs(); resetRun(); };
      modes.append(b);
    });
    controls.append(limits, modes);
    hud.append(controls);

    /* row 3 — the fuse */
    fuseEl = el('div', 'g-fuse');
    const track = el('div', 'g-track');
    fillEl = el('div', 'g-fill');
    bombEl = el('div', 'g-bomb', '⏱️');
    track.append(fillEl, bombEl);
    alertEl = el('div', 'g-alert');
    fuseEl.append(track, alertEl);
    hud.append(fuseEl);

    /* row 4 — run progress */
    const prog = el('div', 'g-prog');
    progEl = el('div', 'fill');
    prog.append(progEl);
    hud.append(prog);

    return hud;
  }

  function buildDropdown() {
    const dd = el('div', 'g-dd');
    const cur = chapterById[G.chapterId];
    const btn = el('button', 'g-dd-btn');
    const lbl = elHtml('span', 'g-dd-lbl', cur ? fmt(cur.titleEn) + ' · ' + cur.count : 'Choose a chapter');
    btn.append(lbl, icon('expand_more', 'chev'));
    btn.onclick = e => { e.stopPropagation(); dd.classList.toggle('open'); };

    const menu = el('div', 'g-dd-menu');
    CHAPTERS.forEach(ch => {
      const o = el('button', 'g-dd-opt' + (ch.id === G.chapterId ? ' on' : ''));
      o.append(el('span', 'n', String(ch.count)));
      o.append(elHtml('span', 't', (ch.num != null ? ch.num + '. ' : '') + fmt(ch.titleEn)));
      if (ch.titleAr) o.append(elHtml('span', 's', fmt(ch.titleAr)));
      o.onclick = e => {
        e.stopPropagation();
        dd.classList.remove('open');
        if (ch.id === G.chapterId) return;
        G.chapterId = ch.id;
        savePrefs();
        resetRun();
      };
      menu.append(o);
    });
    dd.append(btn, menu);
    return dd;
  }

  /* clicking anywhere else (or Escape) closes an open chapter menu */
  document.addEventListener('click', () => {
    const open = document.querySelector('.g-dd.open');
    if (open) open.classList.remove('open');
  });

  /* ── one question ────────────────────────────────────────────── */
  function renderQuestion() {
    clearTimers();
    const step = G.queue[G.index];
    if (!step) return finish();

    G.checked = false;
    G.timeLeft = ROUND;

    hostEl.innerHTML = '';
    cardEl = el('div', 'g-card');

    cardEl.append(elHtml('div', 'g-src label-caps',
      fmt(step.courseTitle) + (step.sectionTitle ? ' · ' + fmt(step.sectionTitle) : '')));
    cardEl.append(elHtml('h2', 'g-q', fmt(step.q)));
    if (step.ar) {
      cardEl.append(el('div', 'g-ar', step.ar));
      if (step.arEn) cardEl.append(el('div', 'g-ar-sub', '“' + step.arEn + '”'));
    }

    const choicesEl = el('div', 'g-choices');
    const order = shuffle(step.choices.map((_, i) => i));
    const btns = order.map((origIdx, pos) => {
      const b = el('button', 'g-choice' + (mostlyArabic(step.choices[origIdx]) ? ' g-rtl' : ''));
      b.append(el('span', 'k', String(pos + 1)));
      b.append(elHtml('span', 'txt', fmt(step.choices[origIdx])));
      b.onclick = () => answer(step, order, btns, origIdx);
      choicesEl.append(b);
      return b;
    });
    cardEl.append(choicesEl);
    hostEl.append(cardEl);

    const keys = {};
    btns.forEach((b, i) => { if (i < 9) keys[String(i + 1)] = () => b.click(); });
    bindKeys(keys);

    paintHud();
    paintFuse(true);
    startTick();            // no-op while hidden; visibilitychange resumes it
    window.scrollTo(0, 0);
  }

  function answer(step, order, btns, chosen) {
    if (G.checked) return;
    G.checked = true;
    clearTimers();                       // the fuse stops the moment you commit

    const correct = chosen === step.correct;
    G.answered++;
    if (correct) G.score++;

    btns.forEach((b, pos) => {
      b.disabled = true;
      if (order[pos] === step.correct) b.classList.add('correct');
      else if (order[pos] === chosen) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    if (!correct) cardEl.classList.add('shake');

    const fb = el('div', 'g-fb ' + (correct ? 'good' : 'bad'));
    const h = el('div', 'h');
    h.append(el('span', null, correct ? '✅' : '❌'),
      el('span', null, correct ? 'Correct!' : 'Not quite'));
    fb.append(h);
    if (!correct) fb.append(elHtml('div', 'ans', 'Correct answer: ' + fmt(step.choices[step.correct])));
    if (step.why) fb.append(elHtml('div', 'why', fmt(step.why)));
    fb.append(el('span', 'tick', correct ? 'Moving to next question…' : 'Study the correct answer…'));
    cardEl.append(fb);

    paintHud();
    advTimer = setTimeout(advance, correct ? DELAY_RIGHT : DELAY_WRONG);
  }

  function advance() {
    advTimer = null;
    G.index++;
    if (G.limit && G.answered >= G.limit) return finish();
    if (G.index >= G.queue.length) return finish();
    renderQuestion();
  }

  function finish() {
    clearTimers();
    G.screen = 'done';
    render();
  }

  function boom() {
    clearTimers();
    G.screen = 'boom';
    render();
  }

  /* ── the countdown ───────────────────────────────────────────── */
  function tick() {
    if (G.checked) return;               // belt-and-braces: feedback freezes the fuse
    G.timeLeft--;
    if (G.timeLeft <= 0) { G.timeLeft = 0; paintFuse(false); return boom(); }
    paintFuse(false);
  }

  /* `reset` = a fresh question: snap the bar back to full with no
     transition, otherwise it would visibly rewind over a whole second. */
  function paintFuse(reset) {
    if (!fuseEl) return;
    const t = G.timeLeft;
    const pct = Math.max(0, (t / ROUND) * 100);

    if (reset) fuseEl.classList.add('noanim');
    fillEl.style.width = pct + '%';
    // keep the bomb inside the track: 0% → left edge, 100% → right edge minus its own width
    bombEl.style.left = 'calc(' + pct + '% - ' + (pct * 0.22).toFixed(2) + 'px)';
    if (reset) { void fuseEl.offsetWidth; fuseEl.classList.remove('noanim'); }

    bombEl.textContent = t <= ALERT_AT ? '💣' : t <= 10 ? '⏰' : '⏱️';
    fuseEl.classList.toggle('warn', t <= WARN_AT && t > CRIT_AT);
    fuseEl.classList.toggle('crit', t <= CRIT_AT);
    fuseEl.classList.toggle('alert', t <= ALERT_AT);
    alertEl.textContent = (t <= ALERT_AT && t > 0 && !G.checked)
      ? '💣 BOMB ALERT: ' + t + ' second' + (t === 1 ? '' : 's') + ' left! 💣' : '';
    if (cardEl) cardEl.classList.toggle('g-hot', t <= ALERT_AT && !G.checked);
  }

  function paintHud() {
    const n = total();
    qnumEl.textContent = 'Question ' + Math.min(G.answered + 1, n) + ' / ' + n;
    scoreEl.innerHTML = '<b>' + G.score + '</b> / ' + G.answered;
    leftEl.textContent = Math.max(0, n - G.answered) + ' left';
    progEl.style.width = (n ? (G.answered / n) * 100 : 0) + '%';
  }

  /* ── keyboard ────────────────────────────────────────────────── */
  let keyMap = {};
  function bindKeys(map) { keyMap = map; }
  function clearKeys() { keyMap = {}; }
  /* Never hijack a key the focused control already handles: Enter on the
     focused "Back to lessons" link must navigate, not restart the run —
     otherwise a keyboard-only player is trapped on the end screen. */
  function ownsKey(node, key) {
    if (!node || node.nodeType !== 1) return false;
    const tag = node.tagName;
    if (tag === 'TEXTAREA' || tag === 'INPUT' || tag === 'SELECT') return true;
    if (node.isContentEditable) return true;
    if (key !== 'Enter' && key !== ' ' && key !== 'Spacebar') return false;
    return tag === 'BUTTON' || (tag === 'A' && node.hasAttribute('href'));
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const open = document.querySelector('.g-dd.open');
      if (open) { open.classList.remove('open'); return; }
    }
    if (ownsKey(e.target, e.key)) return;
    const fn = keyMap[e.key];
    if (fn) { e.preventDefault(); fn(); }
  });

  /* leaving the tab mid-question would otherwise let a background interval
     quietly detonate — stop the clock unconditionally on the way out, and
     only re-arm it once we are back and actually on a live question.
     (Unconditional stop matters: a question rendered *while* hidden — the
     auto-advance after an answer still fires in the background — must not
     be left with a running fuse.) */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { stopTick(); return; }
    if (G.screen === 'play' && !G.checked) startTick();
  });

  /* ── boot ────────────────────────────────────────────────────── */
  /* Defaults are set first and every stored value is validated, so a
     hand-edited or corrupt `daram-game-v1` degrades to a normal run
     instead of throwing inside setTimeout and freezing on "Arming…". */
  function boot() {
    if (!CHAPTERS.length) { G.screen = 'error'; return render(); }
    G.chapterId = CHAPTERS[0].id;
    try {
      const prefs = loadPrefs();
      if (prefs && typeof prefs === 'object') {
        if (hasChapter(prefs.chapter)) G.chapterId = prefs.chapter;
        if (MODES.some(m => m.id === prefs.mode)) G.mode = prefs.mode;
        if (prefs.limit === null || LIMITS.indexOf(prefs.limit) >= 0) G.limit = prefs.limit;
      }
    } catch (e) { /* unreadable prefs — the defaults above stand */ }
    resetRun();
  }

  render();                 // loading frame first, so a slow font/data load shows something
  setTimeout(boot, 0);
})();
