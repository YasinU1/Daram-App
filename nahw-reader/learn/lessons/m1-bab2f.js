/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الباب الثاني (٢و): أحرف الجواب والتوكيد والشرط (pp. 86–92) ──
   Authored directly from the book PDF (no Obsidian notes exist past note 80). NO matn panels:
   these pages are not transcribed in the reader — teach cards use static ar:/arEn: blocks and
   carry `page:` (book page) so every key idea maps back to the book. No bank steps yet.        */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-bab-2f',
  titleAr: 'أَحْرُفُ الْجَوَابِ والتَّوْكِيدِ والشَّرْطِ',
  titleEn: 'The Particle VI — answer, emphasis & condition',
  pages: '86–92',
  sections: [

    /* ═══ 1. أحرف الجواب ═══ */
    {
      id: 'jawab',
      title: 'القسم الثاني: أحرف الجواب',
      subtitle: 'أحرف الإيجاب الستة · حرفا النفي',
      steps: [
        { t: 'teach', title: 'Answer particles: نعم and بلى', page: 87,
          body: 'The second class of non-operating particles: **أحرف الجواب**, of two kinds (ضربان). The affirmatives (أحرف الإيجاب) are **six**; the first two carry the famous contrast:',
          points: [
            '**نعم** ﴿فَهَلْ وَجَدْتُمْ مَا وَعَدَ رَبُّكُمْ حَقًّا قَالُوا نَعَمْ﴾ — it **echoes the question**: affirmation after a positive question («أسافَرَ خالدٌ؟» → نعم = he travelled), negation after a negative one («أما سافَرَ خالدٌ؟» → نعم = he did NOT).',
            '**بلى** — only **after negation**, and it **overturns** it: ﴿قَالَ أَوَلَمْ تُؤْمِنْ قَالَ بَلَى﴾.',
            'بلى affirms the negated whether the negation was a question ﴿أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَى﴾ (= You ARE our Lord) or plain خبر: «لم يَقُمْ زيدٌ» → «بلى» = he did stand.',
          ] },

        { t: 'teach', title: 'The remaining four affirmatives', page: 87,
          points: [
            '**إي** — before an oath (قبل القسم): ﴿وَيَسْتَنْبِئُونَكَ أَحَقٌّ هُوَ قُلْ إِي وَرَبِّي إِنَّهُ لَحَقٌّ﴾.',
            '**أجل** — after a statement (بعد الخبر): in reply to «نُحِبُّ الأنصارَ».',
            '**إنَّ** and **جَيْرِ** — in reply to a question: «هل تحبُّ الصحابةَ؟» → «إنَّ»; «هل تتبعُ الرسولَ ﷺ وأصحابَه؟» → «جيرِ لأتَّبِعَنَّهم».',
          ] },

        { t: 'teach', title: 'حرفا النفي: لا and كلَّا', page: 87,
          points: [
            '**لا** — the plain negative answer: «هل تُبغِضُ الصحابةَ؟» → «لا».',
            '**كلَّا** — **للزَّجْرِ**: rebuking, i.e. **rejecting what precedes and affirming what follows**: ﴿قَالَ رَبِّ ارْجِعُونِ … كَلَّا﴾. It is called **حرف رَدْعٍ وزَجْرٍ**.',
          ] },

        { t: 'teach', title: 'كلّا beyond rebuke', page: 88,
          body: 'كلّا can also come **for other than الزجر والردع**:',
          points: [
            '**التصديق** of what precedes, meaning **أجل / إي**: ﴿وَمَا هِيَ إِلَّا ذِكْرَى لِلْبَشَرِ ۝ كَلَّا وَالْقَمَرِ﴾.',
            '**الاستفتاح** — opening, meaning **ألا**: ﴿عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ ۝ كَلَّا إِنَّ الْإِنْسَانَ لَيَطْغَى﴾.',
          ] },

        { t: 'mcq', q: '«أَمَا سَافَرَ خَالِدٌ؟» — you answer «نَعَمْ». What have you said?',
          choices: ['He did NOT travel — نعم after a negative question confirms the negation', 'He travelled — نعم always affirms the event', 'The answer is ambiguous', 'نعم cannot answer a negative question'],
          correct: 0,
          why: 'نعم echoes what it answers: إثبات after the positive question, نفي after the negative. To say “he DID travel” after the negative question you need بلى.' },

        { t: 'mcq', q: '﴿أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَى﴾ — why بلى and not نعم?',
          choices: ['بلى overturns the negation: “You ARE our Lord.” نعم would have confirmed it — “You are not”', 'They are interchangeable here', 'بلى is required before oaths', 'نعم is only for humans'],
          correct: 0,
          why: 'بلى is لإيجاب المنفي. Had they said نعم, it would have echoed the negation — a famous theological point riding on one particle.' },

        { t: 'mcq', q: 'Which particle affirms specifically before an oath?',
          choices: ['إي — ﴿قُلْ إِي وَرَبِّي﴾', 'أجل', 'جير', 'بلى'],
          correct: 0,
          why: 'إي sits قبل القسم. أجل follows a خبر; جير and إنَّ answer questions; بلى overturns negation.' },

        { t: 'mcq', q: 'In ﴿رَبِّ ارْجِعُونِ … كَلَّا﴾, what does كلّا do?',
          choices: ['ردع وزجر — it rejects the request (no return!) and affirms what follows', 'It affirms the request', 'It opens a new sūrah section with no meaning', 'It negates what follows'],
          correct: 0,
          why: 'The core sense: رَدُّ ما قبله وإثباتُ ما بعده. Its other uses — تصديق (≈ أجل) and استفتاح (≈ ألا) — are context-read.' },

        { t: 'written',
          prompt: 'Enumerate the six أحرف الإيجاب and the two حرفا النفي with the placement of each, and explain the نعم/بلى contrast after a negative question.',
          model: 'أحرف الإيجاب: (1) نعم — echoes the question: affirmation after the positive, negation after the negative ﴿قالوا نعم﴾; (2) بلى — after negation only, overturning it ﴿قال أولم تؤمن قال بلى﴾, whether the negation is استفهام ﴿ألست بربكم قالوا بلى﴾ or خبر («لم يقم زيد» → «بلى» = قد قام); (3) إي — before the oath ﴿قل إي وربي﴾; (4) أجل — after the خبر; (5) إنَّ — answering a question; (6) جير — «جيرِ لأتبعنهم». حرفا النفي: لا — the plain negative answer; كلّا — حرف ردع وزجر: rejecting what precedes and affirming what follows ﴿رب ارجعون … كلا﴾, and it can also give التصديق بمعنى أجل ﴿كلا والقمر﴾ or الاستفتاح بمعنى ألا ﴿كلا إن الإنسان ليطغى﴾. The contrast: after «أما سافر خالد؟», نعم confirms the negation (he did not), بلى overturns it (he did).' },
      ],
    },

    /* ═══ 2. أحرف التأكيد ═══ */
    {
      id: 'tawkid',
      title: 'القسم الثالث: أحرف التأكيد',
      subtitle: 'اللامات الثلاث · نونا التأكيد · قد',
      steps: [
        { t: 'teach', title: 'The three lāms', page: 88,
          body: 'The emphasis particles (أحرف التأكيد — and التأكيد is also called توكيدًا) are **five**. Three are lāms:',
          points: [
            '**لام الابتداء** — on the mubtadaʾ: ﴿وَلَدَارُ الْآخِرَةِ خَيْرٌ لِلَّذِينَ اتَّقَوْا﴾.',
            '**اللام المزحلقة** — “slid” onto the **khabar of إنّ**.',
            '**اللام في جواب القسم**: ﴿تَاللهِ لَتُسْأَلُنَّ عَمَّا كُنْتُمْ تَفْتَرُونَ﴾.',
          ],
          after: 'لام الابتداء and المزحلقة together are called لام التوكيد.' },

        { t: 'teach', title: 'Where the مزحلقة lands', page: 89,
          body: 'It enters the khabar of إنّ when that khabar is:',
          points: [
            'a **noun**: ﴿إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ﴾ ﴿إِنَّ فِي ذَلِكَ لَآيَاتٍ﴾,',
            'a **muḍāriʿ verb**: ﴿وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ وَمَا يُعْلِنُونَ﴾,',
            'or a **شبه جملة**: ﴿وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ﴾.',
          ] },

        { t: 'teach', title: 'نونا التأكيد and قد', page: 89,
          points: [
            '**نونا التأكيد** — the light and the heavy nūn (الخفيفة والثقيلة), both in one verse: ﴿لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ﴾.',
            '**قد** + **māḍī** = **التحقيق**: ﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾.',
            '**قد** + **muḍāriʿ** = تحقيق ﴿قَدْ يَعْلَمُ اللهُ﴾, **توقّع** (expecting the future event: «قد يبرأُ المريضُ»), **تكثير** ﴿قَدْ نَرَى تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ﴾, or **تقليل**: «قد يَصْدُقُ الكَذوبُ».',
          ],
          after: 'The dominant reading of قد + muḍāriʿ is تقليل (حرف تقليل).' },

        { t: 'mcq', q: '﴿إِنَّ فِي ذَلِكَ لَآيَاتٍ﴾ — which lām is this, and why there?',
          choices: ['اللام المزحلقة — slid onto the khabar of إنّ (here the khabar is the noun آيات after a fronted شبه جملة)', 'لام الابتداء on a mubtadaʾ', 'لام جواب القسم', 'لام الجر'],
          correct: 0,
          why: 'With إنّ present, the lām slides off the ism onto the khabar — noun, muḍāriʿ ﴿لَيَعْلَمُ﴾, or شبه جملة ﴿لَعَلَى خُلُقٍ عَظِيمٍ﴾.' },

        { t: 'mcq', q: '﴿لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ﴾ shows which two emphasisers?',
          choices: ['The heavy nūn (لَيُسْجَنَنَّ) and the light nūn (لَيَكُونًا)', 'Two lāms of oath only', 'قد twice', 'لام الابتداء and قد'],
          correct: 0,
          why: 'نونا التأكيد: الثقيلة in ليسجننّ, الخفيفة in ليكونًا (written as tanwīn-alif).' },

        { t: 'mcq', q: '«قَدْ يَصْدُقُ الْكَذُوبُ» vs ﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾ — what does قد give each?',
          choices: ['With the muḍāriʿ: تقليل (the liar rarely tells the truth); with the māḍī: تحقيق (certainty)', 'Both are تحقيق', 'Both are تقليل', 'With the muḍāriʿ: تحقيق; with the māḍī: توقع'],
          correct: 0,
          why: 'قد + māḍī = تحقيق always; قد + muḍāriʿ ranges over تحقيق/توقع/تكثير/تقليل, with تقليل the الغالب.' },

        { t: 'mcq', q: 'Which أحرف التأكيد count among the five?',
          choices: ['لام الابتداء، اللام المزحلقة، لام جواب القسم، نونا التأكيد، قد', 'إنّ، أنّ، لكنّ، ليت، لعل', 'السين وسوف', 'ألا، أما، ها'],
          correct: 0,
          why: 'Those five are this قسم. (إنّ وأخواتها are the operating nawāsikh, treated earlier; السين/سوف are استقبال; ألا/أما/ها are تنبيه.)' },

        { t: 'written',
          prompt: 'List the five أحرف التأكيد. Detail where اللام المزحلقة enters (three positions with examples) and the meanings of قد with each tense.',
          model: 'Five: (1) لام الابتداء on the mubtadaʾ ﴿ولَدار الآخرة خير﴾; (2) اللام المزحلقة on the khabar of إنّ — a noun ﴿إن ربي لسميع الدعاء﴾, a muḍāriʿ ﴿وإن ربك ليعلم ما تكن صدورهم﴾, or a شبه جملة ﴿وإنك لعلى خلق عظيم﴾ (these two lāms = لام التوكيد); (3) اللام في جواب القسم ﴿تالله لتسألن﴾; (4) نونا التأكيد, heavy and light ﴿ليسجنن وليكونا من الصاغرين﴾; (5) قد — with the māḍī: التحقيق ﴿قد أفلح المؤمنون﴾; with the muḍāriʿ: التحقيق ﴿قد يعلم الله﴾, التوقع «قد يبرأ المريض», التكثير ﴿قد نرى تقلب وجهك﴾, or التقليل «قد يصدق الكذوب» — the غالب with the muḍāriʿ being تقليل.' },
      ],
    },

    /* ═══ 3. لو ═══ */
    {
      id: 'law',
      title: 'القسم الرابع: أحرف الشرط — لوْ',
      subtitle: 'امتناعٌ لامتناع · زمنها · الاسم بعدها',
      steps: [
        { t: 'teach', title: 'الأول: لو — امتناع لامتناع', page: 89,
          ar: 'الأَوَّلُ لَوْ، وهي لِامْتِنَاعِ الْجَوَابِ لِامْتِنَاعِ الشَّرْطِ',
          arEn: 'law: the answer failed to occur because the condition failed to occur.',
          body: 'The conditional particles (أحرف الشرط) are **four**. First, لو: ﴿لَوْ شِئْتَ أَهْلَكْتَهُمْ مِنْ قَبْلُ وَإِيَّايَ﴾ — You did not will it, so You did not destroy them.' },

        { t: 'teach', title: 'لو is past-tense', page: 90,
          ar: 'كَلِمَةُ لَوْ تَدُلُّ عَلَى الْمَاضِي',
          arEn: 'law points to the past —',
          points: [
            'even when it enters a **muḍāriʿ**, it flips it to past meaning: ﴿لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا﴾.',
            'The **lām** commonly enters its **affirmative جواب** ﴿لَوْ نَشَاءُ **لَـ**جَعَلْنَاهُ حُطَامًا﴾ — and may be absent: ﴿لَوْ نَشَاءُ جَعَلْنَاهُ أُجَاجًا﴾.',
            'لو may also carry the sense of **التمني** (wishing): ﴿فَلَوْ أَنَّ لَنَا كَرَّةً فَنَكُونَ مِنَ الْمُؤْمِنِينَ﴾.',
          ] },

        { t: 'teach', title: 'A noun after لو', page: 91,
          body: 'After لو a **verb is required**. If a noun appears instead:',
          points: [
            '**Explicit noun** (صريح): it is the معمول of a **deleted operator** explained by what follows — «لو زيدًا رأيتُه لأكرمتُه» = لو رأيتُ زيدًا لأكرمتُه.',
            '**مؤول بأنَّ**: the noun clause is **فاعل of a deleted verb** — ﴿وَلَوْ أَنَّهُمْ فَعَلُوا مَا يُوعَظُونَ بِهِ لَكَانَ خَيْرًا لَهُمْ﴾ = لو **ثبت** أنّهم…',
          ] },

        { t: 'mcq', q: '﴿لَوْ شِئْتَ أَهْلَكْتَهُمْ﴾ — what does لو assert about the destroying?',
          choices: ['It did not happen, because the willing did not happen — امتناع الجواب لامتناع الشرط', 'It happened after the willing', 'It may yet happen', 'It happened without the willing'],
          correct: 0,
          why: 'That is لو’s definition: both شرط and جواب failed, the جواب failing because the شرط did.' },

        { t: 'mcq', q: '﴿لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا﴾ — نشاء is muḍāriʿ. What time does the sentence express?',
          choices: ['Past — لو flips the muḍāriʿ to past meaning', 'Future, because of the muḍāriʿ', 'Continuous present', 'Timeless'],
          correct: 0,
          why: 'لو تدل على الماضي وإن دخلت على مضارع يقلبه ماضيا. Note also the lām on the affirmative جواب — common but omissible ﴿جعلناه أجاجا﴾.' },

        { t: 'mcq', q: '«لَوْ زَيْدًا رَأَيْتُهُ لَأَكْرَمْتُهُ» — why the naṣb on زيدًا?',
          choices: ['It is the معمول of a deleted verb which the following رأيته explains: لو رأيتُ زيدًا…', 'زيد is the ism of لو', 'It is a ẓarf', 'The naṣb is an error — it should be زيدٌ'],
          correct: 0,
          why: 'لو demands a verb; an explicit noun after it is governed by a suppressed verb interpreted from what follows (اشتغال-style).' },

        { t: 'mcq', q: '﴿وَلَوْ أَنَّهُمْ فَعَلُوا …﴾ — how does the أنّ-clause satisfy لو’s need for a verb?',
          choices: ['The clause stands as فاعل of a deleted verb: لو ثَبَتَ أنّهم فعلوا', 'أنّ replaces the verb with no deletion', 'It does not — the verse is exceptional', 'أنّهم is the مفعول of فعلوا'],
          correct: 0,
          why: 'The مؤول noun is the fāʿil of a suppressed ثبت — the required verb is recovered by taqdīr.' },

        { t: 'written',
          prompt: 'Define لو, state its tense behaviour and the lām of its جواب, mention its تمني sense, and explain the two cases of a noun following it.',
          model: 'لو is لامتناع الجواب لامتناع الشرط — the جواب failed because the شرط failed: ﴿لو شئت أهلكتهم من قبل وإياي﴾. It denotes the past even over a muḍāriʿ, flipping it to past meaning ﴿لو نشاء لجعلناه حطاما﴾. The lām frequently enters its affirmative جواب ﴿لجعلناه حطاما﴾ but may be absent ﴿لو نشاء جعلناه أجاجا﴾. It can also carry التمني ﴿فلو أن لنا كرة فنكون من المؤمنين﴾. A verb must follow لو; if a noun appears: an explicit noun is the معمول of a deleted operator explained by what follows — «لو زيدًا رأيته لأكرمته» أي لو رأيت زيدًا; and a مؤول بأنّ noun is فاعل of a deleted verb — ﴿ولو أنهم فعلوا ما يوعظون به لكان خيرا لهم﴾ أي لو ثبت أنهم.' },
      ],
    },

    /* ═══ 4. لولا · لوما · أمّا ═══ */
    {
      id: 'lawla-amma',
      title: 'لولا · لوما · أمّا',
      subtitle: 'امتناعٌ لوجود · شرطٌ وتفصيلٌ وتوكيد',
      steps: [
        { t: 'teach', title: 'الثاني والثالث: لولا ولوما', page: 91,
          ar: 'الثَّانِي لَوْلَا، وهي لِامْتِنَاعِ الْجَوَابِ لِوُجُودِ الشَّرْطِ',
          arEn: 'lawlā: the answer failed BECAUSE the condition existed.',
          points: [
            'It enters **two sentences**: the first **اسمية with its khabar deleted**, assumed **موجودٌ**; the second **فعلية**: ﴿وَلَوْلَا فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ مَا زَكَى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾ — His grace exists, so no one being purified failed to be averted.',
            '**لوما** is its twin — لامتناع الجواب لوجود الشرط: «لوما التوفيقُ لَمَا عَمِلْنا الصالحاتِ».',
          ] },

        { t: 'teach', title: 'الرابع: أمّا — شرط وتفصيل وتوكيد', page: 91,
          ar: 'الرَّابِعُ أَمَّا، وهي حَرْفُ شَرْطٍ وتَفْصِيلٍ وتَوْكِيدٍ',
          arEn: 'ammā: condition, detailing and emphasis in one particle.',
          points: [
            '﴿فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ وَأَمَّا الَّذِينَ كَفَرُوا فَيَقُولُونَ مَاذَا أَرَادَ اللهُ بِهَذَا مَثَلًا﴾.',
            'It comes **repeated**, detailing a plural mentioned summarily before: ﴿كَذَّبَتْ ثَمُودُ وَعَادٌ بِالْقَارِعَةِ ۝ فَأَمَّا ثَمُودُ … ۝ وَأَمَّا عَادٌ …﴾ (p. 92).',
            'The repetition may be dropped, one division standing for the other: ﴿فَأَمَّا الَّذِينَ آمَنُوا بِاللهِ وَاعْتَصَمُوا بِهِ فَسَيُدْخِلُهُمْ فِي رَحْمَةٍ مِنْهُ وَفَضْلٍ﴾ (p. 92).',
          ] },

        { t: 'teach', title: 'What stands between أمّا and its فاء', page: 92,
          body: 'Between أمّا and the فاء of its جواب comes one of:',
          points: [
            'the **mubtadaʾ** ﴿أَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ جَنَّاتُ الْمَأْوَى﴾, or the **khabar**: «أمّا في البيتِ فزيدٌ»,',
            'the **جملة الشرط**: ﴿فَأَمَّا إِنْ كَانَ مِنَ الْمُقَرَّبِينَ ۝ فَرَوْحٌ وَرَيْحَانٌ﴾,',
            'or a **noun governed by an operator** — in the جواب ﴿فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ﴾, or by a deleted one: ﴿وَأَمَّا ثَمُودَ فَهَدَيْنَاهُمْ﴾ in the naṣb reading.',
          ],
          after: 'The remaining conditional devices (إنْ، مَن، ما، مهما…) are عاملة — they belong with the operators, not here.' },

        { t: 'mcq', q: 'لو vs لولا — both have امتناع الجواب. What differs?',
          choices: ['لو: the جواب failed because the شرط FAILED; لولا: the جواب failed because the شرط EXISTED', 'They are synonyms', 'لولا: the جواب occurred', 'لو is for nouns, لولا for verbs'],
          correct: 0,
          why: 'لو = امتناع لامتناع ﴿لو شئت أهلكتهم﴾; لولا = امتناع لوجود ﴿لولا فضل الله عليكم … ما زكى منكم من أحد﴾ — the grace exists.' },

        { t: 'mcq', q: 'In ﴿وَلَوْلَا فَضْلُ اللهِ عَلَيْكُمْ﴾, what is the iʿrāb of فضلُ?',
          choices: ['Mubtadaʾ of an اسمية whose khabar is deleted, assumed موجودٌ', 'Fāʿil of a deleted verb', 'Ism of لولا, which operates like إنّ', 'Mafʿūl muṭlaq'],
          correct: 0,
          why: 'لولا enters two sentences: first اسمية with obligatorily deleted khabar (تقديره موجود), second فعلية (the جواب).' },

        { t: 'mcq', q: '«أَمَّا فِي الْبَيْتِ فَزَيْدٌ» — what stands between أمّا and the فاء here?',
          choices: ['The khabar (في البيت), the mubtadaʾ following the فاء', 'The mubtadaʾ', 'A جملة شرط', 'A مفعول of a deleted verb'],
          correct: 0,
          why: 'The slot takes mubtadaʾ, khabar, جملة الشرط, or a governed noun. Here the fronted شبه جملة khabar fills it.' },

        { t: 'mcq', q: '﴿وَأَمَّا ثَمُودَ فَهَدَيْنَاهُمْ﴾ (naṣb reading) — what governs ثمودَ?',
          choices: ['A deleted operator (≈ هدينا ثمودَ هديناهم) — a governed noun may sit between أمّا and the فاء', 'أمّا itself, which operates naṣb', 'The فاء', 'هديناهم governs it directly across the فاء'],
          correct: 0,
          why: 'أمّا is a non-operating particle; the naṣb comes from a suppressed verb. Compare the in-جواب case ﴿فأما اليتيمَ فلا تقهر﴾.' },

        { t: 'written',
          prompt: 'Define لولا and لوما with the structure of the two sentences after لولا; then define أمّا, its repetition rule, and list what may stand between أمّا and its فاء.',
          model: 'لولا is لامتناع الجواب لوجود الشرط: it enters two sentences, the first اسمية whose khabar is obligatorily deleted with taqdīr موجودٌ, the second فعلية — ﴿ولولا فضل الله عليكم ورحمته ما زكى منكم من أحد أبدا﴾. لوما is likewise لامتناع الجواب لوجود الشرط: «لوما التوفيق لما عملنا الصالحات». أمّا is حرف شرط وتفصيل وتوكيد ﴿فأما الذين آمنوا فيعلمون أنه الحق من ربهم وأما الذين كفروا…﴾; it occurs repeated to detail a summary mentioned before ﴿فأما ثمود فأهلكوا بالطاغية وأما عاد فأهلكوا بريح صرصر عاتية﴾, and the repetition may be dropped, one division sufficing ﴿فأما الذين آمنوا بالله واعتصموا به فسيدخلهم في رحمة منه وفضل﴾. Between أمّا and the فاء comes: the mubtadaʾ ﴿أما الذين آمنوا وعملوا الصالحات فلهم جنات المأوى﴾, the khabar «أما في البيت فزيد», the جملة الشرط ﴿فأما إن كان من المقربين فروح وريحان﴾, or a noun governed by an operator in the جواب ﴿فأما اليتيم فلا تقهر﴾ or deleted ﴿وأما ثمودَ فهديناهم﴾. The remaining conditional devices are عاملة.' },
      ],
    },
  ],
});
