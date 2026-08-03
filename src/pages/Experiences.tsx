import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Accent, Container, Display, Eyebrow, Ornament, Reveal, Section } from '../components/primitives'
import { divisions } from '../data/divisions'
import { usePageMeta } from '../lib/meta'

const PURPOSES = [
  'Some celebrate love.',
  "Some honour life's defining moments.",
  'Some inspire learning, creativity, and personal growth.',
  'Some strengthen organizations and teams.',
  'Some unite communities around a shared cause.',
  'Others bring together leaders to shape meaningful change.',
]

export default function Experiences() {
  usePageMeta(
    'What We Create — Sol Vé Custom Events',
    'Six divisions of experience: design and stylization, weddings, signature moments, workshops and curated experiences, conferences and international events, and fundraising campaigns.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="What We Create"
        headline={
          <>
            Every gathering begins with a different <Accent>purpose.</Accent>
          </>
        }
        media="experiences-hero"
      />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <div className="space-y-3">
              {PURPOSES.map((line) => (
                <p
                  key={line}
                  className="font-body text-[20px] leading-relaxed text-espresso md:text-[23px]"
                >
                  {line}
                </p>
              ))}
            </div>

            <p className="mt-10 font-body text-[18px] text-espresso">
              While every experience is unique, each is guided by the same belief:
            </p>

            <p className="mt-5 font-display text-[26px] leading-snug text-charcoal md:text-[34px]">
              We design how people gather because the way people gather shapes everything that
              follows.
            </p>

            <p className="mt-9 font-body text-[18px] leading-[1.7] text-espresso md:text-[20px]">
              From intimate celebrations to international convenings, Sol Vé creates experiences
              where people connect more deeply, cultures are celebrated, ideas are exchanged,
              communities are strengthened, and new possibilities begin.
            </p>

            <div className="mt-14">
              <Ornament />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="linen">
        <Container>
          <Reveal className="text-center">
            <Eyebrow>Six Divisions of Experience</Eyebrow>
            <Display as="h2" size="lg" className="mt-6 text-charcoal">
              One house. Six worlds.
            </Display>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
            {divisions.map((division, i) => (
              <Reveal key={division.slug} delay={(i % 2) * 90} className="h-full">
                <Link
                  to={`/what-we-create/${division.slug}`}
                  className="group flex h-full flex-col rounded-[2px] border border-stone/40 bg-ivory p-6 transition-all duration-500 hover:border-bronze hover:shadow-[0_6px_30px_rgba(158,141,111,0.16)] md:p-8"
                >
                  <div className="overflow-hidden rounded-[2px]">
                    <Media
                      id={division.media}
                      className="aspect-[16/10] w-full"
                      showCaption={false}
                      imgClassName="transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>

                  <p
                    className="mt-7 font-ui text-[10px] uppercase text-gold"
                    style={{ letterSpacing: '0.3em' }}
                  >
                    Division {String(i + 1).padStart(2, '0')}
                  </p>

                  <h3 className="mt-4 font-display text-[25px] leading-tight text-charcoal md:text-[30px]">
                    {division.name}
                  </h3>

                  <p className="mt-4 font-body text-[18px] leading-relaxed text-espresso">
                    {division.oneLine}
                  </p>

                  <p className="mt-4 font-body text-[17px] italic leading-relaxed text-espresso">
                    {division.because}
                  </p>

                  <span
                    className="mt-auto flex items-center gap-2 pt-8 font-ui text-[11px] uppercase text-espresso"
                    style={{ letterSpacing: '0.22em' }}
                  >
                    Explore this division
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
