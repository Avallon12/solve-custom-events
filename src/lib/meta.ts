import { useEffect } from 'react'

/**
 * The canonical origin used for og:url / og:image in the prerendered HTML.
 * Swap to https://solvecustomevents.com when the domain moves to Vercel.
 */
export const SITE_ORIGIN = 'https://solve-custom-events-two.vercel.app'

/**
 * During prerendering (scripts/prerender.tsx) each page's usePageMeta call
 * records its values here, so the static HTML gets the exact same title and
 * description the client-side hook would set — one source, no drift.
 */
export const ssrMeta = { title: '', description: '' }

/**
 * Per-page SEO title and meta description — Manual 8.2 requires a unique pair
 * on every page. Kept as a hook so each page file owns its own copy.
 */
export function usePageMeta(title: string, description: string) {
  if (typeof document === 'undefined') {
    ssrMeta.title = title
    ssrMeta.description = description
  }

  useEffect(() => {
    document.title = title

    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [title, description])
}
