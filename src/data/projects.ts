/**
 * Single source of truth for projects.
 *
 * Only language-neutral facts live here (links, stack, thumbnail). The name and
 * description of each project are looked up in i18n by `id`, so adding a
 * project or reordering the list never means touching three translation blocks.
 *
 * Stacks were verified against the actual repositories rather than memory.
 */

export type TechKey = keyof typeof TECH

/** One registry, so a technology always renders with the same label + colour. */
export const TECH = {
  react: { label: 'React', color: '#38bdf8' },
  typescript: { label: 'TypeScript', color: '#3178c6' },
  javascript: { label: 'JavaScript', color: '#eab308' },
  nextjs: { label: 'Next.js', color: '#64748b' },
  node: { label: 'Node.js', color: '#5fa04e' },
  express: { label: 'Express', color: '#94a3b8' },
  mongodb: { label: 'MongoDB', color: '#47a248' },
  angular: { label: 'Angular', color: '#dd0031' },
  tailwind: { label: 'Tailwind CSS', color: '#06b6d4' },
  socketio: { label: 'Socket.IO', color: '#a78bfa' },
  vite: { label: 'Vite', color: '#a855f7' },
  jwt: { label: 'JWT Auth', color: '#f59e0b' },
  css: { label: 'CSS', color: '#2965f1' },
  capacitor: { label: 'Capacitor', color: '#53b9ff' },
} as const

export type Project = {
  id: string
  url: string
  github: string
  thumb: string
  tech: TechKey[]
  /** Featured projects get a large card; the rest are listed compactly. */
  featured: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'battleship',
    url: 'https://battleship-web-game.netlify.app/',
    github: 'https://github.com/Chijopana/battleship',
    thumb: '/assets/projects/battleship.png',
    tech: ['react', 'socketio', 'express', 'tailwind', 'capacitor'],
    featured: true,
  },
  {
    id: 'taskManager',
    url: 'https://task-manager-front-five.vercel.app/',
    github: 'https://github.com/Chijopana/Task-Manager',
    thumb: '/assets/projects/task-manager.png',
    tech: ['react', 'node', 'express', 'mongodb', 'jwt'],
    featured: true,
  },
  {
    id: 'weather',
    url: 'https://weather-app-4gmb.vercel.app/',
    github: 'https://github.com/Chijopana/weather-app',
    thumb: '/assets/projects/weather.png',
    tech: ['nextjs', 'react', 'typescript'],
    featured: true,
  },
  {
    id: 'ecommerce',
    url: 'https://chijopana.github.io/E-commerce/',
    github: 'https://github.com/Chijopana/E-commerce',
    thumb: '/assets/projects/ecommerce.png',
    tech: ['angular', 'typescript'],
    featured: true,
  },
  {
    id: 'portfolio',
    url: 'https://www.joseblondel.dev/',
    github: 'https://github.com/Chijopana/Portafolio-2.0',
    thumb: '/assets/projects/portfolio.png',
    tech: ['react', 'typescript', 'tailwind'],
    featured: false,
  },
  {
    id: 'calculator',
    url: 'https://java-script-calculator-gzhd.vercel.app/',
    github: 'https://github.com/Chijopana/JavaScript-Calculator',
    thumb: '/assets/projects/calculator.png',
    tech: ['react', 'vite', 'tailwind'],
    featured: false,
  },
  {
    id: 'rockPaperScissors',
    url: 'https://rock-paper-scissors-jade-six.vercel.app/',
    github: 'https://github.com/Chijopana/rock-paper-scissors',
    thumb: '/assets/projects/rock-paper-scissors.png',
    tech: ['javascript', 'css'],
    featured: false,
  },
  {
    id: 'wordGame',
    url: 'https://buscapalabra.vercel.app/',
    github: 'https://github.com/Chijopana/Buscapalabra',
    thumb: '/assets/projects/word-game.png',
    tech: ['javascript', 'css'],
    featured: false,
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)
export const OTHER_PROJECTS = PROJECTS.filter((p) => !p.featured)
