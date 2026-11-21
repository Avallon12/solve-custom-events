import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { summitPaths } from '../../data/summit'
import { useSummit } from './SummitLanguage'

/**
 * The exact transparent PNG Rida supplied (743 × 336). Only its width is ever
 * set; height follows from the intrinsic ratio, and no filter, tint or crop is
 * applied, so colours and proportions stay as sent.
 */
export function SummitLogo({ className = '', eager = false }: { className?: string; eager?: boolean }) {
  const { t } = useSummit()
  return (
    <img
      src="/media/summit-logo.png"
      alt={t.logoAlt}
      width={743}
      height={336}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`block h-auto max-w-full ${className}`}
    />
  )
}

/** Light-to-deep gold, the gradient on every mockup button. */
export const goldFill =
  'bg-[linear-gradient(180deg,#C99A3A_0%,#A9781F_55%,#87590F_100%)] text-white shadow-[0_10px_26px_rgba(135,89,15,0.32)] hover:brightness-110'

export function RegisterButton({
  className = '',
  size = 'lg',
  children,
}: {
  className?: string
  size?: 'md' | 'lg'
  children?: ReactNode
}) {
  const { t } = useSummit()
  const sizes = {
    md: 'min-h-[48px] px-7 text-[13px]',
    lg: 'min-h-[56px] px-10 text-[15px] md:min-h-[62px] md:px-14 md:text-[17px]',
  }
  return (
    <Link
      to={summitPaths.register}
      className={`inline-flex items-center justify-center gap-3 rounded-[10px] font-ui font-semibold uppercase tracking-[0.08em] transition-[filter] duration-300 ${goldFill} ${sizes[size]} ${className}`}
    >
      {children ?? t.cta}
      <ArrowRight size={size === 'lg' ? 20 : 16} strokeWidth={2} aria-hidden="true" />
    </Link>
  )
}

/** Gold display type with a hint of depth, as the second line of every mockup headline. */
export function Gold({ children }: { children: ReactNode }) {
  return (
    <span className="bg-[linear-gradient(180deg,#D3A547_0%,#B8852A_55%,#94661A_100%)] bg-clip-text text-transparent [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
      {children}
    </span>
  )
}

/** Navy first line, gold second, optional navy third — the headline pattern on every page. */
export function SummitTitle({
  line1,
  line2,
  line3,
  as: Tag = 'h1',
  className = '',
}: {
  line1: string
  line2?: string
  line3?: string
  as?: 'h1' | 'h2'
  className?: string
}) {
  return (
    <Tag
      className={`font-display font-semibold leading-[1.06] tracking-[-0.01em] text-summit-ink ${className}`}
    >
      <span className="block">{line1}</span>
      {line2 && (
        <span className="block">
          <Gold>{line2}</Gold>
        </span>
      )}
      {line3 && <span className="block">{line3}</span>}
    </Tag>
  )
}

/** A short gold rule, as beneath the Home headline. */
export function ShortRule({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`block h-[3px] w-[96px] rounded-full bg-summit-gold ${className}`} />
}

/** Spaced gold caps between two hairlines: "OUR IMPACT AREAS", "THE GATHERING CONCLUDES…". */
export function RuledHeading({
  children,
  as: Tag = 'h2',
  serif = false,
  align = 'center',
}: {
  children: ReactNode
  as?: 'h2' | 'h3' | 'p'
  serif?: boolean
  align?: 'center' | 'left'
}) {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      {align === 'center' && <span aria-hidden="true" className="h-px flex-1 bg-summit-gold/70" />}
      <Tag
        className={`text-center uppercase text-summit-gold-deep ${
          serif
            ? 'font-display text-[15px] font-semibold tracking-[0.18em] md:text-[19px]'
            : 'font-ui text-[15px] font-semibold tracking-[0.2em] md:text-[18px]'
        } ${align === 'left' ? 'text-left' : ''}`}
      >
        {children}
      </Tag>
      <span aria-hidden="true" className="h-px flex-1 bg-summit-gold/70" />
    </div>
  )
}

/** Cream page ground with the mountain horizon from the mockups along the bottom edge. */
export function CreamPage({ children, mountains = true }: { children: ReactNode; mountains?: boolean }) {
  return (
    <div className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#FBF7EE_0%,#F6EEDC_100%)]">
      {mountains && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[180px] md:h-[240px]">
          <img
            src="/media/summit-mountains.webp"
            alt=""
            width={800}
            height={134}
            loading="lazy"
            className="h-full w-full object-cover object-bottom opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6EEDC] via-[#F6EEDC]/40 to-transparent" />
        </div>
      )}
      {children}
    </div>
  )
}

/** Page width for the summit: 1240px of content with the Sol Vé gutters. */
export function Wrap({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 md:px-10 ${className}`}>{children}</div>
}
