/* ── Daram Learn — Shadhā al-ʿArf · معاني صيغ الزوائد (Worksheets 8–11) ──
   The meanings carried by each augmented pattern: أفعل، فاعل، فعّل، انفعل،
   افتعل، افعلّ، تفعّل، تفاعل، استفعل and the intensives.
   Authored from books/shadha-arf/wk08–wk11.                                   */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'sarf-maani',
  titleAr: 'مَعَانِي صِيَغِ الزَّوَائِدِ',
  titleEn: 'Meanings of the Augmented Patterns',
  pages: 'Wk 8–11',
  sections: [

    /* ═══ 1. afʿala I ═══ */
    {
      id: 'afala-1',
      title: 'أَفْعَلَ I: taʿdiyah, ṣayrūrah, dukhūl',
      subtitle: 'الزيادة طلبًا لمعنى جديد — وأشهر معاني الهمزة',
      matn: { src: 'DATA_WK08', from: 1, to: 13, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'What "meanings of the patterns" means',
          focus: [1, 2, 3, 4, 5],
          points: [
            'These are meanings a word carries **by its pattern**, not by its letters. The bare pattern\'s base meaning: فِعْلُ الْفَاعِلِ لِلْفِعْلِ — the agent doing the act.',
            'Augmenting a verb happens ONLY **in pursuit of a new meaning** (طَلَبًا لِمَعْنًى جَدِيدٍ). The author lists the most important senses, not all.',
          ] },

        { t: 'teach', title: 'التعدية — the hamzah\'s chief job',
          focus: [7, 8, 9, 10],
          points: [
            'Turning the agent into an object: أَقَمْتُ زَيْدًا — I made Zayd stand. Lāzim → one object؛ one object → two (أَقْرَأْتُهُ الْكِتَابَ)؛ two → three.',
            'Only **رَأَى وَعَلِمَ** go from two to three: أَعْلَمْتُ زَيْدًا بَكْرًا قَائِمًا.',
          ] },

        { t: 'teach', title: 'الصيرورة والدخول',
          focus: [12, 13],
          points: [
            '**الصيرورة** — becoming a possessor: أَلْبَنَ (came to have milk)، أَتْمَرَ، أَفْلَسَ.',
            '**الدخول في شيء** — place or time: أَشْأَمَ (entered Syria)، أَعْرَقَ، أَصْبَحَ، أَمْسَى.',
          ] },

        { t: 'mcq', q: 'Why does a speaker ever move a verb from mujarrad to mazīd?',
          choices: ['In pursuit of a NEW meaning', 'For rhythm only', 'Because long verbs are more eloquent', 'It happens randomly'],
          correct: 0,
          why: 'إِنَّمَا يَكُونُ طَلَبًا لِمَعْنًى جَدِيدٍ — every added letter buys semantics (unlike ilḥāq\'s phonetic letter).' },

        { t: 'mcq', q: 'The MOST common meaning of أَفْعَلَ is…',
          choices: ['التعدية — making transitive (one step up)', 'الصيرورة', 'الدخول', 'التعريض'],
          correct: 0,
          why: 'هَذَا الْمَعْنَى الْأَكْثَرُ: aqamtu, aqʿadtu, aqraʾtu — the causative hamzah.' },

        { t: 'mcq', q: 'Which two verbs alone become triply-transitive with the hamzah?',
          choices: ['رَأَى وَعَلِمَ', 'قَرَأَ وَكَتَبَ', 'ظَنَّ وَحَسِبَ', 'قَالَ وَبَاعَ'],
          correct: 0,
          why: 'أَعْلَمْتُ/أَرَيْتُ زَيْدًا بَكْرًا قَائِمًا — no other doubly-transitive verb accepts the third object.' },

        { t: 'mcq', q: 'أَفْلَسَ الرَّجُلُ means "the man went bankrupt" through which sense of أَفْعَلَ?',
          choices: ['الصيرورة — he came to be a possessor of (mere) fulūs', 'التعدية', 'السلب', 'التمكين'],
          correct: 0,
          why: 'ṣāra dhā fulūs — like albana (milk) and atmara (dates): entering a new state of possession.' },

        { t: 'mcq', q: 'أَصْبَحَ and أَمْسَى are built on which meaning?',
          choices: ['Entering a TIME (morning/evening)', 'Entering a PLACE', 'Removal', 'Feigning'],
          correct: 0,
          why: 'الدخول في شيء مكانًا أو زمانًا — ashʾama/aʿraqa enter places; aṣbaḥa/amsā enter times.' },
      ],
    },

    /* ═══ 2. afʿala II ═══ */
    {
      id: 'afala-2',
      title: 'أَفْعَلَ II: the remaining seven senses',
      subtitle: 'السلب · المصادفة · الاستحقاق · التعريض · بمعنى استفعل · المطاوعة · التمكين',
      matn: { src: 'DATA_WK08', from: 15, to: 25, check: 'الرَّابِعُ' },
      steps: [
        { t: 'teach', title: 'Senses 4–7',
          focus: [15, 16, 17, 18],
          points: [
            '**السلب والإزالة**: أَقْذَيْتُ عَيْنَهُ — I *removed* the mote؛ أَعْجَمْتُ الْكِتَابَ — removed its obscurity by dotting.',
            '**المصادفة**: أَحْمَدْتُهُ/أَبْخَلْتُهُ — I *found* him praiseworthy/stingy. **الاستحقاق**: أَحْصَدَ الزَّرْعُ — the crop *deserves* harvesting؛ أَزْوَجَتْ هِنْدُ.',
            '**التعريض**: أَرْهَنْتُ الْمَتَاعَ وَأَبَعْتُهُ — I *offered* it for pawning and sale.',
          ] },

        { t: 'teach', title: 'Senses 8–10 — and the shared-meaning cases',
          focus: [19, 20, 21, 22, 24, 25],
          points: [
            '**بمعنى استفعل**: أَعْظَمْتُهُ = اسْتَعْظَمْتُهُ. **مطاوعة فَعَّلَ**: فَطَّرْتُهُ فَأَفْطَرَ، بَشَّرْتُهُ فَأَبْشَرَ. **التمكين**: أَحْفَرْتُهُ النَّهْرَ — I enabled him to dig it.',
            'Sometimes فَعَلَ and أَفْعَلَ mean the same: سَرَى/أَسْرَى، سَقَى/أَسْقَى، ضَاءَ/أَضَاءَ — though some scholars say أفعل adds emphasis. And أَفْلَحَ has NO bare base.',
            'Rarely the roles flip — bare transitive, hamzated intransitive: نَسَلْتُ رِيشَهُ vs أَنْسَلَ الرِّيشُ.',
          ] },

        { t: 'mcq', q: 'أَقْذَيْتُ عَيْنَ فُلَانٍ means…',
          choices: ['I REMOVED the mote from his eye — the salb sense', 'I put a mote in his eye', 'I found his eye beautiful', 'I enabled him to see'],
          correct: 0,
          why: 'The hamzah of removal: azaltu l-qadhā ʿan ʿaynih. Counter-intuitive — the pattern usually adds, here it strips away.' },

        { t: 'mcq', q: 'أَحْصَدَ الزَّرْعُ expresses…',
          choices: ['الاستحقاق — the crop became fit/deserving of harvest', 'التعدية — someone made it harvest', 'الصيرورة — it became a harvest', 'المصادفة'],
          correct: 0,
          why: 'istaḥaqqa z-zarʿu l-ḥaṣāda — like azwajat Hindu (fit for marriage).' },

        { t: 'mcq', q: 'كَسَرْتُهُ فَانْكَسَرَ pairs kasara with inkasara. فَطَّرْتُهُ فَأَفْطَرَ shows أَفْعَلَ acting as…',
          choices: ['muṭāwiʿ of فَعَّلَ — accepting the prior act\'s effect', 'taʿdiyah of فَعَّلَ', 'ṣayrūrah', 'takthīr'],
          correct: 0,
          why: 'Sense 9: afʿala can be the *reflexive* of the doubled pattern — the opposite of its usual causative job.' },

        { t: 'mcq', q: 'أَفْلَحَ is cited because…',
          choices: ['it replaces a bare form that never existed (no فَلَحَ meaning "succeed")', 'it has eleven meanings', 'it is a naḥt verb', 'it takes three objects'],
          correct: 0,
          why: 'أَغْنَى عَنْ أَصْلِهِ لِعَدَمِ وُرُودِهِ — like aqsama and adraka.' },

        { t: 'mcq', q: 'The rare REVERSED case is نَسَلْتُ الرِّيشَ / أَنْسَلَ الرِّيشُ — what flipped?',
          choices: ['The bare verb is transitive and the hamzated one intransitive', 'The meaning of the root', 'Past and present', 'Nothing'],
          correct: 0,
          why: 'نَدَرَ مَجِيءُ الْفِعْلِ مُتَعَدِّيًا بِلَا هَمْزَةٍ وَلَازِمًا بِهَا — afʿala turned muṭāwiʿ of faʿala (also أَقْشَعَ السَّحَابُ).' },
      ],
    },

    /* ═══ 3. fāʿala ═══ */
    {
      id: 'faala',
      title: 'فَاعَلَ: mushārakah & muwālāh',
      subtitle: 'خاصمته · واليت الصوم · يخادعون الله',
      matn: { src: 'DATA_WK08', from: 26, to: 35, check: '٢' },
      steps: [
        { t: 'teach', title: 'The two frequent senses',
          focus: [27, 28, 29, 30, 31],
          points: [
            '**التشارك**: one does the act to his fellow, who repays in kind — ضَارَبْتُهُ، خَاصَمْتُهُ. A lāzim base becomes transitive: مَاشَيْتُهُ from مَشَيْتُ.',
            'Contest built in: victory is then expressed by فَعَلَ **من باب نصر** — unless wāwī-fāʾ or yāʾī ʿayn/lām, then باب ضرب.',
            '**الموالاة**: doing the act in succession — وَالَيْتُ الصَّوْمَ وَتَابَعْتُهُ = one part right after another.',
          ] },

        { t: 'teach', title: 'Occasional senses',
          focus: [33, 34, 35],
          points: [
            'Like فَعَّلَ for intensification: ضَاعَفَ = ضَعَّفَ. Like plain فَعَلَ: دَافَعَ/دَفَعَ، سَافَرَ/سَفَرَ (or: the mazīd adds emphasis — سافر is the *far* setting-out).',
            'Sometimes mushārakah is figurative — the non-agent treated as an agent: ﴿يُخَادِعُونَ اللهَ﴾ — their concealing kufr called a "mutual deceiving", and His requital its answer.',
          ] },

        { t: 'mcq', q: 'مَاشَيْتُهُ shows fāʿala doing what to the lāzim base مَشَى?',
          choices: ['Making it transitive with the sharing sense — "I walked WITH him"', 'Negating it', 'Making it passive', 'Doubling its object count'],
          correct: 0,
          why: 'إِذَا كَانَ أَصْلُ الْفِعْلِ لَازِمًا صَارَ بِهَذِهِ الصِّيغَةِ مُتَعَدِّيًا.' },

        { t: 'mcq', q: 'وَالَيْتُ الصَّوْمَ means…',
          choices: ['I fasted day after day in succession (muwālāh)', 'I competed in fasting', 'I broke my fast', 'I intended to fast'],
          correct: 0,
          why: 'وُقُوعُ الْفِعْلِ بَعْضَهُ فِي أَثَرِ بَعْضٍ — succession, the second frequent sense.' },

        { t: 'mcq', q: 'In ﴿يُخَادِعُونَ اللهَ﴾, how is mufāʿalah possible with God?',
          choices: ['The non-agent is placed in the agent\'s position figuratively — their concealment + His requital styled a mutual act', 'God literally deceives', 'The verb lost its meaning', 'It is a scribal variant'],
          correct: 0,
          why: 'بِتَنْزِيلِ غَيْرِ الْفِعْلِ مَنْزِلَتَهُ — a rhetorical extension of the sharing sense.' },

        { t: 'mcq', q: 'سَافَرَ vs سَفَرَ — the refined view says:',
          choices: ['the mazīd marks emphasis/distance: سافر is the far journey', 'they are unrelated roots', 'سَفَرَ is the augmented one', 'سافر is passive'],
          correct: 0,
          why: 'وَقِيلَ نَجْعَلُ الْمَزِيدَ لِلْمُبَالَغَةِ… فَسَفَرَ لِكُلِّ خُرُوجٍ وَسَافَرَ لِلْخُرُوجِ الْبَعِيدِ.' },
      ],
    },

    /* ═══ 4. faʿʿala ═══ */
    {
      id: 'faaala',
      title: 'فَعَّلَ: eight meanings',
      subtitle: 'التكثير أغلبها — غلّقت الأبواب',
      matn: { src: 'DATA_WK09', from: 1, to: 15, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Shared with أفعل: taʿdiyah & izālah',
          focus: [2, 3, 4],
          points: [
            '**التعدية**: قَوَّمْتُ زَيْدًا؛ فَهِمَ الدَّرْسَ ← فَهَّمْتُهُ الدَّرْسَ (one → two objects).',
            '**الإزالة**: جَرَّبْتُ الْبَعِيرَ — removed its mange؛ قَشَّرْتُ الْفَاكِهَةَ — removed the peel.',
          ] },

        { t: 'teach', title: 'Its six unique senses',
          focus: [5, 6, 7, 8, 9, 10, 11],
          points: [
            '**التكثير** — THE dominant sense — in the act (جَوَّلَ، طَوَّفَ)، the object (غَلَّقَتِ الْأَبْوَابَ — many doors)، or the agent (مَوَّتَتِ الْإِبِلُ).',
            '**Becoming like**: قَوَّسَ (bent like a bow)، حَجَّرَ الطِّينُ · **ascription**: فَسَّقْتُهُ، كَفَّرْتُهُ · **heading toward**: شَرَّقْتُ، غَرَّبْتُ.',
            '**Abbreviation of a formula**: هَلَّلَ، سَبَّحَ، لَبَّى، أَمَّنَ، كَبَّرَ، سَلَّمَ · **acceptance**: شَفَّعْتُ زَيْدًا — I accepted his intercession.',
          ] },

        { t: 'teach', title: 'Edge cases',
          focus: [13, 14, 15],
          points: [
            'Same as the bare: ﴿زُيِّنَ لِلنَّاسِ﴾ — زَيَّنَ = زَانَ. Same as تَفَعَّلَ: وَلَّى/تَوَلَّى، فَكَّرَ/تَفَكَّرَ.',
            'Replacing a non-existent bare form: عَيَّرَهُ (no bare)، عَجَّزَتِ الْمَرْأَةُ.',
          ] },

        { t: 'mcq', q: 'The dominant meaning of فَعَّلَ is…',
          choices: ['التكثير — intensification/plurality', 'التعدية', 'الاتخاذ', 'الطلب'],
          correct: 0,
          why: 'أَغْلَبُ الْمَعَانِي — jawwala roamed *much*, ghallaqat shut *many* doors, mawwatat il-ibil died *in numbers*.' },

        { t: 'mcq', q: 'غَلَّقَتِ الْأَبْوَابَ intensifies in which element?',
          choices: ['The object — she shut MANY doors', 'The agent', 'The act itself', 'The time'],
          correct: 0,
          why: 'Takthīr can sit in the act (جوّل), the object (غلّقت الأبواب), or the agent (موّتت الإبل).' },

        { t: 'mcq', q: 'حَجَّرَ الطِّينُ means the clay…',
          choices: ['became LIKE stone in hardness (ṣayrūrat shibh)', 'was removed', 'was thrown', 'became many stones'],
          correct: 0,
          why: 'صيرورة شيء شِبْهَ شيء — like qawwasa Zayd (bent bow-like).' },

        { t: 'mcq', q: 'فَسَّقْتُ زَيْدًا means…',
          choices: ['I ascribed him to fisq — called him a fāsiq', 'I made him sin', 'I removed his sin', 'I found him pious'],
          correct: 0,
          why: 'نسبة الشيء إلى أصل الفعل — likewise كَفَّرْتُهُ = declared him a kāfir.' },

        { t: 'mcq', q: 'هَلَّلَ، لَبَّى، أَمَّنَ share which sense?',
          choices: ['Abbreviating a spoken formula (اختصار الحكاية)', 'Intensity', 'Removal', 'Direction'],
          correct: 0,
          why: 'Each verb *quotes*: hallala = said lā ilāha illā llāh; labbā = said labbayk; ammana = said āmīn.' },

        { t: 'mcq', q: 'شَفَّعْتُ زَيْدًا means…',
          choices: ['I ACCEPTED Zayd\'s intercession', 'I appointed Zayd an intercessor', 'I refused his intercession', 'I interceded for Zayd'],
          correct: 0,
          why: 'قبول فعل الفاعل — the shaffiʿ-form marks receiving the act, not doing it.' },

        { t: 'written',
          prompt: 'فَعَّلَ shares two meanings with أَفْعَلَ and owns six. Name the two shared and any four of the six, with one example each.',
          model: 'Shared: التعدية (فَهَّمْتُهُ الدرس) and الإزالة (قَشَّرْتُ الفاكهة).\nUnique (any four): التكثير (غَلَّقَت الأبواب) · صيرورة شيء شبه شيء (حَجَّرَ الطين) · النسبة إلى أصل الفعل (فَسَّقْتُهُ) · التوجه (شَرَّقْتُ) · اختصار الحكاية (هَلَّلَ، لَبَّى) · قبول الشيء (شَفَّعْتُ زيدًا).' },
      ],
    },

    /* ═══ 5. infaʿala ═══ */
    {
      id: 'infaala',
      title: 'انْفَعَلَ: pure muṭāwaʿah',
      subtitle: 'لازم دائمًا — وفي العلاجيات فقط',
      matn: { src: 'DATA_WK10', from: 2, to: 8, check: '٤' },
      steps: [
        { t: 'teach', title: 'One meaning, two restrictions',
          focus: [2, 3, 4, 5, 6, 7, 8],
          points: [
            'انفعل carries ONE meaning: **المطاوعة** — accepting another\'s effect (عكس التعدية). Hence it is **always لازم**.',
            'And it lives only in **الأفعال العلاجية** — acts done with the limbs, not heart or mind. So قَطَعْتُهُ فَانْقَطَعَ ✓ but عَلَّمْتُهُ فَانْعَلَمَ ✗.',
            'Mostly reflexive of the trilateral (كَسَرْتُهُ فَانْكَسَرَ)؛ rarely of others: أَطْلَقْتُهُ فَانْطَلَقَ، عَدَّلْتُهُ فَانْعَدَلَ.',
          ] },

        { t: 'mcq', q: 'Why can انفعل NEVER be transitive?',
          choices: ['Its single meaning is muṭāwaʿah — accepting an effect, the opposite of acting on something', 'Its nūn blocks objects grammatically', 'It is always passive voice', 'It has no present tense'],
          correct: 0,
          why: 'A verb whose whole job is *receiving* an effect has nothing to act upon — لَا يَكُونُ إِلَّا لَازِمًا.' },

        { t: 'mcq', q: 'Why is فَهَّمْتُهُ فَانْفَهَمَ rejected?',
          choices: ['Understanding is not ʿilājī — infaʿala only pairs with limb-verbs', 'The doubling blocks it', 'fahima is intransitive', 'It is dialectal'],
          correct: 0,
          why: 'الفعل العلاجي هو الذي يُفعل بالجوارح لا بالقلب أو العقل — mental acts refuse infaʿala.' },

        { t: 'mcq', q: 'What exactly is المطاوعة?',
          choices: ['Accepting the effect of another\'s act — the opposite of taʿdiyah', 'Doing an act repeatedly', 'Seeking an act', 'Feigning an act'],
          correct: 0,
          why: 'قَبُولُ تَأْثِيرِ الْغَيْرِ: kasartuhu (I acted) → inkasara (it received).' },

        { t: 'mcq', q: 'أَطْلَقْتُهُ فَانْطَلَقَ shows infaʿala as reflexive of…',
          choices: ['a non-trilateral (أَفْعَلَ) — the rarer case', 'the bare trilateral', 'a quadriliteral', 'a naḥt verb'],
          correct: 0,
          why: 'لِمُطَاوَعَةِ غَيْرِهِ قَلِيلًا — usually it answers the bare verb (قطعته فانقطع).' },
      ],
    },

    /* ═══ 6. iftaʿala & ifʿalla ═══ */
    {
      id: 'iftaala',
      title: 'افْتَعَلَ (six senses) & افْعَلَّ',
      subtitle: 'الاتخاذ · الاجتهاد · التشارك · الإظهار · المبالغة · المطاوعة — وقوة اللون',
      matn: { src: 'DATA_WK10', from: 9, to: 21, check: '٥' },
      steps: [
        { t: 'teach', title: 'iftaʿala\'s six',
          focus: [10, 11, 12, 13, 15, 16, 17, 18],
          points: [
            '**الاتخاذ**: اخْتَتَمَ — took a ring؛ اخْتَدَمَ — took a servant · **الاجتهاد والطلب**: اكْتَسَبَ is more effortful than كَسَبَ (so too اسْتَمَعَ vs سَمِعَ).',
            '**التشارك**: اخْتَصَمَ زَيْدٌ وَعَمْرٌو · **الإظهار**: اعْتَذَرَ — showed the excuse · **المبالغة**: اقْتَدَرَ، اشْتَدَّ؛ ﴿اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ﴾ = intensified قَرُبَ.',
            '**مطاوعة الثلاثي** frequently: عَدَلْتُهُ فَاعْتَدَلَ، جَمَعْتُهُ فَاجْتَمَعَ؛ sometimes of فعّل/أفعل: قَرَّبْتُهُ فَاقْتَرَبَ، أَنْصَفْتُهُ فَانْتَصَفَ. And it may replace a non-existent bare: ارْتَجَلَ، اشْتَمَلَ، افْتَقَرَ.',
          ] },

        { t: 'teach', title: 'ifʿalla — colour & defect dialled up',
          focus: [20, 21],
          points: [
            'Usually ONE meaning: **قوة اللون أو العيب** — احْمَرَّ، ابْيَضَّ، اعْوَرَّ، اعْمَشَّ. Always لازم.',
          ] },

        { t: 'mcq', q: 'اخْتَتَمَ زَيْدٌ means…',
          choices: ['he took a ring for himself (ittikhādh)', 'he sealed a letter', 'he finished the Qurʾān', 'he fought over a ring'],
          correct: 0,
          why: 'اتَّخَذَ لَهُ خَاتَمًا — the adopting sense, like ikhtaddama (took a servant).' },

        { t: 'mcq', q: 'What distinguishes اكْتَسَبَ from كَسَبَ?',
          choices: ['Greater effort and seeking (ijtihād & ṭalab) in the earning', 'Nothing', 'It is intransitive', 'It means losing'],
          correct: 0,
          why: 'فَهُوَ أَكْثَرُ جُهْدًا مِنْ كَسَبَ — same pair as سَمِعَ/اسْتَمَعَ (hearing vs attentive listening).' },

        { t: 'mcq', q: '﴿اقْتَرَبَتِ السَّاعَةُ﴾ uses iftaʿala for…',
          choices: ['mubālaghah — an intensified قَرُبَ', 'ittikhādh', 'iẓhār', 'tashāruk'],
          correct: 0,
          why: 'The Hour has drawn *very* near — hyperbole in the verb\'s meaning, like iqtadara and ishtadda.' },

        { t: 'mcq', q: 'اعْتَذَرَ expresses which sense?',
          choices: ['الإظهار — showing/manifesting the excuse', 'المطاوعة', 'الاتخاذ', 'الصيرورة'],
          correct: 0,
          why: 'أَظْهَرَ الْعُذْرَ — likewise iʿtaẓama showed greatness.' },

        { t: 'mcq', q: 'ifʿalla (احْمَرَّ، اعْوَرَّ) usually means — and its transitivity is…',
          choices: ['intensity of colour or defect; always intransitive', 'removal; transitive', 'reciprocity; transitive', 'feigning; intransitive'],
          correct: 0,
          why: 'قُوَّةُ اللَّوْنِ أَوِ الْعَيْبِ وَلَا يَكُونُ إِلَّا لَازِمًا.' },
      ],
    },

    /* ═══ 7. tafaʿʿala ═══ */
    {
      id: 'tafaaala',
      title: 'تَفَعَّلَ: five meanings',
      subtitle: 'مطاوعة فعّل · الاتخاذ · التكلف · التجنب · التدريج',
      matn: { src: 'DATA_WK11', from: 2, to: 9, check: '٧' },
      steps: [
        { t: 'teach', title: 'The five',
          focus: [3, 4, 5, 6, 7, 8, 9],
          points: [
            '**مطاوعة فَعَّلَ**: عَلَّمْتُهُ فَتَعَلَّمَ، أَدَّبْتُهُ فَتَأَدَّبَ · **الاتخاذ**: تَوَسَّدَ ثَوْبَهُ (took it as a pillow)، تَبَنَّى الْوَلَدَ.',
            '**التكلف** — striving at what doesn\'t come naturally: تَصَبَّرَ، تَحَلَّمَ — the ḥadīth: إِنَّمَا الْعِلْمُ بِالتَّعَلُّمِ وَإِنَّمَا الْحِلْمُ بِالتَّحَلُّمِ.',
            '**التجنب**: تَحَرَّجَ — avoided sin؛ تَهَجَّدَ — shunned sleep · **التدريج**: تَجَرَّعْتُ الْمَاءَ sip by sip؛ تَحَفَّظْتُ الْعِلْمَ issue by issue. It may also replace a missing bare form: تَكَلَّمَ، تَصَدَّى.',
          ] },

        { t: 'mcq', q: 'نَبَّهْتُهُ فَتَنَبَّهَ — tafaʿʿala here is…',
          choices: ['the muṭāwiʿ of فَعَّلَ', 'the muṭāwiʿ of أَفْعَلَ', 'ittikhādh', 'tadrīj'],
          correct: 0,
          why: 'Its first meaning: receiving the doubled pattern\'s effect — علّمته فتعلّم.' },

        { t: 'mcq', q: 'تَوَسَّدَ ثَوْبَهُ means…',
          choices: ['he took his garment as a pillow', 'he tore his garment', 'he washed it gradually', 'he avoided wearing it'],
          correct: 0,
          why: 'الاتخاذ — like tabannā l-walada: took the child as a son.' },

        { t: 'mcq', q: 'The ḥadīth إِنَّمَا الْحِلْمُ بِالتَّحَلُّمِ witnesses which sense?',
          choices: ['التكلف — forbearance is won by forcing oneself to it', 'التجنب', 'التدريج', 'الاتخاذ'],
          correct: 0,
          why: 'Taḥallum = straining toward ḥilm until it sticks — the very meaning of takalluf.' },

        { t: 'mcq', q: 'تَهَجَّدَ is built on تَجَنُّب because…',
          choices: ['it means avoiding الْهُجُود (sleep) — rising to pray', 'it means sleeping deeply', 'it means praying quickly', 'it is a naḥt verb'],
          correct: 0,
          why: 'tajannaba l-hujūd — like taḥarraja: avoided ḥaraj. The pattern negates its own root!' },

        { t: 'mcq', q: 'تَجَرَّعْتُ الْمَاءَ differs from شَرِبْتُ الْمَاءَ in…',
          choices: ['gradualness — sip after sip (التدريج)', 'quantity only', 'politeness', 'tense'],
          correct: 0,
          why: 'فِعْلُ الْفِعْلِ مَرْحَلَةً بِمَرْحَلَةٍ — same as تحفّظت العلم مسألةً بعد أخرى.' },
      ],
    },

    /* ═══ 8. tafāʿala, istafʿala & the intensives ═══ */
    {
      id: 'tafaala-istafala',
      title: 'تَفَاعَلَ · اسْتَفْعَلَ · باقي الصيغ',
      subtitle: 'تخاصما · تناوم · استغفر · يستنسر البغاث · اعشوشب',
      matn: { src: 'DATA_WK11', from: 10, to: 35, check: '٨' },
      steps: [
        { t: 'teach', title: 'تَفَاعَلَ — four meanings',
          focus: [11, 12, 14, 17, 18, 20, 21],
          points: [
            '**التشريك** with both parties as grammatical agents: تَخَاصَمَ زَيْدٌ وَعَمْرٌو — unlike خَاصَمَ زَيْدٌ عَمْرًا (one fāʿil, one mafʿūl). So a doubly-transitive فاعل drops to one object (تَجَاذَبَا ثَوْبًا) and a singly-transitive one goes lāzim.',
            '**التظاهر** — feigning: تَنَاوَمَ، تَغَافَلَ، تَعَامَى — "the true chief of his people is الْمُتَغَابِي".',
            '**التدرج**: تَزَايَدَ النِّيلُ، تَوَارَدَتِ الْإِبِلُ · **مطاوعة فاعل**: بَاعَدْتُهُ فَتَبَاعَدَ.',
          ] },

        { t: 'teach', title: 'اسْتَفْعَلَ — six meanings',
          focus: [23, 24, 25, 27, 28, 29, 30, 31, 32],
          points: [
            '**الطلب** (the chief): اسْتَغْفَرْتُ اللهَ — literal؛ اسْتَخْرَجْتُ الذَّهَبَ — figurative "seeking".',
            '**الصيرورة**: اسْتَحْجَرَ الطِّينُ، اسْتَحْصَنَ الْمُهْرُ؛ figuratively: إِنَّ الْبُغَاثَ بِأَرْضِنَا يَسْتَنْسِرُ — the weak *become eagles*.',
            '**اعتقاد الصفة**: اسْتَحْسَنْتُهُ · **الاختصار**: اسْتَرْجَعَ (said إنا لله…) · **القوة**: اسْتَكْبَرَ · **المصادفة**: اسْتَكْرَمْتُهُ. Occasionally = أفعل (أَجَابَ/اسْتَجَابَ) or its muṭāwiʿ (أَقَمْتُهُ فَاسْتَقَامَ).',
          ] },

        { t: 'teach', title: 'The remaining intensives',
          focus: [33, 34, 35],
          body: '**افْعَوْعَلَ، افْعَوَّلَ، افْعَالَّ** all mark **قوة المعنى** beyond the base: اعْشَوْشَبَ > عَشِبَ؛ اخْشَوْشَنَ > خَشُنَ؛ احْمَارَّ > احْمَرَّ > حَمِرَ.' },

        { t: 'mcq', q: 'تَخَاصَمَ زَيْدٌ وَعَمْرٌو vs خَاصَمَ زَيْدٌ عَمْرًا — the grammatical difference?',
          choices: ['In تفاعل both parties are worded as agents (the 2nd conjoined); in فاعل one is agent, one object', 'No difference at all', 'تفاعل is transitive to two', 'فاعل is passive'],
          correct: 0,
          why: 'بِجَعْلِ طَرَفَيِ الْفِعْلِ فَاعِلَيْنِ فِي اللَّفْظِ — meaning-wise both are always agents.' },

        { t: 'mcq', q: 'تَنَاوَمَ means…',
          choices: ['he FEIGNED sleep without its reality (التظاهر)', 'he slept deeply', 'he slept gradually', 'he made someone sleep'],
          correct: 0,
          why: 'أَظْهَرَ النَّوْمَ وَهُوَ مُنْتَفٍ عَنْهُ — the poet\'s المُتَغَابِي feigns dullness.' },

        { t: 'mcq', q: 'The chief meaning of اسْتَفْعَلَ is…',
          choices: ['الطلب — seeking the act (اسْتَغْفَرَ = sought forgiveness)', 'الصيرورة', 'التكثير', 'التجنب'],
          correct: 0,
          why: 'أَغْلَبُ مَعَانِيهِ — literal with a requestable party, figurative otherwise (استخرجت الذهب).' },

        { t: 'mcq', q: 'إِنَّ الْبُغَاثَ بِأَرْضِنَا يَسْتَنْسِرُ uses istafʿala for…',
          choices: ['figurative ṣayrūrah — the weak bird "turns eagle" in strength', 'literal seeking', 'abbreviation', 'muṭāwaʿah'],
          correct: 0,
          why: 'يَصِيرُ كَالنَّسْرِ فِي الْقُوَّةِ — the weak become strong through us.' },

        { t: 'mcq', q: 'اسْتَرْجَعَ means…',
          choices: ['he said إِنَّا لِلهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ (abbreviation)', 'he returned home', 'he demanded something back', 'he became strong'],
          correct: 0,
          why: 'اختصار حكاية الشيء — istafʿala\'s parallel to faʿʿala\'s هلّل وسبّح.' },

        { t: 'mcq', q: 'Rank by intensity: حَمِرَ، احْمَرَّ، احْمَارَّ.',
          choices: ['حَمِرَ < احْمَرَّ < احْمَارَّ', 'احْمَارَّ < احْمَرَّ < حَمِرَ', 'all equal', 'احْمَرَّ < حَمِرَ < احْمَارَّ'],
          correct: 0,
          why: 'The longer the pattern, the stronger the colour: ifʿālla tops ifʿalla tops the bare verb.' },

        { t: 'written',
          prompt: 'Give the ONE meaning of انْفَعَلَ, the chief meaning of اسْتَفْعَلَ, and the sense shared by افْعَوْعَلَ/افْعَوَّلَ/افْعَالَّ — with an example each.',
          model: '• انفعل: المطاوعة only — قَطَعْتُهُ فَانْقَطَعَ (hence always lāzim, only in ʿilājī verbs).\n• استفعل: الطلب — اسْتَغْفَرْتُ اللهَ = طلبت مغفرته.\n• The three intensives: قوة المعنى زيادة على أصله — اعْشَوْشَبَ المكان أكثر من عَشِبَ؛ احْمَارَّ أقوى من احْمَرَّ.' },
      ],
    },

  ],
});
