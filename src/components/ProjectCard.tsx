import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiExternalLink, FiGithub, FiTerminal } from 'react-icons/fi'
import type { Project } from '../data/projects'
import { useAnim } from '../lib/motion'
import TechBadge from './TechBadge'

type Props = {
  project: Project
  index?: number
}

export function FeaturedProjectCard({ project, index = 0 }: Props) {
  const { t } = useTranslation()
  const { fadeUp, hoverLift } = useAnim()
  const name = t(`projects.items.${project.id}.name`)

  return (
    <motion.article
      {...fadeUp(index * 0.06)}
      {...hoverLift}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-colors hover:border-accent/40"
    >
      <div className="border-b border-border bg-surface-2">
        <div className="flex items-center gap-1.5 px-3 py-2" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
        <div className="aspect-[16/10] overflow-hidden bg-surface">
          <img
            src={project.thumb}
            alt={t('projects.screenshotAlt', { name })}
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = '/preview.png'
            }}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-text">{name}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">
          {t(`projects.items.${project.id}.description`)}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.tech.map((tech) => (
            <li key={tech}>
              <TechBadge tech={tech} />
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              <FiExternalLink size={15} aria-hidden="true" />
              {t('projects.viewLive')}
              <span className="sr-only"> — {name}</span>
            </a>
          ) : (
            // Self-hosted projects: say so instead of linking somewhere dead.
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-faint">
              <FiTerminal size={15} aria-hidden="true" />
              {t('projects.localOnly')}
            </span>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-text"
          >
            <FiGithub size={15} aria-hidden="true" />
            {t('projects.viewCode')}
            <span className="sr-only"> — {name}</span>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export function CompactProjectCard({ project, index = 0 }: Props) {
  const { t } = useTranslation()
  const { fadeUp } = useAnim()
  const name = t(`projects.items.${project.id}.name`)

  return (
    <motion.article
      {...fadeUp(index * 0.05)}
      className="flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
    >
      <h4 className="font-bold text-text">{name}</h4>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
        {t(`projects.items.${project.id}.description`)}
      </p>

      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Stack">
        {project.tech.map((tech) => (
          <li key={tech}>
            <TechBadge tech={tech} />
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-4">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            <FiExternalLink size={14} aria-hidden="true" />
            {t('projects.viewLive')}
            <span className="sr-only"> — {name}</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-faint">
            <FiTerminal size={14} aria-hidden="true" />
            {t('projects.localOnly')}
          </span>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-text"
        >
          <FiGithub size={14} aria-hidden="true" />
          {t('projects.viewCode')}
          <span className="sr-only"> — {name}</span>
        </a>
      </div>
    </motion.article>
  )
}
