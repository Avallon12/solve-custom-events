/**
 * Minimal social glyphs, drawn to match lucide's 24px / 1.75 stroke rhythm.
 * lucide-react dropped its brand icons, so these are ours — no extra library.
 */

type Props = { size?: number; className?: string }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export function LinkedInIcon({ size = 17, className }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10.5v6" />
      <path d="M7.5 7.6v.02" />
      <path d="M11.5 16.5v-6" />
      <path d="M11.5 13a2.5 2.5 0 0 1 5 0v3.5" />
    </svg>
  )
}

export function InstagramIcon({ size = 17, className }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M17.2 6.9v.02" />
    </svg>
  )
}

export function FacebookIcon({ size = 17, className }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M15 8.4h-1.4A1.9 1.9 0 0 0 11.7 10.3V21" />
      <path d="M9.4 13.2h4.4" />
    </svg>
  )
}
