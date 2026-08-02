/**
 * Sol Vé logo — the real mark, supplied by the client, gold on transparent so
 * it sits correctly on both the ivory masthead and the charcoal menu.
 *
 * The <Emblem /> below is a separate sun device used as a watermark inside
 * empty media slots and as a quiet mark in the menu; it is not the logo.
 */

const RAYS = Array.from({ length: 16 }, (_, i) => i)

export function Emblem({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {RAYS.map((i) => {
        const angle = (i * Math.PI * 2) / RAYS.length
        const inner = i % 2 === 0 ? 19 : 20.5
        const outer = i % 2 === 0 ? 26 : 23.5
        return (
          <line
            key={i}
            x1={32 + Math.cos(angle) * inner}
            y1={32 + Math.sin(angle) * inner}
            x2={32 + Math.cos(angle) * outer}
            y2={32 + Math.sin(angle) * outer}
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity={i % 2 === 0 ? 0.95 : 0.5}
          />
        )
      })}
      <circle cx="32" cy="32" r="15.5" stroke="currentColor" strokeWidth="0.9" opacity="0.9" />
      <circle cx="32" cy="32" r="11" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
      <path
        d="M20.5 36.5c3.6 3 7.2 4.5 11.5 4.5s7.9-1.5 11.5-4.5"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  )
}

const heights = {
  sm: 'h-11 md:h-14',
  md: 'h-14 md:h-[68px]',
  lg: 'h-[76px] md:h-[92px]',
}

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <img
      src="/media/logo.webp"
      alt="Sol Vé Custom Events — unique design with visionary artistry"
      className={`${heights[size]} w-auto`}
      width={287}
      height={200}
    />
  )
}
