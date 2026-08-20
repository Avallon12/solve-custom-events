import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Prose, Reveal, Section } from '../components/primitives'
import { foundation } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** Copy verbatim from "Website order and messaging" — nothing added. */
export default function BeyondTheOccasion() {
  usePageMeta(
    'Beyond the Occasion — Sol Vé Custom Events',
    'Beyond the Occasion. Sol Vé Custom Events, Calgary, Alberta.',
  )

  return (
    <>
      <Hero size="page" eyebrow="Beyond the Occasion" headline="Beyond the Occasion" media="experiences-hero" />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <div className="space-y-2">
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
                <p className="mt-2 font-body text-[18px] leading-relaxed text-espresso md:text-[20px]">
                  {second}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <Prose paragraphs={foundation.beyond.close} />
          </Reveal>
          {/* Reserved slots — photographs to come from the client. */}
          <Reveal className="mt-14">
            <Media id="beyond-occasion-band" showCaption={false} className="aspect-[16/9] w-full" />
          </Reveal>
          <Reveal className="mt-8">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <Media id="beyond-family" showCaption={false} className="aspect-[4/3] w-full" />
              <Media id="beyond-toast" showCaption={false} className="aspect-[4/3] w-full" />
            </div>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
