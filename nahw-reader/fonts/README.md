# Fonts — matching the book

The reader maps each Arabic font to a **role** so it can look identical to the
printed book. Roles are CSS variables in `../index.html`:

| Role | Variable | Used for | Font now |
|------|----------|----------|----------|
| Qur'an | `--font-quran` | Qur'anic text (basmala, āyāt in ﴿ ﴾) | **KFGQPC Uthmanic Script HAFS** |
| Body | `--font-body-ar` | the running matn / prose | KFGQPC Uthmanic Script HAFS (placeholder) |
| Heading | `--font-heading-ar` | red chapter titles, page title | Arslan Wessam B → falls back to KFGQPC |

## Files here

- `KFGQPC-UthmanicScriptHafs.woff2` / `.otf` — the Mushaf Qur'an naskh (added).

## To match the book more exactly

Drop the book's own faces in and point the role at them:

1. Add the file, e.g. `fonts/MyBookNaskh.woff2`.
2. Register it near the top of `index.html`:

   ```css
   @font-face {
     font-family: 'My Book Naskh';
     src: url('fonts/MyBookNaskh.woff2') format('woff2');
     font-display: swap;
   }
   ```

3. Put it first in the matching role variable, e.g.
   `--font-body-ar: 'My Book Naskh', 'KFGQPC Uthmanic Script HAFS', serif;`

The book uses (at least) a **decorative heading face** (the red titles like
الباب الأول في الكلمة) and a **naskh body face**. Add those two and the page
will read like the original. Until then everything renders in the Mushaf font.

### Converting .ttf/.otf → .woff2 (smaller, faster)

    pip install fonttools brotli
    python3 -m fontTools ttLib.woff2 compress MyFont.ttf -o MyFont.woff2
