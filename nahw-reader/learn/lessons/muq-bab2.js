/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقدمة · الباب الثاني في الجملة وشبه الجملة والكلام (pp. 10–16) ──
   Authored from books/kubra-nahw/muqaddimah-bab2.js. Bank ids from chapterId muq-bab-2. */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'muq-bab-2',
  titleAr: 'الْبَابُ الثَّانِي فِي الْجُمْلَةِ وَشِبْهِ الْجُمْلَةِ وَالْكَلَامِ',
  titleEn: 'The Sentence, Quasi-Sentence & Speech',
  pages: '10–16',
  sections: [

    /* ═══ 1. The sentence & its pillars ═══ */
    {
      id: 'jumlah',
      title: 'The sentence & its pillars',
      subtitle: 'المسند والمسند إليه · عمدة وفضلة',
      matn: { src: 'DATA_BAB2', from: 1, to: 5, check: 'الْبَابُ' },
      steps: [
        { t: 'teach', title: 'What is a جملة?',
          focus: [1, 2, 3, 4, 5],
          points: [
            '**المسند إليه** — what is talked about = the مبتدأ or the فاعل. Also called **محكوم عليه**.',
            '**المسند** — what is said about it = the خبر or the فعل. Also called **محكوم به**.',
            'These two together = **العُمدة** (the core). Everything else — the five objects etc. — = **فَضْلة / قَيْد** (surplus / restriction).',
          ],
          examples: [
            { ar: 'اللهُ غَفُورٌ', en: 'الله = musnad ilayhi (mubtadaʾ) · غفور = musnad (khabar)' },
            { ar: 'خَلَقَ اللهُ', en: 'خلق = musnad (fiʿl) · الله = musnad ilayhi (fāʿil)' },
          ],
          after: 'Every sentence is a predication — the عمدة can never be dropped; the فضلة can.' },

        { t: 'mcq', q: 'The مسند إليه can be…',
          choices: ['a مبتدأ or a فاعل', 'a خبر or a فعل', 'only a مبتدأ', 'any noun in the sentence'],
          correct: 0,
          why: 'The one predicated-about: mubtadaʾ (in a nominal sentence) or fāʿil (in a verbal one). The khabar/fiʿl side is the مسند.' },

        { t: 'mcq', q: 'In اللهُ غَفُورٌ, which word is the مسند?',
          choices: ['غَفُورٌ — the khabar', 'اللهُ — the mubtadaʾ', 'both', 'neither'],
          correct: 0,
          why: 'The musnad is what is asserted OF the subject — the khabar غفور. الله is the musnad ilayhi.' },

        { t: 'mcq', q: 'The five objects (المفاعيل الخمسة) and their like are called…',
          choices: ['فضلة / قيد', 'عمدة', 'مسند', 'محكوم عليه'],
          correct: 0,
          why: 'Only the musnad + musnad ilayhi are the ʿumdah (core). Whatever is beyond them is faḍlah (surplus) and qayd (restriction).' },

        { t: 'mcq', q: 'Another name for the مسند is…',
          choices: ['محكوم به', 'محكوم عليه', 'عمدة وحده', 'قيد'],
          correct: 0,
          why: 'المسند = محكوم به (the judgement made); المسند إليه = محكوم عليه (the one judged about).' },

        { t: 'written',
          prompt: 'Define the جملة. Name its two pillars with their alternate titles, state which parts of speech can fill each, and explain عمدة vs فضلة.',
          model: 'The jumlah is what comprises a musnad and a musnad ilayhi.\n• المسند إليه (محكوم عليه): the mubtadaʾ or the fāʿil.\n• المسند (محكوم به): the khabar or the fiʿl.\nTogether these two are the ʿumdah — the sentence cannot stand without them. Whatever is other than them (the five objects etc.) is faḍlah (surplus) and qayd (restriction).\nExamples: اللهُ غفورٌ (mubtadaʾ + khabar); خلقَ اللهُ (fiʿl + fāʿil).' },
      ],
    },

    /* ═══ 2. By form ═══ */
    {
      id: 'form',
      title: 'Divisions by form',
      subtitle: 'اسمية (منسوخة / غير منسوخة) · فعلية',
      matn: { src: 'DATA_BAB2', from: 8, to: 17, check: 'الْمَسْأَلَةُ' },
      steps: [
        { t: 'teach', title: 'الجملة الاسمية', kicker: 'أقسام الجملة باعتبار هيئتها',
          focus: [8, 9, 10, 11, 12, 13, 14, 15],
          points: [
            '**الجملة الاسمية** — begins (صَدَرَت) with a noun. Two kinds:',
            '— **غير منسوخة**: no نَاسِخ has entered — ﴿وَاللهُ غَفُورٌ رَحِيمٌ﴾.',
            '— **منسوخة**: a نَاسِخ has entered (كان and إنّ and their sisters) — ﴿إِنَّ اللهَ غَفُورٌ رَحِيمٌ﴾.',
          ] },

        { t: 'teach', title: 'الجملة الفعلية',
          focus: [16, 17],
          points: [
            '**الجملة الفعلية** — begins with a verb.',
            'Judge by the TRUE opening element: a نَاسِخ or a فَضْلة does not change the classification.',
            '**الشرطية is فعلية** — only verbs follow a شرط particle, even where the verb is merely estimated: ﴿وَإِنْ أَحَدٌ مِنَ الْمُشْرِكِينَ اسْتَجَارَكَ﴾ تقدير: اسْتَجَارَكَ.',
          ],
          examples: [
            { ar: 'مَا هَذَا بَشَرًا', en: 'still اسمية — the نافية ما is not the true opener', note: 'and إِيَّاكَ نَعْبُدُ is فعلية' },
            { ar: 'إِنْ تُخْفُوا مَا فِي صُدُورِكُمْ أَوْ تُبْدُوهُ يَعْلَمْهُ اللهُ', en: 'conditional — a verb follows the شرط particle', note: 'شرطية → فعلية' },
          ] },

        { t: 'mcq', q: '﴿إِنَّ اللهَ غَفُورٌ رَحِيمٌ﴾ is…',
          choices: ['اسمية منسوخة', 'اسمية غير منسوخة', 'فعلية', 'شبه جملة'],
          correct: 0,
          why: 'It begins with a noun-sentence over which the nāsikh إنّ has entered.' },

        { t: 'mcq', q: 'What makes a جملة فعلية?',
          choices: ['It begins (صَدَرَت) with a verb', 'It contains a verb anywhere', 'Its khabar is a verb', 'It has an object'],
          correct: 0,
          why: 'The test is what it OPENS with. اللهُ يَعْلَمُ contains a verb but opens with a noun → ismiyyah.' },

        { t: 'mcq', q: 'The نواسخ are…',
          choices: ['كان وإنّ وأخواتهما', 'حروف الجر', 'أدوات الاستفهام', 'الظروف'],
          correct: 0,
          why: 'The abrogators that enter on a nominal sentence and change its ruling: kāna & sisters, inna & sisters.' },

        { t: 'bank', id: 'muq-bab-2--state-types--state-the-divisions-of-the-sente-1r' },
      ],
    },

    /* ═══ 3. By meaning ═══ */
    {
      id: 'meaning',
      title: 'Divisions by meaning',
      subtitle: 'خبرية · إنشائية (11 kinds)',
      matn: { src: 'DATA_BAB2', from: 20, to: 36, check: 'الْمَسْأَلَةُ' },
      steps: [
        { t: 'teach', title: 'خبرية vs إنشائية',
          focus: [20, 21, 22, 23, 24, 25],
          points: [
            '**الخبرية** (declarative) — the speaker CAN be described as truthful or lying: ﴿إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ﴾.',
            '**الإنشائية** (performative) — truth/falsehood do not apply: the utterance doesn’t report reality, it *performs* something (a question, a command, an oath…).',
          ],
          after: 'Form ≠ intent: ﴿الْحَمْدُ لِلَّهِ﴾ is خبرية in form yet performs praise; «فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ» is a command in form yet informs of a ruling.' },

        { t: 'teach', title: 'The performative kinds — first five', kicker: 'Learn · the 11 kinds',
          focus: [26, 27, 28, 29, 30],
          points: [
            '**الاستفهام** (question) · **التمني** (wish) · **النداء** (call).',
            '**التحذير** — warning AWAY from harm: نَاقَةَ اللهِ وَسُقْيَاهَا.',
            '**الإغراء** — inciting TOWARD good: الْعِلْمَ الْعِلْمَ.',
          ] },

        { t: 'teach', title: 'The performative kinds — last six',
          focus: [31, 32, 33, 34, 35, 36],
          points: [
            '**الأمر** (command) · **النهي** (prohibition) · **الدعاء** (supplication).',
            '**صيغ المدح والذم** (praise & blame) · **صيغ التوجع والتفجع** (lamentation & grief).',
            '**القسم** (the oath): وَالْعَصْرِ.',
          ],
          after: 'Eleven in all: استفهام · تمنٍّ · نداء · تحذير · إغراء · أمر · نهي · دعاء · مدح وذم · توجّع وتفجّع · قسم.' },

        { t: 'mcq', q: '﴿إِيَّاكَ نَعْبُدُ﴾ — خبرية or إنشائية?',
          choices: ['خبرية — it reports; the speaker could (in principle) be truthful or lying', 'إنشائية — it is worship', 'إنشائية — it is a duʿāʾ', 'Neither'],
          correct: 0,
          why: 'It states “You alone we worship” — a report about the speakers. The book itself cites it for the khabariyyah.' },

        { t: 'mcq', q: 'الْعِلْمَ الْعِلْمَ! (“Knowledge! knowledge!”) is which kind of إنشاء?',
          choices: ['إغراء — incitement toward something good', 'تحذير — warning', 'أمر', 'قسم'],
          correct: 0,
          why: 'Urging someone TOWARD a praiseworthy thing = ighrāʾ. Warning AWAY from harm (ناقة الله وسقياها) = taḥdhīr.' },

        { t: 'mcq', q: '﴿نَاقَةَ اللهِ وَسُقْيَاهَا﴾ is…',
          choices: ['تحذير — warning', 'إغراء — incitement', 'نداء', 'تمنٍّ'],
          correct: 0,
          why: 'Beware of harming the she-camel — warning away = taḥdhīr.' },

        { t: 'mcq', q: '﴿وَالْعَصْرِ﴾ is…',
          choices: ['قسم — an oath, so إنشائية', 'خبرية — it mentions time', 'دعاء', 'توجّع'],
          correct: 0,
          why: 'Swearing is a performance, not a report — the oath is one of the inshāʾ kinds.' },

        { t: 'mcq', q: 'Why can’t an إنشائية sentence be called true or false?',
          choices: ['It does not report reality — it brings something about', 'It is always short', 'It has no verb', 'It is always about the future'],
          correct: 0,
          why: '“Establish prayer!” doesn’t describe the world, it enacts a demand — nothing to measure against reality as ṣidq/kidhb.' },

        { t: 'bank', id: 'muq-bab-2--compare--explain-with-examples-the-differ-1v' },
        { t: 'bank', id: 'muq-bab-2--enumerate--enumerate-the-categories-of-the--25' },
      ],
    },

    /* ═══ 4. Kubrā & ṣughrā ═══ */
    {
      id: 'kubra',
      title: 'Major & minor sentences',
      subtitle: 'الكبرى والصغرى',
      matn: { src: 'DATA_BAB2', from: 38, to: 43, check: 'الْمَسْأَلَةُ' },
      steps: [
        { t: 'teach', title: 'By relation to another sentence',
          focus: [38, 39, 40, 41, 42, 43],
          points: [
            '**الكبرى** — a sentence that CONTAINS another sentence: the whole of وَاللهُ يَعْلَمُ.',
            '**الصغرى** — a sentence occupying the place of a single word inside the kubrā: يَعْلَمُ is the khabar of الله — a sentence sitting where a mufrad (like عَالِمٌ) could sit.',
          ],
          after: 'Relative labels: the same clause can be صغرى to what contains it and كبرى to what it contains.' },

        { t: 'mcq', q: 'In ﴿وَاللهُ يَعْلَمُ﴾, the clause يَعْلَمُ is…',
          choices: ['صغرى — it sits in the place of a single word (the khabar)', 'كبرى — it has a fāʿil inside', 'فضلة', 'شبه جملة'],
          correct: 0,
          why: 'يعلم (with its hidden fāʿil) is a sentence serving as khabar — the slot of a mufrad — so it is ṣughrā within the kubrā.' },

        { t: 'mcq', q: 'A جملة كبرى is defined as…',
          choices: ['one that comprises another sentence', 'the longest sentence in a passage', 'one beginning with a noun', 'one with more than five words'],
          correct: 0,
          why: 'ما اشتملت على جملة — size in words is irrelevant; containment is the test.' },

        { t: 'bank', id: 'muq-bab-2--explain-line--explain-the-following-matn-line--1p' },
      ],
    },

    /* ═══ 5. Quasi-sentence: forms & laghw ═══ */
    {
      id: 'shibh',
      title: 'The quasi-sentence & aẓ-ẓarf al-laghw',
      subtitle: 'شبه الجملة · المتعلَّق والمتعلِّق · اللغو',
      matn: { src: 'DATA_BAB2', from: 44, to: 60, check: 'الْفَصْلُ' },
      steps: [
        { t: 'teach', title: 'Two forms of شبه الجملة',
          focus: [44, 45, 46, 47, 48, 49, 50, 51],
          points: [
            '**الجارّ والمجرور** — preposition + its genitive: فِي مَكَّةَ.',
            '**الظرف والمضاف إليه** — adverbial + its genitive: عِنْدَ الْكَعْبَةِ.',
            '⚠️ The shibh jumlah is also called **ظرف** — a word with three senses: the **المفعول فيه**; the words **فوق، تحت، عند** and their sisters; and the **شبه الجملة** itself.',
          ] },

        { t: 'teach', title: 'المتعلَّق والمتعلِّق', kicker: 'أقسام شبه الجملة باعتبار عاملها',
          focus: [53, 54, 55],
          points: [
            'The **governor** (عامل) of the shibh jumlah is called its **مُتَعَلَّق** (attached-to).',
            'The shibh jumlah itself, as it hangs on that governor, is the **مُتَعَلِّق** (attaching).',
          ] },

        { t: 'mcq', q: 'عِنْدَ الْكَعْبَةِ is which form of شبه الجملة?',
          choices: ['ظرف ومضاف إليه', 'جارّ ومجرور', 'جملة صغرى', 'مبتدأ وخبر'],
          correct: 0,
          why: 'عند is an adverbial (ẓarf) with الكعبة as its muḍāf ilayhi. في مكة would be the jārr-majrūr form.' },

        { t: 'mcq', q: 'The مُتَعَلَّق (with fatḥa on the lām) is…',
          choices: ['the governor the shibh jumlah hangs on', 'the shibh jumlah itself', 'the majrūr noun', 'the preposition'],
          correct: 0,
          why: 'مُتَعَلَّق = attached-TO = the ʿāmil. The shibh jumlah doing the hanging is the مُتَعَلِّق (kasra).' },

        { t: 'teach', title: 'First kind: الظرف اللغو',
          focus: [56, 57, 58, 59],
          points: [
            'Its governor is **مذكور** (mentioned) — the usual case: أَرْسَلْنَا right there in the verse.',
            'Or **محذوف مخصوص** — omitted but specific: ﴿وَإِلَى عَادٍ أَخَاهُمْ هُودًا﴾ أي أَرْسَلْنَا.',
            'It carries **no hidden pronoun** referring back to a subject — that is why it is لَغْو (non-predicative).',
          ] },

        { t: 'teach', title: 'Where the laghw governor MUST be dropped',
          focus: [60],
          points: [
            '**الأمثال** (proverbs): الْكِلَابُ عَلَى الْبَقَرِ أي سُلِّطَ — and **العبارات المأثورة**: بِأَبِي أَنْتَ وَأُمِّي أي مَفْدِيٌّ.',
            '**القسم بغير الباء**: ﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾.',
            '**خبر كان مع لام الجحود**: ﴿مَا كَانَ اللهُ لِيُعَذِّبَهُمْ وَأَنْتَ فِيهِمْ﴾ أي قَاصِدًا لِيُعَذِّبَهُمْ.',
          ] },

        { t: 'mcq', q: 'In ﴿لَقَدْ أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ﴾, why is إِلَى قَوْمِهِ a ظرف لغو?',
          choices: ['Its governor أَرْسَلْنَا is explicitly mentioned', 'Its governor is general and omitted', 'It is the khabar', 'قومه is definite'],
          correct: 0,
          why: 'Laghw = the governor is mentioned (the usual case) or omitted but specific. Here it is right there in the verse.' },

        { t: 'mcq', q: '﴿تَاللهِ تَفْتَأُ…﴾ — why is the governor of تَاللهِ obligatorily omitted?',
          choices: ['It is an oath sworn with other than the bāʾ', 'It is a proverb', 'It follows كان', 'Oath governors are never expressed'],
          correct: 0,
          why: 'One of the four obligatory-omission places: the qasam with a letter other than بِ (here the tāʾ). With بِ the verb may appear: أُقْسِمُ بِاللهِ.' },

        { t: 'bank', id: 'muq-bab-2--state-types--state-the-divisions-of-the-quasi-1t' },
        { t: 'bank', id: 'muq-bab-2--explain-statement--explain-the-following-statement--1z' },
      ],
    },

    /* ═══ 6. al-Mustaqarr ═══ */
    {
      id: 'mustaqarr',
      title: 'aẓ-Ẓarf al-mustaqarr fīh',
      subtitle: 'The omitted general governor · five places',
      matn: { src: 'DATA_BAB2', from: 61, to: 66, check: 'الْقِسْمُ' },
      steps: [
        { t: 'teach', title: 'Second kind: الظرف المستقر فيه',
          focus: [61, 62, 64, 65],
          points: [
            'The omitted general governor = anything denoting **existence**: اسْتَقَرَّ، وُجِدَ، ثَبَتَ — hence ﴿إِنَّكَ عَلَى صِرَاطٍ مُسْتَقِيمٍ﴾ أي تَثْبُتُ / ثَابِتٌ.',
            'It may be a **verb** (استقرّ، ثبت، وُجد، يكون) or a **noun with the verb’s sense** (مستقرّ، ثابت، موجود، كائن).',
            '**Except in the ṣilah** — there it must be a verb only: الَّذِي فِي مَكَّةَ أي اسْتَقَرَّ.',
          ],
          after: 'Unlike the لغو, the mustaqarr carries a hidden pronoun referring back to its subject.' },

        { t: 'teach', title: 'The five places of the mustaqarr',
          focus: [66],
          points: [
            '**الخبر** (and what shares its ruling) · **الحال** · **النعت**.',
            '**الصلة** — where the omitted governor must be a verb.',
            '**الاعتماد** — the shibh jumlah fronted with something resting on it: ﴿أَفِي اللهِ شَكٌّ﴾.',
          ] },

        { t: 'mcq', q: 'The key difference: لغو vs مستقر?',
          choices: ['laghw: governor mentioned or specific · mustaqarr: governor omitted AND general', 'laghw: with preposition · mustaqarr: with ẓarf', 'laghw: in the Qurʾān · mustaqarr: elsewhere', 'laghw: acts as khabar · mustaqarr: never does'],
          correct: 0,
          why: 'Both are shibh jumlah; the whole split is about the governor — expressed/specific (laghw) vs omitted-general like استقرّ (mustaqarr).' },

        { t: 'mcq', q: 'The omitted general governor denotes…',
          choices: ['existence — استقرّ، وُجد، ثبت', 'motion', 'possession', 'time'],
          correct: 0,
          why: 'ما يدلّ على الوجود. Hence the name مستقرّ فيه — “settled in it”.' },

        { t: 'mcq', q: 'In the صلة, the omitted governor must be…',
          choices: ['a verb only — الذي في مكة أي استقرّ', 'a noun only', 'verb or noun freely', 'a particle'],
          correct: 0,
          why: 'Everywhere else it may be a verb or a noun carrying the verb’s sense — except the ṣilah, which demands a verb (a ṣilah must be a sentence).' },

        { t: 'mcq', q: 'Which of these is NOT one of the five places of the mustaqarr?',
          choices: ['الفاعل', 'الخبر', 'الحال', 'الصلة'],
          correct: 0,
          why: 'The five: khabar (and what shares its ruling), ḥāl, naʿt, ṣilah, iʿtimād. A fāʿil is not among them.' },

        { t: 'mcq', q: '﴿أَفِي اللهِ شَكٌّ﴾ exemplifies which place?',
          choices: ['الاعتماد — the shibh jumlah is fronted and شكّ rests on it', 'الحال', 'النعت', 'الصلة'],
          correct: 0,
          why: 'The fifth place, iʿtimād: the quasi-sentence comes first and what follows depends on it.' },

        { t: 'bank', id: 'muq-bab-2--compare--explain-with-examples-the-differ-1x' },
        { t: 'bank', id: 'muq-bab-2--explain-statement--explain-the-following-statement--21' },
        { t: 'bank', id: 'muq-bab-2--define-types-examples--what-is-shibh-al-jumlah-the-quas-23' },
        { t: 'bank', id: 'muq-bab-2--classify-tarkib--classify-the-category-noun-verb--27' },
      ],
    },

    /* ═══ 7. Speech ═══ */
    {
      id: 'kalam',
      title: 'Speech — الكلام',
      subtitle: 'قول مفيد · موجب وغير موجب',
      matn: { src: 'DATA_BAB2', from: 68, to: 77, check: 'الْفَصْلُ' },
      steps: [
        { t: 'teach', title: 'What is الكلام?',
          focus: [68, 69, 70],
          points: [
            'Compare: **كلمة** = قول مُفْرَد (single) · **كلام** = قول مُفِيد (complete enough to stop at).',
            '**مُفيد** = يَحْسُنُ السُّكُوتُ عَلَيْهِ — silence upon it is good.',
            'So **every كلام is a جملة, but not every جملة is كلام** — a جملة only needs مسند + مسند إليه; كلام must also be complete in sense.',
          ],
          examples: [
            { ar: 'صَدَقْتَ', en: '“you spoke truly” — you can stop there', note: 'كلام' },
            { ar: 'إِنْ تَصْدُقْ', en: '“if you speak truly…” — leaves you hanging', note: 'not كلام' },
          ] },

        { t: 'teach', title: 'موجب vs غير موجب',
          focus: [71, 72, 73, 74, 75, 76, 77],
          points: [
            '**المُوجَب** — no negation, prohibition or interrogation in it: ﴿أَعْبُدُ اللهَ الَّذِي يَتَوَفَّاكُمْ﴾.',
            '**غير المُوجَب** — contains one of the three: **نفي** or **نهي** or **استفهام**.',
          ] },

        { t: 'mcq', q: 'كلمة vs كلام — the definitions differ by one word each. Which pair is right?',
          choices: ['كلمة = قول مفرد · كلام = قول مفيد', 'كلمة = قول مفيد · كلام = قول مفرد', 'both = قول مفيد', 'both = قول مفرد'],
          correct: 0,
          why: 'One word (mufrad) vs beneficial complete speech (mufīd). Easy to confuse in exams — anchor it now.' },

        { t: 'mcq', q: '﴿لَا تُشْرِكْ بِاللهِ﴾ is…',
          choices: ['غير موجب — it contains a نهي', 'موجب', 'not كلام', 'خبرية'],
          correct: 0,
          why: 'Prohibition (nahy) is one of the three things that make speech ghayr mūjab (with nafy and istifhām).' },

        { t: 'mcq', q: 'What makes speech مُوجَب?',
          choices: ['Free of negation, prohibition and interrogation', 'Being a command', 'Beginning with a verb', 'Being true'],
          correct: 0,
          why: 'ما ليس فيه نفي أو نهي أو استفهام — affirmative speech.' },

        { t: 'bank', id: 'muq-bab-2--explain-line--explain-the-following-matn-line--1n' },
      ],
    },
  ],
});
