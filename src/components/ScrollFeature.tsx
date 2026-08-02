import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Media from './Media'
import { Container, Eyebrow, GoldRule } from './primitives'
import { divisions } from '../data/divisions'
import { cta } from '../data/site'

/**
 * The six divisions, told as a scroll.
 *
 * A sticky index on the left tracks the card the visitor is reading; the cards
 * enter from the right the first time they appear and stay. Two observers:
 * 0.6 for "which one am I reading", 0.15 for the reveal.
 */
export default function ScrollFeature() {
  const [active, setActive] = useState(0)
  const [revealed, setRevealed] = useState<boolean[]>(() => divisions.map(() => false))
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const indexOf = (el: Element) => Number((el as HTMLElement).dataset.index)

    const activeObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(indexOf(entry.target))
        }),
      { threshold: 0.6 },
    )

    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const index = indexOf(entry.target)
          setRevealed((prev) => {
            if (prev[index]) return prev
            const next = [...prev]
            next[index] = true
            return next
          })
        }),
      { threshold: 0.15 },
    )

    cardRefs.current.forEach((el) => {
      if (!el) return
      activeObserver.observe(el)
      revealObserver.observe(el)
    })
    return () => {
      activeObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  return (
    <section id="what-we-create" className="relative scroll-mt-24 py-[60px] md:py-[110px]">
      {/* Fixed warm-dark ground the cards travel across */}
      <div className="grain fixed inset-0 -z-10 bg-[radial-gradient(120%_90%_at_20%_10%,#3A3020_0%,#242216_55%,#15120A_100%)]" />
      <GoldRule className="absolute inset-x-0 top-0" />

      <Container width="wide">
        <div className="lg:grid lg:grid-cols-[380px_1fr] lg:gap-20 xl:grid-cols-[440px_1fr] xl:gap-32">
          {/* Sticky index */}
          <div className="lg:sticky lg:top-[92px] lg:flex lg:h-[calc(100vh-92px)] lg:flex-col lg:justify-center lg:py-16">
            <Eyebrow tone="light">What We Create</Eyebrow>
            <h2 className="mt-6 font-display text-[30px] leading-[1.15] text-ivory sm:text-[38px] lg:text-[46px]">
              Six divisions. One enduring philosophy.
            </h2>
            <p className="mt-6 max-w-md font-body text-[18px] leading-relaxed text-champagne/85">
              Every gathering begins with a different purpose. While every experience is unique, each
              is guided by the same belief.
            </p>

            <nav aria-label="Divisions" className="mt-10 hidden flex-col items-start gap-1 lg:flex">
              {divisions.map((division, i) => (
                <button
                  key={division.slug}
                  type="button"
                  onClick={() =>
                    cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }
                  className={`group flex items-center gap-3 py-2 text-left font-ui text-[13px] uppercase transition-colors duration-300 ${
                    active === i ? 'text-gold' : 'text-champagne/40 hover:text-champagne/80'
                  }`}
                  style={{ letterSpacing: '0.18em' }}
                >
                  <span
                    className={`h-px transition-all duration-500 ${
                      active === i ? 'w-9 bg-gold' : 'w-4 bg-champagne/30'
                    }`}
                  />
                  {division.name}
                </button>
              ))}
            </nav>

            <div className="mt-10 hidden lg:block">
              <Link
                to="/connect"
                className="inline-flex min-h-[52px] items-center rounded-[2px] border-[1.5px] border-gold/70 px-7 font-ui text-[13px] font-semibold uppercase text-ivory transition-colors duration-300 hover:bg-gold/15"
                style={{ letterSpacing: '0.5px' }}
              >
                {cta.primary}
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-12 flex flex-col gap-10 md:gap-14 lg:mt-0 lg:py-24">
            {divisions.map((division, i) => (
              <div
                key={division.slug}
                data-index={i}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                className={`rounded-[2px] border border-gold/25 bg-charcoal/80 p-6 transition-all duration-700 ease-out md:p-10 ${
                  revealed[i] ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                }`}
              >
                <Media
                  id={division.media}
                  className="aspect-[16/10] w-full"
                  showCaption={false}
                  imgClassName="transition-transform duration-[1200ms] hover:scale-105"
                />

                <p
                  className="mt-7 font-ui text-[11px] uppercase text-gold"
                  style={{ letterSpacing: '0.3em' }}
                >
                  {String(i + 1).padStart(2, '0')} — {division.eyebrow}
                </p>

                <h3 className="mt-4 font-display text-[26px] leading-tight text-ivory md:text-[34px]">
                  {division.name}
                </h3>

                <p className="mt-4 max-w-xl font-body text-[18px] leading-relaxed text-champagne/85 md:text-[19px]">
                  {division.oneLine}
                </p>

                <p className="mt-4 max-w-xl font-body text-[17px] italic leading-relaxed text-gold/90">
                  {division.because}
                </p>

                <Link
                  to={`/experiences/${division.slug}`}
                  className="group mt-7 inline-flex items-center gap-2 font-ui text-[12px] uppercase text-ivory transition-colors duration-300 hover:text-gold"
                  style={{ letterSpacing: '0.22em' }}
                >
                  Explore this division
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
