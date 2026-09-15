import { Link, Navigate, useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import Media from '../components/Media'
import { Btn, Container, Display, Eyebrow, Ornament, Reveal, Section } from '../components/primitives'
import { caseStudies, caseStudyBySlug, type StoryPart } from '../data/case-studies'
import { media, type MediaSlot } from '../data/media'
import { cta } from '../data/site'
import { usePageMeta } from '../lib/meta'

const para = 'font-body text-[19px] leading-[1.7] text-espresso md:text-[21px]'

function Part({ part }: { part: StoryPart }) {
  if ('quote' in part) {
    return part.big ? (
      <blockquote className="my-10 border-l-2 border-gold pl-6 md:my-14 md:pl-10">
        <p className="font-display text-[30px] italic leading-[1.2] text-charcoal md:text-[46px]">
          “{part.quote}”
        </p>
      </blockquote>
    ) : (
      <p className="font-display text-[22px] italic text-charcoal md:text-[26px]">“{part.quote}”</p>
    )
  }
  return <p className={`${para} ${part.strong ? 'font-semibold text-charcoal' : ''}`}>{part.p}</p>
}

function Picture({ id, className = 'aspect-[3/2] w-full' }: { id: MediaId; className?: string }) {
  return (
    <Reveal className="my-12 md:my-16">
      <Media id={id} showCaption={false} className={className} />
    </Reveal>
  )
}
type MediaId = keyof typeof media

/**
 * One case study, in the document's order: the challenge, the approach, the
 * stories, the outcome, what the work demonstrates, and the close. Photographs
 * follow the document's sequence between the sections.
 */
export default function CaseStudy() {
  const { slug = '' } = useParams()
  const study = caseStudyBySlug(slug)
  usePageMeta(
    study ? `${study.title} | Sol Vé Custom Events` : 'Case Studies | Sol Vé Custom Events',
    study ? `${study.subtitle}. ${study.intro[0]} ${study.intro[1]}` : 'Case studies from Sol Vé Custom Events.',
    study ? { image: (media[study.hero] as MediaSlot).src, type: 'article' } : { robots: 'noindex, nofollow' },
  )
  if (!study) return <Navigate to="/portfolio" replace />
  const [img1, img2, img3, img4, img5, img6, img7, img8] = study.images
  const others = caseStudies.filter((c) => c.slug !== study.slug)

  return (
    <>
      <Hero size="page" eyebrow={`Case Study ${study.number}`} headline={study.title} subheadline={study.subtitle} media={study.hero} />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <p className="font-ui text-[11px] uppercase text-walnut" style={{ letterSpacing: '0.22em' }}>
              {study.tags.join(' · ')}
            </p>
            <div className="mt-10 space-y-6">
              {study.intro.map((p) => (
                <p key={p.slice(0, 40)} className={para}>{p}</p>
              ))}
              <p className="font-display text-[24px] leading-snug text-charcoal md:text-[30px]">{study.introEmphasis}</p>
            </div>
          </Reveal>
          <Picture id={img1} />

          <Reveal>
            <Display as="h2" size="md" className="text-charcoal">The Challenge</Display>
            <div className="mt-7 space-y-5">
              {study.challenge.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className={para}>{p}</p>
              ))}
              <p className="font-display text-[26px] text-charcoal md:text-[32px]">{study.challenge.emphasis}</p>
            </div>
          </Reveal>
          <div className="my-12 grid grid-cols-2 gap-5 md:my-16 md:gap-8">
            <Reveal><Media id={img2} showCaption={false} className="aspect-[4/5] w-full" /></Reveal>
            <Reveal delay={90}><Media id={img3} showCaption={false} className="aspect-[4/5] w-full" /></Reveal>
          </div>

          <Reveal>
            <Display as="h2" size="md" className="text-charcoal">Our Approach</Display>
            <p className={`mt-7 ${para}`}>{study.approach.intro}</p>
            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              <div>
                <p className={para}>{study.approach.seenLead}</p>
                <ul className="mt-4 space-y-1 font-display text-[22px] text-charcoal md:text-[24px]">
                  {study.approach.seen.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div>
                <p className={para}>{study.approach.behindLead}</p>
                <ul className="mt-4 space-y-1 font-display text-[22px] text-charcoal md:text-[24px]">
                  {study.approach.behind.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
            <p className={`mt-8 ${para}`}>{study.approach.close}</p>
          </Reveal>
          <Picture id={img4} />

          {study.stories.map((story, i) => (
            <div key={story.heading}>
              <Reveal>
                <Display as="h2" size="md" className="text-charcoal">{story.heading}</Display>
                <div className="mt-7 space-y-5">
                  {story.parts.map((part, j) => <Part key={j} part={part} />)}
                </div>
              </Reveal>
              {i === 0 && <Picture id={img5} />}
              {i === 1 && <Picture id={img6} />}
              {i === 2 && <Picture id={img7} />}
            </div>
          ))}

          <Reveal>
            <Display as="h2" size="md" className="text-charcoal">The Outcome</Display>
            <p className={`mt-7 ${para}`}>{study.outcome.intro}</p>
            <ul className="mt-6 space-y-3">
              {study.outcome.items.map((s) => (
                <li key={s} className="flex gap-4">
                  <span aria-hidden="true" className="mt-[14px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  <span className={para}>{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section tone="linen">
        <Container>
          <Reveal><Eyebrow>What This Work Demonstrates</Eyebrow></Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {study.demonstrates.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 70}>
                <h3 className="font-display text-[22px] text-charcoal md:text-[24px]">{d.title}</h3>
                <p className="mt-3 font-body text-[17px] leading-[1.65] text-espresso md:text-[18px]">{d.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal>
            <Display as="h2" size="md" className="text-charcoal">{study.invisible.heading}</Display>
            <div className="mt-7 space-y-5">
              {study.invisible.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className={para}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Picture id={img8} />
          <Reveal className="text-center">
            <Ornament />
            <p className="mt-12 font-display text-[40px] leading-[1.05] text-charcoal md:text-[64px]">{study.close.big}</p>
            <p className="mt-6 font-body text-[19px] italic text-espresso md:text-[21px]">Designing how you gather.</p>
            <p className={`mx-auto mt-10 max-w-xl ${para}`}>{study.close.question}</p>
            <div className="mt-8"><Btn to="/connect">{cta.primary}</Btn></div>
          </Reveal>
          {others.length > 0 && (
            <Reveal className="mt-20 border-t border-stone/40 pt-10">
              <Eyebrow>More case studies</Eyebrow>
              <ul className="mt-5 space-y-3">
                {others.map((c) => (
                  <li key={c.slug}>
                    <Link to={`/portfolio/${c.slug}`} className="font-display text-[22px] text-charcoal hover:text-gold">
                      {c.number} — {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </Container>
      </Section>
    </>
  )
}
