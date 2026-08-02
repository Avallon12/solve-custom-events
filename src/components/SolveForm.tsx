import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Container, Ornament, Reveal } from './primitives'

/**
 * Shared shell for the two SOLVÉ forms.
 *
 * Routing follows Build v5, Section 0: every submission on the site goes to
 * lynea@solvecustomevents.com and nowhere else. Set SOLVE_FORM_ENDPOINT to a
 * real handler and it POSTs there instead; until then it composes the same
 * submission as an email so nothing is lost silently.
 */

const SOLVE_FORM_ENDPOINT = ''
const ROUTE_TO = 'lynea@solvecustomevents.com'

export type Field = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'select' | 'textarea'
  required?: boolean
  options?: readonly string[]
}

const fieldClass =
  'w-full rounded-[2px] border border-solve-gold/30 bg-solve-white/[0.04] px-[18px] py-[14px] font-body text-[18px] text-solve-white transition-colors duration-300 placeholder:text-solve-grey focus:border-solve-gold focus:outline-none'

export default function SolveForm({
  eyebrow,
  heading,
  body,
  fields,
  submit,
  confirmation,
  subject,
}: {
  eyebrow: string
  heading: string
  body: string
  fields: readonly Field[]
  submit: string
  confirmation: string
  subject: string
}) {
  const [sent, setSent] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (SOLVE_FORM_ENDPOINT) {
      await fetch(SOLVE_FORM_ENDPOINT, { method: 'POST', body: data })
    } else {
      const lines = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join('\n')
      window.location.href = `mailto:${ROUTE_TO}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(lines)}`
    }

    setSent(true)
    form.reset()
  }

  return (
    <div className="grain relative min-h-screen bg-solve-far pb-[90px] pt-[150px]">
      <Container width="narrow" className="relative z-10">
        <Reveal>
          <Link
            to="/solve"
            className="inline-flex items-center gap-2 font-ui text-[11px] uppercase text-solve-grey transition-colors hover:text-solve-gold"
            style={{ letterSpacing: '0.26em' }}
          >
            <ArrowLeft size={14} /> SOLVÉ Global Summit
          </Link>

          <p
            className="mt-10 font-ui text-[11px] uppercase text-solve-gold md:text-[12px]"
            style={{ letterSpacing: '0.3em' }}
          >
            {eyebrow}
          </p>
          <h1 className="mt-6 font-display text-[34px] leading-[1.12] text-solve-white md:text-[50px]">
            {heading}
          </h1>
          <p className="mt-7 max-w-2xl font-body text-[19px] leading-[1.7] text-solve-off/85 md:text-[21px]">
            {body}
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          {sent ? (
            <div className="border border-solve-gold/40 bg-solve-white/[0.04] px-7 py-16 text-center md:px-12">
              <Ornament tone="light" />
              <p className="mt-10 font-display text-[26px] text-solve-white md:text-[32px]">
                Thank you.
              </p>
              <p className="mx-auto mt-5 max-w-md font-body text-[18px] leading-relaxed text-solve-off/85">
                {confirmation}
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-9 font-ui text-[11px] uppercase text-solve-gold underline underline-offset-4"
                style={{ letterSpacing: '0.22em' }}
              >
                Submit another
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-6 border border-solve-gold/30 p-6 md:p-10"
            >
              {fields.map((field) => {
                const id = `solve-${field.name}`
                return (
                  <div key={field.name}>
                    <label
                      htmlFor={id}
                      className="block font-ui text-[11px] uppercase text-solve-grey"
                      style={{ letterSpacing: '0.22em' }}
                    >
                      {field.label}
                      {field.required && <span className="text-solve-gold"> *</span>}
                    </label>

                    {field.type === 'select' ? (
                      <select
                        id={id}
                        name={field.name}
                        required={field.required}
                        defaultValue=""
                        className={`${fieldClass} mt-2.5`}
                      >
                        <option value="" disabled>
                          Please select
                        </option>
                        {field.options?.map((option) => (
                          <option key={option} value={option} className="text-charcoal">
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.type === 'textarea' ? (
                      <textarea
                        id={id}
                        name={field.name}
                        required={field.required}
                        rows={5}
                        className={`${fieldClass} mt-2.5 resize-y`}
                      />
                    ) : (
                      <input
                        id={id}
                        name={field.name}
                        type={field.type ?? 'text'}
                        required={field.required}
                        className={`${fieldClass} mt-2.5`}
                      />
                    )}
                  </div>
                )
              })}

              <button
                type="submit"
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-[2px] bg-solve-gold px-8 font-ui text-[13px] font-semibold uppercase text-solve-far transition-opacity duration-300 hover:opacity-90"
                style={{ letterSpacing: '0.5px' }}
              >
                {submit}
              </button>

              <p className="font-body text-[15px] leading-relaxed text-solve-grey">
                Your submission goes directly to the Conference Director.
              </p>
            </form>
          )}
        </Reveal>
      </Container>
    </div>
  )
}
