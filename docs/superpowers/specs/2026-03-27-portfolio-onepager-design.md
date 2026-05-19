---
name: Portfolio One-Pager Design
description: Clean Neobrutalism portfolio showcase with 3-5 projects, contact form, and email integration
type: design
date: 2026-03-27
---

# Portfolio One-Pager Design Spec

## Purpose
Create an online portfolio presence and project showcase for Florian Matthias. The site serves as a visual "showroom" for projects with clear contact pathways via email and contact form.

## Target Audience
Potential clients, collaborators, and visitors interested in Florian's work.

## Key Requirements
- Clean, modular architecture (easily customizable/rebuildable)
- Responsive design (mobile-first)
- 3-5 project showcase
- Dual contact methods: email link + contact form
- No social media links required
- Fast, static deployment

---

## Technical Architecture

### Tech Stack
- **Build Tool:** Vite (zero-config, fast, modern)
- **Frontend:** Vanilla JavaScript + HTML/CSS
- **Styling:** CSS with CSS custom properties (variables)
- **Form Backend:** Formspree (free, GDPR-compliant, email integration)
- **Hosting:** Static (GitHub Pages, Netlify, Vercel, or similar)

### Rationale
Vite provides modular component structure without framework overhead. Vanilla JS keeps dependencies minimal and code transparent. CSS variables allow theme/color changes without refactoring. Formspree handles form submission without backend complexity.

---

## Page Structure

### 1. Hero Section
**Purpose:** Immediate introduction and visual impact

**Content:**
- Large heading: "Hi, I'm Florian Matthias"
- Tagline/subtitle (one-liner describing what you do)
- CTA button linking to projects
- Visual accent: Geometric Neobrutalism element in Königsblau

**Layout:** Center-aligned, full viewport height on desktop, responsive on mobile

---

### 2. About Section
**Purpose:** Build credibility and provide context

**Content:**
- Paragraph: Who you are and what you do (2-3 sentences)
- Highlights/skills (optional bullet list or tag-style display)
- Visual element: Photo (optional) or additional geometric shape

**Layout:** Two-column on desktop (text + visual), single-column on mobile

---

### 3. Projects Section
**Purpose:** Showcase work and demonstrate capabilities

**Content:**
- 3-5 project cards, each containing:
  - Project image/screenshot
  - Project title
  - Brief description (1-2 sentences)
  - "View Project" button
  - Tags or tech stack (optional)

**Visual Style:**
- Card design with kräftige (bold) black borders (3-4px)
- Neobrutalism aesthetic: geometric shapes, asymmetric spacing
- Hover effect: Orange accent color highlight or border animation
- Grid layout: 2 columns on desktop, 1 on mobile

**Cards Styling:**
- White background (#FFFFFF) with dark border
- Title in Anthrazit bold
- Description in Anthrazit regular
- Button with Orange accent on hover

---

### 4. Contact Section
**Purpose:** Enable visitor communication

**Subsection A: Direct Email**
- Email heading: "Direct Contact"
- Email link with icon/styling
- Text: "Or reach out directly at..."

**Subsection B: Contact Form**
- Heading: "Send a Message"
- Form fields:
  - Name (required, text input)
  - Email (required, email input)
  - Message (required, textarea)
- Submit button (Königsblau with Orange hover)
- Success/error messaging

**Form Integration:**
- Formspree endpoint (user provides their email during setup)
- Form submits to Formspree, user receives email
- Client-side validation before submission

---

## Visual Identity

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Königsblau | #003D82 | Primary accent (buttons, highlights, borders) |
| Warm Orange | #D97834 | Secondary accent (hover states, CTAs) |
| Anthrazit | #2A2A2A | Text, borders, dark elements |
| Creme | #F5F1EB | Page background |
| White | #FFFFFF | Card backgrounds, contrast |

**CSS Variables Implementation:**
```css
:root {
  --color-royal-blue: #003D82;
  --color-warm-orange: #D97834;
  --color-anthrazite: #2A2A2A;
  --color-cream: #F5F1EB;
  --color-white: #FFFFFF;
}
```

### Typography
- **Font Family:** System sans-serif (Inter, Roboto, or fallback)
- **Headings (H1, H2):** Bold, uppercase letter-spacing for impact
- **Body Text:** Regular weight, 16px base
- **Hierarchy:** H1 (3rem) → H2 (2rem) → Body (1rem) → Small (0.875rem)

### Neobrutalism Design Elements
- **Borders:** Bold 3-4px solid black (#2A2A2A) on cards and sections
- **Geometric Shapes:** Squares, rectangles with sharp corners (no border-radius on primary elements)
- **Spacing:** Generous padding/margins, asymmetric layout (not perfectly centered)
- **Contrast:** High contrast between Creme background and White/Anthrazit elements
- **Interaction:** Hover states use Orange accent, subtle animations (border color shift, shadow)

---

## Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile Adjustments
- Stack all sections vertically
- Single-column project grid
- Larger touch targets for buttons
- Simplified hero section
- Full-width forms and inputs

---

## Component Structure (Modular)

```
/src
  /components
    - header.js (navigation, if needed)
    - hero.js
    - about.js
    - projects.js (projects grid + individual card logic)
    - contact.js (email + form)
    - footer.js (optional)
  /styles
    - variables.css (color, typography)
    - base.css (reset, global)
    - components.css (card, button, form styles)
    - layout.css (sections, grid)
  /assets
    - project images
  index.html
  main.js
```

**Modularity Benefit:** Each component can be edited/restyled independently. Colors centralized in variables.css. Easy to add/remove projects or sections.

---

## Contact Form (Formspree Integration)

**Setup:**
1. User creates free Formspree account, gets endpoint URL
2. Form action points to Formspree endpoint
3. On submit, Formspree emails form data to user's email

**Form Behavior:**
- Client-side validation (name, email, message required)
- POST to Formspree
- Success message: "Thanks! I'll get back to you soon."
- Error message: "Something went wrong. Try again or email directly."

**No Backend Required:** Formspree handles email delivery.

---

## Data Structure (Placeholder)

### Projects Array
```javascript
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Brief description of project 1",
    image: "/assets/project1.jpg",
    link: "https://project1.com",
    tags: ["React", "Tailwind"]
  },
  // ... up to 5 projects
];
```

**Easy to Update:** Change project data without touching HTML/CSS.

---

## Success Criteria
- ✅ Fast load time (< 2s)
- ✅ Mobile responsive
- ✅ Contact form functional
- ✅ Neobrutalism aesthetic clear and intentional
- ✅ Modular code (easy to customize colors, projects, sections)
- ✅ All links/buttons working
- ✅ Accessible (semantic HTML, WCAG basics)

---

## Out of Scope
- Blog or dynamic content
- User accounts/authentication
- Analytics (unless added via simple script)
- Multi-language support
- Social media integrations
