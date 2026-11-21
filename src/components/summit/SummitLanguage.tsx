import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Globe } from 'lucide-react'
import { summitCopy, type Lang, type SummitCopy } from '../../data/summit'

/**
 * EN / ES for the summit section. The choice is remembered per browser and can
 * be forced with ?lang=es, so a Spanish preview link can be shared as-is.
 * Prerendered HTML is always English; the stored choice applies on hydration.
 */

const STORAGE_KEY = 'solve-summit-lang'

type Ctx = { lang: Lang; setLang: (lang: Lang) => void; t: SummitCopy }

const SummitLanguageContext = createContext<Ctx>({
  lang: 'en',
  setLang: () => {},
  t: summitCopy.en,
})

const isLang = (value: unknown): value is Lang => value === 'en' || value === 'es'

export function SummitLanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [params] = useSearchParams()
  const forced = params.get('lang')

  useEffect(() => {
    if (isLang(forced)) {
      setLangState(forced)
      return
    }
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (isLang(stored)) setLangState(stored)
    } catch {
      // Storage blocked (private mode): English it is.
    }
  }, [forced])

  useEffect(() => {
    const root = document.documentElement
    const previous = root.lang
    root.lang = lang === 'es' ? 'es' : 'en'
    return () => {
      root.lang = previous
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Not remembered, but still switched for this visit.
    }
  }, [])

  return (
    <SummitLanguageContext.Provider value={{ lang, setLang, t: summitCopy[lang] }}>
      {children}
    </SummitLanguageContext.Provider>
  )
}

export function useSummit() {
  return useContext(SummitLanguageContext)
}

/** Globe, then EN | ES — as on every mockup header. */
export function LanguageSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useSummit()
  return (
    <div role="group" aria-label={t.nav.language} className={`flex items-center gap-2 ${className}`}>
      <Globe size={18} strokeWidth={1.6} aria-hidden="true" className="text-summit-gold-light" />
      {(['en', 'es'] as const).map((code, i) => (
        <span key={code} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true" className="text-white/50">|</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            lang={code}
            aria-label={code === 'en' ? 'English' : 'Español'}
            className={`min-h-[36px] px-0.5 font-ui text-[14px] font-medium transition-colors duration-300 ${
              lang === code ? 'text-summit-gold-light' : 'text-white/80 hover:text-white'
            }`}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
