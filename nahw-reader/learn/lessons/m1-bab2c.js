/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الباب الثاني (٢ج): نواصب الفعل وجوازمه (pp. 72–80) ──
   Authored from the Obsidian notes 72–77 (Nahw Fi Kubra). NO matn panels: pp.72–80 are not yet
   transcribed in the reader — teach cards use static ar:/arEn: blocks instead. When the reader
   catches up, add section `matn` + card `focus` per LESSON_SPEC.md. No bank steps yet either.   */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-bab-2c',
  titleAr: 'نَوَاصِبُ الْفِعْلِ وَجَوَازِمُهُ',
  titleEn: 'The Particle III — naṣb & jazm',
  pages: '72–80',
  sections: [

    /* ═══ 1. أنْ الناصبة ═══ */
    {
      id: 'an-nasiba',
      title: 'أنْ — the maṣdarī ناصبة',
      subtitle: 'أنْ الناصبة vs المخففة · إضمارها جوازًا ووجوبًا',
      steps: [
        { t: 'teach', title: 'A new class: particles operating on the VERB',
          ar: 'ألا تُحِبُّونَ أَنْ يَغْفِرَ اللهُ لَكُمْ',
          arEn: 'Do you not love that Allah should forgive you? — an + muḍāriʿ in naṣb.',
          body: 'The second type of operating particle works **on the verb**. Its first class: **حروف تنصب الفعل المضارع** — four of them: **أنْ، كي، لن، إذن**.',
          points: [
            '**أنْ** is a **حرف مصدري**: it + its verb are interpreted as a maṣdar (أن يغفرَ ≈ المغفرة).',
            'The مضارع after it is **منصوب**: يغفرَ.',
          ] },

        { t: 'teach', title: 'أنْ الناصبة vs أنْ المخففة',
          body: 'The same two letters, two different particles — the verb before decides:',
          points: [
            'After a heart-verb of **certainty (يقين)** → the **مخففة** from أنَّ: ﴿علِمَ أنْ سيكونُ منكم مرضى﴾ (the verb stays مرفوع).',
            'After a heart-verb of **opinion (ظنّ)** → **either** reading is possible: مخففة (on a deleted اسم) or مصدرية (naṣb on the verb).',
            'After anything **not** a heart-verb → **مصدرية ناصبة**: ﴿نَطمَعُ أنْ يَغفِرَ لنا ربُّنا﴾.',
          ] },

        { t: 'teach', title: 'أنْ hidden OPTIONALLY (جوازًا) — two places',
          points: [
            'After the **لام of justification** (when not joined to لا النافية): ﴿**لِـ**يَغفِرَ لكَ اللهُ﴾ = لأنْ يغفرَ.',
            'But joined with لا — ﴿**لِئَلَّا** يكونَ للناسِ…﴾ — expressing أنْ becomes **obligatory**.',
            'After a **coordinating particle** preceded by an explicit (non-interpreted) noun: ﴿…إلا وحيًا أو من وراءِ حجابٍ أو **يُرسِلَ** رسولًا﴾ — يرسلَ is coordinated onto the noun وحيًا via a hidden أنْ.',
          ] },

        { t: 'teach', title: 'أنْ hidden OBLIGATORILY (وجوبًا) — five places',
          points: [
            'After **حتى** ﴿لن تنالوا البِرَّ حتى **تُنفِقوا**﴾, and after **لام الجحود** ﴿وما كان اللهُ **لِـ**يُضيعَ إيمانَكم﴾.',
            'After **«أو»** meaning *until/unless*: «لأَستَسهِلَنَّ الصعبَ أو **أُدرِكَ** المُنى».',
            'After **واو الصرف (المعية)** and after **فاء السببية** following a negation or a request: ﴿أسلِمْ **فـتَدخُلَ** الجنةَ﴾ · ﴿لا يُقضى عليهم **فـيموتوا**﴾.',
          ],
          after: 'By hearsay (سماعًا) it hides elsewhere too: «مُرْهُ يَحفِرَها»، «خُذِ اللصَّ قبلَ يأخُذَك».' },

        { t: 'mcq', q: 'In ﴿عَلِمَ أَنْ سَيَكُونُ مِنْكُمْ مَرْضَى﴾, the أنْ is…',
          choices: ['المخففة من أنَّ — because it follows a verb of certainty (علم)', 'الناصبة — سيكون is منصوب', 'زائدة', 'شرطية'],
          correct: 0,
          why: 'The trap is reading every أنْ as ناصبة. After a يقين heart-verb it is the lightened أنَّ — hence the تنفيس letter س separating it, and the verb in rafʿ.' },

        { t: 'mcq', q: 'And in ﴿نَطْمَعُ أَنْ يَغْفِرَ لَنَا رَبُّنَا﴾?',
          choices: ['مصدرية ناصبة — طمع is not a heart-verb, so the مضارع takes naṣb', 'مخففة — the اسم is deleted', 'Either, freely', 'ناهية'],
          correct: 0,
          why: 'Not preceded by a heart-verb → أنْ is the maṣdarī ناصبة: يغفرَ. Only after ظنّ-verbs are both faces open.' },

        { t: 'mcq', q: '﴿لَنْ تَنَالُوا الْبِرَّ حَتَّى تُنْفِقُوا﴾ — why is تنفقوا manṣūb (nūn dropped)?',
          choices: ['أنْ is hidden obligatorily after حتى', 'حتى itself is a ناصبة of verbs', 'لن reaches across to the second verb', 'It is مجزوم, not منصوب'],
          correct: 0,
          why: 'حتى is a jarr-particle; it cannot govern a verb. The real operator is a وجوبًا-hidden أنْ (حتى + أن تنفقوا).' },

        { t: 'mcq', q: 'The لام of ﴿وَمَا كَانَ اللهُ لِيُضِيعَ إِيمَانَكُمْ﴾ is…',
          choices: ['لام الجحود — after a negated كان, with أنْ hidden obligatorily', 'لام التعليل — with أنْ hidden optionally', 'لام الأمر', 'اللام الفارقة'],
          correct: 0,
          why: 'The signature of الجحود: ما كان / لم يكن + لِـ. There the hiding of أنْ is وجوبًا — unlike the plain لام التعليل ﴿لِيَغفِرَ لك اللهُ﴾ where it is جوازًا.' },

        { t: 'mcq', q: '«أَسْلِمْ فَتَدْخُلَ الْجَنَّةَ» — why naṣb after the فاء?',
          choices: ['فاء السببية after a command → أنْ hidden obligatorily', 'The فاء is عاطفة, so the verbs match', 'تدخل is مجزوم in answer to the command', 'The فاء is الفصيحة'],
          correct: 0,
          why: 'After a request (here أمر) or negation, the causal فاء takes a وجوبًا-hidden أنْ: “submit, with the RESULT that you enter”. Same with ﴿لا يُقضى عليهم فيموتوا﴾.' },

        { t: 'mcq', q: 'When is expressing أنْ after the لام obligatory rather than optional?',
          choices: ['When the لام is joined to لا النافية — ﴿لِئَلَّا يَكُونَ لِلنَّاسِ…﴾', 'Always — أنْ can never hide after لام', 'When the verb is future', 'After an oath'],
          correct: 0,
          why: 'Plain لام التعليل hides أنْ jawāzan (﴿لِيَغفِرَ لك اللهُ﴾); once لا intervenes (لئلّا = لِأنْ لا) the أنْ must appear.' },

        { t: 'written',
          prompt: 'What is أنْ الناصبة? Distinguish it from أنْ المخففة, and list where it is hidden جوازًا and where وجوبًا.',
          model: 'أنْ is a حرف مصدري that puts the مضارع in naṣb — ﴿ألا تحبونَ أنْ يغفرَ اللهُ لكم﴾. After a heart-verb of certainty it is instead the مخففة من أنّ ﴿علم أنْ سيكونُ منكم مرضى﴾; after a ظنّ-verb both are possible; otherwise it is the ناصبة. It is hidden جوازًا in two places: after لام التعليل not joined to لا ﴿لِيغفرَ لك اللهُ﴾ (with لئلّا it must be expressed), and after a coordinating particle preceded by an explicit noun ﴿أو يُرسِلَ رسولًا﴾. It is hidden وجوبًا in five: after حتى ﴿حتى تنفقوا﴾, after لام الجحود ﴿وما كان الله ليضيعَ إيمانكم﴾, after أو بمعنى “until/unless”, after واو المعية, and after فاء السببية following negation or request ﴿أسلمْ فتدخلَ الجنةَ﴾.' },
      ],
    },

    /* ═══ 2. كي · لن · إذن ═══ */
    {
      id: 'kay-lan-idhan',
      title: 'كي · لن · إذن',
      subtitle: 'التعليل · تأكيد النفي في المستقبل · الجواب',
      steps: [
        { t: 'teach', title: 'الثاني: كي — justification',
          ar: 'الثاني: كي، وهي حرفٌ مصدريٌّ للتعليلِ',
          arEn: 'The second: kay — a maṣdarī particle of justification.',
          points: [
            'It gives the **reason/purpose** and puts the مضارع in naṣb: ﴿فرَدَدْناكَ إلى أمِّكَ **كي** تَقَرَّ عينُها﴾.',
            'It is often preceded by the **لام الجر**: ﴿**لـ**كي لا يَعلَمَ بعدَ علمٍ شيئًا﴾ — and when the لام is absent, it is **estimated** (كي تقرَّ = لِكَي).',
          ] },

        { t: 'teach', title: 'الثالث: لن — emphatic future negation',
          ar: 'الثالث: لن، وهي لتأكيدِ النفيِ في المستقبلِ',
          arEn: 'The third: lan — for emphasising negation in the future.',
          points: [
            '﴿فَـ**لن** أُكلِّمَ اليومَ إنسيًّا﴾ — the مضارع is منصوب.',
            'It may signal **permanent** negation — but only **with a contextual cue (قرينة)**: ﴿لن يَخلُقوا ذبابًا﴾. On its own it is simply emphatic FUTURE negation, not necessarily eternal.',
          ] },

        { t: 'teach', title: 'الرابع: إذن — the response particle',
          ar: 'الرابع: إذن، وهي للجوابِ',
          arEn: 'The fourth: idhan — for responding: “in that case…”.',
          body: 'To one who says “I will obey Allah,” you reply: **إذنْ تَدخُلَ الجنةَ**. It operates naṣb only under three conditions:',
          points: [
            '**صدر الكلام** — sentence-initial. «أنتَ إذنْ تدخلُ الجنةَ» ✗ (rafʿ). After واو/فاء both faces are valid, rafʿ being the more common: ﴿فإذنْ لا يُؤتونَ الناسَ نقيرًا﴾.',
            'Followed by a **future** verb.',
            '**Nothing separates** it from the verb — except an **oath**: «إذنْ واللهِ أُكرِمَكَ».',
          ],
          after: 'Script note: in the muṣḥaf it is written with an alif — ﴿فإذا﴾.' },

        { t: 'mcq', q: '﴿فَرَدَدْنَاكَ إِلَى أُمِّكَ كَيْ تَقَرَّ عَيْنُهَا﴾ — what does كي contribute?',
          choices: ['التعليل: “SO THAT her eye be comforted” — a maṣdarī ناصبة', 'Negation of the future', 'A condition', 'A response'],
          correct: 0,
          why: 'كي is the ناصبة of purpose — the same تعليل sense as لام التعليل, which indeed often precedes it (لكيلا) or is estimated before it.' },

        { t: 'mcq', q: 'When no لام appears before the ناصبة كي, the grammarians say…',
          choices: ['the لام is estimated (مقدَّرة) before it', 'كي becomes a jarr particle', 'كي stops operating', 'the verb takes rafʿ'],
          correct: 0,
          why: '﴿كي تقرَّ عينُها﴾ is read as لِكَيْ — the justification-lām is understood even unexpressed.' },

        { t: 'mcq', q: 'Does لن by itself prove a thing will NEVER happen?',
          choices: ['No — permanence needs a قرينة; alone لن is emphatic future negation', 'Yes — لن always means eternal negation', 'Yes, but only in the Qurʾān', 'No — لن negates the past'],
          correct: 0,
          why: '﴿لن يخلقوا ذبابًا﴾ is read as permanent because of the context. Without such a cue, لن asserts only an emphatic “will not”.' },

        { t: 'mcq', q: '«أَنْتَ إِذَنْ تَدْخُلُ الْجَنَّةَ» — why rafʿ on تدخلُ?',
          choices: ['إذن lost صدر الكلام — preceded by أنت, it does not operate', 'The verb is not future', 'An oath separates them', 'إذن never operates on verbs'],
          correct: 0,
          why: 'First condition broken: إذن must open the sentence to govern naṣb. (After واو/فاء both are valid, with rafʿ more common.)' },

        { t: 'mcq', q: '«إِذَنْ وَاللهِ أُكْرِمَكَ» — the oath between إذن and the verb…',
          choices: ['does not block its operation — the oath is the one tolerated separator', 'cancels its operation', 'turns إذن into إذا الفجائية', 'makes the verb مجزومًا'],
          correct: 0,
          why: 'Third condition: no separation between إذن and its verb — EXCEPT the قسم, which the Arabs allowed: أُكرِمَك stays منصوبًا.' },

        { t: 'written',
          prompt: 'Name the four نواصب المضارع, give the meaning of each, and state the three conditions of إذن’s operation.',
          model: 'The four are: أنْ — حرف مصدري ﴿ألا تحبون أن يغفرَ الله لكم﴾; كي — حرف مصدري للتعليل ﴿كي تقرَّ عينُها﴾; لن — لتأكيد النفي في المستقبل ﴿فلن أكلمَ اليومَ إنسيًّا﴾; إذن — للجواب: إذنْ تدخلَ الجنةَ. إذن operates only when: (1) it has صدر الكلام (after واو/فاء both naṣb and rafʿ are valid, rafʿ more common); (2) the verb after it is future; (3) nothing separates it from the verb, except an oath — إذنْ واللهِ أُكرِمَك.' },
      ],
    },

    /* ═══ 3. الجوازم ═══ */
    {
      id: 'jazm',
      title: 'The جوازم — one verb & two',
      subtitle: 'لم · لمّا · لام الأمر · لا الناهية — ثم إنْ وإذما',
      steps: [
        { t: 'teach', title: 'Jussive over ONE verb — four particles',
          ar: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
          arEn: 'He neither begets nor is begotten — lam + muḍāriʿ in jazm.',
          body: 'The second class of verb-operators: **حروف تجزم الفعل المضارع**. The first kind governs a single verb:',
          points: [
            '**لم** — negates the مضارع and **flips its sense to the past**: ﴿لم يَلِدْ ولم يولَدْ﴾.',
            '**لمّا** — the same, **with expectation** still hanging (“not YET”): ﴿ولمّا يَدخُلِ الإيمانُ في قلوبكم﴾.',
            '**لام الأمر** ﴿فلْيَعمَلْ عملًا صالحًا﴾ and **لا الناهية** ﴿ولا يُشرِكْ بعبادةِ ربِّه أحدًا﴾ — command and prohibition.',
          ] },

        { t: 'teach', title: 'Jussive over TWO verbs — إنْ & إذما',
          ar: 'إِنْ تَجْتَنِبُوا كَبَائِرَ مَا تُنْهَوْنَ عَنْهُ نُكَفِّرْ عَنْكُمْ سَيِّئَاتِكُمْ',
          arEn: 'If you avoid the major sins you are forbidden, We will expiate your misdeeds.',
          points: [
            'The first verb is the **شرط** (condition), the second its **جواب/جزاء** (answer) — both **مجزومان**.',
            '**إذما** = إنْ in meaning: «إذما تَتُبْ تُقبَلْ توبتُكَ».',
            'The verbs may pair as مضارع/مضارع, ماضٍ/ماضٍ ﴿وإنْ عُدتُّم عُدنا﴾, ماضٍ/مضارع — and مضارع/ماضٍ, where the مضارع admits **jazm or rafʿ**.',
          ] },

        { t: 'teach', title: 'Hidden إنْ & the emphatic إمّا',
          points: [
            '**إنْ المقدَّرة**: the conditional إنْ may be understood before a مضارع meant as an answer to a **request** — ﴿تعالَوا أَتْلُ﴾ (= إن تتعالَوا أتلُ) — or after interrogation, wish, or offer.',
            '**«ما» الزائدة after إنْ → إمّا**: adds emphasis, and the verb then takes the **نون التوكيد**: ﴿وإمّا يَنزَغَنَّكَ من الشيطانِ نزغٌ فاستَعِذْ بالله﴾.',
          ] },

        { t: 'teach', title: 'The فاء in the جواب',
          body: 'When the answer cannot itself be a jussive verb — a **nominal sentence**, a **request**, etc. — a **فاء** is added before it, and **إنْ does not operate on the answer**:',
          examples: [
            { ar: 'وَإِنْ يَمْسَسْكَ اللهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ', en: 'if Allah touches you with harm — then none can remove it but He', note: 'الجواب جملة اسمية → فاء' },
          ] },

        { t: 'mcq', q: '﴿لَمْ يَلِدْ﴾ — what exactly does لم do?',
          choices: ['Negates the مضارع, flips its sense to the past, and puts it in jazm', 'Negates the future emphatically', 'Negates the past verb directly', 'Turns the verb into a prohibition'],
          correct: 0,
          why: 'That is لم’s triple signature. Emphatic future negation is لن (a ناصبة); prohibition is لا الناهية.' },

        { t: 'mcq', q: 'What does لمّا add over لم — as in ﴿وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ﴾?',
          choices: ['Expectation — the act is still anticipated: “not YET”', 'Nothing — they are synonyms', 'Permanence of the negation', 'A conditional meaning'],
          correct: 0,
          why: 'Both negate-and-flip-to-past; لمّا alone says the thing is still awaited — faith has not YET entered, but is expected to.' },

        { t: 'mcq', q: '﴿وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا﴾ — this لا is…',
          choices: ['لا الناهية — jazm, making a prohibition', 'لا النافية — the verb should be مرفوعًا', 'لا لنفي الجنس', 'لا العاطفة'],
          correct: 0,
          why: 'The sukūn of يشركْ betrays jazm: it is the prohibiting لا. The plain negating لا leaves the مضارع in rafʿ.' },

        { t: 'mcq', q: 'In ﴿إِنْ تَجْتَنِبُوا … نُكَفِّرْ عَنْكُمْ﴾, what are the two jazmed verbs called?',
          choices: ['The first is the شرط, the second the جواب (جزاء)', 'Both are أجوبة', 'The first is the جواب, the second the شرط', 'مبتدأ and خبر'],
          correct: 0,
          why: 'إنْ (and إذما) govern two verbs: condition then answer — تجتنبوا الشرط، نكفرْ الجواب.' },

        { t: 'mcq', q: '﴿وَإِمَّا يَنْزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ﴾ — what is the ما in إمّا, and its effect?',
          choices: ['زائدة after إنْ الشرطية — adding emphasis, and the verb takes نون التوكيد', 'ما الكافّة — stopping إنْ’s operation', 'ما المصدرية', 'ما النافية'],
          correct: 0,
          why: 'إمّا = إنْ + ما الزائدة. The emphasis is doubled by the نون التوكيد on ينزغَنَّك. (Kāffah-ما neutralises إنّ the NOUN-operator — a different particle.)' },

        { t: 'mcq', q: '﴿وَإِنْ يَمْسَسْكَ اللهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ﴾ — why the فاء before the answer?',
          choices: ['The answer is a nominal sentence, which cannot be jazmed — so the فاء steps in and إنْ does not operate on it', 'The فاء is سببية with a hidden أنْ', 'For mere emphasis', 'Because the شرط is a مضارع'],
          correct: 0,
          why: 'A جواب that can’t itself be a jussive verb (nominal sentence, request…) takes فاء الجزاء; the conditional’s government stops at the شرط.' },

        { t: 'written',
          prompt: 'List the four particles that jazm one verb (with meanings), and the two that jazm two verbs. When is the فاء required in the جواب?',
          model: 'Jussive over one verb: لم — negates the مضارع and flips it to past ﴿لم يلدْ ولم يولدْ﴾; لمّا — the same with expectation, “not yet” ﴿ولمّا يدخلِ الإيمانُ في قلوبكم﴾; لام الأمر — makes it a command ﴿فليعملْ عملًا صالحًا﴾; لا الناهية — makes it a prohibition ﴿ولا يشركْ بعبادة ربه أحدًا﴾. Jussive over two verbs: إنْ and إذما — the first verb is the شرط, the second the جواب ﴿إن تجتنبوا كبائرَ ما تنهون عنه نكفرْ عنكم سيئاتِكم﴾ · إذما تتبْ تُقبلْ توبتُك. When the answer cannot be a jussive verb — e.g. a nominal sentence or a request — a فاء is placed before it and إنْ does not operate on the answer: ﴿فلا كاشفَ له إلا هو﴾.' },
      ],
    },
  ],
});
