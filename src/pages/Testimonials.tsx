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
          {/*
            Blank quote cards — one per category, ready to receive the
            client's testimonials. No quote text is invented: the space
            waits for her words; the category stands as the attribution.
          */}
          <div className="grid gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {portfolio.testimonials.map((voice, i) => (
              <Reveal key={voice} delay={(i % 3) * 70} className="h-full">
                <figure
                  id={voice.toLowerCase().replace(/[^a-z]+/g, '-')}
                  className="flex h-full scroll-mt-32 flex-col rounded-[2px] border border-stone/40 bg-linen/30 p-8 md:p-10"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[64px] leading-none text-gold/60"
                  >
                    &ldquo;
                  </span>
                  <blockquote
                    aria-label="Testimonial to come"
                    className="mt-2 min-h-[96px] flex-1"
                  />
                  <figcaption className="mt-6 border-t border-stone/40 pt-5">
                    <span
                      className="font-ui text-[11px] font-semibold uppercase text-walnut"
                      style={{ letterSpacing: '0.24em' }}
                    >
                      — {voice}
                    </span>
                  </figcaption>
                </figure>
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
