import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiCpu, FiLayers, FiServer, FiTool } from 'react-icons/fi'
import { SKILL_GROUPS } from '../data/skills'
import { useAnim } from '../lib/motion'
import SectionHeading from './SectionHeading'

const GROUP_ICONS = {
  frontend: FiLayers,
  backend: FiServer,
  tooling: FiTool,
} as const

export default function Skills() {
  const { t } = useTranslation()
  const { fadeUp } = useAnim()

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        icon={<FiCpu size={18} />}
        title={t('skills.title')}
        subtitle={t('skills.subtitle')}
      />

      <div className="grid gap-5 md:grid-cols-3">
        {SKILL_GROUPS.map((group, index) => {
          const Icon = GROUP_ICONS[group.id]
          return (
            <motion.div
              key={group.id}
              {...fadeUp(index * 0.08)}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-faint">
                <Icon size={16} className="text-accent" aria-hidden="true" />
                {t(`skills.groups.${group.id}`)}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs font-medium text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
