# Sarthak Vishnu — Personal Portfolio

Personal portfolio website built with React + Vite. Hosted on GitHub Pages at
**https://sarthak-vishnu.github.io/portfolio**

---

## Tech Stack

- **React 18** + **Vite 6**
- Custom CSS with CSS variables — no frameworks
- `react-router-dom` (HashRouter) for SPA routing
- Deployed via `gh-pages`

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173/portfolio/

---

## Deployment

> Before deploying for the first time, place your photo at `public/assets/profile.jpg`.

```bash
npm run deploy
```

This runs `npm run build` then pushes the `dist/` folder to the `gh-pages` branch.
GitHub Pages serves from that branch automatically.

**First-time setup:** In your GitHub repo → Settings → Pages → set Source to `gh-pages` branch, `/ (root)`.

---

## Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   └── profile.jpg        ← drop your photo here before deploying
│   ├── 404.html               ← SPA redirect for GitHub Pages
│   ├── .nojekyll              ← prevents Jekyll processing
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         ← fixed nav, active-section tracking, mobile hamburger
│   │   ├── ThemeToggle.jsx    ← light/dark toggle, persists to localStorage
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js ← IntersectionObserver fade-in-up animation
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Publications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── theme.css          ← CSS variables (light + dark)
│   │   ├── global.css         ← resets, typography, layout
│   │   ├── components.css     ← Navbar, Footer, ThemeToggle
│   │   └── sections.css       ← all section-specific styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js             ← base: '/portfolio/'
└── package.json
```

---

## Features

- **Dark mode default** — toggles light/dark, persists across sessions
- **Scroll reveal** — fade-in-up animations via IntersectionObserver (respects `prefers-reduced-motion`)
- **Active nav highlighting** — navbar link underlines as you scroll through sections
- **Mobile responsive** — hamburger menu, single-column hero, wrapping tag pills
- **Accessible** — focus-visible outlines, aria-labels, semantic HTML

---

## Customisation

| What | Where |
|------|-------|
| Profile photo | `public/assets/profile.jpg` |
| Color palette | `src/styles/theme.css` |
| Fonts | `index.html` (Google Fonts link) + `src/styles/theme.css` |
| Section content | `src/sections/*.jsx` (data arrays at the top of each file) |
| Nav links | `src/components/Navbar.jsx` → `NAV_LINKS` array |
