import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { useAnim } from '../lib/motion'

export default function BackToTop() {
  const { t } = useTranslation()
  const { reduce } = useAnim()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduce ? 'auto' : 'smooth',
            })
          }
          initial={reduce ? undefined : { opacity: 0, scale: 0.8 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          exit={reduce ? undefined : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          aria-label={t('common.backToTop')}
          title={t('common.backToTop')}
          className="no-print fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted shadow-lg transition-colors hover:border-accent hover:text-accent"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
