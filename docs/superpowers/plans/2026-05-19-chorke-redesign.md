# Chorke-Inspired Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign "Kopie Profilwebsite" to match the Chorke reference — hero card container, cream-to-lavender gradient, pill nav CTA, mixed-case headings, hexagonal image clip, colored service cards, badge sticker.

**Architecture:** All changes are pure CSS/HTML. New color tokens are added to `variables.css` so they propagate everywhere. HTML changes are minimal (badge element + nav button). No JS changes needed.

**Tech Stack:** Vanilla CSS, HTML, Vite dev server (`npm run dev` in `Kopie Profilwebsite/`)

**Working directory for all commands:** `/Users/florian/Dropbox/WORKSPACE/Kopie Profilwebsite`

---

## File Map

| File | Changes |
|------|---------|
| `src/styles/variables.css` | Add lavender, yellow, green, pink tokens + hero gradient |
| `src/styles/base.css` | Remove uppercase from headings, adjust font-weight |
| `src/styles/layout.css` | Hero card container, gradient bg, hexagonal image, section spacing |
| `src/styles/components.css` | Nav pill CTA, colored service cards, badge sticker |
| `index.html` | Add nav CTA button, badge sticker element |

---

### Task 1: New Color Tokens

**Files:**
- Modify: `src/styles/variables.css`

- [ ] **Step 1: Add tokens**

Replace the entire `:root` block in `src/styles/variables.css`:

```css
:root {
  /* Original palette */
  --color-royal-blue:   #003D82;
  --color-warm-orange:  #FF9019;
  --color-anthrazite:   #2A2A2A;
  --color-cream:        #F5F1EB;
  --color-white:        #FFFFFF;
  --color-light-border: #E0DDD8;

  /* Chorke palette additions */
  --color-lavender:     #D8C8F0;
  --color-card-yellow:  #F0E040;
  --color-card-green:   #4DDC7A;
  --color-card-pink:    #EAD4F8;
  --hero-gradient: linear-gradient(135deg, var(--color-cream) 0%, var(--color-lavender) 100%);

  /* Typography */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-xs: 0.75rem;

  /* Spacing */
  --spacing-xs:  0.5rem;
  --spacing-sm:  0.75rem;
  --spacing-md:  1.25rem;
  --spacing-lg:  2rem;
  --spacing-xl:  3rem;
  --spacing-2xl: 5rem;

  /* Nav */
  --nav-height: 64px;

  /* Neobrutalism */
  --radius:       6px;
  --radius-input: 12px;
  --radius-card:  20px;
  --border-width: 2px;
  --shadow-sm: 3px 3px 0 var(--color-anthrazite);
  --shadow-md: 5px 5px 0 var(--color-anthrazite);
  --shadow-lg: 7px 7px 0 var(--color-anthrazite);

  /* Transitions */
  --transition: 0.15s ease;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/variables.css
git commit -m "feat: add Chorke color tokens (lavender, card colors, hero gradient)"
```

---

### Task 2: Typography — Mixed-Case Headings

**Files:**
- Modify: `src/styles/base.css`

- [ ] **Step 1: Remove uppercase, soften weight**

Find this block in `src/styles/base.css`:
```css
h1, h2, h3, h4 {
  font-weight: 900;
```

Change `font-weight` to `800` and make sure there is NO `text-transform: uppercase` on headings. Also update h1 size to be larger:

```css
h1, h2, h3, h4 {
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

h1 { font-size: clamp(2.8rem, 8vw, 5.5rem); }
h2 { font-size: clamp(1.6rem, 5vw, 2.5rem); margin-bottom: var(--spacing-lg); }
```

- [ ] **Step 2: Update hero h1 in layout.css**

Find `#hero h1` in `src/styles/layout.css`. Update:
```css
#hero h1 {
  font-size: clamp(2.8rem, 7vw, 5rem);
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin-bottom: var(--spacing-md);
  color: var(--color-anthrazite);
}
```

And update the desktop override inside `@media (min-width: 768px)`:
```css
  #hero h1 {
    font-size: clamp(2.4rem, 5.5vw, 5rem);
  }
```

- [ ] **Step 3: Remove uppercase from hero animate words in index.html**

In `index.html`, change the animated words from ALL-CAPS to Title Case:

