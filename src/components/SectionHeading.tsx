import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useAnim } from '../lib/motion'

type Props = {
  icon: ReactNode
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

/**
 * One heading treatment for every section: same accent, same rhythm.
 * (Previously each section invented its own colour scheme.)
 */
export default function SectionHeading({
  icon,
  title,
  subtitle,
  align = 'center',
}: Props) {
  const { fadeUp } = useAnim()
  const centered = align === 'center'

  return (
    <motion.div
      {...fadeUp()}
      className={`mb-12 flex flex-col gap-3 ${centered ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-accent">
        {icon}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-muted">{subtitle}</p>
      )}
      <span className="mt-1 h-1 w-16 rounded-full bg-accent" aria-hidden="true" />
    </motion.div>
  )
}
