import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Display, Ornament, Reveal, Section } from '../components/primitives'
import { whatWeCreate } from '../data/content'
import { usePageMeta } from '../lib/meta'

/** Copy verbatim from "Website order and messaging" — nothing added. */
export default function WhatWeCreate() {
  usePageMeta(
    'What We Create — Sol Vé Custom Events',
    'Every gathering begins with a different purpose. Sol Vé Custom Events, Calgary, Alberta.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="What We Create"
        headline="Every gathering begins with a different purpose."
        media="experiences-hero"
      />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <div className="space-y-3">
              {whatWeCreate.purposes.map((line) => (
                <p
                  key={line}
                  className="font-body text-[20px] leading-relaxed text-espresso md:text-[23px]"
                >
                  {line}
                </p>
              ))}
            </div>

            <p className="mt-10 font-body text-[18px] text-espresso">{whatWeCreate.lead}</p>

            <p className="mt-5 font-display text-[26px] leading-snug text-charcoal md:text-[34px]">
              {whatWeCreate.belief}
            </p>

            <p className="mt-9 font-body text-[18px] leading-[1.7] text-espresso md:text-[20px]">
              {whatWeCreate.close}
            </p>

            <div className="mt-14">
              <Ornament />
            </div>
          </Reveal>
        </Container>
      </Section>

      {whatWeCreate.divisions.map((division, i) => (
        <Section key={division.title} tone={i % 2 === 0 ? 'linen' : 'ivory'} rule={i % 2 !== 0}>
          <Container>
            <div
              className={`grid items-center gap-12 lg:gap-20 ${
                i % 2 === 0 ? 'lg:grid-cols-[55fr_45fr]' : 'lg:grid-cols-[45fr_55fr]'
              }`}
            >
              <Reveal className={i % 2 === 0 ? '' : 'lg:order-2'}>
                <Display as="h2" size="lg" className="text-charcoal">
                  {division.title}
                </Display>
                <div className="mt-8 max-w-xl space-y-6 font-body text-[18px] leading-[1.7] text-espresso md:text-[20px]">
                  {division.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={110} className={i % 2 === 0 ? '' : 'lg:order-1'}>
                <Media id={division.media} className="aspect-[4/3] w-full" />
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}

      <Section tone="charcoal">
        <div className="grain absolute inset-0 opacity-45" />
        <Container width="narrow" className="relative z-10 text-center">
          <Reveal>
            <p className="font-body text-[19px] leading-relaxed text-champagne md:text-[21px]">
              {whatWeCreate.everyExperience}
            </p>
            <p className="mt-4 font-body text-[19px] leading-relaxed text-champagne md:text-[21px]">
              {whatWeCreate.guides}
            </p>
            <p className="mt-8 font-display text-[26px] text-gold md:text-[32px]">
              {whatWeCreate.philosophy}
            </p>
            <p className="mt-4 font-body text-[19px] italic text-champagne/90 md:text-[21px]">
              {whatWeCreate.because}
            </p>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
