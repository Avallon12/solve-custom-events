import { Globe, Mail, MapPin } from 'lucide-react'
import { usePageMeta } from '../../lib/meta'
import { useSummit } from '../../components/summit/SummitLanguage'
import { CreamPage, RegisterButton, SummitTitle, Wrap } from '../../components/summit/ui'

/** 6. Contact — "Contact Us." */
export default function SummitContact() {
  const { t } = useSummit()
  usePageMeta(t.meta.contact.title, t.meta.contact.description)

  const rows = [
    {
      Icon: Mail,
      content: (
        <>
          <span className="block font-semibold">{t.contact.emailLabel}</span>
          <a
            href={`mailto:${t.contact.email}`}
            className="break-all underline decoration-summit-gold/50 underline-offset-4 transition-colors duration-300 hover:text-summit-gold-deep"
          >
            {t.contact.email}
          </a>
        </>
      ),
    },
    { Icon: MapPin, content: t.contact.location },
    {
      Icon: Globe,
      content: (
        <a
          href={t.contact.websiteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-summit-gold/50 underline-offset-4 transition-colors duration-300 hover:text-summit-gold-deep"
        >
          {t.contact.website}
        </a>
      ),
    },
  ]

  return (
    <CreamPage>
      <Wrap className="grid gap-12 pb-[220px] pt-14 md:pb-[280px] md:pt-20 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:pt-24">
        <div>
          <SummitTitle line1={t.contact.heading} className="text-[44px] sm:text-[56px] lg:text-[66px]" />
          <p className="mt-6 max-w-[460px] text-[18px] leading-[1.55] text-summit-ink md:text-[21px]">
            {t.contact.body}
          </p>
          <div className="mt-10 hidden lg:block">
            <RegisterButton />
          </div>
        </div>

        <ul className="space-y-4 self-start">
          {rows.map(({ Icon, content }, i) => (
            <li
              key={i}
              className="flex items-center gap-5 rounded-[16px] border border-summit-gold/35 bg-white/60 px-5 py-5 text-[17px] text-summit-ink shadow-[0_10px_28px_rgba(14,27,56,0.06)] md:px-7 md:text-[19px]"
            >
              <Icon size={30} strokeWidth={1.4} aria-hidden="true" className="shrink-0 text-summit-gold-deep" />
              <span className="min-w-0">{content}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center lg:hidden">
          <RegisterButton />
        </div>
      </Wrap>
    </CreamPage>
  )
}
