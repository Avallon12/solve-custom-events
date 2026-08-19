import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HeroLink, SmoothScrollHero } from '../components/ui/modern-hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Accent, Container, Eyebrow, GoldRule, Reveal } from '../components/primitives'
import { home } from '../data/content'
import { divisions } from '../data/divisions'
import { usePageMeta } from '../lib/meta'

/**
 * The frames that drift up over the opening hero, at four different speeds.
 * Widths and offsets follow the source component; every frame renders its
 * designed placeholder until credited photography arrives.
 */
const FRAMES = [
  { id: 'portfolio-florals', start: -200, end: 200, className: 'w-2/3 sm:w-1/3' },
  { id: 'division-design-stylization', start: 200, end: -250, className: 'mx-auto w-[85%] sm:w-2/3' },
  { id: 'portfolio-claudia-ali', start: -200, end: 200, className: 'ml-auto w-2/3 sm:w-1/3' },
  { id: 'division-signature-moments', start: 0, end: -500, className: 'ml-[12%] w-3/4 sm:w-5/12' },
  // The client's recovered photography continues the drift, same rhythm.
  { id: 'portfolio-dirt-roads-2', start: -200, end: 200, className: 'w-2/3 sm:w-1/3' },
  { id: 'portfolio-marie-andre-2', start: 200, end: -250, className: 'mx-auto w-[85%] sm:w-2/3' },
  { id: 'portfolio-valentines-1', start: -200, end: 200, className: 'ml-auto w-2/3 sm:w-1/3' },
  { id: 'portfolio-italiano-3', start: 0, end: -500, className: 'ml-[12%] w-3/4 sm:w-5/12' },
  { id: 'portfolio-proposal-1', start: -200, end: 200, className: 'w-2/3 sm:w-1/3' },
  { id: 'portfolio-nathan-allan-3', start: 200, end: -250, className: 'mx-auto w-[85%] sm:w-2/3' },
  { id: 'reel-weddings', start: 0, end: -500, className: 'ml-[12%] w-3/4 sm:w-5/12' },
] as const

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI']

export default function Home() {
  usePageMeta(
    'Sol Vé Custom Events | Event Design & Production in Calgary',
    'Sol Vé creates thoughtfully designed weddings, signature celebrations, workshops, conferences and fundraising experiences in Calgary, throughout Canada and internationally.',
  )

  return (
    <>
      <SmoothScrollHero
        eyebrow={home.eyebrow}
        headline={
          <>
            We design how people <Accent>gather.</Accent>
          </>
        }
        subheadline={home.subheadline}
        centre="home-hero"
        frames={FRAMES}
        actions={
          <>
            <HeroLink to="/connect">Begin your Journey</HeroLink>
            <HeroLink to="/what-we-create" variant="outline">
              Discover Experiences
            </HeroLink>
          </>
        }
      />

      {/*
        The document gives the Home page one block of copy — the eyebrow,
        headline, subheadline and two buttons above. Everything below reuses
        only her own words verbatim (division names from the header, the
        Connect lines in the closing) as navigation — nothing is added.
      */}

      {/* The six divisions as an engraved index — names only, links out. */}
      <section className="grain relative bg-charcoal py-[72px] md:py-[120px]">
        <GoldRule className="absolute inset-x-0 top-0" />
        <Container>
          <Reveal>
            <Eyebrow tone="light">Six Divisions of Experiences</Eyebrow>
          </Reveal>
          <ol className="mt-10 md:mt-14">
            {divisions.map((division, i) => (
              <Reveal key={division.slug} delay={i * 70}>
                <li className="border-t border-gold/20 last:border-b">
                  <Link
                    to={`/divisions/${division.slug}`}
                    className="group flex items-baseline gap-5 py-6 transition-colors duration-300 md:gap-10 md:py-8"
                  >
                    <span
                      className="w-8 shrink-0 font-ui text-[13px] text-gold/70 transition-colors duration-300 group-hover:text-gold md:w-12 md:text-[15px]"
                      style={{ letterSpacing: '0.18em' }}
                    >
                      {NUMERALS[i]}
                    </span>
                    <span className="min-w-0 font-display text-[26px] leading-[1.12] text-ivory transition-colors duration-300 group-hover:text-champagne sm:text-[34px] md:text-[44px]">
                      {division.name}
                    </span>
                    <ArrowRight
                      size={20}
                      className="ml-auto shrink-0 self-center text-gold/0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Full-bleed editorial band — a designed placeholder until her photograph arrives. */}
      <section aria-label="Editorial photograph" className="relative">
        <Media
          id="home-band"
          showCaption={false}
          className="aspect-[16/10] w-full sm:aspect-[21/9]"
          imgClassName="h-full w-full"
        />
      </section>

      <ClosingCTA />
    </>
  )
}
