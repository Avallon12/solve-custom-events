import { HeroLink, SmoothScrollHero } from '../components/ui/modern-hero'
import Media from '../components/Media'
import { Accent } from '../components/primitives'
import { home } from '../data/content'
import { homeStrip } from '../data/galleries'
import { usePageMeta } from '../lib/meta'

/**
 * The frames that drift up over the opening hero, at four different speeds.
 * Widths and offsets follow the source component; the photography is the
 * client's own "Home Page" folder — the two portrait frames take the narrow
 * slots, the landscapes the wide ones.
 */
const FRAMES = [
  { id: 'home-002', start: -200, end: 200, className: 'w-2/3 sm:w-1/3' },
  { id: 'home-001', start: 200, end: -250, className: 'mx-auto w-[85%] sm:w-2/3' },
  { id: 'home-003', start: -200, end: 200, className: 'ml-auto w-2/3 sm:w-1/3' },
  { id: 'home-005', start: 0, end: -500, className: 'ml-[12%] w-3/4 sm:w-5/12' },
  { id: 'home-010', start: -200, end: 200, className: 'w-2/3 sm:w-1/3' },
  { id: 'home-007', start: 200, end: -250, className: 'mx-auto w-[85%] sm:w-2/3' },
  { id: 'home-004', start: -200, end: 200, className: 'ml-auto w-2/3 sm:w-1/3' },
  { id: 'home-006', start: 0, end: -500, className: 'ml-[12%] w-3/4 sm:w-5/12' },
  { id: 'home-009', start: -200, end: 200, className: 'w-2/3 sm:w-1/3' },
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
            Designing how you <Accent>gather.</Accent>
          </>
        }
        subheadline={home.subheadline}
        centre="home-hero"
        frames={FRAMES}
        actions={
          <>
            <HeroLink to="/connect">Begin your Journey</HeroLink>
            <HeroLink to="/what-we-create" variant="outline">
              Discover Your Experiences
            </HeroLink>
          </>
        }
      />

      {/*
        The document gives the Home page one block of copy — the eyebrow,
        headline, subheadline and two buttons above. No copy is added below:
        the film band carries the one reel the client chose for the Home page.
      */}
      <section aria-label="Feature film" className="relative">
        <Media
          id="home-film"
          showCaption={false}
          className="aspect-video w-full md:aspect-[21/9]"
          imgClassName="h-full w-full"
        />
      </section>

      {/* Gallery strip — one photograph from each of the client's divisions. */}
      <section aria-label="Photo gallery" className="bg-ivory py-[60px] md:py-[100px]">
        <div className="mx-auto w-full max-w-content px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 gap-5 md:gap-8 lg:grid-cols-3">
            {homeStrip.map((id) => (
              <div key={id} className="overflow-hidden rounded-[2px]">
                <Media id={id} showCaption={false} className="aspect-square w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
