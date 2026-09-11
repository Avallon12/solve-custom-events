import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import {
  Accent,
  Container,
  Display,
  Eyebrow,
  Ornament,
  Reveal,
  Section,
} from '../components/primitives'
import { perspectives, portfolio } from '../data/content'
import { portfolioGallery } from '../data/galleries'
import { usePageMeta } from '../lib/meta'

/**
 * Portfolio / Journal — the document's own sequence: Portfolio, then Features,
 * then Testimonials, then Perspectives. Nothing added.
 */


export default function Portfolio() {
  usePageMeta(
    'Portfolio & Journal | Sol Vé Custom Events',
    'Weddings, signature moments, fundraising campaigns, conferences, design and stylization, and workshops from the Sol Vé Custom Events portfolio in Calgary.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Portfolio / Journal"
        headline={
          <>
            Portfolio and <Accent>Perspectives.</Accent>
          </>
        }
        media="portfolio-hero"
      />

      <Section tone="ivory" rule>
        <Container>
          <Reveal>
            <Eyebrow>Portfolio</Eyebrow>
            <ul className="mt-8 space-y-1">
              {portfolio.categories.map((category) => (
                <li
                  key={category}
                  className="font-display text-[26px] leading-snug text-charcoal md:text-[34px]"
                >
                  {category}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-14 grid auto-rows-fr grid-cols-2 gap-5 md:gap-8 lg:grid-cols-3">
            {portfolioGallery.map((id, i) => (
              <Reveal key={id} delay={(i % 3) * 80} className="h-full">
                <div className="overflow-hidden rounded-[2px]">
                  <Media
                    id={id}
                    className="aspect-square w-full"
                    imgClassName="transition-transform duration-[1200ms] hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Event film highlights — the client's Mystic Menagerie film. */}
          <Reveal className="mt-8 md:mt-12">
            <Media id="home-film" showCaption={false} className="aspect-video w-full" />
          </Reveal>

          <Reveal className="mt-16">
            <p className="font-body text-[18px] text-espresso">Each project should include:</p>
            <ul className="mt-5 space-y-2">
              {portfolio.requirements.map((item) => (
                <li key={item} className="font-body text-[19px] text-charcoal md:text-[21px]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section tone="linen">
        <Container>
          <Reveal>
            <Eyebrow>Features</Eyebrow>
          </Reveal>
          <div className="mt-10 divide-y divide-bronze/30 border-y border-bronze/30">
            {portfolio.features.map((feature, i) => (
              <Reveal key={feature.name} delay={i * 70}>
                <a
                  href={feature.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block py-7 font-display text-[24px] text-charcoal transition-colors duration-300 hover:text-gold md:text-[30px]"
                >
                  {feature.name}
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rule>
        <Container>
          <Reveal>
            <Eyebrow>Testimonials</Eyebrow>
          </Reveal>
          <div className="mt-10 grid border-t border-stone/40 sm:grid-cols-2">
            {portfolio.testimonials.map((voice, i) => (
              <Reveal key={voice.slug} delay={(i % 2) * 70} className="h-full">
                <Link
                  to={`/testimonials#${voice.slug}`}
                  className="group flex h-full flex-col gap-2 border-b border-stone/40 px-7 py-8 sm:border-r"
                >
                  <span className="font-display text-[22px] text-charcoal transition-colors duration-300 group-hover:text-gold md:text-[25px]">
                    {voice.name}
                  </span>
                  <span
                    className="font-ui text-[11px] uppercase text-walnut"
                    style={{ letterSpacing: '0.22em' }}
                  >
                    {voice.role}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container width="narrow">
          <Reveal>
            <Eyebrow>Perspectives</Eyebrow>
          </Reveal>

          <div className="mt-14 flex flex-col gap-20 md:gap-28">
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

      <ClosingCTA />
    </>
  )
}
