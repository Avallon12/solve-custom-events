import { useState } from 'react'
import Media from './Media'
import { Reveal } from './primitives'
import type { MediaId } from '../data/media'

/**
 * A curated grid. The first `featured` photographs are the selection a
 * visitor sees; the rest are in the document but hidden until "View all", so
 * a page reads as chosen rather than emptied out, every supplied photograph
 * stays on the site, and the media audit still finds each file.
 */
export default function GalleryGrid({
  ids,
  featured = 12,
  showCaption = true,
  className = 'mt-14',
}: {
  ids: readonly MediaId[]
  featured?: number
  showCaption?: boolean
  className?: string
}) {
  const [all, setAll] = useState(false)
  const hiddenCount = ids.length - featured

  return (
    <>
      <div className={`${className} grid auto-rows-fr grid-cols-2 gap-5 md:gap-8 lg:grid-cols-3`}>
        {ids.map((id, i) => (
          <div key={id} hidden={!all && i >= featured} className="h-full">
            <Reveal delay={(i % 3) * 80} className="h-full">
              <div className="overflow-hidden rounded-[2px]">
                <Media
                  id={id}
                  showCaption={showCaption}
                  className="aspect-square w-full"
                  imgClassName="transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        ))}
      </div>
      {hiddenCount > 0 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setAll((v) => !v)}
            aria-expanded={all}
            className="font-ui text-[11px] font-semibold uppercase text-espresso underline underline-offset-4 transition-colors duration-300 hover:text-gold"
            style={{ letterSpacing: '0.22em' }}
          >
            {all ? 'Show the selection' : `View all ${ids.length} photographs`}
          </button>
        </div>
      )}
    </>
  )
}
