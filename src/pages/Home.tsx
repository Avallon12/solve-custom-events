import { Link } from 'react-router-dom'
import { HeroLink, SmoothScrollHero } from '../components/ui/modern-hero'
import Media from '../components/Media'
import ScrollFeature from '../components/ScrollFeature'
import ClosingCTA from '../components/ClosingCTA'
import {
  Accent,
  Btn,
  Card,
  Container,
  Display,
  Eyebrow,
  GoldRule,
  Lede,
  Ornament,
  Reveal,
  Section,
} from '../components/primitives'
import { commitments, foundation, founder, home, press } from '../data/content'
import { usePageMeta } from '../lib/meta'

/**
 * The frames that drift up over the opening hero, at four different speeds.
 * Widths and offsets follow the source component; the photography is Sol Vé's.
 */
const FRAMES = [
  { id: 'portfolio-florals', start: -200, end: 200, className: 'w-1/3' },
  { id: 'division-design-stylization', start: 200, end: -250, className: 'mx-auto w-2/3' },
  { id: 'portfolio-claudia-ali', start: -200, end: 200, className: 'ml-auto w-1/3' },
  { id: 'division-signature-moments', start: 0, end: -500, className: 'ml-[12%] w-5/12' },
] as const

const PORTFOLIO = [
  { id: 'portfolio-claudia-ali', span: 'md:col-span-7', ratio: 'aspect-[4/3]' },
  { id: 'portfolio-florals', span: 'md:col-span-5 md:mt-16', ratio: 'aspect-[3/4]' },
  { id: 'portfolio-white-wedding', span: 'md:col-span-5', ratio: 'aspect-[3/4]' },
  { id: 'portfolio-christina-vince', span: 'md:col-span-7 md:mt-20', ratio: 'aspect-[4/3]' },
  { id: 'portfolio-modern-rustic', span: 'md:col-span-7', ratio: 'aspect-[16/10]' },
  { id: 'portfolio-celebration', span: 'md:col-span-5 md:mt-12', ratio: 'aspect-[4/5]' },
] as const

