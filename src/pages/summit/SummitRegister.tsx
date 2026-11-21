import { useState, type FormEvent } from 'react'
import { ArrowRight, CalendarDays, Network, Share2, Trophy, Users } from 'lucide-react'
import { usePageMeta } from '../../lib/meta'
import { INTEREST_OPTIONS, summitCopy } from '../../data/summit'
import { googleFormConnected, registrationForm } from '../../data/summit-form'
import { useSummit } from '../../components/summit/SummitLanguage'
import { CreamPage, Gold, goldFill, Wrap } from '../../components/summit/ui'

const ICONS = [Trophy, Users, Network, CalendarDays, Share2]

type Fields = { fullName: string; email: string; organization: string; interest: string; message: string }
type Errors = Partial<Record<'fullName' | 'email' | 'interest', string>>

const EMPTY: Fields = { fullName: '', email: '', organization: '', interest: '', message: '' }
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Posts to the team's Google Form (responses go to its Sheet). Google answers
 * cross-origin posts opaquely, so a completed request is treated as received;
 * only a network failure is reported back to the visitor.
 */
async function send(fields: Fields) {
  if (googleFormConnected) {
    const body = new URLSearchParams()
    for (const key of Object.keys(registrationForm.entries) as (keyof Fields)[]) {
      body.append(registrationForm.entries[key], fields[key].trim())
    }
    await fetch(registrationForm.action, { method: 'POST', mode: 'no-cors', body })
    return
  }
  // Not connected yet: hand the same submission to the visitor's email app.
  const labels = summitCopy.en.register.fields
  const lines = (Object.keys(EMPTY) as (keyof Fields)[]).map(
    (key) => `${labels[key].replace(' (optional)', '')}: ${fields[key].trim()}`,
  )
  window.location.href = `mailto:${registrationForm.fallbackEmail}?subject=${encodeURIComponent(
    `SOLVÉ Global Summit — Register Interest (${fields.interest})`,
  )}&body=${encodeURIComponent(lines.join('\n'))}`
}

const fieldClass =
  'w-full rounded-[8px] border bg-[#FBF9F4] px-4 py-3 text-[16px] text-summit-ink shadow-[inset_0_1px_2px_rgba(14,27,56,0.06)] transition-colors duration-200 focus:border-summit-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-summit-gold/30'
const labelClass = 'mb-2 block text-[16px] font-semibold text-summit-ink md:text-[17px]'

