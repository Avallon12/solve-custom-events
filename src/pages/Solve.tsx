import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container, Ornament, Reveal } from '../components/primitives'
import { solve } from '../data/solve'
import { usePageMeta } from '../lib/meta'

/**
 * SOLVÉ Global Summit — its own world inside the Sol Vé site.
 *
 * Far Blue ground, Grey Blue for the supporting section, gold accents, Deep
 * Crimson used once. Sol Vé's ivory palette never appears here, and SOLVÉ's
 * blue never appears anywhere else.
 *
 * UNLINKED: nothing on the live site points here yet — see data/solve.ts.
 */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-ui text-[11px] uppercase text-solve-gold md:text-[12px]"
      style={{ letterSpacing: '0.3em' }}
    >
      {children}
    </p>
  )
}

export default function Solve() {
  usePageMeta(
    'SOLVÉ Global Summit — International Anti-Trafficking Conference',
    "SOLVÉ Global Summit is the world's first politically neutral, cross-sector, holistic international conference on human trafficking. Riviera Maya, Mexico. Coming soon.",
  )

  return (
    <div className="bg-solve-far">
      {/* Hero */}
      <section className="grain relative flex min-h-[92svh] items-center overflow-hidden pb-16 pt-[150px]">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(80% 70% at 50% 30%, rgba(128,136,152,0.35) 0%, rgba(14,36,71,0) 70%)',
          }}
        />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <img
            src="/media/solve-summit-logo.webp"
            alt="SOLVÉ Global Summit"
            className="h-auto w-[280px] md:w-[440px] lg:w-[520px]"
            width={1061}
            height={635}
          />

          <p className="mt-10 max-w-3xl font-body text-[20px] leading-[1.5] text-solve-white md:text-[26px]">
            {solve.subheadline}
          </p>

          <p
            className="mt-8 font-ui text-[12px] uppercase text-solve-gold md:text-[14px]"
            style={{ letterSpacing: '0.3em' }}
          >
            {solve.status}
          </p>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/solve/delegate"
              className="inline-flex min-h-[54px] items-center justify-center rounded-[2px] bg-solve-gold px-8 font-ui text-[13px] font-semibold uppercase text-solve-far transition-opacity duration-300 hover:opacity-90"
              style={{ letterSpacing: '0.5px' }}
            >
              Register Delegate Interest
            </Link>
            <Link
              to="/solve/sponsor"
              className="inline-flex min-h-[54px] items-center justify-center rounded-[2px] border-[1.5px] border-solve-gold/70 px-8 font-ui text-[13px] font-semibold uppercase text-solve-white transition-colors duration-300 hover:bg-solve-gold/15"
              style={{ letterSpacing: '0.5px' }}
            >
              Sponsorship Inquiry
            </Link>
          </div>

          <a
            href="#founders"
            className="mt-7 font-body text-[17px] text-solve-grey underline underline-offset-4 transition-colors hover:text-solve-gold"
          >
            Meet the Founders
          </a>
        </Container>
      </section>

      {/* The Problem */}
      <section className="grain relative border-t border-solve-gold/25 py-[64px] md:py-[110px]">
        <Container width="narrow">
          <Reveal>
            <Eyebrow>{solve.problem.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-[30px] leading-[1.15] text-solve-white md:text-[44px]">
              {solve.problem.heading}
            </h2>
            <p className="mt-8 font-body text-[19px] leading-[1.75] text-solve-off/85 md:text-[21px]">
              {solve.problem.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The Solution — Grey Blue */}
      <section className="grain relative bg-solve-grey py-[64px] md:py-[110px]">
        <Container width="narrow">
          <Reveal>
            <p
              className="font-ui text-[11px] uppercase text-solve-far md:text-[12px]"
              style={{ letterSpacing: '0.3em' }}
            >
              {solve.solution.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-[30px] leading-[1.15] text-solve-far md:text-[44px]">
              {solve.solution.heading}
            </h2>
            <p className="mt-8 font-body text-[19px] leading-[1.75] text-solve-far/90 md:text-[21px]">
              {solve.solution.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Why Now */}
      <section className="grain relative py-[64px] md:py-[110px]">
        <Container width="narrow">
          <Reveal className="text-center">
            <Eyebrow>{solve.whyNow.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-[30px] leading-[1.15] text-solve-white md:text-[44px]">
              {solve.whyNow.heading}
            </h2>
            <p className="mx-auto mt-8 max-w-2xl font-body text-[19px] leading-[1.75] text-solve-off/85 md:text-[21px]">
              {solve.whyNow.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Four Pillars — 2x2, gold top border on each */}
      <section className="grain relative border-t border-solve-gold/25 py-[64px] md:py-[110px]">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>The Methodology</Eyebrow>
            <h2 className="mt-6 font-display text-[30px] leading-[1.15] text-solve-white md:text-[44px]">
              The Four Pillars
            </h2>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 md:gap-8">
            {solve.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col border-t-2 border-solve-gold bg-solve-white/[0.04] p-7 md:p-10">
                  <p
                    className="font-ui text-[10px] uppercase text-solve-grey"
                    style={{ letterSpacing: '0.3em' }}
                  >
                    {pillar.number}
                  </p>
                  <h3
                    className="mt-5 font-ui text-[22px] font-semibold uppercase text-solve-gold md:text-[26px]"
                    style={{ letterSpacing: '0.14em' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="mt-5 font-body text-[18px] leading-[1.7] text-solve-off/85 md:text-[19px]">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Campaign banner — the five-icon graphic Lynea supplied */}
      <section className="relative">
        <Container>
          <Reveal>
            <img
              src="/media/solve-pillars-banner.webp"
              alt="Uniting global leadership to expose, disrupt and end human trafficking — awareness, advocacy, victim rights, supports and services, legal change"
              className="w-full rounded-[2px] ring-1 ring-solve-gold/30"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </Container>
      </section>

      {/* Who This Is For — minimum 20px, per Lynea */}
      <section className="grain relative py-[64px] md:py-[110px]">
        <Container>
          <Reveal>
            <Eyebrow>Delegates</Eyebrow>
            <h2 className="mt-6 font-display text-[30px] leading-[1.15] text-solve-white md:text-[44px]">
              Who This Is For
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-x-12 gap-y-1 md:grid-cols-2">
            {solve.delegates.map((delegate, i) => (
              <Reveal key={delegate} delay={(i % 5) * 60}>
                <li className="flex items-baseline gap-4 border-b border-solve-gold/20 py-5">
                  <span
                    className="font-ui text-[11px] text-solve-gold"
                    style={{ letterSpacing: '0.26em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body text-[20px] leading-snug text-solve-white md:text-[23px]">
                    {delegate}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Why the resort setting */}
      <section className="grain relative bg-solve-grey py-[64px] md:py-[110px]">
        <Container width="narrow">
          <Reveal>
            <h2 className="font-display text-[28px] leading-[1.2] text-solve-far md:text-[38px]">
              {solve.resort.heading}
            </h2>
            <p className="mt-8 font-body text-[19px] leading-[1.75] text-solve-far/90 md:text-[21px]">
              {solve.resort.body}
            </p>
            <p className="mt-7 font-display text-[22px] italic text-solve-far md:text-[26px]">
              {solve.resort.addendum}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Founding Partners */}
      <section className="grain relative py-[64px] md:py-[110px]">
        <Container>
          <Reveal>
            <Eyebrow>Founding Partners</Eyebrow>
            <h2 className="mt-6 font-display text-[30px] leading-[1.15] text-solve-white md:text-[44px]">
              The organizations building the table.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solve.partners.map((partner, i) => (
              <Reveal key={`${partner.name}-${i}`} delay={(i % 3) * 80} className="h-full">
                <div
                  className={`flex h-full flex-col justify-center border p-7 ${
                    partner.role
                      ? 'border-solve-gold/40 bg-solve-white/[0.04]'
                      : 'border-dashed border-solve-gold/20'
                  }`}
                >
                  <p
                    className={`font-display text-[21px] leading-snug ${
                      partner.role ? 'text-solve-white' : 'text-solve-grey'
                    }`}
                  >
                    {partner.name}
                  </p>
                  {partner.role && (
                    <p className="mt-3 font-body text-[16px] leading-snug text-solve-gold">
                      {partner.role}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 font-body text-[17px] italic text-solve-grey">
              {solve.partnersNote}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="border-l-2 border-solve-crimson bg-solve-white/[0.03] p-7 md:p-9">
              <h3 className="font-display text-[22px] text-solve-white md:text-[26px]">
                {solve.revive.heading}
              </h3>
              <p className="mt-4 max-w-2xl font-body text-[18px] leading-relaxed text-solve-off/85">
                {solve.revive.body}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Founders and Advisory Board */}
      <section
        id="founders"
        className="grain relative scroll-mt-28 border-t border-solve-gold/25 py-[64px] md:py-[110px]"
      >
        <Container>
          <Reveal>
            <Eyebrow>Governance</Eyebrow>
            <h2 className="mt-6 font-display text-[30px] leading-[1.15] text-solve-white md:text-[44px]">
              Founders and Advisory Board
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {solve.founders.map((founder, i) => (
              <Reveal key={founder.name} delay={i * 90} className="h-full">
                <div className="h-full border border-solve-gold/40 bg-solve-white/[0.04] p-7 md:p-9">
                  <p className="font-display text-[24px] text-solve-white md:text-[28px]">
                    {founder.name}
                  </p>
                  <p className="mt-3 font-body text-[17px] leading-snug text-solve-gold">
                    {founder.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: solve.advisorySlots }, (_, i) => (
              <Reveal key={i} delay={(i % 4) * 70}>
                <div className="border border-dashed border-solve-gold/20 p-6 text-center">
                  <p className="font-body text-[17px] text-solve-grey">Board Member</p>
                  <p
                    className="mt-2 font-ui text-[10px] uppercase text-solve-grey/70"
                    style={{ letterSpacing: '0.26em' }}
                  >
                    To Be Confirmed
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 font-body text-[17px] italic text-solve-grey">
              {solve.advisoryNote}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Closing */}
      <section className="grain relative border-t border-solve-gold/25 py-[64px] md:py-[100px]">
        <Container width="narrow" className="text-center">
          <Reveal>
            <img
              src="/media/solve-summit-logo.webp"
              alt=""
              aria-hidden="true"
              className="mx-auto h-auto w-[200px] opacity-90 md:w-[260px]"
            />
            <p className="mt-10 font-display text-[24px] italic leading-snug text-solve-white md:text-[30px]">
              {solve.whyNow.heading}
            </p>
            <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/solve/delegate"
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-[2px] bg-solve-gold px-8 font-ui text-[13px] font-semibold uppercase text-solve-far transition-opacity hover:opacity-90"
                style={{ letterSpacing: '0.5px' }}
              >
                Register Delegate Interest <ArrowRight size={15} />
              </Link>
              <Link
                to="/solve/sponsor"
                className="inline-flex min-h-[54px] items-center justify-center rounded-[2px] border-[1.5px] border-solve-gold/70 px-8 font-ui text-[13px] font-semibold uppercase text-solve-white transition-colors hover:bg-solve-gold/15"
                style={{ letterSpacing: '0.5px' }}
              >
                Sponsorship Inquiry
              </Link>
            </div>
            <div className="mt-14">
              <Ornament tone="light" />
            </div>
            <p className="mt-8 font-body text-[16px] text-solve-grey">
              Produced by{' '}
              <Link to="/" className="text-solve-gold underline underline-offset-4">
                Sol Vé Custom Events
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
