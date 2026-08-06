/* ── Daram Learn — al-Kubrā fī an-Naḥw · الخاتمة · وجوه الكلمات · القسم 23: كم → لولا (pp. 246–249) ──
   Backward-pass course (ch 23). Teach cards carry `page:` + an interactive matn panel
   (src: DATA_KH_W23 in ../books/kubra-nahw/khatima-wujuh-23.js, loaded in learn.html before this
   file). Notes source: books/kubra-nahw/notes/khatima_04_wujuh-al-kalimat.md. */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'kh-wujuh-23',
  num: 25,
  titleAr: 'وُجُوهُ الْكَلِمَاتِ: كَمْ ← لَوْلَا',
  titleEn: 'Faces of words — kam → lawlā',
  pages: '246–249',
  sections: [

    /* ═══ 1. كم · كي · كيف ═══ */
    {
      id: 'kam-kay-kayf',
      title: 'كَمْ · كَيْ · كَيْف',
      subtitle: 'أَدَوَاتُ الْكَافِ الثَّلَاثُ',
      matn: { src: 'DATA_KH_W23', from: 1, to: 9, check: 'كَمْ' },
      steps: [
        { t: 'teach', title: 'kam — question vs boast', page: 246,
          focus: [2, 3],
          points: [
            '**اسْتِفْهَامِيَّة** (“how many?”), its tamyīz manṣūb singular: ﴿كَمْ لَبِثْتُمْ فِي الْأَرْضِ عَدَدَ سِنِينَ﴾.',
            '**خَبَرِيَّة** (“how many a…!”, a boast of much), its tamyīz majrūr: ﴿كَمْ أَنْبَتْنَا فِيهَا مِنْ كُلِّ زَوْجٍ كَرِيمٍ﴾.',
          ],
          after: 'Trigger: a majrūr / مِنْ-tamyīz after it → خَبَرِيَّة; a manṣūb tamyīz + a question → اسْتِفْهَامِيَّة.' },

        { t: 'teach', title: 'kay & kayfa', page: 246,
          focus: [5, 6, 8, 9],
          body: 'Two more of the kāf-family:',
          points: [
            '**كَي** — usually **نَاصِبَة** of the مُضَارِع ﴿لِكَيْ لَا يَعْلَمَ﴾; rarely a **جَارّة** «كَيْمَهْ عَصَيْتَ اللَّهَ».',
            '**كَيْف** (a noun) — **اسْتِفْهَام** ﴿انْظُرْ كَيْفَ ضَرَبُوا لَكَ الْأَمْثَالَ﴾, or **شَرْط** (non-jazming) «كَيْفَ تَجْلِسُ أَجْلِسُ».',
          ] },

        { t: 'mcq', q: 'The tamyīz tells كم apart: in ﴿كَمْ أَنْبَتْنَا فِيهَا مِنْ كُلِّ زَوْجٍ كَرِيمٍ﴾, كم is …',
          choices: ['خبرية — the مِنْ / majrūr tamyīz signals a boast of abundance', 'استفهامية — “how many?”', 'شرطية', 'a redundant particle'],
          correct: 0,
          why: 'كم الخبرية takes its tamyīz majrūr (often with مِنْ) and means “how many a…!” (kathrah). كم الاستفهامية takes it manṣūb singular.' },

        { t: 'mcq', q: 'In «كَيْفَ تَجْلِسُ أَجْلِسُ», كيف is …',
          choices: ['شرطية (non-jazming) — “however you sit, I sit”', 'استفهامية', 'a حرف نصب', 'a preposition'],
          correct: 0,
          why: 'Two matched clauses (تجلس … أجلس) with no interrogative sense mark the شرط face of كيف — it links condition to answer without jazm.' },

        { t: 'written',
          prompt: 'Distinguish كم الاستفهامية from كم الخبرية by their tamyīz, and give the two faces each of كي and كيف.',
          model: 'كم الاستفهامية: تمييزها مفرد منصوب، تسأل عن العدد ﴿كم لبثتم في الأرض عدد سنين﴾. كم الخبرية: تمييزها مفرد أو جمع مجرور (كثيرًا بمِن)، تفيد التكثير ﴿كم أنبتنا فيها من كل زوج كريم﴾. كي: (1) ناصبة للمضارع ﴿لكي لا يعلم﴾; (2) جارّة نادرة «كيمه عصيت الله». كيف (اسم): (1) استفهام ﴿انظر كيف ضربوا لك الأمثال﴾; (2) شرط غير جازم «كيف تجلس أجلس».' },
      ],
    },

    /* ═══ 2. اللام — 7 faces ═══ */
    {
      id: 'lam',
      title: 'اللَّام',
      subtitle: 'سَبْعَةُ أَوْجُهٍ — مِنَ الْجَارَّةِ إِلَى الْفَارِقَةِ',
      matn: { src: 'DATA_KH_W23', from: 10, to: 18, check: 'اللَّامُ' },
      steps: [
        { t: 'teach', title: 'The lām — the workhorse letter', page: 246,
          focus: [11, 12, 13],
          body: 'The lām wears seven faces. The first three:',
          points: [
            '**الْجَارَّة** (preposition of ownership/reason): ﴿الْحَمْدُ لِلَّهِ﴾ — maksūra, sākina only with a pronoun.',
            '**لَام الأَمْر** (command, = لَام الطَّلَب): ﴿فَلْيَعْبُدُوا رَبَّ هَذَا الْبَيْتِ﴾ — sākin after وَ/فَ (فَلْـ), else maksūr (لِـ).',
            '**لَام الابْتِدَاء** (emphasis at the head): ﴿وَلَدَارُ الْآخِرَةِ خَيْرٌ﴾; after إِنّ it slides forward → **اللَّام المُزَحْلَقَة** ﴿وَإِنَّهُ لَغَفُورٌ رَحِيمٌ﴾.',
          ] },

        { t: 'teach', title: 'The four remaining lāms', page: 247,
          focus: [15, 16, 17, 18],
          points: [
            '**لَام الجَوَاب** (of لَو / لَوْلَا / القَسَم): ﴿وَلَوْ شَاءَ اللَّهُ لَذَهَبَ بِسَمْعِهِمْ﴾. · **المُوَطِّئَة لِلْقَسَم** (heralds a coming oath, usually over شَرْطِيَّة إِنْ): ﴿لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ﴾.',
            '**لَام البُعْد** (marks the far demonstrative): تِلْكَ، ذَلِكَ.',
            '**اللَّام الفَارِقَة** (tells إِنْ المُخَفَّفَة apart from إِنْ النَّافِيَة): ﴿وَإِنْ كُنْتُمْ مِنْ قَبْلِهِ لَمِنَ الضَّالِّينَ﴾.',
          ],
          after: 'Position + neighbour decide it: head of a jumlah, after إِنّ, on a demonstrative, or answering an oath/شَرْط.' },

        { t: 'mcq', q: 'In ﴿وَإِنَّهُ لَغَفُورٌ رَحِيمٌ﴾, the لام on غفور is …',
          choices: ['اللام المُزَحلَقة — لام الابتداء shifted onto the khabar after إنّ', 'لام الجواب', 'اللام الفارقة', 'لام الأمر'],
          correct: 0,
          why: 'لام الابتداء normally heads the sentence, but إنّ takes that slot, so the lām “slides” onto the khabar — hence المزحلقة (the shifted lām).' },

        { t: 'mcq', q: '﴿لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ﴾ — the first lām (لَئن) is …',
          choices: ['الموطِّئة للقسم — it heralds a coming oath, entering شرطية إنْ', 'لام الجواب of the شرط', 'اللام الفارقة', 'the جارّة'],
          correct: 0,
          why: 'The لام on لَئِنْ prepares for an oath: it announces that the answer (لأزيدنّكم, itself carrying لام + نون) is the جواب القسم, not the جواب الشرط.' },

        { t: 'mcq', q: 'Which lām distinguishes إنْ المخفّفة from إنْ النافية?',
          choices: ['اللام الفارقة — ﴿وإن كنتم من قبله لَمِن الضالين﴾', 'لام البُعد', 'لام الأمر', 'الموطِّئة للقسم'],
          correct: 0,
          why: 'Without the lām, ﴿وإن كنتم…﴾ could read as negation (“you were not…”). The فارقة lām on the khabar fixes إنْ as the lightened affirmative.' },

        { t: 'written',
          prompt: 'Enumerate the seven faces of the lām with an example of each, and explain المُزَحلَقة and الفارقة.',
          model: 'اللام سبعة: (1) الجارّة ﴿الحمد لله﴾; (2) لام الأمر ﴿فليعبدوا رب هذا البيت﴾; (3) لام الابتداء ﴿ولدار الآخرة خير﴾؛ وإذا سُبقت بإنّ زُحلقت إلى الخبر ﴿وإنه لغفور رحيم﴾ = المزحلقة; (4) لام الجواب (للو/لولا/القسم) ﴿ولو شاء الله لذهب بسمعهم﴾; (5) الموطِّئة للقسم ﴿لئن شكرتم لأزيدنّكم﴾; (6) لام البُعد «تلك، ذلك»; (7) اللام الفارقة ﴿وإن كنتم من قبله لمن الضالين﴾. المزحلقة: لام الابتداء أُخّرت عن صدرها لدخول إنّ. الفارقة: تميّز إنْ المخفّفة (المُثبتة) من إنْ النافية.' },
      ],
    },

    /* ═══ 3. لا — 5 faces ═══ */
    {
      id: 'la',
      title: 'لَا',
      subtitle: 'خَمْسَةُ أَوْجُهٍ: نَفْي · نَهْي · عَطْف · جَوَاب · زَائِدَة',
      matn: { src: 'DATA_KH_W23', from: 19, to: 25, check: 'لَا' },
      steps: [
        { t: 'teach', title: 'lā — five faces', page: 247,
          focus: [20, 21, 22, 23, 25],
          points: [
            '**لِلنَّفْي** — of the genus ﴿لَا إِكْرَاهَ فِي الدِّينِ﴾, or مُشَبَّهَة بِلَيْس, or negating a مُضَارِع/مَاضٍ. · **لِلنَّهْي** (jazms): ﴿فَلَا تَقُلْ لَهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا﴾.',
            '**العَطْف**: «جَاءَ زَيْدٌ لَا عَمْرٌو». · **حَرْف جَوَاب** (“no”): answering «هَلْ عَصَيْتَ رَبَّكَ؟».',
            '**زَائِدَة**: ﴿لِئَلَّا يَعْلَمَ أَهْلُ الْكِتَابِ…﴾ — the لَا adds nothing; the sense is “so that they may know”.',
          ],
          after: 'Trigger: a jazm-ed مُضَارِع of command → نَهْي; مَرْفُوع مُضَارِع → نَفْي; between two nouns → عَطْف.' },

        { t: 'mcq', q: 'In ﴿فَلَا تَقُلْ لَهُمَا أُفٍّ﴾, لا is …',
          choices: ['ناهية — it jazms the مضارع تقُلْ (“do not say”)', 'نافية — it merely negates', 'عاطفة', 'زائدة'],
          correct: 0,
          why: 'The verb after it is majzūm (تقُلْ, not تقولُ) and the sense is prohibition → لا الناهية. لا النافية leaves the مضارع marfūʿ.' },

        { t: 'mcq', q: '«جَاءَ زَيْدٌ لَا عَمْرٌو» — which face of لا?',
          choices: ['عاطفة — coordinating عمرو (negated) onto زيد', 'ناهية', 'نافية للجنس', 'حرف جواب'],
          correct: 0,
          why: 'لا sits between two singulars, affirming the first and excluding the second — the coordinating (عطف) لا. عمرٌو keeps زيد’s rafʿ by عطف.' },

        { t: 'mcq', q: '﴿لِئَلَّا يَعْلَمَ أَهْلُ الْكِتَابِ﴾ — the لا (within ألّا) is …',
          choices: ['زائدة — inert; the meaning is “so that they may know”', 'نافية — “so that they may not know”', 'ناهية', 'حرف جواب'],
          correct: 0,
          why: 'The book counts this لا as زائدة for emphasis: the intended sense is affirmative (ليعلم), the لا adding no negation.' },

        { t: 'written',
          prompt: 'Give the five faces of لا, and state the trigger that separates لا النافية from لا الناهية.',
          model: 'لا خمسة أوجه: (1) للنفي — نفي الجنس ﴿لا إكراه في الدين﴾، أو مشبّهة بليس، أو نفي المضارع/الماضي; (2) للنهي ﴿فلا تقل لهما أفٍّ ولا تنهرهما﴾; (3) العطف «جاء زيد لا عمرو»; (4) حرف جواب «لا» جوابًا لـ هل عصيت ربك؟; (5) زائدة ﴿لئلا يعلم أهل الكتاب﴾. الفرق نافية/ناهية: الناهية تجزم المضارع وتفيد الطلب (تقُلْ)، والنافية تدع المضارع مرفوعًا وتفيد الإخبار (يعلمُ).' },
      ],
    },

    /* ═══ 4. لَمّا ═══ */
    {
      id: 'lamma',
      title: 'لَمَّا',
      subtitle: 'ثَلَاثَةُ أَوْجُهٍ: ظَرْف · نَفْيٌ جَازِم · اسْتِثْنَاء',
      matn: { src: 'DATA_KH_W23', from: 26, to: 29, check: 'لَمَّا' },
      steps: [
        { t: 'teach', title: 'lammā — three faces, three verb-shapes', page: 248,
          focus: [27, 28, 29],
          points: [
            '**ظَرْف زَمَان** with شَرْط-sense, over a **past**: ﴿فَلَمَّا سَمِعْنَا الْهُدَى آمَنَّا بِهِ﴾ — “when…”.',
            '**حَرْف نَفْي جَازِم** over a **مُضَارِع** (“not yet”): ﴿لَمَّا يَذُوقُوا عَذَابِ﴾.',
            '**حَرْف اسْتِثْنَاء = إِلّا** over a **non-verb**: ﴿وَإِنْ كُلٌّ لَمَّا جَمِيعٌ لَدَيْنَا مُحْضَرُونَ﴾ = “there is none but is…”.',
          ],
          after: 'The word after لَمَّا fixes the face: مَاضٍ → ظَرْف, مُضَارِع → نَفْيٌ جَازِم, اسْم → اسْتِثْنَاء.' },

        { t: 'mcq', q: '﴿لَمَّا يَذُوقُوا عَذَابِ﴾ — لمّا is …',
          choices: ['حرف نفي جازم — “they have not yet tasted”', 'ظرف زمان — “when they tasted”', 'حرف استثناء = إلّا', 'a redundant particle'],
          correct: 0,
          why: 'A مضارع majzūm (يذوقوا) follows, and the sense is “not yet” — لمّا الجازمة النافية, close cousin of لم but implying expectation.' },

        { t: 'mcq', q: 'Which reading is لمّا الاستثنائية (= إلّا)?',
          choices: ['﴿وَإِنْ كُلٌّ لَمَّا جَمِيعٌ لَدَيْنَا مُحْضَرُونَ﴾', '﴿فَلَمَّا سَمِعْنَا الْهُدَى آمَنَّا بِهِ﴾', '﴿لَمَّا يَذُوقُوا عَذَابِ﴾', 'none of these'],
          correct: 0,
          why: 'Here لمّا enters a nominal predicate (جميع…) meaning “except / but”: إنْ (النافية) كلٌّ إلا جميعٌ محضرون. The others are the ظرف and the نفي جازم.' },

        { t: 'written',
          prompt: 'State the three faces of لمّا and the verb/word-shape that triggers each.',
          model: 'لمّا ثلاثة أوجه: (1) ظرف زمان فيه معنى الشرط، يدخل على الماضي ﴿فلما سمعنا الهدى آمنا به﴾; (2) حرف نفي جازم يدخل على المضارع بمعنى «لم… بعدُ» ﴿لمّا يذوقوا عذابِ﴾; (3) حرف استثناء بمعنى إلّا يدخل على غير الفعل ﴿وإن كلٌّ لمّا جميعٌ لدينا محضرون﴾. المِفتاح: ماضٍ بعدها → ظرف، مضارع → نفي جازم، اسم → استثناء.' },
      ],
    },

    /* ═══ 5. لو + لولا ═══ */
    {
      id: 'law-lawla',
      title: 'لَوْ · لَوْلَا',
      subtitle: 'حَرْفَا الامْتِنَاعِ وَأَخَوَاتُهُمَا',
      matn: { src: 'DATA_KH_W23', from: 30, to: 40, check: 'لَوْ' },
      steps: [
        { t: 'teach', title: 'law — five faces', page: 248,
          focus: [31, 32, 33, 34, 35],
          body: 'لَوْ is far more than “if”:',
          points: [
            '**شَرْطٌ لِامْتِنَاعِ الجَوَابِ لِامْتِنَاعِ الشَّرْطِ**: ﴿لَوْ شِئْنَا أَهْلَكْنَاهُمْ مِنْ قَبْلُ﴾. · **لِلتَّمَنِّي**: ﴿فَلَوْ أَنَّ لَنَا كَرَّةً فَنَكُونَ…﴾.',
            '**لِلْعَرْض** (gentle urging): «لَوْ تَطْلُبُ الْعِلْمَ فَتَنَالَ رَحْمَةَ اللَّهِ». · **حَرْف مَصْدَر** after فِعْل الوَدّ: ﴿وَدُّوا لَوْ تَكْفُرُونَ﴾.',
            '**لِلتَّقْلِيل** (“even a little”): «اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ».',
          ],
          after: 'The famous trap: لَوْ التَّمَنِّي vs لَوْ الشَّرْط — تَمَنٍّ often takes أَنّ + a مَنْصُوب مُضَارِع after فَاء.' },

        { t: 'teach', title: 'lawlā — three faces by what follows', page: 249,
          focus: [38, 39, 40],
          points: [
            '**حَرْف شَرْط** before a **nominal** sentence (“were it not for”): «وَلَوْلَا رَهْطُكَ لَرَجَمْنَاكَ».',
            '**حَرْف تَوْبِيخ** (rebuke) before a **past**: ﴿لَوْلَا يَنْهَاهُمُ الرَّبَّانِيُّونَ…﴾.',
            '**حَرْف تَحْضِيض** (exhortation) before a **present**: ﴿لَوْلَا تَسْتَغْفِرُونَ اللَّهَ…﴾.',
          ],
          after: 'اسْمِيَّة → شَرْط (امْتِنَاعِيَّة); مَاضٍ → تَوْبِيخ; مُضَارِع → تَحْضِيض.' },

        { t: 'mcq', q: '﴿وَدُّوا لَوْ تَكْفُرُونَ﴾ — لو is …',
          choices: ['حرف مصدر after فعل الوَدّ (= ودّوا كفركم)', 'شرطية', 'للتمنّي', 'للتقليل'],
          correct: 0,
          why: 'After ودّ / يودّ, لو is مصدرية: “they wish for your disbelief”. It is the one لو that does not head a conditional.' },

        { t: 'mcq', q: 'What separates لولا الشرطية from لولا التحضيضية?',
          choices: ['a nominal sentence after it → شرطية; a مضارع after it → تحضيضية', 'the presence of a لام in the answer', 'nothing — they are identical', 'لولا الشرطية always precedes a مضارع'],
          correct: 0,
          why: 'لولا الامتناعية (شرط) heads a اسمية «لولا رهطُك…», while over a مضارع it urges (تحضيض) ﴿لولا تستغفرون الله﴾, and over a ماضٍ it rebukes (توبيخ).' },

        { t: 'mcq', q: '«اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ» — لو is …',
          choices: ['للتقليل — “even with half a date”', 'شرطية', 'للتمنّي', 'مصدرية'],
          correct: 0,
          why: 'لو here concedes the smallest measure — التقليل: give in charity “even” by so little as half a date.' },

        { t: 'written',
          prompt: 'Give the five faces of لو and the three of لولا, and state the trigger for each لولا.',
          model: 'لو خمسة: (1) شرط لامتناع الجواب لامتناع الشرط ﴿لو شئنا أهلكناهم من قبل﴾; (2) للتمنّي ﴿فلو أن لنا كرّة فنكون…﴾; (3) للعَرْض «لو تطلب العلم فتنالَ رحمة الله»; (4) حرف مصدر بعد فعل الودّ ﴿ودّوا لو تكفرون﴾; (5) للتقليل «ولو بشقّ تمرة». لولا ثلاثة: (1) حرف شرط (امتناعي) قبل الاسمية «لولا رهطُك لرجمناك»; (2) توبيخ قبل الماضي ﴿لولا ينهاهم الربّانيون﴾; (3) تحضيض قبل المضارع ﴿لولا تستغفرون الله﴾. المِفتاح: اسمية → شرط، ماضٍ → توبيخ، مضارع → تحضيض.' },
      ],
    },
  ],
});
