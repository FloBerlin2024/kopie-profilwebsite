# Portfolio Website — Claude Context

## Projekt-Überblick

Persönliches Portfolio von **Florian Matthias**, Lehrer für Geografie & Ethik.
Stack: **Vite + Vanilla JS (ES Modules)** — kein Framework, kein Build-Step nötig für Dev.

Design-Referenz: [kristi.digital](https://kristi.digital) — Neobrutalism-Stil.

---

## Tech Stack

| Tool | Zweck |
|------|-------|
| Vite | Dev Server + Build |
| Vanilla JS (ES Modules) | Keine Framework-Abhängigkeit |
| CSS Custom Properties | Design Tokens in `variables.css` |
| Playwright MCP | Visuelle Tests / Screenshots |

**Dev starten:** `npm run dev`
**Build:** `npm run build`

---

## Dateistruktur

```
index.html                  # Haupt-HTML, alle Sections
src/
  main.js                   # App-Init, importiert alle Komponenten
  components/
    nav.js                  # Hamburger-Menü, mobiles Overlay, dynamische Top-Position
    hero.js                 # Hero Section Init
    about.js                # About/Services Init
    projects.js             # Projekt-Daten + DOM-Rendering
    contact.js              # Kontaktformular + Formspree
  styles/
    main.css                # Importiert alle CSS-Dateien
    variables.css           # Design Tokens (Farben, Spacing, Shadows)
    base.css                # Reset, Typography, .container
    layout.css              # Section-Layouts (Hero, About, Projects, Contact, Footer)
    components.css          # UI-Komponenten (Nav, Ticker, Buttons, Cards, Forms, Back-to-top)
  assets/
    images/                 # Projektbilder + Profilfoto (florian.png)
```

---

## Design System — Neobrutalism

Alle Tokens in `src/styles/variables.css`.

### Farben
```css
--color-royal-blue:   #003D82   /* Akzent (Projekt-Tags, Back-to-top Button) */
--color-warm-orange:  #D97834   /* Primär-Akzent (Ticker, Primary-Button, Hover) */
--color-anthrazite:   #2A2A2A   /* Text, Borders, Shadows */
--color-cream:        #F5F1EB   /* Hero-Bg, Featured-Projects-Bg, Nav-Mobile-Menu */
--color-white:        #FFFFFF   /* About, Projects-Header, Contact */
--color-light-border: #E0DDD8   /* Trennlinien innerhalb Mobile-Menu */
```

### Neobrutalism-Regeln
- **Border:** `2px solid var(--color-anthrazite)` auf allen interaktiven Elementen
- **Shadows:** Hart, offset (kein blur) — `3px 3px 0`, `5px 5px 0`, `7px 7px 0` + `var(--color-anthrazite)`
- **Hover:** `translateY(-3px)` + Shadow wächst → Lift-Effekt
- **Active/Click:** `translate(3px, 3px)` + Shadow verschwindet → Press-Effekt
- **Border-Radius:** `--radius: 6px` (Buttons, Tags), `--radius-input: 12px` (Inputs, Karten)
- **Font-Weight:** Headings + Nav = `900`

### Section-Backgrounds (von oben nach unten)
```
Ticker       → warm-orange
Nav          → cream (sticky)
Hero         → cream
About        → white
Projects H2  → white
Proj. Rows   → cream (.featured-projects)
Contact      → white
Footer       → anthrazite (dunkel)
```
→ **Keine Trennlinien** zwischen Sections — Farbwechsel erzeugt Trennung.

---

## Komponenten

### Hero-Animation (CSS-only)
- H1-Struktur: `ICH BIN` (statisch, Zeile 1) + `.hero-animate` (Zeile 2, scrollende Wortliste)
- Wörter: LEHRER. / BEGLEITER. / BERATER. / ORGANISATOR. / KI ENTHUSIAST. / DESIGNER. (+ Duplikat für nahtlosen Loop)
- Kein Rahmen, kein Hintergrund — nur `var(--color-warm-orange)` Textfarbe
- Timing: 14s `linear`, `cubic-bezier(0.76, 0, 0.24, 1)` pro Übergang (~0.6s), ~2s Hold je Wort
- CSS-Klassen: `.hero-animate`, `.hero-animate-track`, `.hero-animate-word` in `layout.css`

### Hero-Typografie & Responsive-Logik
- **H1 Mobile** (gestapelt, <768px): `clamp(2.8rem, 7vw, 3.8rem)` — groß, nutzt volle Breite
- **H1 Desktop** (≥768px): `clamp(2rem, 5.5vw, 3.8rem)` — schrumpft flüssig mit Viewport
- **Beschreibung Mobile**: kein `max-width`, volle Container-Breite
- **Beschreibung Desktop**: `clamp(0.85rem, 1.4vw, 1rem)`, `max-width: 38ch`
- **Bild-Spalte** (≥768px): `clamp(300px, 44vw, 520px)` — schrumpft langsamer als Textspalte → Bild bleibt proportional groß
- **Bild-Container**: `aspect-ratio: 1`, `object-fit: contain` — Collage.png ist 2510×2510, füllt Box vollständig ohne Crop

### Navigation (`nav.js` + CSS)
- Desktop (≥768px): Logo links, Links rechts — Hover = Orange-Fill von rechts nach links, Schrift weiß + letter-spacing größer
- Mobile (<768px): Hamburger-Button (3 Striche → X-Animation mit CSS), Mobile-Overlay-Panel
- Overlay: `position: fixed`, Top-Position wird **dynamisch per JS** gesetzt (`nav.getBoundingClientRect().bottom`) — passt sich an, ob Ticker sichtbar ist oder gescrollt wurde

### Ticker (HTML + CSS)
- Ganz oben auf der Seite, **über** der Nav
- 12× wiederholter Text für nahtlose Endlosschleife (`translateX(-50%)`)
- Orange Hintergrund (`--color-warm-orange`), 2px Border unten

### Projekte (`projects.js`)
- Daten als Array in der Datei — **hier echte Projekte eintragen**
- Alternierend links/rechts auf Desktop (`nth-child(even)` → Bild rechts)
- Placeholder-SVG wenn kein Bild vorhanden (`onerror` Handler)

### Kontaktformular (`contact.js`)
- Formspree-Integration → **`YOUR_FORM_ID` ersetzen**
- E-Mail in `index.html` → **`florian@example.com` ersetzen**

### Back-to-top Button
- Erscheint nach 400px Scroll
- Royal Blue, Neobrutalism-Stil, 42px × 42px (Mobile) / 48px × 48px (Desktop)
- Sanftes Ein-/Ausblenden via CSS opacity + transform

---

## Offene TODOs (vor Go-Live)

1. **E-Mail** in `index.html` ersetzen: `florian@example.com` → echte Adresse
2. **Formspree** einrichten: `src/components/contact.js` → `YOUR_FORM_ID` ersetzen
3. **Projektbilder** in `src/assets/images/` ablegen: `project1.jpg` bis `project5.jpg`
4. **Projektdaten** in `src/components/projects.js` mit echten Projekten befüllen
5. **Profilfoto**: Aktuell `florian.png` — ggf. durch hexagonales PNG ersetzen

---

## Wichtige Entscheidungen

- **Kein Cookie-Banner nötig** — kein Analytics, keine Ads, keine externen Fonts via CDN. Sobald Analytics eingebunden wird → Klaro (Open Source) empfohlen oder Matomo (DSGVO-konform ohne Banner)
- **Google Fonts**: Aktuell über CDN geladen → für DSGVO-Konformität self-hosten
- **Kein Framework**: Bewusste Entscheidung für Vanilla JS — einfacher zu warten, kein Dependency-Risiko
- **Mobile-first CSS**: Alle Styles beginnen mit Mobile, Desktop via `min-width` Media Queries

---

## Playwright-Logs

`.playwright-mcp/` ist in `.gitignore` — Screenshots und Logs werden nicht committed.
