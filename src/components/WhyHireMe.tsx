import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiAward, FiLayers, FiServer, FiTrendingUp, FiZap } from 'react-icons/fi'
import { useAnim } from '../lib/motion'
import SectionHeading from './SectionHeading'

const ITEMS = [
  { key: 'fullstack', Icon: FiServer },
  { key: 'frontend', Icon: FiLayers },
  { key: 'quality', Icon: FiZap },
  { key: 'learning', Icon: FiTrendingUp },
] as const

export default function WhyHireMe() {
  const { t } = useTranslation()
  const { fadeUp, hoverLift } = useAnim()

  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        icon={<FiAward size={18} />}
        title={t('why.title')}
        subtitle={t('why.subtitle')}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {ITEMS.map(({ key, Icon }, index) => (
          <motion.article
            key={key}
            {...fadeUp(index * 0.06)}
            {...hoverLift}
            className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors hover:border-accent/40"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon size={19} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-text">
              {t(`why.items.${key}.title`)}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              {t(`why.items.${key}.description`)}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
