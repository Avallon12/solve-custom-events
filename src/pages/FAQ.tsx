import Hero from '../components/Hero'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Ornament, Reveal, Section } from '../components/primitives'
import { usePageMeta } from '../lib/meta'

/**
 * FAQ — the route exists per the client's page order, but she has not yet
 * supplied the questions and answers. Nothing here is invented: the page holds
 * its place quietly until her content arrives. Drop her Q&A in below.
 */
export default function FAQ() {
  usePageMeta(
    'FAQ — Sol Vé Custom Events',
    'Frequently asked questions about Sol Vé Custom Events, Calgary, Alberta.',
  )

  return (
    <>
      <Hero size="page" eyebrow="Sol Vé Custom Events" headline="FAQ" media="connect-hero" />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal className="flex flex-col items-center py-10 text-center">
            <Ornament />
            <p className="mt-10 font-body text-[18px] italic text-espresso">
              Content to be provided.
            </p>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
