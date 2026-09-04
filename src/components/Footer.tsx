import { useTranslation } from 'react-i18next'
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'
import { SITE, SOCIALS } from '../data/site'

export default function Footer() {
  const { t } = useTranslation()

  const links = [
    { href: SOCIALS.github, label: 'GitHub', Icon: FiGithub },
    { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: FiLinkedin },
    { href: SOCIALS.instagram, label: 'Instagram', Icon: FiInstagram },
    { href: `mailto:${SITE.email}`, label: 'Email', Icon: FiMail },
  ]

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-semibold text-text">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted">{t('footer.built')}</p>
        </div>

        <div className="flex items-center gap-4">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-faint transition-colors hover:text-accent"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {SITE.name}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
