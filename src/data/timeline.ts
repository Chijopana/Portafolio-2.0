/**
 * Experience and education entries.
 *
 * Dates and institution names are language-neutral and live here; roles,
 * degrees and descriptions are translated by `id` in i18n.
 */

export type ExperienceEntry = {
  id: string
  org: string
  period: string
  /** Currently ongoing — rendered with a live indicator. */
  current?: boolean
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'daw',
    org: 'IOC — Institut Obert de Catalunya',
    period: '2025 — 2027',
    current: true,
  },
  {
    id: 'selfTaught',
    org: 'freeCodeCamp · Coursera · IBM · AWS',
    period: '2024 — ' + new Date().getFullYear(),
    current: true,
  },
  {
    id: 'bootcamp',
    org: 'Full-Stack & AI Bootcamp',
    period: '2024',
  },
]

export type EducationEntry = {
  id: string
  institution: string
  period: string
  /** Secondary credentials are grouped into a compact list. */
  minor?: boolean
}

export const EDUCATION: EducationEntry[] = [
  {
    id: 'daw',
    institution: 'IOC — Institut Obert de Catalunya',
    period: '2025 — 2027',
  },
  {
    id: 'metaFrontend',
    institution: 'Meta & Coursera',
    period: '2025',
  },
  {
    id: 'ioe',
    institution: 'Instituto de Educación Online (IOE)',
    period: '2025',
  },
  {
    id: 'engineering',
    institution: 'Universidad Santiago Mariño, Venezuela',
    period: '2019 — 2021',
  },
  { id: 'freeCodeCamp', institution: 'freeCodeCamp', period: '2024 — 2025', minor: true },
  { id: 'googleIt', institution: 'Google & Coursera', period: '2025', minor: true },
  { id: 'ibmWeb', institution: 'IBM', period: '2025', minor: true },
  { id: 'awsAi', institution: 'AWS Academy', period: '2024', minor: true },
]

export const MAIN_EDUCATION = EDUCATION.filter((e) => !e.minor)
export const MINOR_EDUCATION = EDUCATION.filter((e) => e.minor)
