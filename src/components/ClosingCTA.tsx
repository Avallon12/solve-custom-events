import { Btn, Container, Display, Eyebrow, Ornament, Reveal } from './primitives'

/**
 * The last thing on every page. Lynea asked for a contact route that is
 * impossible to miss — this, plus the nav button and the floating rail.
 * The default wording is hers, verbatim from the Connect copy — never
 * substitute invented lines here.
 */
export default function ClosingCTA({
  eyebrow = 'Connect',
  heading = "Let's Begin the Conversation",
  body = 'Every meaningful gathering begins with a conversation.',
  cta = 'Begin the Conversation',
}: {
  eyebrow?: string
  heading?: string
  body?: string
  cta?: string
}) {
  return (
    <section className="relative bg-linen py-[64px] md:py-[110px]">
      <Container width="narrow">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Display as="h2" size="lg" className="mt-6 text-charcoal">
            {heading}
          </Display>
          <p className="mt-6 max-w-xl font-body text-[19px] leading-relaxed text-espresso md:text-[21px]">
            {body}
          </p>
          <div className="mt-9">
            <Btn to="/connect">{cta}</Btn>
          </div>
          <div className="mt-12 w-full max-w-sm">
            <Ornament />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
