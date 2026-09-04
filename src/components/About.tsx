import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiCheck, FiDownload, FiUser } from 'react-icons/fi'
import { CV_BY_LANG } from '../data/site'
import { useLanguage } from '../hooks/useLanguage'
import { useAnim } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function About() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const { fadeUp } = useAnim()

  // Rendered as a real list instead of newline-separated text inside a <p>,
  // where the line breaks collapsed and the bullets ran together.
  const bullets = t('about.bullets', { returnObjects: true }) as string[]

  return (
    <section id="about" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <SectionHeading
        icon={<FiUser size={18} />}
        title={t('about.title')}
        subtitle={t('about.subtitle')}
      />

      <motion.div
        {...fadeUp()}
        className="rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10"
      >
        <p className="text-lg leading-relaxed text-muted">{t('about.intro')}</p>

        <ul className="mt-8 space-y-4">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <FiCheck
                className="mt-1 shrink-0 text-accent"
                size={18}
                aria-hidden="true"
              />
              <span className="leading-relaxed text-muted">{bullet}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 border-t border-border pt-6 font-medium text-text">
          {t('about.closing')}
        </p>

        <a
          href={CV_BY_LANG[language]}
          download
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-on-accent transition-opacity hover:opacity-90"
        >
          <FiDownload aria-hidden="true" />
          {t('hero.ctaCv')}
        </a>
      </motion.div>
    </section>
  )
}
