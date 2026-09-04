import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiCheckCircle, FiSend } from 'react-icons/fi'
import { CONTACT_FORM_ENDPOINT, SITE } from '../data/site'

const FIELD_CLASSES =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 text-text placeholder:text-faint transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40'

export default function ContactForm() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)

  // FormSubmit redirects back with ?sent=1; show a confirmation in place and
  // then tidy the URL so a refresh doesn't keep the banner around.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('sent') !== '1') return

    setSent(true)
    params.delete('sent')
    const query = params.toString()
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${query ? `?${query}` : ''}#contact`,
    )
  }, [])

  const returnUrl = `${
    typeof window === 'undefined' ? SITE.url : window.location.origin
  }/?sent=1#contact`

  return (
    <div className="mx-auto max-w-xl">
      <h3 className="text-2xl font-bold text-text">{t('contact.formTitle')}</h3>
      <p className="mt-1 text-muted">{t('contact.formSubtitle')}</p>

      {sent && (
        <p
          role="status"
          className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-700 dark:text-emerald-300"
        >
          <FiCheckCircle className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
          {t('contact.success')}
        </p>
      )}

      <form
        method="POST"
        action={CONTACT_FORM_ENDPOINT}
        className="mt-6 space-y-4 text-left"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_subject"
          value={`Portfolio contact — ${SITE.url}`}
        />
        {/* Send the visitor back to the site instead of FormSubmit's own page. */}
        <input type="hidden" name="_next" value={returnUrl} />
        {/* Honeypot: bots fill it in, humans never see it. */}
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-text"
          >
            {t('contact.name')}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t('contact.name')}
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-text"
          >
            {t('contact.email')}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t('contact.email')}
            className={FIELD_CLASSES}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-text"
          >
            {t('contact.message')}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder={t('contact.message')}
            className={`${FIELD_CLASSES} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-on-accent transition-opacity hover:opacity-90"
        >
          <FiSend size={16} aria-hidden="true" />
          {t('contact.send')}
        </button>
      </form>
    </div>
  )
}
