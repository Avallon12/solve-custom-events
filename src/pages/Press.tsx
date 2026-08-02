import Hero from '../components/Hero'
import ClosingCTA from '../components/ClosingCTA'
import { Accent, Container, Display, Eyebrow, Reveal, Section } from '../components/primitives'
import { press } from '../data/content'
import { usePageMeta } from '../lib/meta'

function Roll({
  eyebrow,
  heading,
  items,
  tone = 'ivory',
}: {
  eyebrow: string
  heading: string
  items: readonly { name: string; body: string }[]
  tone?: 'ivory' | 'linen'
}) {
  return (
    <Section tone={tone} rule={tone === 'ivory'}>
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Display as="h2" size="lg" className="mt-6 text-charcoal">
            {heading}
          </Display>
        </Reveal>

        <div className="mt-12 divide-y divide-stone/40 border-y border-stone/40">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 70}>
              <div className="flex flex-col gap-2 py-7 md:flex-row md:items-baseline md:justify-between md:gap-10">
                <p className="font-display text-[23px] leading-snug text-charcoal md:text-[28px]">
                  {item.name}
                </p>
                <p
                  className="font-ui text-[11px] uppercase text-cocoa md:text-right"
                  style={{ letterSpacing: '0.22em' }}
                >
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default function Press() {
  usePageMeta(
    'Press, Publications and Awards — Sol Vé Custom Events',
    'Awards, press and editorial features for Sol Vé Custom Events, including Lux Life Awards 2026, HUM TV, AVOLA Magazine, Bridal Fantasy and Canada Council for the Arts recognition.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Press and Recognition"
        headline={
          <>
            Press, publications and <Accent>awards.</Accent>
          </>
        }
        media="press-hero"
      />

      <Roll eyebrow="Awards" heading="Awards and recognition." items={press.awards} />
      <Roll eyebrow="Press" heading="In the press." items={press.features} tone="linen" />
      <Roll
        eyebrow="Publications"
        heading="Publications and editorials."
        items={press.publications}
      />

      <Section tone="linen" className="!py-[50px] md:!py-[70px]">
        <Container>
          <p className="max-w-3xl font-body text-[17px] italic leading-relaxed text-cocoa">
            This page is built to be extended: each award, feature and publication is a single entry
            in one list, so a new mention can be added the day it arrives. Article links and award
            imagery slot into the same rows once Lynea provides them.
          </p>
        </Container>
      </Section>

      <ClosingCTA
        eyebrow="Media enquiries"
        heading="Working on a story?"
        body="For press enquiries, interviews and imagery, we would be glad to hear from you."
        cta="Connect With Us"
      />
    </>
  )
}
