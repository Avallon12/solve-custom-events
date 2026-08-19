import Hero from '../components/Hero'
import ClosingCTA from '../components/ClosingCTA'
import {
  Container,
  Ornament,
  Prose,
  Reveal,
  Section,
} from '../components/primitives'
import { foundation } from '../data/content'
import { usePageMeta } from '../lib/meta'

export default function Foundation() {
  usePageMeta(
    'The Foundation — Sol Vé Custom Events',
    'Every meaningful gathering begins long before people arrive. The philosophy, the standard and the origin of Sol Vé Custom Events.',
  )

  return (
    <>
      <Hero size="page" eyebrow="Sol Vé Custom Events" headline="Foundation" media="foundation-hero" />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <Prose paragraphs={foundation.intro} />
          </Reveal>
          <Reveal className="mt-14">
            <Ornament />
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA body="If our philosophy resonates with you, we invite you to begin the conversation." />
    </>
  )
}
