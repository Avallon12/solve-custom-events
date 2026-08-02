import { Btn, Container, Display, Eyebrow, Ornament } from '../components/primitives'
import { usePageMeta } from '../lib/meta'

export default function NotFound() {
  usePageMeta('Page not found — Sol Vé Custom Events', 'The page you are looking for has moved.')

  return (
    <section className="grain relative flex min-h-[80svh] items-center bg-charcoal py-32 text-ivory">
      <Container width="narrow" className="relative z-10 text-center">
        <Eyebrow tone="light">Sol Vé Custom Events</Eyebrow>
        <Display as="h1" size="lg" className="mt-7 text-ivory">
          This page has moved on.
        </Display>
        <p className="mx-auto mt-6 max-w-md font-body text-[19px] leading-relaxed text-champagne/85">
          The room you were looking for is not here. Let us show you where everything begins.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Btn to="/">Return Home</Btn>
          <Btn to="/connect" variant="outline-light">
            Tell Us Your Vision
          </Btn>
        </div>
        <div className="mx-auto mt-16 max-w-sm">
          <Ornament tone="light" />
        </div>
      </Container>
    </section>
  )
}
