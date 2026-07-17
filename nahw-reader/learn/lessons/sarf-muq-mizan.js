/* ── Daram Learn — Shadhā al-ʿArf · المقدمة والميزان الصرفي (Worksheets 1–2) ──
   Lesson content authored from the reader transcription
   (books/shadha-arf/wk01-muqaddimah.js, wk02-mizan.js).                       */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'sarf-muq-mizan',
  titleAr: 'الْمُقَدِّمَة وَالْمِيزَانُ الصَّرْفِيُّ',
  titleEn: 'Introduction & the Scale',
  pages: 'Wk 1–2',
  sections: [

    /* ═══ 1. What is ṣarf? ═══ */
    {
      id: 'tarif',
      title: 'What is صَرْف?',
      subtitle: 'تعريف علم الصرف لغةً واصطلاحًا',
      matn: { src: 'DATA_WK01', from: 2, to: 7, check: 'تَعْرِيفُ' },
      steps: [
        { t: 'teach', title: 'Ṣarf, linguistically',
          focus: [2, 3],
          body: 'The science has two names — **الصَّرْف** and **التَّصْرِيف** — and its lexical sense unlocks both.\n\nHover (or tap) any word above for its gloss.',
          points: [
            '**لُغَةً**: التَّغْيِير — *changing*. The Qurʾān speaks of تَصْرِيفُ الرِّيَاحِ, the shifting of the winds — أَيْ تَغْيِيرُهَا.',
          ],
          after: 'Keep that image: ṣarf is the science of how one word *shifts* into many shapes.' },

        { t: 'teach', title: 'Two technical senses',
          focus: [4, 5],
          points: [
            '**بِالْمَعْنَى الْعَمَلِيِّ** (practical): converting the single root — الأَصْل الوَاحِد — into different patterns, for **intended meanings** attainable only through them.',
            '**بِالْمَعْنَى الْعِلْمِيِّ** (theoretical): a science of principles by which are known the states of word-structures **which are neither إعراب nor بناء**.',
          ],
          examples: [
            { ar: 'كَتَبَ ← كَاتِب ← مَكْتُوب', en: 'one root, three patterns: doer, done-to', note: 'the practical sense at work' },
          ],
          after: 'Naḥw handles the word\'s **ending** (iʿrāb); ṣarf handles everything about its **shape** before the ending.' },

        { t: 'teach', title: 'Subject matter & scope',
          focus: [6, 7],
          points: [
            '**مَوْضُوعُهُ**: Arabic words from the standpoint of those states — soundness (الصِّحَّة) vs weak-letter change (الإِعْلَال), root-letter (الأَصَالَة) vs added letter (الزِّيَادَة).',
            'It applies only to **الأَسْمَاء الْمُتَمَكِّنَة** (fully-declinable nouns) and **الأَفْعَال الْمُتَصَرِّفَة** (conjugable verbs).',
            'The "dual/plural" of relative and demonstrative nouns (الَّذِي ← اللَّذَانِ) is **صُورِيٌّ لَا حَقِيقِيٌّ** — formal only, not true ṣarf.',
          ] },

        { t: 'mcq', q: 'What is the *practical* (ʿamalī) definition of ṣarf?',
          choices: ['Converting the single root into different patterns for intended meanings', 'A science of principles for knowing states of word-structures', 'Changing — as in تصريف الرياح', 'Knowing which endings words take in a sentence'],
          correct: 0,
          why: 'The second is the **theoretical** (ʿilmī) sense; the third is the **lexical** sense; the last is naḥw, not ṣarf.' },

        { t: 'mcq', q: 'The ʿilmī definition excludes states of إعراب and بناء. Why?',
          choices: ['Word-endings belong to naḥw, not ṣarf', 'Iʿrāb and bināʾ do not exist in verbs', 'Because particles have no iʿrāb', 'Because iʿrāb is only in the Qurʾān'],
          correct: 0,
          why: 'Ṣarf studies the word\'s internal build (structure, vowels, added letters); the ending\'s case/mood is naḥw\'s territory.' },

        { t: 'mcq', q: 'Which of these does ṣarf actually operate on?',
          choices: ['الأسماء المتمكنة والأفعال المتصرفة', 'All nouns, verbs and particles', 'Particles like هَلْ and فِي', 'Frozen verbs like نِعْمَ and عَسَى'],
          correct: 0,
          why: 'Only fully-declinable nouns and conjugable verbs. Particles have no dakhl here — and frozen (non-conjugable) verbs are likewise outside its work.' },

        { t: 'mcq', q: 'اللَّذَانِ looks like a dual of الَّذِي. How does the book classify this?',
          choices: ['صوري لا حقيقي — formal, not real', 'A true dual produced by ṣarf', 'An iʿrāb change', 'A quadriliteral root'],
          correct: 0,
          why: 'Relative/demonstrative nouns are not mutamakkin, so their "dual/plural/diminutive" merely resembles the form — ṣarf does not truly act on them.' },
      ],
    },

    /* ═══ 2. The five mabādiʾ of the science ═══ */
    {
      id: 'mabadi',
      title: 'Founder, fruit & the two key terms',
      subtitle: 'الواضع · الثمرة · الاستمداد · الحكم · الأبنية والكلمة',
      matn: { src: 'DATA_WK01', from: 8, to: 13, check: 'وَوَاضِعُهُ' },
      steps: [
        { t: 'teach', title: 'The science\'s credentials',
          focus: [8, 9, 10, 11],
          points: [
            '**وَاضِعُهُ**: مُعَاذُ بْنُ مُسْلِمٍ الْهَرَّاء (with shaddah on the rāʾ); some say سَيِّدُنَا عَلِيٌّ كرّم الله وجهه.',
            '**ثَمَرَتُهُ**: guarding the tongue from error **in individual words** (المُفْرَدَات), and observing the language\'s law in writing.',
            '**اسْتِمْدَادُهُ** from the speech of Allah, His Messenger ﷺ and the Arabs; **حُكْمُهُ**: الوُجُوب الكِفَائِيّ.',
          ],
          after: 'Contrast the fruit with naḥw: naḥw guards against error in **composition**; ṣarf guards the **single word**.' },

        { t: 'teach', title: 'أَبْنِيَة and كَلِمَة defined',
          focus: [12, 13],
          points: [
            '**الأَبْنِيَة** = plural of بِنَاء: the word\'s configuration — its vowels & sukūns, **number** of letters, and their **order**.',
            '**الكَلِمَة** = a single utterance (لَفْظٌ مُفْرَدٌ) coined by the language-coiner to denote a meaning — whenever uttered, that assigned meaning is understood.',
          ],
          examples: [
            { ar: 'قَمَر · جَمْل · كَرُمَ', en: 'same three letters count, different بناء (vowelling)', note: 'bināʾ = shape' },
          ] },

        { t: 'mcq', q: 'Who is named first as the founder (واضع) of ṣarf?',
          choices: ['مُعَاذُ بْنُ مُسْلِمٍ الْهَرَّاء', 'سيدنا عَلِيّ', 'الخَلِيلُ بْنُ أَحْمَد', 'سِيبَوَيْه'],
          correct: 0,
          why: 'Muʿādh b. Muslim al-Harrāʾ — with tashdīd of the rāʾ. ʿAlī (karrama-llāhu wajhah) is the second, "it is said" report.' },

        { t: 'mcq', q: 'The fruit (ثمرة) of ṣarf is guarding the tongue from error in…',
          choices: ['المفردات — individual words', 'sentence composition', 'pronunciation of Qurʾānic tajwīd', 'poetry metres'],
          correct: 0,
          why: 'Error in the **single word\'s** form is ṣarf\'s domain; error in composition is naḥw\'s fruit.' },

        { t: 'mcq', q: 'What is the Lawgiver\'s ruling (حكم الشارع) on learning ṣarf?',
          choices: ['الوجوب الكفائي — communal obligation', 'farḍ ʿayn on every Muslim', 'merely recommended', 'permissible (mubāḥ)'],
          correct: 0,
          why: 'Farḍ kifāyah: if enough of the community masters it, the rest are excused.' },

        { t: 'mcq', q: 'A word\'s بِنَاء is noted from vowel & sukūn, number of letters, and…',
          choices: ['their ordering (ترتيب)', 'its case-ending', 'its meaning', 'its definiteness'],
          correct: 0,
          why: 'هَيْئَةُ الكلمة الملحوظة من حركةٍ وسكون، وعددِ حروف، وترتيب — three ingredients of shape.' },

        { t: 'written',
          prompt: 'Define ṣarf in its practical and theoretical senses, and name its subject matter, founder, fruit and ruling.',
          model: '• Practical: converting the single root into different patterns for intended meanings not attained except by them.\n• Theoretical: a science of principles by which are known the states of word-structures that are neither iʿrāb nor bināʾ.\n• Subject: Arabic words from the standpoint of those states (ṣiḥḥah/iʿlāl, aṣālah/ziyādah).\n• Founder: Muʿādh b. Muslim al-Harrāʾ (or, it is said, ʿAlī).\n• Fruit: guarding the tongue from error in individual words, and observing the language\'s law in writing.\n• Ruling: communal obligation (al-wujūb al-kifāʾī).' },
      ],
    },

    /* ═══ 3. Division of the word ═══ */
    {
      id: 'taqsim',
      title: 'Division of the word',
      subtitle: 'اسم · فعل · حرف — والزمن هو الفيصل',
      matn: { src: 'DATA_WK01', from: 15, to: 19, check: 'تَقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Three and only three',
          focus: [15, 16],
          body: 'Every Arabic word is one of **اسم**, **فِعْل** or **حَرْف**. The definitions turn on two tests: is the meaning independent? and is **time** a part of it?' },

        { t: 'teach', title: 'The two-test grid',
          focus: [17, 18, 19],
          points: [
            '**الاسم**: independent meaning, **time is NOT part of it** — رَجُل، كِتَاب.',
            '**الفعل**: independent meaning, **time IS part of it** — كَتَبَ (past)، يَقْرَأُ (present)، احْفَظْ (command).',
            '**الحرف**: meaning **not independent** in being understood — هَلْ، فِي، لَمْ. It has no dakhl in ṣarf.',
          ],
          after: 'So: independence separates حرف from the rest; the time-test separates فعل from اسم.' },

        { t: 'mcq', q: 'Which pair of tests defines the three word-classes?',
          choices: ['Independence of meaning + whether time is part of it', 'Length of the word + its vowelling', 'Definiteness + case-ending', 'Root letters + added letters'],
          correct: 0,
          why: 'مُسْتَقِلٌّ بِالْفَهْم or not; الزَّمَنُ جُزْءٌ مِنْهُ or not. Everything else follows.' },

        { t: 'mcq', q: 'احْفَظْ ("memorise!") is a فعل because…',
          choices: ['its meaning is independent and time (the future of command) is part of it', 'it is short', 'it accepts tanwīn', 'its meaning depends on another word'],
          correct: 0,
          why: 'Past, present and imperative all carry time as part of their meaning — the imperative implies the future.' },

        { t: 'mcq', q: 'Why is فِي a حرف?',
          choices: ['Its meaning is not independent in being understood', 'It carries time as part of its meaning', 'It denotes an action', 'It accepts أل'],
          correct: 0,
          why: '"In" means nothing till you say in **what** — a meaning غير مستقلّ بالفهم. And ṣarf leaves particles alone entirely.' },

        { t: 'mcq', q: 'Which word-class does ṣarf ignore completely?',
          choices: ['الحرف', 'الاسم', 'الفعل المتصرف', 'الاسم المتمكن'],
          correct: 0,
          why: 'وَلَا دَخْلَ لَهُ هُنَا — the particle has no conjugation and no declension-shape for ṣarf to study.' },
      ],
    },

    /* ═══ 4. Signs of the noun, verb & particle ═══ */
    {
      id: 'alamat',
      title: 'Signs of the noun, verb & particle',
      subtitle: 'علامات الأسماء والأفعال وما يميّز الحرف',
      matn: { src: 'DATA_WK01', from: 20, to: 35, check: 'عَلَامَاتُ' },
      steps: [
        { t: 'teach', title: 'Signs of the noun',
          focus: [20, 21, 22, 23],
          points: [
            'The noun is marked by accepting **حرف الجرّ** and **أل**, by taking **التنوين**, and by **الإضافة**, **الإسناد إليه** and **النداء**.',
            'One witness line shows four at once: الْحَمْدُ (أل) لِلهِ (jarr) مُنْشِئِ الْخَلْقِ (iḍāfah) مِنْ عَدَمٍ (tanwīn).',
          ],
          examples: [
            { ar: 'يَا إِبْرَاهِيمُ', en: 'O Abraham — vocative', note: 'nidāʾ = noun-sign' },
          ] },

        { t: 'teach', title: 'Signs of the verb — the eight witnesses',
          focus: [24, 25],
          points: [
            'Accepting **قَدْ**, the future **السِّين/سَوْفَ**, the **نواصب** and **جوازم**.',
            'Taking **تاء الفاعل**, **تاء التأنيث الساكنة**, **نون التوكيد**, and **ياء المخاطبة**.',
          ],
          after: 'The worksheet gives one Qurʾānic witness per sign — walk the verses in the panel above.' },

        { t: 'teach', title: 'Each sign in its verse',
          focus: [26, 27, 28, 29, 30, 31, 32, 33],
          points: [
            '﴿قَدْ أَفْلَحَ﴾ قد · ﴿سَنُقْرِئُكَ﴾ السين · ﴿وَلَسَوْفَ يُعْطِيكَ﴾ سوف · ﴿لَنْ تَنَالُوا﴾ ناصب.',
            '﴿لَمْ يَلِدْ﴾ جازم · ﴿وَسِعْتَ﴾ تاء الفاعل · ﴿لَيُسْجَنَنَّ وَلَيَكُونًا﴾ نون التوكيد (heavy & light) · ﴿ارْجِعِي﴾ ياء المخاطبة.',
          ] },

        { t: 'teach', title: 'What marks the particle',
          focus: [34, 35],
          body: 'The حرف is known by a **negative** sign: it accepts none of the marks of the noun nor of the verb.' },

        { t: 'mcq', q: 'In الْحَمْدُ لِلهِ مُنْشِئِ الْخَلْقِ مِنْ عَدَمٍ, the word عَدَمٍ shows which noun-sign?',
          choices: ['التنوين', 'أل', 'النداء', 'الإسناد إليه'],
          correct: 0,
          why: 'ʿadamin carries tanwīn (and jarr after مِنْ). أل is on الحمد; iḍāfah on منشئ.' },

        { t: 'mcq', q: '﴿لَيُسْجَنَنَّ وَلَيَكُونًا﴾ witnesses which verb-sign?',
          choices: ['نون التوكيد — heavy then light', 'تاء الفاعل', 'السين والنواصب', 'ياء المخاطبة'],
          correct: 0,
          why: 'la-yusjana**nna** has the heavy nūn; wa-la-yakūna**n** the light one — both the emphasis-nūn, a verb-only mark.' },

        { t: 'mcq', q: '﴿ارْجِعِي إِلَى رَبِّكِ﴾ — the sign on ارْجِعِي is…',
          choices: ['ياء المخاطبة — the female-addressee yāʾ', 'tanwīn', 'تاء التأنيث الساكنة', 'the future sīn'],
          correct: 0,
          why: 'The yāʾ addressing a female attaches only to verbs. (Tāʾ at-taʾnīth as-sākinah is a different sign — قَامَتْ.)' },

        { t: 'mcq', q: 'How do you know a word is a حرف?',
          choices: ['It accepts no sign of the noun nor of the verb', 'It accepts قد and السين', 'It takes tanwīn only', 'It is always one letter long'],
          correct: 0,
          why: 'A purely negative test — بِعَدَمِ قَبُولِ شَيْءٍ مِنْ خَصَائِصِ الِاسْمِ وَالْفِعْلِ.' },

        { t: 'written',
          prompt: 'List the signs of the noun and the signs of the verb, giving one Qurʾānic witness for any two verb-signs.',
          model: 'Noun-signs: accepting ḥarf al-jarr and أل; taking tanwīn; iḍāfah; isnād ilayh; nidāʾ.\nVerb-signs: accepting قد, the future sīn/sawfa, the nawāṣib and jawāzim; taking tāʾ al-fāʿil, tāʾ at-taʾnīth as-sākinah, nūn at-tawkīd, yāʾ al-mukhāṭabah.\nWitnesses (any two): ﴿قَدْ أَفْلَحَ مَنْ تَزَكَّى﴾ for قد; ﴿سَنُقْرِئُكَ فَلَا تَنْسَى﴾ for the sīn; ﴿لَمْ يَلِدْ﴾ for the jāzim; ﴿ارْجِعِي﴾ for yāʾ al-mukhāṭabah.' },
      ],
    },

    /* ═══ 5. The scale — weighing the trilateral ═══ */
    {
      id: 'mizan',
      title: 'The scale: weighing the trilateral',
      subtitle: 'ف ع ل — فاء الكلمة وعينها ولامها',
      matn: { src: 'DATA_WK02', from: 1, to: 7, check: 'الْمِيزَانُ' },
      steps: [
        { t: 'teach', title: 'Why ف ع ل?',
          focus: [2, 3],
          body: 'Most Arabic words are **trilateral in root**, so the scholars set the measuring template at three letters: **الفاء، العين، اللام**, shaped exactly like the weighed word.',
          points: [
            'First root-letter ↔ **فاء الكلمة**; second ↔ **عين الكلمة**; third ↔ **لام الكلمة**.',
          ] },

        { t: 'teach', title: 'What the scale reports',
          focus: [4, 5, 6, 7],
          points: [
            'Four things: **الحركات والسكنات** · **الأصول والزوائد** · letter **order** · letters **kept or elided**.',
            'قَمَر = فَعَل · جَمْل = فِعْل · كَرُمَ = فَعُل — same letter-count, the wazn captures the vowelling.',
          ],
          examples: [
            { ar: 'انْكَسَرَ = انْفَعَلَ', en: 'the scale mirrors the word exactly', note: 'wazn' },
          ] },

        { t: 'mcq', q: 'The three letters of the scale are…',
          choices: ['ف ع ل', 'ك ل م', 'س أ ل', 'و ز ن'],
          correct: 0,
          why: 'Fāʾ, ʿayn and lām — matching the word\'s first, second and third root-letters.' },

        { t: 'mcq', q: 'What is the wazn of جَمْل?',
          choices: ['فِعْل', 'فَعَل', 'فَعُل', 'فَعِل'],
          correct: 0,
          why: 'Kasrah on the fāʾ, sukūn on the ʿayn — the scale copies جَمْل\'s vowelling exactly. فَعَل is قَمَر and فَعُل is كَرُمَ.' },

        { t: 'mcq', q: 'Which is NOT one of the four things the mīzān indicates?',
          choices: ['The word\'s meaning', 'Vowels and sukūns', 'Root-letters vs added letters', 'Order and elision of letters'],
          correct: 0,
          why: 'The scale is purely formal — it reports shape (ḥarakāt, uṣūl/zawāʾid, taqdīm/taʾkhīr, dhikr/ḥadhf), never meaning.' },

        { t: 'mcq', q: 'In كَتَبَ, the letter ت is called…',
          choices: ['عين الكلمة', 'فاء الكلمة', 'لام الكلمة', 'تاء الافتعال'],
          correct: 0,
          why: 'Second root-letter ↔ the ʿayn of the word. ك is its fāʾ and ب its lām.' },
      ],
    },

    /* ═══ 6. Weighing longer words & special cases ═══ */
    {
      id: 'mazid-wazn',
      title: 'Weighing beyond three letters',
      subtitle: 'الرباعي والخماسي · التكرير · سألتمونيها · الحالات الخاصة',
      matn: { src: 'DATA_WK02', from: 8, to: 20, check: 'وَزْنُ' },
      steps: [
        { t: 'teach', title: 'Three sources of extra length',
          focus: [8, 9, 10, 11, 12],
          points: [
            '**Root itself is 4 or 5 letters** → add a lām (or two) to the scale: دَحْرَجَ = فَعْلَلَ، جَحْمَرِش = فَعْلَلِل.',
            '**Repetition of a root-letter** → repeat its counterpart: قَدَّمَ = فَعَّلَ، جَلْبَبَ = فَعْلَلَ (مضعّف العين أو اللام).',
            '**A letter of سَأَلْتُمُونِيهَا** added → keep it **by its own form**: قَائِم = فَاعِل، تَقَدَّمَ = تَفَعَّلَ، اسْتَخْرَجَ = اسْتَفْعَلَ.',
          ],
          after: 'The ten augmentative letters are gathered in the mnemonic سَأَلْتُمُونِيهَا.' },

        { t: 'teach', title: 'Special cases',
          focus: [14, 15, 16, 17, 18, 19, 20],
          points: [
            '**Substituted tāʾ of iftiʿāl** — pronounce the scale with the *original* tāʾ: اضْطَرَبَ = افْتَعَلَ (not افطعل); صَلَحَ ← اصْتَلَحَ ← اصْطَلَحَ؛ زَجَرَ ← ازْدَجَرَ.',
            '**Elision (حذف)** in the word → elide its counterpart: قُلْ = فُلْ، قَاضٍ = فَاعٍ، عِدَة = عِلَة.',
            '**Metathesis (قلب مكاني)** → transpose the scale too: جَاهٍ (from وجه) = عَفَلٍ.',
          ] },

        { t: 'mcq', q: 'The wazn of دَحْرَجَ is…',
          choices: ['فَعْلَلَ', 'فَعَّلَ', 'تَفَعَّلَ', 'فَعْلَلِل'],
          correct: 0,
          why: 'Four root-letters → add one lām. فَعَّلَ would mean a repeated ʿayn (قَدَّمَ); فَعْلَلِل is the five-letter root جَحْمَرِش.' },

        { t: 'mcq', q: 'قَدَّمَ and جَلْبَبَ are both weighed with an extra lām-position — but their difference is:',
          choices: ['قَدَّمَ repeats the ʿayn (فَعَّلَ); جَلْبَبَ repeats the lām (فَعْلَلَ)', 'both are quadriliteral roots', 'قَدَّمَ has an added سألتمونيها letter', 'جَلْبَبَ shows metathesis'],
          correct: 0,
          why: 'Both arise from **repetition** of a root-letter, not a 4-letter root: doubled-ʿayn vs doubled-lām (muḍaʿʿaf al-ʿayn / al-lām).' },

        { t: 'mcq', q: 'Which set contains ONLY letters of سَأَلْتُمُونِيهَا?',
          choices: ['س، ت، م، و', 'س، ج، د، ق', 'ب، ت، ث، ن', 'ص، ط، ع، ه'],
          correct: 0,
          why: 'The ten augmentative letters are those of saʾaltumūnīhā: س أ ل ت م و ن ي هـ ا.' },

        { t: 'mcq', q: 'Why is the wazn of اضْطَرَبَ given as افْتَعَلَ and not افْطَعَلَ?',
          choices: ['The ط substitutes the tāʾ of iftiʿāl, so the scale speaks the original tāʾ', 'The ḍād is an added letter', 'Because ar-Raḍī forbade افطعل', 'Metathesis moved the ʿayn forward'],
          correct: 0,
          why: 'ḍ-r-b + iftiʿāl: the pattern-tāʾ became ṭāʾ after ḍād. The scale honours the original — though ar-Raḍī *permitted* the surface form.' },

        { t: 'mcq', q: 'The wazn of عِدَة (from وَعْد) is…',
          choices: ['عِلَة', 'فِعَة', 'فِلَة', 'عِفَل'],
          correct: 0,
          why: 'The fāʾ (و) was elided, so its counterpart ف drops from the scale, leaving ʿilah. قُلْ = فُلْ and قَاضٍ = فَاعٍ follow the same rule.' },

        { t: 'mcq', q: 'جَاهٍ from و ج ه is weighed as عَفَلٍ because…',
          choices: ['metathesis in the word forces the same transposition in the scale', 'its fāʾ was elided', 'the jīm is augmentative', 'it is a quadriliteral root'],
          correct: 0,
          why: 'قلبٌ مكانيّ: the ʿayn (ج) advanced before the fāʾ (و) — so the scale advances its ʿayn too: ʿafal.' },

        { t: 'written',
          prompt: 'Give the wazn of each, with the rule you used: بَعْثَرَ · تَقَدَّمَ · قَاضٍ · اصْطَلَحَ.',
          model: '• بَعْثَرَ = فَعْلَلَ — quadriliteral root, add a lām.\n• تَقَدَّمَ = تَفَعَّلَ — added tāʾ (of saʾaltumūnīhā) kept by its form + repeated ʿayn.\n• قَاضٍ = فَاعٍ — the lām (ي) is elided, so the scale\'s lām drops.\n• اصْطَلَحَ = افْتَعَلَ — the ṭāʾ substitutes iftiʿāl\'s tāʾ; the scale speaks the original tāʾ.' },
      ],
    },

  ],
});
