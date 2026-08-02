# Portfolio Frontend — yuceldayan.com

Single-page portfolio site with a built-in content management panel. Every section
on the public page — about, experience, projects, contact — is served from a REST
API and editable from an admin panel behind JWT authentication, so the site never
needs a redeploy to change its content.

**Live:** [yuceldayan.com](https://yuceldayan.com) · **API:** [yucel-portfolio-backend](https://github.com/Yuceldayan/yucel-portfolio-backend)

---

## What it does

**Public page**
- Hero, About, Experience and Projects sections rendered from live API data
- Project detail modal with cover image, tech stack and links
- Contact form that posts straight to the API
- Floating WhatsApp button, SEO tags via `react-helmet-async`
- `robots.txt`, `sitemap.xml` and an Open Graph image included

**Admin panel** (JWT-gated by `AdminGate`)
- Projects — full CRUD with display ordering
- Experience — CRUD over the timeline entries
- About — edit the biography block
- Contacts — read messages submitted through the contact form

## Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS (via `@tailwindcss/postcss`) |
| Routing | React Router 7 |
| HTTP | Axios, wrapped in a single `src/api/http.js` client |
| Icons | lucide-react |
| SEO | react-helmet-async |
| Hosting | Vercel, with SPA rewrites in `vercel.json` |

## Project layout

```
src/
├── api/                  one axios client + a module per resource
│   ├── http.js           base instance, reads VITE_API_BASE_URL
│   ├── about.js
│   ├── contact.js
│   ├── experiences.js
│   └── projects.js
├── components/
│   ├── HeroSection.jsx        AboutSection.jsx
│   ├── ExperienceSection.jsx  ProjectsSection.jsx
│   ├── ProjectCard.jsx        ProjectDetailModal.jsx
│   ├── ContactSection.jsx     WhatsappButton.jsx
│   └── AdminGate.jsx          Layout.jsx
├── pages/                HomePage + four Admin* pages
├── routes/               AppRoutes.jsx
└── styles/               globals.css
```

## Running locally

```bash
npm install
npm run dev          # http://localhost:5173
```

The API base URL comes from a single environment variable:

```
VITE_API_BASE_URL=https://api.yuceldayan.com
```

This is a public build-time value, not a secret — Vite inlines every `VITE_*`
variable into the client bundle. Point it at `http://localhost:8080` to develop
against a local backend.

```bash
npm run build        # production build into dist/
npm run preview      # serve that build locally
npm run lint         # eslint
```

## Deployment

Vercel builds `main` on every push. `vercel.json` rewrites all paths to
`index.html` so client-side routes survive a hard refresh.

---

## My role

**Sole developer.** Design, build and deployment are all mine, on both sides of
the wire: this client and the [Spring Boot API](https://github.com/Yuceldayan/yucel-portfolio-backend)
behind it. The commit history here reflects that work commit by commit.
