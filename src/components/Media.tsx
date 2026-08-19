import { media, type MediaId, type MediaSlot } from '../data/media'
import { dimensions, sizeOf } from '../data/media-dimensions'
import { Emblem } from './Logo'

/**
 * Human aspect-ratio label for a slot — "3:2", "4:5", or "1600 × 1067 px"
 * when no common ratio fits. Shown on the placeholder so whoever supplies
 * the photograph knows the frame they are filling.
 */
const COMMON_RATIOS: Array<[number, number]> = [
  [1, 1], [5, 4], [4, 3], [3, 2], [8, 5], [16, 9], [2, 1], [21, 9],
  [4, 5], [3, 4], [2, 3], [5, 8], [9, 16],
]

export function ratioLabelOf(id: string, slot?: MediaSlot): string | null {
  if (slot?.ratioHint) return slot.ratioHint
  const size = dimensions[id]
  if (!size) return null
  const value = size[0] / size[1]
  for (const [w, h] of COMMON_RATIOS) {
    if (Math.abs(value - w / h) / (w / h) < 0.015) return `${w}:${h}`
  }
  return `${size[0]} × ${size[1]} px`
}

/**
 * Every photograph, reel and image slot on the site renders through here.
 *
 * Alt text is always present and descriptive (Manual 8.2 / 8.4).
 *
 * CREDIT LINES ARE OFF. Lynea asked for every photographer-credit mention to
 * come off the site until she supplies the names herself. The data is intact —
 * `credit` and `creditPending` in media.ts still record what is known and what
 * is outstanding — only the display is suppressed. Flip SHOW_CREDITS to true
 * when the names arrive and every line returns in place.
 */

/** Set to true once Lynea supplies photographer names. */
const SHOW_CREDITS = false

const tones = {
  dark: 'bg-[radial-gradient(120%_110%_at_25%_0%,#5C4E32_0%,#2C2418_45%,#191509_100%)]',
  warm: 'bg-[radial-gradient(120%_110%_at_75%_10%,#8B765C_0%,#5C4E32_50%,#2A2114_100%)]',
  light: 'bg-[radial-gradient(120%_110%_at_30%_0%,#F2ECE1_0%,#D0C8B1_55%,#ABA297_100%)]',
}

export function Placeholder({
  slot,
  ratio = null,
  className = '',
  subtle = false,
}: {
  slot: MediaSlot
  /** Required aspect ratio of the eventual photograph, e.g. "3:2". */
  ratio?: string | null
  className?: string
  /** Hero use: watermark only, so the headline is never competed with. */
  subtle?: boolean
}) {
  const isLight = slot.tone === 'light'

  if (subtle) {
    return (
      <div
        role="img"
        aria-label={`${slot.label} — photography to be supplied`}
        className={`grain relative h-full w-full overflow-hidden ${tones[slot.tone]} ${className}`}
      >
        <Emblem className="absolute left-1/2 top-1/2 h-[52vh] w-[52vh] -translate-x-1/2 -translate-y-1/2 text-gold/[0.07]" />
        <span
          className="absolute bottom-5 right-5 text-right font-ui text-[9px] uppercase leading-[1.9] text-champagne/30 md:text-[10px]"
          style={{ letterSpacing: '0.26em' }}
        >
          {slot.label}
          {ratio ? ` · ${ratio}` : ''} · Photography to be supplied
          <br />
          Photo: [credit pending]
        </span>
      </div>
    )
  }

  const inkStrong = isLight ? 'text-espresso/75' : 'text-champagne/75'
  const inkSoft = isLight ? 'text-espresso/55' : 'text-champagne/50'

  return (
    <div
      role="img"
      aria-label={`${slot.label} — photography to be supplied`}
      className={`grain relative flex h-full w-full items-center justify-center overflow-hidden ${
        tones[slot.tone]
      } ${className}`}
    >
      {/* Hairline inner frame — the placeholder is a designed state, not a gap. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-2.5 border md:inset-4 ${
          isLight ? 'border-espresso/20' : 'border-gold/25'
        }`}
      />

      <div className="relative z-10 flex flex-col items-center px-8 py-6 text-center">
        <Emblem className={`h-10 w-10 md:h-12 md:w-12 ${isLight ? 'text-espresso/50' : 'text-gold/55'}`} />

        <span
          className={`mt-5 font-ui text-[10px] font-semibold uppercase md:text-[11px] ${inkStrong}`}
          style={{ letterSpacing: '0.3em' }}
        >
          {slot.label}
        </span>

        {ratio && (
          <span
            className={`mt-2 font-ui text-[9px] uppercase md:text-[10px] ${inkSoft}`}
            style={{ letterSpacing: '0.24em' }}
          >
            Aspect {ratio}
          </span>
        )}

        <span
          aria-hidden="true"
          className={`mt-4 h-px w-10 ${isLight ? 'bg-espresso/30' : 'bg-gold/40'}`}
        />

        <span className={`mt-4 font-body text-[14px] italic md:text-[15px] ${inkStrong}`}>
          Photography to be supplied
        </span>

        <span
          className={`mt-2 font-ui text-[9px] uppercase md:text-[10px] ${inkSoft}`}
          style={{ letterSpacing: '0.22em' }}
        >
          Photo: [credit pending]
        </span>
      </div>
    </div>
  )
}

export default function Media({
  id,
  className = '',
  imgClassName = '',
  showCaption = true,
  drift = false,
  subtle = false,
}: {
  id: MediaId
  className?: string
  imgClassName?: string
  showCaption?: boolean
  drift?: boolean
  subtle?: boolean
}) {
  const slot = media[id] as MediaSlot
  const hasAsset = Boolean(slot.src)

  return (
    <figure className={`relative m-0 ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[2px] ring-1 ring-inset ring-gold/25">
        {slot.video ? (
          <video
            src={slot.video}
            autoPlay
            muted
            loop
            playsInline
            aria-label={slot.alt}
            className={`h-full w-full object-cover ${imgClassName}`}
          />
        ) : hasAsset ? (
          <img
            src={slot.src}
            alt={slot.alt}
            {...sizeOf(id)}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-cover ${drift ? 'animate-drift' : ''} ${imgClassName}`}
          />
        ) : (
          <Placeholder slot={slot} ratio={ratioLabelOf(id, slot)} subtle={subtle} />
        )}
      </div>

      {showCaption && (slot.caption || (SHOW_CREDITS && slot.credit)) && (
        <figcaption
          className="mt-3 font-ui text-[10px] uppercase text-walnut md:text-[11px]"
          style={{ letterSpacing: '0.22em' }}
        >
          {slot.caption}
          {slot.caption && SHOW_CREDITS && slot.credit ? ' · ' : ''}
          {SHOW_CREDITS && slot.credit ? `Photography ${slot.credit}` : null}
        </figcaption>
      )}
    </figure>
  )
}
