import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { SITE, SOCIALS } from '../data/site'
import { useAnim } from '../lib/motion'
import ContactForm from './ContactForm'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const { t } = useTranslation()
  const { fadeUp } = useAnim()

  const methods = [
    {
      icon: FiMail,
      label: t('contact.emailLabel'),
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: '/jose-manuel-blondel-moya',
      href: SOCIALS.linkedin,
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: '@Chijopana',
      href: SOCIALS.github,
    },
    {
      icon: FiMapPin,
      label: t('contact.location'),
      value: t('hero.statLocation'),
    },
  ]

  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <SectionHeading
        icon={<FiMail size={18} />}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />

      <motion.p
        {...fadeUp()}
        className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted"
      >
        {t('contact.intro')}
      </motion.p>

      <motion.ul
        {...fadeUp(0.05)}
        className="mb-14 grid gap-3 sm:grid-cols-2"
      >
        {methods.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon size={17} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wide text-faint">
                  {label}
                </span>
                <span className="block truncate text-sm font-medium text-text">
                  {value}
                </span>
              </span>
            </>
          )

          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
                  {content}
                </div>
              )}
            </li>
          )
        })}
      </motion.ul>

      <motion.div {...fadeUp(0.1)}>
        <ContactForm />
      </motion.div>
    </section>
  )
}
