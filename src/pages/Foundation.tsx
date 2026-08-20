import Hero from '../components/Hero'
import Media from '../components/Media'
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
          {/* Reserved slots — photographs to come from the client. */}
          <Reveal className="mt-14">
            <Media id="foundation-room" showCaption={false} className="aspect-[16/9] w-full" />
          </Reveal>
          <Reveal className="mt-8">
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <Media id="foundation-detail-1" showCaption={false} className="aspect-[4/5] w-full" />
              <Media id="foundation-detail-2" showCaption={false} className="aspect-[4/5] w-full" />
              <Media id="foundation-detail-3" showCaption={false} className="aspect-[4/5] w-full" />
            </div>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA
        eyebrow="Begin the conversation"
        heading="If our philosophy resonates with you."
        body="No two gatherings are ever the same. Neither is our approach. We invite you to begin the conversation."
      />
    </>
  )
}
