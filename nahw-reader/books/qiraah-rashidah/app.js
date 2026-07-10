(() => {
  "use strict";

  const PROGRESS_KEY = "arabicReaderProgress";
  const SESSION_PREFIX = "arabicReaderSession:";
  const QUESTIONS_PER_QUIZ = 5;

  // ---------- generic helpers ----------

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Case-insensitive, harakat-insensitive comparison: strips Arabic
  // diacritics/tatweel and punctuation, lowercases, collapses whitespace.
  function normalizeForGrading(str) {
    return (str || "")
      .trim()
      .toLowerCase()
      .replace(/[ً-ْٖ-ٰٟۖ-ۭـ]/g, "")
      .replace(/[.,!?؛،؟"'’ʼ()\-]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function showError(message) {
    const el = document.getElementById("loadError");
    if (!el) return;
    el.textContent = message;
    el.hidden = false;
  }

  function qs(name) {
    return new URLSearchParams(location.search).get(name);
  }

  function goTo(url) {
    location.href = url;
  }

  function redirectHome() {
    location.replace("book.html");
  }

  // ---------- durable progress (localStorage) ----------

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      /* localStorage unavailable — progress just won't persist */
    }
  }

  function getChapterProgress(progress, id) {
    return progress[id] || { paragraphIndex: 0, completed: false };
  }

  function setChapterProgress(id, data) {
    const progress = loadProgress();
    progress[id] = data;
    saveProgress(progress);
  }

  // ---------- per-run tally (sessionStorage) ----------

  function getSession(chapterId) {
    try {
      const raw = sessionStorage.getItem(SESSION_PREFIX + chapterId);
      return raw ? JSON.parse(raw) : { score: 0, total: 0, missed: [] };
    } catch {
      return { score: 0, total: 0, missed: [] };
    }
  }

  function saveSession(chapterId, session) {
    try {
      sessionStorage.setItem(SESSION_PREFIX + chapterId, JSON.stringify(session));
    } catch {
      /* sessionStorage unavailable — score recap just won't show */
    }
  }

  function clearSession(chapterId) {
    try {
      sessionStorage.removeItem(SESSION_PREFIX + chapterId);
    } catch {
      /* ignore */
    }
  }

  // ---------- story parsing ----------

  function parseStory(rawText) {
    const blocks = rawText
      .replace(/\r\n/g, "\n")
      .split(/\n\s*\n/)
      .map((b) => b.trim())
      .filter((b) => b.length > 0);

    let title = "";
    let paragraphs = blocks;

    if (blocks.length > 0) {
      const lines = blocks[0].split("\n").map((l) => l.trim()).filter(Boolean);
      const numberMatch = lines[0] && lines[0].match(/^\(\d+\)$/);
      if (numberMatch && lines.length > 1) {
        title = lines.slice(1).join(" ");
        paragraphs = blocks.slice(1);
      } else if (lines.length === 1 && lines[0].length < 60) {
        title = lines[0];
        paragraphs = blocks.slice(1);
      }
    }

    return { title, paragraphs };
  }

  // ---------- phrase highlighting ----------

  function buildPhraseIndex(phrases) {
    const map = new Map();
    for (const p of phrases) {
      const phrase = (p.phrase || "").trim();
      if (phrase) map.set(phrase, p.translation || "");
    }
    const sorted = Array.from(map.keys()).sort((a, b) => b.length - a.length);
    const regex = sorted.length
      ? new RegExp(sorted.map(escapeRegExp).join("|"), "g")
      : null;
    return { map, regex };
  }

  function renderParagraphHtml(text, regex, map) {
    if (!regex) return escapeHtml(text);
    const re = new RegExp(regex.source, "g");
    let html = "";
    let lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > lastIndex) html += escapeHtml(text.slice(lastIndex, m.index));
      const phrase = m[0];
      const translation = map.get(phrase) || "";
      html += `<span class="phrase" tabindex="0" data-translation="${escapeHtml(translation)}">${escapeHtml(phrase)}</span>`;
      lastIndex = m.index + phrase.length;
      if (re.lastIndex === m.index) re.lastIndex++;
    }
    html += escapeHtml(text.slice(lastIndex));
    return html;
  }

  function phrasesInParagraph(text, phraseIndex) {
    const found = new Map();
    if (phraseIndex.regex) {
      const re = new RegExp(phraseIndex.regex.source, "g");
      let m;
      while ((m = re.exec(text)) !== null) {
        const phrase = m[0];
        if (!found.has(phrase)) found.set(phrase, phraseIndex.map.get(phrase) || "");
        if (re.lastIndex === m.index) re.lastIndex++;
      }
    }
    return Array.from(found, ([phrase, translation]) => ({ phrase, translation }));
  }

  // ---------- tooltip (read page) ----------

  function setupTooltip(container, tooltip) {
    let activePhrase = null;

    function position(target) {
      const rect = target.getBoundingClientRect();
      tooltip.style.left = "0px";
      tooltip.style.top = "0px";
      tooltip.hidden = false;
      const tw = tooltip.offsetWidth;
      const th = tooltip.offsetHeight;
      let left = rect.left + rect.width / 2 - tw / 2;
      left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
      let top = rect.top - th - 10;
      if (top < 8) top = rect.bottom + 10;
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    }

    function show(target) {
      const translation = target.getAttribute("data-translation");
      if (!translation) return;
      tooltip.textContent = translation;
      target.classList.add("revealed");
      position(target);
    }

    function hide(target) {
      if (target) target.classList.remove("revealed");
      tooltip.hidden = true;
    }

    container.addEventListener("mouseover", (e) => {
      const el = e.target.closest(".phrase");
      if (el) show(el);
    });
    container.addEventListener("mouseout", (e) => {
      const el = e.target.closest(".phrase");
      if (el) hide(el);
    });
    container.addEventListener("focusin", (e) => {
      const el = e.target.closest(".phrase");
      if (el) show(el);
    });
    container.addEventListener("focusout", (e) => {
      const el = e.target.closest(".phrase");
      if (el) hide(el);
    });
    container.addEventListener("click", (e) => {
      const el = e.target.closest(".phrase");
      if (!el) return;
      if (activePhrase && activePhrase !== el) hide(activePhrase);
      if (activePhrase === el && !tooltip.hidden) {
        hide(el);
        activePhrase = null;
      } else {
        show(el);
        activePhrase = el;
      }
    });
    document.addEventListener("click", (e) => {
      if (activePhrase && !e.target.closest(".phrase")) {
        hide(activePhrase);
        activePhrase = null;
      }
    });
  }

  // ---------- data loading ----------

  async function fetchManifest() {
    const res = await fetch("manifest.json");
    if (!res.ok) throw new Error("Could not load manifest.json");
    const manifest = await res.json();
    if (!Array.isArray(manifest) || manifest.length === 0) {
      throw new Error("No stories found in manifest.json.");
    }
    return manifest;
  }

  async function loadChapterData(path) {
    const [storyRes, phrasesRes] = await Promise.all([
      fetch(`${path}/story.txt`),
      fetch(`${path}/phrases_translation_words_separate.json`),
    ]);
    if (!storyRes.ok) throw new Error(`Could not load ${path}/story.txt`);
    if (!phrasesRes.ok) {
      throw new Error(`Could not load ${path}/phrases_translation_words_separate.json`);
    }

    const rawText = await storyRes.text();
    const phrases = await phrasesRes.json();
    const parsed = parseStory(rawText);
    const phraseIndex = buildPhraseIndex(phrases);

    // arabic_words/english_words are each independently split from the phrase
    // and translation (not paired word-for-word), so joining either list back
    // together always exactly reconstructs that language's natural sentence —
    // this is what powers the quiz's tap-to-build-the-sentence UI. A phrase
    // missing these arrays just falls back to a free-text quiz question.
    const wordsMap = new Map();
    for (const entry of phrases) {
      if (entry.phrase && Array.isArray(entry.arabic_words) && Array.isArray(entry.english_words)) {
        wordsMap.set(entry.phrase.trim(), {
          arabicWords: entry.arabic_words,
          englishWords: entry.english_words,
        });
      }
    }

    return { parsed, phraseIndex, wordsMap };
  }

  function buildWordPools(wordsMap) {
    const en = [];
    const ar = [];
    for (const { arabicWords, englishWords } of wordsMap.values()) {
      en.push(...englishWords);
      ar.push(...arabicWords);
    }
    return { en, ar };
  }

  // Picks distractor words (in the same language as the correct answer) that
  // don't textually collide with any correct word (ignoring trailing
  // punctuation, e.g. "father" vs "father,"), so no two tiles ever look
  // identical but grade differently.
  function pickDistractors(pool, correctWords, count) {
    const normalize = (w) => w.toLowerCase().replace(/[.,!?؛،؟"'()]+$/g, "");
    const correctSet = new Set(correctWords.map(normalize));
    const seen = new Set();
    const candidates = [];
    for (const word of pool) {
      const key = normalize(word);
      if (correctSet.has(key) || seen.has(key)) continue;
      seen.add(key);
      candidates.push(word);
    }
    return shuffle(candidates).slice(0, count);
  }

  function isChapterLocked(manifest, progress, index) {
    return index > 0 && !getChapterProgress(progress, manifest[index - 1].id).completed;
  }

  // ---------- path page ----------

  async function initPathPage() {
    let manifest;
    try {
      manifest = await fetchManifest();
    } catch (err) {
      showError(
        err.message === "Could not load manifest.json"
          ? "Could not load manifest.json. If you opened this file directly in your browser, " +
            "serve the nahw-reader folder from a local server instead (any static server works, " +
            "e.g. `python -m http.server` or `npx serve`) and open the shown URL."
          : err.message
      );
      return;
    }

    const progress = loadProgress();
    const pathList = document.getElementById("pathList");
    pathList.innerHTML = "";

    manifest.forEach((entry, i) => {
      const cp = getChapterProgress(progress, entry.id);
      const locked = isChapterLocked(manifest, progress, i);
      const status = locked ? "locked" : cp.completed ? "completed" : "available";

      const node = document.createElement("button");
      node.type = "button";
      node.className = `node ${status}`;
      node.disabled = locked;

      const circleContent = locked ? "🔒" : cp.completed ? "✓" : String(i + 1);
      let statusText = "Locked";
      if (status === "completed") statusText = "Completed";
      else if (status === "available") {
        statusText = cp.paragraphIndex > 0 ? `Continue · paragraph ${cp.paragraphIndex + 1}` : "Start";
      }

      node.innerHTML = `
        <span class="node-circle">${circleContent}</span>
        <span class="node-label">
          <span class="node-title">${escapeHtml(entry.title || entry.id)}</span>
          <span class="node-status">${escapeHtml(statusText)}</span>
        </span>`;

      if (!locked) {
        node.addEventListener("click", () => {
          const startParagraph = cp.completed ? 0 : cp.paragraphIndex;
          goTo(`read.html?chapter=${encodeURIComponent(entry.id)}&paragraph=${startParagraph}`);
        });
      }
      pathList.appendChild(node);
    });
  }

  // ---------- read page ----------

  async function initReadPage() {
    const chapterId = qs("chapter");
    const requestedParagraph = parseInt(qs("paragraph") || "0", 10) || 0;

    let manifest;
    try {
      manifest = await fetchManifest();
    } catch (err) {
      showError(err.message);
      return;
    }

    const chapterIndex = manifest.findIndex((c) => c.id === chapterId);
    if (!chapterId || chapterIndex === -1) {
      redirectHome();
      return;
    }
    const entry = manifest[chapterIndex];

    const progress = loadProgress();
    if (isChapterLocked(manifest, progress, chapterIndex)) {
      redirectHome();
      return;
    }

    let data;
    try {
      data = await loadChapterData(entry.path);
    } catch (err) {
      showError(err.message || "Failed to load this story.");
      return;
    }

    const paragraphs = data.parsed.paragraphs;
    if (!paragraphs.length) {
      showError("This story has no paragraphs to read.");
      return;
    }

    const cp = getChapterProgress(progress, chapterId);
    let paragraphIdx = Math.min(Math.max(requestedParagraph, 0), paragraphs.length - 1);
    if (!cp.completed && paragraphIdx > cp.paragraphIndex) paragraphIdx = cp.paragraphIndex;

    if (paragraphIdx === 0) clearSession(chapterId);

    const lessonProgressFill = document.getElementById("lessonProgressFill");
    lessonProgressFill.style.width = `${(paragraphIdx / paragraphs.length) * 100}%`;

    const storyTitle = document.getElementById("storyTitle");
    const storyContainer = document.getElementById("storyContainer");
    storyTitle.innerHTML =
      paragraphIdx === 0 && data.parsed.title
        ? renderParagraphHtml(data.parsed.title, data.phraseIndex.regex, data.phraseIndex.map)
        : "";
    storyContainer.innerHTML = `<p>${renderParagraphHtml(
      paragraphs[paragraphIdx],
      data.phraseIndex.regex,
      data.phraseIndex.map
    )}</p>`;

    setupTooltip(document.getElementById("readStep"), document.getElementById("tooltip"));

    document.getElementById("readStep").hidden = false;

    const phrases = phrasesInParagraph(paragraphs[paragraphIdx], data.phraseIndex);

    document.getElementById("continueBtn").addEventListener("click", () => {
      if (phrases.length === 0) {
        advanceWithoutQuiz(chapterId, paragraphIdx, paragraphs.length);
      } else {
        goTo(`quiz.html?chapter=${encodeURIComponent(chapterId)}&paragraph=${paragraphIdx}`);
      }
    });
  }

  function advanceWithoutQuiz(chapterId, paragraphIdx, totalParagraphs) {
    const nextIndex = paragraphIdx + 1;
    const isLast = nextIndex >= totalParagraphs;
    setChapterProgress(chapterId, {
      paragraphIndex: isLast ? totalParagraphs : nextIndex,
      completed: isLast,
    });
    if (isLast) {
      goTo(`complete.html?chapter=${encodeURIComponent(chapterId)}`);
    } else {
      goTo(`read.html?chapter=${encodeURIComponent(chapterId)}&paragraph=${nextIndex}`);
    }
  }

  // ---------- quiz page ----------

  async function initQuizPage() {
    const chapterId = qs("chapter");
    const requestedParagraph = parseInt(qs("paragraph") || "0", 10) || 0;

    let manifest;
    try {
      manifest = await fetchManifest();
    } catch (err) {
      showError(err.message);
      return;
    }

    const chapterIndex = manifest.findIndex((c) => c.id === chapterId);
    if (!chapterId || chapterIndex === -1) {
      redirectHome();
      return;
    }
    const entry = manifest[chapterIndex];

    const progress = loadProgress();
    if (isChapterLocked(manifest, progress, chapterIndex)) {
      redirectHome();
      return;
    }

    let data;
    try {
      data = await loadChapterData(entry.path);
    } catch (err) {
      showError(err.message || "Failed to load this story.");
      return;
    }

    const paragraphs = data.parsed.paragraphs;
    const cp = getChapterProgress(progress, chapterId);
    let paragraphIdx = Math.min(Math.max(requestedParagraph, 0), paragraphs.length - 1);
    if (!cp.completed && paragraphIdx > cp.paragraphIndex) paragraphIdx = cp.paragraphIndex;

    const phrases = phrasesInParagraph(paragraphs[paragraphIdx], data.phraseIndex);
    if (phrases.length === 0) {
      advanceWithoutQuiz(chapterId, paragraphIdx, paragraphs.length);
      return;
    }

    const lessonProgressFill = document.getElementById("lessonProgressFill");
    lessonProgressFill.style.width = `${(paragraphIdx / paragraphs.length) * 100}%`;

    const wordPools = buildWordPools(data.wordsMap);

    const questions = shuffle(phrases)
      .slice(0, QUESTIONS_PER_QUIZ)
      .map((p) => ({
        phrase: p.phrase,
        translation: p.translation,
        direction: Math.random() < 0.5 ? "ar2en" : "en2ar",
        words: data.wordsMap.get(p.phrase) || null,
      }));

    const quiz = { qIndex: 0, score: 0, missed: [], awaitingNext: false };
    let tileState = null; // { field, correctWords, tiles, placedOrder } when using the tile builder

    const quizProgressText = document.getElementById("quizProgressText");
    const quizDirection = document.getElementById("quizDirection");
    const quizPrompt = document.getElementById("quizPrompt");
    const tileBuilder = document.getElementById("tileBuilder");
    const answerBuild = document.getElementById("answerBuild");
    const wordBank = document.getElementById("wordBank");
    const quizInput = document.getElementById("quizInput");
    const checkBtn = document.getElementById("checkBtn");
    const quizAnswer = document.getElementById("quizAnswer");
    const feedbackText = document.getElementById("feedbackText");
    const correctAnswerText = document.getElementById("correctAnswerText");
    const userAnswerText = document.getElementById("userAnswerText");
    const nextQuestionBtn = document.getElementById("nextQuestionBtn");

    document.getElementById("quizStep").hidden = false;

    function renderTiles() {
      wordBank.innerHTML = "";
      for (const tile of tileState.tiles) {
        if (tileState.placedOrder.includes(tile.id)) continue;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "tile";
        btn.textContent = tile.text;
        btn.addEventListener("click", () => {
          tileState.placedOrder.push(tile.id);
          renderTiles();
        });
        wordBank.appendChild(btn);
      }

      answerBuild.innerHTML = "";
      if (tileState.placedOrder.length === 0) {
        const placeholder = document.createElement("span");
        placeholder.id = "answerPlaceholder";
        placeholder.className = "answer-placeholder";
        placeholder.textContent = "Tap words below to build your answer";
        answerBuild.appendChild(placeholder);
      } else {
        for (const id of tileState.placedOrder) {
          const tile = tileState.tiles.find((t) => t.id === id);
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "tile placed";
          btn.textContent = tile.text;
          btn.addEventListener("click", () => {
            tileState.placedOrder = tileState.placedOrder.filter((x) => x !== id);
            renderTiles();
          });
          answerBuild.appendChild(btn);
        }
      }
    }

    function setupTileQuestion(q) {
      const field = q.direction === "ar2en" ? "en" : "ar";
      const correctWords = field === "en" ? q.words.englishWords : q.words.arabicWords;
      const pool = field === "en" ? wordPools.en : wordPools.ar;
      const distractors = pickDistractors(pool, correctWords, Math.min(4, correctWords.length + 1));

      const tiles = shuffle([
        ...correctWords.map((text, i) => ({ id: `c${i}`, text })),
        ...distractors.map((text, i) => ({ id: `d${i}`, text })),
      ]);

      tileState = { field, correctWords, tiles, placedOrder: [] };
      answerBuild.setAttribute("dir", field === "ar" ? "rtl" : "ltr");
      wordBank.setAttribute("dir", field === "ar" ? "rtl" : "ltr");
      renderTiles();
    }

    function renderQuestion() {
      const q = questions[quiz.qIndex];
      quizProgressText.textContent = `Question ${quiz.qIndex + 1} of ${questions.length}`;

      quizAnswer.hidden = true;
      checkBtn.hidden = false;

      if (q.direction === "ar2en") {
        quizDirection.textContent = "Translate into English";
        quizPrompt.setAttribute("dir", "rtl");
        quizPrompt.setAttribute("lang", "ar");
        quizPrompt.textContent = q.phrase;
      } else {
        quizDirection.textContent = "Translate into Arabic";
        quizPrompt.setAttribute("dir", "ltr");
        quizPrompt.removeAttribute("lang");
        quizPrompt.textContent = q.translation;
      }

      if (q.words) {
        tileBuilder.hidden = false;
        quizInput.hidden = true;
        setupTileQuestion(q);
      } else {
        tileBuilder.hidden = true;
        quizInput.hidden = false;
        quizInput.value = "";
        quizInput.disabled = false;
        quizInput.setAttribute("dir", q.direction === "ar2en" ? "ltr" : "rtl");
        quizInput.focus();
      }

      quiz.awaitingNext = false;
    }

    function revealAnswer() {
      const q = questions[quiz.qIndex];
      let isCorrect;
      let userAnswerDisplay;

      if (q.words) {
        isCorrect =
          tileState.placedOrder.length === tileState.correctWords.length &&
          tileState.placedOrder.every((id, i) => id === `c${i}`);
        userAnswerDisplay = tileState.placedOrder
          .map((id) => tileState.tiles.find((t) => t.id === id).text)
          .join(" ");
        answerBuild.querySelectorAll(".tile").forEach((btn, i) => {
          btn.classList.add(tileState.placedOrder[i] === `c${i}` ? "correct-tile" : "incorrect-tile");
        });
        for (const btn of [...wordBank.children, ...answerBuild.children]) {
          btn.disabled = true;
        }
      } else {
        const userAnswer = quizInput.value.trim();
        const correct = q.direction === "ar2en" ? q.translation : q.phrase;
        isCorrect = normalizeForGrading(userAnswer) === normalizeForGrading(correct);
        userAnswerDisplay = userAnswer;
        quizInput.disabled = true;
      }

      // Derive the displayed "correct answer" from the same tile sequence
      // that's graded (rather than always trusting q.translation/q.phrase),
      // so the two can never disagree even if a story's word arrays don't
      // perfectly reconstruct the curated text.
      const correct = q.words
        ? tileState.correctWords.join(" ")
        : q.direction === "ar2en"
          ? q.translation
          : q.phrase;

      feedbackText.textContent = isCorrect ? "Correct!" : "Not quite";
      feedbackText.className = `feedback-text ${isCorrect ? "correct" : "incorrect"}`;

      const userAnswerLang = q.words ? tileState.field : q.direction === "ar2en" ? "en" : "ar";

      correctAnswerText.textContent = correct;
      correctAnswerText.setAttribute("dir", q.direction === "ar2en" ? "ltr" : "rtl");
      userAnswerText.textContent = userAnswerDisplay || "(empty)";
      userAnswerText.setAttribute("dir", userAnswerLang === "ar" ? "rtl" : "ltr");

      quizAnswer.hidden = false;
      checkBtn.hidden = true;
      quiz.awaitingNext = true;

      if (isCorrect) quiz.score++;
      else quiz.missed.push(q);

      nextQuestionBtn.focus();
    }

    function finishQuiz() {
      const session = getSession(chapterId);
      session.score += quiz.score;
      session.total += questions.length;
      session.missed.push(...quiz.missed);
      saveSession(chapterId, session);

      const nextIndex = paragraphIdx + 1;
      const isLast = nextIndex >= paragraphs.length;
      setChapterProgress(chapterId, {
        paragraphIndex: isLast ? paragraphs.length : nextIndex,
        completed: isLast,
      });

      if (isLast) {
        goTo(`complete.html?chapter=${encodeURIComponent(chapterId)}`);
      } else {
        goTo(`read.html?chapter=${encodeURIComponent(chapterId)}&paragraph=${nextIndex}`);
      }
    }

    checkBtn.addEventListener("click", () => {
      if (quiz.awaitingNext) return;
      revealAnswer();
    });

    quizInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (!quiz.awaitingNext) revealAnswer();
      }
    });

    nextQuestionBtn.addEventListener("click", () => {
      if (!quiz.awaitingNext) return;
      quiz.qIndex++;
      if (quiz.qIndex >= questions.length) {
        finishQuiz();
      } else {
        renderQuestion();
      }
    });

    renderQuestion();
  }

  // ---------- complete page ----------

  async function initCompletePage() {
    const chapterId = qs("chapter");
    if (!chapterId) {
      redirectHome();
      return;
    }

    let manifest;
    try {
      manifest = await fetchManifest();
    } catch (err) {
      showError(err.message);
      return;
    }

    const entry = manifest.find((c) => c.id === chapterId);
    document.getElementById("chapterCompleteTitle").textContent = entry
      ? `${entry.title || entry.id} — complete!`
      : "Chapter complete!";

    const session = getSession(chapterId);
    const scoreText = document.getElementById("chapterScoreText");
    scoreText.textContent =
      session.total > 0 ? `Score: ${session.score} / ${session.total}` : "You've completed this chapter.";

    const missedList = document.getElementById("chapterMissedList");
    if (!session.missed.length) {
      missedList.innerHTML = session.total > 0 ? "<p>Great job — no missed phrases!</p>" : "";
    } else {
      missedList.innerHTML =
        "<h3>Review these:</h3>" +
        session.missed
          .map(
            (q) =>
              `<div class="missed-item"><span class="ar" lang="ar">${escapeHtml(
                q.phrase
              )}</span><span class="en">${escapeHtml(q.translation)}</span></div>`
          )
          .join("");
    }

    clearSession(chapterId);
    document.getElementById("chapterCompleteStep").hidden = false;
  }

  // ---------- dispatch ----------

  const page = document.body.dataset.page;
  if (page === "path") initPathPage();
  else if (page === "read") initReadPage();
  else if (page === "quiz") initQuizPage();
  else if (page === "complete") initCompletePage();
})();
