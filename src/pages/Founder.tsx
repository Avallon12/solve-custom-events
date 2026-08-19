import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Display, Prose, Reveal, Section } from '../components/primitives'
import { founder } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** "Meet Lynea" — transcribed word for word. Nothing added. */
export default function Founder() {
  usePageMeta(
    'Meet Lynea — Sol Vé Custom Events',
    'Lynea Vaugeois Hetherington, Founder of Sol Vé Custom Events, on stewardship, belonging and the way people gather.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Meet the Founder"
        headline={founder.headline}
        subheadline={founder.subheadline}
        media="founder-hero"
      />

      <Section tone="ivory" rule>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[40fr_60fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <Media id="founder-portrait" className="aspect-[4/5] w-full" />
                <p
                  className="mt-6 font-ui text-[11px] uppercase text-walnut"
                  style={{ letterSpacing: '0.26em' }}
                >
                  Lynea Vaugeois Hetherington
                  <br />
                  Founder, Sol Vé Custom Events
                </p>
              </div>
            </Reveal>

            <Reveal delay={110}>
              {founder.opening.map((line) => (
                <p
                  key={line}
                  className="font-body text-[19px] leading-relaxed text-espresso md:text-[21px]"
                >
                  {line}
                </p>
              ))}

              <p className="mt-4 font-display text-[24px] leading-snug text-charcoal md:text-[32px]">
                {founder.emphasis}
              </p>

              <div className="mt-9">
                <Prose paragraphs={founder.body} />
              </div>

              <p className="font-display text-[22px] leading-snug text-charcoal md:text-[28px]">
                {founder.idea}
              </p>

              <div className="mt-9">
                <Prose paragraphs={founder.body2} />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="linen">
        <Container width="narrow">
          <Reveal>
            <Display as="h2" size="lg" className="text-charcoal">
              {founder.trust.title}
            </Display>

            <div className="mt-10 space-y-4 border-l border-bronze/40 pl-6 md:pl-9">
              {founder.trust.entrusts.map((line) => (
                <p
                  key={line}
                  className="font-body text-[19px] leading-relaxed text-charcoal md:text-[21px]"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <Prose paragraphs={founder.trust.body} />
            </div>

            <p className="font-display text-[22px] leading-snug text-charcoal md:text-[28px]">
              {founder.trust.question}
            </p>

            <div className="mt-9">
              <Prose paragraphs={founder.trust.after} />
            </div>

            <p className="mt-6 font-display text-[22px] italic leading-snug text-espresso md:text-[26px]">
              {founder.trust.close}
            </p>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
