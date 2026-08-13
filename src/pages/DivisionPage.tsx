import { Navigate, useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Container, Display, Eyebrow, Ornament, Reveal, Section } from '../components/primitives'
import { experienceBySlug } from '../data/experiences'
import { usePageMeta } from '../lib/meta'

/** One division from "Signature Experiences", word for word. */
export default function DivisionPage() {
  const { slug } = useParams()
  const experience = slug ? experienceBySlug(slug) : undefined

  usePageMeta(
    experience ? `${experience.name} — Sol Vé Custom Events` : 'Divisions — Sol Vé Custom Events',
    experience ? experience.tagline : 'Sol Vé Custom Events.',
  )

  if (!experience) return <Navigate to="/divisions" replace />

  return (
    <>
      <Hero
        size="page"
        eyebrow="Signature Experiences"
        headline={experience.name}
        subheadline={experience.tagline}
        media={experience.media}
      />

      <Section tone="ivory" rule>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">
            <Reveal>
              <p className="font-body text-[19px] leading-[1.7] text-espresso md:text-[21px]">
                {experience.intro}
              </p>
            </Reveal>
            <Reveal delay={110}>
              <Media id={experience.media} className="aspect-[4/3] w-full" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="linen">
        <Container>
          <Reveal>
            <Eyebrow>Services</Eyebrow>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
            {experience.services.map((group, i) => (
              <Reveal key={group.title} delay={(i % 2) * 90} className="h-full">
                <div className="h-full rounded-[2px] border border-stone/40 bg-ivory p-7 md:p-9">
                  <h2 className="font-display text-[23px] leading-tight text-charcoal md:text-[26px]">
                    {group.title}
                  </h2>

                  {group.lead && (
                    <p className="mt-4 font-body text-[17px] leading-relaxed text-espresso">
                      {group.lead}
                    </p>
                  )}

                  <p
                    className="mt-6 font-ui text-[10px] uppercase text-walnut"
                    style={{ letterSpacing: '0.3em' }}
                  >
                    Services include
                  </p>

                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="font-body text-[17px] leading-snug text-charcoal md:text-[18px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <Eyebrow>Ideal For</Eyebrow>
            <Display as="h2" size="md" className="mt-6 text-charcoal">
              {experience.idealFor}
            </Display>
            <p className="mt-9 font-display text-[22px] italic leading-snug text-espresso md:text-[26px]">
              {experience.because}
            </p>
            <div className="mt-14">
              <Ornament />
            </div>
          </Reveal>
        </Container>
      </Section>

      <ClosingCTA />
    </>
  )
}
