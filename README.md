# LabTrend — Project Website

A modern, single-page project website for the Software Engineering seminar project:

> **Early Detection of Patient Deterioration Using Laboratory Test Trends**

The site presents the research question, the MIMIC-III `LABEVENTS` dataset, the system
workflow, the prototype, the team, and a link to the live dashboard.

Built with **React + Vite**, plain **CSS Modules**, and CSS-only animations (no heavy
animation libraries).

---

## Quick start

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # create a production build in /dist
npm run preview # preview the production build locally
```

Requires Node.js 18+ (developed on Node 24).

---

## Project structure

```
.
├── index.html
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # app entry
    ├── App.jsx                 # composes all sections
    ├── data/
    │   └── siteConfig.js       # ← edit links + team here
    ├── hooks/
    │   └── useReveal.js        # scroll-reveal animation hook
    ├── styles/
    │   └── global.css          # design tokens, resets, shared utilities
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── ResearchQuestion.jsx
        ├── Dataset.jsx
        ├── Workflow.jsx
        ├── Prototype.jsx
        ├── WhyItHelps.jsx
        ├── Progress.jsx
        ├── Team.jsx
        ├── DashboardLink.jsx
        ├── Footer.jsx
        ├── Icon.jsx            # inline SVG icon set
        ├── content.module.css  # shared section layout
        └── *.module.css        # per-component styles
```

---

## Sections

Hero · About · Research Question · Dataset (MIMIC-III LABEVENTS) · System Workflow ·
What We Built · Why It Helps · Project Progress · Team · Dashboard Link · Footer.

---

## Disclaimer

This is an **academic prototype** built for a university Software Engineering seminar. It is
**not** a medical decision-making system, is not validated for clinical use, and must not be
used to diagnose, treat, or make decisions about any patient.
