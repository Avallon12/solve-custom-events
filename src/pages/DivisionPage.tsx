import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import {
  Btn,
  Card,
  Container,
  Display,
  Eyebrow,
  Ornament,
  Prose,
  Reveal,
  Section,
} from '../components/primitives'
import { divisionBySlug, divisions } from '../data/divisions'
import { usePageMeta } from '../lib/meta'

export default function DivisionPage() {
  const { slug } = useParams()
  const division = slug ? divisionBySlug(slug) : undefined

  usePageMeta(
    division
      ? `${division.name} — Sol Vé Custom Events`
      : 'Experiences — Sol Vé Custom Events',
    division ? `${division.headline} ${division.subheadline}` : 'Sol Vé Custom Events.',
  )

  if (!division) return <Navigate to="/experiences" replace />

  const others = divisions.filter((d) => d.slug !== division.slug).slice(0, 3)

  return (
    <>
      <Hero
        size="page"
        eyebrow={division.eyebrow}
        headline={division.headline}
        subheadline={division.subheadline}
        media={division.media}
        actions={<Btn to="/connect">Tell Us Your Vision</Btn>}
      />

      <Section tone="ivory" rule>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">
            <Reveal>
              {division.whatWeDo && (
                <>
                  <Eyebrow>What We Do</Eyebrow>
                  <Display as="h2" size="lg" className="mt-6 max-w-xl text-charcoal">
                    {division.whatWeDo.heading}
                  </Display>
                </>
              )}
              <div className={division.whatWeDo ? 'mt-9' : ''}>
                <Prose paragraphs={division.narrative} />
                {division.whatWeDo && <Prose paragraphs={division.whatWeDo.body} />}
              </div>
            </Reveal>

            <Reveal delay={110}>
              <Media id={division.media} className="aspect-[4/5] w-full lg:sticky lg:top-32" />
            </Reveal>
          </div>
        </Container>
      </Section>

      {division.cards && (
        <Section tone="linen">
          <Container>
            <Reveal className="text-center">
              <Eyebrow>The Sol Vé Difference</Eyebrow>
              <Display as="h2" size="md" className="mt-6 text-charcoal">
                What makes this division ours.
              </Display>
            </Reveal>

            <div
              className={`mt-12 grid items-stretch gap-6 md:gap-8 ${
                division.cards.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'
              }`}
            >
              {division.cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 90} className="h-full">
                  <Card tone="ivory" className="flex h-full flex-col">
                    <p
                      className="font-ui text-[10px] uppercase text-gold"
                      style={{ letterSpacing: '0.3em' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-5 font-display text-[21px] leading-tight text-charcoal md:text-[24px]">
                      {card.title}
                    </h3>
                    <p className="mt-4 font-body text-[17px] leading-relaxed text-espresso">
                      {card.body}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {division.notableWork && (
        <Section tone="charcoal">
          <div className="grain absolute inset-0 opacity-40" />
          <Container className="relative z-10">
            <Reveal>
              <Eyebrow tone="light">Notable Work</Eyebrow>
              <Display as="h2" size="md" className="mt-6 text-ivory">
                Productions we are known for.
              </Display>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
              {division.notableWork.map((work, i) => (
                <Reveal key={work.title} delay={i * 90} className="h-full">
                  <div className="h-full rounded-[2px] border border-gold/25 p-7">
                    <h3 className="font-display text-[22px] leading-tight text-ivory md:text-[25px]">
                      {work.title}
                    </h3>
                    <p className="mt-4 font-body text-[17px] leading-relaxed text-champagne/85">
                      {work.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {division.faq && (
        <Section tone="ivory" rule>
          <Container width="narrow">
            <Reveal>
              <Eyebrow>Questions</Eyebrow>
              <Display as="h2" size="lg" className="mt-6 text-charcoal">
                What couples ask us first.
              </Display>
            </Reveal>

            <dl className="mt-12 divide-y divide-stone/40 border-y border-stone/40">
              {division.faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 70}>
                  <div className="py-8">
                    <dt className="font-display text-[21px] leading-snug text-charcoal md:text-[24px]">
                      {item.q}
                    </dt>
                    <dd className="mt-4 font-body text-[18px] leading-[1.7] text-espresso">
                      {item.a}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </Container>
        </Section>
      )}

      {division.slug === 'fundraising' && (
        <section className="grain relative overflow-hidden bg-mmm-burgundy py-[64px] text-mmm-ivory md:py-[110px]">
          <Container>
            <Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p
                  className="font-ui text-[11px] uppercase text-mmm-champagne"
                  style={{ letterSpacing: '0.3em' }}
                >
                  Campaign in Focus
                </p>
                <h2 className="mt-6 max-w-2xl font-display text-[28px] leading-tight text-mmm-gold md:text-[40px]">
                  Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026
                </h2>
                <p className="mt-6 max-w-2xl font-body text-[19px] leading-relaxed text-mmm-ivory/90">
                  An immersive charity masquerade campaign in Calgary, Alberta, with 100% of net
                  proceeds supporting marginalized communities.
                </p>
              </div>
              <Link
                to="/mystic"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[2px] bg-mmm-gold px-7 font-ui text-[13px] font-semibold uppercase text-mmm-burgundy transition-opacity hover:opacity-90"
                style={{ letterSpacing: '0.5px' }}
              >
                See the Campaign <ArrowRight size={15} />
              </Link>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Sibling divisions */}
      <Section tone="charcoal">
        <div className="grain absolute inset-0 opacity-40" />
        <Container className="relative z-10">
          <Reveal>
            <Eyebrow tone="light">Continue</Eyebrow>
            <Display as="h2" size="md" className="mt-6 text-ivory">
              Other worlds within the house.
            </Display>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 90} className="h-full">
                <Link
                  to={`/experiences/${other.slug}`}
                  className="group flex h-full flex-col rounded-[2px] border border-gold/25 p-7 transition-colors duration-500 hover:border-gold/70 hover:bg-ivory/[0.04]"
                >
                  <h3 className="font-display text-[23px] leading-tight text-ivory">
                    {other.name}
                  </h3>
                  <p className="mt-4 font-body text-[17px] leading-relaxed text-champagne/80">
                    {other.oneLine}
                  </p>
                  <span
                    className="mt-auto flex items-center gap-2 pt-7 font-ui text-[11px] uppercase text-gold"
                    style={{ letterSpacing: '0.22em' }}
                  >
                    Explore
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <Ornament tone="light" />
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA
        eyebrow="Request a proposal"
        heading={division.proposal.heading}
        body={division.proposal.body}
        cta={division.proposal.cta}
      />
    </>
  )
}
