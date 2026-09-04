import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiBookOpen } from 'react-icons/fi'
import { MAIN_EDUCATION, MINOR_EDUCATION } from '../data/timeline'
import { useAnim } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function Education() {
  const { t } = useTranslation()
  const { fadeUp } = useAnim()

  return (
    <section id="education" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <SectionHeading
        icon={<FiBookOpen size={18} />}
        title={t('education.title')}
        subtitle={t('education.subtitle')}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {MAIN_EDUCATION.map((entry, index) => (
          <motion.div
            key={entry.id}
            {...fadeUp(index * 0.06)}
            className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
          >
            <p className="font-mono text-xs font-semibold text-faint">
              {entry.period}
            </p>
            <h3 className="mt-2 font-bold leading-snug text-text">
              {t(`education.items.${entry.id}`)}
            </h3>
            <p className="mt-1 text-sm text-muted">{entry.institution}</p>
          </motion.div>
        ))}
      </div>

      {/* Shorter courses grouped compactly rather than given equal weight. */}
      <motion.div {...fadeUp(0.1)} className="mt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-faint">
          {t('education.more')}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {MINOR_EDUCATION.map((entry) => (
            <li
              key={entry.id}
              className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm text-muted"
            >
              <span className="font-medium text-text">
                {t(`education.items.${entry.id}`)}
              </span>
              <span className="text-faint"> · {entry.institution}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
