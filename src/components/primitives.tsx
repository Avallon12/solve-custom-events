import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

/* ── Layout ────────────────────────────────────────────────────────────────── */

export function Container({
  children,
  className = '',
  width = 'default',
  ref,
}: {
  children: ReactNode
  className?: string
  width?: 'default' | 'narrow' | 'wide'
  ref?: React.Ref<HTMLDivElement>
}) {
  const max =
    width === 'narrow' ? 'max-w-[820px]' : width === 'wide' ? 'max-w-[1440px]' : 'max-w-content'
  return (
    <div ref={ref} className={`mx-auto w-full ${max} px-5 md:px-10 lg:px-20 ${className}`}>
      {children}
    </div>
  )
}

/** Section padding follows Manual 3: 100px desktop / 60px mobile minimum. */
export function Section({
  children,
  tone = 'ivory',
  className = '',
  id,
  rule = false,
}: {
  children: ReactNode
  tone?: 'ivory' | 'charcoal' | 'linen' | 'champagne' | 'espresso'
  className?: string
  id?: string
  rule?: boolean
}) {
  const tones = {
    ivory: 'bg-ivory text-charcoal',
    linen: 'bg-linen text-charcoal',
    champagne: 'bg-champagne text-charcoal',
    charcoal: 'bg-charcoal text-ivory',
    espresso: 'bg-espresso text-ivory',
  }
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-[60px] md:py-[100px] lg:py-[128px] ${tones[tone]} ${className}`}
    >
      {rule && <GoldRule className="absolute inset-x-0 top-0" />}
      {children}
    </section>
  )
}

/* ── Marks ─────────────────────────────────────────────────────────────────── */

export function GoldRule({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`foil h-px w-full ${className}`} />
}

export function Eyebrow({
  children,
  tone = 'dark',
  className = '',
}: {
  children: ReactNode
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <p
      className={`font-ui text-[12px] font-semibold uppercase md:text-[14px] ${
        tone === 'light' ? 'text-champagne' : 'text-walnut'
      } ${className}`}
      style={{ letterSpacing: '0.3em' }}
    >
      {children}
    </p>
  )
}

/** A single hairline of gold with a diamond at its centre — section divider. */
export function Ornament({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const color = tone === 'light' ? 'bg-gold/50' : 'bg-bronze/40'
  return (
    <div aria-hidden="true" className="flex w-full items-center gap-3">
      <span className={`h-px flex-1 ${color}`} />
      <span className={`h-1.5 w-1.5 rotate-45 ${tone === 'light' ? 'bg-gold' : 'bg-bronze'}`} />
      <span className={`h-px flex-1 ${color}`} />
    </div>
  )
}

/* ── Type ──────────────────────────────────────────────────────────────────── */

export function Display({
  children,
  as: Tag = 'h2',
  size = 'lg',
  className = '',
}: {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'p'
  size?: 'xl' | 'lg' | 'md' | 'sm'
  className?: string
}) {
  const sizes = {
    // Dramatic scale contrast against 18px body — the display face carries
    // the luxury; weight stays light and the size does the talking.
    xl: 'text-[40px] leading-[1.04] sm:text-[56px] md:text-[72px] lg:text-[88px]',
    lg: 'text-[32px] leading-[1.1] sm:text-[42px] md:text-[52px]',
    md: 'text-[25px] leading-[1.18] md:text-[33px]',
    sm: 'text-[21px] leading-[1.25] md:text-[25px]',
  }
  return <Tag className={`font-display ${sizes[size]} ${className}`}>{children}</Tag>
}

/**
 * The one flourish that carries the brand: a word held in gold.
 * Roman, never italic — emphasis is carried by colour, not slant.
 */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-gold">{children}</span>
}

export function Lede({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-body text-[19px] leading-[1.65] md:text-[22px] ${className}`}>{children}</p>
  )
}

export function Prose({
  paragraphs,
  className = '',
  tone = 'dark',
}: {
  paragraphs: readonly string[]
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <div className={`prose-solve ${tone === 'light' ? 'text-champagne' : 'text-espresso'} ${className}`}>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </div>
  )
}

/* ── Buttons ───────────────────────────────────────────────────────────────── */

type ButtonVariant = 'primary' | 'outline' | 'outline-light'

const base =
  'inline-flex min-h-[52px] items-center justify-center gap-2 px-8 py-4 font-ui text-[15px] font-semibold uppercase transition-colors duration-300 md:text-[16px]'
/** Written out rather than computed so Tailwind's scanner sees every class. */
function variantClass(v: ButtonVariant) {
  if (v === 'primary') return 'rounded-[2px] bg-gold text-ivory hover:bg-bronze'
  if (v === 'outline') return 'rounded-[2px] border-[1.5px] border-bronze text-charcoal hover:bg-linen/50'
  return 'rounded-[2px] border-[1.5px] border-gold/70 text-ivory hover:bg-gold/15'
}

export function Btn({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  className?: string
  type?: 'button' | 'submit'
}) {
  const cls = `${base} ${variantClass(variant)} ${className}`
  const style = { letterSpacing: '0.12em' }

  if (to) {
    return (
      <Link to={to} className={cls} style={style}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} style={style}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  )
}

/* ── Motion ────────────────────────────────────────────────────────────────── */

/** Reveals its children once, the first time they enter the viewport. */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-out ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ── Cards ─────────────────────────────────────────────────────────────────── */

/** Manual 5: ivory or linen fill, hairline warm-gold rim, 2px radius, 40px pad. */
export function Card({
  children,
  tone = 'ivory',
  className = '',
}: {
  children: ReactNode
  tone?: 'ivory' | 'linen' | 'dark'
  className?: string
}) {
  const tones = {
    ivory: 'bg-ivory border-stone/40 hover:border-stone',
    linen: 'bg-linen/60 border-bronze/30 hover:border-bronze/70',
    dark: 'bg-charcoal/80 border-gold/25 hover:border-gold/60 text-ivory',
  }
  return (
    <div
      className={`h-full rounded-[2px] border p-7 transition-all duration-500 hover:shadow-[0_4px_24px_rgba(158,141,111,0.12)] md:p-10 ${tones[tone]} ${className}`}
    >
      {children}
    </div>
  )
}
