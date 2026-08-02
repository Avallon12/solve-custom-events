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
import { foundation, missionVisionValues, whoWeAre } from '../data/content'
import { usePageMeta } from '../lib/meta'

export default function Foundation() {
  usePageMeta(
    'The Foundation — Sol Vé Custom Events',
    'Every meaningful gathering begins long before people arrive. The philosophy, the standard and the origin of Sol Vé Custom Events.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="The Foundation"
        headline={
          <>
            Every meaningful gathering begins long before people <Accent>arrive.</Accent>
          </>
        }
        media="foundation-hero"
      />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <Prose paragraphs={foundation.intro} />
          </Reveal>
          <Reveal className="mt-14">
            <Ornament />
          </Reveal>
        </Container>
      </Section>

      {/* Who we are — v5: copy exactly from solvecustomevents.com/about */}
      <Section tone="linen" id="who-we-are">
        <Container width="narrow">
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
            <Display as="h2" size="lg" className="mt-6 text-charcoal">
              {whoWeAre.heading}
            </Display>
            <div className="mt-10">
              <Prose paragraphs={whoWeAre.body} />
            </div>
          </Reveal>

          <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3 md:gap-8">
            {missionVisionValues.map((item, i) => (
              <Reveal key={item.label} delay={i * 100} className="h-full">
                <div className="h-full rounded-[2px] border border-stone/40 bg-ivory p-7 md:p-9">
                  <p
                    className="font-ui text-[11px] uppercase text-bronze"
                    style={{ letterSpacing: '0.3em' }}
                  >
                    {item.label}
                  </p>
                  <p className="mt-5 font-body text-[18px] leading-relaxed text-cocoa">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="charcoal" id="the-sol-ve-way">
        <div className="grain absolute inset-0 opacity-45" />
        <Container width="narrow" className="relative z-10">
          <Reveal>
            <Eyebrow tone="light">Our Standard</Eyebrow>
            <Display as="h2" size="lg" className="mt-6 text-ivory">
              {foundation.way.title}
            </Display>
          </Reveal>
          <Reveal className="mt-10">
            <Prose paragraphs={foundation.way.body} tone="light" />
            <p className="mt-10 font-display text-[26px] italic text-gold md:text-[32px]">
              {foundation.way.close}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="ivory" rule id="beyond-the-occasion">
        <Container width="narrow">
          <Reveal>
            <Eyebrow>Beyond the Occasion</Eyebrow>
            <div className="mt-8 space-y-2">
              {foundation.beyond.opening.map((line) => (
                <p
                  key={line}
                  className="font-display text-[24px] leading-snug text-charcoal md:text-[32px]"
                >
                  {line}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <Prose paragraphs={foundation.beyond.body} />
          </Reveal>

          <div className="mt-12 space-y-9 border-l border-bronze/40 pl-6 md:pl-10">
            {foundation.beyond.couplets.map(([first, second], i) => (
              <Reveal key={first} delay={i * 80}>
                <p className="font-display text-[21px] text-charcoal md:text-[26px]">{first}</p>
                <p className="mt-2 font-body text-[18px] leading-relaxed text-cocoa md:text-[20px]">
                  {second}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <Prose paragraphs={foundation.beyond.close} />
          </Reveal>
        </Container>
      </Section>

      <Section tone="linen" id="where-it-began">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[45fr_55fr] lg:gap-20">
            <Reveal>
              <Media id="foundation-began" className="aspect-[4/5] w-full lg:sticky lg:top-32" />
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow>Where It Began</Eyebrow>
              <Display as="h2" size="lg" className="mt-6 text-charcoal">
                The gathering was never the destination.
              </Display>
              <div className="mt-9">
                <Prose paragraphs={foundation.began.body} />
              </div>
              <p className="mt-8 font-display text-[22px] italic text-espresso md:text-[26px]">
                We design how people gather. Because the way people gather shapes everything that
                follows.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ClosingCTA
        eyebrow="Begin the conversation"
        heading="If our philosophy resonates with you."
        body="No two gatherings are ever the same. Neither is our approach. We invite you to begin the conversation."
      />
    </>
  )
}
