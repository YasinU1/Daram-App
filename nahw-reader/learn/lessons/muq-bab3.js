/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقدمة · الباب الثالث في العامل والمعمول والإعراب (pp. 17–19) ──
   Authored from books/kubra-nahw/muqaddimah-bab3.js. Bank ids from chapterId muq-bab-3. */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'muq-bab-3',
  titleAr: 'الْبَابُ الثَّالِثُ فِي الْعَامِلِ وَالْمَعْمُولِ وَالْإِعْرَابِ',
  titleEn: 'The Governor, the Governed & Iʿrāb',
  pages: '17–19',
  sections: [

    /* ═══ 1. The governor ═══ */
    {
      id: 'amil',
      title: 'The governor — العامل',
      subtitle: 'What necessitates a grammatical state',
      matn: { src: 'DATA_BAB3', from: 1, to: 7, check: 'الْبَابُ' },
      steps: [
        { t: 'teach', title: 'Definition of the عامل',
          focus: [3, 4, 5],
          body: 'The عامل **necessitates a grammatical state** (يُوجِبُ حَالَةً) in another word: لَنْ in ﴿وَلَنْ نُشْرِكَ بِرَبِّنَا أَحَدًا﴾ forces نُشْرِكَ into naṣb. Who governs:',
          points: [
            '**الأفعال** — ALL of them,',
            '**الحروف** — some of them,',
            '**الأسماء** — some of them.',
          ] },

        { t: 'teach', title: 'The non-governor — غير العامل',
          focus: [6, 7],
          body: 'غير العامل necessitates nothing: مَا in ﴿مَا أَشْرَكْنَا﴾ changes no ending. It is:',
          points: [
            'the non-governing **حروف** and **أسماء**,',
            '**الجملة** — all of it,',
            '**شبه الجملة** — all of it.',
          ],
          after: 'The non-governor is also called **عَاطِل** and **مُهْمَل**.' },

        { t: 'mcq', q: 'The عامل is defined as…',
          choices: ['what necessitates a grammatical state', 'what accepts a grammatical state', 'what appears at the end of a word', 'any particle'],
          correct: 0,
          why: 'ما يوجب حالة — it CAUSES the state. What ACCEPTS the state is the maʿmūl (next section).' },

        { t: 'mcq', q: 'Why is لَنْ in ﴿وَلَنْ نُشْرِكَ﴾ a عامل?',
          choices: ['It forces نُشْرِكَ into naṣb — it necessitated a state', 'It negates the future', 'It precedes a verb', 'It is a particle'],
          correct: 0,
          why: 'Being a particle or preceding a verb isn’t enough — ما precedes أَشْرَكْنَا and governs nothing. لن visibly changed the verb’s ending.' },

        { t: 'mcq', q: 'Can a جملة or a شبه جملة ever govern?',
          choices: ['No — never; all of them are غير عامل', 'Yes — sometimes', 'Only the jumlah', 'Only the shibh jumlah'],
          correct: 0,
          why: 'The grid on p.17: sentences and quasi-sentences are ✗ under ʿāmil — governing belongs to (all) verbs and (some) nouns and particles.' },

        { t: 'mcq', q: 'Which class governs in ALL of its members?',
          choices: ['الأفعال', 'الحروف', 'الأسماء', 'الجمل'],
          correct: 0,
          why: 'الأفعال كلها — every verb governs (at minimum its fāʿil). Particles and nouns: only some.' },

        { t: 'bank', id: 'muq-bab-3--explain-line--explain-the-following-line-of-th-n' },
      ],
    },

    /* ═══ 2. The governed ═══ */
    {
      id: 'mamul',
      title: 'The governed — المعمول',
      subtitle: 'What accepts a state and takes iʿrāb',
      matn: { src: 'DATA_BAB3', from: 8, to: 14, check: 'الْفَصْلُ' },
      steps: [
        { t: 'teach', title: 'Definition of the معمول',
          focus: [8, 9, 12],
          body: 'The معمول **accepts a state and has iʿrāb** (يَقْبَلُ حَالَةً وَيَكُونُ لَهُ إِعْرَابٌ): صَاحِب in ﴿مَا ضَلَّ صَاحِبُكُمْ﴾ — ضَلَّ governs it, it accepts rafʿ, so it is maʿmūl. Who is governed:',
          points: [
            '**الأسماء** — all, EXCEPT أسماء الأفعال (verbal-nouns),',
            '**الفعل** — the muḍāriʿ, and the māḍī which a **نَاصِب** or **جَازِم** has entered,',
            '**الجملة** — some; **شبه الجملة** — all.',
          ] },

        { t: 'teach', title: 'The non-governed — غير المعمول',
          focus: [13, 14],
          body: 'غير المعمول accepts no state and carries no iʿrāb — like مَا itself in ﴿مَا ضَلَّ صَاحِبُكُمْ﴾. It is:',
          points: [
            '**أسماء الأفعال**, and the māḍī with no nāṣib/jāzim,',
            '**الحروف** — ALL of them,',
            '**الجملة** — some.',
          ] },

        { t: 'mcq', q: 'Which class is NEVER معمول?',
          choices: ['الحروف', 'الأسماء', 'شبه الجملة', 'الفعل المضارع'],
          correct: 0,
          why: 'Particles accept no state and carry no iʿrāb — الحروف كلها غير معمول. (Nouns: all governed except asmāʾ al-fiʿl; shibh al-jumlah: all governed.)' },

        { t: 'mcq', q: 'Which nouns are excluded from being معمول?',
          choices: ['أسماء الأفعال', 'the definite nouns', 'the muḍāf nouns', 'none — every noun is governed'],
          correct: 0,
          why: 'الأسماء كلها إلا أسماء الفعل — verb-nouns like صَهْ sit outside governance.' },

        { t: 'mcq', q: 'Why is صَاحِبُكُمْ in ﴿مَا ضَلَّ صَاحِبُكُمْ﴾ a معمول?',
          choices: ['It accepted a state (rafʿ as fāʿil of ضلّ) and carries iʿrāb', 'It follows a negation', 'It is definite', 'It is a musnad'],
          correct: 0,
          why: 'Both halves of the definition: accepts a ḥālah + has iʿrāb — the ḍammah of rafʿ brought by ضلّ.' },

        { t: 'mcq', q: 'Per the matn, which VERB is معمول?',
          choices: ['the muḍāriʿ, and the māḍī entered by a nāṣib or jāzim', 'every verb', 'no verb at all', 'only the amr'],
          correct: 0,
          why: 'الفعل المضارع والماضي الذي دخله ناصب أو جازم — hence the grid: الفعل معمولٌ بعضُها. A bare māḍī is ghayr maʿmūl.' },

        { t: 'bank', id: 'muq-bab-3--explain-line--explain-the-following-line-of-th-r' },
        { t: 'bank', id: 'muq-bab-3--compare--explain-with-examples-the-differ-v' },
        { t: 'bank', id: 'muq-bab-3--classify-tarkib--for-the-sentence-below-a-classif-13' },
      ],
    },

    /* ═══ 3. Iʿrāb ═══ */
    {
      id: 'irab',
      title: 'Iʿrāb & its three kinds',
      subtitle: 'لفظي · تقديري · محلي',
      matn: { src: 'DATA_BAB3', from: 15, to: 25, check: 'الْفَصْلُ' },
      steps: [
        { t: 'teach', title: 'What is الإعراب?',
          focus: [15, 16],
          points: [
            '**أَثَر** — an effect (like ḍammah, fatḥah, kasrah…),',
            '**يَجْلِبُهُ الْعَامِلُ** — caused by the governor,',
            '**فِي آخِرِ الْكَلِمَةِ** — landing on the word’s final letter.',
          ],
          after: 'Fāʾidah: iʿrāb has three benefits — **الإظهار** (showing meaning through the wording), **إزالة الالتباس** (removing ambiguity), **التحسين** (beautifying the wording).' },

        { t: 'teach', title: 'Its three kinds',
          focus: [19, 20, 21, 22, 23, 24, 25],
          points: [
            '**اللفظي** (overt) — appears in the utterance: the ḍammah and kasrah heard on الْمُؤْمِنُ and الْخَيْرِ.',
            '**التقديري** (estimated) — does not appear due to an impediment (لِمَانِعٍ): the alif of الْفَتَى blocks the ḍammah.',
            '**المحلي** (positional) — does not appear because the word cannot bear the sign of iʿrāb (لِعَدَمِ تَحَمُّلِ الْكَلِمَةِ عَلَامَةَ الْإِعْرَابِ): built words like تَسْعَيْنَ، أَنْتُنَّ، إِلَيْهِ.',
          ],
          after: 'One effect, three visibilities: heard · blocked by a مانع · judged by position.' },

        { t: 'mcq', q: 'Complete the definition: iʿrāb is an effect brought by ____ at ____ .',
          choices: ['the governor · the end of the word', 'the speaker · the start of the word', 'the tense · the middle of the word', 'the noun · the end of the sentence'],
          correct: 0,
          why: 'أثر يجلبه العامل في آخر الكلمة — governor as cause, word-ending as location.' },

        { t: 'mcq', q: 'يَسْعَى الْفَتَى إِلَى الْهُدَى — the iʿrāb of الْفَتَى is…',
          choices: ['تقديري — a ḍammah estimated on the alif, blocked by a مانع', 'لفظي', 'محلي', 'no iʿrāb at all'],
          correct: 0,
          why: 'الفتى IS a fully declinable noun, but the final alif can’t voice the ḍammah — so it is taqdīrī (estimated).' },

        { t: 'mcq', q: 'And in تَسْعَيْنَ (you-fem strive)?',
          choices: ['محلي — the built word cannot bear an iʿrāb sign', 'تقديري — an impediment hides it', 'لفظي', 'it is a ḥarf'],
          correct: 0,
          why: 'Built (mabnī) forms like تسعَيْن، أنتنّ، إليه cannot carry the sign at all — the iʿrāb is judged by position: maḥallī.' },

        { t: 'mcq', q: 'The real difference between تقديري and محلي?',
          choices: ['taqdīrī: the word could take signs but an impediment blocks this ending · maḥallī: the word can never bear a sign', 'taqdīrī is for verbs, maḥallī for nouns', 'taqdīrī is optional, maḥallī obligatory', 'no difference'],
          correct: 0,
          why: 'Both are invisible; the reason differs — مانع (like the alif of الفتى) vs عدم تحمّل الكلمة العلامة (built words).' },

        { t: 'mcq', q: 'يَجْتَهِدُ الْمُؤْمِنُ فِي الْخَيْرِ — the iʿrāb heard on الْمُؤْمِنُ and الْخَيْرِ is…',
          choices: ['لفظي — ḍammah and kasrah appear in the utterance', 'تقديري', 'محلي', 'mixed'],
          correct: 0,
          why: 'Nothing blocks the endings: the ḍammah of the fāʿil and kasrah of the majrūr are fully audible — lafẓī.' },

        { t: 'bank', id: 'muq-bab-3--explain-line--explain-the-following-line-of-th-p' },
        { t: 'bank', id: 'muq-bab-3--state-types--state-the-divisions-aqs-m-of-i-r-t' },
        { t: 'bank', id: 'muq-bab-3--compare--explain-with-examples-the-differ-x' },
        { t: 'bank', id: 'muq-bab-3--explain-statement--explain-the-following-statement--z' },
        { t: 'bank', id: 'muq-bab-3--define-types-examples--what-is-i-r-b-what-are-its-types-11' },
        { t: 'bank', id: 'muq-bab-3--classify-tarkib--for-the-sentence-below-a-classif-15' },
      ],
    },
  ],
});
