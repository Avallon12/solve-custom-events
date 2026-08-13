import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import {
  Accent,
  Container,
  Display,
  Eyebrow,
  Ornament,
  Reveal,
  Section,
} from '../components/primitives'
import { perspectives, portfolio } from '../data/content'
import type { MediaId } from '../data/media'
import { usePageMeta } from '../lib/meta'

/**
 * Portfolio / Journal — the document's own sequence: Portfolio, then Features,
 * then Testimonials, then Perspectives. Nothing added.
 */

/** Photography placed by the Exact Banner-by-Banner Photo Guide. */
const GALLERY: MediaId[] = [
  'portfolio-mmm',
  'portfolio-mingle',
  'portfolio-threads',
  'portfolio-weddings',
  'portfolio-destination',
  'portfolio-multicultural',
  'portfolio-vogue',
  'portfolio-signature',
  'portfolio-workshops',
  'portfolio-conferences',
  'portfolio-fundraising',
  'portfolio-claudia-ali',
  'portfolio-italiano-1',
  'portfolio-italiano-2',
  'portfolio-italiano-3',
  'portfolio-italiano-4',
  'portfolio-italiano-5',
  'portfolio-italiano-6',
  'portfolio-italiano-7',
  'portfolio-nathan-allan-1',
  'portfolio-nathan-allan-2',
  'portfolio-nathan-allan-3',
  'portfolio-nathan-allan-4',
  'portfolio-dirt-roads-1',
  'portfolio-dirt-roads-2',
  'portfolio-dirt-roads-3',
  'portfolio-dirt-roads-4',
  'portfolio-marie-andre-1',
  'portfolio-marie-andre-2',
  'portfolio-marie-andre-3',
  'portfolio-marie-andre-4',
  'portfolio-claudia-ali-2',
  'portfolio-claudia-ali-3',
  'portfolio-proposal-1',
  'portfolio-proposal-2',
  'portfolio-valentines-1',
  'portfolio-valentines-2',
  'portfolio-valentines-3',
]

export default function Portfolio() {
  usePageMeta(
    'Portfolio / Journal — Sol Vé Custom Events',
    'The portfolio and perspectives of Sol Vé Custom Events, Calgary, Alberta.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Portfolio / Journal"
        headline={
          <>
            Portfolio and <Accent>Perspectives.</Accent>
          </>
        }
        media="portfolio-mmm"
      />

      <Section tone="ivory" rule>
        <Container>
          <Reveal>
            <Eyebrow>Portfolio</Eyebrow>
            <ul className="mt-8 space-y-1">
              {portfolio.categories.map((category) => (
                <li
                  key={category}
                  className="font-display text-[26px] leading-snug text-charcoal md:text-[34px]"
                >
                  {category}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-14 grid auto-rows-fr grid-cols-2 gap-5 md:gap-8 lg:grid-cols-3">
            {GALLERY.map((id, i) => (
              <Reveal key={id} delay={(i % 3) * 80} className="h-full">
                <div className="overflow-hidden rounded-[2px]">
                  <Media
                    id={id}
                    className="aspect-square w-full"
                    imgClassName="transition-transform duration-[1200ms] hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <p className="font-body text-[18px] text-espresso">Each project should include:</p>
            <ul className="mt-5 space-y-2">
              {portfolio.requirements.map((item) => (
                <li key={item} className="font-body text-[19px] text-charcoal md:text-[21px]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section tone="linen">
        <Container>
          <Reveal>
            <Eyebrow>Features</Eyebrow>
          </Reveal>
          <div className="mt-10 divide-y divide-bronze/30 border-y border-bronze/30">
            {portfolio.features.map((feature, i) => (
              <Reveal key={feature} delay={i * 70}>
                <p className="py-7 font-display text-[24px] text-charcoal md:text-[30px]">
                  {feature}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rule>
        <Container>
          <Reveal>
            <Eyebrow>Testimonials</Eyebrow>
          </Reveal>
          <div className="mt-10 grid border-t border-stone/40 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.testimonials.map((voice, i) => (
              <Reveal key={voice} delay={(i % 3) * 70}>
                <p className="h-full border-b border-stone/40 px-7 py-8 font-display text-[22px] text-charcoal sm:border-r md:text-[25px]">
                  {voice}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container width="narrow">
          <Reveal>
            <Eyebrow>Perspectives</Eyebrow>
          </Reveal>

          <div className="mt-14 flex flex-col gap-20 md:gap-28">
            {perspectives.map((essay, i) => (
              <article key={essay.slug} id={essay.slug} className="scroll-mt-32">
                <Reveal>
                  <Display as="h2" size="lg" className="text-charcoal">
                    {essay.title}
                  </Display>

                  <div className="prose-solve mt-9 text-espresso">
                    {essay.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 36)}>{paragraph}</p>
                    ))}
                  </div>

                  {i < perspectives.length - 1 && (
                    <div className="mt-12">
                      <Ornament />
                    </div>
                  )}
                </Reveal>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
