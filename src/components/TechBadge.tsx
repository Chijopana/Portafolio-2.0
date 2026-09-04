import { TECH, type TechKey } from '../data/projects'

/**
 * Neutral pill + a dot coloured from the shared registry, so a technology looks
 * identical everywhere it appears instead of changing colour per card.
 */
export default function TechBadge({ tech }: { tech: TechKey }) {
  const { label, color } = TECH[tech]

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs font-medium text-muted">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {label}
    </span>
  )
}
