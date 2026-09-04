import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { CV_BY_LANG, SECTION_IDS, SITE } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLanguage } from '../hooks/useLanguage'
import { useAnim } from '../lib/motion'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

type Props = {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Navbar({ isDark, onToggleTheme }: Props) {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const { reduce } = useAnim()
  const activeSection = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  // Escape closes the mobile menu; leaving the mobile breakpoint discards it.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const media = window.matchMedia('(min-width: 768px)')
    const onBreakpoint = () => setMenuOpen(false)

    document.addEventListener('keydown', onKeyDown)
    media.addEventListener('change', onBreakpoint)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      media.removeEventListener('change', onBreakpoint)
    }
  }, [menuOpen])

  return (
    <header
      className="no-print sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="inline-flex items-center gap-2 font-bold tracking-tight text-text"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-sm text-on-accent">
            {SITE.initials}
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={t('common.menu')}
        >
          {SECTION_IDS.map((id) => {
            const isActive = activeSection === id
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-accent'
                    : 'text-muted hover:bg-surface-2 hover:text-text'
                }`}
              >
                {t(`nav.${id}`)}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <a
            href={CV_BY_LANG[language]}
            download
            className="hidden items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 lg:inline-flex"
          >
            <FiDownload size={15} aria-hidden="true" />
            CV
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:text-accent md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t('common.close') : t('common.menu')}
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? undefined : { opacity: 0, height: 0 }}
            animate={reduce ? undefined : { opacity: 1, height: 'auto' }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden border-t border-border bg-bg md:hidden"
          >
            <nav
              className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4"
              aria-label={t('common.menu')}
            >
              {SECTION_IDS.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeSection === id ? 'true' : undefined}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                    activeSection === id
                      ? 'bg-accent-soft text-accent'
                      : 'text-muted hover:bg-surface-2 hover:text-text'
                  }`}
                >
                  {t(`nav.${id}`)}
                </a>
              ))}
              <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-4">
                <LanguageSwitcher />
                <a
                  href={CV_BY_LANG[language]}
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-on-accent"
                >
                  <FiDownload size={15} aria-hidden="true" />
                  {t('hero.ctaCv')}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
