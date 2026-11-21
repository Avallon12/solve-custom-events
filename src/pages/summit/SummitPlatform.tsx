import { BookOpen, Flower2, Sprout, Users } from 'lucide-react'
import { Reveal } from '../../components/primitives'
import { usePageMeta } from '../../lib/meta'
import { PILLAR_IDS } from '../../data/summit'
import { useSummit } from '../../components/summit/SummitLanguage'
import { CreamPage, RegisterButton, SummitTitle, Wrap } from '../../components/summit/ui'

/** Each pillar's mark and colour, as on The Platform mockup: gold, navy, plum, green. */
const MARKS = [
  { Icon: BookOpen, disc: 'bg-[radial-gradient(circle_at_35%_30%,#E2B65A,#A9781F)]', text: 'text-summit-gold-deep' },
  { Icon: Sprout, disc: 'bg-[radial-gradient(circle_at_35%_30%,#34558F,#132A52)]', text: 'text-summit-equip' },
  { Icon: Users, disc: 'bg-[radial-gradient(circle_at_35%_30%,#8F3D77,#541B44)]', text: 'text-summit-unite' },
  { Icon: Flower2, disc: 'bg-[radial-gradient(circle_at_35%_30%,#6E9C55,#3A6029)]', text: 'text-summit-restore' },
]

/** 3. The Platform — "Four Pillars. A Shared Purpose." */
export default function SummitPlatform() {
  const { t } = useSummit()
  usePageMeta(t.meta.platform.title, t.meta.platform.description)

  return (
    <CreamPage>
      <Wrap className="py-14 md:py-20 lg:py-24">
        <SummitTitle
          line1={t.platform.line1}
          line2={t.platform.line2}
          className="text-[40px] sm:text-[52px] lg:text-[62px]"
        />
        <p className="mt-7 max-w-[760px] text-[17px] leading-[1.6] text-summit-ink md:text-[20px]">
          {t.platform.body}
        </p>
      </Wrap>

      <Wrap className="pb-[200px] md:pb-[260px]">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.platform.pillars.map((pillar, i) => {
            const { Icon, disc, text } = MARKS[i]
            return (
              <li key={PILLAR_IDS[i]} id={PILLAR_IDS[i]} className="scroll-mt-32">
                <Reveal
                  delay={i * 100}
                  className="h-full rounded-[16px] border border-summit-gold/35 bg-white/60 px-6 pb-9 pt-8 text-center shadow-[0_14px_36px_rgba(14,27,56,0.07)] backdrop-blur-sm"
                >
                  <span
                    className={`mx-auto grid h-[92px] w-[92px] place-items-center rounded-full border-[3px] border-summit-gold-light shadow-[0_8px_20px_rgba(14,27,56,0.2)] ${disc}`}
                  >
                    <Icon size={40} strokeWidth={1.5} aria-hidden="true" className="text-[#F8E7BC]" />
                  </span>
                  <h2 className={`mt-6 font-ui text-[22px] font-bold uppercase tracking-[0.06em] ${text}`}>
                    {pillar.title}
                  </h2>
                  <p className="mx-auto mt-3 max-w-[240px] text-[16px] leading-[1.55] text-summit-ink">{pillar.body}</p>
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
