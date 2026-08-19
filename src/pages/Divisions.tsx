import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Display, Reveal, Section } from '../components/primitives'
import { experiences, signatureExperiences } from '../data/experiences'
import { usePageMeta } from '../lib/meta'

/** "Signature Experiences" intro and the six divisions, word for word. */
export default function Divisions() {
  usePageMeta(
    'Divisions — Sol Vé Custom Events',
    'Weddings, Signature Moments, Design & Stylization, Workshops & Curated Experiences, Conferences & International Events, and Fundraising Campaign Events.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Signature Experiences"
        headline="Every gathering begins with a purpose."
        media="experiences-hero"
      />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <div className="space-y-6 font-body text-[19px] leading-[1.7] text-espresso md:text-[21px]">
              {signatureExperiences.intro.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="linen">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {experiences.map((experience, i) => (
              <Reveal key={experience.slug} delay={(i % 2) * 90} className="h-full">
                <Link
                  to={`/divisions/${experience.slug}`}
                  className="group flex h-full flex-col rounded-[2px] border border-stone/40 bg-ivory p-6 transition-all duration-500 hover:border-bronze hover:shadow-[0_6px_30px_rgba(158,141,111,0.16)] md:p-8"
                >
                  <div className="overflow-hidden rounded-[2px]">
                    <Media
                      id={experience.media}
                      className="aspect-[16/10] w-full"
                      showCaption={false}
                      imgClassName="transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>

                  <Display as="h2" size="sm" className="mt-7 text-charcoal">
                    {experience.name}
                  </Display>

                  <p className="mt-4 font-body text-[18px] leading-relaxed text-espresso">
                    {experience.listingTagline ?? experience.tagline}
                  </p>

                  <p className="mt-4 font-body text-[17px] leading-relaxed text-charcoal">
                    {experience.because}
                  </p>

                  <span
                    className="mt-auto flex items-center gap-2 pt-8 font-ui text-[11px] uppercase text-espresso"
                    style={{ letterSpacing: '0.22em' }}
                  >
                    View services
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
