import { ChartColumnIncreasing, Handshake, Target } from 'lucide-react'
import { Reveal } from '../../components/primitives'
import { usePageMeta } from '../../lib/meta'
import { useSummit } from '../../components/summit/SummitLanguage'
import { CreamPage, RegisterButton, SummitTitle, Wrap } from '../../components/summit/ui'

const ICONS = [Handshake, Target, ChartColumnIncreasing]

/** 5. Impact — "From Dialogue to Action." */
export default function SummitImpact() {
  const { t } = useSummit()
  usePageMeta(t.meta.impact.title, t.meta.impact.description)

  return (
    <CreamPage mountains={false}>
      <Wrap className="py-14 md:py-20 lg:py-24">
        <SummitTitle
          line1={t.impact.line1}
          line2={t.impact.line2}
          className="text-[40px] sm:text-[52px] lg:text-[62px]"
        />
        <p className="mt-7 max-w-[680px] text-[17px] leading-[1.6] text-summit-ink md:text-[20px]">
          {t.impact.body}
        </p>
      </Wrap>

      {/* The mountain horizon, with the three outcomes rising out of it. */}
      <div aria-hidden="true" className="relative h-[160px] sm:h-[220px] lg:h-[280px]">
        <img
          src="/media/summit-mountains.webp"
          alt=""
          width={800}
          height={134}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6EEDC] via-transparent to-[#F6EEDC]" />
      </div>

      <Wrap className="-mt-16 pb-20 sm:-mt-20 md:pb-28">
        <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
          {t.impact.outcomes.map((outcome, i) => {
            const Icon = ICONS[i]
            return (
              <li key={i} className="text-center">
                <Reveal delay={i * 120}>
                  <span className="mx-auto grid h-[112px] w-[112px] place-items-center rounded-full border-[3px] border-summit-gold bg-[#FFFBF1] shadow-[0_14px_34px_rgba(14,27,56,0.16)]">
                    <Icon size={50} strokeWidth={1.4} aria-hidden="true" className="text-summit-gold-deep" />
                  </span>
                  <h2 className="mt-6 font-display text-[26px] font-semibold text-summit-ink md:text-[28px]">
                    {outcome.title}
                  </h2>
                  <p className="mx-auto mt-3 max-w-[280px] text-[17px] leading-[1.5] text-summit-ink">{outcome.body}</p>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <div className="mt-14 flex justify-center md:mt-16">
          <RegisterButton />
        </div>
      </Wrap>
    </CreamPage>
  )
}
