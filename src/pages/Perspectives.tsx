import Hero from '../components/Hero'
import PhotoBand from '../components/PhotoBand'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Display, Ornament, Reveal, Section } from '../components/primitives'
import { perspectives } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** "Perspectives" — the essays, word for word. */
export default function Perspectives() {
  usePageMeta(
    'Perspectives — Sol Vé Custom Events',
    'Essays from Sol Vé Custom Events on how people gather.',
  )

  return (
    <>
      <Hero size="page" eyebrow="Perspectives" headline="Perspectives" media="foundation-began" />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <div className="flex flex-col gap-20 md:gap-28">
            {perspectives.map((essay, i) => (
              <article key={essay.slug} id={essay.slug} className="scroll-mt-32">
                <Reveal>
                  <Display as="h2" size="lg" className="text-charcoal">
                    {essay.title}
                  </Display>

                  <div className="prose-solve mt-9 text-espresso">
                    {essay.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 36)}>{paragraph}</p>
                    ))}
                  </div>

                  {i < perspectives.length - 1 && (
                    <div className="mt-12">
                      <Ornament />
                    </div>
                  )}
                </Reveal>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <PhotoBand ids={['portfolio-conferences', 'corp-hull-services-winter-holiday-party-2', 'portfolio-mingle']} />

      <ClosingCTA />
    </>
  )
}
