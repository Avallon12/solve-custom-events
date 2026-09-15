import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import GalleryGrid from '../components/GalleryGrid'
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
import { caseStudies } from '../data/case-studies'
import { portfolioWork } from '../data/galleries'
import { usePageMeta } from '../lib/meta'

/**
 * Portfolio / Journal — the document's own sequence: Portfolio, then Features,
 * then Testimonials, then Perspectives. September 2026: the Portfolio section
 * now opens with case studies (how Sol Vé thinks, what it was asked, what
 * happened) before the selected work (what was created), grouped by her six
 * categories.
 */

export default function Portfolio() {
  usePageMeta(
    'Portfolio & Journal | Sol Vé Custom Events',
    'Case studies and selected work from Sol Vé Custom Events in Calgary: weddings, signature moments, fundraising campaigns, conferences, design and stylization, and workshops.',
  )

  return (
    <>
      <Hero
        size="page"
        eyebrow="Portfolio & Journal"
        headline={
          <>
            The work is different every time. The philosophy is <Accent>not.</Accent>
          </>
        }
        media="portfolio-hero"
      />

      <Section tone="ivory" id="case-studies" rule>
        <Container>
          <Reveal>
            <Eyebrow>Case Studies</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-6 md:gap-8 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 90} className={study.featured ? 'lg:col-span-2' : ''}>
                <Link
                  to={`/portfolio/${study.slug}`}
                  className="group flex h-full flex-col rounded-[2px] border border-stone/40 bg-ivory transition-all duration-500 hover:border-bronze hover:shadow-[0_6px_30px_rgba(158,141,111,0.16)]"
                >
                  <div className="overflow-hidden rounded-t-[2px]">
                    <Media
                      id={study.hero}
                      showCaption={false}
                      className={`${study.featured ? 'aspect-[16/9]' : 'aspect-[4/3]'} w-full`}
                      imgClassName="transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-9">
                    <p className="font-ui text-[11px] uppercase text-gold" style={{ letterSpacing: '0.24em' }}>
                      {study.number}{study.featured ? ' — Featured' : ''}
                    </p>
                    <h2 className="mt-4 font-display text-[26px] leading-tight text-charcoal transition-colors duration-300 group-hover:text-gold md:text-[32px]">
                      {study.title}
                    </h2>
                    <p className="mt-2 font-body text-[19px] italic text-espresso md:text-[21px]">{study.subtitle}</p>
                    <p className="mt-auto pt-6 font-ui text-[11px] uppercase text-walnut" style={{ letterSpacing: '0.2em' }}>
                      {study.tags.join(' · ')}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" id="selected-work">
        <Container>
          <Reveal>
            <Eyebrow>Selected Work</Eyebrow>
          </Reveal>
          <div className="mt-6 flex flex-col gap-16 md:gap-20">
            {portfolioWork.map((group) => (
              <div key={group.category}>
                <Reveal className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-stone/40 pb-4">
                  <h2 className="font-display text-[26px] leading-snug text-charcoal md:text-[32px]">{group.category}</h2>
                  <Link
                    to={group.to}
                    className="font-ui text-[11px] uppercase text-espresso underline underline-offset-4 hover:text-gold"
                    style={{ letterSpacing: '0.22em' }}
                  >
                    View the experience
                  </Link>
                </Reveal>
                <GalleryGrid ids={group.ids} featured={group.ids.length} className="mt-8" />
              </div>
            ))}
          </div>

          {/* Event film highlights — the client's Mystic Menagerie film. */}
          <Reveal className="mt-16 md:mt-20">
            <Media id="home-film" showCaption={false} className="aspect-video w-full" />
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
