/* ── Daram Learn — al-Kubrā fī an-Naḥw · الخاتمة: الباب الثاني في أحكام الفعل (pp. 220–227) ──
   Authored directly from books/kubra-nahw/notes/ahkam-fil_*.md (backward book pass), which
   distil the book PDF page-by-page. NO matn panels: these pages are not transcribed in the
   reader — teach cards use static ar:/arEn: blocks and carry `page:` (book page) so every key
   idea maps back to the book. No bank steps, no written steps (key-idea + MCQ only).          */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'kh-ahkam-fil',
  num: 20,
  titleAr: 'أَحْكَامُ الْفِعْلِ',
  titleEn: 'الخاتمة · أحكام الفعل — tense, voice, negation, emphasis, agreement',
  pages: '220–227',
  sections: [

    /* ═══ 1. الماضي والمضارع والأمر ═══ */
    {
      id: 'azminah',
      title: 'الفصل الأول: الماضي والمضارع والأمر',
      subtitle: 'حروف المضارعة · تخصيص الزمان · صياغة الأمر',
      steps: [
        { t: 'teach', title: 'Three tenses', page: 220,
          points: [
            'الماضي: **قبل التكلم** — «آمَنَ».',
            'المضارع: at التكلم = **الحال** («زَيْدٌ يُصَلِّي الآنَ»); after = **المستقبل** («فَاطِمَةُ تَصُومُ غَدًا»). علامة المضارع: begins with **أ · ت · ي · ن** (mnemonic أَنَيْتُ).',
            'الأمر: **طلب الفعل** — requesting an action.',
          ] },

        { t: 'teach', title: 'Pinning the مضارع’s time', page: 221,
          body: 'A bare مضارع is ambiguous between now and later until a device pins it down.',
          points: [
            'الحال when **اللام** enters: «لَنَدْخُلُ الْمَسْجِدَ الْحَرَامَ».',
            'الاستقبال with **السين** «سَنَطُوفُ بِالْبَيْتِ», **سَوْفَ** ﴿وَسَوْفَ تَسْعَى بَيْنَ الصَّفَا وَالْمَرْوَةِ﴾, or **نون التوكيد** ﴿وَلَنَدْعُوَنَّ اللَّهَ﴾.',
          ] },

        { t: 'teach', title: 'Coining the أمر', page: 221,
          body: 'From the مخاطب مجزوم مضارع, dropping the حرف مضارعة: (تُعَلِّمُ →) «عَلِّمِ النَّاسَ الْقُرْآنَ».',
          points: [
            'If what remains starts with a sākin, add **همزة وصل**: maksūra if the ʿayn is fatḥa/kasra («ارْكَعُوا»), maḍmūma if the ʿayn is ḍamma («اسْجُدُوا»).',
            'أمر from باب الإفعال is coined from its **original مضارع** (يُؤَفْعِلُ) → «أَفْعِلْ».',
          ] },

        { t: 'mcq', q: '«سَنَطُوفُ بِالْبَيْتِ» vs «لَنَدْخُلُ الْمَسْجِدَ الْحَرَامَ» — which fixes الاستقبال and which fixes الحال?',
          choices: ['السين fixes الاستقبال (سنطوف); اللام fixes الحال (لندخل)', 'Both fix الاستقبال', 'Both fix الحال', 'Neither fixes anything'],
          correct: 0,
          why: 'اللام pins the مضارع to الحال; السين/سوف/نون التوكيد pin it to الاستقبال.' },

        { t: 'mcq', q: '«اسْجُدُوا» vs «ارْكَعُوا» — why maḍmūma وصل-hamza on one and maksūra on the other?',
          choices: ['The hamza mirrors the root’s ʿayn: ḍamma-ʿayn (اسجد) → maḍmūma وصل; fatḥa/kasra-ʿayn (اركع) → maksūra', 'Random variation', 'اسجدوا is not an أمر', 'The hamza is always maksūra'],
          correct: 0,
          why: 'همزة الوصل on a triliteral أمر copies the ʿayn’s vowel-class.' },

        { t: 'mcq', q: 'What identifies a مضارع verb on sight?',
          choices: ['It begins with one of أ ·ت ·ي ·ن (mnemonic أَنَيْتُ)', 'It ends in a تاء', 'It always carries a سين', 'It has no فاعل'],
          correct: 0,
          why: 'حروف المضارعة = أ ت ي ن — every مضارع opens with one of these.' },
      ],
    },

    /* ═══ 2. المبني للفاعل والمبني للمفعول ═══ */
    {
      id: 'mabni-fail-maful',
      title: 'الفصل الثاني: المبني للفاعل والمبني للمفعول',
      subtitle: 'معلوم/مجهول · قلب الألف واوًا · قلب الواو ياءً',
      steps: [
        { t: 'teach', title: 'المعلوم vs المجهول', page: 221,
          body: 'Active (فاعله مذكور) vs passive (فاعله محذوف, its مفعول takes its place) — same root, different vowelling.',
          points: [ '«خَلَقَ اللَّهُ الأَرْضَ» (معلوم) vs «خُلِقَتِ الأَرْضُ» (مجهول).' ] },

        { t: 'teach', title: 'Building the passive', page: 221,
          body: 'The passive is a re-vowelling, not a new word.',
          points: [
            'ماضي pattern: **letter before last kasra, every other moving letter ḍamma** — «نُصِرَ», «أُكْرِمَ», «زُلْزِلَ», «اسْتُخْرِجَ».',
            '**قلب الألف واوًا**: an added alif after the فاء flips to wāw — «حَاسَبَ» → «حُوسِبَ». **قلب الواو ياءً**: a root-wāw after the فاء flips to yāʾ, فاء takes kasra — «قَالَ» → «قِيلَ».',
            'مضارع pattern: **حرف المضارعة ḍamma, letter before last fatḥa** — «يُعْلَمُ», «يُكْرَمُ», «يُحَاسَبُ».',
          ] },

        { t: 'mcq', q: '«قَالَ» → «قِيلَ» — what happened to the root’s وَاو?',
          choices: ['It flipped to yāʾ (قلب الواو ياء) because it follows the فاء in the passive; the فاء itself takes kasra', 'It stayed unchanged', 'It flipped to alif', 'قال has no passive form'],
          correct: 0,
          why: 'قلب الواو ياء applies specifically when a root-wāw follows the فاء in a passive-built verb.' },

        { t: 'mcq', q: '«يُكْرَمُ» — identify the passive مضارع pattern.',
          choices: ['حرف المضارعة ḍamma + letter-before-last fatḥa', 'حرف المضارعة fatḥa + letter-before-last kasra', 'Every letter ḍamma', 'No pattern — memorised individually'],
          correct: 0,
          why: 'The fixed passive-مضارع template: ḍamma on the مضارعة-letter, fatḥa right before the last letter.' },
      ],
    },

    /* ═══ 3. تصرف الفعل ═══ */
    {
      id: 'tasarruf',
      title: 'الفصل الثالث: تصرف الفعل وعدمه',
      subtitle: 'تام التصرف · ناقص التصرف · جامد',
      steps: [
        { t: 'teach', title: 'متصرِّف vs جامد', page: 222,
          body: 'Does the verb conjugate across tenses, or freeze in one form?',
          points: [
            '**تام التصرف**: runs through ماضٍ ·مضارع ·أمر ·اسم فاعل — «أَطَاعَ» ·«يُطِيعُ» ·«أَطِعْ» ·«مُطِيعٌ».',
            '**ناقص التصرف**: reaches مضارع only, no further — «مَا زَالَ» ·«لَا يَزَالُ» · «يَذَرُ» · «يَدَعُ».',
            '**جامد**: does not conjugate at all — «لَيْسَ» ·«عَسَى» ·«نِعْمَ» ·«بِئْسَ» ·«حَبَّذَا» ·«خَلَا» ·«عَدَا» ·«حَاشَا».',
          ],
          after: 'جامد splits further: ما يلحقه ضمير الفاعل («ليس», «عسى») vs ما لا يلحقه («نعم», «بئس»).' },

        { t: 'mcq', q: '«مَا زَالَ» — تام or ناقص التصرف, and what does that mean for its أمر?',
          choices: ['ناقص التصرف — it only reaches مضارع (لا يزال); it has no أمر form at all', 'تام التصرف — full paradigm including أمر', 'جامد — no مضارع either', 'It only exists in الماضي'],
          correct: 0,
          why: 'ناقص التصرف stops at مضارع — hunting for an أمر of ما زال is the beginner trap this فصل warns against.' },

        { t: 'mcq', q: '«نِعْمَ» و «بِئْسَ» — both جامد, but do they differ from «لَيْسَ»/«عَسَى»?',
          choices: ['Yes — they belong to the جامد subtype that does NOT take a doer-pronoun, unlike ليس/عسى which do', 'No difference at all', 'نعم is تام التصرف', 'بئس has a مضارع'],
          correct: 0,
          why: 'جامد splits into ما يلحقه ضمير الفاعل (ليس · عسى) and ما لا يلحقه (نعم · بئس).' },
      ],
    },

    /* ═══ 4. نفي الفعل ═══ */
    {
      id: 'nafy-fil',
      title: 'الفصل الرابع: نفي الفعل',
      subtitle: 'ما ولا للماضي · لم ولمّا وما ولا ولن للمضارع',
      steps: [
        { t: 'teach', title: 'نفي الماضي — two particles', page: 223,
          points: [
            '**ما**: «مَا كَذَبَ».',
            '**لا**: enters the ماضي in a **دعاء** («لَا قَدَّرَ اللَّهُ»), or **when repeated** — in wording ﴿فَلَا صَدَّقَ وَلَا صَلَّى﴾ or in sense ﴿فَلَا اقْتَحَمَ الْعَقَبَةَ﴾.',
          ] },

        { t: 'teach', title: 'نفي المضارع — five particles', page: 223,
          points: [
            '**لَمْ** negates + flips to past: «لَمْ يَتُبْ». **لَمَّا** negates + flips to past, with **توقّع الحصول** (still expected): ﴿وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ﴾.',
            '**مَا** negates the الحال: ﴿وَمَا يَعْلَمُ جُنُودَ رَبِّكَ إِلَّا هُوَ﴾. **لَا** negates present+future: ﴿وَلَا يَدْخُلُونَ الْجَنَّةَ حَتَّى يَلِجَ الْجَمَلُ فِي سَمِّ الْخِيَاطِ﴾.',
            '**لَنْ** — emphatic negation of the future: ﴿لَنْ تَنَالُوا الْبِرَّ حَتَّى تُنْفِقُوا مِمَّا تُحِبُّونَ﴾.',
          ] },

        { t: 'mcq', q: '﴿لَمْ يَتُبْ﴾ — “he does not repent” or “he did not repent”?',
          choices: ['“He did not repent” — لم negates the مضارع and flips its meaning to past', '“He does not repent” — present tense', '“He will not repent”', 'Meaning is ambiguous'],
          correct: 0,
          why: 'لم and لما both drag a مضارع-shaped verb into past meaning — a classic reading trap.' },

        { t: 'mcq', q: 'لَمَّا vs لَمْ — both flip to past. What is the one difference?',
          choices: ['لمّا carries توقّع الحصول — an expectation the action still might happen; لم simply closes the door', 'لمّا is used only in poetry', 'لم is stronger in meaning', 'There is no difference'],
          correct: 0,
          why: '﴿وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ﴾ — “not yet,” door still open; لم carries no such expectation.' },
      ],
    },

    /* ═══ 5. تأكيد الفعل ═══ */
    {
      id: 'tawkid-fil',
      title: 'الفصل الخامس: تأكيد الفعل',
      subtitle: 'قد للماضي · نون التوكيد الثقيلة والخفيفة',
      steps: [
        { t: 'teach', title: 'قَدْ for the past, نون التوكيد for المضارع والأمر', page: 224,
          points: [
            '**قَدْ** ﴿وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ﴾ — often preceded by لام التوكيد → **لَقَدْ** ﴿لَقَدْ جَاءَكُمْ رَسُولٌ﴾.',
            '**نون التوكيد** enters the مضارع with future meaning ﴿فَلَنَسْأَلَنَّ الَّذِينَ أُرْسِلَ إِلَيْهِمْ﴾, the أمر «فَاخْشَعَنَّ لِلَّهِ», and the نهي ﴿وَلَا تَمُوتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُونَ﴾.',
          ] },

        { t: 'teach', title: 'The heavy vs light نون', page: 224,
          points: [
            'الثقيلة: **maksūra** with the dual pronoun and نون النسوة («أَطِيعَانِّ», «لَا تَعْصِيَانِّ»); **maftūḥa** everywhere else («اعْبُدَنَّ»).',
            'الخفيفة: does not enter with the dual or نون النسوة; an alif is inserted after نون النسوة («أَطِعْنَانْ», root أَطِعْنَنْ).',
            '**حذف نون الإعراب** when نون التوكيد enters («لَيُطِيعَانِّ»); the واو/ياء of الفاعل also drop, leaving a hidden pronoun («لَيُطِيعُنَّ», root ليُطيعونّ).',
          ] },

        { t: 'mcq', q: '﴿فَلَنَسْأَلَنَّ الَّذِينَ أُرْسِلَ إِلَيْهِمْ وَلَنَسْأَلَنَّ الْمُرْسَلِينَ﴾ — where did the واو الفاعل of «يسألون» go?',
          choices: ['It dropped when نون التوكيد entered — الفاعل becomes a hidden pronoun, absorbed by the heavy نون', 'It was never there', 'It merged into the نون as a letter', 'The verb has no فاعل here'],
          correct: 0,
          why: 'نون التوكيد triggers حذف واو/ياء الفاعل — «لَيُطِيعُنَّ» hides a plural فاعل, root ليُطيعونّ.' },

        { t: 'mcq', q: '«أَطِيعَانِّ» — why is the نون maksūra rather than maftūḥa here?',
          choices: ['The heavy نون takes kasra specifically with the dual pronoun and نون النسوة', 'It is always kasra', 'It is a spelling mistake', 'Kasra marks negation'],
          correct: 0,
          why: 'الثقيلة is maksūra only before the dual/نون النسوة; everywhere else it is maftūḥa.' },
      ],
    },

    /* ═══ 6. إلحاق علامة التأنيث ═══ */
    {
      id: 'tanith-fil',
      title: 'الفصل السادس: إلحاق علامة التأنيث بالفعل',
      subtitle: 'ممتنع · واجب · جائز (٤ مواضع) · سقوط العلامة',
      steps: [
        { t: 'teach', title: 'Three markers, three degrees', page: 225,
          body: 'Does a verb take a feminine تاء for its فاعل? A three-way answer, not yes/no.',
          points: [
            'Markers: **التاء الساكنة** at end of ماضي («صَدَقَتْ») · **التاء** at start of مضارع («تَصْدُقُ») · **التاء المربوطة** on اسم الفاعل/المفعول («هِيَ صَادِقَةٌ مَحْمُودَةٌ»).',
            '**الإلحاق الممتنع** (forbidden) when الفاعل is masculine — singular «يُصَلِّي الْمُعَلِّمُ», dual «الأَبُ صَائِمٌ وَلَدَاهُ», sound plural «سَيَحُجُّ الْمُعَلِّمُونَ».',
            '**الإلحاق الواجب** (obligatory): a real-feminine visible noun ﴿قَالَتِ امْرَأَتُ عِمْرَانَ﴾, a pronoun for a real feminine ﴿فَلَمَّا وَضَعَتْهَا﴾, or سماعي ﴿وَوُفِّيَتْ كُلُّ نَفْسٍ مَا كَسَبَتْ﴾.',
          ] },

        { t: 'teach', title: 'الإلحاق الجائز — four optional places', page: 226,
          points: [
            'فاعل **separated** from the verb ﴿جَاءَكَ الْمُؤْمِنَةُ﴾؛ فاعل a **visible non-real feminine** ﴿قَالَتِ الأَعْرَابُ آمَنَّا﴾.',
            'A pronoun for a **broken plural or اسم جمع**: «الرِّجَالُ صَلَّتْ» / «صَلَّوْا».',
            '**نِعْمَ/بِئْسَ** with a real-feminine visible فاعل: «نِعْمَ الأُمُّ خَدِيجَةُ».',
          ],
          after: 'The marker drops entirely when a جار ومجرور stands in for الفاعل ﴿وَكَفَى بِجَهَنَّمَ سَعِيرًا﴾, or a نائب الفاعل does ﴿وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾.' },

        { t: 'mcq', q: '﴿قَالَتِ امْرَأَتُ عِمْرَانَ﴾ vs ﴿قَالَتِ الأَعْرَابُ آمَنَّا﴾ — same obligation?',
          choices: ['No — امرأة عمران is real-feminine visible (واجب); الأعراب is non-real-feminine visible (جائز, optional)', 'Both are obligatory', 'Both are optional', 'Neither takes a تاء'],
          correct: 0,
          why: 'حقيقي visible فاعل forces the تاء (واجب); غير حقيقي visible فاعل only allows it (جائز).' },

        { t: 'mcq', q: '﴿وَكَفَى بِجَهَنَّمَ سَعِيرًا﴾ — no تاء on كفى, though جهنم is feminine. Why?',
          choices: ['جهنم sits inside a جار ومجرور standing in for الفاعل — the marker drops entirely in that slot', 'كفى is جامد and cannot take تاء', 'جهنم is actually masculine', 'This is an exception with no rule'],
          correct: 0,
          why: 'سقوط العلامة: the تاء vanishes when a جار ومجرور (or a matching نائب فاعل) fills the فاعل slot.' },

        { t: 'mcq', q: '«الرِّجَالُ صَلَّتْ» vs «الرِّجَالُ صَلَّوْا» — both grammatical?',
          choices: ['Yes — a pronoun for a broken plural may take fem.+singular (صلّت) or masc.+plural (صلّوا), both جائز', 'Only صلّت is correct', 'Only صلّوا is correct', 'رجال cannot take صلّت at all'],
          correct: 0,
          why: 'Broken-plural/اسم جمع pronouns sit in الإلحاق الجائز — either marking works.' },
      ],
    },

    /* ═══ 7. توحيد الفعل ═══ */
    {
      id: 'tawhid-fil',
      title: 'الفصل السابع: توحيد الفعل',
      subtitle: 'ظاهر → إفراد · مضمر → مطابقة · أكلوني البراغيث',
      steps: [
        { t: 'teach', title: 'ظاهر keeps the verb singular; مضمر matches it', page: 227,
          body: 'The core counter-intuitive rule of the whole باب.',
          points: [
            '**فاعل ظاهر (visible)**: verb always stays singular, whatever the doer’s number — «ضَرَبَ زَيْدٌ», «ضَرَبَ الزَّيْدَانِ», «ضَرَبَ الزَّيْدُونَ».',
            '**فاعل مضمر (pronoun)**: the verb matches it — singular «زَيْدٌ ضَرَبَ», dual «الزَّيْدَانِ ضَرَبَا», plural «الزَّيْدُونَ ضَرَبُوا».',
          ] },

        { t: 'teach', title: 'أكلوني البراغيث & شبه الفعل', page: 227,
          body: 'One dialect breaks the rule; verb-like words follow a parallel logic.',
          points: [
            'لغة أكلوني البراغيث **does** mark number with a visible فاعل — ﴿وَأَسَرُّوا النَّجْوَى الَّذِينَ ظَلَمُوا﴾. Mainstream view: الذين ظلموا is re-parsed as delayed فاعل, بدل, or taqdīm/taʾkhīr.',
            'شبه الفعل: when النائب الفاعل is a **شبه جملة**, the verb-like word keeps singular — «جِيءَ بِهِمْ». Free of a plural-pronoun, its plural may show even with a visible فاعل ﴿خُشَّعًا أَبْصَارُهُمْ﴾.',
          ] },

        { t: 'mcq', q: '«ضَرَبَ الزَّيْدُونَ» — why is the verb singular though الزيدون is plural?',
          choices: ['A visible فاعل (ظاهر) always keeps the verb singular — number only shows with a pronoun فاعل', 'It is a mistake; should be ضربوا الزيدون', 'الزيدون is actually singular in meaning', 'ضرب is جامد'],
          correct: 0,
          why: 'The counter-intuitive core rule: ظاهر → singular verb regardless of number; مضمر → verb matches.' },

        { t: 'mcq', q: '﴿وَأَسَرُّوا النَّجْوَى الَّذِينَ ظَلَمُوا﴾ — أسروا looks plural though a visible فاعل follows. What is this?',
          choices: ['لغة أكلوني البراغيث — number marked despite a visible فاعل; mainstream view reparses الذين ظلموا as delayed فاعل/بدل', 'The normal rule, no exception needed', 'الذين ظلموا is unrelated to أسروا', 'A scribal error'],
          correct: 0,
          why: 'This dialect is the named exception to ظاهر→singular; grammarians re-analyse the sentence rather than adopt it as the default.' },
      ],
    },

  ],
});
