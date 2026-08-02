import type { ReactNode } from 'react'
import Media from './Media'
import { Container, Eyebrow } from './primitives'
import type { MediaId } from '../data/media'

/**
 * Hero.
 *
 * `size="full"` follows the reference format exactly: full viewport, cinematic
 * background that fills the frame, content bottom-aligned and centred, and a
 * blurred CTA bar carrying one line of copy beside a single solid button. The
 * section pulls the next one up by 25px so the rounded ivory edge laps over it.
 *
 * `size="page"` is the quieter inner-page variant: same media treatment, copy
 * left-aligned and editorial.
 *
 * The overlay is warm charcoal rather than black — Manual 6 is explicit that a
 * cold black overlay kills the warmth, and readability over photography was one
 * of the flagged problems.
 */
export default function Hero({
  eyebrow,
  headline,
  subheadline,
  media,
  actions,
  bar,
  size = 'full',
}: {
  eyebrow: string
  headline: ReactNode
  subheadline?: string
  media: MediaId
  actions?: ReactNode
  /** The line of copy inside the blurred bar, beside the button. */
  bar?: string
  size?: 'full' | 'page'
}) {
  const full = size === 'full'

  return (
    <section
      className={`relative isolate flex overflow-hidden ${
        full
          ? 'mb-[-25px] h-[100svh] items-end pb-12 pt-[110px] md:pb-16'
          : 'min-h-[68svh] items-end pb-12 pt-[130px] md:pb-16'
      }`}
    >
      <div className="absolute inset-0 -z-10">
        <Media
          id={media}
          showCaption={false}
          drift
          subtle
          className="h-full w-full"
          imgClassName="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-charcoal/[0.58]" />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3"
        style={{ background: 'linear-gradient(to top, rgba(36,34,22,0.9), rgba(36,34,22,0))' }}
      />

      <Container className="relative">
        <div className={full ? 'flex flex-col items-center text-center' : 'max-w-[860px]'}>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>

          <h1
            className={`mt-6 font-display font-normal text-ivory ${
              full
                ? 'text-[42px] leading-[1.05] sm:text-[64px] md:text-[80px] lg:text-[94px]'
                : 'text-[34px] leading-[1.1] sm:text-[46px] md:text-[58px]'
            }`}
          >
            {headline}
          </h1>

          {subheadline && (
            <p
              className={`mt-7 font-body leading-[1.55] text-champagne ${
                full
                  ? 'max-w-[520px] text-[19px] md:text-[21px]'
                  : 'max-w-[620px] text-[19px] md:text-[22px]'
              }`}
            >
              {subheadline}
            </p>
          )}

          {full ? (
            (bar || actions) && (
              <div className="mt-10 flex w-full max-w-[720px] flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-0 sm:rounded-[2px] sm:border sm:border-gold/30 sm:bg-charcoal/35 sm:py-1.5 sm:pl-7 sm:pr-1.5">
                {bar && (
                  <p className="hidden font-body text-[17px] italic text-champagne lg:block lg:pr-7">
                    {bar}
                  </p>
                )}
                {actions}
              </div>
            )
          ) : (
            (actions || bar) && (
              <div className="mt-10 flex flex-col items-start gap-5 md:flex-row md:items-center">
                {bar && (
                  <p className="hidden max-w-[380px] border-l border-gold/50 pl-5 font-body text-[17px] italic leading-snug text-champagne/90 lg:block">
                    {bar}
                  </p>
                )}
                {actions && <div className="flex flex-wrap items-center gap-4">{actions}</div>}
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  )
}
