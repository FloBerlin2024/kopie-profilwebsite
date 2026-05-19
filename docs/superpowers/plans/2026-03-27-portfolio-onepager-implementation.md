# Portfolio One-Pager Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a clean Neobrutalism portfolio one-pager with 3-5 project showcase, contact form, and email integration using Vite + Vanilla JS.

**Architecture:** Modular component-based structure with centralized CSS variables for theming. Each component (hero, about, projects, contact) is self-contained and can be modified independently. Static HTML with Vite for bundling and dev server. Formspree handles form submission without backend.

**Tech Stack:** Vite, Vanilla JavaScript, HTML5, CSS3 (CSS Custom Properties), Formspree API

---

## File Structure

```
/src
  index.html              # Main entry point
  main.js                 # App initialization
  /components
    hero.js               # Hero section component
    about.js              # About section component
    projects.js           # Projects grid + card rendering
    contact.js            # Contact section with form & email
  /styles
    variables.css         # Color, typography, spacing tokens
    base.css              # Reset, global styles
    components.css        # Reusable component styles (buttons, cards, inputs)
    layout.css            # Section layouts, grid, responsive
    main.css              # Imports all styles
  /assets
    /images
      project1.jpg        # Placeholder project images
      project2.jpg
      project3.jpg
/docs
  /superpowers
    /specs
      2026-03-27-portfolio-onepager-design.md
    /plans
      2026-03-27-portfolio-onepager-implementation.md
vite.config.js            # Vite configuration
package.json              # Dependencies
.gitignore                # Git ignore rules
README.md                 # Setup instructions (optional)
```

---

## Tasks

### Task 1: Project Setup & Vite Configuration

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `.gitignore`
- Create: `README.md`

**Steps:**
1. Create package.json with vite and scripts
2. Create vite.config.js with server and build config
3. Create .gitignore for node_modules and build
4. Create README.md with setup instructions
5. Run npm install
6. Commit

---

### Task 2: CSS Foundation - Variables & Base Styles

**Files:**
- Create: `src/styles/variables.css`
- Create: `src/styles/base.css`
- Create: `src/styles/main.css`

**Steps:**
1. Create variables.css with color, typography, spacing tokens
2. Create base.css with reset and global styles
3. Create main.css with imports
4. Commit

---

### Task 3: Component Styles - Buttons, Cards, Forms

**Files:**
- Create: `src/styles/components.css`

**Steps:**
1. Create components.css with button, card, form styles
2. Commit

---

### Task 4: Layout Styles - Sections & Grid

**Files:**
- Create: `src/styles/layout.css`

**Steps:**
1. Create layout.css with hero, about, projects, contact section styles
2. Add responsive breakpoints
3. Commit

---

### Task 5: HTML Structure - index.html

**Files:**
- Create: `src/index.html`

**Steps:**
1. Create index.html with all sections (hero, about, projects, contact)
2. Link main.css and main.js
3. Commit

---

### Task 6: Main App Entry Point

**Files:**
- Create: `src/main.js`

**Steps:**
1. Create main.js with component initialization
2. Commit

---

### Task 7: Hero Component

**Files:**
- Create: `src/components/hero.js`

**Steps:**
1. Create hero.js with initialization
2. Test with dev server
3. Commit

---

### Task 8: About Component

**Files:**
- Create: `src/components/about.js`

**Steps:**
1. Create about.js with initialization
2. Test with dev server
3. Commit

---

### Task 9: Projects Component - Data & Rendering

**Files:**
- Create: `src/components/projects.js`
- Create: `src/assets/images/` directory

**Steps:**
1. Create projects.js with sample data and card rendering
2. Create assets/images directory
3. Test with dev server
4. Commit

---

### Task 10: Contact Component - Email & Form

**Files:**
- Create: `src/components/contact.js`
- Modify: `src/index.html` (email link)

**Steps:**
1. Create contact.js with form validation and Formspree integration
2. Update email in HTML
3. Test form validation and submission
4. Setup Formspree account (manual)
5. Test form with actual Formspree endpoint
6. Commit

---

### Task 11: Build & Test Responsiveness

**Files:**
- (No file changes - testing only)

**Steps:**
1. Run dev server
2. Test desktop layout (hero, about grid, projects grid, contact grid)
3. Test mobile layout (< 768px - single column stacks)
4. Test interactions (hover, scroll, form)
5. Commit

---

### Task 12: Build for Production

**Files:**
- (No file changes)

**Steps:**
1. Build project with npm run build
2. Verify dist/ directory created
3. Preview build locally
4. Commit

---

### Task 13: Update Project Data (Optional)

**Files:**
- Modify: `src/components/projects.js`
- Add: `src/assets/images/*.jpg`

**Steps:**
1. Replace sample projects with actual projects
2. Add actual project images
3. Rebuild
4. Commit
