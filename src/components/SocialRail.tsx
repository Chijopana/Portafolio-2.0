import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SITE, SOCIALS } from '../data/site'

/**
 * Desktop side rail. Deliberately limited to the professional channels a
 * recruiter needs; Instagram stays in the footer.
 */
export default function SocialRail() {
  const links = [
    { href: SOCIALS.github, label: 'GitHub', Icon: FiGithub },
    { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: FiLinkedin },
    { href: `mailto:${SITE.email}`, label: 'Email', Icon: FiMail },
  ]

  return (
    <div className="no-print fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-5 xl:flex">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="text-faint transition-colors hover:text-accent"
        >
          <Icon size={19} />
        </a>
      ))}
      <span className="h-20 w-px bg-border" aria-hidden="true" />
    </div>
  )
}
