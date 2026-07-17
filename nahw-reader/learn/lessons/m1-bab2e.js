/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الباب الثاني (٢هـ): بقية حروف العطف (pp. 82–86) ──
   Authored directly from the book PDF (no Obsidian notes exist past note 80). NO matn panels:
   pp. 82–86 are not transcribed in the reader — teach cards use static ar:/arEn: blocks and carry
   `page:` (book page) so every key idea maps back to the book. No bank steps yet.               */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-bab-2e',
  titleAr: 'بَقِيَّةُ حُرُوفِ الْعَطْفِ',
  titleEn: 'The Particle V — coordination II',
  pages: '82–86',
  sections: [

    /* ═══ 1. حتى العاطفة ═══ */
    {
      id: 'hatta',
      title: 'الرابع: حتى',
      subtitle: 'الغاية والتدريج · العاطفة والجارة',
      steps: [
        { t: 'teach', title: 'الرابع: حتى — goal + gradation', page: 82,
          ar: 'الرَّابِعُ حَتَّى، وهي لِلْغَايَةِ والتَّدْرِيجِ',
          arEn: 'The fourth: ḥattā — for the goal and gradation.',
          points: [
            '**الغاية** = the last part of the thing; **التدريج** = what precedes it proceeds bit by bit until it reaches that goal.',
            '«أكلتُ السمكةَ **حتى رأسِها**» — I ate the fish piece by piece until even its head.',
            'Unlike الفاء and ثم, this حتى gives **no الترتيب الزماني** — in time-ordering it is like the واو.',
          ] },

        { t: 'teach', title: 'Two conditions on its معطوف', page: 82,
          body: 'The noun after عاطفة-ḥattā is constrained twice:',
          points: [
            'It must be **a part of** (داخلًا في) the معطوف عليه: «أكلتُ السمكةَ حتى **رأسِها**» ✓ — but not «حتى **الفاكهةِ**» ✗, the fruit is no part of the fish.',
            'It must be the **last portion** of what precedes — literally (حقيقةً): «قرأتُ القرآنَ حتى **سورةِ الكهفِ**» is wrong as a literal end…',
            '…or by **rank** (حُكمًا): in strength/greatness «ماتَ الناسُ حتى **الأنبياءُ**», or in weakness/lowness «قَدِمَ الحُجَّاجُ حتى **المُشاةُ**».',
          ] },

        { t: 'teach', title: 'The three kinds of غاية', page: 83,
          body: 'Its goal (غاية) can be of **time, place, or rank**:',
          points: [
            '**زمانًا**: ﴿سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ﴾ — until the break of dawn.',
            '**مكانًا**: «مَشَيْتُ حتى بابِ المسجدِ» — up to the mosque door.',
            '**رُتبةً**: «ماتَ الناسُ حتى الأنبياءُ» — even the prophets.',
          ] },

        { t: 'teach', title: 'حتى العاطفة vs حتى الجارّة', page: 83,
          body: 'The same word is also a preposition — the tests are **part-hood** and **ruling**:',
          points: [
            '**عاطفة**: what follows is a part of what precedes AND shares its ruling — «صُمْتُ رمضانَ حتى **آخرَ** يومٍ منه» (the last day IS fasted; عطف takes the same case).',
            '**جارّة**, معطوف a part: it still shares the ruling **unless evidence says otherwise** — «سِرْتُ النهارَ حتى **العصرِ**».',
            '**جارّة**, not a part: what follows does **not** share the ruling — «صُمْتُ رمضانَ حتى **يومِ الفطرِ**» (ʿĪd day is never fasted).',
          ],
          after: 'So «حتى رأسِها» (naṣb, eaten) is عطف; «حتى يومِ الفطرِ» (jarr, excluded) is a preposition.' },

        { t: 'mcq', q: '«أَكَلْتُ السَّمَكَةَ حَتَّى الْفَاكِهَةَ» — why is this rejected?',
          choices: ['The معطوف of حتى must be a PART of what precedes it — fruit is no part of the fish', 'حتى never coordinates nouns', 'الفاكهة is not the last part eaten', 'حتى requires a verb after it'],
          correct: 0,
          why: 'First condition: دخول المعطوف في المعطوف عليه. «حتى رأسَها» works because the head is part of the fish.' },

        { t: 'mcq', q: '«مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءُ» — the prophets are the “last part” of mankind in what sense?',
          choices: ['حُكمًا, by rank — the highest in strength/greatness, not the literal last to die', 'حقيقةً — they literally died last', 'زمانًا — a goal of time', 'It is not عطف at all'],
          correct: 0,
          why: 'The “last portion” condition is satisfied literally OR by rank: upward (تعظيم — الأنبياء) or downward (تحقير — «قدم الحجاجُ حتى المشاةُ»).' },

        { t: 'mcq', q: 'Does عاطفة-ḥattā order its two sides in time, like الفاء and ثم?',
          choices: ['No — it gives no الترتيب الزماني; in that respect it is like the واو', 'Yes — with immediacy like الفاء', 'Yes — with delay like ثم', 'Only when the معطوف is a place'],
          correct: 0,
          why: 'The book states it explicitly: وحتى هذه لا تفيد الترتيب الزماني بل هي كالواو. Its contribution is غاية + تدريج, not sequence.' },

        { t: 'mcq', q: '«صُمْتُ رَمَضَانَ حَتَّى يَوْمِ الْفِطْرِ» — what is حتى here and is ʿĪd day fasted?',
          choices: ['جارّة — and since يوم الفطر is not a part of Ramadan, it does NOT share the fasting ruling', 'عاطفة — so ʿĪd is fasted', 'جارّة — but it still shares the ruling', 'Either reading is fine with the same meaning'],
          correct: 0,
          why: 'Not a part of what precedes → prepositional حتى and excluded from the ruling. Contrast «حتى آخرِ يومٍ منه», a part, which is fasted.' },

        { t: 'written',
          prompt: 'Define what عاطفة-ḥattā means (الغاية والتدريج), state its two conditions with one accepted and one rejected example, and explain how to tell حتى العاطفة from حتى الجارّة.',
          model: 'حتى العاطفة is للغاية والتدريج: الغاية is the last part of the thing and التدريج means what precedes proceeds little by little until reaching it — «أكلتُ السمكةَ حتى رأسِها». Conditions: (1) the معطوف must be a part of the معطوف عليه — «حتى رأسِها» ✓, «حتى الفاكهةِ» ✗; (2) it must be its last portion, literally, or by rank upward («مات الناسُ حتى الأنبياءُ») or downward («قدم الحجاجُ حتى المشاةُ»). It does not order in time — like the واو there. Distinguishing from الجارّة: if what follows is a part of what precedes and shares its ruling it is عاطفة («صمتُ رمضانَ حتى آخرَ يومٍ منه»); if جارّة, a part shares the ruling only absent contrary evidence («سرتُ النهارَ حتى العصرِ»), and a non-part does not share it at all («صمتُ رمضانَ حتى يومِ الفطرِ»).' },
      ],
    },

    /* ═══ 2. أو · أم · لا ═══ */
    {
      id: 'aw-am-la',
      title: 'أو · أم · لا',
      subtitle: 'الشك والتخيير · طلب التعيين والتسوية · نفي الحكم',
      steps: [
        { t: 'teach', title: 'الخامس: أو', page: 84,
          ar: 'الْخَامِسُ أَوْ',
          arEn: 'The fifth: aw — its sense depends on what precedes it.',
          points: [
            '**الشك بعد الخبر** — doubt after a statement: ﴿وَإِنَّا أَوْ إِيَّاكُمْ لَعَلَى هُدًى أَوْ فِي ضَلَالٍ مُبِينٍ﴾.',
            '**التخيير بعد الأمر** — choice after a command: ﴿فَفِدْيَةٌ مِنْ صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍ﴾.',
            '**الجمع بعد النفي أو النهي** — like the واو: ﴿وَلَا تُطِعْ مِنْهُمْ آثِمًا أَوْ كَفُورًا﴾ (obey neither).',
          ] },

        { t: 'teach', title: 'السادس: أم', page: 84,
          ar: 'السَّادِسُ أَمْ',
          arEn: 'The sixth: am.',
          points: [
            '**طلب التعيين** — demanding a specification: ﴿أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ الْوَاحِدُ الْقَهَّارُ﴾ — which of the two?',
            '**التسوية** — equalising: ﴿سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ﴾.',
            'أم is a coordinator **restricted to الاستفهام** and what carries its meaning (like همزة التسوية).',
          ] },

        { t: 'teach', title: 'السابع: لا العاطفة', page: 84,
          ar: 'السَّابِعُ لَا، وهي لِنَفْيِ الْحُكْمِ عَنِ الْمَعْطُوفِ',
          arEn: 'The seventh: lā — it denies the ruling of the معطوف.',
          points: [
            '«اعْمَلْ صالحًا **لا** سيّئًا» — do good, NOT evil: the ruling affirmed for the first is denied of the second.',
            '**Condition**: it must be preceded by **إثبات أو أمر** — an affirmation or a command: «أَطِعِ اللهَ لا الشيطانَ».',
          ] },

        { t: 'teach', title: 'After negation: الواو + لا', page: 85,
          body: 'If **نفي or نهي** precedes, لا cannot coordinate alone — **the واو becomes obligatory**: ﴿وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ **وَلَا** النَّصَارَى﴾.',
          points: [
            'And repeating **لا with the واو is obligatory** when it enters upon a **negated خبر**…',
            '…or a **negated نعت**: ﴿وَفَاكِهَةٍ كَثِيرَةٍ لَا مَقْطُوعَةٍ **وَلَا** مَمْنُوعَةٍ﴾…',
            '…or a **negated حال**: «صَلَّى لا غافِلًا **ولا** لاهِيًا».',
          ] },

        { t: 'mcq', q: '﴿فَفِدْيَةٌ مِنْ صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍ﴾ — what does أو give here, and why?',
          choices: ['التخيير — because it follows a command context: pick any of the three', 'الشك — the speaker is unsure', 'الجمع — do all three', 'الإضراب — cancel the first two'],
          correct: 0,
          why: 'أو reads off its context: doubt after خبر, choice after أمر, joining after نفي/نهي. A ransom you are told to give = choice.' },

        { t: 'mcq', q: '﴿وَلَا تُطِعْ مِنْهُمْ آثِمًا أَوْ كَفُورًا﴾ — obey neither the sinner nor the ingrate. Which sense of أو?',
          choices: ['الجمع بعد النفي أو النهي — after prohibition أو joins like the واو', 'التخيير — disobey whichever you like', 'الشك', 'طلب التعيين'],
          correct: 0,
          why: 'After نهي, أو = الجمع: the prohibition covers both. Reading تخيير here (“you may obey one of them”) is exactly the trap.' },

        { t: 'mcq', q: 'What distinguishes أم from أو?',
          choices: ['أم is restricted to الاستفهام and what carries its meaning — طلب التعيين or التسوية', 'أم means doubt, أو means choice', 'أم orders in time', 'Nothing — they interchange freely'],
          correct: 0,
          why: 'أم lives with the interrogative hamza: ﴿…خَيْرٌ أَمِ اللهُ﴾ demands the specification, ﴿أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ﴾ equalises.' },

        { t: 'mcq', q: 'Why is «ما جاءَ زيدٌ لا عمرٌو» ill-formed for لا العاطفة?',
          choices: ['لا العاطفة requires a preceding إثبات or أمر; after نفي the واو is obligatory (ولا عمرٌو)', 'لا never coordinates proper names', 'عمرو must take naṣb', 'It is fine as it stands'],
          correct: 0,
          why: 'Condition: يتقدمها إثباتٌ أو أمرٌ. After negation the book requires the واو — ﴿وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى﴾.' },

        { t: 'mcq', q: '﴿لَا مَقْطُوعَةٍ وَلَا مَمْنُوعَةٍ﴾ — why is لا repeated with the واو?',
          choices: ['لا entering on a negated نعت (or خبر or حال) must be repeated with the واو', 'Pure emphasis with no rule behind it', 'Because the nouns are feminine', 'Because a قسم precedes'],
          correct: 0,
          why: 'The تكرار rule: on a negated خبر, نعت, or حال, لا comes doubled with الواو — «صلّى لا غافلًا ولا لاهيًا».' },

        { t: 'written',
          prompt: 'List the three context-dependent meanings of أو with an example each, the two meanings of أم, and the conditions governing لا العاطفة (including what happens after negation).',
          model: 'أو: (1) الشك بعد الخبر ﴿وإنا أو إياكم لعلى هدى أو في ضلال مبين﴾; (2) التخيير بعد الأمر ﴿ففدية من صيام أو صدقة أو نسك﴾; (3) الجمع بعد النفي أو النهي ﴿ولا تطع منهم آثما أو كفورا﴾. أم — restricted to الاستفهام and its meaning: طلب التعيين ﴿أأرباب متفرقون خير أم الله الواحد القهار﴾ and التسوية ﴿سواء عليهم أأنذرتهم أم لم تنذرهم﴾. لا العاطفة denies the ruling of the معطوف — «اعمل صالحا لا سيئا» — on condition that إثبات or أمر precedes («أطع الله لا الشيطان»); if نفي or نهي precedes, the واو is obligatory ﴿ولن ترضى عنك اليهود ولا النصارى﴾, and لا must be repeated with الواو when it enters on a negated خبر, نعت ﴿لا مقطوعة ولا ممنوعة﴾, or حال «صلى لا غافلا ولا لاهيا».' },
      ],
    },

    /* ═══ 3. بل · لكن · إما ═══ */
    {
      id: 'bal-lakin-imma',
      title: 'بل · لكنْ · إمّا',
      subtitle: 'الإضراب · الاستدراك · وما ليس بعاطف',
      steps: [
        { t: 'teach', title: 'الثامن: بل — turning away', page: 85,
          ar: 'الثَّامِنُ بَلْ، وهي لِلْإِضْرَابِ، وهو الإِعْرَاضُ عَنِ الشَّيْءِ',
          arEn: 'The eighth: bal — for iḍrāb, turning away from the thing.',
          points: [
            'After **إيجاب or أمر** → **الإبطال**: the ruling is stripped from what precedes and given to what follows — «صُمِ اليومَ **بل** غدًا» (not today after all; fast tomorrow).',
            'After **نفي or نهي** → **تقرير**: the ruling of what precedes is confirmed and its **opposite** given to what follows — «لا تَصُمِ اليومَ **بل** غدًا» (no fast today stands; DO fast tomorrow).',
          ] },

        { t: 'teach', title: 'التاسع: لكنْ — course-correction', page: 86,
          ar: 'التَّاسِعُ لَكِنْ، وهي لِلاسْتِدْرَاكِ',
          arEn: 'The ninth: lākin — istidrāk: what follows differs from what precedes.',
          points: [
            '«ما جاءَ زيدٌ **لكنْ** خالدٌ» — Zayd didn’t come, but Khālid did.',
            'Two conditions: it must be preceded by **النفي أو النهي**, and it must **not be joined to the واو**.',
            'With the واو — ﴿وَلَكِنْ رَسُولَ اللهِ﴾ — لكنْ is no coordinator: the **واو itself** is the حرف عطف (or حرف ابتداء ﴿وَلَكِنْ لَا يَشْعُرُونَ﴾) and لكنْ is extra.',
          ],
          after: 'And لكنْ المخففة has لكنَّ as its origin.' },

        { t: 'teach', title: 'كلمة إمّا — not a coordinator', page: 86,
          body: 'On the sounder view **إمّا is not a حرف عطف** at all, though it matches **أو and أم** in meaning.',
          points: [
            'It only occurs **doubled**: ﴿إِنَّا هَدَيْنَاهُ السَّبِيلَ إِمَّا شَاكِرًا وَإِمَّا كَفُورًا﴾…',
            '…or with **أو standing in** for its second occurrence: «الاسمُ إمّا مذكرٌ أو مؤنثٌ».',
          ] },

        { t: 'mcq', q: '«صُمِ الْيَوْمَ بَلْ غَدًا» vs «لَا تَصُمِ الْيَوْمَ بَلْ غَدًا» — what does بل do in each?',
          choices: ['After the command: إبطال — cancel today, fast tomorrow. After the prohibition: تقرير — no-fast-today stands, and tomorrow gets the OPPOSITE (fast it)', 'Both simply cancel what precedes', 'Both confirm what precedes', 'After the command it confirms; after the prohibition it cancels'],
          correct: 0,
          why: 'إيجاب/أمر → سلب الحكم عما قبلها وجعله لما بعدها; نفي/نهي → تقرير حكم ما قبلها وجعل ضدها لما بعدها.' },

        { t: 'mcq', q: 'Which is a valid use of coordinating لكنْ?',
          choices: ['«ما جاءَ زيدٌ لكنْ خالدٌ» — after negation, no واو', '«جاءَ زيدٌ لكنْ خالدٌ» — after affirmation', '﴿وَلَكِنْ رَسُولَ اللهِ﴾ — with the واو', '«صُمِ اليومَ لكنْ غدًا» — after a command'],
          correct: 0,
          why: 'Both conditions must hold: preceded by نفي/نهي AND free of the واو. With the واو, the واو coordinates and لكنْ is زائدة; after affirmation/command you want بل.' },

        { t: 'mcq', q: 'In ﴿مَا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِنْ رِجَالِكُمْ وَلَكِنْ رَسُولَ اللهِ﴾, what coordinates رسولَ?',
          choices: ['The واو — لكنْ joined to الواو is زائدة, so الواو is the حرف عطف', 'لكنْ itself', 'A hidden بل', 'Nothing — رسول is a new sentence'],
          correct: 0,
          why: 'When لكنْ meets the واو it loses coordinator status: the واو is either عاطفة (as here) or ابتدائية ﴿ولكن لا يشعرون﴾.' },

        { t: 'mcq', q: 'Why is إمّا excluded from the nine حروف العطف (on the sounder view)?',
          choices: ['It is not a حرف عطف, though it matches أو/أم in meaning — and it only comes doubled, or with أو replacing its twin', 'Because it is a noun', 'Because it only negates', 'It is not excluded — it is the tenth coordinator'],
          correct: 0,
          why: 'ليس بحرف عطف على الأصح: ﴿إما شاكرا وإما كفورا﴾ doubled, or «الاسم إما مذكر أو مؤنث» with أو standing in.' },

        { t: 'written',
          prompt: 'Explain الإضراب (بل) in its two cases, الاستدراك (لكنْ) with its two conditions and the ruling when الواو accompanies it, and the status of إمّا.',
          model: 'بل is للإضراب, turning away from what precedes. Preceded by إيجاب or أمر it is للإبطال: the ruling is stripped from what precedes and assigned to what follows — «صم اليومَ بل غدًا». Preceded by نفي or نهي it is للتقرير: the prior ruling stands and its opposite goes to what follows — «لا تصم اليومَ بل غدًا». لكنْ is للاستدراك — what follows differs from what precedes: «ما جاء زيدٌ لكنْ خالدٌ» — on two conditions: نفي/نهي before it, and no accompanying واو; if the واو is present, لكنْ is زائدة and the واو is the actual حرف عطف ﴿ولكن رسولَ الله﴾ or حرف ابتداء ﴿ولكن لا يشعرون﴾; لكنْ المخففة derives from لكنَّ. إمّا, on the sounder view, is not a حرف عطف though it matches أو and أم in meaning; it occurs only doubled ﴿إما شاكرا وإما كفورا﴾ or with أو in place of the second إما («الاسم إما مذكرٌ أو مؤنثٌ»).' },
      ],
    },
  ],
});
