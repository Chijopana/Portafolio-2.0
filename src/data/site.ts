/**
 * Language-neutral site constants: URLs, handles, file paths.
 * Nothing here needs translating, so it lives outside i18n.
 */

export const SITE = {
  name: 'Jose Blondel',
  initials: 'JB',
  url: 'https://www.joseblondel.dev',
  email: 'jose7blondel@gmail.com',
} as const

export const SOCIALS = {
  github: 'https://github.com/Chijopana',
  linkedin: 'https://www.linkedin.com/in/jose-manuel-blondel-moya/',
  instagram: 'https://www.instagram.com/joseblondel1',
} as const

/** No Catalan CV exists yet, so `ca` intentionally reuses the Spanish one. */
export const CV_BY_LANG: Record<string, string> = {
  en: '/jose-blondel-cv-en.pdf',
  es: '/jose-blondel-cv-es.pdf',
  ca: '/jose-blondel-cv-es.pdf',
}

/** FormSubmit endpoint (hashed address, safe to expose). */
export const CONTACT_FORM_ENDPOINT =
  'https://formsubmit.co/e4024c058206774f4d44c782a4b04ec5'

export const SECTION_IDS = [
  'about',
  'projects',
  'skills',
  'experience',
  'education',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]
