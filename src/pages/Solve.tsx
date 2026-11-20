import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, MapPin, Mail, Globe2 } from 'lucide-react'
import { Container, Reveal } from '../components/primitives'
import { solve } from '../data/solve'
import { usePageMeta } from '../lib/meta'

/**
 * SOLVÉ Global Summit — restored inside the Sol Vé site shell.
 *
 * Content and photography follow the November 2026 mockups word for word.
 * The Sol Vé Nav and Footer stay; this is not a separate summit website.
 */

const navy = 'text-[#0A192F]'
const gold = 'text-[#C4A35A]'

function SummitCta({ to = '/solve/register', children }: { to?: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C4A35A] to-[#A8893A] px-9 font-ui text-[13px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_28px_rgba(168,137,58,0.35)] transition-opacity duration-300 hover:opacity-90"
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.25} />
    </Link>
  )
}

function SectionTitle({
  line1,
  line2,
  line3,
  center = false,
}: {
  line1: string
  line2?: string
  line3?: string
  center?: boolean
}) {
  return (
    <h2
      className={`font-display text-[34px] leading-[1.12] md:text-[48px] lg:text-[56px] ${center ? 'text-center' : ''} ${navy}`}
    >
      {line1}
      {line2 ? (
        <>
          <br />
          <span className={gold}>{line2}</span>
        </>
      ) : null}
      {line3 ? (
        <>
          <br />
          {line3}
        </>
      ) : null}
    </h2>
  )
}

