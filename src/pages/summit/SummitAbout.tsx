import { Globe, Sprout, Users } from 'lucide-react'
import { Reveal } from '../../components/primitives'
import { usePageMeta } from '../../lib/meta'
import { useSummit } from '../../components/summit/SummitLanguage'
import { CreamPage, RegisterButton, RuledHeading, SummitTitle, Wrap } from '../../components/summit/ui'

const ICONS = [Globe, Users, Sprout]

/** 2. About the Summit — "Built to Convene. Designed to Endure." */
export default function SummitAbout() {
  const { t } = useSummit()
  usePageMeta(t.meta.about.title, t.meta.about.description, { image: '/media/summit-flags.webp' })

  return (
    <CreamPage>
      <section className="relative">
        {/* The flag-lined headquarters, fading into the cream as on the mockup. */}
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[48%]">
          <img
            src="/media/summit-flags.webp"
            alt={t.about.imageAlt}
            width={636}
            height={423}
            fetchPriority="high"
            className="h-[240px] w-full object-cover sm:h-[320px] lg:h-full"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#FBF7EE] via-transparent to-transparent lg:bg-[linear-gradient(90deg,#FBF7EE_0%,rgba(251,247,238,0.1)_35%,transparent_60%),linear-gradient(0deg,#FBF7EE_0%,transparent_30%)]" />
        </div>

        <Wrap className="relative py-12 md:py-16 lg:py-24">
          <div className="lg:max-w-[52%]">
            <SummitTitle
              line1={t.about.line1}
              line2={t.about.line2}
              className="text-[40px] sm:text-[52px] lg:text-[62px]"
            />
            <p className="mt-7 max-w-[620px] text-[17px] leading-[1.6] text-summit-ink md:text-[20px]">
              {t.about.body}
            </p>
          </div>
        </Wrap>
      </section>

      <Wrap className="pb-[200px] md:pb-[260px]">
        <ul className="grid gap-12 md:grid-cols-3 md:gap-0">
          {t.about.pillars.map((pillar, i) => {
            const Icon = ICONS[i]
            return (
              <li
                key={i}
                className={`px-2 text-center md:px-8 ${i > 0 ? 'md:border-l md:border-summit-gold/60' : ''}`}
              >
                <Reveal delay={i * 120}>
                  <Icon size={64} strokeWidth={1.3} aria-hidden="true" className="mx-auto text-summit-gold-deep" />
                  <h2 className="mt-5 font-display text-[26px] font-semibold leading-[1.15] text-summit-ink md:text-[28px]">
                    {pillar.title}
                  </h2>
                  <p className="mx-auto mt-4 max-w-[300px] text-[17px] leading-[1.55] text-summit-ink md:text-[18px]">
                    {pillar.body}
                  </p>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <Reveal className="mt-16 md:mt-20">
          <RuledHeading as="p" serif>
            {t.about.closing}
          </RuledHeading>
          <div className="mt-10 flex justify-center">
            <RegisterButton />
          </div>
        </Reveal>
      </Wrap>
    </CreamPage>
  )
}
