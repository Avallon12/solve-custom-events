import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Star } from 'lucide-react'
import { FacebookIcon, GoogleIcon } from '../components/BrandIcons'
import { Container, Eyebrow, Ornament, Reveal, Section } from '../components/primitives'
import { portfolio, type Review, type ReviewSource } from '../data/content'
import { usePageMeta } from '../lib/meta'

const SOURCE: Record<ReviewSource, { label: string; Icon: typeof GoogleIcon }> = {
  google: { label: 'Google', Icon: GoogleIcon },
  facebook: { label: 'Facebook', Icon: FacebookIcon },
}

/** Five gold stars — every review shown carries a full rating. */
function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-[3px] text-gold" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

/** One public review: stars, the platform it came from, the words, the name. */
function ReviewCard({ review }: { review: Review }) {
  const { label, Icon } = SOURCE[review.source]
  return (
    <figure
      id={review.slug}
      className="mb-5 flex scroll-mt-32 break-inside-avoid flex-col rounded-[2px] border border-stone/40 bg-linen/30 p-7 md:mb-6 md:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <Stars count={review.stars} />
        <span
          className="inline-flex items-center gap-1.5 font-ui text-[10px] font-semibold uppercase text-walnut"
          style={{ letterSpacing: '0.2em' }}
        >
          <Icon size={14} className="text-bronze" />
          {label} review
        </span>
      </div>
      <blockquote className="mt-5 flex flex-col gap-3 font-body text-[17px] leading-[1.65] text-espresso md:text-[19px]">
        {review.quote.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </blockquote>
      <figcaption className="mt-6 flex items-baseline justify-between gap-4 border-t border-stone/40 pt-4">
        <span className="font-display text-[19px] text-charcoal md:text-[20px]">{review.name}</span>
        <span className="font-ui text-[11px] text-walnut" style={{ letterSpacing: '0.12em' }}>
          {review.year}
        </span>
      </figcaption>
    </figure>
  )
}

/**
 * "Testimonials" — the client's four voices, each in the same layout: the
 * opening mark, the quote in her exact wording, then name and role beneath a
 * hairline. Nothing about the text is edited here; it comes straight from
 * `portfolio.testimonials`.
 */
export default function Testimonials() {
  usePageMeta(
    'Testimonials — Sol Vé Custom Events',
    'Rida Ghani, Laura Darichuk, Quora Strings and Mike G. Guthrie on working with Sol Vé Custom Events, with public reviews from Google.',
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

        </Container>
      </Section>

      <Section tone="linen" id="reviews" rule>
        <Container>
          <Reveal>
            <Eyebrow>Reviews</Eyebrow>
          </Reveal>
          {/* Each card reveals on its own: one wrapper around all eight would be
              taller than a phone viewport and never cross the threshold. */}
          <div className="mt-10 md:columns-2 md:gap-6">
            {portfolio.reviews.map((review, i) => (
              <Reveal key={review.slug} delay={(i % 2) * 70} className="break-inside-avoid">
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container width="narrow">
          <Reveal>
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
