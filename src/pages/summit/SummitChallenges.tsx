import { Flower2, Scale, Shield, Users } from 'lucide-react'
import { Reveal } from '../../components/primitives'
import { usePageMeta } from '../../lib/meta'
import { useSummit } from '../../components/summit/SummitLanguage'
import { CreamPage, RegisterButton, RuledHeading, SummitTitle, Wrap } from '../../components/summit/ui'

const ICONS = [Shield, Users, Scale, Flower2]

/** 4. Global Challenges — "Global Challenges. Shared Responsibility." */
export default function SummitChallenges() {
  const { t } = useSummit()
  usePageMeta(t.meta.challenges.title, t.meta.challenges.description, { image: '/media/summit-earth.webp' })

  return (
    <CreamPage>
      {/* The lit Americas in the top-right corner, fading into the page. */}
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 -z-0 hidden h-[340px] w-[46%] md:block">
        <img
          src="/media/summit-earth.webp"
          alt=""
          width={426}
          height={270}
          className="h-full w-full object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#FBF7EE_0%,rgba(251,247,238,0.35)_30%,transparent_60%),linear-gradient(0deg,#FBF7EE_0%,transparent_45%)]" />
      </div>

      <Wrap className="relative py-14 md:py-20">
        <div className="md:max-w-[60%]">
          <SummitTitle
            line1={t.challenges.line1}
            line2={t.challenges.line2}
            className="text-[38px] sm:text-[50px] lg:text-[60px]"
          />
          <p className="mt-6 max-w-[480px] text-[19px] leading-[1.45] text-summit-ink md:text-[23px]">
            {t.challenges.body}
          </p>
        </div>

        <img
          src="/media/summit-earth.webp"
          alt={t.challenges.imageAlt}
          width={426}
          height={270}
          className="mt-8 h-auto w-full rounded-[14px] md:hidden"
        />

        <Reveal className="mt-10 rounded-[22px] border border-white/80 bg-white/55 px-6 py-9 shadow-[0_18px_48px_rgba(14,27,56,0.08)] backdrop-blur-md md:mt-14 md:px-10">
          <dl className="grid gap-9 text-center md:grid-cols-3 md:gap-0">
            {t.challenges.stats.map((stat, i) => (
              <div key={i} className={`flex flex-col-reverse justify-end md:px-6 ${i > 0 ? 'md:border-l md:border-summit-gold/60' : ''}`}>
                <dd className="mx-auto mt-3 max-w-[260px] text-[18px] leading-[1.35] text-summit-ink md:text-[20px]">
                  {stat.label}
                </dd>
                <dt className="font-display text-[46px] font-semibold leading-none [font-variant-numeric:lining-nums] [text-wrap:balance] text-summit-gold-deep md:text-[56px]">
                  {stat.value}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-center text-[14px] text-summit-ink/80">{t.challenges.source}</p>
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <RuledHeading>{t.challenges.areasHeading}</RuledHeading>
        </Reveal>
      </Wrap>

      <Wrap className="pb-[200px] md:pb-[260px]">
        <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {t.challenges.areas.map((area, i) => {
            const Icon = ICONS[i]
            return (
              <li key={i} className={`text-center lg:px-6 ${i > 0 ? 'lg:border-l lg:border-summit-gold/60' : ''}`}>
                <Reveal delay={i * 100}>
                  <Icon size={52} strokeWidth={1.3} aria-hidden="true" className="mx-auto text-summit-gold-deep" />
                  <h3 className="mt-4 font-display text-[26px] font-semibold text-summit-ink">{area.title}</h3>
                  <p className="mx-auto mt-3 max-w-[260px] text-[16px] leading-[1.5] text-summit-ink md:text-[17px]">
                    {area.body}
                  </p>
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