export default function Solve() {
  usePageMeta(
    'SOLVÉ Global Summit — Coming Soon 2028, Quintana Roo',
    'An independent international convening platform connecting global leadership, knowledge, institutions, frontline workers and support services. Coming Soon 2028 | Quintana Roo, Mexico.',
    { image: '/media/solve-hero.webp' },
  )

  return (
    <div className="bg-[#F7F4EC]">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92svh] overflow-hidden pb-16 pt-[130px] md:pt-[150px]">
        <img
          src="/media/solve-hero-bg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[70%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EC] via-[#F7F4EC]/92 to-[#F7F4EC]/25 md:via-[#F7F4EC]/88 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EC] via-transparent to-[#F7F4EC]/40" />

        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <img
              src="/media/solve-summit-logo.webp"
              alt={solve.logoAlt}
              className="mb-8 h-auto w-[220px] md:w-[300px]"
              width={743}
              height={336}
            />
            <h1 className={`font-display text-[40px] leading-[1.08] md:text-[56px] lg:text-[64px] ${navy}`}>
              {solve.hero.line1}
              <br />
              <span className={gold}>{solve.hero.line2}</span>
              <br />
              {solve.hero.line3}
            </h1>
            <p className="mt-7 max-w-xl font-ui text-[15px] leading-[1.7] text-[#3A4558] md:text-[17px]">
              {solve.hero.body}
            </p>

            <div className="mt-8 inline-flex max-w-full flex-col gap-2 rounded-sm border border-[#C4A35A]/50 bg-[#E8D9A8]/85 px-5 py-3 shadow-[0_8px_24px_rgba(10,25,47,0.08)] backdrop-blur-sm sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex items-center gap-2 font-ui text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0A192F]">
                <Calendar size={15} className="text-[#A8893A]" />
                {solve.hero.status}
              </span>
              <span className="hidden h-4 w-px bg-[#C4A35A]/60 sm:block" aria-hidden="true" />
              <span className="inline-flex items-center gap-2 font-ui text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0A192F]">
                <MapPin size={15} className="text-[#A8893A]" />
                {solve.hero.location}
              </span>
            </div>

            <div className="mt-10">
              <SummitCta>{solve.hero.cta}</SummitCta>
            </div>
          </Reveal>

          <Reveal className="relative hidden lg:block">
            <img
              src="/media/solve-hero.webp"
              alt="Global leaders in conversation at an outdoor convening overlooking the coast"
              className="h-auto w-full rounded-[2px] object-cover shadow-[0_24px_60px_rgba(10,25,47,0.18)]"
              width={1600}
              height={1000}
            />
          </Reveal>
        </Container>
      </section>

      {/* ── About the Summit ─────────────────────────────────────────────── */}
      <section id="about" className="relative scroll-mt-28 overflow-hidden py-[72px] md:py-[110px]">
        <img
          src="/media/solve-about.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-[#F7F4EC]/92" />
        <Container className="relative z-10">
          <Reveal>
            <SectionTitle line1={solve.about.line1} line2={solve.about.line2} center />
            <p className="mx-auto mt-7 max-w-3xl text-center font-ui text-[16px] leading-[1.75] text-[#3A4558] md:text-[18px]">
              {solve.about.body}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
            {solve.about.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} className={`px-2 md:px-8 ${i > 0 ? 'md:border-l md:border-[#C4A35A]/45' : ''}`}>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#C4A35A]/60 bg-white/60">
                  <span className="font-display text-[22px] text-[#C4A35A]">{i + 1}</span>
                </div>
                <h3 className={`text-center font-display text-[22px] leading-[1.25] md:text-[24px] ${navy}`}>
                  {pillar.title}
                </h3>
                <p className="mt-4 text-center font-ui text-[15px] leading-[1.7] text-[#3A4558]">
                  {pillar.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p
              className={`font-display text-[16px] uppercase tracking-[0.22em] md:text-[18px] ${gold}`}
            >
              {solve.about.closing}
            </p>
            <div className="mt-8 flex justify-center">
              <SummitCta>{solve.hero.cta}</SummitCta>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── The Platform ─────────────────────────────────────────────────── */}
      <section id="platform" className="scroll-mt-28 border-t border-[#C4A35A]/30 bg-[#0A192F] py-[72px] md:py-[110px]">
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-[34px] leading-[1.12] text-white md:text-[48px] lg:text-[56px]">
              {solve.platform.line1}{' '}
              <span className={gold}>{solve.platform.line2}</span>
              <br />
              {solve.platform.line3}
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-center font-ui text-[16px] leading-[1.75] text-white/80 md:text-[18px]">
              {solve.platform.body}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solve.platform.pillars.map((pillar) => (
              <Reveal
                key={pillar.title}
                className="rounded-[2px] border border-[#C4A35A]/40 bg-white/[0.04] p-7"
              >
                <p
                  className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#C4A35A]"
                >
                  Pillar
                </p>
                <h3 className="mt-4 font-display text-[26px] text-white">{pillar.title}</h3>
                <p className="mt-4 font-ui text-[15px] leading-[1.7] text-white/75">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Global Challenges ────────────────────────────────────────────── */}
      <section id="challenges" className="relative scroll-mt-28 overflow-hidden py-[72px] md:py-[110px]">
        <img
          src="/media/solve-earth.webp"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-[42%] w-[48%] object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4EC] via-[#F7F4EC]/95 to-[#F7F4EC]/80" />
        <Container className="relative z-10">
          <Reveal>
            <SectionTitle line1={solve.challenges.line1} line2={solve.challenges.line2} />
            <p className="mt-6 max-w-2xl font-ui text-[17px] leading-[1.7] text-[#3A4558] md:text-[19px]">
              {solve.challenges.body}
            </p>
          </Reveal>

          <Reveal className="mt-12 rounded-2xl border border-[#C4A35A]/40 bg-[#F3ECD9]/90 px-6 py-8 shadow-[0_12px_40px_rgba(10,25,47,0.06)] md:px-10">
            <div className="grid gap-8 md:grid-cols-3 md:gap-6">
              {solve.challenges.stats.map((stat) => (
                <div key={stat.value} className="text-center md:text-left">
                  <p className={`font-display text-[34px] leading-none md:text-[40px] ${gold}`}>
                    {stat.value}
                  </p>
                  <p className="mt-3 font-ui text-[14px] leading-[1.5] text-[#0A192F]">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center font-ui text-[12px] tracking-[0.04em] text-[#6B7280]">
              {solve.challenges.source}
            </p>
          </Reveal>

          <Reveal className="mt-16">
            <p
              className={`text-center font-ui text-[12px] uppercase tracking-[0.28em] ${gold}`}
            >
              {solve.challenges.impactAreasHeading}
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {solve.challenges.impactAreas.map((area) => (
                <div key={area.title}>
                  <h3 className={`font-display text-[22px] ${gold}`}>{area.title}</h3>
                  <p className="mt-3 font-ui text-[15px] leading-[1.65] text-[#3A4558]">{area.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 flex justify-center">
            <SummitCta>{solve.hero.cta}</SummitCta>
          </div>
        </Container>
      </section>

      {/* ── Impact ───────────────────────────────────────────────────────── */}
      <section
        id="impact"
        className="relative scroll-mt-28 overflow-hidden border-t border-[#C4A35A]/25 py-[72px] md:py-[110px]"
      >
        <img
          src="/media/solve-mountains.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[45%] w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EC] via-[#F7F4EC]/92 to-[#F7F4EC]/70" />
        <Container className="relative z-10">
          <Reveal>
            <SectionTitle line1={solve.impact.line1} line2={solve.impact.line2} center />
            <p className="mx-auto mt-7 max-w-3xl text-center font-ui text-[16px] leading-[1.75] text-[#3A4558] md:text-[18px]">
              {solve.impact.body}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {solve.impact.values.map((value) => (
              <Reveal
                key={value.title}
                className="rounded-[2px] border border-[#C4A35A]/40 bg-white/70 p-8 backdrop-blur-sm"
              >
                <h3 className={`font-display text-[24px] ${navy}`}>{value.title}</h3>
                <p className="mt-4 font-ui text-[15px] leading-[1.7] text-[#3A4558]">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-28 bg-[#0A192F] py-[72px] md:py-[100px]">
        <Container width="narrow" className="text-center">
          <Reveal>
            <h2 className="font-display text-[40px] text-white md:text-[52px]">{solve.contact.heading}</h2>
            <p className="mx-auto mt-5 max-w-2xl font-ui text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
              {solve.contact.body}
            </p>
            <div className="mt-10 space-y-4 font-ui text-[15px] text-white md:text-[16px]">
              <p className="inline-flex items-center gap-2">
                <Mail size={16} className="text-[#C4A35A]" />
                <a
                  href={`mailto:${solve.contact.email}`}
                  className="transition-colors hover:text-[#C4A35A]"
                >
                  {solve.contact.email}
                </a>
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-[#C4A35A]" />
                {solve.contact.location}
              </p>
              <p className="inline-flex items-center gap-2">
                <Globe2 size={16} className="text-[#C4A35A]" />
                <a
                  href={solve.contact.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#C4A35A]"
                >
                  {solve.contact.website}
                </a>
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <SummitCta>{solve.hero.cta}</SummitCta>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
