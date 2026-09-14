import { Link } from 'react-router-dom'
import { HeroLink, SmoothScrollHero } from '../components/ui/modern-hero'
import Media from '../components/Media'
import ClosingCTA from '../components/ClosingCTA'
import { Accent, Btn, Container, Eyebrow } from '../components/primitives'
import { home } from '../data/content'
import { cta, divisionNav } from '../data/site'
import { media, type MediaSlot } from '../data/media'
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


/** Proposed descriptor — new copy, to be approved or rewritten by Lynea. */
const DESCRIPTOR =
  'Event design, planning and production for weddings, galas, conferences and international convenings. Calgary, across Canada and worldwide.'

export default function Home() {
  usePageMeta(
    'Sol Vé Custom Events | Event Design & Planning in Calgary',
    'Calgary event design and planning studio for weddings, signature celebrations, workshops, conferences and fundraising galas, across Canada and internationally.',
    { image: (media['home-hero'] as MediaSlot).src },
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
            <HeroLink to="/connect">{cta.primary}</HeroLink>
            <HeroLink to="/divisions" variant="outline">
              {cta.secondary}
            </HeroLink>
          </>
        }
      />

      {/*
        One line saying what the company is, before the film. Added in the
        September 2026 refinement so a first-time visitor can place Sol Vé in
        seconds; the wording is proposed and awaits Lynea's approval.
      */}
      <section aria-label="What Sol Vé does" className="bg-ivory py-[52px] md:py-[76px]">
        <Container width="narrow" className="text-center">
          <Eyebrow>{home.eyebrow}</Eyebrow>
          <p className="mx-auto mt-6 max-w-2xl font-body text-[21px] leading-[1.5] text-espresso md:text-[25px]">
            {DESCRIPTOR}
          </p>
        </Container>
      </section>

      <section aria-label="Feature film" className="relative">
        <Media
          id="home-film"
          showCaption={false}
          className="aspect-video w-full md:aspect-[21/9]"
          imgClassName="h-full w-full"
        />
      </section>

      {/* One photograph from each experience, each a door to its page. */}
      <section aria-label="Signature Experiences" className="bg-ivory py-[60px] md:py-[100px]">
        <div className="mx-auto w-full max-w-content px-5 md:px-10 lg:px-20">
          <Eyebrow className="text-center">Signature Experiences</Eyebrow>
          <div className="mt-10 grid grid-cols-2 gap-5 md:gap-8 lg:grid-cols-3">
            {homeStrip.map((id, i) => (
              <Link key={id} to={divisionNav[i].to} className="group block">
                <div className="overflow-hidden rounded-[2px]">
                  <Media
                    id={id}
                    showCaption={false}
                    className="aspect-square w-full"
                    imgClassName="transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-display text-[19px] text-charcoal transition-colors duration-300 group-hover:text-gold md:text-[22px]">
                  {divisionNav[i].label}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Btn to="/divisions" variant="outline">
              {cta.secondary}
            </Btn>
          </div>
        </div>
      </section>

      <ClosingCTA eyebrow="An invitation" heading={home.closingHeadline} body={home.closingBody} />
    </>
  )
}
