import { useState } from 'react'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Accent, Container, Eyebrow, Reveal, Section } from '../components/primitives'
import type { MediaId } from '../data/media'
import { divisions } from '../data/divisions'
import { usePageMeta } from '../lib/meta'

type Work = { media: MediaId; title: string; category: string; ratio: string }

const WORK: Work[] = [
  { media: 'portfolio-claudia-ali', title: 'Claudia and Ali: White Wedding', category: 'weddings', ratio: 'aspect-[4/3]' },
  { media: 'portfolio-white-wedding', title: 'White Wedding: The Room', category: 'weddings', ratio: 'aspect-[4/3]' },
  { media: 'portfolio-christina-vince', title: 'Christina and Vince: Vintage Vibes', category: 'weddings', ratio: 'aspect-[4/3]' },
  { media: 'portfolio-modern-rustic', title: 'Wedding Reception: Modern Rustic', category: 'weddings', ratio: 'aspect-[3/4]' },
  { media: 'portfolio-florals', title: 'Floral Design', category: 'design-stylization', ratio: 'aspect-[3/4]' },
  { media: 'division-design-stylization', title: 'Styled Environments', category: 'design-stylization', ratio: 'aspect-[4/3]' },
  { media: 'portfolio-celebration', title: 'Signature Celebrations', category: 'signature-moments', ratio: 'aspect-[4/3]' },
  { media: 'division-signature-moments', title: 'The Proposal', category: 'signature-moments', ratio: 'aspect-[3/4]' },
  { media: 'division-workshops', title: 'Curated Experiences', category: 'workshops', ratio: 'aspect-[4/3]' },
  { media: 'division-conferences', title: 'Conferences and Convenings', category: 'conferences', ratio: 'aspect-[4/3]' },
  { media: 'division-fundraising', title: 'Fundraising Campaigns', category: 'fundraising', ratio: 'aspect-[4/3]' },
]

const FILTERS = [{ label: 'All', value: 'all' }, ...divisions.map((d) => ({ label: d.name, value: d.slug }))]

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  usePageMeta(
    'Portfolio — Sol Vé Custom Events',
    'A gallery of unforgettable events produced by Sol Vé Custom Events across six divisions, in Calgary and worldwide.',
  )

  const shown = filter === 'all' ? WORK : WORK.filter((w) => w.category === filter)

  return (
    <>
      <Hero
        size="page"
        eyebrow="Portfolio"
        headline={
          <>
            A gallery of unforgettable <Accent>events.</Accent>
          </>
        }
        media="portfolio-claudia-ali"
      />

      <Section tone="ivory" rule>
        <Container>
          <Reveal>
            <Eyebrow>Filter by division</Eyebrow>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {FILTERS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFilter(option.value)}
                  aria-pressed={filter === option.value}
                  className={`min-h-[44px] rounded-[2px] border px-5 font-ui text-[11px] uppercase transition-colors duration-300 ${
                    filter === option.value
                      ? 'border-gold bg-gold text-ivory'
                      : 'border-stone/50 text-cocoa hover:border-bronze hover:text-espresso'
                  }`}
                  style={{ letterSpacing: '0.22em' }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {shown.map((work, i) => (
              <Reveal key={work.media} delay={(i % 3) * 80} className="h-full">
                <figure className="group h-full">
                  <div className="overflow-hidden rounded-[2px]">
                    <Media
                      id={work.media}
                      className={`${work.ratio} w-full`}
                      showCaption={false}
                      imgClassName="transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="font-display text-[20px] leading-snug text-charcoal">
                      {work.title}
                    </p>
                    <p
                      className="mt-2 font-ui text-[10px] uppercase text-stone"
                      style={{ letterSpacing: '0.26em' }}
                    >
                      {divisions.find((d) => d.slug === work.category)?.name}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-14 max-w-3xl font-body text-[17px] italic leading-relaxed text-stone">
            Each project on this page will carry its purpose, its story, the design philosophy behind
            it, professional photography and — where appropriate — the outcome for the client, as
            Lynea's photography is placed.
          </p>
        </Container>
      </Section>

      <ClosingCTA
        eyebrow="Your event, next"
        heading="Tell us what you are building."
        body="Every extraordinary event begins with a conversation. Tell us your vision and we will tell you what is possible."
      />
    </>
  )
}
