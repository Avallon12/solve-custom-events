import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Reveal, Section } from '../components/primitives'
import { portfolio } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** "Testimonials" — the categories exactly as given. */
export default function Testimonials() {
  usePageMeta(
    'Testimonials — Sol Vé Custom Events',
    'Voices from the gatherings entrusted to Sol Vé Custom Events.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Testimonials"
        headline="Testimonials"
        media="sig-vow-renewal-lisa-and-john-1"
      />

      <Section tone="ivory" rule>
        <Container>
          <div className="grid border-t border-stone/40 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.testimonials.map((voice, i) => (
              <Reveal key={voice} delay={(i % 3) * 70}>
                <p
                  id={voice.toLowerCase().replace(/[^a-z]+/g, '-')}
                  className="h-full scroll-mt-32 border-b border-stone/40 px-7 py-8 font-display text-[22px] text-charcoal sm:border-r md:text-[25px]"
                >
                  {voice}
                </p>
              </Reveal>
            ))}
          </div>
          {/* Reserved slots — photographs to come from the client. */}
          <Reveal className="mt-14">
            <Media id="testimonials-band" showCaption={false} className="aspect-[21/9] w-full" />
          </Reveal>
          <Reveal className="mt-8">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <Media id="testimonials-gal-1" showCaption={false} className="aspect-[4/5] w-full" />
              <Media id="testimonials-gal-2" showCaption={false} className="aspect-[4/5] w-full" />
              <Media id="testimonials-gal-3" showCaption={false} className="aspect-[4/5] w-full" />
            </div>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
