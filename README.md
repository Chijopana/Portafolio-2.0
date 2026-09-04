# Portfolio — Jose Blondel

Personal portfolio of **Jose Blondel**, Full-Stack Developer (React · TypeScript · Node.js), based in Barcelona.

**Live:** https://www.joseblondel.dev

---

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** (theme tokens defined in CSS, class-based dark mode)
- **Framer Motion** for scroll and hover animation
- **i18next** — English, Spanish and Catalan
- Deployed on **Vercel**

## Structure

```
src/
├── App.tsx              # page composition only
├── i18n.ts              # translatable copy (3 languages)
├── index.css            # design tokens + base styles
├── components/          # one component per section + shared UI
├── data/                # language-neutral content: projects, skills, timeline
├── hooks/               # theme, language, active-section
└── lib/motion.ts        # motion presets (respect prefers-reduced-motion)
```

Project links, tech stacks, dates and skill names live in `src/data` so they are
declared once instead of being repeated in each of the three translation blocks.

## Notable details

- Theme is applied before first paint by an inline script, so returning
  dark-mode visitors never see a flash of light theme.
- All animation collapses when the visitor prefers reduced motion, and print
  styles force content visible for "save as PDF".
- Language detection normalises regional locales (`es-MX` → `es`).
- Sticky navigation with an `IntersectionObserver` that highlights the current
  section; skip link, semantic landmarks and labelled form fields throughout.

## Running locally

```bash
git clone https://github.com/Chijopana/Portafolio-2.0
cd Portafolio-2.0/mi-portafolio
npm install
npm run dev
```

| Script            | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Development server                |
| `npm run build`   | Type-check and production build   |
| `npm run preview` | Serve the production build        |
| `npm run lint`    | ESLint                            |

## Featured projects

| Project | Stack | Links |
| ------- | ----- | ----- |
| Battleship — online multiplayer | React, Socket.IO, Express, Capacitor | [demo](https://battleship-web-game.netlify.app/) · [code](https://github.com/Chijopana/battleship) |
| Task Manager (MERN) | React, Node, Express, MongoDB, JWT | [demo](https://task-manager-front-five.vercel.app/) · [code](https://github.com/Chijopana/Task-Manager) |
| Weather App | Next.js, TypeScript | [demo](https://weather-app-4gmb.vercel.app/) · [code](https://github.com/Chijopana/weather-app) |
| Mini E-Commerce | Angular, TypeScript | [demo](https://chijopana.github.io/E-commerce/) · [code](https://github.com/Chijopana/E-commerce) |

## Contact

- Email: jose7blondel@gmail.com
- LinkedIn: https://www.linkedin.com/in/jose-manuel-blondel-moya/
