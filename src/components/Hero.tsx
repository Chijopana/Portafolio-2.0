import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import { CV_BY_LANG, SITE } from '../data/site'
import { DEPLOYED_PROJECTS } from '../data/projects'
import { useLanguage } from '../hooks/useLanguage'
import { useAnim } from '../lib/motion'

export default function Hero() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const { rise } = useAnim()

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-bg-soft"
      aria-label={SITE.name}
    >
      {/* Soft accent wash, purely decorative. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <motion.p
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-muted"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t('hero.available')}
          </motion.p>

          <motion.h1
            {...rise(0.05)}
            className="mt-6 text-5xl font-extrabold tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            {SITE.name}
          </motion.h1>

          <motion.p
            {...rise(0.1)}
            className="mt-3 text-xl font-semibold text-accent sm:text-2xl"
          >
            {t('hero.role')}
            {/* On phones the stack drops to its own line instead of wrapping
                mid-list behind the role. */}
            <span className="mt-1 block font-mono text-base font-normal text-muted sm:mt-0 sm:ml-2 sm:inline">
              React · TypeScript · Node.js
            </span>
          </motion.p>

          <motion.p
            {...rise(0.15)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {t('hero.pitch')}
          </motion.p>

          <motion.div {...rise(0.2)} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              {t('hero.ctaProjects')}
              <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href={CV_BY_LANG[language]}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface px-5 py-3 font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              <FiDownload aria-hidden="true" />
              {t('hero.ctaCv')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-muted transition-colors hover:text-accent"
            >
              <FiMail aria-hidden="true" />
              {t('hero.ctaContact')}
            </a>
          </motion.div>

          <motion.dl
            {...rise(0.25)}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6"
          >
            <div>
              <dt className="sr-only">{t('hero.statProjects')}</dt>
              <dd className="text-2xl font-bold text-text">
                {DEPLOYED_PROJECTS.length}
                <span className="ml-2 text-sm font-medium text-muted">
                  {t('hero.statProjects')}
                </span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">{t('hero.statLanguages')}</dt>
              <dd className="text-2xl font-bold text-text">
                3
                <span className="ml-2 text-sm font-medium text-muted">
                  {t('hero.statLanguages')}
                </span>
              </dd>
            </div>
            <div className="flex items-center">
              <dd className="text-sm font-medium text-muted">
                {t('hero.statLocation')}
              </dd>
            </div>
          </motion.dl>
        </div>

        {/* Decorative code card — hidden on phones so the CTAs stay above the fold. */}
        <motion.div
          {...rise(0.3)}
          className="hidden lg:block"
          aria-hidden="true"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-xs text-faint">
                developer.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-muted">
              <code>
                <span className="text-accent">const</span> jose = {'{'}
                {'\n'}  role: <span className="text-emerald-500 dark:text-emerald-400">
                  &quot;Full-Stack Developer&quot;
                </span>,
                {'\n'}  stack: [<span className="text-emerald-500 dark:text-emerald-400">
                  &quot;React&quot;, &quot;TypeScript&quot;, &quot;Node&quot;
                </span>],
                {'\n'}  based: <span className="text-emerald-500 dark:text-emerald-400">
                  &quot;Barcelona, ES&quot;
                </span>,
                {'\n'}  shipped: <span className="text-accent">{DEPLOYED_PROJECTS.length}</span>,
                {'\n'}  status: <span className="text-emerald-500 dark:text-emerald-400">
                  &quot;open to work&quot;
                </span>,
                {'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
