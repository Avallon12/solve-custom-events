import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Ornament, Prose, Reveal, Section } from '../components/primitives'
import { foundation } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** Copy verbatim from "Website order and messaging" — nothing added. */
export default function SolVeWay() {
  usePageMeta(
    'The Sol Vé Way — Sol Vé Custom Events',
    'The Sol Vé Way. Sol Vé Custom Events, Calgary, Alberta.',
  )

  return (
    <>
      <Hero size="page" eyebrow="The Sol Vé Way" headline="The Sol Vé Way" media="foundation-hero" />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <Prose paragraphs={foundation.way.body} />
            <p className="mt-10 font-display text-[26px] italic text-espresso md:text-[32px]">
              {foundation.way.close}
            </p>
          </Reveal>
          <Reveal className="mt-14">
            <Ornament />
          </Reveal>
          {/* Reserved slot — photograph to come from the client. */}
          <Reveal className="mt-14">
            <Media id="way-hospitality" showCaption={false} className="aspect-[16/9] w-full" />
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
