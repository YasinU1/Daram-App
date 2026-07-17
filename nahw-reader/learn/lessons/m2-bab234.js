/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الثاني · التوابع + الباب الثاني (الفعل) + الباب الثالث (الجملة) (pp. 156–170) ──
   Authored directly from the book PDF. NO matn panels: these pages are not transcribed in the
   reader — teach cards use static ar:/arEn: blocks and carry `page:` (book page) so every key
   idea maps back to the book. No bank steps yet.                                              */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm2-tawabi',
  titleAr: 'التَّوَابِعُ · مَعْمُولُ الْفِعْلِ والجُمْلَةِ',
  titleEn: 'Aim Two III — dependents, verb & sentence',
  pages: '156–170',
  sections: [

    /* ═══ 1. النعت ═══ */
    {
      id: 'nat',
      title: 'التوابع الأول: النعت',
      subtitle: 'المعمول بالتبعية · حقيقي وسببي',
      steps: [
        { t: 'teach', title: 'The governed-by-dependency', page: 156,
          ar: 'وهو ما يَعْمَلُ فيه الْعَامِلُ بِوَاسِطَةِ مَتْبُوعِهِ',
          arEn: 'The dependent (tābiʿ): governed only through the word it follows.',
          body: 'The second نوع of governed noun: **المعمول بالتبعية** — five: **النعت · البدل · عطف البيان · المعطوف بحرف عطف · التأكيد**. First, **النعت** (الصفة); its followed word = **المنعوت/الموصوف**.',
          points: [
            'A نعت is only **مشتق بمعنى الفعل** ﴿وَقَالَ رَجُلٌ مُؤْمِنٌ﴾, or **مشابه** to it: ism ishāra «اذهبوا بقميصي هذا», ذو وفروعه ﴿جَنَّتَيْنِ ذَوَاتَيْ أَكُلٍ خَمْطٍ﴾, non-mīmī maṣdar «بدرٍ كذبٍ», ism mansūb ﴿كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ﴾ (p. 156).',
            'Also: the **موصولات starting with hamzat al-waṣl** ﴿اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ﴾ (not مَن وما), and **number-names** ﴿فِي ظُلُمَاتٍ ثَلَاثٍ﴾ (p. 157).',
          ] },

        { t: 'teach', title: 'حقيقي vs سببي', page: 157,
          points: [
            '**نعت حقيقي** — describes a meaning **in the متبوع itself**, its fāʿil a hidden pronoun; it **follows the متبوع in FOUR things**: iʿrāb, definiteness, gender, and number ﴿وَقَالَ رَجُلٌ مُؤْمِنٌ﴾.',
            '**نعت سببي** — describes a meaning in **something connected to** the متبوع, its fāʿil an **explicit noun after it**; it follows the متبوع in **iʿrāb and definiteness only** ﴿مِنْ هَذِهِ الْقَرْيَةِ الظَّالِمِ أَهْلُهَا﴾; a pronoun back to the متبوع is a must, and أل may deputise for it ﴿شَدِيدِ الْعِقَابِ﴾ (= شديدٍ عقابُه).',
            'The **منعوت may be deleted**, the نعت standing in: ﴿وَاعْمَلُوا صَالِحًا﴾ (= عملًا صالحًا) (p. 157).',
          ] },

        { t: 'mcq', q: '﴿مِنْ هَذِهِ الْقَرْيَةِ الظَّالِمِ أَهْلُهَا﴾ — الظالم is masc. though القرية is fem. Why no gender-match?',
          choices: ['نعت سببي follows the متبوع only in iʿrāb and definiteness; gender tracks its own explicit fāʿil أهلها', 'Concord error', 'It is حقيقي', 'القرية is masculine'],
          correct: 0,
          why: 'السببي يتبع في الإعراب والتعريف فقط, taking its gender from the noun after it — unlike الحقيقي, which matches in all four.' },

        { t: 'mcq', q: 'Which can be a نعت?',
          choices: ['A موصول beginning with hamzat al-waṣl ﴿الذي خلقكم﴾ — but not مَن or ما', 'Any noun at all', 'A verb', 'Only a plain adjective'],
          correct: 0,
          why: 'النعت is مشتق or مشابه له (ishāra, ذو, non-mīmī maṣdar, mansūb), the waṣl-موصولات, and number-names — من وما excluded.' },

        { t: 'mcq', q: '﴿شَدِيدِ الْعِقَابِ﴾ as a سببي نعت — what replaced the returning pronoun?',
          choices: ['أل — it deputises for the pronoun (= شديدٍ عقابُه)', 'العقاب is the fāʿil directly with no pronoun', 'Nothing — the pronoun is dropped with no substitute', 'A hidden هو'],
          correct: 0,
          why: 'لا بد له من ضمير يعود إلى المنعوت وقد ينوب أل عن الضمير.' },

        { t: 'written',
          prompt: 'Define النعت, what may serve as one, and contrast حقيقي and سببي (meaning-location, fāʿil, agreement), plus the منعوت-deletion rule.',
          model: 'النعت is a dependent governed through its متبوع (الموصوف). It is only a مشتق بمعنى الفعل ﴿وقال رجل مؤمن﴾ or its like — ism ishāra, ذو وفروعه ﴿ذواتي أكل خمط﴾, non-mīmī maṣdar «بدر كذب», ism mansūb ﴿كوكب دري﴾ — plus the waṣl-موصولات ﴿الذي خلقكم﴾ (not من وما) and number-names ﴿ظلمات ثلاث﴾. النعت الحقيقي describes a meaning in the متبوع itself, its fāʿil a hidden pronoun, and follows in four: iʿrāb, definiteness, gender, number ﴿رجل مؤمن﴾. النعت السببي describes a meaning in something linked to the متبوع, its fāʿil an explicit noun after it, and follows only in iʿrāb and definiteness ﴿القرية الظالم أهلها﴾, needing a pronoun back to the متبوع for which أل may substitute ﴿شديد العقاب﴾. The منعوت may be deleted, the نعت replacing it ﴿واعملوا صالحا﴾.' },
      ],
    },

    /* ═══ 2. البدل وعطف البيان ═══ */
    {
      id: 'badal-bayan',
      title: 'البدل · عطف البيان',
      subtitle: 'أنواع البدل الأربعة · الفرق بينه وبين عطف البيان',
      steps: [
        { t: 'teach', title: 'البدل — the intended replacement', page: 157,
          ar: 'وهو تَابِعٌ بِلَا وَاسِطَةِ حَرْفِ عَطْفٍ مَقْصُودٌ بِالْحُكْمِ',
          arEn: 'A dependent, no coordinator, itself the target of the ruling.',
          points: [
            '**بدل الكل** (المطابق / بدل العين) — same reference ﴿اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ﴾ · **بدل البعض** — a part ﴿وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا﴾ (p. 158).',
            '**بدل الاشتمال** — a connected attribute ﴿يَسْأَلُونَكَ عَنِ الشَّهْرِ الْحَرَامِ قِتَالٍ فِيهِ﴾. Both البعض and الاشتمال **need a pronoun** back to the مبدل منه, sometimes deleted (p. 158).',
            '**بدل الغلط** — the مبدل منه was a slip «رأيتُ زيدًا عمرًا» — it does not occur in eloquent speech; there one uses بل «رأيتُ زيدًا بل عمرًا» (p. 158).',
          ] },

        { t: 'teach', title: 'عطف البيان', page: 158,
          ar: 'وهو تَابِعٌ بِلَا وَاسِطَةٍ غَيْرُ مَقْصُودٍ بِالْحُكْمِ مُوَضِّحٌ لِمَتْبُوعِهِ',
          arEn: 'A dependent, no coordinator, NOT the ruling-target, clarifying its متبوع.',
          points: [
            '﴿كَفَّارَةٌ طَعَامُ مَسَاكِينَ﴾. It **clarifies** and **specifies**; the definites it clears, the indefinites it narrows.',
            'The line vs البدل: البدل is **intended by the ruling** (in نية إحلاله محلَّ المتبوع); عطف البيان is **only clarifying**, never on the نية of replacement (p. 158).',
            'Where a بدل كل would work, عطف البيان usually can too — **except** where replacement is impossible: «يا زيدُ الحارثُ» — الحارث must be **عطف بيان**, since a منادى بدل «يا الحارثُ» فails (p. 159).',
          ] },

        { t: 'mcq', q: '﴿حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا﴾ — what is مَن to الناس?',
          choices: ['بدل البعض من الكل — those able are a part of the people; a pronoun (إليه/the implied منهم) links back', 'بدل كل', 'عطف بيان', 'بدل غلط'],
          correct: 0,
          why: 'A part of the متبوع, with the required returning pronoun — as against بدل الاشتمال ﴿الشهر الحرام قتال فيه﴾ (a connected attribute).' },

        { t: 'mcq', q: 'Why does eloquent speech avoid بدل الغلط?',
          choices: ['It corrects a slip in the متبوع; eloquence uses بل instead — «رأيت زيدا بل عمرا»', 'It is grammatically illegal', 'It needs a pronoun it cannot supply', 'It only works with verbs'],
          correct: 0,
          why: 'لا يقع بدل الغلط في فصيح الكلام بل يرد بكلمة بل.' },

        { t: 'mcq', q: '«يَا زَيْدُ الْحَارِثُ» — why must الحارث be عطف بيان, not بدل?',
          choices: ['A بدل would need to stand alone as منادى — «يا الحارثُ» is impossible (يا + أل), so replacement fails', 'الحارث is indefinite', 'The two are never interchangeable', 'زيد is the بدل'],
          correct: 0,
          why: 'عطف البيان and بدل الكل overlap except where إحلال محل المتبوع is barred — here لامتناع «يا الحارث».' },

        { t: 'written',
          prompt: 'Define البدل and its four kinds (with the pronoun rule and the eloquence note on الغلط), then عطف البيان and the two ways it differs from البدل.',
          model: 'البدل is a dependent with no coordinator, itself intended by the ruling. Four kinds: بدل الكل (المطابق) — same reference ﴿الصراط المستقيم صراط الذين أنعمت عليهم﴾; بدل البعض — a part ﴿حج البيت من استطاع إليه سبيلا﴾; بدل الاشتمال — a connected attribute ﴿الشهر الحرام قتال فيه﴾ (البعض والاشتمال require a returning pronoun, sometimes deleted); بدل الغلط — a slip in the متبوع «رأيت زيدا عمرا», avoided in eloquent speech in favour of بل «رأيت زيدا بل عمرا». عطف البيان is a dependent, no coordinator, NOT intended by the ruling, clarifying its متبوع ﴿كفارة طعام مساكين﴾ — clearing definites and narrowing indefinites. It differs from البدل: (1) in meaning — البدل is المقصود بالحكم (على نية إحلاله محل المتبوع), عطف البيان only موضح ومخصص; (2) in iʿrāb — wherever عطف بيان is possible a بدل كل usually is too, except where replacement is barred «يا زيد الحارثُ», which must be عطف بيان.' },
      ],
    },

    /* ═══ 3. المعطوف بحرف العطف ═══ */
    {
      id: 'matuf',
      title: 'الرابع: المعطوف بحرف العطف',
      subtitle: 'عطف النسق · على اللفظ والمحل والتوهم',
      steps: [
        { t: 'teach', title: 'عطف النسق — three targets', page: 159,
          ar: 'وهو ﴿أَطِيعُوا اللهَ وَرَسُولَهُ﴾ — عَطْفُ النَّسَقِ',
          arEn: 'Coordination proper: the متبوع is معطوف عليه, the joined word معطوف.',
          points: [
            '**On the لفظ** (the default) «ليس زيدٌ بقائمٍ **ولا** جالسٍ» — jarr matching the لفظ.',
            '**On the محل** «ليس زيدٌ بقائمٍ **ولا** جالسًا» (naṣb = the maḥall of the khabar), ﴿وَأَنْفِقُوا مِنْ مَا رَزَقْنَاكُمْ … وَيَوْمَ الْقِيَامَةِ﴾.',
            '**On the توهُّم** (عطف على التوهم) — as if a variant governor had been there: «لستُ مُدرِكًا ما مضى ولا سابقٍ…» (p. 159).',
          ] },

        { t: 'teach', title: 'ʿAṭf on a pronoun — two safeguards', page: 159,
          points: [
            'ʿAṭf **on a connected rafʿ-pronoun** demands **separation** by an emphatic detached pronoun ﴿اذْهَبْ أَنْتَ وَأَخُوكَ﴾ — unless a separator intervenes ﴿يَدْخُلُونَهَا وَمَنْ صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ﴾.',
            'ʿAṭf **on a connected majrūr-pronoun** demands **repeating the jarr-particle** ﴿لَهَا وَلِلْأَرْضِ﴾ — but not ﴿وَصَدٍّ عَنْ سَبِيلِ اللهِ وَكُفْرٍ بِهِ وَالْمَسْجِدِ الْحَرَامِ﴾ (p. 160).',
          ] },

        { t: 'teach', title: 'قطع المعطوف', page: 160,
          body: 'The معطوف may be **cut off from its متبوع’s iʿrāb** for **مدح or ذمّ**: ﴿وَالْمُوفُونَ بِعَهْدِهِمْ إِذَا عَاهَدُوا وَالصَّابِرِينَ فِي الْبَأْسَاءِ وَالضَّرَّاءِ﴾ — الصابرين cut to naṣb amid marfūʿ context.' },

        { t: 'mcq', q: '«لَيْسَ زَيْدٌ بِقَائِمٍ وَلَا جَالِسًا» — جالسًا is manṣūb after a majrūr قائم. On what is it ʿaṭfed?',
          choices: ['On the MAḤALL of the khabar (منصوب محلا despite the زائدة باء)', 'On the لفظ', 'On التوهم', 'It is an error'],
          correct: 0,
          why: 'العطف على المحل: the khabar of ليس is manṣūb in status though the زائد بـ jarrs it in form; جالسٍ (jarr) would be عطف على اللفظ.' },

        { t: 'mcq', q: '﴿اذْهَبْ أَنْتَ وَأَخُوكَ﴾ — why the أنت before وأخوك?',
          choices: ['ʿAṭf on the connected rafʿ-pronoun in اذهب needs an emphatic detached pronoun to separate', 'For emphasis alone with no rule', 'أخوك is a second fāʿil', 'أنت is the real fāʿil'],
          correct: 0,
          why: 'وجب توكيده بمنفصل — unless another separator does the job ﴿يدخلونها ومن صلح من آبائهم﴾.' },

        { t: 'mcq', q: '﴿وَالصَّابِرِينَ فِي الْبَأْسَاءِ﴾ amid marfūʿ الموفون — what happened to its iʿrāb?',
          choices: ['قطع — cut off from the متبوع’s iʿrāb to naṣb for مدح', 'A concord error', 'عطف على المحل', 'It is a بدل'],
          correct: 0,
          why: 'يجوز قطع المعطوف عن إعراب المعطوف عليه للمدح أو الذم.' },

        { t: 'written',
          prompt: 'Explain عطف النسق’s three targets (لفظ، محل، توهم), the two safeguards for ʿaṭf on connected pronouns, and قطع المعطوف.',
          model: 'عطف النسق joins the معطوف to the معطوف عليه by a coordinator ﴿أطيعوا الله ورسوله﴾. It may be on the لفظ (default) «ليس زيد بقائم ولا جالسٍ», on the محل «ليس زيد بقائم ولا جالسًا» (the khabar’s manṣūb status under a زائد باء), or on the توهم «لست مدركا ما مضى ولا سابقٍ». ʿAṭf on a connected rafʿ-pronoun requires separation by an emphatic detached pronoun ﴿اذهب أنت وأخوك﴾ unless a separator intervenes ﴿يدخلونها ومن صلح من آبائهم﴾; ʿaṭf on a connected majrūr-pronoun requires repeating the jarr-particle ﴿لها وللأرض﴾, though not always ﴿وصد عن سبيل الله وكفر به والمسجد الحرام﴾. Finally, the معطوف may be cut off (قطع) from its متبوع’s iʿrāb for مدح or ذم ﴿والموفون بعهدهم … والصابرين في البأساء والضراء﴾.' },
      ],
    },

    /* ═══ 4. التأكيد والخاتمة ═══ */
    {
      id: 'tawkid-tawabi',
      title: 'الخامس: التأكيد',
      subtitle: 'اللفظي والمعنوي · خاتمة أحكام التابع',
      steps: [
        { t: 'teach', title: 'التأكيد اللفظي', page: 160,
          ar: 'وهو ما يُثَبِّتُ مَتْبُوعَهُ …',
          arEn: 'Emphasis: it fixes its متبوع, or covers every member of it.',
          points: [
            'Emphasis is two: **اللفظي** — repetition — and المعنوي. اللفظي repeats a **verb** «قامَ قامَ زيدٌ», an **explicit noun** ﴿الَّذِينَ يُبَلِّغُونَ رِسَالَاتِ اللهِ … أُولَئِكَ الْمُقَرَّبُونَ﴾ (repeated لفظ) or a synonym ﴿يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا﴾ (p. 160).',
            'It repeats a **pronoun**: detached «إياكَ إياكَ أردتُ»، «أنتَ أنتَ المجرمُ»; a **connected marfūʿ** via a detached one «ذهبتُ أنا» / «أكرمتُك أنتَ» (p. 160); a **connected manṣūb** «أكرمتُك إياكَ»; a **connected majrūr** «مررتُ بكَ أنتَ» or by repeating the jārr-majrūr «مررتُ بكَ بكَ» (p. 161).',
            'On a **particle**: a **ḥarf jawāb** (non-operating) by repetition «لا لا أُشرِكُ باللهِ»; else with a connected word repeated ﴿أَنَّكُمْ إِذَا مِتُّمْ … أَنَّكُمْ مُخْرَجُونَ﴾ — but not «إنَّ زيدًا قائمٌ» alone; and a **jumla** by repetition ﴿فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا﴾ or with ثم ﴿كَلَّا سَيَعْلَمُونَ ۝ ثُمَّ كَلَّا سَيَعْلَمُونَ﴾ (p. 161).',
          ] },

        { t: 'teach', title: 'التأكيد المعنوي', page: 161,
          points: [
            'Special words added to a pronoun **agreeing with the toucher**: **نفس · عين · كلا · كلتا · كل**.',
            '**كلا وكلتا** — for the dual only «جاء الرجلانِ كلاهما ورأيتُ البنتينِ كلتيهما». **نفس وعين** — singular «جاء الرجلُ نفسُهُ/عينُهُ», dual «أنفسُهما/أعينُهما», plural «أنفسُهم/أعينُهم» (p. 161).',
            'A connected marfūʿ pronoun emphasised by نفس/عين needs **first** a lafẓī emphasis «الأميرُ يَنظُفُ المسجدَ هو نفسُهُ» (p. 162); عين follows نفس when both meet «جاء زيدٌ نفسُهُ عينُهُ»; both may be **jarred by زائدة باء** «جاء الرجلُ بنفسِهِ»; **كل** may be reinforced with أجمع/جمعاء/أجمعون/جُمَع ﴿فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ﴾; and جميع gives emphasis but is parsed **ḥāl** ﴿خَلَقَ لَكُمْ مَا فِي الْأَرْضِ جَمِيعًا﴾ (p. 162).',
          ] },

        { t: 'teach', title: 'خاتمة أحكام التابع', page: 162,
          body: 'When a متبوع has both a **lafẓī and a maḥallī iʿrāb**, the tābiʿ may follow either:',
          points: [
            '**the لفظ** «ما أنا بكاذبٍ ولا خادعٍ» · **the محل** ﴿مِنْ خَالِقٍ غَيْرُ اللهِ﴾ (rafʿ on the maḥall of the زائد-jarr mubtadaʾ).',
            '**the محل before a nāsikh entered** ﴿أَنَّ اللهَ بَرِيءٌ مِنَ الْمُشْرِكِينَ وَرَسُولُهُ﴾ — رسولُه marfūʿ on الله’s pre-إنّ ابتداء status.',
          ],
          after: 'And الفصل الثاني: the ungoverned noun (غير المعمول) = اسم الفعل ﴿هَلُمَّ شُهَدَاءَكُمْ﴾.' },

        { t: 'mcq', q: '«الْأَمِيرُ يَنْظُفُ الْمَسْجِدَ هُوَ نَفْسُهُ» — why the هو before نفسه?',
          choices: ['A connected marfūʿ pronoun emphasised by نفس/عين needs a prior lafẓī emphasis (the detached هو) first', 'For rhyme', 'هو is the fāʿil', 'نفسه is a ḥāl'],
          correct: 0,
          why: 'إذا أكد الضمير المرفوع المتصل بنفس أو عين أكد أولا بتأكيد لفظي.' },

        { t: 'mcq', q: '﴿خَلَقَ لَكُمْ مَا فِي الْأَرْضِ جَمِيعًا﴾ — جميعا gives emphasis, but what is its iʿrāb?',
          choices: ['ḥāl — جميع yields the sense of التأكيد yet is parsed as a state', 'توكيد معنوي like كل', 'tamyīz', 'مفعول مطلق'],
          correct: 0,
          why: 'كلمة جميع تفيد التوكيد ويعرب حالا — unlike نفس/عين/كل/كلا/كلتا which are توكيد proper.' },

        { t: 'mcq', q: '﴿أَنَّ اللهَ بَرِيءٌ مِنَ الْمُشْرِكِينَ وَرَسُولُهُ﴾ — رسولُه is marfūʿ though اسم أنّ (الله) is manṣūb. How?',
          choices: ['ʿAṭf on الله’s MAḤALL — its ابتداء status BEFORE أنّ entered (a pre-nāsikh maḥall)', 'A reading error', 'عطف على اللفظ', 'رسوله is a new mubtadaʾ'],
          correct: 0,
          why: 'المحل قبل دخول الناسخ على المتبوع — the tābiʿ may follow the noun’s original marfūʿ status.' },

        { t: 'written',
          prompt: 'Cover التأكيد: اللفظي (what it repeats — verb, noun, pronoun kinds, particle, jumla) and المعنوي (the five words, their number-uses, and جميع); then the tābiʿ-following-maḥall rule.',
          model: 'التأكيد fixes its متبوع or covers all its members; it is two. اللفظي is repetition: of a verb «قام قام زيد», an explicit noun ﴿أولئك المقربون﴾ or a synonym ﴿ضيقا حرجا﴾, a pronoun — detached «إياك إياك أردت», connected marfūʿ via a detached one «ذهبت أنا»/«أكرمتك أنت», connected manṣūb «أكرمتك إياك», connected majrūr «مررت بك أنت» or «مررت بك بك»; a particle — a ḥarf jawāb by repetition «لا لا أشرك بالله» or else with an attached word repeated ﴿أنكم إذا متم … أنكم مخرجون﴾ (not إنّ alone); and a jumla ﴿فإن مع العسر يسرا إن مع العسر يسرا﴾ or with ثم ﴿كلا سيعلمون ثم كلا سيعلمون﴾. المعنوي uses نفس، عين، كلا، كلتا، كل agreeing with a pronoun: كلا وكلتا for the dual «جاء الرجلان كلاهما»; نفس وعين across singular/dual/plural «نفسه/أنفسهما/أنفسهم»; a connected marfūʿ pronoun needs a prior lafẓī emphasis «الأمير ينظف المسجد هو نفسه»; عين trails نفس when both appear; both may take a زائدة باء «جاء الرجل بنفسه»; كل is reinforced by أجمع وأخواته ﴿فسجد الملائكة كلهم أجمعون﴾; and جميع gives emphasis but is parsed ḥāl ﴿خلق لكم ما في الأرض جميعا﴾. Finally, a متبوع with both lafẓī and maḥallī iʿrāb lets the tābiʿ follow the لفظ «ما أنا بكاذب ولا خادع», the محل ﴿من خالق غير الله﴾, or the محل before a nāsikh entered ﴿أن الله بريء من المشركين ورسوله﴾.' },
      ],
    },

    /* ═══ 5. الباب الثاني: معمول الفعل ═══ */
    {
      id: 'maful-fil',
      title: 'الباب الثاني: معمول الفعل',
      subtitle: 'المرفوع والمنصوب والمجزوم من الفعل',
      steps: [
        { t: 'teach', title: 'The verb as a governed word', page: 162,
          ar: 'لا يَكُونُ الْفِعْلُ مَعْمُولًا إِلَّا بِالْأَصَالَةِ',
          arEn: 'A verb is only ever governed directly — never by dependency.',
          body: 'The معمول verb has **three أقسام**:',
          points: [
            '**المرفوع** — the muḍāriʿ free of nāṣib and jāzim ﴿يُحِبُّ اللهُ التَّوَّابَ﴾.',
            '**المنصوب** — the muḍāriʿ entered by a nāṣib «أُحِبُّ **أنْ** يَغفِرَ اللهُ ذنوبي».',
            '**المجزوم** — the muḍāriʿ entered by a jāzim «إنْ **تَتُبْ** تُقبَلْ توبتُك»، «إنْ **أحسنتَ** أحسنَ اللهُ إليك».',
          ] },

        { t: 'teach', title: 'The ungoverned verb', page: 162,
          body: 'الفصل الثاني: **غير المعمول** verb — two:',
          points: [
            'the **māḍī** free of nāṣib/jāzim «آمنتُ باللهِ»,',
            'the **amr by form** «اتقوا اللهَ» (jazm-marked for the Kūfans).',
            'The **amr by lām** and the **nahy** are both **majzūm**: «لِيَذهَبْ لصلاةِ الفجرِ **ولا** يَكسَلْ».',
          ] },

        { t: 'mcq', q: 'Which verb is مرفوع, and by what?',
          choices: ['The muḍāriʿ free of any nāṣib or jāzim — raised by that very freedom ﴿يحب الله التواب﴾', 'The māḍī, by a hidden عامل', 'The amr, by its form', 'Any verb after إنْ'],
          correct: 0,
          why: 'The three معمول verb-types are all muḍāriʿ: مرفوع (خالٍ), منصوب (بناصب), مجزوم (بجازم). The māḍī and form-amr are غير معمول.' },

        { t: 'mcq', q: 'الأمر باللام والنهي — what is their iʿrāb?',
          choices: ['Both مجزوم «ليذهب لصلاة الفجر ولا يكسل»', 'Both marfūʿ', 'The amr manṣūb, the nahy majzūm', 'Both mabnī, ungoverned'],
          correct: 0,
          why: 'الأمر باللام والنهي مجزومان — distinct from the form-amr «اتقوا الله», which is غير معمول (or majzūm for the Kūfans).' },

        { t: 'written',
          prompt: 'List the three معمول verb-kinds and the ungoverned verbs, and the status of the two amr-forms and the nahy.',
          model: 'A verb is governed only بالأصالة, in three kinds — all muḍāriʿ: المرفوع (free of nāṣib and jāzim ﴿يحب الله التواب﴾), المنصوب (a nāṣib entered it «أحب أن يغفر الله ذنوبي»), and المجزوم (a jāzim entered it «إن تتب تقبل توبتك»، «إن أحسنت أحسن الله إليك»). The ungoverned verb is two: the māḍī free of nāṣib/jāzim «آمنت بالله» and the amr by form «اتقوا الله» (majzūm for the Kūfans). The amr by lām and the nahy are both majzūm «ليذهب لصلاة الفجر ولا يكسل».' },
      ],
    },

    /* ═══ 6. الباب الثالث: الجملة ═══ */
    {
      id: 'jumla-mamula',
      title: 'الباب الثالث: معمول الجملة',
      subtitle: 'الجملة التي لها محل من الإعراب',
      steps: [
        { t: 'teach', title: 'A sentence with a place in iʿrāb', page: 163,
          body: 'A **governed jumla** is called «جملة لها محل من الإعراب». Two أنواع; the **بالأصالة** kind has four أقسام:',
          points: [
            '**المرفوع** — two: **khabar of the mubtadaʾ** ﴿وَاللهُ يُحِبُّ الْمُحْسِنِينَ﴾ and **khabar of إنّ** ﴿إِنَّ اللهَ يُحِبُّ الْمُحْسِنِينَ﴾.',
            '**المنصوب** — four: **مفعول به** (مقول القول) ﴿قَالَ اللهُ هَذَا يَوْمٌ يَنْفَعُ الصَّادِقِينَ صِدْقُهُمْ﴾ · **مفعول له** — a تعليلية jumla ﴿وَاتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُونَ﴾ · **الحال** ﴿طَافَ رَسُولُ اللهِ ﷺ بِالْبَيْتِ وَهُوَ يُلَبِّي﴾ · **خبر الفعل الناقص** ﴿كَانُوا يَعْمَلُونَ﴾.',
          ] },

        { t: 'teach', title: 'When the ḥāl-wāw is obligatory — and banned', page: 164,
          body: 'The **wāw الحالية** is **obligatory** in three cases (p. 164):',
          points: [
            'the ḥāl-jumla has **no returning pronoun** ﴿لَئِنْ أَكَلَهُ الذِّئْبُ وَنَحْنُ عُصْبَةٌ﴾ · an **ismiyya** ḥāl **opened by a pronoun** of its owner ﴿لَا تَقْرَبُوا الصَّلَاةَ وَأَنْتُمْ سُكَارَى﴾ · a **muḍāriʿ ḥāl joined to قد** ﴿لِمَ تُؤْذُونَنِي وَقَدْ تَعْلَمُونَ أَنِّي رَسُولُ اللهِ إِلَيْكُمْ﴾.',
            'It is **banned** in seven (p. 165): after a **coordinator** ﴿فَجَاءَهَا بَأْسُنَا … أَوْ هُمْ قَائِلُونَ﴾ · **emphasising the prior jumla** ﴿ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ﴾ · a **māḍī after إلا** ﴿وَمَا يَأْتِيهِمْ مِنْ نَبِيٍّ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ﴾ · a **māḍī before أو** «أنصفِ الناسَ أنصفوك أو ظلموك» · a **muḍāriʿ affirmative without قد** ﴿وَلَا تَمْنُنْ تَسْتَكْثِرُ﴾ · a **muḍāriʿ negated by ما** «عهدتُك ما تصير» · a **muḍāriʿ negated by لا** ﴿وَمَا لِي لَا أَعْبُدُ الَّذِي فَطَرَنِي﴾.',
          ] },

        { t: 'teach', title: 'المجزوم — جواب الشرط, and when it takes الفاء', page: 166,
          body: 'The fourth قسم, **المجزوم**, is **one**: the جواب of the jāzim شرط joined to a **rābiṭa** — the fujāʾiyya إذا or the فاء (called فاء الجواب / فاء الرابطة للجواب). The **فاء is obligatory** when the jawāb is (pp. 166–167):',
          points: [
            'an **ismiyya** ﴿وَإِنْ يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ﴾ · a **jāmid-verb** jumla ﴿إِنْ تَرَنِ أَنَا أَقَلَّ مِنْكَ … فَعَسَى رَبِّي﴾ · a **ṭalabiyya** (amr ﴿فَاتَّبِعُونِي﴾, nahy ﴿فَلَا تَرْجِعُوهُنَّ﴾).',
            'a **māḍī with قد** ﴿فَقَدْ سَرَقَ أَخٌ لَهُ﴾ · negated **بما** ﴿فَمَا بَلَّغْتَ رِسَالَتَهُ﴾ · a **muḍāriʿ with a tanfīs-particle** ﴿فَسَوْفَ نُصْلِيهِ نَارًا﴾ · negated **بلن** ﴿فَلَنْ يُكْفَرُوهُ﴾ · opened by **كأنّما** ﴿فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ﴾ or a **conditional device** ﴿فَإِنِ اسْتَطَعْتَ أَنْ تَبْتَغِيَ نَفَقًا﴾.',
          ],
          after: 'Both faces (فاء or none) are allowed with a muḍāriʿ jawāb bare of tanfīs ﴿وَمَنْ عَادَ فَيَنْتَقِمُ اللهُ مِنْهُ﴾; and the فاء drops after إذا الفجائية ﴿إِذَا هُمْ يَقْنَطُونَ﴾ (p. 168).' },

        { t: 'mcq', q: '﴿لَا تَقْرَبُوا الصَّلَاةَ وَأَنْتُمْ سُكَارَى﴾ — why is the wāw obligatory?',
          choices: ['An ismiyya ḥāl opened by a pronoun of its owner requires the wāw', 'A māḍī after إلا', 'It has no returning pronoun', 'It is banned here actually'],
          correct: 0,
          why: 'Three وجوب cases: no returning pronoun ﴿ونحن عصبة﴾, ismiyya opened by a pronoun ﴿وأنتم سكارى﴾, muḍāriʿ with قد ﴿وقد تعلمون﴾.' },

        { t: 'mcq', q: '﴿وَمَا لِي لَا أَعْبُدُ الَّذِي فَطَرَنِي﴾ — why NO wāw on the ḥāl لا أعبد?',
          choices: ['A muḍāriʿ ḥāl negated by لا bans the wāw', 'It is emphasising the prior jumla', 'It follows a coordinator', 'The wāw is optional here'],
          correct: 0,
          why: 'Among the seven bans: muḍāriʿ negated بلا, negated بما «عهدتك ما تصير», or affirmative without قد ﴿ولا تمنن تستكثر﴾.' },

        { t: 'mcq', q: '﴿وَإِنْ يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ﴾ — why the فاء on the jawāb?',
          choices: ['The jawāb is an ismiyya jumla — the فاء is then obligatory to link it', 'هو is a fāʿil', 'The شرط is māḍī', 'The فاء is optional'],
          correct: 0,
          why: 'يجب اقتران الجواب بالفاء if it is ismiyya, jāmid-verb, ṭalabiyya, māḍī with قد, negated بما, muḍāriʿ with tanfīs, negated بلن, or opened by كأنما / a conditional device.' },

        { t: 'mcq', q: '﴿وَمَنْ عَادَ فَيَنْتَقِمُ اللهُ مِنْهُ﴾ — the jawāb is a bare muḍāriʿ, yet it has a فاء. Is that forced?',
          choices: ['No — a muḍāriʿ jawāb without tanfīs allows BOTH the فاء and its omission', 'Yes, always forced', 'The فاء is banned here', 'Only with قد'],
          correct: 0,
          why: 'يجوز الوجهان في المضارع المثبت بغير حرف تنفيس ﴿فينتقم الله منه﴾ / ﴿ينتقم﴾; the فاء also drops after إذا الفجائية ﴿إذا هم يقنطون﴾.' },

        { t: 'written',
          prompt: 'List the four أقسام of the governed jumla (with examples), the three obligatory and (at least four) banned cases of the ḥāl-wāw, and the rule for الفاء on جواب الشرط with both an obligatory case and the both-allowed case.',
          model: 'A jumla لها محل من الإعراب (bālaṣāla) has four أقسام. المرفوع: khabar of the mubtadaʾ ﴿والله يحب المحسنين﴾ and khabar of إنّ ﴿إن الله يحب المحسنين﴾. المنصوب (four): مفعول به/مقول القول ﴿قال الله هذا يوم ينفع الصادقين صدقهم﴾, مفعول له تعليلية ﴿واتقوا الله لعلكم تفلحون﴾, الحال ﴿طاف رسول الله بالبيت وهو يلبي﴾, khabar of the deficient verb ﴿كانوا يعملون﴾. المجرور (one): the muḍāf-ilayhi jumla ﴿يوم ينفع الصادقين صدقهم﴾. المجزوم (one): جواب الشرط الجازم joined to a rābiṭa. The wāw الحالية is obligatory when the ḥāl has no returning pronoun ﴿ونحن عصبة﴾, is ismiyya opened by a pronoun ﴿وأنتم سكارى﴾, or is a muḍāriʿ with قد ﴿وقد تعلمون﴾; it is banned after a coordinator ﴿أو هم قائلون﴾, when emphasising the prior jumla ﴿لا ريب فيه﴾, with a māḍī after إلا ﴿إلا كانوا به يستهزئون﴾ or before أو «أنصفوك أو ظلموك», and with a muḍāriʿ affirmative without قد ﴿ولا تمنن تستكثر﴾ or negated بما/بلا ﴿وما لي لا أعبد الذي فطرني﴾. الفاء on جواب الشرط is obligatory when the jawāb is ismiyya ﴿فهو على كل شيء قدير﴾, a jāmid-verb ﴿فعسى ربي﴾, ṭalabiyya ﴿فاتبعوني﴾, a māḍī with قد ﴿فقد سرق أخ له﴾, negated بما ﴿فما بلغت رسالته﴾, a muḍāriʿ with tanfīs ﴿فسوف نصليه نارا﴾ or negated بلن ﴿فلن يكفروه﴾, or opened by كأنما ﴿فكأنما خر من السماء﴾ or a conditional device; both faces are allowed with a bare muḍāriʿ jawāb ﴿ومن عاد فينتقم الله منه﴾, and the فاء drops after إذا الفجائية ﴿إذا هم يقنطون﴾.' },
      ],
    },

    /* ═══ 7. غير المعمول من الجملة ═══ */
    {
      id: 'ghayr-mamul-jumla',
      title: 'الفصل الثاني: غير المعمول من الجملة',
      subtitle: 'الجمل التي لا محل لها من الإعراب',
      steps: [
        { t: 'teach', title: 'The eight placeless sentences (1)', page: 168,
          body: 'A **غير معمول** jumla is «جملة لا محل لها من الإعراب» — **eight**:',
          points: [
            '**الابتدائية** — heading the speech ﴿إِنَّا أَنْزَلْنَاهُ﴾.',
            '**المستأنفة** — beginning fresh mid-speech, cut off from what precedes: ʿaṭfed onto a placeless jumla ﴿اجْتَهَدَ زَيْدٌ وَنَجَحَ﴾-style, or unjoined ﴿وَمَا أُبَرِّئُ نَفْسِي إِنَّ النَّفْسَ لَأَمَّارَةٌ بِالسُّوءِ﴾. Its kin: **جواب النداء** ﴿يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمْ﴾ and جواب القسم. Its particles: الواو، ثم، حتى، أم المنقطعة، بل الانتقالية، أو بمعنى بل، ولكن المجردة عن الواو (p. 169).',
            '**الصلة** ﴿اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ﴾.',
            '**المعترضة** — parenthetical ﴿فَإِنْ لَمْ تَفْعَلُوا وَلَنْ تَفْعَلُوا فَاتَّقُوا النَّارَ﴾ (p. 169).',
          ] },

        { t: 'teach', title: 'The eight (2) — and القسم', page: 169,
          points: [
            '**التفسيرية** — with a tafsīr particle ﴿وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ﴾ or without ﴿مَثَلُ الَّذِينَ خَلَوْا مِنْ قَبْلِكُمْ مَسَّتْهُمُ الْبَأْسَاءُ وَالضَّرَّاءُ﴾.',
            '**جواب القسم** «أقسمُ باللهِ لأصدُقنَّ الحديثَ». القسم’s pillars: **فعل القسم** (أُقسِمُ), **المقسَم به** (بالله), **المقسَم عليه / جواب القسم** (لأصدُقنَّ). A قسم is assumed before **لام الابتداء** ﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى﴾ (لام موطئة للقسم) (p. 170).',
          ] },

        { t: 'teach', title: 'جواب القسم — its openers and the tawkīd-nūn', page: 170,
          points: [
            'The jawāb comes **مصدَّرة** by: **إنّ المثقلة** ﴿وَالْفَجْرِ … إِنَّ رَبَّكَ لَبِالْمِرْصَادِ﴾ · **إنْ المخففة** ﴿تَاللهِ إِنْ كُنَّا لَفِي ضَلَالٍ مُبِينٍ﴾ · **قد** ﴿وَالشَّمْسِ وَضُحَاهَا … قَدْ أَفْلَحَ مَنْ زَكَّاهَا﴾ · **the fatḥ-lām** ﴿فَوَرَبِّكَ لَنَسْأَلَنَّهُمْ أَجْمَعِينَ﴾ · **ما النافية** ﴿وَالضُّحَى … مَا وَدَّعَكَ رَبُّكَ﴾ · **لا النافية** ﴿وَأَقْسَمُوا بِاللهِ جَهْدَ أَيْمَانِهِمْ لَا يَبْعَثُ اللهُ مَنْ يَمُوتُ﴾.',
            'Emphasising the **jawāb-verb with the tawkīd-nūn is obligatory** if it is **muḍāriʿ, affirmative, not separated from the lām** ﴿وَتَاللهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾.',
            'It is **barred** if the verb is **not affirmative** ﴿لَا يَبْعَثُ اللهُ مَنْ يَمُوتُ﴾, or **not joined to a lām** ﴿تَاللهِ تَفْتَؤُا تَذْكُرُ يُوسُفَ﴾.',
          ] },

        { t: 'mcq', q: '﴿مَثَلُ الَّذِينَ خَلَوْا مِنْ قَبْلِكُمْ مَسَّتْهُمُ الْبَأْسَاءُ﴾ — what is مستهم البأساء?',
          choices: ['A تفسيرية jumla WITHOUT a tafsīr particle — placeless in iʿrāb', 'A صلة', 'A ḥāl', 'A jawāb القسم'],
          correct: 0,
          why: 'التفسيرية comes مقترنة بحرف تفسير ﴿أن يا إبراهيم﴾ or غير مقترنة — either way لا محل لها.' },

        { t: 'mcq', q: '﴿وَتَاللهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾ — why the obligatory nūn on أكيدنّ?',
          choices: ['The jawāb-verb is muḍāriʿ, affirmative, and not separated from the lām — the tawkīd-nūn is then obligatory', 'For rhyme', 'Because of the قسم particle تاء', 'It is optional'],
          correct: 0,
          why: 'يجب تأكيده بنون التوكيد إن كان مثبتا غير مفصول من لام القسم — barred otherwise ﴿لا يبعث الله﴾, ﴿تفتؤا تذكر يوسف﴾.' },

        { t: 'mcq', q: '﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى﴾ — there is a lām but no visible قسم. What is assumed?',
          choices: ['A قسم before لام الابتداء — the lām is موطئة للقسم', 'Nothing; it is لام التوكيد alone', 'An إنّ', 'A شرط'],
          correct: 0,
          why: 'يقدر قسم قبل لام الابتداء ﴿ولسوف يعطيك ربك﴾ — تسمى لام القسم أو لاما موطئة للقسم.' },

        { t: 'mcq', q: 'Which sentence has NO place in iʿrāb?',
          choices: ['المعترضة ﴿فإن لم تفعلوا ولن تفعلوا فاتقوا النار﴾ — the parenthetical ولن تفعلوا', 'khabar of إنّ', 'الحال', 'مقول القول'],
          correct: 0,
          why: 'The eight placeless: الابتدائية، المستأنفة، الصلة، المعترضة، التفسيرية، جواب القسم — plus جواب النداء وجواب القسم among المستأنفة.' },

        { t: 'written',
          prompt: 'List the eight placeless jumal with an example each, the pillars of القسم, and the openers of جواب القسم plus the tawkīd-nūn rules on its verb.',
          model: 'A jumla لا محل لها من الإعراب is eight: الابتدائية ﴿إنا أنزلناه﴾; المستأنفة, fresh mid-speech, ʿaṭfed on a placeless jumla «اجتهد زيد ونجح» or unjoined ﴿وما أبرئ نفسي إن النفس لأمارة بالسوء﴾ (its kin: جواب النداء ﴿يا أيها الناس اعبدوا ربكم﴾ and جواب القسم; particles: الواو، ثم، حتى، أم المنقطعة، بل الانتقالية، أو بمعنى بل، ولكن المجردة عن الواو); الصلة ﴿الذي خلقكم﴾; المعترضة ﴿فإن لم تفعلوا ولن تفعلوا فاتقوا النار﴾; التفسيرية ﴿وناديناه أن يا إبراهيم﴾ or without a particle ﴿مسّتهم البأساء والضراء﴾; and جواب القسم «أقسم بالله لأصدقن الحديث». القسم’s pillars: فعل القسم (أقسم), المقسم به (بالله), المقسم عليه/جواب القسم (لأصدقن) — and a قسم is assumed before لام الابتداء ﴿ولسوف يعطيك ربك فترضى﴾. جواب القسم opens with إنّ المثقلة ﴿إن ربك لبالمرصاد﴾, إنْ المخففة ﴿تالله إن كنا لفي ضلال مبين﴾, قد ﴿قد أفلح من زكاها﴾, the fatḥ-lām ﴿لنسألنهم أجمعين﴾, ما النافية ﴿ما ودعك ربك﴾, or لا النافية ﴿لا يبعث الله من يموت﴾. The tawkīd-nūn on the jawāb-verb is obligatory when it is muḍāriʿ, affirmative and unseparated from the lām ﴿وتالله لأكيدن أصنامكم﴾, and barred when it is non-affirmative ﴿لا يبعث الله﴾ or lām-less ﴿تالله تفتؤا تذكر يوسف﴾.' },
      ],
    },
  ],
});
