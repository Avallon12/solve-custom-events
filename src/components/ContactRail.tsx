import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { cta } from '../data/site'

/**
 * "A highly visible and easy contact button on each page."
 *
 * Appears on every page except /connect itself, once the visitor has scrolled
 * past the hero. Sits above the fold on mobile too, where it becomes a full
 * width bar so it can never be missed.
 */
export default function ContactRail() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (pathname === '/connect') return null

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-500 md:inset-x-auto md:bottom-8 md:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Link
        to="/connect"
        className="flex min-h-[54px] items-center justify-center gap-3 rounded-[2px] bg-charcoal px-7 font-ui text-[13px] font-semibold uppercase text-ivory shadow-[0_10px_40px_rgba(36,34,22,0.35)] ring-1 ring-gold/60 transition-colors duration-300 hover:bg-espresso"
        style={{ letterSpacing: '0.5px' }}
      >
        <Mail size={16} className="text-gold" />
        {cta.primary}
      </Link>
    </div>
  )
}
