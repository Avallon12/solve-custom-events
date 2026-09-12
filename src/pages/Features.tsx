import { ArrowUpRight } from 'lucide-react'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Reveal, Section } from '../components/primitives'
import { portfolio } from '../data/content'
import {
  featureBridalFantasyGallery,
  featureDancingWithHerGallery,
  featureMensVowGallery,
} from '../data/galleries'
import type { MediaId } from '../data/media'
import { usePageMeta } from '../lib/meta'

/** The client's photographs for each published feature, from her Features folder. */
const FEATURE_GALLERIES: Record<string, readonly MediaId[]> = {
  'Bridal Fantasy': featureBridalFantasyGallery,
  'Dancing With Her': featureDancingWithHerGallery,
  "Men's Vow Magazine": featureMensVowGallery,
}

/** "Features" — the list exactly as given, each linking to its publication. */
export default function Features() {
  usePageMeta(
    'Features & Press | Sol Vé Custom Events',
    'Sol Vé Custom Events in AVOLA Magazine, REDTV Canada, Bridal Fantasy, Dancing With Her and Men\'s Vow Magazine.',
  )

  return (
    <>
      <Hero size="page" eyebrow="Features" headline="Features" media="features-hero" />

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

                  {feature.name === 'Bridal Fantasy' ? (
                    // Magazine pages keep their own proportions — nothing is cropped.
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      {FEATURE_GALLERIES[feature.name].map((id) => (
                        <Media key={id} id={id} showCaption={false} className="w-full" />
                      ))}
                    </div>
                  ) : FEATURE_GALLERIES[feature.name] ? (
                    <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
                      {FEATURE_GALLERIES[feature.name].map((id) => (
                        <div key={id} className="overflow-hidden rounded-[2px]">
                          <Media
                            id={id}
                            showCaption={false}
                            className="aspect-[4/5] w-full"
                            imgClassName="transition-transform duration-[1200ms] hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <Media id="features-band" showCaption={false} className="aspect-[21/9] w-full" />
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
