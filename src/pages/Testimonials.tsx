import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Ornament, Reveal, Section } from '../components/primitives'
import { portfolio } from '../data/content'
import { usePageMeta } from '../lib/meta'

/**
 * "Testimonials" — the client's four voices, each in the same layout: the
 * opening mark, the quote in her exact wording, then name and role beneath a
 * hairline. Nothing about the text is edited here; it comes straight from
 * `portfolio.testimonials`.
 */
export default function Testimonials() {
  usePageMeta(
    'Testimonials — Sol Vé Custom Events',
    'Rida Ghani, Laura Darichuk, Cora Strings and Mike G. Guthrie on working with Sol Vé Custom Events.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Testimonials"
        headline="Testimonials"
        media="testimonials-hero"
      />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <div className="flex flex-col gap-14 md:gap-20">
            {portfolio.testimonials.map((voice, i) => (
              <Reveal key={voice.slug}>
                {i > 0 && (
                  <div className="mb-14 md:mb-20">
                    <Ornament />
                  </div>
                )}
                <figure id={voice.slug} className="scroll-mt-32">
                  <span
                    aria-hidden="true"
                    className="block font-display text-[72px] leading-[0.6] text-gold/60 md:text-[88px]"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-6 flex flex-col gap-5 font-body text-[19px] leading-[1.7] text-espresso md:text-[22px]">
                    {voice.quote.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </blockquote>
                  <figcaption className="mt-8 flex flex-col gap-2 border-t border-stone/40 pt-6">
                    <span className="font-display text-[22px] text-charcoal md:text-[24px]">
                      {voice.name}
                    </span>
                    <span
                      className="font-ui text-[11px] uppercase text-walnut"
                      style={{ letterSpacing: '0.22em' }}
                    >
                      {voice.role}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 md:mt-24">
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
