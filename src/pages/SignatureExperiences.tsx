import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Display, Eyebrow, Reveal, Section } from '../components/primitives'
import { divisions } from '../data/divisions'
import { usePageMeta } from '../lib/meta'

/**
 * "SIX DIVISIONS OF EXPERIENCES" — copy verbatim from "Website order and
 * messaging", in its order. Nothing added.
 */
export default function SignatureExperiences() {
  usePageMeta(
    'Signature Experiences — Sol Vé Custom Events',
    'Six divisions of experiences: Design & Stylization, Weddings, Signature Moments, Workshops & Curated Experiences, Conferences & International Events, and Fundraising Campaign Events.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Signature Experiences"
        headline="Six Divisions of Experiences"
        media="experiences-hero"
      />

      <Section tone="ivory" rule>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
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

                  <Display as="h2" size="sm" className="mt-7 text-charcoal">
                    {division.name}
                  </Display>

                  <p className="mt-4 font-body text-[18px] leading-relaxed text-espresso">
                    {division.oneLine}
                  </p>

                  <p className="mt-4 font-body text-[17px] font-medium leading-relaxed text-charcoal">
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

          <Reveal className="mt-16 text-center">
            <Eyebrow>Sol Vé Custom Events</Eyebrow>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
