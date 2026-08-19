import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Ornament, Prose, Reveal, Section } from '../components/primitives'
import { foundation } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** Copy verbatim from "Website order and messaging" — nothing added. */
export default function WhereItBegan() {
  usePageMeta(
    'Where It Began — Sol Vé Custom Events',
    'Where It Began. Sol Vé Custom Events, Calgary, Alberta.',
  )

  return (
    <>
      <Hero size="page" eyebrow="Where It Began" headline="Where It Began" media="foundation-began" />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <Prose paragraphs={foundation.began.body} />
          </Reveal>
          <Reveal className="mt-14">
            <Ornament />
          </Reveal>
          {/* Reserved slot — photograph to come from the client. */}
          <Reveal className="mt-14">
            <Media id="began-early" showCaption={false} className="aspect-[16/9] w-full" />
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
