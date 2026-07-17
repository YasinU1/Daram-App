/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الباب الثاني (٢ز): بقية أقسام الحرف (pp. 93–104) ──
   Authored directly from the book PDF (no Obsidian notes exist past note 80). NO matn panels:
   these pages are not transcribed in the reader — teach cards use static ar:/arEn: blocks and
   carry `page:` (book page) so every key idea maps back to the book. No bank steps yet.        */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-bab-2g',
  titleAr: 'بَقِيَّةُ أَقْسَامِ الْحَرْفِ',
  titleEn: 'The Particle VII — the remaining classes',
  pages: '93–104',
  sections: [

    /* ═══ 1. التوبيخ والتحضيض · العرض ═══ */
    {
      id: 'tahdid-arad',
      title: 'أحرف التوبيخ والتحضيض والعرض',
      subtitle: 'لومٌ على الماضي · طلبٌ بشدة · طلبٌ بلين',
      steps: [
        { t: 'teach', title: 'توبيخ vs تحضيض — one set, two tenses', page: 93,
          ar: 'التَّوْبِيخُ لَوْمٌ عَلَى الْخَطَأِ … والتَّحْضِيضُ طَلَبٌ بِشِدَّةٍ',
          arEn: 'Rebuke is blame for a fault; incitement is a forceful demand.',
          points: [
            '**التوبيخ** = blame for a past error — its particles sit **before the māḍī** (in form and meaning).',
            '**التحضيض** = urgent demand — the same particles sit **before the muḍāriʿ**.',
            'They are **five**: **هلَّا · ألَّا · لولا · لوما · أَلَا** — e.g. «هلَّا صَلَّيْتَ» (why didn’t you pray! — توبيخ) vs «هلَّا تُصَلِّي» (pray, do! — تحضيض).',
          ] },

        { t: 'teach', title: 'The five, unpacked', page: 93,
          points: [
            '**هلَّا** = هل الاستفهامية + لا النافية; **ألَّا** — «ألَّا أنفقتَ على الفقراءِ» / «ألَّا تُنفِقُ على الفقراءِ»; **لولا** — «لولا صُمْتَ» / «لولا تصومُ» (p. 93).',
            '**لوما** — «لوما صدقتَ», ﴿لَوْمَا تَأْتِينَا بِالْمَلَائِكَةِ﴾; its أصل, like لولا’s: لو الشرطية + حرف نفي (p. 94).',
            '**أَلَا** — ﴿أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللهُ لَكُمْ﴾; أصلها همزة استفهام + حرف نفي; and it is **restricted to the muḍāriʿ** — never before a māḍī (p. 94).',
          ],
          after: 'لولا and لوما thus serve الشرط والتوبيخ والتحضيض — the السياق decides which.' },

        { t: 'teach', title: 'أحرف العَرْض — the gentle offer', page: 94,
          ar: 'الْعَرْضُ طَلَبٌ بِلِينٍ',
          arEn: 'ʿarḍ: a gentle, courteous request.',
          points: [
            '**أَلَا**: «ألا تقومُ بالليلِ؟» — also a تحضيض particle; السياق distinguishes force from gentleness.',
            '**أَمَا**: «أما تصومُ يومَ الاثنينِ والخميسِ» — أصلها همزة استفهام + حرف نفي.',
            '**لَوْ**: «لو تتصدَّقُ على الفقراءِ».',
          ] },

        { t: 'mcq', q: '«هَلَّا صَلَّيْتَ» vs «هَلَّا تُصَلِّي» — same particle, different force. Why?',
          choices: ['Before the māḍī it is توبيخ (blame for the fault); before the muḍāriʿ it is تحضيض (urgent demand)', 'The first is a real question', 'The second is a wish', 'No difference at all'],
          correct: 0,
          why: 'The whole قسم works this way: tense of the following verb decides rebuke vs incitement.' },

        { t: 'mcq', q: 'What is the أصل of هلَّا?',
          choices: ['هل الاستفهامية + لا النافية', 'هل + إلّا', 'A single root particle', 'حتى + لا'],
          correct: 0,
          why: 'Same pattern as its siblings: ألا = همزة استفهام + نفي, لولا/لوما = لو الشرطية + نفي.' },

        { t: 'mcq', q: '«لَوْلَا صُمْتَ» and ﴿وَلَوْلَا فَضْلُ اللهِ عَلَيْكُمْ﴾ — how do you tell the two لولاs apart?',
          choices: ['By السياق: before a verb it is توبيخ/تحضيض; heading an اسمية with deleted khabar it is شرطية (امتناع لوجود)', 'They are the same particle with one meaning', 'By the case of the following noun only', 'لولا is always شرطية'],
          correct: 0,
          why: 'لولا ولوما تأتيان للشرط والتوبيخ والتحضيض فتعرفان بالسياق — the book’s own rule.' },

        { t: 'mcq', q: '«أَلَا تَقُومُ بِاللَّيْلِ؟» said kindly to a friend — which use of ألا?',
          choices: ['العرض — a gentle request (طلب بلين), distinguished from تحضيض by context', 'التوبيخ', 'التنبيه', 'النفي'],
          correct: 0,
          why: 'ألا serves تحضيض and عرض; the difference is force (بشدة) vs gentleness (بلين), read from السياق.' },

        { t: 'written',
          prompt: 'Define التوبيخ, التحضيض and العرض; name the five particles of the first pair and the three of العرض; and state the tense rule and the أصل of ألا.',
          model: 'التوبيخ is blame for a fault (لوم على الخطأ) — its particles precede the māḍī; التحضيض is a forceful demand (طلب بشدة) — the same particles precede the muḍāriʿ. They are five: هلّا («هلا صليتَ» / «هلا تصلي»), ألّا («ألّا أنفقتَ» / «ألّا تنفق»), لولا («لولا صمتَ» / «لولا تصوم»), لوما («لوما صدقتَ»، ﴿لوما تأتينا بالملائكة﴾), and ألا ﴿ألا تحبون أن يغفر الله لكم﴾ — this last restricted to the muḍāriʿ. Their أصل: هلّا = هل الاستفهامية + لا النافية; ألا وأما = همزة الاستفهام + حرف نفي; لولا ولوما = لو الشرطية + حرف نفي, and these two also serve الشرط — السياق decides. العرض is a gentle request (طلب بلين), with three particles: ألا «ألا تقوم بالليل؟», أما «أما تصوم يوم الاثنين والخميس», and لو «لو تتصدق على الفقراء».' },
      ],
    },

    /* ═══ 2. أحرف التنبيه ═══ */
    {
      id: 'tanbih',
      title: 'القسم السابع: أحرف التنبيه',
      subtitle: 'ألا · أما · ها',
      steps: [
        { t: 'teach', title: 'ألا — the wake-up call', page: 95,
          ar: 'الأَوَّلُ أَلَا: ﴿أَلَا إِنَّ نَصْرَ اللهِ قَرِيبٌ﴾',
          arEn: 'alā: “Truly, the help of Allah is near.”',
          points: [
            'The جملة after it usually carries **some تأكيد**: ﴿أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ﴾.',
            'It enters **both** the اسمية and the فعلية: ﴿أَلَا حِينَ يَسْتَغْشُونَ ثِيَابَهُمْ يَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ﴾.',
            '**Test**: drop ألا التنبيه and the sentence still stands ﴿ألا إنهم هم المفسدون﴾ — unlike ألا of تحضيض/عرض ﴿أَلَا تَأْكُلُونَ﴾, which the clause needs.',
          ] },

        { t: 'teach', title: 'أما and ها', page: 95,
          points: [
            '**أما** — usually **followed by an oath**: «أما والذي أبكى وأضحكَ والذي أماتَ وأحيا…»; its hamza may drop: «ما ترى الدهرَ قد أبادَ مَعَدًّا».',
            '**ها** enters four spots: the **near demonstrative** ﴿هَؤُلَاءِ قَوْمُنَا﴾ · the **raised pronoun** ﴿هَأَنْتُمْ هَؤُلَاءِ﴾ · a **māḍī with قد**: «ها قد غفرَ اللهُ للتائبينَ» · and **أيّ/أيّة before the أل-noun**: ﴿يَا أَيُّهَا النَّاسُ﴾ ﴿يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ﴾.',
          ] },

        { t: 'mcq', q: '﴿أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ﴾ vs ﴿أَلَا تَأْكُلُونَ﴾ — which ألا is which?',
          choices: ['First تنبيه (sentence stands without it, and note the إنّ-emphasis after it); second عرض/تحضيض (the clause needs it)', 'Both تنبيه', 'Both عرض', 'First نفي, second استفهام'],
          correct: 0,
          why: 'The book’s removal test: التنبيه is droppable; التحضيض/العرض is not. And تنبيه-ألا typically precedes an emphasised sentence.' },

        { t: 'mcq', q: 'In ﴿يَا أَيُّهَا النَّاسُ﴾, what is the ها?',
          choices: ['هاء التنبيه — attached to أيّ before the أل-defined noun', 'A feminine pronoun', 'هاء السكت', 'Part of the word أيها as one morpheme'],
          correct: 0,
          why: 'One of ها’s four entry points: demonstratives (هؤلاء), raised pronouns (هأنتم), قد + māḍī, and أيّ/أيّة before المعرف بأل.' },

        { t: 'mcq', q: 'What usually follows تنبيه-أما?',
          choices: ['An oath — «أما والذي أبكى وأضحك…» (and its hamza can even drop)', 'A prohibition', 'A conditional', 'A vocative'],
          correct: 0,
          why: 'الغالب أن يليها قسم. With the hamza dropped it appears as bare ما: «ما ترى الدهرَ قد أباد معدًّا».' },

        { t: 'written',
          prompt: 'Name the three أحرف التنبيه, give the test separating تنبيه-ألا from تحضيض/عرض-ألا, and list the four places ها enters.',
          model: 'Three: ألا، أما، ها. ألا ﴿ألا إن نصر الله قريب﴾ usually precedes a sentence carrying تأكيد ﴿ألا إنهم هم المفسدون﴾ and enters both الاسمية والفعلية ﴿ألا حين يستغشون ثيابهم يعلم ما يسرون وما يعلنون﴾; the test: speech remains sound without تنبيه-ألا, unlike ألا of التحضيض or العرض ﴿ألا تأكلون﴾. أما is usually followed by a قسم — «أما والذي أبكى وأضحك» — and its hamza may be dropped: «ما ترى الدهر قد أباد معدا». ها enters: the near demonstrative ﴿هؤلاء قومنا﴾, the raised pronoun ﴿هأنتم هؤلاء﴾, the māḍī joined to قد «ها قد غفر الله للتائبين», and أيّ or أيّة before the noun defined with أل ﴿يا أيها الناس﴾ ﴿يا أيتها النفس المطمئنة﴾.' },
      ],
    },

    /* ═══ 3. أحرف المصدر والنفي ═══ */
    {
      id: 'masdar-nafy',
      title: 'أحرف المصدر · أحرف النفي',
      subtitle: 'الموصولات الحرفية · ما ولا وإنْ',
      steps: [
        { t: 'teach', title: 'أحرف المصدر — the ḥarfī relatives', page: 96,
          body: 'The maṣdar particles are called **موصولات حرفية** and **حروف موصولة**. The **non-operating** ones are three:',
          points: [
            '**ما** — of two kinds: **المصدرية الظرفية** ﴿وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا﴾ (= مدةَ دوامي), and **غير الظرفية** ﴿فَصَبَرُوا عَلَى مَا كُذِّبُوا﴾ (= على تكذيبِهم).',
            '**لو** after **وَدَّ**: ﴿وَدُّوا لَوْ تَكْفُرُونَ كَمَا كَفَرُوا﴾.',
            '**همزة التسوية**: ﴿وَسَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ﴾.',
          ],
          after: 'The rest of the maṣdar particles — كي، أنْ، أنَّ — are عاملة and treated with the operators.' },

        { t: 'teach', title: 'أحرف النفي: ما، لا، إنْ', page: 96,
          points: [
            '**ما** enters the verb — **māḍī** ﴿وَمَا قَتَلُوهُ﴾ and **muḍāriʿ** ﴿وَمَا يَشْعُرُونَ﴾.',
            '**لا** enters the **muḍāriʿ** ﴿وَهُمْ لَا يُؤْمِنُونَ﴾ — and the **māḍī** only if **repeated** ﴿فَلَا صَدَّقَ وَلَا صَلَّى﴾ or **future in meaning**, like duʿāʾ: «لا قَدَّرَ اللهُ».',
            '**إنْ** ﴿إِنْ أَنْتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ﴾ — and its khabar **usually carries إلّا** (p. 97).',
          ],
          after: 'The remaining negatives — لا لنفي الجنس، المشبهات بليس، لن، لم، لمّا، لا الناهية — are عاملة (p. 97).' },

        { t: 'mcq', q: '﴿مَا دُمْتُ حَيًّا﴾ vs ﴿فَصَبَرُوا عَلَى مَا كُذِّبُوا﴾ — both maṣdarī mā. What differs?',
          choices: ['The first is ظرفية (= مدة دوامي, time-infused); the second is غير ظرفية (= على تكذيبهم, plain maṣdar)', 'The first negates', 'The second is موصول اسمي', 'Nothing differs'],
          correct: 0,
          why: 'ما المصدرية splits into الظرفية (folding in a duration) and غير الظرفية (bare verbal-noun paraphrase).' },

        { t: 'mcq', q: '﴿وَدُّوا لَوْ تَكْفُرُونَ﴾ — what is لو here?',
          choices: ['حرف مصدر after ودّ: “they wished your disbelieving”', 'شرطية with deleted جواب only', 'تمني particle', 'عرض'],
          correct: 0,
          why: 'لو بعد ودّ is one of the three non-operating maṣdar particles — the clause paraphrases as a maṣdar (كفرَكم).' },

        { t: 'mcq', q: 'When may negative لا precede a māḍī verb?',
          choices: ['If repeated ﴿فَلَا صَدَّقَ وَلَا صَلَّى﴾ or future in meaning like duʿāʾ «لا قدَّر الله»', 'Never', 'Always, freely', 'Only in poetry'],
          correct: 0,
          why: 'Two licences only: التكرار, or a مستقبل meaning such as supplication.' },

        { t: 'mcq', q: '﴿إِنْ أَنْتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ﴾ — how do you know this إنْ is نافية?',
          choices: ['The إلّا in its khabar — the usual companion of negative إنْ (= ما أنتم إلا…)', 'It cannot be anything else in any context', 'The following pronoun', 'The jarr on ضلال'],
          correct: 0,
          why: 'الغالب دخول إلا في الخبر بعد إن النافية — the exceptive is the signature (إنْ elsewhere is شرطية, مخففة, or زائدة).' },

        { t: 'written',
          prompt: 'List the three non-operating أحرف المصدر (with the two kinds of ما) and the three أحرف النفي, including the rule for لا + māḍī and the mark of إنْ النافية.',
          model: 'أحرف المصدر (الموصولات الحرفية), non-operating: (1) ما — الظرفية ﴿وأوصاني بالصلاة والزكاة ما دمت حيا﴾ and غير الظرفية ﴿فصبروا على ما كذبوا﴾; (2) لو بعد ودّ ﴿ودوا لو تكفرون كما كفروا﴾; (3) همزة التسوية ﴿سواء عليهم أأنذرتهم أم لم تنذرهم﴾; the rest — كي وأنْ وأنَّ — are عاملة. أحرف النفي: (1) ما on the māḍī ﴿ما قتلوه﴾ and the muḍāriʿ ﴿وما يشعرون﴾; (2) لا on the muḍāriʿ ﴿وهم لا يؤمنون﴾, entering the māḍī only if repeated ﴿فلا صدق ولا صلى﴾ or future in meaning like duʿāʾ «لا قدر الله»; (3) إنْ ﴿إن أنتم إلا في ضلال كبير﴾, whose khabar usually carries إلا. The remaining negatives (لا الجنسية، المشبهات بليس، لن، لم، لما، لا الناهية) are عاملة.' },
      ],
    },

    /* ═══ 4. أحرف الزيادة ═══ */
    {
      id: 'ziyada',
      title: 'القسم العاشر: أحرف الزيادة',
      subtitle: 'أحرف الصلة: إنْ · أنْ · ما · لا',
      steps: [
        { t: 'teach', title: 'أحرف الصلة: إنْ and أنْ', page: 97,
          body: 'The “extra” particles are also called **أحرف الصلة** — extra in syntax, never useless in rhetoric.',
          points: [
            '**إنْ** — usually added **with negative ما**: «ما **إنْ** أتيتُ بشيءٍ أنتَ تكرهُهُ».',
            'إنْ altogether comes **مخففة، شرطية، نافية، زائدة** — read by السياق.',
            '**أنْ** — usually after **لمّا الحينية**: ﴿فَلَمَّا أَنْ جَاءَ الْبَشِيرُ﴾; and it may fall **between لو and a preceding oath-wāw**: «واللهِ أنْ لو قمتُ» (p. 98).',
          ] },

        { t: 'teach', title: 'ما الزائدة', page: 98,
          points: [
            'Added after **conditional devices**: إذا ﴿وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ﴾ · متى «متى **ما** يَقُمْ مقامَك…» · أيّ ﴿أَيًّا مَا تَدْعُوا﴾ · أين ﴿أَيْنَ مَا تَكُونُوا يُدْرِكْكُمُ الْمَوْتُ﴾ · إنْ ﴿إِمَّا يَبْلُغَنَّ عِنْدَكَ الْكِبَرَ﴾ (= إنْ + ما).',
            'And after **prepositions**: مِن ﴿مِمَّا خَطِيئَاتِهِمْ أُغْرِقُوا﴾ · عن ﴿عَمَّا قَلِيلٍ لَيُصْبِحُنَّ نَادِمِينَ﴾ · الباء ﴿فَبِمَا رَحْمَةٍ مِنَ اللهِ لِنْتَ لَهُمْ﴾.',
            '**ما الزائدة لا تَكُفُّ عن العمل** — the jarr still lands: ﴿فَبِمَا رَحْمَةٍ﴾.',
          ] },

        { t: 'teach', title: 'لا الزائدة', page: 99,
          points: [
            'With the **واو after negation**: «ما جاءَ زيدٌ **ولا** عمرٌو».',
            'After **أنْ المصدرية**: ﴿مَا مَنَعَكَ أَلَّا تَسْجُدَ إِذْ أَمَرْتُكَ﴾ (= أن تسجدَ).',
            'Before the **oath**: ﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾.',
          ],
          after: 'The remaining زيادة particles — الباء، مِن، and the jarr-lām — are عاملة.' },

        { t: 'mcq', q: '﴿مَا مَنَعَكَ أَلَّا تَسْجُدَ﴾ — Iblīs DID refuse to prostrate. How does grammar resolve the apparent contradiction?',
          choices: ['The لا is زائدة after أنْ المصدرية: the sense is ما منعك أنْ تسجدَ — “what stopped you from prostrating?”', 'The verse means he did prostrate', 'منعك is negated twice, so affirmed', 'أن is نافية'],
          correct: 0,
          why: 'لا الزائدة after أن المصدرية adds emphasis, not negation — a canonical example of زيادة.' },

        { t: 'mcq', q: '﴿فَبِمَا رَحْمَةٍ مِنَ اللهِ لِنْتَ لَهُمْ﴾ — رحمةٍ is majrūr despite the intervening ما. Why?',
          choices: ['ما الزائدة does not block the operator (لا تكف عن العمل) — the بـ still governs', 'رحمة is majrūr by ما itself', 'It is actually manṣūb', 'إضافة to ما'],
          correct: 0,
          why: 'The stated rule: زائدة-mā after a preposition leaves the jarr intact. Same with ﴿مِمَّا خَطِيئَاتِهِمْ﴾ and ﴿عَمَّا قَلِيلٍ﴾.' },

        { t: 'mcq', q: 'In ﴿إِمَّا يَبْلُغَنَّ عِنْدَكَ الْكِبَرَ﴾, what is إمّا?',
          choices: ['Conditional إنْ + زائدة ما — not the doubling إمّا of ﴿إما شاكرا وإما كفورا﴾', 'The إمّا of تفصيل', 'A negative particle', 'حرف عطف'],
          correct: 0,
          why: 'ما is added after conditional devices (إذا، متى، أيّ، أين، إنْ); fused with إنْ it spells إمّا — a different creature from the detailing إمّا.' },

        { t: 'mcq', q: '«مَا إِنْ أَتَيْتُ بِشَيْءٍ أَنْتَ تَكْرَهُهُ» — the إنْ here is…',
          choices: ['زائدة — its usual habitat is right after negative ما', 'شرطية', 'مخففة من الثقيلة', 'نافية (double negation)'],
          correct: 0,
          why: 'الغالب في إن الزائدة أن تزاد مع ما النافية. Its four faces — مخففة/شرطية/نافية/زائدة — are told apart بالسياق.' },

        { t: 'written',
          prompt: 'Name the four (non-operating) أحرف الزيادة with the typical position of each, and state the rule about ما الزائدة and government.',
          model: 'أحرف الزيادة (أحرف الصلة): (1) إنْ — usually with negative ما: «ما إن أتيت بشيء أنت تكرهه»; إنْ overall comes مخففة وشرطية ونافية وزائدة, distinguished بالسياق. (2) أنْ — usually after لما الحينية ﴿فلما أن جاء البشير﴾, and between لو and a preceding oath-wāw: «والله أن لو قمت». (3) ما — after conditional devices: إذا ﴿وإذا ما غضبوا هم يغفرون﴾، متى، أيّ ﴿أيا ما تدعوا﴾، أين ﴿أين ما تكونوا يدرككم الموت﴾، إنْ ﴿إما يبلغن عندك الكبر﴾; and after the prepositions من ﴿مما خطيئاتهم أغرقوا﴾، عن ﴿عما قليل﴾، والباء ﴿فبما رحمة من الله لنت لهم﴾ — and ما الزائدة لا تكف عن العمل: the operator still governs. (4) لا — with the واو after negation «ما جاء زيد ولا عمرو», after أن المصدرية ﴿ما منعك ألا تسجد﴾, and before the قسم ﴿لا أقسم بيوم القيامة﴾. The remaining زيادة particles — الباء ومن واللام الجارة — are عاملة.' },
      ],
    },

    /* ═══ 5. الاستفهام · التمني · الاستقبال ═══ */
    {
      id: 'istifham-tamanni',
      title: 'الاستفهام · التمني · الاستقبال',
      subtitle: 'الهمزة وهل · لو وهل · السين وسوف',
      steps: [
        { t: 'teach', title: 'حرفا الاستفهام: الهمزة وهل', page: 99,
          points: [
            '**الهمزة** ﴿أَأَنْتُمْ أَعْلَمُ أَمِ اللهُ﴾ and **هل** ﴿فَهَلْ أَنْتُمْ مُنْتَهُونَ﴾ — both enter the **اسمية والفعلية**.',
            'الهمزة serves **التصديق** (yes/no ﴿أَتَقُولُونَ عَلَى اللهِ مَا لَا تَعْلَمُونَ﴾) **and التصوُّر** (which-one ﴿أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ﴾); **هل is للتصديق only** ﴿هَلْ أُنَبِّئُكُمْ…﴾.',
          ] },

        { t: 'teach', title: 'Two more hamza/hal contrasts', page: 100,
          points: [
            'الهمزة enters **affirmation and negation** ﴿أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ﴾; **هل only affirmation**.',
            'الهمزة **precedes** the coordinator ﴿أَوَمَنْ كَانَ مَيْتًا…﴾; هل **follows** it ﴿وَهَلْ أَتَاكَ حَدِيثُ مُوسَى﴾.',
          ] },

        { t: 'teach', title: 'حرفا التمني · حرفا الاستقبال', page: 100,
          points: [
            '**التمني**: لوْ ﴿لَوْ أَنَّ لَنَا كَرَّةً﴾ and هل ﴿فَهَلْ لَنَا مِنْ شُفَعَاءَ﴾ — the operating wisher, **ليت**, is عاملة. So لو covers شرط/تمنٍّ/عرض/مصدر and هل covers استفهام/تمنٍّ — **السياق decides**.',
            '**الاستقبال**: **السين** — near future, opposite of لا: ﴿سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ﴾, called **حرف تنفيس**; **سوف** — far future, opposite of لن: ﴿سَوْفَ تَعْلَمُونَ﴾, called **حرف تسويف** (p. 101).',
            '**سوف is longer in time than السين**: «سيَشِبُّ الغلامُ وسوفَ يَشيخُ الفتى» (p. 101).',
          ] },

        { t: 'mcq', q: 'Why can ﴿أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ﴾ never be asked with هل?',
          choices: ['It demands التصور (specify which of two) — هل gives التصديق only', 'هل cannot enter an اسمية', 'هل cannot precede a plural', 'It can — هل أرباب خير أم الله is fine'],
          correct: 0,
          why: 'The أم of تعيين pairs with the hamza of تصور. هل asks only “is it so?”, never “which one?”.' },

        { t: 'mcq', q: '﴿أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ﴾ — what does this show about the hamza that هل lacks?',
          choices: ['It enters negation (and affirmation); هل enters affirmation only', 'It jazms the verb', 'It negates by itself', 'Nothing — «هل لم نشرح» is equally good'],
          correct: 0,
          why: 'الهمزة تدخل على الإيجاب والنفي؛ وهل لا تدخل إلا على الإيجاب. Also: the hamza precedes a coordinator ﴿أومن كان ميتا﴾, هل follows it ﴿وهل أتاك﴾.' },

        { t: 'mcq', q: '﴿فَهَلْ لَنَا مِنْ شُفَعَاءَ﴾ — spoken by the doomed on Judgement Day. What is هل?',
          choices: ['حرف تمنٍّ — a hopeless wish, not a real question; السياق decides between استفهام and تمنٍّ', 'Pure استفهام', 'حرف تحضيض', 'زائدة'],
          correct: 0,
          why: 'هل serves الاستفهام والتمني; لو serves الشرط والتمني والعرض والمصدر — both disambiguated بالسياق.' },

        { t: 'mcq', q: 'السين vs سوف — match each with its span and its negative counterpart.',
          choices: ['السين: near future, opposite لا (حرف تنفيس); سوف: far future, opposite لن (حرف تسويف)', 'السين: far, opposite لن; سوف: near, opposite لا', 'Both near future', 'Both opposite لم'],
          correct: 0,
          why: '«سيشب الغلام وسوف يشيخ الفتى» — the boy’s youth is nearer than the man’s old age; سوف أطول زمانا من السين.' },

        { t: 'written',
          prompt: 'Set out the three differences between الهمزة and هل, the two حرفا التمني, and the two حرفا الاستقبال with their names and spans.',
          model: 'الهمزة وهل both enter الجملة الاسمية والفعلية, but differ three ways: (1) الهمزة للتصديق والتصور ﴿أتقولون على الله ما لا تعلمون﴾ ﴿أأرباب متفرقون خير أم الله﴾, وهل للتصديق فقط; (2) الهمزة تدخل على الإيجاب والنفي ﴿ألم نشرح لك صدرك﴾, وهل على الإيجاب فقط; (3) الهمزة تسبق العاطفة ﴿أومن كان ميتا﴾, وهل تليها ﴿وهل أتاك حديث موسى﴾. حرفا التمني: لو ﴿لو أن لنا كرة﴾ وهل ﴿فهل لنا من شفعاء﴾ — ليت is the عاملة one; لو comes للشرط والتمني والعرض والمصدر and هل للاستفهام والتمني, both read بالسياق. حرفا الاستقبال: السين — إثبات المستقبل القريب في مقابلة لا, called حرف تنفيس ﴿سيقول السفهاء﴾; سوف — إثبات المستقبل البعيد في مقابلة لن, called حرف تسويف ﴿سوف تعلمون﴾; سوف أطول زمانا: «سيشب الغلام وسوف يشيخ الفتى».' },
      ],
    },

    /* ═══ 6. التفسير والخواتم ═══ */
    {
      id: 'tafsir-tanwin',
      title: 'التفسير · الرابطة · التاء والهاء والتنوين',
      subtitle: 'أي وأنْ · فاء الجواب ولامه · أقسام التنوين',
      steps: [
        { t: 'teach', title: 'حرفا التفسير: أي وأنْ', page: 101,
          points: [
            '**أي** explains **the single word**: «أسألُ اللهَ الفردوسَ **أي** الجنةَ» — and **the sentence**: «استغفرتُ اللهَ **أي** سألتُ اللهَ أن يغفرَ لي».',
            '**أنْ** explains **the sentence only**: ﴿وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ﴾.',
            'Conditions for أنْ التفسيرية: before it a clause with **معنى القول دون لفظِه** — النداء ﴿وناديناه أن…﴾, الوحي ﴿وَأَوْحَيْنَا إِلَى مُوسَى أَنْ أَلْقِ عَصَاكَ﴾, العهد ﴿وَعَهِدْنَا إِلَى إِبْرَاهِيمَ وَإِسْمَاعِيلَ أَنْ طَهِّرَا بَيْتِيَ﴾, الكتابة ﴿…أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ﴾ — and **no preposition** before it, uttered or implied: ﴿أَنْ تَذْبَحُوا بَقَرَةً﴾ is مصدرية because a بـ is implied.',
          ],
          after: 'Even with all conditions met, تفسيرية-أنْ is not forced ﴿وناداهما ربُّهما ألم أنهكما…﴾ — and أنْ overall is مصدرية/مخففة/زائدة/تفسيرية, بالسياق (p. 102).' },

        { t: 'teach', title: 'الرابطة للجواب · تاء التأنيث · هاء السكت', page: 102,
          points: [
            '**الرابطة للجواب** — two: **الفاء** ﴿مَنْ جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا﴾ and **اللام** ﴿وَلَوْلَا رَهْطُكَ لَرَجَمْنَاكَ﴾.',
            '**تاء التأنيث الساكنة** — on the māḍī, marking a feminine fāʿil ﴿قَالَتْ﴾; it may take a vowel for a reason like meeting two sukūns: ﴿قَالَتِ امْرَأَةُ فِرْعَوْنَ﴾ ﴿قَالَتَا أَتَيْنَا طَائِعِينَ﴾.',
            '**هاء السكت** — a sākin hāʾ attached at pause: ﴿مَا أَغْنَى عَنِّي مَالِيَهْ﴾.',
          ] },

        { t: 'teach', title: 'القسم الثامن عشر: التنوين', page: 103,
          body: 'Its أصل: **a sākin nūn** — أحدٌ is really أحدُنْ. **Four kinds**:',
          points: [
            '**تنوين التمكين** — on fully-declinable muʿrab nouns: زيدٌ، رجلٌ (a.k.a. تنوين الصرف والأمكنية); **تنوين التنكير** — on أسماء الأفعال and some mabnī nouns like the -ويه names: «صَهٍ» (any hush) vs «صَهْ», «سيبويهٍ» (some Sībawayh).',
            '**تنوين المقابلة** — on جمع المؤنث السالم: «مسلماتٌ», matching the nūn of مسلمون.',
            '**تنوين التعويض** — substituting for a **letter** ﴿غَوَاشٍ﴾ (أصله غواشيُ), a **word** ﴿كُلٌّ آمَنَ﴾ (= كل أحد), or a **sentence** ﴿وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ﴾ — some add a fifth, تنوين الترنّم.',
          ],
          after: 'Closing rule (p. 104): the particles of نفي، تنبيه، استفهام، شرط، تحضيض and المشبهة بالفعل — except أنَّ — come only في صدر الكلام.' },

        { t: 'mcq', q: '﴿إِنَّ اللهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً﴾ — أمر has قول-meaning, yet this أنْ is NOT تفسيرية. Why?',
          choices: ['A preposition (بـ) is implied before it — يأمركم بأن تذبحوا — so it is مصدرية', 'أمر has no قول-meaning', 'تفسيرية-أنْ needs a māḍī after it', 'It is زائدة'],
          correct: 0,
          why: 'Second condition: nothing may govern jarr over تفسيرية-أنْ, uttered OR implied (لفظا أو تقديرا). The implied بـ makes it مصدرية.' },

        { t: 'mcq', q: '«أَسْأَلُ اللهَ الْفِرْدَوْسَ أَيِ الْجَنَّةَ» — could أنْ replace أي here?',
          choices: ['No — أنْ explains only sentences; أي explains the single word and the sentence', 'Yes, freely', 'Only in Qurʾānic style', 'No — because الجنة is feminine'],
          correct: 0,
          why: 'أي does both المفرد والجملة; أنْ is restricted to الجملة ﴿وناديناه أن يا إبراهيم﴾.' },

        { t: 'mcq', q: 'Why does قالتْ surface as قالتِ in ﴿قَالَتِ امْرَأَةُ فِرْعَوْنَ﴾?',
          choices: ['The sākin تاء التأنيث takes a kasra to avoid two sukūns meeting (تْ + اِمرأة)', 'It is a different feminine taʾ', 'The verb becomes muḍāriʿ', 'Assimilation to فرعون'],
          correct: 0,
          why: 'تتحرك تاء التأنيث الساكنة لعارضٍ مثل دفع التقاء الساكنين — likewise ﴿قالتا أتينا﴾.' },

        { t: 'mcq', q: 'Classify the tanwīn: «مسلماتٌ» · «سيبويهٍ» · ﴿غَوَاشٍ﴾ · «رجلٌ».',
          choices: ['مقابلة · تنكير · تعويض (عن حرف) · تمكين', 'تمكين · مقابلة · تنكير · تعويض', 'All تمكين', 'تنكير · تمكين · مقابلة · تعويض'],
          correct: 0,
          why: 'مسلمات matches the nūn of the masculine plural; a tanwīned -ويه name means “some such person”; غواشٍ lost its yāʾ; رجل is simply a declinable ism.' },

        { t: 'mcq', q: '﴿وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ﴾ — the tanwīn on يومئذٍ substitutes for what?',
          choices: ['A whole sentence (the one إذ would have carried)', 'A single letter', 'A word (أحد)', 'Nothing — it is تمكين'],
          correct: 0,
          why: 'تنوين التعويض replaces a letter ﴿غواشٍ﴾, a word ﴿كلٌّ آمن﴾ = كل أحد, or a sentence — this is the sentence case.' },

        { t: 'written',
          prompt: 'State the conditions of أنْ التفسيرية with the four قول-flavoured contexts; then define the four kinds of tanwīn with one example each.',
          model: 'أنْ التفسيرية explains only the جملة and requires: (1) before it a clause carrying معنى القول دون لفظه — covering النداء ﴿وناديناه أن يا إبراهيم﴾, الوحي ﴿وأوحينا إلى موسى أن ألق عصاك﴾, العهد ﴿وعهدنا إلى إبراهيم وإسماعيل أن طهرا بيتي﴾, and الكتابة ﴿ألا تعلوا علي وأتوني مسلمين﴾; (2) no حرف جر before it, uttered or implied — hence ﴿أن تذبحوا بقرة﴾ is مصدرية by the implied باء. Meeting the conditions does not force the reading ﴿وناداهما ربهما ألم أنهكما﴾, and أنْ overall is مصدرية ومخففة وزائدة وتفسيرية بالسياق. التنوين — أصله نون ساكنة (أحدٌ = أحدُنْ) — is of four kinds: تنوين التمكين on the declinable muʿrab noun (زيدٌ، رجلٌ; a.k.a. الصرف والأمكنية); تنوين التنكير on أسماء الأفعال and some mabnī nouns («صهٍ»، «سيبويهٍ»); تنوين المقابلة on جمع المؤنث السالم («مسلماتٌ»); تنوين التعويض — for a letter ﴿غواشٍ﴾, a word ﴿كلٌّ آمن﴾, or a sentence ﴿ويومئذ يفرح المؤمنون﴾ — with تنوين الترنم added by some.' },
      ],
    },
  ],
});
