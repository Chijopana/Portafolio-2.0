import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiBriefcase, FiExternalLink, FiGithub, FiLock, FiTerminal } from 'react-icons/fi'
import type { Project } from '../data/projects'
import { useAnim } from '../lib/motion'
import TechBadge from './TechBadge'

type Props = {
  project: Project
  index?: number
}

/**
 * Client work ships without a public repository, so the code slot becomes a
 * plain statement instead of a link that would 404 — the same treatment the
 * `url`-less projects already get for their demo slot.
 */
function CodeLink({ project, name, size }: { project: Project; name: string; size: number }) {
  const { t } = useTranslation()

  if (!project.github) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-faint">
        <FiLock size={size} aria-hidden="true" />
        {t('projects.privateCode')}
      </span>
    )
  }

  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-text"
    >
      <FiGithub size={size} aria-hidden="true" />
      {t('projects.viewCode')}
      <span className="sr-only"> — {name}</span>
    </a>
  )
}

/** Distinguishes paid client work from the personal builds around it. */
function ClientBadge() {
  const { t } = useTranslation()

  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
      <FiBriefcase size={12} aria-hidden="true" />
      {t('projects.clientWork')}
    </span>
  )
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
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-text">{name}</h3>
          {project.client && <ClientBadge />}
        </div>
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
          <CodeLink project={project} name={name} size={15} />
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
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-bold text-text">{name}</h4>
        {project.client && <ClientBadge />}
      </div>
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
        <CodeLink project={project} name={name} size={14} />
      </div>
    </motion.article>
  )
}
