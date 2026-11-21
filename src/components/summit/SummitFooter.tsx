import { Link } from 'react-router-dom'
import { Globe, Mail, MapPin } from 'lucide-react'
import { summitPaths } from '../../data/summit'
import { LanguageSwitch, useSummit } from './SummitLanguage'
import { SummitLogo } from './ui'

export default function SummitFooter() {
  const { t } = useSummit()
  const links = [
    { label: t.nav.home, to: summitPaths.home },
    { label: t.nav.about, to: summitPaths.about },
    { label: t.nav.platform, to: summitPaths.platform },
    { label: t.nav.challenges, to: summitPaths.challenges },
    { label: t.nav.impact, to: summitPaths.impact },
    { label: t.nav.contact, to: summitPaths.contact },
    { label: t.nav.register, to: summitPaths.register },
  ]

  return (
    <footer className="border-t-[3px] border-summit-gold bg-summit-navy pb-24 text-white sm:pb-0">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-10 md:py-16">
        <div>
          <Link to={summitPaths.home} aria-label={`${t.brand} — ${t.nav.home}`} className="inline-block">
            <SummitLogo className="w-[220px]" />
          </Link>
          <p className="mt-6 max-w-xs font-display text-[15px] uppercase leading-relaxed tracking-[0.14em] text-summit-gold-light">
            {t.about.closing}
          </p>
        </div>

        <nav aria-label={t.footer.explore}>
          <h2 className="font-ui text-[12px] font-semibold uppercase tracking-[0.24em] text-summit-gold-light">
            {t.footer.explore}
          </h2>
          <ul className="mt-5 space-y-2.5">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="font-ui text-[15px] text-white/80 transition-colors duration-300 hover:text-summit-gold-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-ui text-[12px] font-semibold uppercase tracking-[0.24em] text-summit-gold-light">
            {t.footer.contact}
          </h2>
          <ul className="mt-5 space-y-3 font-ui text-[15px] text-white/80">
            <li className="flex items-start gap-3">
              <Mail size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-summit-gold-light" />
              <a href={`mailto:${t.contact.email}`} className="break-all transition-colors duration-300 hover:text-summit-gold-light">
                {t.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-summit-gold-light" />
              {t.contact.location}
            </li>
            <li className="flex items-start gap-3">
              <Globe size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-summit-gold-light" />
              <a
                href={t.contact.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-summit-gold-light"
              >
                {t.contact.website}
              </a>
            </li>
          </ul>
          <LanguageSwitch className="mt-7" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-6 font-ui text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
          </p>
          <Link to="/" className="transition-colors duration-300 hover:text-summit-gold-light">
            ← {t.nav.solVe}
          </Link>
        </div>
      </div>
    </footer>
  )
}
