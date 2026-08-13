import Hero from '../components/Hero'
import PhotoBand from '../components/PhotoBand'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Display, Eyebrow, Ornament, Reveal, Section } from '../components/primitives'
import { howWeWorkTogether, solVeDifference } from '../data/experiences'
import { usePageMeta } from '../lib/meta'

/** "How We Work Together" and "The Sol Vé Difference", word for word. */
export default function ServiceCapabilities() {
  usePageMeta(
    'Service Capabilities — Sol Vé Custom Events',
    'Consultation & Strategy, Planning & Coordination, Design & Production, and Full Experience Management.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Service Capabilities"
        headline="How We Work Together"
        media="foundation-hero"
      />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <div className="space-y-6 font-body text-[19px] leading-[1.7] text-espresso md:text-[21px]">
              {howWeWorkTogether.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {howWeWorkTogether.capabilities.map((capability, i) => (
        <Section
          key={capability.slug}
          id={capability.slug}
          tone={i % 2 === 0 ? 'linen' : 'ivory'}
          rule={i % 2 !== 0}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[40fr_60fr] lg:gap-20">
              <Reveal>
                <Display as="h2" size="lg" className="text-charcoal">
                  {capability.title}
                </Display>
                <p className="mt-6 max-w-md font-body text-[18px] leading-relaxed text-espresso md:text-[20px]">
                  {capability.lead}
                </p>
              </Reveal>

              <Reveal delay={110}>
                {'body' in capability && capability.body ? (
                  <p className="font-body text-[18px] leading-[1.7] text-espresso md:text-[20px]">
                    {capability.body}
                  </p>
                ) : (
                  <>
                    <p
                      className="font-ui text-[10px] uppercase text-walnut"
                      style={{ letterSpacing: '0.3em' }}
                    >
                      Includes
                    </p>
                    <ul className="mt-5 grid gap-x-10 gap-y-2 sm:grid-cols-2">
                      {capability.items.map((item) => (
                        <li
                          key={item}
                          className="border-b border-stone/30 py-2.5 font-body text-[17px] text-charcoal md:text-[18px]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}

      <Section tone="charcoal">
        <div className="grain absolute inset-0 opacity-45" />
        <Container width="narrow" className="relative z-10 text-center">
          <Reveal>
            <Eyebrow tone="light">The Sol Vé Difference</Eyebrow>
            <div className="mt-10 space-y-6">
              {solVeDifference.lines.map((line) => (
                <p
                  key={line}
                  className={
                    line.startsWith('"')
                      ? 'font-display text-[24px] leading-snug text-gold md:text-[32px]'
                      : 'font-body text-[19px] leading-relaxed text-champagne md:text-[21px]'
                  }
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-14">
              <Ornament tone="light" />
            </div>
          </Reveal>
        </Container>
      </Section>

      <PhotoBand ids={['wed-hannah-and-zach-1', 'wed-christina-and-vince-2', 'sig-engagement-c-and-a-2']} />

      <ClosingCTA />
    </>
  )
}
