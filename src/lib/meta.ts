import { useEffect } from 'react'

/**
 * Per-page SEO title and meta description — Manual 8.2 requires a unique pair
 * on every page. Kept as a hook so each page file owns its own copy.
 */
export function usePageMeta(title: string, description: string) {
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
