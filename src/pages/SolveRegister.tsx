import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Container, Reveal } from '../components/primitives'
import { solve } from '../data/solve'
import { usePageMeta } from '../lib/meta'

/**
 * Register Your Interest — verbatim from the November 2026 mockup.
 * Submissions route to lynea@solvecustomevents.com (Sol Vé site rule) until a
 * dedicated summit endpoint is provisioned.
 */

const FORM_ENDPOINT = ''
const ROUTE_TO = 'lynea@solvecustomevents.com'

const fieldClass =
  'w-full rounded-[6px] border border-[#C4A35A]/45 bg-white px-[18px] py-[14px] font-ui text-[16px] text-[#0A192F] transition-colors duration-300 placeholder:text-[#6B7280] focus:border-[#C4A35A] focus:outline-none'
const labelClass = 'mb-2 block font-ui text-[13px] font-semibold text-[#0A192F]'

export default function SolveRegister() {
  const [sent, setSent] = useState(false)
  usePageMeta(
    'Register Your Interest | SOLVÉ Global Summit',
    'Be part of a global platform for leadership, collaboration and lasting impact. Register your interest in SOLVÉ Global Summit.',
  )

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (FORM_ENDPOINT) {
      await fetch(FORM_ENDPOINT, { method: 'POST', body: data })
    } else {
      const body = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join('\n')
      window.location.href = `mailto:${ROUTE_TO}?subject=${encodeURIComponent(
        `SOLVÉ Global Summit — Interest (${data.get('interest') ?? 'General'})`,
      )}&body=${encodeURIComponent(body)}`
    }

    setSent(true)
    form.reset()
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7F4EC] pb-[90px] pt-[140px]">
      <img
        src="/media/solve-register-bg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[38%] w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EC] via-[#F7F4EC]/95 to-[#F7F4EC]/75" />

      <Container className="relative z-10">
        <Reveal>
          <Link
            to="/solve"
            className="inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.26em] text-[#6B7280] transition-colors hover:text-[#C4A35A]"
          >
            <ArrowLeft size={14} /> SOLVÉ Global Summit
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <h1 className="font-display text-[40px] leading-[1.1] text-[#0A192F] md:text-[52px]">
              {solve.register.heading}
            </h1>
            <p className="mt-5 max-w-md font-ui text-[16px] leading-[1.7] text-[#3A4558]">
              {solve.register.body}
            </p>

            <p className="mt-12 font-ui text-[12px] uppercase tracking-[0.28em] text-[#C4A35A]">
              {solve.register.areasHeading}
            </p>
            <div className="mt-6 space-y-6">
              {solve.register.areas.map((area) => (
                <div key={area.title} className="border-l border-[#C4A35A]/50 pl-5">
                  <h3 className="font-display text-[20px] text-[#0A192F]">{area.title}</h3>
                  <p className="mt-1 font-ui text-[14px] leading-[1.6] text-[#3A4558]">{area.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            {sent ? (
              <div className="rounded-2xl border border-[#C4A35A]/50 bg-white/90 p-10 shadow-[0_20px_50px_rgba(10,25,47,0.08)]">
                <p className="font-display text-[28px] leading-[1.35] text-[#0A192F]">
                  {solve.register.confirmation}
                </p>
                <Link
                  to="/solve"
                  className="mt-8 inline-flex items-center gap-2 font-ui text-[13px] uppercase tracking-[0.12em] text-[#C4A35A]"
                >
                  Back to SOLVÉ Global Summit <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-[#C4A35A]/40 bg-white/95 p-8 shadow-[0_20px_50px_rgba(10,25,47,0.08)] md:p-10"
                noValidate
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="full_name" className={labelClass}>
                      Full Name <span className="text-[#A8893A]">*</span>
                    </label>
                    <input
                      id="full_name"
                      name="full_name"
                      type="text"
                      required
                      autoComplete="name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address <span className="text-[#A8893A]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className={labelClass}>
                      Organization / Affiliation
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      autoComplete="organization"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className={labelClass}>
                      Area of Interest <span className="text-[#A8893A]">*</span>
                    </label>
                    <select id="interest" name="interest" required className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      {solve.register.interestOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message (optional)
                    </label>
                    <textarea id="message" name="message" rows={5} className={fieldClass} />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C4A35A] to-[#A8893A] px-9 font-ui text-[13px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_28px_rgba(168,137,58,0.35)] transition-opacity duration-300 hover:opacity-90"
                >
                  {solve.register.submit}
                  <ArrowRight size={16} strokeWidth={2.25} />
                </button>
                <p className="mt-4 text-center font-ui text-[12px] text-[#6B7280]">
                  Submissions are routed to {ROUTE_TO}.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </div>
  )
}
