import { useEffect, useRef, useState } from 'react'
import Hero from '../components/Hero'
import ClosingCTA from '../components/ClosingCTA'
import { Accent, Container, Eyebrow, Ornament, Reveal, Section } from '../components/primitives'
import { perspectives } from '../data/content'
import { usePageMeta } from '../lib/meta'

/**
 * Lynea's essays, set as an editorial journal: a sticky index on the left that
 * follows the reader, long-form articles on the right.
 */
export default function Perspectives() {
  const [active, setActive] = useState(0)
  const refs = useRef<Array<HTMLElement | null>>([])

  usePageMeta(
    'Perspectives — Sol Vé Custom Events',
    'Essays from Lynea Vaugeois Hetherington on convening without hierarchy, why environment shapes dialogue, designing spaces for difficult conversations, and the future of global collaboration.',
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
        }),
      { rootMargin: '-20% 0px -60% 0px' },
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero
        size="page"
        eyebrow="Perspectives"
        headline={
          <>
            Notes on how people <Accent>gather.</Accent>
          </>
        }
        subheadline="Because the most important voice in the room is often the one that hasn’t been heard yet."
        media="perspectives-hero"
      />

      <Section tone="ivory" rule>
        <Container width="wide">
          <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-20 xl:grid-cols-[340px_1fr]">
            <div className="hidden lg:block">
              <div className="sticky top-[140px]">
                <Eyebrow>In this journal</Eyebrow>
                <nav aria-label="Perspectives" className="mt-7 flex flex-col gap-1">
                  {perspectives.map((essay, i) => (
                    <button
                      key={essay.slug}
                      type="button"
                      onClick={() =>
                        refs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                      className={`flex items-start gap-3 py-2.5 text-left font-body text-[17px] leading-snug transition-colors duration-300 ${
                        active === i ? 'text-espresso' : 'text-stone hover:text-cocoa'
                      }`}
                    >
                      <span
                        className={`mt-2.5 h-px shrink-0 transition-all duration-500 ${
                          active === i ? 'w-8 bg-gold' : 'w-3 bg-stone/60'
                        }`}
                      />
                      {essay.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="flex flex-col gap-20 md:gap-28">
              {perspectives.map((essay, i) => (
                <article
                  key={essay.slug}
                  id={essay.slug}
                  data-index={i}
                  ref={(el) => {
                    refs.current[i] = el
                  }}
                  className="scroll-mt-32"
                >
                  <Reveal>
                    <p
                      className="font-ui text-[10px] uppercase text-gold"
                      style={{ letterSpacing: '0.3em' }}
                    >
                      Essay {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-5 max-w-2xl font-display text-[30px] leading-[1.15] text-charcoal md:text-[42px]">
                      {essay.title}
                    </h2>
                    <p className="mt-6 max-w-2xl font-display text-[19px] italic leading-snug text-espresso md:text-[23px]">
                      {essay.standfirst}
                    </p>

                    <div className="prose-solve mt-9 max-w-2xl text-cocoa">
                      {essay.body.map((paragraph) => (
                        <p key={paragraph.slice(0, 36)}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-12 max-w-2xl">
                      <Ornament />
                    </div>
                  </Reveal>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ClosingCTA
        eyebrow="Continue the conversation"
        heading="If our philosophy resonates with you."
        body="We would be honoured to hear your story, and to explore what is possible together."
      />
    </>
  )
}
