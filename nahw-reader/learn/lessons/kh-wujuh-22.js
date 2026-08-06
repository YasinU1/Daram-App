/* ── Daram Learn — al-Kubrā fī an-Naḥw · الخاتمة · وجوه الكلمات · القسم 22: ذا → كلّا (pp. 242–245) ──
   Backward-pass course (ch 22). Teach cards carry `page:` + an interactive matn panel
   (src: DATA_KH_W22 in ../books/kubra-nahw/khatima-wujuh-22.js, loaded in learn.html before this
   file). Notes source: books/kubra-nahw/notes/khatima_04_wujuh-al-kalimat.md. */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'kh-wujuh-22',
  num: 24,
  titleAr: 'وُجُوهُ الْكَلِمَاتِ: ذَا ← كَلَّا',
  titleEn: 'Faces of words — dhā → kallā',
  pages: '242–245',
  sections: [

    /* ═══ 1. ذا · ذو · عسى ═══ */
    {
      id: 'dha-dhu-asa',
      title: 'ذَا · ذُو · عَسَى',
      subtitle: 'إِشَارَة وَمَوْصُول · صَاحِب · فِعْل جَامِد',
      matn: { src: 'DATA_KH_W22', from: 1, to: 10, check: 'ذَا' },
      steps: [
        { t: 'teach', title: 'dhā and dhū — two look-alikes', page: 242,
          focus: [2, 3, 6, 7],
          points: [
            '**ذَا** (a noun): **اسْم إِشَارَة** «هَذَا», or **اسْم مَوْصُول** (= الَّذِي) after مَا الاسْتِفْهَامِيَّة ﴿مَاذَا أَنْزَلَ رَبُّكُمْ﴾.',
            '**ذُو** (p.243): **بِمَعْنَى صَاحِب** — “possessor of”, always muḍāf ﴿وَاللَّهُ ذُو الْفَضْلِ الْعَظِيمِ﴾.',
            '**ذُو الطَّائِيَّة** — a **relative** (= الَّذِي) in the dialect of Ṭayyiʾ: «فَإِنَّ بَيْتَ تَمِيمٍ ذُو سَمِعْتُ بِهِ».',
          ],
          after: 'ذُو المَوْصُولَة is dialectal and fixed in form; ذُو صَاحِب declines (ذُو/ذَا/ذِي) and needs an annexed noun.' },

        { t: 'teach', title: 'ʿasā — sister of kāda, defective or complete', page: 243,
          focus: [9, 10],
          points: [
            '**فِعْل نَاقِص** — takes an ism + an أنْ-khabar: ﴿عَسَى اللَّهُ أَنْ يَعْفُوَ عَنْهُمْ﴾ (اللهُ its ism).',
            '**فِعْل تَامّ** — when the أنْ-clause itself is its fāʿil, with no separate ism: ﴿عَسَى أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا﴾.',
          ],
          after: 'A visible ism before أنْ → نَاقِص; أنْ directly after عَسَى → تَامّ.' },

        { t: 'mcq', q: 'In ﴿مَاذَا أَنْزَلَ رَبُّكُمْ﴾, ذا is …',
          choices: ['اسم موصول (= الذي) after the interrogative ما', 'اسم إشارة', 'a redundant particle', 'part of a single word ماذا with no separate parse'],
          correct: 0,
          why: 'ما is the interrogative مبتدأ and ذا a relative خبر (= الذي أنزله ربكم) — the موصول face, not the demonstrative «هذا».' },

        { t: 'mcq', q: 'Which عسى is تامّة?',
          choices: ['﴿عَسَى أَنْ يَبْعَثَكَ رَبُّكَ﴾ — أنْ-clause is its fāʿil, no separate ism', '﴿عَسَى اللَّهُ أَنْ يَعْفُوَ عَنْهُمْ﴾', 'both', 'neither'],
          correct: 0,
          why: 'When أنْ + verb directly follows عسى with no اسم, that maṣdar is the fāʿil → تامّة. With اللهُ as ism first, it is ناقصة.' },

        { t: 'written',
          prompt: 'Give the two faces each of ذا, ذو, and عسى, distinguishing ذو صاحب from ذو الطائية and عسى التامة from الناقصة.',
          model: 'ذا: (1) اسم إشارة «هذا»; (2) اسم موصول = الذي، بعد ما الاستفهامية ﴿ماذا أنزل ربكم﴾. ذو: (1) بمعنى صاحب، ملازِمة للإضافة، معربة (ذو/ذا/ذي) ﴿والله ذو الفضل العظيم﴾; (2) موصولة = الذي في لغة طيّئ، مبنيّة «بيت تميم ذو سمعت به». عسى: (1) ناقصة — لها اسم وخبرها أنْ والفعل ﴿عسى الله أن يعفو عنهم﴾; (2) تامّة — فاعلها المصدر المؤوّل من أنْ ﴿عسى أن يبعثك ربك مقامًا محمودًا﴾. الفرق: اسم ظاهر قبل أنْ → ناقصة، وإلّا → تامّة.' },
      ],
    },

    /* ═══ 2. غير — 4 faces ═══ */
    {
      id: 'ghayr',
      title: 'غَيْر',
      subtitle: 'أَرْبَعَةُ أَوْجُهٍ: صِفَة · بَدَل · اسْتِثْنَاء · لَكِنْ',
      matn: { src: 'DATA_KH_W22', from: 11, to: 15, check: 'غَيْر' },
      steps: [
        { t: 'teach', title: 'ghayr — its case follows its role', page: 243,
          focus: [12, 13, 14, 15],
          body: 'غَيْر is a noun locked into iḍāfah, deeply vague (مُتَوَغِّل فِي الإِبْهَام, never definite). Four roles:',
          points: [
            '**صِفَة** after a **نَكِرَة**: ﴿لَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ﴾. · **بَدَل** after a **مَعْرِفَة**: ﴿صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ﴾.',
            '**لِلِاسْتِثْنَاء** (= إِلّا): «صَامَ الْمُسْلِمُونَ غَيْرَ الْمَرْضَى» — غَيْر takes the case إِلّا’s mustathnā would.',
            '**بِمَعْنَى لَكِنْ** (istidrāk): «جَوَادٌ … غَيْرَ أَنَّهُ لَا يُبْقِي مِنَ الْمَالِ بَاقِيًا».',
          ],
          after: 'Trigger: after نَكِرَة → صِفَة, after مَعْرِفَة → بَدَل, in an exception frame → اسْتِثْنَاء, before أَنّ → لَكِنْ.' },

        { t: 'mcq', q: 'In ﴿غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ﴾ (after الَّذِينَ), غير is …',
          choices: ['بدل — it follows a معرفة (الذين), so it is a substitute not an adjective', 'صفة', 'استثناء', 'بمعنى لكن'],
          correct: 0,
          why: 'غير cannot describe a definite (it is itself indefinite), so after the معرفة الذين it is parsed as بدل — hence the jarr مطابقة.' },

        { t: 'mcq', q: 'Why is غير a صفة in ﴿لَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ﴾?',
          choices: ['because it follows a نكرة (بيوتًا), which غير can describe', 'because it means إلّا here', 'because it means لكن', 'because it is a بدل from بيوتًا'],
          correct: 0,
          why: 'After an indefinite (بيوتًا), غير agrees as a صفة (منصوبة). The نكرة/معرفة of the preceding word is the whole trigger for صفة vs بدل.' },

        { t: 'written',
          prompt: 'State the four faces of غير and the contextual trigger for each, noting why غير never describes a معرفة.',
          model: 'غير أربعة أوجه: (1) صفة بعد النكرة ﴿لا تدخلوا بيوتًا غير بيوتكم﴾; (2) بدل بعد المعرفة ﴿صراط الذين أنعمت عليهم غيرِ المغضوب عليهم﴾; (3) للاستثناء = إلّا «صام المسلمون غيرَ المرضى»; (4) بمعنى لكن «جواد غيرَ أنه لا يبقي…». المِفتاح: بعد نكرة → صفة، بعد معرفة → بدل، في سياق استثناء → استثناء، قبل أنّ للاستدراك → لكن. ولا تكون صفة لمعرفة لأنها متوغّلة في الإبهام لا تتعرّف بالإضافة.' },
      ],
    },

    /* ═══ 3. الفاء — 3 faces ═══ */
    {
      id: 'fa',
      title: 'الْفَاء',
      subtitle: 'ثَلَاثَةُ أَوْجُهٍ: عَاطِفَة · مُسْتَأْنِفَة · رَابِطَة',
      matn: { src: 'DATA_KH_W22', from: 17, to: 20, check: 'الْفَاءُ' },
      steps: [
        { t: 'teach', title: 'the fāʾ — coordinate, resume, or bind', page: 244,
          focus: [18, 19, 20],
          points: [
            '**عَاطِفَة** (order + immediacy): «جَاءَ زَيْدٌ فَعَمْرٌو» — ʿAmr came *right after* Zayd.',
            '**مُسْتَأْنِفَة** (starts a fresh, independent sentence): ﴿…فَوَجَدَ فِيهَا رَجُلَيْنِ يَقْتَتِلَانِ﴾.',
            '**رَابِطَة لِجَوَابِ الشَّرْط** (binds the answer): ﴿إِنْ تُعَذِّبْهُمْ فَإِنَّهُمْ عِبَادُكَ﴾ — needed when the جَوَاب can’t itself be a شَرْط-verb.',
          ],
          after: 'Also a رَابِطَة fāʾ appears after a مُبْتَدَأ carrying شَرْط-sense or a fronted jārr ﴿وَفِي ذَلِكَ فَلْيَتَنَافَسِ﴾ (الفَاء الزَّائِدَة).' },

        { t: 'mcq', q: 'In ﴿إِنْ تُعَذِّبْهُمْ فَإِنَّهُمْ عِبَادُكَ﴾, the فاء is …',
          choices: ['رابطة لجواب الشرط — it links the nominal answer (إنّهم عبادك) to the شرط', 'عاطفة', 'مستأنفة', 'a redundant letter with no function'],
          correct: 0,
          why: 'The جواب (إنّهم عبادك) is a nominal sentence, which cannot be a جزم-answer on its own, so it must be bound to the شرط by the رابطة fāʾ.' },

        { t: 'mcq', q: 'Which فاء merely begins a new independent statement?',
          choices: ['﴿فَوَجَدَ فِيهَا رَجُلَيْنِ يَقْتَتِلَانِ﴾ — مستأنفة', '﴿فَإِنَّهُمْ عِبَادُكَ﴾', '«جَاءَ زَيْدٌ فَعَمْرٌو»', 'none of them'],
          correct: 0,
          why: 'Here the فاء opens a fresh narrative clause with no coordination or conditional binding — الفاء المستأنفة.' },

        { t: 'written',
          prompt: 'Give the three faces of the fāʾ and explain when a رابطة fāʾ is obligatory in a شرط answer.',
          model: 'الفاء ثلاثة أوجه: (1) عاطفة تفيد الترتيب والتعقيب «جاء زيد فعمرو»; (2) مستأنفة تبدأ جملة مستقلّة ﴿فوجد فيها رجلين يقتتلان﴾; (3) رابطة لجواب الشرط ﴿إن تعذبهم فإنهم عبادك﴾. تجب الرابطة إذا كان الجواب لا يصلح أن يكون فعل شرط: كالجملة الاسمية، أو الطلبية، أو الجامدة، أو المقرونة بـ قد/لن/السين/سوف. وقد تدخل رابطة الفاء بعد مبتدأ فيه معنى الشرط أو جارّ مقدَّم ﴿وفي ذلك فليتنافس المتنافسون﴾.' },
      ],
    },

    /* ═══ 4. قد — 5 faces ═══ */
    {
      id: 'qad',
      title: 'قَدْ',
      subtitle: 'خَمْسَةُ أَوْجُهٍ: تَوَقُّع · تَحْقِيق · تَقْلِيل · تَكْثِير · تَقْرِيب',
      matn: { src: 'DATA_KH_W22', from: 21, to: 26, check: 'قَدْ' },
      steps: [
        { t: 'teach', title: 'qad — a tiny word, five meanings', page: 244,
          focus: [22, 23, 24, 25, 26],
          points: [
            '**التَّوَقُّع** (w/ مُضَارِع, “may”): «قَدْ يَخْرُجُ زَيْدٌ». · **التَّحْقِيق** (certainty): ﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾ (w/ مَاضٍ) — the commonest face.',
            '**التَّقْلِيل** (“sometimes / seldom”, w/ مُضَارِع): «قَدْ يَصْدُقُ الْكَذُوبُ». · **التَّكْثِير** (“often”): ﴿قَدْ نَرَى تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ﴾.',
            '**التَّقْرِيب** (brings a past close to the present): «قَدْ قَامَتِ الصَّلَاةُ».',
          ],
          after: 'With a مَاضٍ, قَد is usually تَحْقِيق/تَقْرِيب; with a مُضَارِع it is تَوَقُّع/تَقْلِيل/تَكْثِير — context (esp. of much vs little) decides.' },

        { t: 'mcq', q: '«قَدْ قَامَتِ الصَّلَاةُ» — قد is for …',
          choices: ['التقريب — it draws the just-completed past near to the moment of speech', 'التوقّع', 'التقليل', 'التكثير'],
          correct: 0,
          why: 'قد التقريب over a ماضٍ signals that the action “has just now” happened — the standard iqāmah usage.' },

        { t: 'mcq', q: 'In ﴿قَدْ نَرَى تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ﴾, قد conveys …',
          choices: ['التكثير — “We do often see”', 'التقليل — “We rarely see”', 'التوقّع — “We may see”', 'التحقيق over a past'],
          correct: 0,
          why: 'Context (God’s constant sight) fixes قد + مضارع as كثرة here — “often / repeatedly”, not seldom.' },

        { t: 'mcq', q: 'قد التقليل and قد التكثير both enter …',
          choices: ['the مضارع — meaning is fixed by context (much vs little)', 'the ماضي only', 'nouns', 'the أمر'],
          correct: 0,
          why: 'Both sit on the مضارع; only the surrounding sense tells whether قد means “seldom” (تقليل) or “often” (تكثير).' },

        { t: 'written',
          prompt: 'List the five faces of قد with an example of each and note which verb-tense each prefers.',
          model: 'قد خمسة: (1) التوقّع مع المضارع «قد يخرج زيد»; (2) التحقيق مع الماضي ﴿قد أفلح المؤمنون﴾ (ومع المضارع بقرينة ﴿قد يعلم الله﴾); (3) التقليل مع المضارع «قد يصدق الكذوب»; (4) التكثير مع المضارع ﴿قد نرى تقلّب وجهك في السماء﴾; (5) التقريب مع الماضي «قد قامت الصلاة». فمع الماضي: تحقيق/تقريب، ومع المضارع: توقّع/تقليل/تكثير، والقرينة تعيّن التقليل من التكثير.' },
      ],
    },

    /* ═══ 5. الكاف + كلّا ═══ */
    {
      id: 'kaf-kalla',
      title: 'الْكَاف · كَلَّا',
      subtitle: 'أَرْبَعَةُ أَوْجُهٍ لِلْكَافِ · وَثَلَاثَةٌ لِكَلَّا',
      matn: { src: 'DATA_KH_W22', from: 28, to: 36, check: 'الْكَافُ' },
      steps: [
        { t: 'teach', title: 'the kāf — letter or pronoun?', page: 245,
          focus: [29, 30, 31, 32],
          body: 'The kāf splits first into حَرْف vs اسْم/ضَمِير:',
          points: [
            '**حَرْف جَارّ** — simile ﴿كَمِشْكَاةٍ﴾, reason ﴿كَمَا هَدَاكُمْ﴾. · **حَرْف خِطَاب** (inert, no maḥall) after a demonstrative ﴿ذَلِكَ الْكِتَابُ﴾ or ﴿إِيَّاكَ﴾.',
            '**ضَمِير مَنْصُوب أَوْ مَجْرُور**: ﴿مَا وَدَّعَكَ رَبُّكَ﴾ — the كـ is the object pronoun.',
            '**اسْم بِمَعْنَى مِثْل**: ﴿أَخْلُقُ لَكُمْ مِنَ الطِّينِ كَهَيْئَةِ الطَّيْرِ﴾ — كـ = “like”, itself a مَنْصُوب object.',
          ],
          after: 'The trap: كـ الخِطَاب (in ذَلِكَ/إِيَّاك) has no iʿrāb, whereas كـ الضَّمِير is a full pronoun with a maḥall.' },

        { t: 'teach', title: 'kallā — three faces', page: 245,
          focus: [34, 35, 36],
          points: [
            '**لِلزَّجْر** (rebuke / “never!”): ﴿قَالَ رَبِّ ارْجِعُونِ … كَلَّا﴾.',
            '**لِلتَّصْدِيق** (affirmation, ≈ “truly”): ﴿كَلَّا وَالْقَمَرِ﴾.',
            '**لِلِاسْتِفْتَاح** (opener, ≈ alā / ḥaqqan): ﴿كَلَّا إِنَّ الْإِنْسَانَ لَيَطْغَى﴾.',
          ] },

        { t: 'mcq', q: 'In ﴿ذَلِكَ الْكِتَابُ﴾, the كـ is …',
          choices: ['حرف خطاب — inert, no iʿrāb (it only addresses the listener)', 'ضمير مجرور', 'حرف جرّ للتشبيه', 'اسم بمعنى مثل'],
          correct: 0,
          why: 'On ذلك / إياك the kāf merely marks address (خطاب) and has لا محلّ له. Contrast ﴿ودّعك﴾ where the كـ *is* an object pronoun.' },

        { t: 'mcq', q: '﴿كَهَيْئَةِ الطَّيْرِ﴾ — the كـ is …',
          choices: ['اسم بمعنى مثل, functioning as a منصوب مفعول به', 'حرف جرّ للتشبيه', 'حرف خطاب', 'ضمير'],
          correct: 0,
          why: 'Here the كـ carries a full noun-role (= مِثْل), object of أخلُق — the اسمية face, not a mere preposition.' },

        { t: 'mcq', q: '﴿كَلَّا إِنَّ الْإِنْسَانَ لَيَطْغَى﴾ — كلّا is …',
          choices: ['للاستفتاح — an opener (≈ alā / ḥaqqan) before the following statement', 'للزجر', 'للتصديق', 'حرف جواب بمعنى لا'],
          correct: 0,
          why: 'No preceding claim is being rebuked here; كلّا opens the āyah emphatically — الاستفتاح, ≈ “indeed”.' },

        { t: 'written',
          prompt: 'Give the four faces of the kāf and the three of كلّا, distinguishing كاف الخطاب from كاف الضمير.',
          model: 'الكاف أربعة: (1) حرف جارّ (تشبيه ﴿كمشكاة﴾، تعليل ﴿كما هداكم﴾); (2) حرف خطاب لا محلّ له بعد اسم الإشارة والضمير المنفصل ﴿ذلك الكتاب﴾، ﴿إياك نعبد﴾; (3) ضمير منصوب أو مجرور ﴿ما ودّعك ربك﴾; (4) اسم بمعنى مثل ﴿كهيئة الطير﴾. كاف الخطاب لا إعراب لها (تفيد الخطاب فقط)، وكاف الضمير اسم له محلّ من الإعراب. كلّا ثلاثة: (1) للزجر ﴿كلّا…﴾; (2) للتصديق ﴿كلّا والقمر﴾; (3) للاستفتاح ﴿كلّا إن الإنسان ليطغى﴾.' },
      ],
    },
  ],
});
