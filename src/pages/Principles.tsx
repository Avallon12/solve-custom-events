import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Reveal, Section } from '../components/primitives'
import { commitments } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** Copy verbatim from "Website order and messaging" — nothing added. */
export default function Principles() {
  usePageMeta(
    'Sol Vé Principles — Sol Vé Custom Events',
    'Stewardship, intention, hospitality, craftsmanship, collaboration and legacy. The principles that guide Sol Vé Custom Events.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Sol Vé Principles"
        headline="Our Principles"
        media="commitments-hero"
      />

      <Section tone="ivory" rule>
        <Container>
          <div className="grid gap-px bg-stone/40 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.principles.map((principle, i) => (
              <Reveal key={principle.name} delay={(i % 3) * 80}>
                <div className="h-full bg-ivory px-7 py-10 md:px-9">
                  <p
                    className="font-ui text-[10px] uppercase text-gold"
                    style={{ letterSpacing: '0.3em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-5 font-display text-[24px] text-charcoal">{principle.name}</h2>
                  <p className="mt-3 font-body text-[18px] leading-relaxed text-espresso">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Reserved slot — photograph to come from the client. */}
          <Reveal className="mt-14">
            <Media id="principles-craft" showCaption={false} className="aspect-[21/9] w-full" />
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
