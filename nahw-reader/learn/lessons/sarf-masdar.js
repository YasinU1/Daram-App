/* ── Daram Learn — Shadhā al-ʿArf · المصدر (Worksheets 19–20) ──
   The trilateral maṣdar (samāʿī, with qiyās guidelines by bāb & meaning)
   and the non-trilateral maṣdar (fully qiyāsī, six rules).
   Authored from books/shadha-arf/wk19, wk20.                                  */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'sarf-masdar',
  titleAr: 'الْمَصْدَرُ الثُّلَاثِيُّ وَغَيْرُ الثُّلَاثِيِّ',
  titleEn: 'The Noun II: the Maṣdar',
  pages: 'Wk 19–20',
  sections: [

    /* ═══ 1. Trilateral maṣdar — core rules ═══ */
    {
      id: 'masdar-3-core',
      title: 'The trilateral maṣdar: the core grid',
      subtitle: 'فَعْل للمتعدي · فَعَل لفَعِلَ اللازم · فُعُول لفَعَلَ اللازم',
      matn: { src: 'DATA_WK19', from: 1, to: 12, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Samāʿī — but with guidelines',
          focus: [3, 4, 5, 6, 7, 8, 9],
          points: [
            'Trilateral maṣādir are **سماعية** — yet qiyās-guidelines exist, keyed to the past\'s wazn AND its (in)transitivity.',
            'The grid: فَعَلَ/فَعِلَ **transitive** → فَعْل؛ فَعَلَ lāzim → فُعُول؛ فَعِلَ lāzim → فَعَل؛ فَعُلَ (always lāzim) → فُعُولة/فَعَالة.',
          ] },

        { t: 'teach', title: 'The transitive rule & the ḥirfah exception',
          focus: [10, 11],
          points: [
            'Both transitive pasts share **فَعْل**: ضَرَبَ ضَرْبًا، رَدَّ رَدًّا، فَهِمَ فَهْمًا، أَمِنَ أَمْنًا.',
            'Unless denoting a **craft**: then **فِعَالة** — خِيَاطَة، حِيَاكَة، تِجَارَة.',
          ] },

        { t: 'teach', title: 'فَعِلَ lāzim',
          focus: [12],
          body: 'Its qiyās: **فَعَل** with two fatḥahs — فَرِحَ فَرَحًا، جَوِيَ جَوًى، شَلَّ شَلَلًا.' },

        { t: 'mcq', q: 'The maṣdar of a TRANSITIVE فَعَلَ or فَعِلَ defaults to…',
          choices: ['فَعْل — ضَرْب، فَهْم', 'فُعُول', 'فَعَل', 'فِعَالة'],
          correct: 0,
          why: 'فَقِيَاسُ مَصْدَرِهِمَا فَعْلٌ — the sukūned middle: ḍarban, fahman, amnan.' },

        { t: 'mcq', q: 'خِيَاطَة breaks the faʿl rule because خَاطَ denotes…',
          choices: ['a craft (حرفة) — qiyās فِعَالة', 'a colour', 'a sound', 'a disease'],
          correct: 0,
          why: 'إِلَّا إِنْ دَلَّ عَلَى حِرْفَةٍ فَقِيَاسُهُ فِعَالَةٌ — tailoring, weaving, trading.' },

        { t: 'mcq', q: 'فَرِحَ (lāzim) gives which maṣdar by qiyās?',
          choices: ['فَرَحًا — the faʿal pattern', 'فَرْحًا', 'فُرُوحًا', 'فِرَاحَة'],
          correct: 0,
          why: 'faʿila lāzim → faʿal: faraḥan, jawan, shalalan.' },

        { t: 'mcq', q: 'Are trilateral maṣādir ultimately qiyāsī or samāʿī?',
          choices: ['Samāʿī — the patterns are only approximating guidelines', 'Fully qiyāsī', 'Qiyāsī for lāzim only', 'Neither'],
          correct: 0,
          why: 'مَصَادِرُ الْأَفْعَالِ الثُّلَاثِيَّةِ سَمَاعِيَّةٌ — hence the closing samāʿī lists (طَلَبًا، كِتَابًا، كَرَمًا…).' },
      ],
    },

    /* ═══ 2. Meaning-keyed patterns for faʿila lāzim ═══ */
    {
      id: 'masdar-3-faila',
      title: 'فَعِلَ اللازم: meaning overrides',
      subtitle: 'ولاية · حُمرة · قُدوم',
      matn: { src: 'DATA_WK19', from: 13, to: 15, check: 'إِلَّا' },
      steps: [
        { t: 'teach', title: 'Three overrides',
          focus: [13, 14, 15],
          points: [
            '**Craft/office** → فِعَالة: وَلِيَ عَلَيْهِمْ وِلَايَةً.',
            '**Colour** → فُعْلة: حَوِيَ حُوَّةً، حَمِرَ حُمْرَةً.',
            '**Physical act with a fāʿil-form descriptive** → فُعُول: قَدِمَ قُدُومًا، صَعِدَ صُعُودًا، أَزَفَ أُزُوفًا.',
          ] },

        { t: 'mcq', q: 'حُمْرَة follows which meaning-rule?',
          choices: ['Colour → فُعْلة', 'Craft → فِعَالة', 'Sound → فُعَال', 'Disease → فُعَال'],
          correct: 0,
          why: 'أَوْ دَلَّ عَلَى لَوْنٍ فَقِيَاسُهُ فُعْلَةٌ — like ḥuwwah.' },

        { t: 'mcq', q: 'قَدِمَ قُدُومًا takes fuʿūl because…',
          choices: ['it is ʿilāj (physical act) with its descriptive on فَاعِل (قادِم)', 'it denotes a colour', 'it is transitive', 'irregular'],
          correct: 0,
          why: 'أَوْ كَانَ عِلَاجًا وَوَصْفُهُ عَلَى فَاعِلٍ فَقِيَاسُهُ الْفُعُولُ — ṣaʿida ṣuʿūdan too.' },

        { t: 'mcq', q: 'وِلَايَة from وَلِيَ shows the pattern for…',
          choices: ['craft or office (حرفة أو ولاية)', 'colour', 'contest', 'refusal'],
          correct: 0,
          why: 'faʿila denoting an office → fiʿālah with kasrah.' },
      ],
    },

    /* ═══ 3. faʿala lāzim — the seven meanings ═══ */
    {
      id: 'masdar-3-faala',
      title: 'فَعَلَ اللازم: default and seven meaning-patterns',
      subtitle: 'فُعُول — إلا الامتناع والتقلب والداء والسير والصوت والحرفة',
      matn: { src: 'DATA_WK19', from: 16, to: 31, check: 'وَأَمَّا' },
      steps: [
        { t: 'teach', title: 'The default — فُعُول',
          focus: [16, 18, 19],
          points: [
            'قَعَدَ قُعُودًا، جَلَسَ جُلُوسًا، نَهَضَ نُهُوضًا — **unless the ʿayn is weak**: then فَعْل (سَيْر)، فَعَال (قِيَام)، or فِعَالة (نِيَاحَة).',
          ] },

        { t: 'teach', title: 'Meaning overrides',
          focus: [20, 21, 22, 23, 24, 25],
          points: [
            '**Refusal** → فِعَال: إِبَاء، نِفَار، إِبَاق · **agitation** → فَعَلَان: جَوَلَان، غَلَيَان.',
            '**Disease** → فُعَال: مُشَاء · **manner of travel** → فَعِيل: رَحِيل، ذَمِيل · **sound** → فُعَال/فَعِيل: صُرَاخ، عُوَاء؛ صَهِيل، نَهِيق، زَئِير.',
            '**Craft/office** → فِعَالة: تِجَارَة، عِرَافَة، سِفَارَة.',
          ] },

        { t: 'teach', title: 'فَعُلَ — and the samāʿī reminder',
          focus: [26, 27, 28, 29, 30, 31],
          points: [
            'فَعُلَ → **فُعُولة** (صُعُوبَة، عُذُوبَة) or **فَعَالة** (بَلَاغَة، فَصَاحَة، صَرَاحَة).',
            'Whatever contradicts the above is **سماعي، يُحفظ ولا يُقاس عليه** — the three boxed lists: طَلَبًا، نَبَاتًا، كِتَابًا، شُكْرًا، غُفْرَانًا…؛ لَعِبًا، قُوَّةً، رَحْمَةً…؛ كَرَمًا، عِظَمًا، مَجْدًا، جَمَالًا.',
          ] },

        { t: 'mcq', q: 'غَلَيَان ("boiling") is on فَعَلَان because the verb denotes…',
          choices: ['agitation/turmoil (تقلّب)', 'a sound', 'a disease', 'refusal'],
          correct: 0,
          why: 'أَوْ عَلَى تَقَلُّبٍ فَقِيَاسُ مَصْدَرِهِ فَعَلَانٌ — like جَوَلَان.' },

        { t: 'mcq', q: 'صَهِيل، نَهِيق، زَئِير share which meaning-pattern?',
          choices: ['Sound → فَعِيل (alongside فُعَال like صُرَاخ)', 'Travel → فَعِيل only', 'Disease', 'Craft'],
          correct: 0,
          why: 'أَوْ عَلَى صَوْتٍ فَقِيَاسُهُ الْفُعَالُ وَالْفَعِيلُ — animal cries take both shapes.' },

        { t: 'mcq', q: 'إِبَاء from أَبَى follows…',
          choices: ['refusal → فِعَال', 'sound → فُعَال', 'the default فُعُول', 'craft → فِعَالة'],
          correct: 0,
          why: 'مَا يَدُلُّ عَلَى امْتِنَاعٍ فَقِيَاسُهُ فِعَالٌ — nifār, jamāʿ, ibāq.' },

        { t: 'mcq', q: 'The maṣdar of بَلُغَ is…',
          choices: ['بَلَاغَة — faʿula takes فَعَالة (or فُعُولة)', 'بَلْغ', 'بُلُوغ', 'بِلَاغ'],
          correct: 0,
          why: 'faʿula → fuʿūlah/faʿālah: ṣuʿūbah, ʿudhūbah; balāghah, faṣāḥah.' },

        { t: 'mcq', q: 'قِيَام instead of قُوُوم happens because…',
          choices: ['a weak ʿayn blocks fuʿūl — the verb takes فَعْل/فَعَال/فِعَالة instead', 'qāma is transitive', 'it denotes a craft', 'no reason'],
          correct: 0,
          why: 'مَا لَمْ تَعْتَلَّ عَيْنُهُ وَإِلَّا فَيَكُونُ عَلَى فَعْلٍ… أَوْ فَعَالٍ كَقِيَامٍ.' },

        { t: 'written',
          prompt: 'Give the qiyās maṣdar pattern for each: (a) transitive فَعَلَ, (b) lāzim فَعَلَ, (c) lāzim فَعِلَ, (d) فَعُلَ — then name any three meaning-overrides with their patterns.',
          model: '(a) فَعْل — ضَرْبًا. (b) فُعُول — قُعُودًا. (c) فَعَل — فَرَحًا. (d) فُعُولة/فَعَالة — صُعُوبةً، بَلَاغةً.\nOverrides (any three): حرفة/ولاية → فِعَالة (تِجَارة، وِلَاية) · لون → فُعْلة (حُمْرة) · امتناع → فِعَال (إِبَاء) · تقلّب → فَعَلَان (غَلَيَان) · داء → فُعَال (مُشَاء) · سير → فَعِيل (رَحِيل) · صوت → فُعَال/فَعِيل (صُرَاخ، صَهِيل).' },
      ],
    },

    /* ═══ 4. Non-trilateral: faʿʿala & afʿala ═══ */
    {
      id: 'masdar-4-1',
      title: 'Non-trilateral I: فَعَّلَ and أَفْعَلَ',
      subtitle: 'تفعيل وتفعلة · إفعال وإقامة — واسم المصدر',
      matn: { src: 'DATA_WK20', from: 1, to: 18, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Every non-trilateral has a qiyāsī maṣdar',
          focus: [1, 2, 3, 4, 5, 6],
          points: [
            'The four grids map it all: فَعْلَلَة/فِعْلَال؛ إِفْعَال؛ تَفْعِيل/تَفْعِلَة؛ مُفَاعَلَة/فِعَال؛ تَفَعُّل، تَفَعْلُل، تَفَاعُل؛ انْفِعَال، افْتِعَال، افْعِلَال؛ اسْتِفْعَال، افْعِيعَال، افْعِوَّال، افْعِيلَال.',
            'Anything off these patterns is **سماعي**.',
          ] },

        { t: 'teach', title: 'Rule 1 — فَعَّلَ',
          focus: [8, 9, 10, 11],
          points: [
            'Sound lām → **التفعيل**: طَهَّرَ تَطْهِيرًا، يَسَّرَ تَيْسِيرًا.',
            'Weak lām → **تَفْعِلَة** (the yāʾ dropped, a tāʾ compensating): زَكَّى تَزْكِيَةً، رَبَّى تَرْبِيَةً. Rare in sound verbs: تَجْرِبَة، تَذْكِرَة، تَكْمِلَة. Hamzah-lām may follow suit: تَبْرِئَة (qiyās تَبْرِيئًا).',
          ] },

        { t: 'teach', title: 'Rule 2 — أَفْعَلَ',
          focus: [12, 13, 14, 15, 16, 18],
          points: [
            'Sound ʿayn → **الإفعال**: إِكْرَام، إِحْسَان.',
            'Weak ʿayn → vowel shifts to the fāʾ, alif appears, second alif dropped for the two sukūns, **tāʾ compensates**: أَقَامَ إِقَامَةً، أَنَابَ إِنَابَةً. The tāʾ may drop in iḍāfah (Ibn Mālik): ﴿وَإِقَامِ الصَّلَاةِ﴾.',
            'It may come on **فَعَال** — أَنْبَتَ نَبَاتًا، أَعْطَى عَطَاءً — then called **اسم مصدر** (letters lost, not compensated).',
          ] },

        { t: 'mcq', q: 'Why تَزْكِيَة and not تَزْكِيًّا from زَكَّى?',
          choices: ['A weak-lām faʿʿala takes تَفْعِلَة — the tafʿīl-yāʾ drops, a tāʾ compensates', 'zakka is trilateral', 'It is samāʿī', 'The zāy blocks the yāʾ'],
          correct: 0,
          why: 'بِحَذْفِ يَاءِ التَّفْعِيلِ وَتَعْوِيضِهَا بِتَاءٍ فِي الْآخِرِ — like تَرْبِيَة.' },

        { t: 'mcq', q: 'تَجْرِبَة from the SOUND جَرَّبَ is…',
          choices: ['a rare tafʿila from a sound verb (نَدَرَ)', 'the standard qiyās', 'an ism maṣdar', 'a plural'],
          correct: 0,
          why: 'The qiyās would be تجريب; tajribah joins تذكرة، تبصرة، تكملة، تفرقة as heard rarities.' },

        { t: 'mcq', q: 'Walk the derivation إِقَامَة from أَقَامَ:',
          choices: ['ʿayn\'s vowel → fāʾ; ʿayn → alif; second alif dropped (two sukūns); tāʾ compensates', 'the mīm doubled', 'the hamzah became tāʾ', 'nothing — it is irregular'],
          correct: 0,
          why: 'iqwām → iqām + compensating tāʾ = iqāmah. Same for إنابة، and استقامة mirrors it (rule 3).' },

        { t: 'mcq', q: '﴿وَإِقَامِ الصَّلَاةِ﴾ lacks the tāʾ because…',
          choices: ['iḍāfah permits dropping it (Ibn Mālik\'s choice)', 'scribal error', 'it is a different word', 'the tāʾ was never there'],
          correct: 0,
          why: 'وَقَدْ تُحْذَفُ التَّاءُ إِذَا كَانَ مُضَافًا — the construct with الصلاة licenses it.' },

        { t: 'mcq', q: 'عَطَاء from أَعْطَى is technically called…',
          choices: ['اسم مصدر — letters dropped without compensation', 'the qiyāsī maṣdar', 'a ṣifah', 'a jāmid noun'],
          correct: 0,
          why: 'The qiyās is إعطاء; ʿaṭāʾ (and نَبَات from أنبت) points at the meaning with fewer letters — ism maṣdar.' },
      ],
    },

    /* ═══ 5. Non-trilateral: rules 3–4 ═══ */
    {
      id: 'masdar-4-2',
      title: 'Non-trilateral II: hamzat waṣl & tāʾ-initial verbs',
      subtitle: 'انطلاق واستغفار — تدحرُج وتوانيًا',
      matn: { src: 'DATA_WK20', from: 19, to: 24, check: '٣' },
      steps: [
        { t: 'teach', title: 'Rule 3 — begins with hamzat waṣl',
          focus: [20, 21, 22],
          points: [
            '**Kasrah on the third letter + alif before the last**: انْطِلَاق، اقْتِدَار، اصْطِفَاء، اسْتِغْفَار.',
            'Excluded: اطَّايَرَ/اطَّيَّرَ — their hamzah is non-qiyāsī (assimilated tāʾ), so maṣdars are التَّفَاعُل والتَّفَعُّل.',
            'اسْتَفْعَلَ weak-ʿayn behaves like afʿala: اسْتَقَامَ اسْتِقَامَةً، اسْتَعَاذَ اسْتِعَاذَةً.',
          ] },

        { t: 'teach', title: 'Rule 4 — begins with added tāʾ',
          focus: [24],
          points: [
            '**Ḍammah on the fourth letter**: تَدَحْرُج، تَشَيْطُن، تَجَوْرُب (and تَعَلُّم، تَشَاوُر by the same rule).',
            'Yāʾ lām → kasrah instead, to suit the yāʾ: تَوَانِيًا، تَغَالِيًا.',
          ] },

        { t: 'mcq', q: 'The maṣdar of اسْتَغْفَرَ is formed by…',
          choices: ['kasrah on the 3rd letter + alif before the last: اسْتِغْفَار', 'ḍammah on the 4th', 'prefixing tāʾ', 'doubling the ʿayn'],
          correct: 0,
          why: 'أَنْ يُكْسَرَ ثَالِثُ حَرْفٍ مِنْهُ وَيُزَادَ قَبْلَ آخِرِهِ أَلِفٌ — like انطلاق واقتدار.' },

        { t: 'mcq', q: 'Why doesn\'t اطَّيَّرَ take the rule-3 treatment?',
          choices: ['Its initial hamzah is not qiyāsī — it covers an assimilated tāʾ (تَطَيَّرَ) — so the maṣdar is التَّفَعُّل', 'It is trilateral', 'It has no maṣdar', 'The ṭāʾ blocks kasrah'],
          correct: 0,
          why: 'لِعَدَمِ قِيَاسِيَّةِ الْهَمْزَةِ — the true pattern is tafaʿʿala, so tafaʿʿul.' },

        { t: 'mcq', q: 'تَوَانَى gives تَوَانِيًا rather than تَوَانُيًا because…',
          choices: ['the lām is yāʾ, so the ḍammah becomes kasrah to suit it', 'the wāw interferes', 'it is samāʿī', 'rule 4 does not apply'],
          correct: 0,
          why: 'إِذَا كَانَتِ اللَّامُ يَاءً كُسِرَ الْحَرْفُ الْمَضْمُومُ لِيُنَاسِبَ الْيَاءَ — like تَغَالِيًا.' },

        { t: 'mcq', q: 'اسْتِعَاذَة parallels which earlier formation?',
          choices: ['إِقَامَة — weak-ʿayn afʿala\'s vowel-shift + compensating tāʾ', 'تَزْكِيَة', 'زِلْزَال', 'تَدَحْرُج'],
          correct: 0,
          why: 'عُمِلَ فِي مَصْدَرِهِ مَا عُمِلَ فِي مَصْدَرِ أَفْعَلَ مُعْتَلِّ الْعَيْنِ.' },
      ],
    },

    /* ═══ 6. Non-trilateral: rules 5–6 ═══ */
    {
      id: 'masdar-4-3',
      title: 'Non-trilateral III: فَعْلَلَ and فَاعَلَ',
      subtitle: 'دحرجة · زِلزال · قتال ومقاتلة — وكِذّابًا الشاذ',
      matn: { src: 'DATA_WK20', from: 25, to: 33, check: '٥' },
      steps: [
        { t: 'teach', title: 'Rule 5 — فَعْلَلَ and its mulḥaq',
          focus: [26, 27, 28, 29],
          points: [
            '**فَعْلَلَة**: دَحْرَجَة، زَلْزَلَة، وَسْوَسَة، بَيْطَرَة.',
            '**فِعْلَال** (kasrah) added for the reduplicated: زِلْزَال، وِسْوَاس — in non-reduplicated verbs it is samāʿī (دِحْرَاج).',
            'FATḤAH-initial فَعْلَال mostly means the **ism fāʿil**: ﴿مِنْ شَرِّ الْوَسْوَاسِ﴾ = الْمُوَسْوِس.',
          ] },

        { t: 'teach', title: 'Rule 6 — فَاعَلَ',
          focus: [31, 32, 33],
          points: [
            '**الفِعَال والمُفَاعَلَة**: قَاتَلَ قِتَالًا وَمُقَاتَلَةً؛ خَاصَمَ خِصَامًا وَمُخَاصَمَةً.',
            'Yāʾ-fāʾ verbs bar فِعَال: يَاسَرَ مُيَاسَرَةً only، يَامَنَ مُيَامَنَةً.',
            'Off-pattern = **شاذّ**: كَذَّبَ كِذَّابًا (qiyās تَكْذِيبًا).',
          ] },

        { t: 'mcq', q: 'زِلْزَال vs زَلْزَال — the difference?',
          choices: ['kasrah = maṣdar; fatḥah mostly = ism fāʿil (الوَسْوَاس = الموسوِس)', 'identical', 'fatḥah = plural', 'kasrah = adjective'],
          correct: 0,
          why: 'فِعْلَال بالكسر مصدر المضاعف؛ وَإِنْ فُتِحَ أَوَّلُهُ فَالْكَثِيرُ أَنْ يُرَادَ بِهِ اسْمُ الْفَاعِلِ.' },

        { t: 'mcq', q: 'The two qiyās maṣdars of خَاصَمَ:',
          choices: ['خِصَام and مُخَاصَمَة', 'خَصْم and خُصُوم', 'تَخَاصُم only', 'مُخَاصَمَة only'],
          correct: 0,
          why: 'fāʿala → fiʿāl + mufāʿalah: قتال ومقاتلة، خصام ومخاصمة.' },

        { t: 'mcq', q: 'Why does يَاسَرَ lack a فِعَال maṣdar?',
          choices: ['A yāʾ-fāʾ bars fiʿāl — only مُيَاسَرَة stands', 'It is jāmid', 'It is trilateral', 'The sīn blocks it'],
          correct: 0,
          why: 'مَا كَانَتْ فَاؤُهُ يَاءً يَمْتَنِعُ فِيهِ الْفِعَالُ — (would give يِسَار with an awkward yāʾ-kasrah start).' },

        { t: 'mcq', q: '﴿وَكَذَّبُوا بِآيَاتِنَا كِذَّابًا﴾ — the maṣdar كِذَّابًا is…',
          choices: ['شاذّ — the qiyās from كَذَّبَ is تَكْذِيبًا', 'the standard tafʿīl', 'an ism maṣdar', 'a mistake'],
          correct: 0,
          why: 'وَمَا جَاءَ عَلَى غَيْرِ مَا ذُكِرَ فَشَاذٌّ نَحْوُ كَذَّبَ كِذَّابًا.' },

        { t: 'written',
          prompt: 'Produce the qiyāsī maṣdar of each: دَحْرَجَ · زَلْزَلَ (both options) · قَاتَلَ (both) · تَدَحْرَجَ · انْطَلَقَ · اسْتَعَاذَ.',
          model: '• دَحْرَجَ → دَحْرَجَة (فِعْلال here samāʿī: دِحْراج).\n• زَلْزَلَ → زَلْزَلَة and زِلْزَال (reduplicated → fiʿlāl qiyāsī).\n• قَاتَلَ → قِتَال and مُقَاتَلَة.\n• تَدَحْرَجَ → تَدَحْرُج (ḍammah on the 4th).\n• انْطَلَقَ → انْطِلَاق (kasrah 3rd + alif).\n• اسْتَعَاذَ → اسْتِعَاذَة (weak ʿayn: vowel-shift + compensating tāʾ, like إقامة).' },
      ],
    },

  ],
});
