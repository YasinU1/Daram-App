/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · المقدمة (p. 22) ──
   The five mabādiʾ that open Aim One. Authored from books/kubra-nahw/maqsad1-muq.js.
   Bank ids from chapterId m1-muq. */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-muq',
  titleAr: 'الْمَقْصَدُ الْأَوَّلُ · الْمُقَدِّمَةُ',
  titleEn: 'Aim One — the five mabādiʾ',
  pages: '22',
  sections: [

    /* ═══ 1. The five principles ═══ */
    {
      id: 'mabadi',
      title: 'The five principles',
      subtitle: 'خمسة مبادئ — who governs, who never does',
      matn: { src: 'DATA_M1_MUQ', from: 1, to: 8, check: 'وَفِيهِ' },
      steps: [
        { t: 'teach', title: 'Where you are in the book',
          focus: [1, 2, 3],
          body: 'Aim One — an introduction + four chapters + a conclusion — is about **العامل**, the governor. Its introduction compresses everything into five principles (مَبَادِئ). The four chapters then take the governing classes one by one: الفعل، الحرف، الاسم، العامل المعنوي.' },

        { t: 'teach', title: 'The five mabādiʾ',
          focus: [4, 5, 6, 7, 8],
          points: [
            '**١** — الأفعال **كلها** عاملة: every verb governs.',
            '**٢ · ٣** — الحروف and الأسماء: **بعضها** عاملة وبعضها غير عاملة — some govern, some don’t.',
            '**٤ · ٥** — الجملة and شبه الجملة: **كلها** غير عاملة — they never govern.',
          ],
          after: 'Memorise the shape: **all · some · some · none · none.**' },

        { t: 'mcq', q: 'Which class governs in ALL its members?',
          choices: ['الأفعال', 'الحروف', 'الأسماء', 'شبه الجملة'],
          correct: 0,
          why: 'الأفعال كلها عاملة — the only class with no non-governing member. Particles and nouns split; sentences and quasi-sentences never govern.' },

        { t: 'mcq', q: 'The sentence (الجملة) as a governor is…',
          choices: ['never a governor — كلها غير عاملة', 'sometimes a governor', 'always a governor', 'a governor only when verbal'],
          correct: 0,
          why: 'Fourth principle: the jumlah — nominal or verbal — never governs. Governing belongs to single words.' },

        { t: 'mcq', q: 'Which pair correctly matches the mabādiʾ pattern all · some · some · none · none?',
          choices: ['أفعال · حروف · أسماء · جملة · شبه جملة', 'أسماء · أفعال · حروف · جملة · شبه جملة', 'حروف · أفعال · أسماء · شبه جملة · جملة', 'أفعال · أسماء · جملة · حروف · شبه جملة'],
          correct: 0,
          why: 'Verbs all govern; particles some; nouns some; sentence none; quasi-sentence none — in that order.' },

        { t: 'mcq', q: 'These five principles restate a grid you met before. Where?',
          choices: ['الباب الثالث of the Introduction — العامل وغير العامل', 'الباب الأول — الكلمة', 'الباب الثاني — الجملة', 'They are new information'],
          correct: 0,
          why: 'The ʿāmil/ghayr-ʿāmil grid on p. 17 said exactly this. Aim One reopens with it because the whole maqṣad is organised around who governs.' },

        { t: 'written',
          prompt: 'From memory: list the five mabādiʾ in order, stating for each what it affirms or denies about government.',
          model: '١ الأفعال كلها عاملة — every verb governs.\n٢ الحروف بعضها عاملة وبعضها غير عاملة — some particles govern (إنّ، لن، حروف الجر), some do not (هل، بل).\n٣ الأسماء بعضها عاملة وبعضها غير عاملة — some nouns govern (e.g. the maṣdar, ism al-fāʿil), most do not.\n٤ الجملة كلها غير عاملة — no sentence governs.\n٥ شبه الجملة كلها غير عاملة — no quasi-sentence governs.' },

        { t: 'bank', id: 'm1-muq--explain-line--explain-what-this-opening-line-t-4' },
        { t: 'bank', id: 'm1-muq--enumerate--list-the-five-principles-mab-di--6' },
        { t: 'bank', id: 'm1-muq--classify-tarkib--classify-the-word-in-the-sentenc-i' },
      ],
    },

    /* ═══ 2. Applying the principles ═══ */
    {
      id: 'mabadi-applied',
      title: 'Applying the principles',
      subtitle: 'عاملة vs غير عاملة in real sentences',
      matn: { src: 'DATA_M1_MUQ', from: 4, to: 8, check: 'الْأَوَّلُ' },
      steps: [
        { t: 'teach', title: 'The test is always the same',
          focus: [4, 5, 6, 7, 8],
          body: 'A word is **عاملة** if it necessitates a grammatical state in another word (ما يوجب حالة); **غير عاملة** if nothing changes because of it.',
          points: [
            '**إِنَّ اللهَ** — إنّ puts الله in naṣb → عاملة.',
            '**هَلْ، بَلْ** — meaning only, no government → غير عاملة.',
          ],
          examples: [
            { ar: 'لَنْ نُشْرِكَ', en: 'لن forces naṣb on نشرك', note: 'عاملة' },
            { ar: 'مَا أَشْرَكْنَا', en: 'ما changes nothing after it', note: 'غير عاملة' },
          ] },

        { t: 'mcq', q: 'هَلْ in هَلْ جَاءَ زَيْدٌ؟ is…',
          choices: ['a particle that does NOT govern — nothing after it changes state', 'a governing particle — it precedes a verb', 'a noun', 'a governor of جاء'],
          correct: 0,
          why: 'Being a particle isn’t enough; the test is whether it necessitates a state. هل only adds the interrogative meaning.' },

        { t: 'mcq', q: 'Why do the verbs differ from the nouns in the mabādiʾ?',
          choices: ['Every verb must govern (at least its fāʿil); only SOME nouns govern', 'Verbs are more common', 'Nouns never govern', 'Verbs take tanwīn'],
          correct: 0,
          why: 'A verb cannot exist without raising a doer — so government is built into it. Nouns govern only in specific cases (maṣdar, ism fāʿil, etc.).' },

        { t: 'mcq', q: 'A shibh jumlah like فِي مَكَّةَ appears before a noun. Can it be governing that noun?',
          choices: ['No — شبه الجملة كلها غير عاملة; any government traces back to its متعلَّق', 'Yes, quasi-sentences govern what follows', 'Only if the preposition is في', 'Only in poetry'],
          correct: 0,
          why: 'Fifth principle. The preposition inside it governs its own majrūr, but the shibh jumlah as a unit governs nothing — its effect hangs on the mutaʿallaq.' },

        { t: 'bank', id: 'm1-muq--explain-line--explain-the-following-line-of-th-0' },
        { t: 'bank', id: 'm1-muq--explain-line--explain-the-following-line-of-th-2' },
        { t: 'bank', id: 'm1-muq--compare--explain-with-examples-the-differ-8' },
        { t: 'bank', id: 'm1-muq--compare--explain-with-reference-to-the-ma-a' },
        { t: 'bank', id: 'm1-muq--explain-statement--explain-the-following-principle--c' },
        { t: 'bank', id: 'm1-muq--explain-statement--explain-the-following-two-princi-e' },
        { t: 'bank', id: 'm1-muq--define-types-examples--using-the-five-mab-di-of-the-int-g' },
      ],
    },
  ],
});
