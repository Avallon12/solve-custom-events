import { CalendarDays, MapPin } from 'lucide-react'
import { usePageMeta } from '../../lib/meta'
import { useSummit } from '../../components/summit/SummitLanguage'
import { RegisterButton, ShortRule, SummitLogo, SummitTitle, Wrap } from '../../components/summit/ui'

/** 1. Homepage — "The Right People. The Right Conversations. Working Toward Shared Solutions." */
export default function SummitHome() {
  const { t } = useSummit()
  usePageMeta(t.meta.home.title, t.meta.home.description, { image: '/media/summit-convening.webp' })

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#E7EDF1_0%,#F6F0E2_46%,#F8F2E4_100%)]">
      {/* Warm late-afternoon light from the right, as in the mockup sky. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_10%,rgba(246,205,140,0.55),transparent_55%)]"
      />

      <Wrap className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12 lg:py-24">
        <div>
          <SummitTitle
            line1={t.home.line1}
            line2={t.home.line2}
            line3={t.home.line3}
            className="text-[38px] sm:text-[48px] lg:text-[46px] xl:text-[56px]"
          />
          <ShortRule className="mt-7" />
          <p className="mt-6 max-w-[600px] text-[17px] leading-[1.6] text-summit-ink md:text-[20px]">
            {t.home.body}
          </p>

          {/* The gold ribbon: date and place. */}
          <div className="mt-9 inline-flex max-w-full flex-col gap-2 bg-[linear-gradient(90deg,#E7C982_0%,#F3DEA6_60%,#EBCF8D_100%)] py-4 pl-6 pr-12 text-summit-ink [clip-path:polygon(0_0,100%_0,calc(100%-28px)_100%,0_100%)] sm:pl-8 sm:pr-16">
            <span className="flex items-center gap-3 font-ui text-[17px] font-bold uppercase italic tracking-[0.02em] md:text-[21px]">
              <CalendarDays size={22} strokeWidth={1.7} aria-hidden="true" className="shrink-0" />
              {t.home.status}
            </span>
            <span className="flex items-center gap-3 font-ui text-[16px] font-semibold md:text-[19px]">
              <MapPin size={22} strokeWidth={1.7} aria-hidden="true" className="shrink-0" />
              {t.home.location}
            </span>
          </div>

          <div className="mt-9">
            <RegisterButton />
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <SummitLogo eager className="hidden w-[min(400px,80%)] lg:block" />
          <figure className="w-full overflow-hidden rounded-[18px] border border-summit-gold/40 shadow-[0_28px_60px_rgba(14,27,56,0.22)]">
            <img
              src="/media/summit-convening.webp"
              alt={t.home.imageAlt}
              width={846}
              height={491}
              fetchPriority="high"
              className="aspect-[846/491] h-auto w-full object-cover"
            />
          </figure>
        </div>
      </Wrap>
    </section>
  )
}
