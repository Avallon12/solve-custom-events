import { Fragment } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import Media from '../components/Media'
import { Btn, Container, Display, Eyebrow, Ornament, Reveal, Section } from '../components/primitives'
import { caseStudies, caseStudyBySlug, type CaseSection, type Part } from '../data/case-studies'
import { media, type MediaId, type MediaSlot } from '../data/media'
import { cta } from '../data/site'
import { usePageMeta } from '../lib/meta'

const para = 'font-body text-[19px] leading-[1.7] text-espresso md:text-[21px]'

/** Inline emphasis as it appears in her documents: **bold** and _italic_. */
function Inline({ text }: { text: string }) {
  const pieces = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g).filter(Boolean)
  return (
    <>
      {pieces.map((piece, i) =>
        piece.startsWith('**') ? (
          <strong key={i} className="font-semibold text-charcoal">{piece.slice(2, -2)}</strong>
        ) : piece.startsWith('_') ? (
          <em key={i}>{piece.slice(1, -1)}</em>
        ) : (
          <Fragment key={i}>{piece}</Fragment>
        ),
      )}
    </>
  )
}

function PartView({ part }: { part: Part }) {
  if ('quote' in part) {
    return part.big ? (
      <blockquote className="my-10 border-l-2 border-gold pl-6 md:my-14 md:pl-10">
        <p className="font-display text-[30px] italic leading-[1.2] text-charcoal md:text-[46px]">“{part.quote}”</p>
      </blockquote>
    ) : (
      <p className="font-display text-[22px] italic text-charcoal md:text-[26px]">“{part.quote}”</p>
    )
  }
  if ('list' in part) {
    return (
      <div>
        {part.lead && <p className={para}>{part.lead}</p>}
        <ul className="mt-4 space-y-3">
          {part.list.map((s) => (
            <li key={s} className="flex gap-4">
              <span aria-hidden="true" className="mt-[14px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
              <span className={para}><Inline text={s} /></span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  if ('columns' in part) {
    return (
      <div className="grid gap-10 sm:grid-cols-2">
        {part.columns.map((col) => (
          <div key={col.lead}>
            <p className={para}>{col.lead}</p>
            <ul className="mt-4 space-y-1 font-display text-[22px] text-charcoal md:text-[24px]">
              {col.items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    )
  }
  if (part.display) {
    return <p className="font-display text-[24px] leading-snug text-charcoal md:text-[30px]"><Inline text={part.p} /></p>
  }
  return <p className={`${para} ${part.strong ? 'font-semibold text-charcoal' : ''}`}><Inline text={part.p} /></p>
}

/** One, two or three photographs after a section, in the document's order. */
function Pictures({ ids }: { ids: readonly MediaId[] }) {
  if (ids.length === 1) {
    return (
      <Reveal className="my-12 md:my-16">
        <Media id={ids[0]} showCaption={false} className="aspect-[3/2] w-full" />
      </Reveal>
    )
  }
  return (
    <div className={`my-12 grid gap-5 md:my-16 md:gap-8 ${ids.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
      {ids.map((id, i) => (
        <Reveal key={id} delay={i * 90}>
          <Media id={id} showCaption={false} className={`${ids.length === 2 ? 'aspect-[4/5]' : 'aspect-square'} w-full`} />
        </Reveal>
      ))}
    </div>
  )
}

function SectionView({ section }: { section: CaseSection }) {
  return (
    <>
      <Reveal>
        {section.heading && <Display as="h2" size="md" className="text-charcoal">{section.heading}</Display>}
        <div className={`space-y-5 ${section.heading ? 'mt-7' : ''}`}>
          {section.parts.map((part, j) => <PartView key={j} part={part} />)}
        </div>
      </Reveal>
      {section.film && (
        <Reveal className="my-12 md:my-16">
          <Media id={section.film} showCaption={false} className="aspect-video w-full" />
        </Reveal>
      )}
      {section.images && section.images.length > 0 && <Pictures ids={section.images} />}
    </>
  )
}

/**
 * One case study: the document's sections in order, its photographs between
 * them in the sequence the document asks for, what the work demonstrates, and
 * the document's own closing lines and call to action.
 */
export default function CaseStudy() {
  const { slug = '' } = useParams()
  const study = caseStudyBySlug(slug)
  usePageMeta(
    study ? `${study.title} | Sol Vé Custom Events` : 'Case Studies | Sol Vé Custom Events',
    study ? study.summary : 'Case studies from Sol Vé Custom Events.',
    study ? { image: (media[study.hero] as MediaSlot).src, type: 'article' } : { robots: 'noindex, nofollow' },
  )
  if (!study) return <Navigate to="/portfolio" replace />
  const others = caseStudies.filter((c) => c.slug !== study.slug)

  return (
    <>
      <Hero size="page" eyebrow={`Case Study ${study.number}`} headline={study.title} subheadline={study.subtitle} media={study.hero} />

      <Section tone="ivory" rule>
        <Container width="narrow">
          <Reveal className="mb-10">
            <p className="font-ui text-[11px] uppercase text-walnut" style={{ letterSpacing: '0.22em' }}>
              {study.tags.join(' · ')}{study.place ? ` · ${study.place}` : ''}
            </p>
          </Reveal>
          <div className="flex flex-col gap-12 md:gap-16">
            {study.sections.map((section, i) => <SectionView key={section.heading ?? i} section={section} />)}
          </div>
        </Container>
      </Section>

      <Section tone="linen">
        <Container>
          <Reveal><Eyebrow>{study.demonstratesHeading}</Eyebrow></Reveal>
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
          {study.coda && (
            <div className="mb-4 flex flex-col gap-12 md:gap-16">
              <SectionView section={study.coda} />
            </div>
          )}
          <Reveal className="text-center">
            <Ornament />
            <div className="mt-12 space-y-3">
              {study.close.lines.map((line) => (
                <p
                  key={line}
                  className={
                    study.close.lines.length === 1
                      ? 'font-display text-[40px] leading-[1.05] text-charcoal md:text-[64px]'
                      : 'font-display text-[26px] leading-[1.2] text-charcoal md:text-[36px]'
                  }
                >
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-6 font-body text-[19px] italic text-espresso md:text-[21px]">Designing how you gather.</p>
            <p className={`mx-auto mt-10 max-w-xl ${para}`}>{study.close.question}</p>
            <div className="mt-8">
              {study.close.cta === 'secondary' ? (
                <Btn to="/divisions" variant="outline">{cta.secondary}</Btn>
              ) : (
                <Btn to="/connect">{cta.primary}</Btn>
              )}
            </div>
          </Reveal>
          {others.length > 0 && (
            <Reveal className="mt-20 border-t border-stone/40 pt-10">
              <Eyebrow>More case studies</Eyebrow>
              <ul className="mt-5 space-y-3">
                {others.map((c) => (
                  <li key={c.slug}>
                    <Link to={`/portfolio/${c.slug}`} className="font-display text-[22px] text-charcoal transition-colors duration-300 hover:text-gold">
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
