import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Media from '../components/Media'
import { Container, Reveal } from '../components/primitives'
import { mystic } from '../data/site'
import { mysticCampaign } from '../data/divisions'
import { usePageMeta } from '../lib/meta'

/**
 * Mystic Moonlight Masquerade — its own brand inside the Sol Vé site.
 * Uses MMM colours only (#5B1020, #C9A84C, #E4D18A, #F8F5EF), never Sol Vé's.
 * Every fact here is taken from the campaign's own site and Eventbrite listing.
 */
export default function Mystic() {
  usePageMeta(
    'Mystic Moonlight Masquerade Gala Ball 2026 — Calgary Charity Event',
    'The Mystic Moonlight Masquerade Ball and Gala Fundraising Campaign 2026, produced by Sol Vé Custom Events. 10 charities. 100% of net proceeds. October 23, 2026, Fairmont Palliser.',
  )

  return (
    <div className="bg-mmm-burgundy">
      <section className="grain relative flex min-h-[76svh] items-end overflow-hidden pb-14 pt-[140px]">
        <div className="absolute inset-0 -z-10">
          <Media id="mystic-hero" showCaption={false} drift subtle className="h-full w-full" />
        </div>
        <div className="absolute inset-0 -z-10 bg-mmm-burgundy/80" />

        <Container className="relative">
          <p
            className="font-ui text-[11px] uppercase text-mmm-champagne"
            style={{ letterSpacing: '0.3em' }}
          >
            {mysticCampaign.presentedBy}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[40px] leading-[1.06] text-mmm-gold sm:text-[56px] md:text-[70px]">
            Stand With Humanity
          </h1>
          <p className="mt-6 max-w-xl font-body text-[20px] text-mmm-ivory/90 md:text-[23px]">
            Support with the arts and costume for the cause.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={mystic.tickets}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-[2px] bg-mmm-gold px-7 font-ui text-[13px] font-semibold uppercase text-mmm-burgundy transition-opacity hover:opacity-90"
              style={{ letterSpacing: '0.5px' }}
            >
              Get Gala Ball Tickets <ArrowUpRight size={15} />
            </a>
            <a
              href={mystic.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-[2px] border-[1.5px] border-mmm-gold/70 px-7 font-ui text-[13px] font-semibold uppercase text-mmm-gold transition-colors hover:bg-mmm-gold/10"
              style={{ letterSpacing: '0.5px' }}
            >
              Visit MMM Website <ArrowUpRight size={15} />
            </a>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <div className="border-y border-mmm-gold/30">
        <Container>
          <ul className="grid divide-y divide-mmm-gold/20 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {mysticCampaign.stats.map((stat) => (
              <li
                key={stat}
                className="py-7 text-center font-ui text-[12px] uppercase text-mmm-champagne lg:border-l lg:border-mmm-gold/20 lg:first:border-l-0"
                style={{ letterSpacing: '0.26em' }}
              >
                {stat}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <section className="grain relative py-[64px] md:py-[110px]">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[55fr_45fr] lg:gap-20">
            <Reveal>
              <h2 className="max-w-2xl font-display text-[28px] leading-tight text-mmm-gold md:text-[40px]">
                {mysticCampaign.title}
              </h2>
              <p className="mt-8 font-body text-[19px] leading-[1.7] text-mmm-ivory/90 md:text-[21px]">
                {mysticCampaign.description}
              </p>
              <div className="mt-7 space-y-6 font-body text-[18px] leading-[1.75] text-mmm-ivory/80">
                {mysticCampaign.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={110} className="space-y-10">
              <div className="rounded-[2px] border border-mmm-gold/40 p-7 md:p-9">
                <p
                  className="font-ui text-[10px] uppercase text-mmm-champagne"
                  style={{ letterSpacing: '0.3em' }}
                >
                  2026 Campaign Theme
                </p>
                <p className="mt-4 font-display text-[26px] text-mmm-gold md:text-[30px]">
                  {mysticCampaign.theme}
                </p>
                <p className="mt-4 font-body text-[18px] leading-relaxed text-mmm-ivory/85">
                  {mysticCampaign.themeDescription}
                </p>
              </div>

              <div>
                <p
                  className="font-ui text-[10px] uppercase text-mmm-champagne"
                  style={{ letterSpacing: '0.3em' }}
                >
                  Campaign events
                </p>
                <ul className="mt-5 divide-y divide-mmm-gold/20 border-y border-mmm-gold/20">
                  {mysticCampaign.events.map((event) => (
                    <li
                      key={event}
                      className="py-4 font-body text-[18px] leading-snug text-mmm-ivory/90"
                    >
                      {event}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p
                  className="font-ui text-[10px] uppercase text-mmm-champagne"
                  style={{ letterSpacing: '0.3em' }}
                >
                  Beneficiaries
                </p>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {mysticCampaign.beneficiaries.map((name) => (
                    <li
                      key={name}
                      className="rounded-[2px] border border-mmm-gold/40 px-4 py-2 font-body text-[17px] text-mmm-ivory/90"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-body text-[16px] italic text-mmm-champagne/70">
                  Plus additional organizations to be confirmed.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-col gap-5 border-t border-mmm-gold/30 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${mystic.email}`}
              className="font-body text-[18px] text-mmm-ivory/90 underline underline-offset-4 hover:text-mmm-gold"
            >
              {mystic.email}
            </a>
            <Link
              to="/what-we-create/fundraising"
              className="font-ui text-[11px] uppercase text-mmm-champagne underline underline-offset-4 hover:text-mmm-gold"
              style={{ letterSpacing: '0.22em' }}
            >
              Back to Fundraising Campaign Events
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
