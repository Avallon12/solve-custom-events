import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Ornament, Prose, Reveal, Section } from '../components/primitives'
import { foundation } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** Copy verbatim from "Website order and messaging" — nothing added. */
export default function WhereItBegan() {
  usePageMeta(
    'Where It Began | Sol Vé Custom Events',
    'Sol Vé began with a belief that thoughtfully designed gatherings can shape what follows. How a Calgary celebration designer became a practice for designing how people gather.',
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
          <Reveal className="mt-14">
            <Media id="began-early" showCaption={false} className="aspect-[16/9] w-full" />
          </Reveal>
          <Reveal className="mt-8">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <Media id="began-detail-1" showCaption={false} className="aspect-[4/3] w-full" />
              <Media id="began-detail-2" showCaption={false} className="aspect-[4/3] w-full" />
            </div>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
