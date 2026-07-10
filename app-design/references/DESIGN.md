# app DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 15 · Fonts: 2 · Components: 0
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: subtle

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![app Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a cool, approachable feel. The light background emphasizes content clarity. Typography uses **Mulish** throughout — a clean, modern choice that maintains consistency. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 16, 20px. The palette is predominantly monochromatic with **#0000ee** as the single accent color — used sparingly for interactive elements and emphasis. Motion is subtle — smooth transitions (150-300ms) ease state changes without drawing attention.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#ffffff` | background | Page background, darkest surface |
| surface | `#f0f8ff` | surface | Card and panel backgrounds |
| text-primary | `#000000` | text-primary | Headings and body text |
| text-muted | `#555f71` | text-muted | Captions, placeholders, secondary info |
| accent | `#0000ee` | accent | CTAs, links, focus rings, active states |
| info | `#0077dd` | info | Informational highlights |
| unknown | `#8791a5` | unknown | Palette color |
| unknown | `#e3e2e2` | unknown | Palette color |
| unknown | `#bdc7dc` | unknown | Palette color |
| unknown | `#cb70c3` | unknown | Palette color |
| unknown | `#d5e3ff` | unknown | Palette color |
| unknown | `#2f91ff` | unknown | Palette color |
| unknown | `#ffff00` | unknown | Palette color |
| unknown | `#64bff4` | unknown | Palette color |
| unknown | `#707577` | unknown | Palette color |

### CSS Variable Tokens

```css
--primary-high-surface: #2f91ff;
--primary-high-surface-rgb: 47, 145, 255;
--primary-medium-surface: #d5e3ff;
--primary-medium-surface-rgb: 213, 227, 255;
--primary-low-surface: #ebf1ff;
--primary-low-surface-rgb: 235, 241, 255;
--background-base: #ffffff;
--background-base-rgb: 255, 255, 255;
--background-overlay: #0077dd;
--background-overlay-rgb: 0, 119, 221;
--foreground: #ffffff;
--foreground-rgb: 255, 255, 255;
--foreground-variant-overlay: #6d778b;
--foreground-variant-overlay-rgb: 109, 119, 139;
--primary-high-content: #0077dd;
--primary-high-content-rgb: 0, 119, 221;
--primary-medium-content: #74adff;
--primary-medium-content-rgb: 116, 173, 255;
--primary-low-content: #a7c8ff;
--primary-low-content-rgb: 167, 200, 255;
```


---

## 3. Typography Rules

**Font Stack:**
- **Mulish** — Heading 1, Heading 2, Heading 3, Body, Caption
- **SFMono-Regular** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Mulish";
  src: url("https://app.senecalearning.com/fonts/Mulish/Mulish-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Mulish";
  src: url("https://app.senecalearning.com/fonts/Mulish/Mulish-Bold.woff2") format("woff2");
  font-weight: 700;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Mulish | 20px | 700 |
| Heading 2 | Mulish | 16px | 700 |
| Heading 3 | Mulish | 12px | 700 |
| Body | Mulish | 2em | 400 |
| Caption | Mulish | 1em | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Use **Mulish** for all text — do not mix font families
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

No components detected. Scan `src/components/` or `components/` to populate this section.

---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 16, 20, 22, 24, 30, 32
- **Border radius:** 1px, 3px, 4px, 6px, 8px, 12px, 30%, 32px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `inset 0 0 0 2px #64bff4`
- `inset 0px 0px 0px 2px var(--neutral-high-content)`
- `rgb(0, 119, 221) 0px 0px 0px 2px inset`

### Floating — dropdowns, popovers, modals

- `rgba(47, 145, 255, 0.05) 0px 4px 14px 0px`

### Overlay — full-screen overlays, top-level dialogs

- `0 2px 23px 12px #96969633`

### Z-Index Scale

`10, 20`



---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### CSS Animations

- `@keyframes _sheen_6vzec_1`

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#0000ee` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Use **Mulish** for all UI text
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 1px, 3px, 4px, 6px, 8px

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't mix font families — use Mulish consistently
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 599px | css |
| md | 700px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f0f8ff
Border: 1px solid var(--border)
Radius: 8px
Padding: 16px
Font: Mulish
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #0000ee, text white
Ghost: bg transparent, border var(--border)
Padding: 8px 16px
Radius: 8px
Hover: opacity 0.9 or lighter shade
Focus: ring with #0000ee
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1280px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f0f8ff
Label: #555f71 (muted, 12px, uppercase)
Value: #000000 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid var(--border)
Focus: border-color #0000ee
Label: #555f71 12px
Spacing: 16px between fields
Radius: 8px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Mulish, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
