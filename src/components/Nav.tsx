import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import Logo, { Emblem } from './Logo'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './BrandIcons'
import { GoldRule, Ornament } from './primitives'
import { contact, cta, divisionNav, navigation, socials } from '../data/site'

/**
 * Computed rather than listed — a hard-coded array ran out at VIII the moment a
 * ninth link was added, and the menu quietly printed "9".
 */
const NUMERALS = [
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
] as const

function toRoman(value: number) {
  let remaining = value
  let out = ''
  for (const [amount, numeral] of NUMERALS) {
    while (remaining >= amount) {
      out += numeral
      remaining -= amount
    }
  }
  return out
}

const OVERLAY_LINKS = [
  { label: 'Home', to: '/' },
  ...navigation.map(({ label, to }) => ({ label, to })),
  { label: 'Meet the Founder', to: '/founder' },
  { label: 'Connect', to: '/connect' },
]

const socialIcons = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
} as const

/**
 * Masthead + full-screen menu.
 *
 * One menu button at every width — three refined lines whose middle rule rests
 * short and draws to full length on hover — opening a charcoal room held by a
 * hairline gold frame, with numbered display links that arrive in sequence.
 */
export default function Nav({ onOpenMystic }: { onOpenMystic: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-500 ${
          scrolled ? 'shadow-[0_1px_24px_rgba(36,34,22,0.10)]' : ''
        }`}
      >
        <div className="bg-ivory">
          {/* Logo left, menu right. Everything else lives inside the menu. */}
          <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-5 md:h-[104px] md:px-10 lg:px-14">
            <Link to="/" aria-label="Sol Vé Custom Events — home" className="shrink-0">
              <Logo />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="nav-overlay"
              className="group flex items-center gap-3.5 px-1 py-3 text-charcoal transition-colors duration-300 hover:text-gold md:gap-4"
            >
              <span
                className="hidden font-ui text-[11px] font-semibold uppercase md:inline"
                style={{ letterSpacing: '0.26em' }}
              >
                Menu
              </span>
              <span aria-hidden="true" className="block w-[26px] md:w-[30px]">
                <span className="my-[7px] block h-[1.5px] w-full bg-current" />
                <span className="my-[7px] block h-[1.5px] w-full origin-right scale-x-[0.62] bg-current transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="my-[7px] block h-[1.5px] w-full bg-current" />
              </span>
            </button>
          </div>
          <GoldRule />
        </div>
      </header>

      {/* The menu */}
      <div
        id="nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[70] overflow-y-auto bg-charcoal transition-opacity duration-500 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="grain absolute inset-0 opacity-50" />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-[10px] border border-gold/40 md:inset-[14px]"
        />

        <div className="relative z-10 mx-auto flex min-h-full max-w-[1440px] flex-col px-5 pb-14 md:px-10 lg:px-14">
          <div className="flex items-center justify-between pt-6 md:pt-7">
            <Link to="/" aria-label="Sol Vé Custom Events — home">
              <Logo />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-12 w-12 place-items-center rounded-[2px] border border-gold text-[22px] leading-none text-ivory transition-colors duration-300 hover:bg-ivory/10"
            >
              ×
            </button>
          </div>

          <div className="mt-10 grid flex-1 items-start gap-11 md:mt-16 lg:grid-cols-[3fr_2fr] lg:gap-24">
            <nav aria-label="Primary">
              <ul>
                {OVERLAY_LINKS.map((link, i) => (
                  <li
                    key={link.to}
                    className="flex items-baseline gap-4 md:gap-6"
                    style={{
                      opacity: open ? 1 : 0,
                      transform: open ? 'none' : 'translateY(14px)',
                      transition: 'opacity 700ms ease-out, transform 700ms ease-out',
                      transitionDelay: `${open ? 60 + i * 50 : 0}ms`,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="min-w-[2.1em] font-ui text-[11px] text-gold md:min-w-[2.6em]"
                      style={{ letterSpacing: '0.26em' }}
                    >
                      {toRoman(i + 1)}
                    </span>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `group relative inline-block py-[0.22em] font-display text-[26px] leading-[1.15] transition-colors duration-300 sm:text-[34px] lg:text-[46px] ${
                          isActive ? 'text-gold' : 'text-ivory hover:text-gold'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          <span
                            className={`absolute inset-x-0 bottom-[0.1em] h-px origin-left bg-gold transition-transform duration-500 ease-out ${
                              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <aside
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(14px)',
                transition: 'opacity 700ms ease-out, transform 700ms ease-out',
                transitionDelay: `${open ? 320 : 0}ms`,
              }}
            >
              {/* The two actions that used to sit in the bar */}
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  to="/connect"
                  className="inline-flex min-h-[54px] flex-1 items-center justify-center rounded-[2px] bg-gold px-7 font-ui text-[13px] font-semibold uppercase text-ivory transition-colors duration-300 hover:bg-bronze"
                  style={{ letterSpacing: '0.5px' }}
                >
                  {cta.primary}
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    onOpenMystic()
                  }}
                  className="inline-flex min-h-[54px] flex-1 items-center justify-center gap-3 rounded-[2px] border-[1.5px] border-mmm-gold/70 px-6 font-ui text-[12px] font-semibold uppercase text-mmm-gold transition-colors duration-300 hover:bg-mmm-gold/10"
                  style={{ letterSpacing: '0.5px' }}
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mmm-burgundy">
                    <span className="font-display text-[11px] leading-none text-mmm-gold">M</span>
                  </span>
                  Mystic Moonlight
                </button>
              </div>

              <div className="my-7">
                <Ornament tone="light" />
              </div>

              <p
                className="font-ui text-[11px] uppercase text-stone"
                style={{ letterSpacing: '0.3em' }}
              >
                Six Divisions
              </p>
              <ul className="mt-4 space-y-2.5">
                {divisionNav.map((division) => (
                  <li key={division.to}>
                    <Link
                      to={division.to}
                      className="font-body text-[17px] text-champagne transition-colors duration-300 hover:text-gold md:text-[19px]"
                    >
                      {division.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="my-7">
                <Ornament tone="light" />
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {socials
                  .filter((s) => s.name in socialIcons)
                  .map((social) => {
                    const Icon = socialIcons[social.name as keyof typeof socialIcons]
                    const shared = 'grid h-11 w-11 place-items-center rounded-full border'
                    return social.url ? (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${social.name} — ${social.handleLabel}`}
                        className={`${shared} border-gold/40 text-gold transition-colors duration-300 hover:border-gold hover:text-champagne`}
                      >
                        <Icon size={17} />
                      </a>
                    ) : (
                      <span
                        key={social.name}
                        title={`${social.name} link pending confirmation`}
                        aria-label={`${social.name} link pending confirmation`}
                        className={`${shared} cursor-default border-gold/15 text-gold/30`}
                      >
                        <Icon size={17} />
                      </span>
                    )
                  })}
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 font-body text-[17px] text-champagne hover:text-gold"
                >
                  <Mail size={15} className="text-gold" />
                  {contact.email}
                </a>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-3 font-body text-[17px] text-champagne hover:text-gold"
                >
                  <Phone size={15} className="text-gold" />
                  {contact.phone}
                </a>
              </div>

              <Emblem className="mt-10 hidden h-16 w-16 text-gold/25 lg:block" />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
