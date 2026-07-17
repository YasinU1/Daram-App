/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الباب الثالث (٣ب): المضاف والتام وأسماء الشرط + الباب الرابع (pp. 112–120) ──
   Authored directly from the book PDF. NO matn panels: these pages are not transcribed in the
   reader — teach cards use static ar:/arEn: blocks and carry `page:` (book page) so every key
   idea maps back to the book. No bank steps yet.                                              */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-bab-3b',
  titleAr: 'الْمُضَافُ والاسْمُ التَّامُّ وأَسْمَاءُ الشَّرْطِ',
  titleEn: 'The Noun II — iḍāfa, tamyīz-governors, condition nouns',
  pages: '112–120',
  sections: [

    /* ═══ 1. الإضافة المعنوية ═══ */
    {
      id: 'idafa-manawiyya',
      title: 'الاسم المضاف — الإضافة المعنوية',
      subtitle: 'أسماء لا تعمل عمل الفعل',
      steps: [
        { t: 'teach', title: 'The muḍāf and the two iḍāfas', page: 112,
          body: 'The second قسم of noun-governors: **أسماء لا تعمل عمل الفعل** — two ḍarbs. First, **الاسم المضاف**: it puts the muḍāf ilayhi in **jarr** ﴿مُحَمَّدٌ رَسُولُ اللهِ﴾. Iḍāfa is of two kinds (p. 113); the **معنوية (محضة)** is where the muḍāf is a noun **not** working like a verb.',
          points: [
            'A jarr-particle is implied inside it: **اللام** ﴿رَسُولُ اللهِ﴾ (possession or association) · **مِن** ﴿آيَاتُ الْقُرْآنِ﴾ — the muḍāf a part of the muḍāf ilayhi · **في** ﴿لَهُ عَاقِبَةُ الدَّارِ﴾ — the muḍāf ilayhi a ẓarf for the muḍāf.',
            'It gives the muḍāf **التعريف** if the muḍāf ilayhi is definite («كتابُ الرجلِ») or **التخصيص** if indefinite («كتابُ رجلٍ»).',
          ] },

        { t: 'teach', title: 'Deleting the muḍāf ilayhi', page: 113,
          points: [
            'With **two muḍāfs to one noun**: «جاءَ أبو— وأخو عليٍّ» — the first muḍāf keeps its trimmed state (no tanwīn, no plural-nūn); more common is «جاء أبو عليٍّ **وأخوه**».',
            'When the muḍāf is **الجهات الست** or كل / حسب / لا غيرُ / ليس غيرُ — it becomes **mabnī on ḍamm**: ﴿لِلهِ الْأَمْرُ مِنْ قَبْلُ وَمِنْ بَعْدُ﴾.',
            'After **إذ** — the muḍāf takes **tanwīn as substitute** (تنوين العوض): ﴿وَالْوَزْنُ يَوْمَئِذٍ الْحَقُّ﴾ (p. 114).',
          ] },

        { t: 'teach', title: 'Gender by contagion', page: 114,
          body: 'The muḍāf may **acquire the gender of its muḍāf ilayhi** — if the muḍāf ilayhi could stand in for the muḍāf: ﴿وَتَضَعُ كُلُّ ذَاتِ حَمْلٍ حَمْلَهَا﴾ (تضع feminine though كل is masculine) — unlike «طافَ ابنُ الأمِّ», where dropping ابن would wreck the sense.' },

        { t: 'mcq', q: 'Which implied particle sits inside each: ﴿رَسُولُ اللهِ﴾ · ﴿آيَاتُ الْقُرْآنِ﴾ · ﴿عَاقِبَةُ الدَّارِ﴾?',
          choices: ['اللام (association) · مِن (part-of) · في (ẓarf)', 'مِن · في · اللام', 'All اللام', 'في · اللام · مِن'],
          correct: 0,
          why: 'The معنوية iḍāfa always hides لام, مِن (when the muḍāf is a part of the muḍāf ilayhi), or في (when the muḍāf ilayhi is a ẓarf).' },

        { t: 'mcq', q: '«كتابُ الرجلِ» vs «كتابُ رجلٍ» — what does the iḍāfa give كتاب in each?',
          choices: ['التعريف with the definite muḍāf ilayhi; التخصيص with the indefinite', 'Both definite', 'Both merely lightened', 'التخصيص then التعريف'],
          correct: 0,
          why: 'الإضافة المعنوية تفيد التعريف إن كان المضاف إليه معرفة أو التخصيص إن كان نكرة.' },

        { t: 'mcq', q: '﴿لِلهِ الْأَمْرُ مِنْ قَبْلُ وَمِنْ بَعْدُ﴾ — why the ḍamm on قبلُ وبعدُ with no tanwīn?',
          choices: ['Their muḍāf ilayhi is deleted and they are of the words (الجهات الست وأخواتها) built on ḍamm in that state', 'They are marfūʿ as mubtadaʾ', 'A pausal form', 'A qirāʾah anomaly'],
          correct: 0,
          why: 'الجهات الست، كل، حسب، لا غير، ليس غير: with the muḍāf ilayhi suppressed they go mabnī on ḍamm. After إذ the substitute is tanwīn: يومئذٍ.' },

        { t: 'written',
          prompt: 'Define الإضافة المعنوية, the three implied particles, its تعريف/تخصيص effect, the three cases of deleting the muḍāf ilayhi, and the gender-acquisition rule.',
          model: 'الإضافة المعنوية (المحضة) is where the muḍāf is a noun not working like a verb; it jarrs the muḍāf ilayhi ﴿محمد رسول الله﴾. Implied in it: اللام ﴿رسول الله﴾ for ownership/association, مِن ﴿آيات القرآن﴾ when the muḍāf is part of the muḍāf ilayhi, or في ﴿له عاقبة الدار﴾ when the muḍāf ilayhi is its ẓarf. It gives التعريف with a definite muḍāf ilayhi («كتاب الرجل») and التخصيص with an indefinite one («كتاب رجل»). Deleting the muḍāf ilayhi: with two muḍāfs to one noun the first keeps its trimmed state «جاء أبو— وأخو عليٍّ» (more commonly «أبو عليٍّ وأخوه»); the six directions and كل/حسب/لا غير/ليس غير go mabnī on ḍamm ﴿لله الأمر من قبلُ ومن بعدُ﴾; and after إذ the muḍāf takes تنوين العوض ﴿والوزن يومئذٍ الحق﴾. The muḍāf may acquire its muḍāf ilayhi’s gender if the latter could stand in for it ﴿وتضع كلُّ ذاتِ حمل حملَها﴾, unlike «طاف ابنُ الأمِّ».' },
      ],
    },

    /* ═══ 2. الإضافة اللفظية ═══ */
    {
      id: 'idafa-lafziyya',
      title: 'الإضافة اللفظية وأحكام المضاف',
      subtitle: 'غير محضة · مواقعها · أل على المضاف',
      steps: [
        { t: 'teach', title: 'اللفظية — lightening, not defining', page: 114,
          body: 'The **إضافة لفظية (غير محضة)**: the muḍāf is a **مشتق بمعنى الفعل** and the muḍāf ilayhi its fāʿil or mafʿūl ﴿إِنَّا مُرْسِلُو النَّاقَةِ﴾ — the muḍāf ilayhi may even be a ẓarf ﴿مَلِكِ يَوْمِ الدِّينِ﴾.',
          points: [
            'It gives **no تعريف ولا تخصيص** — only lightening: dropping the **tanwīn** or the **nūn**: «مُرْسِلُو الناقةِ» is lighter than «مُرْسِلُونَ الناقةَ» ﴿وَالْمُقِيمِي الصَّلَاةِ﴾.',
            'To define such a muḍāf you must put **أل** on it.',
            'It sits on **نية تقدير الانفصال**: «مقيمُ الصلاةِ» is conceived as «مقيمٌ الصلاةَ» — the muḍāf ilayhi a fāʿil or mafʿūl in intent (p. 115).',
          ] },

        { t: 'teach', title: 'Where اللفظية lives — and the معنوية trap', page: 115,
          body: 'The iḍāfa is لفظية when the muḍāf is:',
          points: [
            'a **صفة مشبهة** to its fāʿil ﴿شَدِيدُ الْعِقَابِ﴾ · an **اسم مفعول** to its nāʾib fāʿil «التائبُ مقبولُ التوبةِ»,',
            'an **اسم فاعل** — of a لازم to its fāʿil ﴿إِنَّ رَبَّكَ وَاسِعُ الْمَغْفِرَةِ﴾, or of a متعدٍّ to its mafʿūl **when it denotes** الحال «ما لكَ كاشفَ الرأسِ», المستقبل ﴿هَذَا عَارِضٌ مُمْطِرُنَا﴾, or المتجدد ﴿إِنَّهُ كَانَ صَادِقَ الْوَعْدِ﴾.',
            '**BUT**: an اسم فاعل of a متعدٍّ muḍāf to its mafʿūl denoting **الماضي** ﴿فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ جَاعِلِ الْمَلَائِكَةِ رُسُلًا﴾ or **الدوام** ﴿غَافِرِ الذَّنْبِ وَقَابِلِ التَّوْبِ﴾ makes the iḍāfa **معنوية**.',
          ] },

        { t: 'teach', title: 'أحكام المضاف and أل on the muḍāf', page: 116,
          points: [
            'The muḍāf drops its **tanwīn** ﴿رَسُولُ اللهِ﴾, its **dual nūn** ﴿إِنَّا رَسُولَا رَبِّكَ﴾, and its **plural nūn** ﴿وَالْمُقِيمِي الصَّلَاةِ﴾.',
            '**أل enters the muḍāf only in اللفظية**, in five places: the muḍāf is dual «الضاربا زيدٍ» · a masc. sound plural ﴿وَالْمُقِيمِي الصَّلَاةِ﴾ · the muḍāf ilayhi has أل «المُكرِمُ الرجلِ» · or is muḍāf to an أل-noun «المكرمُ معلِّمِ الأولادِ» · or to a pronoun referring to an أل-noun «الرجلُ المكرمُ معلِّمِهِ».',
            'Separating muḍāf from muḍāf ilayhi is barred — except a شبه جملة in some heard cases: «فهل أنتم تاركو **لي** صاحبي» (p. 117). Always-muḍāf nouns: كل، بعض، أي، حيث. And a موصوف may be muḍāf to its صفة ﴿بِجَانِبِ الْغَرْبِيِّ﴾, a صفة to its موصوف ﴿حَقَّ تِلَاوَتِهِ﴾, a thing to itself for clarification when the two words differ ﴿مِنْ حَبْلِ الْوَرِيدِ﴾ (p. 117).',
          ] },

        { t: 'mcq', q: '«إنّا مُرْسِلُو النَّاقَةِ» — what did the iḍāfa achieve, given مرسلو is about to happen (not definite)?',
          choices: ['Only تخفيف — dropping the plural nūn of مرسلون; اللفظية never defines or specifies', 'It defined مرسلو', 'It specified it', 'It made الناقة a fāʿil'],
          correct: 0,
          why: 'الإضافة اللفظية لا تفيد التعريف ولا التخصيص بل تخفيف التنوين أو النون — hence the أل needed to define ﴿والمقيمي الصلاة﴾.' },

        { t: 'mcq', q: '﴿غَافِرِ الذَّنْبِ﴾ describes Allah with a definite صفة. Why can this muḍāf be definite when لفظية-iḍāfa cannot define?',
          choices: ['It denotes الدوام, so the iḍāfa is معنوية, which does give تعريف', 'أل is implied', 'It cannot — the verse is مشكل with no answer', 'غافر is a صفة مشبهة'],
          correct: 0,
          why: 'An ism fāʿil (متعدٍّ) muḍāf to its mafʿūl denoting الماضي or الدوام makes the iḍāfa معنوية — same for ﴿فاطر السماوات﴾ (past).' },

        { t: 'mcq', q: '«الضَّارِبَا زَيْدٍ» carries أل on a muḍāf. What licenses it?',
          choices: ['Lafẓiyya-iḍāfa with a dual muḍāf — one of the five licensed places', 'أل may always join a muḍāf', 'It is an error', 'زيد has أل implicitly'],
          correct: 0,
          why: 'The five: dual muḍāf, masc. sound plural muḍāf, muḍāf ilayhi with أل, muḍāf ilayhi muḍāf to an أل-noun, or to a pronoun of an أل-noun.' },

        { t: 'mcq', q: '﴿يَتْلُونَهُ حَقَّ تِلَاوَتِهِ﴾ — the iḍāfa here is of which curious type?',
          choices: ['A صفة muḍāf to its موصوف (= تلاوتَه الحقَّ)', 'A موصوف to its صفة', 'A thing to itself', 'Plain possession'],
          correct: 0,
          why: 'Three special iḍāfas: موصوف→صفة ﴿بجانب الغربي﴾, صفة→موصوف ﴿حق تلاوته﴾, and a thing to itself for بيان when the words differ ﴿حبل الوريد﴾.' },

        { t: 'written',
          prompt: 'Define الإضافة اللفظية and its effect; list where it occurs (including when the ism-fāʿil iḍāfa flips to معنوية); and give the أحكام المضاف plus the five places أل may enter the muḍāf.',
          model: 'الإضافة اللفظية (غير المحضة): the muḍāf is a مشتق بمعنى الفعل and the muḍāf ilayhi its fāʿil or mafʿūl ﴿إنا مرسلو الناقة﴾, sometimes a ẓarf ﴿ملك يوم الدين﴾. It gives no تعريف or تخصيص — only lightening of the tanwīn or nūn ﴿والمقيمي الصلاة﴾ — and is conceived على نية الانفصال («مقيم الصلاة» = «مقيمٌ الصلاةَ»); to define its muḍāf, أل must enter it. It occurs when the muḍāf is: a صفة مشبهة to its fāʿil ﴿شديد العقاب﴾; an اسم مفعول to its nāʾib fāʿil «مقبول التوبة»; an اسم فاعل of a لازم to its fāʿil ﴿واسع المغفرة﴾, or of a متعدٍّ to its mafʿūl denoting الحال «كاشف الرأس», المستقبل ﴿عارض ممطرنا﴾, or المتجدد ﴿صادق الوعد﴾ — while denoting الماضي ﴿فاطر السماوات، جاعل الملائكة رسلا﴾ or الدوام ﴿غافر الذنب وقابل التوب﴾ makes it معنوية. أحكام المضاف: it sheds tanwīn ﴿رسول الله﴾, dual nūn ﴿إنا رسولا ربك﴾, plural nūn ﴿والمقيمي الصلاة﴾. أل enters the muḍāf only in اللفظية, in five places: dual muḍāf «الضاربا زيد»; masc. sound plural ﴿والمقيمي الصلاة﴾; muḍāf ilayhi with أل «المكرم الرجل»; muḍāf ilayhi muḍāf to an أل-noun «المكرم معلم الأولاد»; muḍāf ilayhi muḍāf to a pronoun referring to an أل-noun «الرجل المكرم معلمه». Separation of the pair is heard only with شبه جملة «فهل أنتم تاركو لي صاحبي»; كل وبعض وأي وحيث are always muḍāf.' },
      ],
    },

    /* ═══ 3. الاسم التام ═══ */
    {
      id: 'ism-tamm',
      title: 'الضرب الثاني: الاسم المبهم التام',
      subtitle: 'ما ينصب تمييز الذات',
      steps: [
        { t: 'teach', title: 'The complete noun governs tamyīz', page: 117,
          ar: 'وَهُوَ يَنْصِبُ تَمْيِيزَ الذَّاتِ',
          arEn: 'The vague noun, complete in form, naṣbs the entity-tamyīz.',
          body: 'The second ḍarb of non-verb-like governors: **الاسم المبهم معنًى التامُّ لفظًا**. “Complete” (التام) = it can no longer be muḍāf to another noun. A noun is تام by being:',
          points: [
            'a **pronoun** ﴿إِنَّهَا سَاءَتْ مُسْتَقَرًّا وَمُقَامًا﴾ · an **ism ishāra** ﴿مَاذَا أَرَادَ اللهُ بِهَذَا مَثَلًا﴾ · already **muḍāf** ﴿مِلْءُ الْأَرْضِ ذَهَبًا﴾ (p. 118),',
            'by **tanwīn** — uttered ﴿مِثْقَالَ ذَرَّةٍ خَيْرًا﴾ or implied: «عندي مثاقيلُ ذهبًا», «كم يومًا صمتَ؟» (p. 118),',
            'by the **dual nūn** «عندي رطلانِ زيتًا» or the **pseudo-plural nūn** ﴿وَحَمْلُهُ وَفِصَالُهُ ثَلَاثُونَ شَهْرًا﴾ (p. 118).',
          ] },

        { t: 'mcq', q: '﴿وَحَمْلُهُ وَفِصَالُهُ ثَلَاثُونَ شَهْرًا﴾ — what naṣbs شهرًا?',
          choices: ['ثلاثون — a noun made تام by its pseudo-plural nūn, so it governs the entity-tamyīz', 'The verb حمل', 'A deleted فعل', 'The wāw'],
          correct: 0,
          why: 'The تام noun (pronoun / ishāra / muḍāf / tanwīned / nūn-ed) naṣbs تمييز الذات. Nothing verbal is needed.' },

        { t: 'mcq', q: '«كَمْ يَوْمًا صُمْتَ؟» — كم has no visible tanwīn. How is it تام?',
          choices: ['Its tanwīn is تقديرًا — implied completeness still governs the tamyīz', 'It is muḍāf to يومًا', 'صمت governs يومًا', 'The sentence is anomalous'],
          correct: 0,
          why: 'Tanwīn counts لفظًا ﴿مثقال ذرة خيرا﴾ or تقديرًا — «عندي مثاقيلُ ذهبًا» and «كم يومًا» both qualify.' },

        { t: 'mcq', q: 'Why is a muḍāf noun like ﴿مِلْءُ الْأَرْضِ﴾ counted as تام?',
          choices: ['It can take no SECOND muḍāf ilayhi — completeness means no further iḍāfa is possible', 'Because it is definite', 'Because أرض has أل', 'It is not — ذهبًا is a ḥāl'],
          correct: 0,
          why: 'الاسم التام ما يمتنع أن يكون مضافًا إلى اسم آخر — pronoun, ishāra, muḍāf, tanwīn, or the duals/plural nūns all seal the noun.' },

        { t: 'written',
          prompt: 'Define الاسم المبهم التام, what it governs, and the six ways a noun becomes تام, each with an example.',
          model: 'الاسم المبهم معنى التام لفظًا naṣbs تمييز الذات. The complete noun is one that can no longer be muḍāf to another noun. It is تام by being: a pronoun ﴿إنها ساءت مستقرا ومقاما﴾; an ism ishāra ﴿ماذا أراد الله بهذا مثلا﴾; itself muḍāf ﴿ملء الأرض ذهبا﴾; tanwīned — uttered ﴿مثقال ذرة خيرا﴾ or implied «عندي مثاقيل ذهبا»، «كم يومًا صمت»; carrying the dual nūn «عندي رطلان زيتا»; or the pseudo-plural nūn ﴿وحمله وفصاله ثلاثون شهرا﴾.' },
      ],
    },

    /* ═══ 4. أسماء الشرط ═══ */
    {
      id: 'asma-shart',
      title: 'النوع الثاني: أسماء تعمل في الفعل',
      subtitle: 'أسماء الشرط الأحد عشر وإعرابها',
      steps: [
        { t: 'teach', title: 'Eleven nouns that jazm two verbs', page: 118,
          body: 'The second نوع of operating nouns works **on the verb**: أسماء شرط تجزم فعلين — the first called شرط, the second جواب/جزاء. **Eleven**:',
          points: [
            '**مَن** — rational ﴿مَنْ يَعْمَلْ سُوءًا يُجْزَ بِهِ﴾ · **ما** — non-rational ﴿وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ اللهُ﴾ · **مهما** — non-rational ﴿مَهْمَا تَأْتِنَا بِهِ مِنْ آيَةٍ﴾ or time «مهما تدخلِ المسجدَ الحرامَ تَرَ الناسَ يطوفون».',
            '**متى · إذاما · أيّان** — time: «متى تحسُدْ تَهْلِكْ»، «أيّانَ يأتِ الموتُ يُغلَقْ بابُ التوبةِ» · **أين · أينما · أنّى** — place ﴿أَيْنَ مَا تَكُونُوا يُدْرِكْكُمُ الْمَوْتُ﴾، «أنّى تُذنِبْ يعلمْهُ اللهُ» · **حيثما** — place and time (أصلها حيث + ما الكافة) (p. 119).',
            '**أيّ** ﴿أَيًّا مَا تَدْعُوا﴾ — its iʿrāb follows **whatever it is muḍāf to** (p. 119).',
          ] },

        { t: 'teach', title: 'Iʿrāb of مَن، ما، مهما', page: 118,
          body: 'These three (unlike their sisters) are never مفعول فيه; their iʿrāb turns on the شرط-verb:',
          points: [
            'Verb needs no object → **mubtadaʾ**: «مَن يصدُقْ ينجُ».',
            'Verb has an object but is **busied with the noun’s pronoun** (اشتغال) → still **mubtadaʾ**: «من تُكرِمْهُ يُكرِمْكَ» (p. 119).',
            'Verb’s object slot is **free** → the noun is a **fronted مفعول به**: «من تُكرِمْ يُكرِمْكَ» (p. 119).',
          ],
          after: 'متى وإذاما وأيان وأين وأينما وأنى وحيثما are all fronted مفعول فيه (p. 119).' },

        { t: 'teach', title: 'إذا ولمّا — conditional but not jāzim', page: 120,
          body: '**إذا and لمّا الظرفية** are two **muḍāf nouns carrying شرط meaning without jazm**: ﴿وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا﴾ ﴿فَلَمَّا جَاءَ أَمْرُنَا نَجَّيْنَا صَالِحًا﴾.',
          after: 'And الفصل الثاني: the NON-operating noun = every noun besides شبه الفعل, the complete vague noun, the muḍāf, and أسماء الشرط (p. 120).' },

        { t: 'mcq', q: '«مَنْ تُكْرِمْهُ يُكْرِمْكَ» vs «مَنْ تُكْرِمْ يُكْرِمْكَ» — the iʿrāb of من differs. How?',
          choices: ['First: mubtadaʾ (the verb is busied with its هاء); second: fronted مفعول به (the object slot is free)', 'Both mubtadaʾ', 'Both مفعول به', 'First فاعل, second مفعول'],
          correct: 0,
          why: 'The اشتغال test: if the شرط-verb already consumed the pronoun, من stays mubtadaʾ; if the slot is empty, من fills it as a fronted object.' },

        { t: 'mcq', q: 'Which أسماء شرط are always fronted مفعول فيه?',
          choices: ['متى، إذاما، أيان، أين، أينما، أنّى، حيثما — the time/place set', 'مَن وما ومهما', 'أيّ only', 'All eleven'],
          correct: 0,
          why: 'The three general ones (من/ما/مهما) are mubtadaʾ or fronted object, never مفعول فيه; أيّ follows its muḍāf ilayhi; the rest are adverbial.' },

        { t: 'mcq', q: 'What separates إذا ولمّا from the eleven أسماء الشرط?',
          choices: ['They carry شرط meaning but do NOT jazm — muḍāf ẓarf-nouns ﴿وإذا خاطبهم الجاهلون قالوا سلاما﴾', 'They jazm three verbs', 'They are particles', 'They only appear in poetry'],
          correct: 0,
          why: 'اسمان مضافان يتضمنان معنى الشرط غير جازمين — condition-flavoured but outside the jazm system.' },

        { t: 'mcq', q: 'أيّ in ﴿أَيًّا مَا تَدْعُوا﴾ takes naṣb. What decides its iʿrāb in general?',
          choices: ['Whatever it is muḍāf to — أي inherits the function of its muḍāf ilayhi', 'It is always manṣūb', 'It is always mubtadaʾ', 'The جواب verb'],
          correct: 0,
          why: 'يكون إعراب أيّ بحسب ما يضاف إليه — here it stands for the callable name, so a fronted object.' },

        { t: 'written',
          prompt: 'List the eleven أسماء الشرط grouped by what they range over; explain the three-way iʿrāb rule for من/ما/مهما; and state the status of إذا ولمّا.',
          model: 'Eleven jazm-ing condition nouns: من for the rational ﴿من يعمل سوءا يجز به﴾; ما ﴿وما تفعلوا من خير يعلمه الله﴾ and مهما ﴿مهما تأتنا به من آية﴾ for the non-rational (مهما also for time); متى، إذاما، أيان for time («متى تحسد تهلك»، «أيان يأت الموت يغلق باب التوبة»); أين، أينما، أنّى for place ﴿أين ما تكونوا يدرككم الموت﴾؛ «أنى تذنب يعلمه الله»; حيثما for place and time (حيث + ما الكافة); and أيّ ﴿أيا ما تدعوا﴾ whose iʿrāb follows its muḍāf ilayhi. Iʿrāb of من/ما/مهما: if the شرط-verb needs no object — mubtadaʾ «من يصدق ينج»; if it needs one but is busied with the noun’s pronoun — mubtadaʾ «من تكرمه يكرمك»; if the object slot is free — fronted مفعول به «من تكرم يكرمك»; these three are never مفعول فيه, while متى/إذاما/أيان/أين/أينما/أنى/حيثما are fronted مفعول فيه. إذا ولمّا الظرفية are muḍāf nouns with شرط meaning but no jazm ﴿فلما جاء أمرنا نجينا صالحا﴾.' },
      ],
    },

    /* ═══ 5. الباب الرابع: العامل المعنوي ═══ */
    {
      id: 'amil-manawi',
      title: 'الباب الرابع في العامل المعنوي',
      subtitle: 'الابتداء · خلو المضارع · معنى الفعل',
      steps: [
        { t: 'teach', title: 'Three governors you cannot hear', page: 120,
          body: 'The fourth bāb: the **abstract governor** (العامل المعنوي) — three:',
          points: [
            '**الابتداء** — raises mubtadaʾ and khabar ﴿مُحَمَّدٌ رَسُولُ اللهِ﴾ (some say: الابتداء governs the mubtadaʾ, and the mubtadaʾ governs the khabar).',
            '**خلوّ المضارع عن الناصب والجازم** — the muḍāriʿ’s freedom from naṣb/jazm devices is itself what raises it: ﴿وَلَا أُشْرِكُ بِرَبِّي أَحَدًا﴾.',
            '**معنى الفعل في الاسم أو الحرف** — verb-meaning inside a noun or particle **naṣbs the ḥāl**.',
          ] },

        { t: 'teach', title: 'Verb-meaning that naṣbs a ḥāl — six carriers', page: 120,
          points: [
            '**Ism ishāra** ﴿فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً﴾ (= أشيرُ) · **استفهام devices** ﴿فَمَا لَهُمْ عَنِ التَّذْكِرَةِ مُعْرِضِينَ﴾ (= أسألُ),',
            '**تشبيه devices** «كأنَّ خالدًا مُقبِلًا أسدٌ» (= أُشبِّه) · **تمنٍّ وترجٍّ devices** «ليتَ السرورَ دائمًا عندنا» (= أتمنّى وأرجو),',
            '**حرف التنبيه** «ها هو ذا البدرُ طالعًا» (= أُنبِّه) · the **ظرف مستقر** «الفرسُ لكَ وحدَكَ» (= استقرَّ).',
          ] },

        { t: 'mcq', q: 'What raises the muḍāriʿ in ﴿وَلَا أُشْرِكُ بِرَبِّي أَحَدًا﴾?',
          choices: ['Its freedom from any nāṣib and jāzim — an abstract governor', 'The لا', 'An implied أنْ', 'The wāw'],
          correct: 0,
          why: 'خلو المضارع عن الناصب والجازم is the second عامل معنوي. لا النافية neither naṣbs nor jazms.' },

        { t: 'mcq', q: '﴿فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً﴾ — what naṣbs خاويةً?',
          choices: ['The verb-meaning in تلك (= أشير) — one of the six carriers of معنى الفعل governing the ḥāl', 'بيوتهم', 'A deleted كان', 'The فاء'],
          correct: 0,
          why: 'اسم الإشارة carries أشير; likewise استفهام (أسأل), تشبيه (أشبّه), تمنٍّ/ترجٍّ, تنبيه (أنبّه), and the ظرف مستقر (استقرّ).' },

        { t: 'mcq', q: 'The three أنواع of العامل المعنوي are…',
          choices: ['الابتداء; the muḍāriʿ’s freedom from nāṣib/jāzim; verb-meaning in a noun or particle', 'الفعل والحرف والاسم', 'الجر والنصب والجزم', 'الابتداء والقسم والشرط'],
          correct: 0,
          why: 'Exactly the bāb’s list — the first raises mubtadaʾ+khabar, the second the muḍāriʿ, the third naṣbs the ḥāl.' },

        { t: 'written',
          prompt: 'Enumerate the three abstract governors with what each raises/naṣbs, and the six carriers of verb-meaning that govern the ḥāl.',
          model: 'العامل المعنوي is three: (1) الابتداء — it raises the mubtadaʾ and the khabar ﴿محمد رسول الله﴾ (on one view it governs the mubtadaʾ and the mubtadaʾ governs the khabar); (2) خلو المضارع عن الناصب والجازم — it raises the muḍāriʿ ﴿ولا أشرك بربي أحدا﴾; (3) معنى الفعل في الاسم أو الحرف — it naṣbs the ḥāl, carried by: the ism ishāra ﴿فتلك بيوتهم خاوية﴾, the استفهام devices ﴿فما لهم عن التذكرة معرضين﴾, the تشبيه devices «كأن خالدا مقبلا أسد», the تمني والترجي devices «ليت السرور دائما عندنا», حرف التنبيه «ها هو ذا البدر طالعا», and the ظرف المستقر «الفرس لك وحدك».' },
      ],
    },
  ],
});
