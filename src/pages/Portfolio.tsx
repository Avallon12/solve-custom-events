import { useState } from 'react'
import Hero from '../components/Hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Accent, Container, Eyebrow, Reveal, Section } from '../components/primitives'
import type { MediaId } from '../data/media'
import { divisions } from '../data/divisions'
import { usePageMeta } from '../lib/meta'

type Work = { media: MediaId; title: string; category: string }

/**
 * The eleven entries the Photo Guide lists for the Portfolio page, in its order.
 *
 * Every tile shares one aspect ratio. Mixing 4/3 and 3/4 meant each grid row
 * took the height of its tallest tile and left ragged gaps beneath the rest —
 * the source photographs run landscape, portrait and square, so a square crop
 * is the one that treats all of them evenly.
 */
const WORK: Work[] = [
  { media: 'portfolio-mmm', title: 'Mystic Moonlight Masquerade Campaign', category: 'fundraising' },
  { media: 'portfolio-mingle', title: 'Mystic Mingle', category: 'fundraising' },
  { media: 'portfolio-threads', title: 'Mystic Threads', category: 'fundraising' },
  { media: 'portfolio-fundraising', title: 'Fundraising Campaign Events', category: 'fundraising' },
  { media: 'portfolio-weddings', title: 'Weddings Division', category: 'weddings' },
  { media: 'portfolio-destination', title: 'Destination Weddings', category: 'weddings' },
  { media: 'portfolio-multicultural', title: 'Multicultural Weddings', category: 'weddings' },
  { media: 'portfolio-claudia-ali', title: 'Claudia and Ali: White Wedding', category: 'weddings' },
  { media: 'portfolio-vogue', title: 'The World In Vogue', category: 'design-stylization' },
  { media: 'portfolio-florals', title: 'Floral Design', category: 'design-stylization' },
  { media: 'division-design-stylization', title: 'Styled Environments', category: 'design-stylization' },
  { media: 'portfolio-signature', title: 'Signature Moments', category: 'signature-moments' },
  { media: 'portfolio-workshops', title: 'Workshops & Curated Experiences', category: 'workshops' },
  { media: 'portfolio-conferences', title: 'Conferences & International Events', category: 'conferences' },
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
        media="portfolio-mmm"
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
                      : 'border-stone/50 text-espresso hover:border-bronze hover:text-espresso'
                  }`}
                  style={{ letterSpacing: '0.22em' }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid auto-rows-fr grid-cols-2 gap-5 md:gap-8 lg:grid-cols-3">
            {shown.map((work, i) => (
              <Reveal key={work.media} delay={(i % 3) * 80} className="h-full">
                <figure className="group flex h-full flex-col">
                  <div className="overflow-hidden rounded-[2px]">
                    <Media
                      id={work.media}
                      className="aspect-square w-full"
                      showCaption={false}
                      imgClassName="transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="font-display text-[20px] leading-snug text-charcoal">
                      {work.title}
                    </p>
                    <p
                      className="mt-2 font-ui text-[10px] uppercase text-walnut"
                      style={{ letterSpacing: '0.26em' }}
                    >
                      {divisions.find((d) => d.slug === work.category)?.name}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-14 max-w-3xl font-body text-[17px] italic leading-relaxed text-espresso">
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
