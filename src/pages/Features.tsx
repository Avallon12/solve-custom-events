import Hero from '../components/Hero'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Reveal, Section } from '../components/primitives'
import { portfolio } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** "Features" — the list exactly as given. */
export default function Features() {
  usePageMeta(
    'Features — Sol Vé Custom Events',
    'AVOLA Magazine, REDTV Canada, Bridal Fantasy, Dancing With Her and Men`s Vow Magazine.',
  )

  return (
    <>
      <Hero size="page" eyebrow="Features" headline="Features" media="portfolio-vogue" />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <div className="divide-y divide-stone/40 border-y border-stone/40">
            {portfolio.features.map((feature, i) => (
              <Reveal key={feature} delay={i * 70}>
                <p
                  id={feature.toLowerCase().replace(/[^a-z]+/g, '-')}
                  className="scroll-mt-32 py-8 font-display text-[26px] text-charcoal md:text-[34px]"
                >
                  {feature}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
