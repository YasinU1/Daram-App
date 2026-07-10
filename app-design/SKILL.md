---
name: app-design
description: Design system skill for app. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# app Design System

You are building UI for **app**. Light-themed, cool palette, sans-serif typography (Mulish), compact density on a 4px grid.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![app Homepage](screenshots/homepage.png)

> Read `references/DESIGN.md` for full token details.

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Single typeface** — Mulish carries all text. Hierarchy comes from size, weight, and color — never font mixing.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **cool palette** — the color temperature runs cool, matching the sans-serif typography.
- **Restrained accent** — `#0000ee` is the only pop of color. Used exclusively for CTAs, links, focus rings, and active states.
- **Subtle motion** — transitions smooth state changes. Keep durations under 300ms, use ease-out curves.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#ffffff` | Page/app background |
| Surface | `--surface` | `#f0f8ff` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#000000` | Headings, body text |
| Text Muted | `--text-muted` | `#555f71` | Captions, placeholders |
| Accent | `--accent` | `#0000ee` | CTAs, links, focus rings |

### Extended Palette

- `#0077dd`
- `#8791a5`
- `#e3e2e2` — Light surface or highlight color
- `#bdc7dc`
- `#cb70c3`
- `#d5e3ff` — Light surface or highlight color
- `#2f91ff`
- `#ffff00`

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

## Typography

### Font Stack

- **Mulish** — Heading 1, Heading 2, Heading 3, Body, Caption
- **SFMono-Regular** — Code

### Font Sources

```css
@font-face {
  font-family: "Mulish";
  src: url("fonts/Mulish-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Mulish";
  src: url("fonts/Mulish-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Mulish | 20px | 700 |
| Heading 2 | Mulish | 16px | 700 |
| Heading 3 | Mulish | 12px | 700 |
| Body | Mulish | 2em | 400 |
| Caption | Mulish | 1em | 400 |
| Code | SFMono-Regular | 14px | 400 |

### Typography Rules

- All text uses **Mulish** — never add another font family
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`2, 4, 6, 8, 10, 12, 16, 20, 22, 24, 30, 32` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `1px, 3px, 4px, 6px, 8px, 12px, 30%, 32px`
Default: `8px`

### Breakpoints

| Name | Value |
|------|-------|
| sm | 599px |
| md | 700px |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #f0f8ff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: inset 0 0 0 2px #64bff4;
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #0000ee;
  color: #000000;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #cccccc;
  color: #000000;
  border-radius: 8px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 8px 12px;
  color: #000000;
  font-size: 14px;
}
.input:focus { border-color: #0000ee; outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #f0f8ff;
  color: #555f71;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #f0f8ff;
  border-radius: 32px;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
  box-shadow: rgba(47, 145, 255, 0.05) 0px 4px 14px 0px;
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #555f71;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #cccccc;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #cccccc;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
}
.nav-link {
  color: #555f71;
  padding: 8px 12px;
  border-radius: 8px;
  transition: color 150ms;
}
.nav-link:hover { color: #000000; }
.nav-link.active { color: #0000ee; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

## Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without calling attention.

### CSS Animations

- `_sheen_6vzec_1`

### Motion Tokens

- **Duration scale:** `200ms`, `250ms`, `400ms`
- **Easing functions:** `ease-in`
- **Animated properties:** `transform`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (200ms) for micro-interactions, long (400ms) for page transitions
- **Easing:** Use `ease-in` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

### Shadow Tokens

- Subtle: `inset 0 0 0 2px #64bff4`
- Subtle: `inset 0px 0px 0px 2px var(--neutral-high-content)`
- Subtle: `rgb(0, 119, 221) 0px 0px 0px 2px inset`
- Floating (dropdowns, popovers): `rgba(47, 145, 255, 0.05) 0px 4px 14px 0px`
- Overlay (modals, dialogs): `0 2px 23px 12px #96969633`

### Z-Index Scale

`10, 20`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only Mulish and SFMono-Regular are allowed
- **No arbitrary border-radius** — use the scale: 1px, 3px, 4px, 6px, 8px, 12px, 32px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Mulish, SFMono-Regular only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `/favicon.png`
- **Site URL:** `https://app.senecalearning.com/classroom/course/df1578de-6327-45fa-9420-1619f20f680e/section/b61a3854-458d-456c-8998-89423dc8dace/session`
- **Brand color:** `#0000ee`
- **Brand typeface:** Mulish

## Quick Reference

```
Background:     #ffffff
Surface:        #f0f8ff
Text:           #000000 / #555f71
Accent:         #0000ee
Border:         (not extracted)
Font:           Mulish
Spacing:        4px grid
Radius:         8px
Components:     0 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for app
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "app" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

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

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/Mulish-Black.ttf`
- `fonts/Mulish-Bold.ttf`
- `fonts/Mulish-ExtraBold.ttf`
- `fonts/Mulish-ExtraLight.ttf`
- `fonts/Mulish-Light.ttf`
- `fonts/Mulish-Medium.ttf`
- `fonts/Mulish-Regular.ttf`
- `fonts/Mulish-SemiBold.ttf`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

