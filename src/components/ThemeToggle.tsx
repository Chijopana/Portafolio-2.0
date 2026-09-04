import { FiMoon, FiSun } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

type Props = {
  isDark: boolean
  onToggle: () => void
}

export default function ThemeToggle({ isDark, onToggle }: Props) {
  const { t } = useTranslation()

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-accent"
      aria-label={t('common.theme')}
      aria-pressed={isDark}
      title={t('common.theme')}
    >
      {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
    </button>
  )
}
