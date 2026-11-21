import { useEffect, useRef, useState, type FocusEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { PILLAR_IDS, summitPaths } from '../../data/summit'
import { LanguageSwitch, useSummit } from './SummitLanguage'
import { RegisterButton, SummitLogo } from './ui'

type Item = { label: string; to: string; children?: { label: string; to: string }[] }

/** The bar from the mockups: Home, About the Summit ▾, The Platform ▾, Impact, Contact. */
function useItems(): Item[] {
  const { t } = useSummit()
  return [
    { label: t.nav.home, to: summitPaths.home },
    {
      label: t.nav.about,
      to: summitPaths.about,
      children: [
        { label: t.nav.about, to: summitPaths.about },
        { label: t.nav.challenges, to: summitPaths.challenges },
      ],
    },
    {
      label: t.nav.platform,
      to: summitPaths.platform,
      children: [
        { label: t.nav.pillars, to: summitPaths.platform },
        ...PILLAR_IDS.map((id, i) => ({
          label: t.platform.pillars[i].title,
          to: `${summitPaths.platform}#${id}`,
        })),
      ],
    },
    { label: t.nav.impact, to: summitPaths.impact },
    { label: t.nav.contact, to: summitPaths.contact },
  ]
}

export default function SummitHeader() {
  const { t } = useSummit()
  const items = useItems()
  const { pathname } = useLocation()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [drawer, setDrawer] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)

  const isActive = (item: Item) =>
    pathname === item.to || (item.children ?? []).some((c) => c.to.split('#')[0] === pathname)

  useEffect(() => {
    setOpenMenu(null)
    setDrawer(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawer])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpenMenu(null)
      setDrawer(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const open = (label: string) => {
    window.clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }
  const close = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160)
  }
  const closeOnBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu(null)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-summit-navy shadow-[0_6px_24px_rgba(6,12,28,0.28)]">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 md:h-[92px] lg:px-10 xl:h-[104px]">
          <Link to={summitPaths.home} aria-label={`${t.brand} — ${t.nav.home}`} className="shrink-0">
            <SummitLogo eager className="w-[132px] md:w-[168px] xl:w-[196px]" />
          </Link>

          <nav aria-label={t.brand} className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {items.map((item) => {
                const active = isActive(item)
                const expanded = openMenu === item.label
                return (
                  <li key={item.label}>
                    <div
                      className="relative"
                      onMouseEnter={item.children ? () => open(item.label) : undefined}
                      onMouseLeave={item.children ? close : undefined}
                      onBlur={item.children ? closeOnBlur : undefined}
                    >
                      <div className="flex items-center">
                        <Link
                          to={item.to}
                          aria-current={pathname === item.to ? 'page' : undefined}
                          className={`relative flex items-center py-3 pl-4 font-ui text-[15px] transition-colors duration-300 ${
                            item.children ? 'pr-1' : 'pr-4'
                          } ${active ? 'font-semibold text-summit-gold-light' : 'text-white hover:text-summit-gold-light'}`}
                        >
                          {item.label}
                          <span
                            aria-hidden="true"
                            className={`absolute bottom-0 left-4 h-[3px] rounded-full bg-summit-gold transition-transform duration-300 ${
                              item.children ? 'right-1' : 'right-4'
                            } ${active ? 'scale-x-100' : 'scale-x-0'}`}
                          />
                        </Link>
                        {item.children && (
                          <button
                            type="button"
                            onClick={() => (expanded ? setOpenMenu(null) : open(item.label))}
                            aria-expanded={expanded}
                            aria-controls={`summit-menu-${item.to}`}
                            aria-label={item.label}
                            className={`grid h-11 w-8 place-items-center transition-colors duration-300 ${
                              active ? 'text-summit-gold-light' : 'text-white hover:text-summit-gold-light'
                            }`}
                          >
                            <ChevronDown
                              size={16}
                              aria-hidden="true"
                              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                            />
                          </button>
                        )}
                      </div>

                      {item.children && (
                        <div
                          id={`summit-menu-${item.to}`}
                          className={`absolute left-2 top-full w-[260px] pt-3 transition-all duration-300 ${
                            expanded
                              ? 'visible translate-y-0 opacity-100'
                              : 'invisible -translate-y-1 opacity-0'
                          }`}
                        >
                          <ul className="overflow-hidden rounded-[10px] border border-summit-gold/40 bg-summit-cream p-2 shadow-[0_20px_48px_rgba(6,12,28,0.28)]">
                            {item.children.map((child) => (
                              <li key={child.to}>
                                <Link
                                  to={child.to}
                                  className="block rounded-[6px] px-4 py-2.5 font-ui text-[15px] text-summit-ink transition-colors duration-200 hover:bg-summit-sand hover:text-summit-gold-deep"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <span aria-hidden="true" className="hidden h-8 w-[2px] bg-summit-gold xl:block" />
            <LanguageSwitch className="hidden md:flex" />
            <RegisterButton
              size="md"
              className="hidden !rounded-[8px] !bg-[linear-gradient(180deg,#F3D995_0%,#E3B95E_55%,#CF9E3F_100%)] !text-summit-navy sm:inline-flex"
            />
            <button
              type="button"
              onClick={() => setDrawer(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={drawer}
              aria-controls="summit-drawer"
              className="grid h-11 w-11 place-items-center rounded-[8px] border border-summit-gold/60 text-white transition-colors duration-300 hover:bg-white/10 xl:hidden"
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Phones and tablets: every page, the language switch and Register, in one panel. */}
      <div
        id="summit-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={t.brand}
        className={`fixed inset-0 z-[70] xl:hidden ${drawer ? 'visible' : 'invisible'}`}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-[#050a17]/60 transition-opacity duration-300 ${
            drawer ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-[400px] flex-col overflow-y-auto bg-summit-navy px-6 pb-10 pt-5 shadow-[-12px_0_40px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
            drawer ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <SummitLogo className="w-[132px]" />
            <button
              type="button"
              onClick={() => setDrawer(false)}
              aria-label={t.nav.closeMenu}
              className="grid h-11 w-11 place-items-center rounded-[8px] border border-summit-gold/60 text-white transition-colors duration-300 hover:bg-white/10"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label={t.brand} className="mt-8">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    aria-current={pathname === item.to ? 'page' : undefined}
                    className={`block py-4 font-display text-[22px] font-semibold transition-colors duration-300 ${
                      isActive(item) ? 'text-summit-gold-light' : 'text-white hover:text-summit-gold-light'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="-mt-1 pb-3">
                      {item.children.slice(1).map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            className="block py-2 pl-4 font-ui text-[15px] text-white/75 transition-colors duration-300 hover:text-summit-gold-light"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitch className="mt-8" />
          <RegisterButton size="md" className="mt-8 w-full" />

          <Link
            to="/"
            className="mt-auto pt-10 font-ui text-[13px] uppercase tracking-[0.16em] text-white/60 transition-colors duration-300 hover:text-summit-gold-light"
          >
            ← {t.nav.solVe}
          </Link>
        </div>
      </div>
    </>
  )
}
