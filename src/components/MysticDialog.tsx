import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, X } from 'lucide-react'
import { mystic } from '../data/site'
import { mysticCampaign } from '../data/divisions'

/**
 * The Mystic Moonlight Masquerade nav item opens this rather than navigating —
 * it is a separate campaign brand and uses its own colours throughout
 * (#5B1020 burgundy, #C9A84C gold), never the Sol Vé palette.
 */
export default function MysticDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mystic Moonlight Masquerade Campaign"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-charcoal/70 backdrop-blur-sm"
      />

      <div
        className={`grain relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[2px] bg-mmm-burgundy p-7 ring-1 ring-mmm-gold/50 transition-all duration-500 md:p-12 ${
          open ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-mmm-champagne/70 transition-colors hover:text-mmm-gold"
        >
          <X size={20} />
        </button>

        <div className="relative z-10">
          <span className="grid h-14 w-14 place-items-center rounded-full border border-mmm-gold/60">
            <span className="font-display text-[22px] leading-none text-mmm-gold">M</span>
          </span>

          <p
            className="mt-7 font-ui text-[11px] uppercase text-mmm-champagne"
            style={{ letterSpacing: '0.3em' }}
          >
            {mysticCampaign.presentedBy}
          </p>
          <h2 className="mt-4 font-display text-[27px] leading-[1.2] text-mmm-gold md:text-[34px]">
            {mysticCampaign.title}
          </h2>

          <p className="mt-6 font-body text-[18px] leading-relaxed text-mmm-ivory/90">
            {mysticCampaign.description}
          </p>

          <div className="mt-7 border-y border-mmm-gold/25 py-5">
            <p
              className="font-ui text-[10px] uppercase text-mmm-champagne"
              style={{ letterSpacing: '0.3em' }}
            >
              2026 Campaign Theme
            </p>
            <p className="mt-2 font-display text-[22px] text-mmm-gold">{mysticCampaign.theme}</p>
            <p className="mt-2 font-body text-[17px] text-mmm-ivory/80">
              {mysticCampaign.themeDescription}
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {mysticCampaign.stats.map((stat) => (
              <li
                key={stat}
                className="font-ui text-[11px] uppercase text-mmm-champagne"
                style={{ letterSpacing: '0.22em' }}
              >
                {stat}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={mystic.tickets}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-[2px] bg-mmm-gold px-6 font-ui text-[13px] font-semibold uppercase text-mmm-burgundy transition-opacity hover:opacity-90"
              style={{ letterSpacing: '0.5px' }}
            >
              Get Gala Ball Tickets <ArrowUpRight size={15} />
            </a>
            <a
              href={mystic.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-[2px] border-[1.5px] border-mmm-gold/70 px-6 font-ui text-[13px] font-semibold uppercase text-mmm-gold transition-colors hover:bg-mmm-gold/10"
              style={{ letterSpacing: '0.5px' }}
            >
              Visit MMM Website <ArrowUpRight size={15} />
            </a>
          </div>

          <Link
            to="/mystic"
            onClick={onClose}
            className="mt-5 inline-block font-body text-[16px] text-mmm-champagne underline underline-offset-4 hover:text-mmm-gold"
          >
            See the full campaign on the Sol Vé site
          </Link>
        </div>
      </div>
    </div>
  )
}
