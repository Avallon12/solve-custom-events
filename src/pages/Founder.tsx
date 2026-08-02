import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import {
  Accent,
  Container,
  Display,
  Eyebrow,
  Ornament,
  Prose,
  Reveal,
  Section,
} from '../components/primitives'
import { founder, lyneaBio } from '../data/content'
import { usePageMeta } from '../lib/meta'

export default function Founder() {
  usePageMeta(
    'Meet the Founder — Lynea Vaugeois Hetherington, Sol Vé Custom Events',
    'Lynea Vaugeois Hetherington, Founder and Creative Director of Sol Vé Custom Events, on stewardship, hospitality and the belief that the way people gather shapes everything that follows.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Meet the Founder"
        headline={
          <>
            Behind every extraordinary event is an extraordinary <Accent>vision.</Accent>
          </>
        }
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
                  Founder and Creative Director
                </p>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div className="space-y-2">
                {founder.opening.map((line) => (
                  <p
                    key={line}
                    className="font-display text-[24px] leading-snug text-charcoal md:text-[32px]"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="mt-10">
                <Prose paragraphs={founder.body} />
              </div>

              <p className="mt-8 font-display text-[22px] italic leading-snug text-espresso md:text-[26px]">
                {founder.close}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Her own account, first person — v5: copy exactly from the original site */}
      <Section tone="linen" id="meet-lynea">
        <Container width="narrow">
          <Reveal>
            <Eyebrow>{lyneaBio.subtitle}</Eyebrow>
            <Display as="h2" size="lg" className="mt-6 text-charcoal">
              {lyneaBio.heading}
            </Display>
            <div className="mt-10">
              <Prose paragraphs={lyneaBio.body} />
            </div>
            <div className="mt-12">
              <Ornament />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="charcoal">
        <div className="grain absolute inset-0 opacity-45" />
        <Container width="narrow" className="relative z-10">
          <Reveal className="text-center">
            <Eyebrow tone="light">In Her Words</Eyebrow>
            <blockquote className="mt-9">
              <p className="font-display text-[24px] italic leading-[1.4] text-ivory md:text-[34px]">
                “{founder.quote}”
              </p>
            </blockquote>
            <p
              className="mt-8 font-ui text-[11px] uppercase text-champagne"
              style={{ letterSpacing: '0.26em' }}
            >
              {founder.quoteAttribution}
            </p>
            <div className="mt-14">
              <Ornament tone="light" />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="linen">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Stewardship</Eyebrow>
              <Display as="h2" size="lg" className="mt-6 max-w-lg text-charcoal">
                Every gathering represents a moment of trust.
              </Display>
              <p className="mt-8 max-w-xl font-body text-[19px] leading-[1.7] text-espresso md:text-[21px]">
                A family entrusts the beginning of a marriage. An organization entrusts its vision. A
                community entrusts its hopes. A charitable partner entrusts its mission. Every
                experience deserves to be approached with care, humility, craftsmanship, and respect
                for the people it is intended to serve.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <Media id="founder-second" className="aspect-[4/5] w-full" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <ClosingCTA
        eyebrow="Begin the conversation"
        heading="We would be honoured to hear your story."
        body="At Sol Vé, we believe the most extraordinary experiences begin by listening. Before design, before planning, and before the first detail is imagined."
      />
    </>
  )
}
