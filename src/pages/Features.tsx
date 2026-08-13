import { ArrowUpRight } from 'lucide-react'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Reveal, Section } from '../components/primitives'
import { portfolio } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** "Features" — the list exactly as given, each linking to its publication. */
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
              <Reveal key={feature.name} delay={i * 70}>
                <div
                  id={feature.name.toLowerCase().replace(/[^a-z]+/g, '-')}
                  className="scroll-mt-32 py-8"
                >
                  <a
                    href={feature.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-baseline gap-3 font-display text-[26px] text-charcoal transition-colors duration-300 hover:text-gold md:text-[34px]"
                  >
                    {feature.name}
                    <ArrowUpRight
                      size={20}
                      className="translate-y-[2px] text-gold transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[3px]"
                    />
                  </a>
                  <p
                    className="mt-2 font-ui text-[11px] uppercase text-walnut"
                    style={{ letterSpacing: '0.22em' }}
                  >
                    {feature.note}
                  </p>

                  {feature.images && (
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      {feature.images.map((id) => (
                        <Media key={id} id={id} className="w-full" />
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
