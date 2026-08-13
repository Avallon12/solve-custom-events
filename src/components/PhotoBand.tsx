import Media from './Media'
import { Container, Reveal, Section } from './primitives'
import type { MediaId } from '../data/media'

/**
 * A quiet strip of photography for pages that would otherwise be all text.
 * Same tile grammar as the portfolio and division galleries.
 */
export default function PhotoBand({ ids }: { ids: readonly MediaId[] }) {
  return (
    <Section tone="ivory">
      <Container>
        <div className="grid auto-rows-fr grid-cols-2 gap-5 md:gap-8 lg:grid-cols-3">
          {ids.map((id, i) => (
            <Reveal key={id} delay={(i % 3) * 80} className="h-full">
              <div className="overflow-hidden rounded-[2px]">
                <Media
                  id={id}
                  className="aspect-square w-full"
                  imgClassName="transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
