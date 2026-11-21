import { CalendarDays, MapPin } from 'lucide-react'
import { usePageMeta } from '../../lib/meta'
import { useSummit } from '../../components/summit/SummitLanguage'
import { RegisterButton, ShortRule, SummitLogo, SummitTitle } from '../../components/summit/ui'

/**
 * 1. Homepage — "The Right People. The Right Conversations. Working Toward Shared Solutions."
 *
 * Laid out as Rida's hero mockup: the terrace photograph fills the section, copy on the
 * left over the sky, the logo on the right. From lg up the photo shows whole at its 3:2
 * ratio and every size and offset is in vw, so the copy stays on the same spot of the
 * photo at any width.
 */
export default function SummitHome() {
  const { t } = useSummit()
  usePageMeta(t.meta.home.title, t.meta.home.description, { image: '/media/summit-hero.webp' })

  return (
    <section className="relative isolate overflow-hidden bg-summit-cream lg:aspect-[3/2]">
      <img
        src="/media/summit-hero.webp"
        alt={t.home.imageAlt}
        width={1536}
        height={1024}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
      {/* Phones and tablets: the copy runs over more of the scene, so lift the sky behind it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F8F2E4]/90 via-[#F8F2E4]/65 to-transparent lg:hidden"
      />

      <div className="px-5 pb-[72vw] pt-12 md:px-10 lg:absolute lg:left-[7.7vw] lg:top-[5.6vw] lg:p-0">
        <SummitTitle
          line1={t.home.line1}
          line2={t.home.line2}
          line3={t.home.line3}
          className="text-[38px] font-bold tracking-[-0.03em] sm:text-[48px] lg:whitespace-nowrap lg:text-[4.8vw] lg:leading-[1.19] [&>span:last-child]:text-[0.78em]"
        />
        <ShortRule className="mt-6 lg:mt-[1.4vw] lg:h-[0.27vw] lg:w-[7.4vw]" />
        <p className="mt-6 max-w-[600px] text-[17px] font-medium leading-[1.5] text-summit-ink md:text-[20px] lg:mt-[2vw] lg:max-w-[50vw] lg:text-[1.6vw] lg:leading-[1.34]">
          {t.home.body}
        </p>

        {/* The gold ribbon: date and place. */}
        <div className="mt-8 inline-flex max-w-full flex-col gap-2 bg-[linear-gradient(90deg,#E7C982_0%,#F3DEA6_60%,#EBCF8D_100%)] py-4 pl-10 pr-12 text-summit-ink [clip-path:polygon(28px_0,100%_0,calc(100%-28px)_100%,0_100%)] sm:pr-16 lg:-ml-[1.6vw] lg:mt-[1.8vw] lg:gap-[0.3vw] lg:py-[0.8vw] lg:pl-[3.6vw] lg:pr-[5vw] lg:[clip-path:polygon(2.2vw_0,100%_0,calc(100%-2.2vw)_100%,0_100%)]">
          <span className="flex items-center gap-3 font-ui text-[17px] font-bold uppercase tracking-[0.02em] md:text-[21px] lg:gap-[1.4vw] lg:text-[1.9vw]">
            <CalendarDays strokeWidth={1.7} aria-hidden="true" className="h-[22px] w-[22px] shrink-0 lg:h-[2.1vw] lg:w-[2.1vw]" />
            {t.home.status}
          </span>
          <span className="flex items-center gap-3 font-ui text-[16px] font-semibold md:text-[19px] lg:gap-[1.4vw] lg:text-[1.6vw]">
            <MapPin strokeWidth={1.7} aria-hidden="true" className="h-[22px] w-[22px] shrink-0 lg:h-[2.1vw] lg:w-[2.1vw]" />
            {t.home.location}
          </span>
        </div>

        <div className="mt-7 lg:mt-[1.2vw]">
          <RegisterButton className="whitespace-nowrap !rounded-[18px] lg:!min-h-[4.2vw] lg:!px-[3.7vw] lg:!text-[1.5vw]" />
        </div>
      </div>

      <SummitLogo eager className="absolute right-[6.5vw] top-[7.3vw] hidden w-[30vw] lg:block" />
    </section>
  )
}
