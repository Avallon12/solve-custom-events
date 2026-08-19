import { ArrowUpRight } from 'lucide-react'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import {
  Accent,
  Card,
  Container,
  Display,
  Eyebrow,
  Ornament,
  Prose,
  Reveal,
  Section,
} from '../components/primitives'
import { commitments } from '../data/content'
import { usePageMeta } from '../lib/meta'

/**
 * Layout is fixed by Lynea and must not be rearranged:
 *   quote on top → three vertical boxes, each equal in size and spacing.
 * Reconciliation, 2SLGBTQIA+ and Conservation and Environmental are rendered
 * from one loop with identical markup so none can drift out of parity.
 * Community Impact follows as its own full-width section, deliberately outside
 * the three, so the three are never visually ranked against a fourth.
 */
export default function Commitments() {
  usePageMeta(
    'Our Commitments — Sol Vé Custom Events',
    'Reconciliation and land acknowledgement, 2SLGBTQIA+ inclusion and belonging, and environmental responsibility. The commitments that guide how Sol Vé Custom Events works.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Our Commitments"
        headline={
          <>
            Every meaningful gathering begins with <Accent>respect.</Accent>
          </>
        }
        media="commitments-hero"
      />

      {/* The quote — always first */}
      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal className="text-center">
            <blockquote>
              <p className="font-display text-[24px] italic leading-[1.4] text-charcoal md:text-[36px]">
                “{commitments.quote}”
              </p>
            </blockquote>
            <p
              className="mt-6 font-ui text-[11px] uppercase text-walnut"
              style={{ letterSpacing: '0.3em' }}
            >
              {commitments.quoteAttribution}
            </p>
            <p className="mx-auto mt-9 max-w-2xl font-body text-[19px] leading-relaxed text-espresso">
              {commitments.quoteBody}
            </p>
            <div className="mt-12">
              <Ornament />
            </div>
            <div className="mx-auto mt-12 max-w-3xl space-y-5 font-body text-[18px] leading-relaxed text-espresso">
              {commitments.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Three boxes — equal width and spacing; each takes its natural height.
          Stretching them all to the tallest (Belonging for All) left the other
          two mostly empty, which read as dead space rather than parity. */}
      <Section tone="linen">
        <Container width="wide">
          <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-3">
            {commitments.pillars.map((pillar, i) => (
              <Reveal key={pillar.id} delay={i * 110}>
                <div id={pillar.id} className="scroll-mt-32">
                  <Card tone="ivory" className="flex flex-col">
                    <p
                      className="font-ui text-[11px] uppercase text-bronze"
                      style={{ letterSpacing: '0.3em' }}
                    >
                      {pillar.label}
                    </p>

                    <h2 className="mt-6 font-display text-[25px] leading-tight text-charcoal md:text-[29px]">
                      {pillar.title}
                    </h2>

                    <p className="mt-6 font-display text-[19px] italic leading-snug text-espresso md:text-[21px]">
                      {pillar.lead}
                    </p>

                    <div className="mt-7 space-y-5 font-body text-[17px] leading-[1.7] text-espresso">
                      {pillar.body.map((paragraph) => (
                        <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-auto pt-8">
                      {'link' in pillar && pillar.link && (
                        <a
                          href={pillar.link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mb-6 inline-flex items-center gap-1.5 font-ui text-[11px] uppercase text-espresso underline underline-offset-4 hover:text-gold"
                          style={{ letterSpacing: '0.22em' }}
                        >
                          {pillar.link.label} <ArrowUpRight size={13} />
                        </a>
                      )}
                      <p className="border-t border-stone/40 pt-6 font-display text-[18px] italic leading-snug text-charcoal">
                        {pillar.close}
                      </p>
                    </div>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Community Impact — its own section, outside the three */}
      <Section tone="charcoal" id="community">
        <div className="grain absolute inset-0 opacity-45" />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[40fr_60fr] lg:gap-20">
            <Reveal>
              <Eyebrow tone="light">Community Impact</Eyebrow>
              <Display as="h2" size="lg" className="mt-6 text-ivory">
                {commitments.community.lead}
              </Display>
            </Reveal>
            <Reveal delay={100}>
              <Prose paragraphs={commitments.community.body} tone="light" />
              <p className="mt-8 font-display text-[22px] italic text-gold md:text-[26px]">
                {commitments.community.close}
              </p>
            </Reveal>
          </div>
          {/* Reserved slot — photograph to come from the client. */}
          <Reveal className="mt-14">
            <Media id="community-impact" showCaption={false} className="aspect-[21/9] w-full" />
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA
        eyebrow="Gather with us"
        heading="Build something that belongs to everyone in the room."
        body="If these commitments reflect how you want your people to feel, we would be honoured to hear your story."
      />
    </>
  )
}
