import { HeroLink, SmoothScrollHero } from '../components/ui/modern-hero'
import { Accent } from '../components/primitives'
import { home } from '../data/content'
import { usePageMeta } from '../lib/meta'

/**
 * The frames that drift up over the opening hero, at four different speeds.
 * Widths and offsets follow the source component; the photography is Sol Vé's.
 */
const FRAMES = [
  { id: 'portfolio-florals', start: -200, end: 200, className: 'w-2/3 sm:w-1/3' },
  { id: 'division-design-stylization', start: 200, end: -250, className: 'mx-auto w-[85%] sm:w-2/3' },
  { id: 'portfolio-claudia-ali', start: -200, end: 200, className: 'ml-auto w-2/3 sm:w-1/3' },
  { id: 'division-signature-moments', start: 0, end: -500, className: 'ml-[12%] w-3/4 sm:w-5/12' },
] as const


export default function Home() {
  usePageMeta(
    'Sol Vé Custom Events | Event Design & Production in Calgary',
    'Sol Vé creates thoughtfully designed weddings, signature celebrations, workshops, conferences and fundraising experiences in Calgary, throughout Canada and internationally.',
  )

  return (
    <>
      <SmoothScrollHero
        eyebrow={home.eyebrow}
        headline={
          <>
            We design how people <Accent>gather.</Accent>
          </>
        }
        subheadline={home.subheadline}
        centre="home-hero"
        frames={FRAMES}
        actions={
          <>
            <HeroLink to="/connect">Begin your Journey</HeroLink>
            <HeroLink to="/what-we-create" variant="outline">
              Discover Experiences
            </HeroLink>
          </>
        }
      />

      {/*
        The document gives the Home page one block of copy — the eyebrow,
        headline, subheadline and two buttons above. Nothing else belongs here.
      */}
    </>
  )
}