/** 7. Register Your Interest. */
export default function SummitRegister() {
  const { t } = useSummit()
  usePageMeta(t.meta.register.title, t.meta.register.description)

  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')

  const set = (key: keyof Fields) => (value: string) => {
    setFields((f) => ({ ...f, [key]: value }))
    if (key in errors) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(): Errors {
    const next: Errors = {}
    if (!fields.fullName.trim()) next.fullName = t.register.errors.fullName
    if (!EMAIL.test(fields.email.trim())) next.email = t.register.errors.email
    if (!fields.interest) next.interest = t.register.errors.interest
    return next
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    const first = (['fullName', 'email', 'interest'] as const).find((key) => found[key])
    if (first) {
      document.getElementById(`summit-${first}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      await send(fields)
      setStatus('sent')
      setFields(EMPTY)
    } catch {
      setStatus('failed')
    }
  }

  const describedBy = (key: keyof Errors) => (errors[key] ? `summit-${key}-error` : undefined)
  const errorText = (key: keyof Errors) =>
    errors[key] ? (
      <p id={`summit-${key}-error`} className="mt-2 text-[14px] font-medium text-[#A3271F]">
        {errors[key]}
      </p>
    ) : null
  const required = (
    <span className="text-[#C0392B]" aria-hidden="true">
      {' '}*
    </span>
  )

  return (
    <CreamPage>
      <Wrap className="grid gap-12 pb-[180px] pt-12 md:pb-[240px] md:pt-16 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:pt-20">
        <div>
          <h1 className="font-display text-[40px] font-semibold leading-[1.06] tracking-[-0.01em] text-summit-ink sm:text-[52px] lg:text-[56px]">
            {t.register.line1} <Gold>{t.register.line2}</Gold>
          </h1>
          <p className="mt-5 max-w-[560px] text-[18px] leading-[1.5] text-summit-ink md:text-[21px]">
            {t.register.body}
          </p>

          <div className="mt-10 flex items-center gap-5">
            <h2 className="font-ui text-[17px] font-bold uppercase tracking-[0.04em] text-summit-gold-deep md:text-[22px]">
              {t.register.areasHeading}
            </h2>
            <span aria-hidden="true" className="h-[2px] flex-1 bg-summit-gold/70" />
          </div>

          {/* Choosing an area here selects it in the form. */}
          <ul className="mt-5 space-y-1">
            {t.register.areas.map((area, i) => {
              const Icon = ICONS[i]
              const value = INTEREST_OPTIONS[i]
              const chosen = fields.interest === value
              return (
                <li key={value}>
                  <button
                    type="button"
                    onClick={() => set('interest')(value)}
                    aria-pressed={chosen}
                    className={`flex w-full items-center gap-5 rounded-[12px] px-3 py-3 text-left transition-colors duration-200 ${
                      chosen ? 'bg-white/80 ring-1 ring-summit-gold/60' : 'hover:bg-white/50'
                    }`}
                  >
                    <Icon size={46} strokeWidth={1.3} aria-hidden="true" className="shrink-0 text-summit-gold-deep" />
                    <span>
                      <span className="block text-[18px] font-bold text-summit-ink md:text-[20px]">{area.title}</span>
                      <span className="block text-[15px] leading-[1.45] text-summit-ink md:text-[17px]">{area.body}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="self-start rounded-[26px] border border-white/90 bg-[#F8F2E6]/90 p-6 shadow-[0_24px_60px_rgba(14,27,56,0.14)] backdrop-blur-md sm:p-9 lg:p-11">
          {status === 'sent' ? (
            <div role="status" className="py-10 text-center">
              <p className="font-display text-[34px] font-semibold text-summit-ink">
                <Gold>{t.register.confirmationHeading}</Gold>
              </p>
              <p className="mx-auto mt-4 max-w-[380px] text-[18px] leading-[1.55] text-summit-ink">
                {t.register.confirmation}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-8 font-ui text-[14px] font-semibold uppercase tracking-[0.1em] text-summit-gold-deep underline decoration-summit-gold/50 underline-offset-4"
              >
                {t.register.again}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="summit-fullName" className={labelClass}>
                  {t.register.fields.fullName}
                  {required}
                </label>
                <input
                  id="summit-fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={fields.fullName}
                  onChange={(e) => set('fullName')(e.target.value)}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={describedBy('fullName')}
                  className={`${fieldClass} ${errors.fullName ? 'border-[#A3271F]' : 'border-summit-muted/40'}`}
                />
                {errorText('fullName')}
              </div>

              <div>
                <label htmlFor="summit-email" className={labelClass}>
                  {t.register.fields.email}
                  {required}
                </label>
                <input
                  id="summit-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={fields.email}
                  onChange={(e) => set('email')(e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={describedBy('email')}
                  className={`${fieldClass} ${errors.email ? 'border-[#A3271F]' : 'border-summit-muted/40'}`}
                />
                {errorText('email')}
              </div>

              <div>
                <label htmlFor="summit-organization" className={labelClass}>
                  {t.register.fields.organization}
                </label>
                <input
                  id="summit-organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  value={fields.organization}
                  onChange={(e) => set('organization')(e.target.value)}
                  className={`${fieldClass} border-summit-muted/40`}
                />
              </div>

              <div>
                <label htmlFor="summit-interest" className={labelClass}>
                  {t.register.fields.interest}
                  {required}
                </label>
                <select
                  id="summit-interest"
                  name="interest"
                  required
                  value={fields.interest}
                  onChange={(e) => set('interest')(e.target.value)}
                  aria-invalid={Boolean(errors.interest)}
                  aria-describedby={describedBy('interest')}
                  className={`${fieldClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%20fill='none'%20stroke='%23101D3B'%20stroke-width='2'%20viewBox='0%200%2024%2024'%3E%3Cpath%20d='m6%209%206%206%206-6'/%3E%3C/svg%3E")] bg-[length:20px] bg-[right_14px_center] bg-no-repeat pr-12 ${
                    errors.interest ? 'border-[#A3271F]' : 'border-summit-muted/40'
                  } ${fields.interest ? '' : 'text-summit-muted'}`}
                >
                  <option value="" disabled>
                    {t.register.fields.select}
                  </option>
                  {INTEREST_OPTIONS.map((value, i) => (
                    <option key={value} value={value} className="text-summit-ink">
                      {t.register.areas[i].title}
                    </option>
                  ))}
                </select>
                {errorText('interest')}
              </div>

              <div>
                <label htmlFor="summit-message" className={labelClass}>
                  {t.register.fields.message}
                </label>
                <textarea
                  id="summit-message"
                  name="message"
                  rows={4}
                  value={fields.message}
                  onChange={(e) => set('message')(e.target.value)}
                  className={`${fieldClass} min-h-[130px] resize-y border-summit-muted/40`}
                />
              </div>

              {status === 'failed' && (
                <p role="alert" className="text-[15px] font-medium text-[#A3271F]">
                  {t.register.errors.send}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`flex min-h-[60px] w-full items-center justify-center gap-3 rounded-[12px] font-ui text-[17px] font-semibold uppercase tracking-[0.1em] transition-[filter] duration-300 disabled:cursor-wait disabled:opacity-80 md:text-[19px] ${goldFill}`}
              >
                {status === 'sending' ? t.register.sending : t.register.submit}
                {status !== 'sending' && <ArrowRight size={22} strokeWidth={2} aria-hidden="true" />}
              </button>
            </form>
          )}
        </div>
      </Wrap>
    </CreamPage>
  )
}
