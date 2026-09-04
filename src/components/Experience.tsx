import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiBriefcase } from 'react-icons/fi'
import { EXPERIENCE } from '../data/timeline'
import { useAnim } from '../lib/motion'
import SectionHeading from './SectionHeading'

export default function Experience() {
  const { t } = useTranslation()
  const { fadeUp } = useAnim()

  return (
    <section id="experience" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <SectionHeading
        icon={<FiBriefcase size={18} />}
        title={t('experience.title')}
        subtitle={t('experience.subtitle')}
      />

      <ol className="relative border-l border-border pl-8">
        {EXPERIENCE.map((entry, index) => (
          <motion.li
            key={entry.id}
            {...fadeUp(index * 0.08)}
            className="relative mb-10 last:mb-0"
          >
            <span
              className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-4 border-bg bg-accent"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-lg font-bold text-text">
                {t(`experience.items.${entry.id}.role`)}
              </h3>
              {entry.current && (
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {t('common.inProgress')}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-accent">
              {entry.org} · <span className="text-faint">{entry.period}</span>
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              {t(`experience.items.${entry.id}.details`)}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
