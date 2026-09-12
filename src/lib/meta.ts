import { useEffect } from 'react'

/**
 * SEO for a prerendered single-page app.
 *
 * Every route is rendered to static HTML at build time (scripts/prerender.tsx),
 * so crawlers receive a complete document: title, description, canonical,
 * Open Graph, Twitter card and JSON-LD. Pages declare their meta with
 * `usePageMeta`; during the build the values are captured from this module's
 * store, and in the browser the same hook keeps the document in step as the
 * visitor navigates.
 */

/** Canonical origin — every canonical URL, sitemap entry and JSON-LD id starts here. */
export const SITE_URL = 'https://www.solvecustomevents.com'
export const SITE_NAME = 'Sol Vé Custom Events'
/** Social-preview image for pages without a hero photograph of their own. */
export const DEFAULT_IMAGE = '/media/og/default.jpg'

export type PageMeta = {
  title: string
  description: string
  /** Site-relative path of the social-preview image. Set by the page, or by its Hero. */
  image?: string
  /** e.g. 'noindex, follow' for a page that should stay out of the index for now. */
  robots?: string
  type?: 'website' | 'article' | 'profile'
}

type Store = { meta: PageMeta | null; heroImage: string | null }
// On globalThis so the prerender script and the app share one store however they are bundled.
const g = globalThis as { __solveMeta?: Store }
const store: Store = (g.__solveMeta ??= { meta: null, heroImage: null })
const isServer = typeof document === 'undefined'

export function resetPageMeta() {
  store.meta = null
  store.heroImage = null
}

export function readPageMeta(): PageMeta | null {
  if (!store.meta) return null
  return { ...store.meta, image: store.meta.image ?? store.heroImage ?? undefined }
}

/** Hero calls this while rendering so its photograph becomes the page's preview image. */
export function registerHeroImage(src?: string) {
  if (isServer && src && !store.heroImage) store.heroImage = src
}

export function canonicalFor(pathname: string) {
  const clean = pathname.replace(/\/+$/, '')
  return clean ? `${SITE_URL}${clean}` : `${SITE_URL}/`
}

export function absolute(path: string) {
  return /^https?:/.test(path) ? path : `${SITE_URL}${path}`
}

function setMetaTag(key: 'name' | 'property', name: string, content?: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${key}="${name}"]`)
  if (!content) {
    tag?.remove()
    return
  }
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(key, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setLinkTag(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

/**
 * Per-page title, description and social tags — Manual 8.2 requires a unique
 * pair on every page. Kept as a hook so each page file owns its own copy.
 */
export function usePageMeta(
  title: string,
  description: string,
  options: Omit<PageMeta, 'title' | 'description'> = {},
) {
  const { image, robots, type } = options
  if (isServer) store.meta = { title, description, image, robots, type }

  useEffect(() => {
    const url = canonicalFor(window.location.pathname)
    document.title = title
    setMetaTag('name', 'description', description)
    setMetaTag('name', 'robots', robots)
    setLinkTag('canonical', url)
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:type', type ?? 'website')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    if (image) {
      setMetaTag('property', 'og:image', absolute(image))
      setMetaTag('name', 'twitter:image', absolute(image))
    }
  }, [title, description, image, robots, type])
}
