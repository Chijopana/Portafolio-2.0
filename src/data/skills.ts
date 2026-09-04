/**
 * Skill names are proper nouns, so they are identical in every language.
 * Only the group labels are translated (see i18n `skills.groups`).
 */

export type SkillGroup = {
  id: 'frontend' | 'backend' | 'tooling'
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5 & CSS3',
      'Framer Motion',
      'Angular',
    ],
  },
  {
    id: 'backend',
    items: [
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'REST APIs',
      'JWT Auth',
      'Socket.IO',
    ],
  },
  {
    id: 'tooling',
    items: [
      'Git & GitHub',
      'Vite',
      'Vercel',
      'i18next',
      'Web Accessibility',
      'SEO',
    ],
  },
]
