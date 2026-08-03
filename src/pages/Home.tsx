import { HeroLink, SmoothScrollHero } from '../components/ui/modern-hero'
import Media from '../components/Media'
import ScrollFeature from '../components/ScrollFeature'
import ClosingCTA from '../components/ClosingCTA'
import {
  Accent,
  Btn,
  Container,
  Display,
  Eyebrow,
  GoldRule,
  Lede,
  Ornament,
  Reveal,
  Section,
} from '../components/primitives'
import { foundation, home } from '../data/content'
import { usePageMeta } from '../lib/meta'

/**
 * The frames that drift up over the opening hero, at four different speeds.
 * Widths and offsets follow the source component; the photography is Sol Vé's.
 */
const FRAMES = [
  { id: 'portfolio-florals', start: -200, end: 200, className: 'w-2/3 sm:w-1/3' },
  { id: 'division-design-stylization', start: 200, end: -250, className: 'mx-auto w-[85%] sm:w-2/3' },
  { id: 'portfolio-claudia-ali', start: -200, end: 200, className: 'ml-auto w-2/3 sm:w-1/3' },
  { id: 'division-signature-moments', start: 0, end: -500, className: 'ml-[12%] w-3/4 sm:w-5/12' },
] as const

/** The six the Photo Guide lists as Homepage portfolio highlights. */
const PORTFOLIO = [
  { id: 'portfolio-mmm', span: 'md:col-span-7', ratio: 'aspect-[3/2]' },
  { id: 'portfolio-threads', span: 'md:col-span-5 md:mt-16', ratio: 'aspect-[3/2]' },
  { id: 'portfolio-weddings', span: 'md:col-span-5', ratio: 'aspect-[3/4]' },
  { id: 'portfolio-mingle', span: 'md:col-span-7 md:mt-20', ratio: 'aspect-[3/2]' },
  { id: 'portfolio-destination', span: 'md:col-span-5', ratio: 'aspect-[3/4]' },
  { id: 'portfolio-vogue', span: 'md:col-span-7 md:mt-12', ratio: 'aspect-[3/2]' },
] as const

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

      {/* Philosophy — 55 / 45, text left, image right */}
      <Section tone="ivory" rule className="z-10">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">
            <Reveal>
              <Eyebrow>{home.philosophyEyebrow}</Eyebrow>
              <Display as="h2" size="lg" className="mt-6 max-w-xl text-charcoal">
                {home.philosophyHeadline}
              </Display>
              <div className="mt-8 max-w-xl space-y-6 font-body text-[18px] leading-[1.7] text-espresso md:text-[20px]">
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
              View Our Work
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

      <Section tone="ivory" rule className="!py-[60px] md:!py-[90px]">
        <Container width="narrow">
          <Reveal className="text-center">
            <Lede className="text-espresso">{home.closingBody}</Lede>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA heading={home.closingHeadline} />
    </>
  )
}
