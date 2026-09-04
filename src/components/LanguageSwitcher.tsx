import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, LANGUAGE_NAMES, type Language } from '../i18n'
import { useLanguage } from '../hooks/useLanguage'

/**
 * Segmented control. `language` comes from the normalising hook, so the active
 * state is correct even when the browser reports `es-MX` or `en-GB`.
 */
export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-lg border border-border bg-surface p-0.5 ${className}`}
      role="group"
      aria-label={t('common.language')}
    >
      {SUPPORTED_LANGUAGES.map((code: Language) => {
        const isActive = language === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => changeLanguage(code)}
            aria-pressed={isActive}
            aria-label={LANGUAGE_NAMES[code]}
            className={`rounded-md px-2.5 py-1 font-mono text-xs font-semibold uppercase transition-colors ${
              isActive
                ? 'bg-accent text-on-accent'
                : 'text-muted hover:bg-surface-2 hover:text-text'
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}