export default function Home() {
  usePageMeta(
    'Sol Vé Custom Events — Luxury Event Production, Calgary Alberta',
    'Sol Vé Custom Events designs how people gather. Luxury weddings, signature moments, curated workshops, conferences and fundraising campaigns, produced in Calgary and worldwide.',
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
            <HeroLink to="/connect">Begin Your Journey</HeroLink>
            <HeroLink to="/experiences" variant="outline">
              Discover Experiences
            </HeroLink>
          </>
        }
      />

      {/* Philosophy — 55 / 45, text left, image right */}
      <Section tone="ivory" rule className="z-10">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">
            <Reveal>
              <Eyebrow>{home.philosophyEyebrow}</Eyebrow>
              <Display as="h2" size="lg" className="mt-6 max-w-xl text-charcoal">
                {home.philosophyHeadline}
              </Display>
              <div className="mt-8 max-w-xl space-y-6 font-body text-[18px] leading-[1.7] text-cocoa md:text-[20px]">
                {home.philosophyBody.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10">
                <Btn to="/foundation" variant="outline">
                  Our Foundation
                </Btn>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <Media id="home-philosophy" className="aspect-[4/5] w-full" />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Beyond the Occasion — the brand's central belief, set as a dark interlude */}
      <section className="relative overflow-hidden bg-charcoal py-[70px] text-ivory md:py-[120px]">
        <div className="grain absolute inset-0 opacity-50" />
        <GoldRule className="absolute inset-x-0 top-0" />
        <Container width="narrow" className="relative z-10">
          <Reveal className="text-center">
            <Eyebrow tone="light">Beyond the Occasion</Eyebrow>
            <Display as="p" size="lg" className="mt-8 text-ivory">
              Not every gathering shapes what follows.
              <br />
              <span className="text-gold">The ones that do are never left to chance.</span>
            </Display>
          </Reveal>

          <div className="mt-14 space-y-10">
            {foundation.beyond.couplets.map(([first, second], i) => (
              <Reveal key={first} delay={i * 90}>
                <div className="border-l border-gold/40 pl-6 md:pl-9">
                  <p className="font-display text-[22px] leading-snug text-ivory md:text-[28px]">
                    {first}
                  </p>
                  <p className="mt-2 font-body text-[18px] leading-relaxed text-champagne/85 md:text-[20px]">
                    {second}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Ornament tone="light" />
            <p className="mt-10 font-display text-[24px] italic text-gold md:text-[30px]">
              That is why Sol Vé.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Six divisions */}
      <ScrollFeature />

      {/* Commitments — three, equal */}
      <Section tone="ivory" rule id="commitments-preview">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Our Commitments</Eyebrow>
            <Display as="h2" size="lg" className="mt-6 text-charcoal">
              What we stand for.
            </Display>
            <p className="mx-auto mt-7 max-w-2xl font-display text-[21px] italic leading-relaxed text-espresso md:text-[26px]">
              “{commitments.quote}”
            </p>
            <p
              className="mt-4 font-ui text-[11px] uppercase text-stone"
              style={{ letterSpacing: '0.3em' }}
            >
              {commitments.quoteAttribution}
            </p>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 md:gap-8">
            {commitments.pillars.map((pillar, i) => (
              <Reveal key={pillar.id} delay={i * 100} className="h-full">
                <Card tone="linen" className="flex h-full flex-col">
                  <p
                    className="font-ui text-[11px] uppercase text-bronze"
                    style={{ letterSpacing: '0.3em' }}
                  >
                    {pillar.label}
                  </p>
                  <h3 className="mt-5 font-display text-[23px] leading-tight text-charcoal md:text-[26px]">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 font-body text-[18px] leading-relaxed text-cocoa">
                    {pillar.lead}
                  </p>
                  <Link
                    to={`/commitments#${pillar.id}`}
                    className="mt-auto pt-8 font-ui text-[11px] uppercase text-espresso underline underline-offset-4 hover:text-gold"
                    style={{ letterSpacing: '0.22em' }}
                  >
                    Read the commitment
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio — editorial, asymmetric, never a thumbnail wall */}
      <Section tone="linen">
        <Container>
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Selected Work</Eyebrow>
              <Display as="h2" size="lg" className="mt-6 max-w-lg text-charcoal">
                Rooms that people are still talking about.
              </Display>
            </div>
            <Btn to="/portfolio" variant="outline">
              View the Portfolio
            </Btn>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-12 md:gap-8">
            {PORTFOLIO.map((item, i) => (
              <Reveal key={item.id} delay={(i % 2) * 90} className={item.span}>
                <Media id={item.id} className={`${item.ratio} w-full`} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Press */}
      <Section tone="ivory" rule>
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Press and Recognition</Eyebrow>
            <Display as="h2" size="md" className="mt-6 text-charcoal">
              Where our work has been seen.
            </Display>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[2px] bg-stone/40 sm:grid-cols-2 lg:grid-cols-4">
            {[...press.features, press.awards[0]].slice(0, 4).map((item, i) => (
              <Reveal key={item.name} delay={i * 70}>
                <div className="flex h-full flex-col items-center bg-ivory px-6 py-10 text-center">
                  <p className="font-display text-[21px] text-charcoal">{item.name}</p>
                  <p className="mt-3 font-body text-[16px] leading-snug text-cocoa">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              to="/press"
              className="font-ui text-[11px] uppercase text-espresso underline underline-offset-4 hover:text-gold"
              style={{ letterSpacing: '0.22em' }}
            >
              Press, publications and awards
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Founder */}
      <Section tone="champagne">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[42fr_58fr] lg:items-center lg:gap-20">
            <Reveal>
              <Media id="founder-portrait" className="aspect-[4/5] w-full" />
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>Meet the Founder</Eyebrow>
              <blockquote className="mt-8 border-l-2 border-gold pl-6 md:pl-9">
                <p className="font-display text-[24px] italic leading-[1.35] text-charcoal md:text-[34px]">
                  “{founder.quote}”
                </p>
              </blockquote>
              <p
                className="mt-7 font-ui text-[11px] uppercase text-espresso"
                style={{ letterSpacing: '0.26em' }}
              >
                {founder.quoteAttribution}
              </p>
              <div className="mt-10">
                <Btn to="/founder" variant="outline">
                  Her Story
                </Btn>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rule className="!py-[60px] md:!py-[90px]">
        <Container width="narrow">
          <Reveal className="text-center">
            <Lede className="text-cocoa">{home.closingBody}</Lede>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA heading={home.closingHeadline} />
    </>
  )
}
