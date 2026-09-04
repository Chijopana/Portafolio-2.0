import { useReducedMotion } from 'framer-motion'

export const VIEWPORT = { once: true, amount: 0.15 } as const

/**
 * Motion presets that collapse to nothing when the visitor has asked for
 * reduced motion — in that case elements render in their final state instead of
 * animating in, so no content is ever gated behind an animation.
 */
export function useAnim() {
  const reduce = useReducedMotion()

  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: VIEWPORT,
          transition: { duration: 0.5, delay, ease: 'easeOut' as const },
        }

  const fadeIn = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.4, delay, ease: 'easeOut' as const },
        }

  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: 'easeOut' as const },
        }

  /** Single hover mechanism, so cards don't stack CSS and JS transforms. */
  const hoverLift = reduce ? {} : { whileHover: { y: -4 }, whileTap: { y: 0 } }

  return { reduce, fadeUp, fadeIn, rise, hoverLift }
}
