/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الباب الثاني في الحرف — حروف الجر (pp. 41–59) ──
   Lesson content authored from the reader transcription (books/kubra-nahw/maqsad1-bab2.js).
   Bank questions referenced by id from ../questions-bank.js (chapterId m1-bab-2).            */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-bab-2',
  titleAr: 'الْبَابُ الثَّانِي فِي الْحَرْفِ',
  titleEn: 'The Particle I — ḥurūf al-jarr',
  pages: '41–59',
  sections: [

    /* ═══ 1. Overview — the operating particle & حرف الجر الأصلي ═══ */
    {
      id: 'jarr-overview',
      title: 'حروف الجر — overview',
      subtitle: 'الحرف العامل · حرف الجر الأصلي',
      matn: { src: 'DATA_M1_BAB2', from: 1, to: 12, check: 'الْبَابُ' },
      steps: [
        { t: 'teach', title: 'Where we are',
          focus: [1, 2, 3, 4, 5, 6],
          points: [
            'Chapter Two = **الحرف**, in two faṣls; the first is **الحرف العامل** — the operating particle.',
            'Operating particles are two types; **النوع الأول: حروف تعمل في الاسم** — and these are four kinds.',
            'The **first kind**: particles that put **one noun** in the genitive — **حروف الجر**, of **three أضرب**.',
          ],
          after: 'Everything up to p.59 is this first kind — the jarr-particles — worked through ḍarb by ḍarb.' },

        { t: 'teach', title: 'الضرب الأول: حرف الجر الأصلي',
          focus: [7, 8, 9, 10, 12],
          points: [
            'The **أصلي** does two things: it **يفيد معنى خاصًّا** (gives a special meaning) AND, with its مجرور, is **منصوب محلًّا** — a **معمول** of a verb or **شبه الفعل**.',
            'Also called **حروف الإضافة** (they *add* the verb’s meaning to the noun) and **حروف الخفض**.',
            'So a جار+مجرور is in effect one of the **مفاعيل** made oblique — genitive in form, manṣūb-complement in meaning.',
          ],
          examples: [
            { ar: 'خُذِ الْكِتَابَ بِقُوَّةٍ', en: 'take the Book with strength', note: 'بقوة ≈ a مفعول مطلق in meaning' },
          ],
          after: 'They are **thirteen**: الباء · مِن · إلى · عن · على · اللام · في · الكاف · حتى · واو وتاء القسم · مُذ · مُنذ.' },

        { t: 'mcq', q: 'Which pair of features defines the حرف الجر الأصلي?',
          choices: ['It gives a special meaning AND its جار+مجرور is معمول of a verb or شبه الفعل', 'It gives a special meaning AND is never معمول of anything', 'It gives only emphasis AND is معمول of a verb', 'It gives only emphasis AND is never معمول'],
          correct: 0,
          why: 'Both halves matter: the **شبيه بالزائد** shares the special meaning but is NOT معمول لفعل; the **زائد** gives only تأكيد. Only the أصلي has meaning + taʿalluq.' },

        { t: 'mcq', q: 'Why are the jarr-particles also called حروف الإضافة?',
          choices: ['They add (تضيف) the verb’s meaning to the following noun', 'They form the إضافة construction like مضاف/مضاف إليه', 'They are extra letters added to the word', 'They only appear in poetry'],
          correct: 0,
          why: 'إضافة here = *conveying/adding* the verb’s meaning across to the noun — not the مضاف إليه construction (that’s the trap).' },

        { t: 'mcq', q: 'A جار+مجرور like بِبَدْرٍ in ﴿وَلَقَدْ نَصَرَكُمُ اللهُ بِبَدْرٍ﴾ is, in meaning, …',
          choices: ['a مفعول-type complement (here مفعول فيه) made oblique', 'a second فاعل', 'a مبتدأ', 'nothing — it is outside the sentence'],
          correct: 0,
          why: 'The book maps every jarr-phrase onto an object-type: genitive in **form**, but aligned with the manṣūb complements in **meaning** — here place, so مفعول فيه.' },

        { t: 'mcq', q: 'How many original (أصلي) jarr-particles does the book count?',
          choices: ['Thirteen', 'Three', 'Four', 'Nine'],
          correct: 0,
          why: 'وَهِيَ ثَلَاثَةَ عَشَرَ — thirteen, from الباء through مُذ and مُنذ. Three is the count of the **أضرب** of jarr-particles, four the count of the زائد members.' },

        { t: 'written',
          prompt: 'Define حرف الجر الأصلي and give its two alternative names. What is the relationship of the جار والمجرور to the verb?',
          model: 'حرف الجر الأصلي is what gives a special meaning (يفيد معنى خاصًّا) and is, together with its مجرور, positionally accusative (منصوب محلًّا) — a معمول of a verb or شبه الفعل.\n• Also called حروف الإضافة (they add the verb’s meaning to the noun) and حروف الخفض.\n• The جار والمجرور is متعلِّق by that verb/quasi-verb, and in meaning it stands for one of the مفاعيل (مفعول به/فيه/له/مطلق…) in oblique form. They are thirteen.' },

        { t: 'bank', id: 'm1-bab-2--state-types--state-the-kinds-of-the-prepositi-1g' },
      ],
    },

    /* ═══ 2. الباء ═══ */
    {
      id: 'ba',
      title: 'الباء — الإلصاق',
      subtitle: 'The first preposition and its nine senses',
      matn: { src: 'DATA_M1_BAB2', from: 13, to: 29, check: 'الْأَوَّلُ' },
      steps: [
        { t: 'teach', title: 'معنى الباء',
          focus: [13, 14],
          points: [
            '**معنى الباء: الإلصاق** — attachment/contact (اتّصال شيء بشيء). This is the root sense from which the rest branch.',
            'The باء can also be **transitivising (التعدية / باء النقل)**: ﴿ذَهَبَ اللهُ بِنُورِهِمْ﴾ = *made it go* — not accompaniment.',
          ],
          examples: [
            { ar: 'دَخَلْتُ بِزَيْدٍ', en: 'I entered with Zayd', note: 'مصاحبة (accompaniment)' },
            { ar: 'ذَهَبَ اللهُ بِنُورِهِمْ', en: 'Allah took away their light', note: 'تعدية — He did not go *with* it' },
          ] },

        { t: 'teach', title: 'الباء by object-type — I',
          focus: [15, 16, 17, 18, 19, 20, 22],
          points: [
            'The book parses باء + مجرور by the **complement it stands for**.',
            '**المفعول المطلق**: خُذِ الْكِتَابَ بِقُوَّةٍ · **المفعول به**: فَلَمَّا ذَهَبُوا بِهِ.',
            '**المفعول فيه** — place: بِبَدْرٍ · time: بِالَّيْلِ وَالنَّهَارِ.',
          ] },

        { t: 'teach', title: 'الباء by object-type — II',
          focus: [23, 24, 25, 26, 27, 29],
          points: [
            '**المفعول له**: فَأَهْلَكْنَاهُمْ بِذُنُوبِهِمْ · **المفعول معه**: وَقَدْ دَخَلُوا بِالْكُفْرِ.',
            '**الحال**: ادْخُلُوهَا بِسَلَامٍ · **التمييز**: يَمْلَأُ الْخُلُقُ الْحَسَنُ الْمِيزَانَ بِالْحَسَنَاتِ.',
            '**الآلة**: يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ · **العِوَض**: اشْتَرَوُا الضَّلَالَةَ بِالْهُدَى.',
          ],
          after: 'Nine senses in all — one root meaning (الإلصاق), read through the lens of the مفاعيل.' },

        { t: 'mcq', q: 'What is the core meaning of الباء?',
          choices: ['الإلصاق — attachment', 'المجاوزة — passing beyond', 'الظرفية — containment', 'التشبيه — likeness'],
          correct: 0,
          why: 'الإلصاق is the bāʾ’s root sense. المجاوزة belongs to عن, الظرفية to في, التشبيه to الكاف.' },

        { t: 'mcq', q: 'In ﴿خُذِ الْكِتَابَ بِقُوَّةٍ﴾, the phrase بِقُوَّةٍ stands for which complement?',
          choices: ['المفعول المطلق', 'المفعول به', 'الحال', 'الآلة'],
          correct: 0,
          why: 'بقوة ≈ أَخْذًا قَوِيًّا — an oblique مفعول مطلق. It describes the taking itself, not an instrument or state of the taker.' },

        { t: 'mcq', q: '﴿ادْخُلُوهَا بِسَلَامٍ آمِنِينَ﴾ — the باء-phrase carries the sense of…',
          choices: ['الحال — enter *in a state of* peace', 'العوض — in exchange for peace', 'الآلة — by means of peace', 'الزمان'],
          correct: 0,
          why: 'بسلام ≈ سَالِمِينَ, a state of the enterers — confirmed by the paired حال آمِنِينَ.' },

        { t: 'mcq', q: '﴿ذَهَبَ اللهُ بِنُورِهِمْ﴾ — the باء here is…',
          choices: ['باء التعدية — it makes ذهب transitive (≈ أَذْهَبَ)', 'باء المصاحبة — He went along with it', 'باء العوض', 'a redundant باء'],
          correct: 0,
          why: 'The trap is مصاحبة: He did not *go with* their light. The باء transitivises the intransitive ذهب — “He made their light go away.”' },

        { t: 'mcq', q: '﴿اشْتَرَوُا الضَّلَالَةَ بِالْهُدَى﴾ — sense of the باء?',
          choices: ['العِوَض — exchange', 'الإلصاق only', 'المفعول معه', 'التمييز'],
          correct: 0,
          why: 'Guidance is the price paid — the باء of exchange/substitution (عوض), as in buying and selling.' },

        { t: 'written',
          prompt: 'State the core meaning of الباء, then list four of the object-type senses its phrase can carry, each with a shāhid.',
          model: 'Core meaning: الإلصاق (attachment).\nSenses of الباء with its مجرور include:\n• المفعول المطلق — خُذِ الْكِتَابَ بِقُوَّةٍ\n• المفعول به — فَلَمَّا ذَهَبُوا بِهِ\n• المفعول فيه (مكان/زمان) — بِبَدْرٍ · بِالَّيْلِ وَالنَّهَارِ\n• المفعول له — فَأَهْلَكْنَاهُمْ بِذُنُوبِهِمْ\n(also معه، الحال، التمييز، الآلة، العوض).' },
      ],
    },

    /* ═══ 3. مِن · إلى · عن ═══ */
    {
      id: 'min-ila-an',
      title: 'مِن · إلى · عن',
      subtitle: 'Start of the span, its end, and passing beyond',
      matn: { src: 'DATA_M1_BAB2', from: 30, to: 60, check: 'الثَّانِي' },
      steps: [
        { t: 'teach', title: 'مِن — ابتداء الغاية',
          focus: [30, 31, 32, 33, 34, 35, 36],
          points: [
            '**معنى مِن: ابتداء الغاية** — the starting point of a span (place, time, or measure).',
            'Its phrase can stand for: **مفعول به** (تائبٌ مِنْ كُلِّ ذَنْبٍ) · **فيه** مكان/زمان · **له** (مِنَ الصَّوَاعِقِ) · **تمييز** (تَفِيضُ مِنَ الدَّمْعِ) · **عوض** · **آلة** (مِنْ طَرْفٍ خَفِيٍّ).',
            'Further senses: **التبعيض** (“some of”) and **بيان الجنس** (“consisting of”).',
          ],
          examples: [
            { ar: 'مِنَ الْمَسْجِدِ الْحَرَامِ', en: 'from the Sacred Mosque — start of the journey', note: 'مفعول فيه · مكان' },
            { ar: 'أُسِّسَ عَلَى التَّقْوَى مِنْ أَوَّلِ يَوْمٍ', en: 'founded on taqwā from the first day', note: 'مفعول فيه · زمان' },
          ] },

        { t: 'teach', title: 'إلى — انتهاء الغاية',
          focus: [42, 43, 44, 45, 46, 47, 48, 49],
          points: [
            '**معنى إلى: انتهاء الغاية** — the end point; the mirror of مِن.',
            'Its phrase: **مفعول به** (حَبَّبَ إِلَيْكُمُ الْإِيمَانَ) · **فيه** مكان/زمان · **معه** (وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَى أَمْوَالِكُمْ).',
          ],
          examples: [
            { ar: 'ثُمَّ أَتِمُّوا الصِّيَامَ إِلَى الَّيْلِ', en: 'complete the fast until night', note: 'زمان — end point' },
          ],
          after: 'مِن … إلى together frame a span from its start to its end.' },

        { t: 'teach', title: 'عن — المجاوزة',
          focus: [50, 51, 53, 54, 55, 56, 57, 60],
          points: [
            '**معنى عن: المجاوزة** — moving away/past; the action *issues from* the مجرور and leaves it.',
            'Its phrase: **مفعول به** (يَنْهَوْنَ عَنِ الْمُنْكَرِ) · **فيه** مكان/زمان (عَمَّا قَلِيلٍ) · **له** (عَنْ قَوْلِكَ) · **عوض** (حُجَّ عَنْ أَبِيكَ).',
            '**Trap — عن الاسمية**: عن becomes a **noun** meaning جانب (side) when preceded by مِن: جِئْتُ مِنْ عَنْ يَمِينِهِ.',
          ] },

        { t: 'mcq', q: 'The core meanings of مِن and إلى are, respectively…',
          choices: ['ابتداء الغاية and انتهاء الغاية', 'انتهاء الغاية and ابتداء الغاية', 'التبعيض and الظرفية', 'المجاوزة and الاستعلاء'],
          correct: 0,
          why: 'مِن opens the span, إلى closes it — a mirrored pair. (المجاوزة is عن; الاستعلاء is على.)' },

        { t: 'mcq', q: '﴿أَرَضِيتُمْ بِالْحَيَاةِ الدُّنْيَا مِنَ الْآخِرَةِ﴾ — the مِن-phrase carries which sense?',
          choices: ['العِوَض — the dunyā taken *in exchange for* the ākhirah', 'ابتداء الغاية of place', 'التمييز', 'المفعول له'],
          correct: 0,
          why: 'The Hereafter is what is given up in the trade — عوض/مقابلة, not a spatial starting point.' },

        { t: 'mcq', q: 'What is the core meaning of عن?',
          choices: ['المجاوزة — passing beyond/away from', 'الإلصاق', 'انتهاء الغاية', 'الملك'],
          correct: 0,
          why: 'عن = the action passes *away from* its مجرور: يَنْهَوْنَ عَنِ الْمُنْكَرِ — the forbidding moves them off the wrong.' },

        { t: 'mcq', q: 'جِئْتُ مِنْ عَنْ يَمِينِهِ — what is عن here?',
          choices: ['A noun meaning جانب (side), because a jārr (مِن) precedes it', 'A preposition governing يمينه', 'A redundant particle', 'A verb'],
          correct: 0,
          why: 'A jarr-particle cannot itself be مجرور. Preceded by مِن, عن turns nominal: “from the *side* of his right.”' },

        { t: 'mcq', q: '﴿وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَى أَمْوَالِكُمْ﴾ — the إلى-phrase has the sense of…',
          choices: ['المفعول معه — together *with* your wealth', 'انتهاء الغاية of place literally', 'المفعول له', 'العوض'],
          correct: 0,
          why: '“Do not eat their wealth *along with* yours” — إلى here maps onto the مفعول معه, i.e. مع in force.' },

        { t: 'written',
          prompt: 'Define the core meanings of مِن, إلى and عن, and give one shāhid for each.',
          model: '• مِن: ابتداء الغاية — the starting point: ﴿مِنَ الْمَسْجِدِ الْحَرَامِ﴾. (Also التبعيض and بيان الجنس.)\n• إلى: انتهاء الغاية — the end point: ﴿ثُمَّ أَتِمُّوا الصِّيَامَ إِلَى الَّيْلِ﴾.\n• عن: المجاوزة — passing beyond/away from: ﴿وَيَنْهَوْنَ عَنِ الْمُنْكَرِ﴾.\nمِن … إلى frame a span from start to end; عن implies the action issues from and leaves its مجرور.' },

        { t: 'bank', id: 'm1-bab-2--explain-line--explain-the-following-line-from--1c' },
      ],
    },

    /* ═══ 4. على · اللام · في ═══ */
    {
      id: 'ala-lam-fi',
      title: 'على · اللام · في',
      subtitle: 'الاستعلاء · التخصيص والملك · الظرفية',
      matn: { src: 'DATA_M1_BAB2', from: 61, to: 91, check: 'الْخَامِسُ' },
      steps: [
        { t: 'teach', title: 'على — الاستعلاء',
          focus: [61, 62, 64, 65, 66, 67, 68],
          points: [
            '**معنى على: الاستعلاء** — upon-ness: **literal** (وَعَلَى الْفُلْكِ تُحْمَلُونَ) or **figurative** (فَضَّلْنَا بَعْضَهُمْ عَلَى بَعْضٍ).',
            'Its phrase: **به** (أَنْعَمْتَ عَلَيْهِمْ) · **فيه** مكان/زمان (عَلَى حِينِ غَفْلَةٍ) · **له** · **معه** (عَلَى حُبِّهِ) · **حال** (عَلَى خَوْفٍ).',
            'Within الاستعلاء: **الإلزام** (لَهُ عَلَيَّ أَلْفُ دِرْهَمٍ — obligation *upon* me) and **التمكّن** (أُولَئِكَ عَلَى هُدًى — firmly grounded).',
          ] },

        { t: 'teach', title: 'اللام — three meanings',
          focus: [73, 74, 75, 76, 77, 78, 79],
          points: [
            '**التخصيص** (also called **الاستحقاق**) — between a meaning and an essence: الْحَمْدُ لِلهِ.',
            '**الملك** — between two essences: لَهُ مَا فِي السَّمَاوَاتِ; and **شبه الملك** (النسبة): لَآيَاتٍ لِلْمُؤْمِنِينَ.',
            'Its phrase: **به** (وَوَهَبْنَا لَهُ إِسْحَاقَ) · **فيه** مكان (دَعَانَا لِجَنْبِهِ) / زمان (لِيَوْمِ الْقِيَامَةِ).',
          ] },

        { t: 'teach', title: 'لام التعليل vs لام العاقبة',
          focus: [80, 82],
          points: [
            'As **مفعول له**, mostly **عن قصد الفاعل** (intended purpose) → **لام التعليل / لام كي**: نَزَّلَ الْفُرْقَانَ عَلَى عَبْدِهِ **لِـ**يَكُونَ لِلْعَالَمِينَ نَذِيرًا.',
            'But it may mark an unintended **outcome** → **لام العاقبة / الصيرورة / المآل**: فَالْتَقَطَهُ آلُ فِرْعَوْنَ **لِـ**يَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا.',
            'Related: **لام التبليغ** after a verb of speech — قَالَ **لَهُ** رَبُّهُ أَسْلِمْ.',
          ],
          after: 'The test is the doer’s intent: Pharaoh’s family never *aimed* at picking up an enemy — so that lām is عاقبة, not تعليل.' },

        { t: 'teach', title: 'في — الظرفية',
          focus: [83, 84, 85, 86, 87, 88, 89, 90],
          points: [
            '**معنى في: الظرفية** — containment (حلول الشيء في غيره), of place or time.',
            'Its phrase: **به** (يُسَارِعُونَ فِي الْخَيْرَاتِ) · **فيه** مكان/زمان (شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ) · **له** (لُمْتُنَّنِي فِيهِ) · **معه** (فَادْخُلِي فِي عِبَادِي).',
            'It can also express **المقابلة** (measured against): فَمَا مَتَاعُ الْحَيَاةِ الدُّنْيَا **فِي** الْآخِرَةِ إِلَّا قَلِيلٌ.',
          ] },

        { t: 'mcq', q: '﴿تِلْكَ الرُّسُلُ فَضَّلْنَا بَعْضَهُمْ عَلَى بَعْضٍ﴾ — the استعلاء here is…',
          choices: ['Figurative — superiority of rank, not physically being on top', 'Literal — one messenger stands upon another', 'Not استعلاء at all', 'A redundant على'],
          correct: 0,
          why: 'الاستعلاء covers both physical upon-ness (على الفلك) and figurative elevation — here, precedence in rank.' },

        { t: 'mcq', q: 'In ﴿الْحَمْدُ لِلهِ﴾ the لام expresses…',
          choices: ['التخصيص/الاستحقاق — praise belongs by right to Him', 'الملك between two essences', 'لام العاقبة', 'التعليل'],
          correct: 0,
          why: 'الحمد is a **meaning**, Allah an **essence** — a meaning-to-essence relation is تخصيص (استحقاق). الملك requires two essences, like لَهُ مَا فِي السَّمَاوَاتِ.' },

        { t: 'mcq', q: '﴿فَالْتَقَطَهُ آلُ فِرْعَوْنَ لِيَكُونَ لَهُمْ عَدُوًّا﴾ — which lām?',
          choices: ['لام العاقبة — the outcome was never their intent', 'لام التعليل — they intended to raise an enemy', 'لام التبليغ', 'لام الجحود'],
          correct: 0,
          why: 'The trap is reading purpose into it: no one picks up a baby *in order to* gain an enemy. Unintended result = عاقبة/صيرورة/مآل.' },

        { t: 'mcq', q: 'The core meaning of في is…',
          choices: ['الظرفية — containment in place or time', 'الاستعلاء', 'ابتداء الغاية', 'الإلصاق'],
          correct: 0,
          why: 'في = being inside: ﴿شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ﴾ (time), ﴿فِي الدُّنْيَا حَسَنَةً﴾ (place).' },

        { t: 'mcq', q: '﴿فَمَا مَتَاعُ الْحَيَاةِ الدُّنْيَا فِي الْآخِرَةِ إِلَّا قَلِيلٌ﴾ — the في expresses…',
          choices: ['المقابلة — measured against the Hereafter', 'الظرفية of place literally — the dunyā is inside the ākhirah', 'المفعول معه', 'الآلة'],
          correct: 0,
          why: 'The dunyā’s enjoyment is weighed *in proportion to* the Hereafter — comparison/exchange, a derived sense of في.' },

        { t: 'mcq', q: 'لَهُ عَلَيَّ أَلْفُ دِرْهَمٍ — the على conveys…',
          choices: ['الإلزام — obligation resting upon me', 'التمكّن', 'Literal upon-ness', 'التشبيه'],
          correct: 0,
          why: 'A debt sits *upon* the debtor — الإلزام, one of the two shades inside الاستعلاء (the other, التمكّن: أُولَئِكَ عَلَى هُدًى).' },

        { t: 'written',
          prompt: 'Explain the difference between لام التعليل (لام كي) and لام العاقبة (لام الصيرورة), with a shāhid for each.',
          model: 'Both occur where the لام-phrase has the sense of the مفعول له.\n• لام التعليل/كي: a genuine purpose intended by the doer (عن قصد الفاعل) — ﴿نَزَّلَ الْفُرْقَانَ عَلَى عَبْدِهِ لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا﴾: warning was the intent of the sending.\n• لام العاقبة/الصيرورة/المآل: a result that follows without being intended — ﴿فَالْتَقَطَهُ آلُ فِرْعَوْنَ لِيَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا﴾: they picked him up to adopt, not to gain an enemy; enmity was only the outcome.' },

        { t: 'bank', id: 'm1-bab-2--compare--explain-with-examples-the-differ-1i' },
      ],
    },

    /* ═══ 5. الكاف · حتى ═══ */
    {
      id: 'kaf-hatta',
      title: 'الكاف · حتى',
      subtitle: 'التشبيه · انتهاء الغاية بشرطها',
      matn: { src: 'DATA_M1_BAB2', from: 92, to: 104, check: 'الثَّامِنُ' },
      steps: [
        { t: 'teach', title: 'الكاف — التشبيه',
          focus: [92, 93, 94, 95, 97],
          points: [
            '**معنى الكاف: التشبيه** — likeness (“like, as”).',
            'Its phrase: **المفعول المطلق** (ارْحَمْهُمَا كَمَا رَبَّيَانِي — a mercy *like* their raising) · **المفعول له** (وَاذْكُرُوهُ كَمَا هَدَاكُمْ).',
            '**Its مجرور must be an overt noun (اسم ظاهر)** — never a pronoun.',
          ] },

        { t: 'teach', title: 'حتى — انتهاء الغاية, with a condition',
          focus: [98, 99, 100, 101, 102, 103, 104],
          points: [
            '**معنى حتى: انتهاء الغاية** — same core as إلى.',
            'Its phrase: **فيه** مكان (سِرْنَا حَتَّى مَكَّةَ) / زمان (حَتَّى مَطْلَعِ الْفَجْرِ) · **له** (وَقَاتِلُوهُمْ حَتَّى لَا تَكُونَ فِتْنَةٌ).',
            '**Unlike إلى**, what follows حتى must be the **last part** of what precedes (قُمْتُ اللَّيْلَ حَتَّى آخِرِهِ — not حَتَّى نِصْفِهِ) **or connected to its end** (حَتَّى الصَّبَاحِ). Its مجرور too is overt-noun only.',
          ],
          after: 'It may also colour the phrase with تعظيم (مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءُ) or تحقير (يَرْزُقُ اللهُ حَتَّى الظَّالِمِينَ).' },

        { t: 'mcq', q: 'The core meanings of الكاف and حتى are, respectively…',
          choices: ['التشبيه and انتهاء الغاية', 'التشبيه and ابتداء الغاية', 'الظرفية and انتهاء الغاية', 'الاستعلاء and التشبيه'],
          correct: 0,
          why: 'الكاف likens; حتى — like إلى — marks the end point of a span.' },

        { t: 'mcq', q: 'Which is INVALID, and why? (a) رَأَيْتُ أَسَدًا كَزَيْدٍ (b) رَأَيْتُ أَسَدًا كَهُ',
          choices: ['(b) — the kāf’s مجرور must be an overt noun, not a pronoun', '(a) — the kāf needs a pronoun', 'Both are valid', 'Neither is valid'],
          correct: 0,
          why: 'لا يكون مجرورها إلا اسمًا ظاهرًا — the jarr-kāf refuses pronouns (the same restriction holds for حتى).' },

        { t: 'mcq', q: 'قُمْتُ اللَّيْلَ حَتَّى نِصْفِهِ — acceptable?',
          choices: ['No — after حتى must come the last part of the preceding, or something joined to its end', 'Yes — حتى behaves exactly like إلى', 'Yes — but only in poetry', 'No — because نصفه is a pronoun'],
          correct: 0,
          why: 'This is the حتى/إلى difference: حَتَّى آخِرِهِ ✓ and حَتَّى الصَّبَاحِ ✓, but the *middle* of the night fails the last-part condition. إلى has no such restriction.' },

        { t: 'mcq', q: 'يَرْزُقُ اللهُ حَتَّى الظَّالِمِينَ — beyond end-point, the حتى adds a shade of…',
          choices: ['التحقير — even the (lowly) wrongdoers', 'التعظيم', 'التشبيه', 'الشك'],
          correct: 0,
          why: 'Reaching *down* to the wrongdoers belittles them — تحقير. The mirror case is تعظيم: مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءُ.' },

        { t: 'written',
          prompt: 'حتى and إلى share one core meaning. State it, then explain — with examples — the restriction that separates حتى from إلى.',
          model: 'Both mean انتهاء الغاية (the end point).\nThe restriction: what follows حتى must be the last part of what precedes it — قُمْتُ اللَّيْلَ حَتَّى آخِرِهِ (✓) unlike حَتَّى نِصْفِهِ (✗) — or be connected to its end — قُمْتُ اللَّيْلَ حَتَّى الصَّبَاحِ. إلى carries no such condition. Additionally, the مجرور of حتى must be an overt noun; and حتى can convey تعظيم or تحقير of its مجرور.' },
      ],
    },

    /* ═══ 6. أحرف القسم · مذ ومنذ ═══ */
    {
      id: 'qasam-mudh',
      title: 'أحرف القسم · مُذ ومُنذ',
      subtitle: 'Completing the thirteen',
      matn: { src: 'DATA_M1_BAB2', from: 106, to: 115, check: 'الْعَاشِرُ' },
      steps: [
        { t: 'teach', title: 'The three oath-particles',
          focus: [106, 107, 108, 109],
          points: [
            '**الواو**: overt noun only; the oath-verb is **always dropped** — ﴿وَالْعَصْرِ﴾.',
            '**التاء**: **only لفظ الجلالة** — ﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾; its verb too is never stated.',
            '**الباء** is the **root** of the oath-particles: overt noun *or* pronoun (بِكَ لَأَفْعَلَنَّ), and only with it may the oath-verb appear — ﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾.',
          ],
          after: 'إعراب: the oath-phrase is مفعول به of a **deleted verb** estimated as أُقْسِمُ.' },

        { t: 'teach', title: 'مُذ ومُنذ',
          focus: [111, 112, 113, 114, 115],
          points: [
            'They govern a noun of **time** as a **مفعول فيه**: مَا تَرَكْتُ صَلَاةً مُذْ يَوْمِ الْبُلُوغِ.',
            'Meaning: مجرور **معرفة** → “**since**” (مُنْذُ يَوْمِ الْجُمُعَةِ); **نكرة** → “**for**” (مُنْذُ يَوْمَيْنِ).',
            '**Condition on the verb before them**: a **past** verb, either **negated** or **affirmative-and-extended** — not a momentary act (✗ سَقَطْتُ مُنْذُ طُلُوعِ الشَّمْسِ).',
          ] },

        { t: 'mcq', q: 'Which oath-particle admits ONLY لفظ الجلالة as its مجرور?',
          choices: ['التاء', 'الواو', 'الباء', 'اللام'],
          correct: 0,
          why: 'تالله is the whole territory of the oath-tāʾ. The wāw takes any overt noun; the bāʾ takes overt nouns and pronouns alike.' },

        { t: 'mcq', q: 'With which oath-particle may the verb of swearing (أُقْسِمُ) actually be stated?',
          choices: ['الباء only', 'الواو only', 'التاء only', 'All three'],
          correct: 0,
          why: 'The بaء is the aṣl of the oath-particles — ﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾. With الواو and التاء the verb is never mentioned.' },

        { t: 'mcq', q: 'What is the iʿrāb of وَالْعَصْرِ in ﴿وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ﴾?',
          choices: ['جار ومجرور — مفعول به of a deleted verb, estimated أُقْسِمُ', 'مبتدأ', 'ظرف زمان منصوب', 'معطوف on what precedes'],
          correct: 0,
          why: 'The oath-phrase hangs from a suppressed أُقْسِمُ — its جار+مجرور stands as that verb’s مفعول به.' },

        { t: 'mcq', q: 'مَا رَأَيْتُهُ مُنْذُ يَوْمَيْنِ means “I have not seen him ___ two days.”',
          choices: ['for — indefinite مجرور gives duration', 'since — definite مجرور gives a starting point', 'until', 'except'],
          correct: 0,
          why: 'نكرة (يومين) → “for”; contrast the معرفة case: مُنْذُ يَوْمِ الْجُمُعَةِ = “since Friday”.' },

        { t: 'mcq', q: 'Why is سَقَطْتُ مُنْذُ طُلُوعِ الشَّمْسِ rejected?',
          choices: ['The verb before مذ/منذ must be past AND either negated or extended — a momentary fall is neither', 'منذ cannot take a definite noun', 'سقط is intransitive', 'طلوع is not a time-noun'],
          correct: 0,
          why: 'The condition: ماضٍ منفي (مَا رَأَيْتُهُ مُنْذُ…) or affirmative-extended (نِمْتُ مُنْذُ بَعْدِ الْعِشَاءِ). A one-instant act cannot stretch over the span.' },

        { t: 'written',
          prompt: 'Enumerate the three oath-particles, stating for each: what its مجرور may be, and whether the verb of oath may appear with it.',
          model: '• الواو — مجرورها an overt noun only; the oath-verb is always dropped: ﴿وَالْعَصْرِ﴾.\n• التاء — مجرورها only لفظ الجلالة; the verb never appears: ﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾.\n• الباء — the aṣl: overt noun or pronoun (بِكَ لَأَفْعَلَنَّ); only with it may the verb be stated: ﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾.\nIn every case the oath-phrase is مفعول به of a deleted verb estimated as أُقْسِمُ.' },

        { t: 'bank', id: 'm1-bab-2--enumerate--list-the-thirteen-original-prepo-1s' },
      ],
    },

    /* ═══ 7. الشبيه بالزائد ═══ */
    {
      id: 'shabih',
      title: 'حرف الجر الشبيه بالزائد',
      subtitle: 'رُبَّ · مِن التبعيضية · حاشا',
      matn: { src: 'DATA_M1_BAB2', from: 117, to: 126, check: 'الضَّرْبُ' },
      steps: [
        { t: 'teach', title: 'الضرب الثاني — definition',
          focus: [117, 118, 119],
          points: [
            'It **does give a special meaning** (يفيد معنى خاصًّا) — like the أصلي…',
            '…but its جار+مجرور is **NOT معمول لفعل أو شبه الفعل** — unlike the أصلي, and like the زائد. Hence “resembling the redundant”.',
            'Three members: **رُبَّ · مِن التبعيضية · حاشا**.',
          ] },

        { t: 'teach', title: 'رُبَّ',
          focus: [120, 122, 124],
          points: [
            '**Meaning: التكثير أو التقليل** of its مجرور — and the **قرينة** (context) decides which.',
            'It occurs **only at صدر الكلام** (a vocative particle may precede); its مجرور is an **indefinite overt noun** (or a vague pronoun explained by تمييز: رُبَّهُ رَجُلًا), usually described.',
            '**ما الكافّة** stops its governing and lets it precede a **verb** — ﴿رُبَّمَا يَوَدُّ الَّذِينَ كَفَرُوا﴾; and رُبَّ may itself be **dropped with its work kept**, mostly after الواو: وَلَيْلٍ كَمَوْجِ الْبَحْرِ أَرْخَى سُدُولَهُ.',
          ],
          examples: [
            { ar: 'رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا', en: 'many a desire bequeaths long grief', note: 'تكثير by the قرينة' },
          ] },

        { t: 'teach', title: 'مِن التبعيضية · حاشا',
          focus: [125, 126],
          points: [
            '**مِن التبعيضية** as شبيه بالزائد: ﴿وَلَقَدْ جَاءَكَ مِنْ نَبَإِ الْمُرْسَلِينَ﴾ — *some of* the tidings.',
            '**حاشا** for **الاستثناء**: هَلَكَ النَّاسُ حَاشَا الْعَالِمِ — “…except the scholar.”',
          ] },

        { t: 'mcq', q: 'What separates the شبيه بالزائد from the حرف الجر الأصلي?',
          choices: ['Its جار+مجرور is not معمول of a verb or شبه الفعل', 'It gives no meaning at all', 'It governs two nouns', 'It only occurs in the Qurʾān'],
          correct: 0,
          why: 'Both give a special meaning; the شبيه loses only the taʿalluq. (Giving *no* meaning except emphasis is the زائد — the other trap.)' },

        { t: 'mcq', q: 'Where may رُبَّ occur in the sentence?',
          choices: ['Only at صدر الكلام — though a vocative particle may precede it', 'Anywhere', 'Only at the end', 'Only after negation'],
          correct: 0,
          why: 'رُبَّ never occurs except at the start of speech: يَا رُبَّ كَاسِيَاتٍ فِي الدُّنْيَا عَارِيَاتٍ فِي الْآخِرَةِ — only يا precedes.' },

        { t: 'mcq', q: '﴿رُبَّمَا يَوَدُّ الَّذِينَ كَفَرُوا لَوْ كَانُوا مُسْلِمِينَ﴾ — how can رُبَّ sit before a VERB?',
          choices: ['ما الكافّة blocks its governing and admits the verb', 'رُبَّ governs verbs directly', 'يَوَدُّ is really a noun', 'The آية is an exception with no rule'],
          correct: 0,
          why: 'The كافّة-mā “restrains” رُبَّ from jarr, freeing it to precede a verbal clause — the same ما that neutralises other operators.' },

        { t: 'mcq', q: 'وَلَيْلٍ كَمَوْجِ الْبَحْرِ أَرْخَى سُدُولَهُ — why is لَيْلٍ majrūr with no visible jārr?',
          choices: ['رُبَّ is deleted after the واو but its work remains', 'The واو itself is a preposition of attachment', 'It is a مضاف إليه', 'Poetic license with no analysis'],
          correct: 0,
          why: 'حذف رُبَّ with its ʿamal kept is frequent after الواو (rare after الفاء) — the wāw is called واو رُبَّ.' },

        { t: 'mcq', q: 'هَلَكَ النَّاسُ حَاشَا الْعَالِمِ — حاشا here serves…',
          choices: ['الاستثناء — excepting the scholar from the perishing', 'التشبيه', 'التكثير', 'القسم'],
          correct: 0,
          why: 'حاشا is the exceptive member of the three شبيه بالزائد particles (رُبَّ، مِن التبعيضية، حاشا).' },

        { t: 'written',
          prompt: 'Define حرف الجر الشبيه بالزائد, name its three members, and state the two rules that constrain رُبَّ (its position and its مجرور).',
          model: 'الشبيه بالزائد gives a special meaning (يفيد معنى خاصًّا) but its جار+مجرور is not معمول of a verb or شبه الفعل.\nMembers: رُبَّ · مِن التبعيضية (﴿وَلَقَدْ جَاءَكَ مِنْ نَبَإِ الْمُرْسَلِينَ﴾) · حاشا للاستثناء (هَلَكَ النَّاسُ حَاشَا الْعَالِمِ).\nرُبَّ: (1) occurs only at صدر الكلام (only a vocative particle may precede); (2) its مجرور is an indefinite overt noun — or a vague pronoun explained by a تمييز (رُبَّهُ رَجُلًا) — its meaning تكثير or تقليل by the قرينة.' },

        { t: 'bank', id: 'm1-bab-2--compare--explain-with-examples-the-differ-1k' },
        { t: 'bank', id: 'm1-bab-2--explain-statement--explain-the-following-statement--1m' },
        { t: 'bank', id: 'm1-bab-2--classify-tarkib--classify-the-word-which-category-1u' },
      ],
    },

    /* ═══ 8. الزائد ═══ */
    {
      id: 'zaida',
      title: 'حرف الجر الزائد',
      subtitle: 'الباء · مِن · اللام · الكاف الزوائد',
      matn: { src: 'DATA_M1_BAB2', from: 127, to: 155, check: 'الضَّرْبُ' },
      steps: [
        { t: 'teach', title: 'الضرب الثالث — definition · الباء الزائدة قياسًا',
          focus: [127, 128, 129, 130, 131, 132, 133],
          points: [
            'The **زائد** gives **no meaning except التأكيد** (emphasis) — also called **حرف صلة** — and its جار+مجرور is not معمول لفعل. Four members.',
            '**الباء الزائدة** occurs **قياسًا** in the **predicate of negation**: with **ليس** — ﴿لَيْسَ بِظَلَّامٍ لِلْعَبِيدِ﴾ — and with **ما** — ﴿وَمَا رَبُّكَ بِظَلَّامٍ لِلْعَبِيدِ﴾.',
          ] },

        { t: 'teach', title: 'الباء الزائدة سماعًا',
          focus: [135, 136, 137, 138, 139, 140, 141, 142],
          points: [
            'In خبر الاستفهام بهل (هَلْ زَيْدٌ بِقَائِمٍ؟) · التوكيد المعنوي بنفس (نَظَّفَ الْأَمِيرُ الْمَسْجِدَ بِنَفْسِهِ) · فاعل **أَفْعِلْ بِهِ** (﴿أَسْمِعْ بِهِمْ وَأَبْصِرْ﴾).',
            'On the مبتدأ after **إذا الفجائية** (فَإِذَا بِابْنِهِ يُصَلِّي) and with **حَسْب** — mubtadaʾ (بِحَسْبِكَ أَنْ تَصُومَ) or khabar (حَسْبُكَ بِزَيْدٍ).',
            'On the **فاعل of كَفَى** when كفى = حَسُبَ (suffice): ﴿كَفَى بِاللهِ شَهِيدًا﴾ — **unlike** كفى = وَقَى (protect): ﴿وَكَفَى اللهُ الْمُؤْمِنِينَ الْقِتَالَ﴾, no باء.',
          ] },

        { t: 'teach', title: 'مِن الزائدة',
          focus: [143, 144, 145, 146, 148],
          points: [
            'On the **تمييز of كم الخبرية**: ﴿كَمْ آتَيْنَاهُمْ مِنْ آيَةٍ بَيِّنَةٍ﴾.',
            'In **كلام غير موجب** — negation (﴿مَا جَاءَنَا مِنْ بَشِيرٍ﴾), an interrogative meaning negation (﴿هَلْ مِنْ خَالِقٍ غَيْرُ اللهِ﴾), or an interrogation with هل (﴿هَلْ مِنْ مَزِيدٍ﴾).',
            'Its effect: it **strengthens the generality** the indefinite already has under negation — “not *any* … at all”.',
          ] },

        { t: 'teach', title: 'اللام الزائدة · الكاف الزائدة',
          focus: [149, 150, 152, 153, 154, 155],
          points: [
            '**لام الجحود** — on the خبر of negated كان; its verb is منصوب by a deleted أنْ: ﴿فَمَا كَانَ اللهُ لِيَظْلِمَهُمْ﴾.',
            '**لام التبيين** — on the فاعل (هَيْتَ لَكَ); **لام التقوية** — on a fronted معمول (﴿إِنْ كُنْتُمْ لِلرُّؤْيَا تَعْبُرُونَ﴾) or the معمول of شبه الفعل (﴿فَعَّالٌ لِمَا يُرِيدُ﴾) — it strengthens a weak operator.',
            '**الكاف الزائدة**: ﴿لَيْسَ كَمِثْلِهِ شَيْءٌ﴾ — read the كاف as meaningful and “like the *like* of Him” would grant Him a like; as زائدة the sense is simply “nothing is like Him.”',
          ] },

        { t: 'mcq', q: 'What does the حرف الجر الزائد contribute?',
          choices: ['Only emphasis (التأكيد) — no special meaning', 'A special meaning plus taʿalluq', 'A special meaning without taʿalluq', 'Nothing whatsoever'],
          correct: 0,
          why: 'لا يفيد معنى إلا التأكيد — hence its other name حرف صلة. Special-meaning-without-taʿalluq is the **شبيه بالزائد** (the trap).' },

        { t: 'mcq', q: '﴿وَمَا رَبُّكَ بِظَلَّامٍ لِلْعَبِيدِ﴾ — the باء on ظلّام is…',
          choices: ['Redundant — qiyāsan in the predicate of negation with ما', 'The باء of الإلصاق governing an object', 'باء القسم', 'باء التعدية'],
          correct: 0,
          why: 'خبر النفي with ليس or ما takes the زائدة-bāʾ regularly (قياسًا): ظلّام is really the khabar, marked genitive only in form.' },

        { t: 'mcq', q: '﴿كَفَى بِاللهِ شَهِيدًا﴾ — why the باء on الله?',
          choices: ['A redundant باء on the فاعل of كفى when كفى means حَسُبَ (suffice)', 'الله is a true مجرور complement of كفى', 'It is باء القسم — “by Allah”', 'كفى always demands a باء'],
          correct: 0,
          why: 'الله is the **فاعل**. The سماعًا-bāʾ enters only when كفى = suffice; when كفى = وَقَى (protect) there is no باء: ﴿وَكَفَى اللهُ الْمُؤْمِنِينَ الْقِتَالَ﴾ — and القسم reading is the other trap.' },

        { t: 'mcq', q: '﴿هَلْ مِنْ خَالِقٍ غَيْرُ اللهِ﴾ — the مِن is…',
          choices: ['Redundant — the interrogative has the force of negation, and مِن stresses “any at all”', 'مِن of ابتداء الغاية', 'مِن التبعيضية', 'A noun meaning جانب'],
          correct: 0,
          why: 'Redundant مِن lives in **non-affirmative** speech (negation, negative-force questions, هل). It reinforces the generality: “is there ANY creator…?”' },

        { t: 'mcq', q: '﴿فَمَا كَانَ اللهُ لِيَظْلِمَهُمْ﴾ — the لام is called…',
          choices: ['لام الجحود — on the khabar of negated كان, with a منصوب verb after it', 'لام التعليل', 'لام الملك', 'لام التبليغ'],
          correct: 0,
          why: 'The jaḥd (denial) lām follows فما كان / لم يكن; the verb after it is naṣb by a **deleted أنْ**. It looks like لام التعليل — that is the trap.' },

        { t: 'mcq', q: 'Why must the كاف in ﴿لَيْسَ كَمِثْلِهِ شَيْءٌ﴾ be زائدة?',
          choices: ['A meaningful كاف would yield “like the like of Him” — implying He has a like', 'The كاف never carries meaning', 'ليس cannot precede a jarr-particle', 'Because مثل is indeclinable'],
          correct: 0,
          why: 'Taken as تشبيه the آية would affirm a “like” whose like is denied — contradiction. As زائدة it simply reinforces: “there is nothing like Him.”' },

        { t: 'written',
          prompt: 'Define حرف الجر الزائد and list its four members, giving for each one position it occupies with a shāhid.',
          model: 'حرف الجر الزائد gives no meaning except التأكيد (a حرف صلة), and its جار+مجرور is not معمول of a verb or شبه الفعل. Four members:\n• الباء — qiyāsan in خبر النفي: ﴿وَمَا رَبُّكَ بِظَلَّامٍ لِلْعَبِيدِ﴾ (also samāʿan with هل، بنفس، أفعل به، إذا الفجائية، حسب، كفى).\n• مِن — on تمييز كم الخبرية and in non-affirmative speech: ﴿مَا جَاءَنَا مِنْ بَشِيرٍ﴾.\n• اللام — لام الجحود (﴿فَمَا كَانَ اللهُ لِيَظْلِمَهُمْ﴾), التبيين (هَيْتَ لَكَ), التقوية (﴿فَعَّالٌ لِمَا يُرِيدُ﴾).\n• الكاف — ﴿لَيْسَ كَمِثْلِهِ شَيْءٌ﴾.' },

        { t: 'bank', id: 'm1-bab-2--explain-statement--explain-the-following-statement--1o' },
        { t: 'bank', id: 'm1-bab-2--define-types-examples--what-is-the-redundant-prepositio-1q' },
        { t: 'bank', id: 'm1-bab-2--classify-tarkib--classify-the-particle-in-this-se-1w' },
      ],
    },

    /* ═══ 9. المختلف فيها · حذف حرف الجر ═══ */
    {
      id: 'khilaf-hadhf',
      title: 'Disputed particles · deleting the jārr',
      subtitle: 'ما هو حرف جر عند البعض · نزع الخافض',
      matn: { src: 'DATA_M1_BAB2', from: 157, to: 158, check: 'الْأَوَّلُ' },
      steps: [
        { t: 'teach', title: 'Particles of jarr — for some',
          focus: [157],
          points: [
            '**لَعَلَّ** governs jarr in the dialect of **ʿUqayl**: لَعَلَّ اللهِ فَضَّلَكُمْ عَلَيْنَا.',
            '**خَلا وعَدا** for exception — verbs to most grammarians, jarr-particles to many: هَلَكَ النَّاسُ خَلَا/عَدَا زَيْدٍ.',
            '**مَتى** = مِن in the dialect of **Hudhayl**; and **كَي** = لِمَ (“why?”): كَيْمَهْ عَصَيْتَ اللهَ؟',
          ],
          after: 'Dialectal and marginal — but recognising them saves you when a text springs an unusual jārr.' },

        { t: 'teach', title: 'حذف حرف الجر',
          focus: [158],
          points: [
            '**قياسًا** before **أنْ** and **أنَّ**: ﴿يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ﴾ — originally **بِأَنْ**; **سماعًا** elsewhere: ﴿إِنَّ عَادًا كَفَرُوا رَبَّهُمْ﴾ — originally بِرَبِّهِمْ.',
            'The noun left behind becomes **منصوبًا بِنَزْعِ الْخَافِضِ** — accusative because its genitive-operator was stripped away.',
            '**التضمين**: a verb is made to carry another verb’s meaning so the jārr fits — ﴿وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَى أَمْوَالِكُمْ﴾ ≈ لَا تَأْكُلُوهَا وَلَا **تَضُمُّوهَا** إِلَى أَمْوَالِكُمْ.',
          ] },

        { t: 'mcq', q: 'لَعَلَّ اللهِ فَضَّلَكُمْ عَلَيْنَا — how is اللهِ majrūr after لعلّ?',
          choices: ['In the dialect of ʿUqayl, لعلّ is itself a jarr-particle', 'A hidden باء governs it', 'It is a مضاف إليه', 'The jarr is a scribal error'],
          correct: 0,
          why: 'For ʿUqayl لعلّ joins the jarr-particles — one of the المختلف فيها. In the standard language لعلّ is a نصب-operator on the mubtadaʾ.' },

        { t: 'mcq', q: '﴿يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ﴾ — what happened before أَنْ?',
          choices: ['A jārr (بِـ) was deleted qiyāsan — the origin is بِأَنْ تُؤَدُّوا', 'Nothing — أمر never takes a preposition', 'أنْ replaced the preposition', 'The verb تؤدوا absorbed the jarr'],
          correct: 0,
          why: 'Deletion of the jārr is **regular (قياسًا)** before أنْ and أنَّ; elsewhere it is heard-only (سماعًا), like ﴿كَفَرُوا رَبَّهُمْ﴾ = بِرَبِّهِمْ.' },

        { t: 'mcq', q: 'After the jārr is deleted, the noun it governed is termed…',
          choices: ['منصوب بنزع الخافض', 'مجرور بحرف مقدَّر forever', 'مرفوع بالابتداء', 'مبني على الفتح'],
          correct: 0,
          why: 'With the khāfiḍ stripped (نزع), the noun shifts to naṣb — the deletion is also called اتّساعًا.' },

        { t: 'mcq', q: '﴿وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَى أَمْوَالِكُمْ﴾ — how does إلى fit with أكل?',
          choices: ['التضمين — أكل is made to carry the meaning of ضمّ (join), whose jārr is إلى', 'إلى here means مِن', 'It is a كاف زائدة', 'أكل always takes إلى'],
          correct: 0,
          why: 'A ẓarf laghw may hang from a *different*, deleted verb: “do not eat them, **joining them** to your wealth” — the verb is “impregnated” (ضُمِّنَ) with ضمّ’s meaning.' },

        { t: 'written',
          prompt: 'When may حرف الجر be deleted قياسًا, and what becomes of its noun? Illustrate with ﴿يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ﴾.',
          model: 'Deletion is regular (قياسًا) before أنْ and أنَّ — ﴿يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ﴾ is originally يأمركم بِأَنْ تؤدوا؛ cf. ﴿وَاشْهَدُوا بِأَنَّا مُسْلِمُونَ﴾ where the باء is stated. Elsewhere it is سماعًا: ﴿إِنَّ عَادًا كَفَرُوا رَبَّهُمْ﴾ = بِرَبِّهِمْ.\nThe noun left behind is no longer kept genitive: it is منصوب بنزع الخافض — accusative because the genitive-operator was removed (the deletion is also called اتّساعًا).' },

        { t: 'bank', id: 'm1-bab-2--explain-line--explain-this-line-what-situation-1e' },
      ],
    },
  ],
});
