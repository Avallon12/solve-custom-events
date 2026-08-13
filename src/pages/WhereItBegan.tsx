import Hero from '../components/Hero'
import PhotoBand from '../components/PhotoBand'
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
        </Container>
      </Section>

      <PhotoBand ids={['portfolio-dirt-roads-1', 'wed-farah-1', 'portfolio-claudia-ali']} />

      <ClosingCTA />
    </>
  )
}
