import Hero from '../components/Hero'
import PhotoBand from '../components/PhotoBand'
import ClosingCTA from '../components/ClosingCTA'
import {
  Accent,
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
      <Hero
        size="page"
        eyebrow="Foundation"
        headline={
          <>
            Every meaningful gathering begins long before people <Accent>arrive.</Accent>
          </>
        }
        media="foundation-hero"
      />

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

      <PhotoBand ids={['wed-claudia-and-ali-1', 'portfolio-italiano-1', 'wed-erin-and-rick-1']} />

      <ClosingCTA
        eyebrow="Begin the conversation"
        heading="If our philosophy resonates with you."
        body="No two gatherings are ever the same. Neither is our approach. We invite you to begin the conversation."
      />
    </>
  )
}
