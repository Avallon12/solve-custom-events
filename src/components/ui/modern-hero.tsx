import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { media } from '../../data/media'
import type { MediaId, MediaSlot } from '../../data/media'
import { Container, Eyebrow } from '../primitives'

/**
 * Smooth-scroll hero.
 *
 * A framed photograph on ivory that opens to full bleed as you scroll, with
 * further frames drifting up over it at different speeds, then dissolving back
 * into the page.
 *
 * Inverted from the source component's zinc-950 ground to Sol Vé ivory: the
 * brand's own rule is that the page is warm ivory and only sections meant to
 * feel institutional go dark. On ivory the clip-path reads as a photograph
 * being unframed rather than a light box on black.
 *
 * The source component wrapped this in Lenis smooth scroll. That is removed:
 * Lenis interpolates the page toward where you scrolled instead of moving with
 * you, which reads as lag on a page this image-heavy. Native scroll responds
 * on the same frame as the wheel.
 */

type Frame = { id: MediaId; start: number; end: number; className: string }

const SECTION_HEIGHT = 1500

/** The frame's starting inset. Wider on phones so the headline still fits. */
function useFrameInset() {
  const [inset, setInset] = useState(14)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    const apply = () => setInset(query.matches ? 14 : 6)
    apply()
    query.addEventListener('change', apply)
    return () => query.removeEventListener('change', apply)
  }, [])

  return inset
}

export function SmoothScrollHero({
  eyebrow,
  headline,
  subheadline,
  actions,
  centre,
  frames,
}: {
  eyebrow: string
  headline: React.ReactNode
  subheadline?: string
  actions?: React.ReactNode
  centre: MediaId
  frames: readonly Frame[]
}) {
  return (
    <div className="relative bg-ivory">
      <Hero
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
        actions={actions}
        centre={centre}
        frames={frames}
      />
    </div>
  )
}

function Hero({
  eyebrow,
  headline,
  subheadline,
  actions,
  centre,
  frames,
}: {
  eyebrow: string
  headline: React.ReactNode
  subheadline?: string
  actions?: React.ReactNode
  centre: MediaId
  frames: readonly Frame[]
}) {
  return (
    <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full">
      <CentreFrame
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
        actions={actions}
        centre={centre}
      />

      <ParallaxFrames frames={frames} />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-ivory/0 to-ivory" />
    </div>
  )
}

function CentreFrame({
  eyebrow,
  headline,
  subheadline,
  actions,
  centre,
}: {
  eyebrow: string
  headline: React.ReactNode
  subheadline?: string
  actions?: React.ReactNode
  centre: MediaId
}) {
  const { scrollY } = useScroll()
  const inset = useFrameInset()
  const slot = media[centre] as MediaSlot

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [inset, 0])
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [100 - inset, 100])
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

  // The source component animated `background-size` from 170% to 100%, which
  // forces the browser to re-rasterise a 1600px photograph on every single
  // scroll frame — the main cause of the stutter. An equivalent `scale` on a
  // child layer is handled by the compositor and costs nothing per frame.
  const scale = useTransform(scrollY, [0, SECTION_HEIGHT + 500], [1.7, 1])
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0])

  // The type holds while the frame opens, then leaves before the images arrive.
  const copyOpacity = useTransform(scrollY, [0, 520, 760], [1, 1, 0])
  const copyY = useTransform(scrollY, [0, 760], [0, -40])
  const cueOpacity = useTransform(scrollY, [0, 220], [1, 0])

  return (
    <motion.div
      className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ clipPath, opacity, willChange: 'clip-path, opacity' }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          scale,
          backgroundImage: `url(${slot.src ?? ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
        }}
      />

      {/* Warm scrim — never cold black, and enough of it to clear 4.5:1 */}
      <div className="absolute inset-0 bg-charcoal/50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 60% at 50% 55%, rgba(36,34,22,0.55) 0%, rgba(36,34,22,0) 100%)',
        }}
      />

      <motion.div
        style={{ opacity: copyOpacity, y: copyY }}
        className="relative z-10 flex w-[86%] max-w-[820px] flex-col items-center text-center"
      >
        <Eyebrow tone="light">{eyebrow}</Eyebrow>

        <h1 className="mt-6 font-display text-[34px] font-normal leading-[1.08] text-ivory sm:text-[52px] md:text-[68px] lg:text-[80px]">
          {headline}
        </h1>

        {subheadline && (
          <p className="mt-6 max-w-[540px] font-body text-[18px] leading-[1.55] text-champagne md:text-[21px]">
            {subheadline}
          </p>
        )}

        {actions && <div className="mt-9 flex flex-wrap justify-center gap-3">{actions}</div>}
      </motion.div>

      <motion.div
        style={{ opacity: cueOpacity }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <span
          className="flex flex-col items-center gap-2 font-ui text-[10px] uppercase text-champagne/80"
          style={{ letterSpacing: '0.3em' }}
        >
          Scroll
          <FiArrowDown className="animate-bounce text-gold" />
        </span>
      </motion.div>
    </motion.div>
  )
}

function ParallaxFrames({
  frames,
}: {
  frames: readonly Frame[]
}) {
  return (
    <Container className="relative z-10 pt-[200px]">
      {frames.map((frame) => (
        <ParallaxFrame key={frame.id} {...frame} />
      ))}
    </Container>
  )
}

function ParallaxFrame({
  id,
  start,
  end,
  className,
}: {
  id: MediaId
  start: number
  end: number
  className: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const slot = media[id] as MediaSlot

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  })

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85])
  const y = useTransform(scrollYProgress, [0, 1], [start, end])
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`

  return (
    // No credit line in the hero — the frames are in motion and a caption
    // chasing them reads as an error. Credits appear under these same
    // photographs where they sit still, on the division and portfolio pages.
    <motion.div ref={ref} style={{ transform, opacity }} className={className}>
      <img
        src={slot.src}
        alt={slot.alt}
        loading="lazy"
        decoding="async"
        className="w-full rounded-[2px] shadow-[0_20px_60px_rgba(36,34,22,0.18)] ring-1 ring-inset ring-gold/25"
      />
    </motion.div>
  )
}

/** Convenience wrapper linking straight to the enquiry page. */
export function HeroLink({
  to,
  children,
  variant = 'solid',
}: {
  to: string
  children: React.ReactNode
  variant?: 'solid' | 'outline'
}) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-[52px] items-center justify-center rounded-[2px] px-7 font-ui text-[13px] font-semibold uppercase transition-colors duration-300 ${
        variant === 'solid'
          ? 'bg-gold text-ivory hover:bg-bronze'
          : 'border-[1.5px] border-gold/70 text-ivory hover:bg-gold/15'
      }`}
      style={{ letterSpacing: '0.5px' }}
    >
      {children}
    </Link>
  )
}