```html
<span class="hero-animate-word">Lehrer.</span>
<span class="hero-animate-word">Begleiter.</span>
<span class="hero-animate-word">Berater.</span>
<span class="hero-animate-word">Organisator.</span>
<span class="hero-animate-word">KI-Enthusiast.</span>
<span class="hero-animate-word">Designer.</span>
<span class="hero-animate-word">Lehrer.</span>
```

Also change the static first line from `ICH BIN` to `Ich bin`:
```html
<h1>Ich bin<br><span class="hero-animate">...
```

- [ ] **Step 4: Commit**

```bash
git add src/styles/base.css src/styles/layout.css index.html
git commit -m "feat: mixed-case headings, larger h1, remove uppercase"
```

---

### Task 3: Hero Card Container + Gradient Background

**Files:**
- Modify: `src/styles/layout.css`

- [ ] **Step 1: Wrap hero in a card**

The hero needs to appear as a bordered rounded card floating inside the viewport. Add an outer wrapper style. In `index.html`, wrap the `<section id="hero">` in a `<div class="hero-card-wrap">`:

```html
<div class="hero-card-wrap">
  <section id="hero">
    ...
  </section>
</div>
```

- [ ] **Step 2: Add hero-card-wrap styles to layout.css**

Add at the top of the hero section in `src/styles/layout.css`:

```css
.hero-card-wrap {
  padding: var(--spacing-md);
  background-color: var(--color-anthrazite);
}

@media (min-width: 768px) {
  .hero-card-wrap {
    padding: 12px;
  }
}
```

- [ ] **Step 3: Update #hero styles for gradient + rounded card**

Update `#hero` in `src/styles/layout.css`:

```css
#hero {
  background: var(--hero-gradient);
  border-radius: var(--radius-card);
  overflow: hidden;
}
```

And update the desktop media query for `#hero`:
```css
@media (min-width: 768px) {
  #hero {
    padding: var(--spacing-2xl) 0;
    border-radius: var(--radius-card);
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/styles/layout.css index.html
git commit -m "feat: hero card container with border and cream-to-lavender gradient"
```

---

### Task 4: Hexagonal Image Clip-Path

**Files:**
- Modify: `src/styles/layout.css`

- [ ] **Step 1: Replace aspect-ratio square with hexagon**

Find `.hero-image` and `.hero-photo-img` in `src/styles/layout.css`. Replace the image section:

```css
/* Bild — Hexagonaler Clip */
.hero-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  min-height: clamp(260px, 60vw, 380px);
}

.hero-photo-img {
  display: block;
  width: min(80vw, 420px);
  height: min(80vw, 420px);
  object-fit: cover;
  object-position: center 10%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

@media (min-width: 768px) {
  .hero-image {
    align-self: center;
    min-height: unset;
  }

  .hero-photo-img {
    width: clamp(280px, 38vw, 480px);
    height: clamp(280px, 38vw, 480px);
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/layout.css
git commit -m "feat: hexagonal clip-path on hero image"
```

---

### Task 5: Nav Pill CTA Button

**Files:**
- Modify: `index.html`, `src/styles/components.css`

- [ ] **Step 1: Add button to HTML**

In `index.html`, find the `.nav-links` div and add a CTA button after the links:

```html
<div class="nav-links">
  <a href="#projects">Projekte</a>
  <a href="#about">Über mich</a>
  <a href="#contact">Kontakt</a>
  <a href="#contact" class="nav-cta">Kontakt</a>
</div>
```

- [ ] **Step 2: Add nav-cta styles to components.css**

Add after the `.nav-links a:hover` rule in `src/styles/components.css`:

```css
.nav-cta {
  display: none;
}

@media (min-width: 768px) {
  .nav-cta {
    display: inline-flex;
    align-items: center;
    background-color: var(--color-card-yellow);
    color: var(--color-anthrazite) !important;
    border: var(--border-width) solid var(--color-anthrazite);
    border-radius: 999px;
    padding: 0.4em 1.2em;
    font-weight: 800;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
    transition: background-color var(--transition), transform var(--transition);
    white-space: nowrap;
  }

  .nav-cta:hover {
    background-color: var(--color-warm-orange);
    transform: translateY(-1px);
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add index.html src/styles/components.css
git commit -m "feat: pill-shaped nav CTA button in yellow"
```

---

### Task 6: Colored Service Cards

**Files:**
- Modify: `src/styles/components.css`, `index.html`

- [ ] **Step 1: Add color modifier classes to cards in index.html**

Find the three `.service-card` divs and add modifier classes:

