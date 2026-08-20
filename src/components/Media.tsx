import { media, type MediaId, type MediaSlot } from '../data/media'
import { sizeOf } from '../data/media-dimensions'
import { Emblem } from './Logo'

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
  className = '',
  subtle = false,
}: {
  slot: MediaSlot
  className?: string
  /** Hero use: watermark only, so the headline is never competed with. */
  subtle?: boolean
}) {
  const isLight = slot.tone === 'light'
  // Film slots await footage, photo slots await photography — same design.
  const pendingWord = slot.kind === 'film' ? 'film' : 'photograph'
  const pendingLine = slot.kind === 'film' ? 'Film to be provided' : 'Photograph to be provided'

  if (subtle) {
    return (
      <div
        role="img"
        aria-label={`${slot.label} — ${pendingWord} to be provided`}
        className={`grain relative h-full w-full overflow-hidden ${tones[slot.tone]} ${className}`}
      >
        <Emblem className="absolute left-1/2 top-1/2 h-[52vh] w-[52vh] -translate-x-1/2 -translate-y-1/2 text-gold/[0.07]" />
        <span
          className="absolute bottom-5 right-5 font-ui text-[9px] uppercase text-champagne/25 md:text-[10px]"
          style={{ letterSpacing: '0.3em' }}
        >
          {slot.label} · {pendingWord} pending
        </span>
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`${slot.label} — ${pendingWord} to be provided`}
      className={`grain relative flex h-full w-full items-center justify-center overflow-hidden ${
        tones[slot.tone]
      } ${className}`}
    >
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <Emblem className={`h-12 w-12 ${isLight ? 'text-espresso/50' : 'text-gold/50'}`} />
        <span
          className={`mt-5 font-ui text-[10px] uppercase md:text-[11px] ${
            isLight ? 'text-espresso/70' : 'text-champagne/70'
          }`}
          style={{ letterSpacing: '0.3em' }}
        >
          {slot.label}
        </span>
        <span
          className={`mt-2 font-body text-[13px] italic ${
            isLight ? 'text-espresso/60' : 'text-champagne/50'
          }`}
        >
          {pendingLine}
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
            className={`h-full w-full object-cover object-[50%_30%] ${drift ? 'animate-drift' : ''} ${imgClassName}`}
          />
        ) : (
          <Placeholder slot={slot} subtle={subtle} />
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
