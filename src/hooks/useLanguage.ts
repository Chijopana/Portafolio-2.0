import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type Language } from '../i18n'

function normalize(value: string | undefined): Language {
  // Browsers report region-tagged locales (`es-MX`, `en-GB`). Comparing those
  // against bare codes is what previously left the switcher with no active state.
  const base = (value ?? 'en').split('-')[0] as Language
  return SUPPORTED_LANGUAGES.includes(base) ? base : 'en'
}

export function useLanguage() {
  const { i18n } = useTranslation()
  const language = normalize(i18n.resolvedLanguage ?? i18n.language)

  // Keep <html lang> in sync so screen readers and search engines get the
  // language actually being displayed.
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const changeLanguage = (next: Language) => {
    void i18n.changeLanguage(next)
  }

  return { language, changeLanguage }
}