```html
<div class="service-card service-card--yellow">...</div>
<div class="service-card service-card--green">...</div>
<div class="service-card service-card--pink">...</div>
```

- [ ] **Step 2: Add card color styles in components.css**

Add after the `.service-card` block:

```css
.service-card--yellow {
  background-color: var(--color-card-yellow);
}
.service-card--green {
  background-color: var(--color-card-green);
}
.service-card--pink {
  background-color: var(--color-card-pink);
}

/* Dot pattern adapts to colored backgrounds */
.service-card--yellow::before,
.service-card--green::before,
.service-card--pink::before {
  background-image: radial-gradient(circle, rgba(42, 42, 42, 0.18) 1px, transparent 1px);
}
```

- [ ] **Step 3: Commit**

```bash
git add index.html src/styles/components.css
git commit -m "feat: colored service cards (yellow, green, pink)"
```

---

### Task 7: Badge Sticker Element

**Files:**
- Modify: `index.html`, `src/styles/components.css`

- [ ] **Step 1: Add badge HTML inside hero-image**

In `index.html`, add the badge inside `.hero-image`, just before the closing `</div>`:

```html
<div class="hero-image">
  <img ... >
  <div class="hero-badge" aria-hidden="true">
    <svg viewBox="0 0 120 120" class="hero-badge-ring">
      <path id="badgePath" d="M 60,60 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
      <text>
        <textPath href="#badgePath" startOffset="0%">
          KONTAKT → KONTAKT → KONTAKT →
        </textPath>
      </text>
    </svg>
    <span class="hero-badge-arrow">→</span>
  </div>
</div>
```

- [ ] **Step 2: Add badge styles in components.css**

```css
/* Badge sticker */
.hero-badge {
  position: absolute;
  width: 110px;
  height: 110px;
  background-color: var(--color-card-yellow);
  border: var(--border-width) solid var(--color-anthrazite);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 12%;
  left: 5%;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform var(--transition);
}

.hero-badge:hover {
  transform: rotate(15deg) scale(1.05);
}

.hero-badge-ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: badge-spin 10s linear infinite;
}

.hero-badge-ring text {
  font-size: 13px;
  font-weight: 700;
  fill: var(--color-anthrazite);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-badge-arrow {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--color-anthrazite);
  position: relative;
  z-index: 1;
}

@keyframes badge-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@media (max-width: 767px) {
  .hero-badge {
    display: none;
  }
}
```

- [ ] **Step 3: Make hero-image position: relative**

In `src/styles/layout.css`, add `position: relative` to `.hero-image`:
```css
.hero-image {
  position: relative;
  ...
}
```

- [ ] **Step 4: Commit**

```bash
git add index.html src/styles/components.css src/styles/layout.css
git commit -m "feat: rotating badge sticker on hero image"
```

---

### Task 8: Section Spacing — Flush Cards Below Hero

**Files:**
- Modify: `src/styles/layout.css`

- [ ] **Step 1: Tighten gap between hero-card-wrap and about section**

Add to `src/styles/layout.css`:

```css
.hero-card-wrap + #about,
.hero-card-wrap ~ #about {
  margin-top: 0;
}

#about {
  background-color: var(--color-white);
}
```

- [ ] **Step 2: Remove top padding from about section on desktop so cards sit flush**

Inside the `@media (min-width: 768px)` block, add:

```css
@media (min-width: 768px) {
  .hero-card-wrap {
    padding-bottom: 0;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/styles/layout.css
git commit -m "style: tighten section spacing, cards closer to hero"
```

---

### Task 9: Push to GitHub

- [ ] **Step 1: Push all commits**

```bash
git push
```

Expected output: commits pushed to `origin/master` at `github.com/FloBerlin2024/kopie-profilwebsite`.

---

## Visual Verification Checklist

After all tasks, open `http://localhost:PORT` and check:

- [ ] Hero has cream→lavender gradient background
- [ ] Hero sits inside a rounded card with dark border/frame
- [ ] Heading reads "Ich bin" (mixed-case, not "ICH BIN")
- [ ] Animated words are Title Case ("Lehrer.", "Begleiter." etc.)
- [ ] Hero image has hexagonal shape
- [ ] Nav shows pill-shaped yellow "Kontakt" button on desktop
- [ ] Service cards are yellow / green / pink respectively
- [ ] Rotating badge sticker appears on hero (desktop only)
- [ ] All colors use `#FF9019` orange and new Chorke palette
