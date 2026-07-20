# STRUCTURA — Architectural Firm Portfolio

A React + Vite + Tailwind CSS recreation of the STRUCTURA architecture portfolio design, with Framer Motion scroll reveals and React Router for the three pages.

## Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** (CSS-first config via `@theme`, no `tailwind.config.js` needed)
- **React Router v7** — client-side routing for Home / About / Contact
- **Framer Motion** — scroll-triggered reveals and hero entrance animation

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  components/
    Navbar.jsx       # sticky nav, active-route bronze underline, mobile menu
    Footer.jsx        # 4-column footer with newsletter input
    Reveal.jsx         # reusable scroll-triggered fade-up wrapper (Framer Motion)
    ProjectCard.jsx    # masonry portfolio card with hover overlay
  data/
    projects.js        # portfolio project data (swap in real photography here)
  pages/
    Home.jsx            # hero, philosophy statement, portfolio grid, process steps
    About.jsx            # heritage timeline, team, recognition, CTA
    Contact.jsx           # office details, inquiry form, map
  index.css              # Tailwind import + design tokens (@theme block)
  App.jsx                 # routes + shared Navbar/Footer shell
  main.jsx                 # React root + BrowserRouter
```

## Design system

All tokens from the original design spec (`DESIGN.md`) are wired up as Tailwind v4 theme
variables in `src/index.css`:

- **Colors** — full Material-style surface/on-surface/primary/secondary/tertiary palette
- **Type scale** — `display-lg`, `headline-lg`, `headline-md`, `body-lg`, `body-md`, `label-caps`
  (and mobile variants), using **Playfair Display** (serif, headings) + **Metrophobic** (sans, body)
- **Spacing** — `unit`, `gutter`, `margin-mobile`, `margin-desktop`, `section-gap`
- **Shape** — sharp 0px corners throughout (no border-radius on cards/buttons)

Use these directly as Tailwind classes, e.g. `text-display-lg`, `bg-surface-container`,
`px-margin-desktop`, `py-section-gap`, `text-secondary`.

## Notes

- Placeholder imagery comes from Unsplash — swap the URLs in `src/data/projects.js`,
  `About.jsx`, and `Contact.jsx` for real project photography.
- The contact form is wired up with local state and a submit handler that shows a
  confirmation state — connect it to your backend/email service of choice.
- Material Symbols icon font is loaded via `index.css` for the arrow/menu/expand icons.
