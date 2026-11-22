/**
 * Prerender every route to static HTML.
 *
 * `vite build` leaves one empty shell; this renders each page into it so
 * crawlers and social scrapers get the finished document — title, description,
 * canonical, Open Graph, Twitter card and JSON-LD in <head>, the page itself in
 * <body>. React hydrates on top in the browser. Pages are written as
 * `<route>.html` so the host's clean-URL handling serves `/route` from them.
 * Also writes 404.html, the sitemap and robots.txt. Run via `npm run prerender` (part of `npm run build`).
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { prerender } from 'react-dom/static'
import { MemoryRouter } from 'react-router-dom'
import { Shell } from '../src/App'
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, absolute, canonicalFor, readPageMeta, resetPageMeta } from '../src/lib/meta'
import { graphFor } from '../src/lib/structured-data'
import { ROUTES } from '../src/data/routes'

const DIST = 'dist'
const template = readFileSync(join(DIST, 'index.html'), 'utf8')
const today = new Date().toISOString().slice(0, 10)

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

async function toString(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader()
  const decoder = new TextDecoder()
  let out = ''
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    out += decoder.decode(value, { stream: true })
  }
  return out + decoder.decode()
}

async function render(path: string) {
  resetPageMeta()
  const { prelude } = await prerender(
    <MemoryRouter initialEntries={[path]}>
      <Shell />
    </MemoryRouter>,
  )
  const html = await toString(prelude)
  const meta = readPageMeta()
  if (!meta) throw new Error(`${path}: no usePageMeta call — every page must declare its title and description`)
  return { html, meta }
}

/** A JPEG twin of the hero exists for social scrapers; WebP is not universally read. */
function previewImage(image?: string) {
  if (!image) return DEFAULT_IMAGE
  const jpeg = `/media/og/${basename(image).replace(/\.\w+$/, '')}.jpg`
  return existsSync(join(DIST, jpeg)) ? jpeg : image
}

function document(path: string, html: string, meta: ReturnType<typeof readPageMeta> & object) {
  const url = canonicalFor(path)
  const image = absolute(previewImage(meta.image))
  const head = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.robots ? `<meta name="robots" content="${esc(meta.robots)}" />` : '',
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${meta.type ?? 'website'}" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:locale" content="en_CA" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    meta.image ? `<link rel="preload" as="image" href="${esc(meta.image)}" fetchpriority="high" />` : '',
    `<script type="application/ld+json">${JSON.stringify(graphFor(path, meta, image)).replace(/</g, '\\u003c')}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ')

  return template
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

const indexable: string[] = []
for (const path of ROUTES) {
  const { html, meta } = await render(path)
  // `/foundation` is served from `foundation.html` (Vercel cleanUrls); `/divisions/weddings` from `divisions/weddings.html`.
  const file = path === '/' ? join(DIST, 'index.html') : join(DIST, `${path}.html`)
  mkdirSync(join(file, '..'), { recursive: true })
  writeFileSync(file, document(path, html, meta))
  const noindex = /noindex/i.test(meta.robots ?? '')
  if (!noindex) indexable.push(path)
  console.log(`${noindex ? 'noindex' : 'ok     '} ${path.padEnd(34)} ${html.length} chars`)
}

// The not-found page is served with a real 404 by the host; keep it out of the index.
{
  const { html, meta } = await render('/this-page-does-not-exist')
  writeFileSync(join(DIST, '404.html'), document('/404', html, { ...meta, robots: 'noindex, nofollow' }))
  console.log('404     /404.html')
}

const priority = (p: string) =>
  p === '/' ? '1.0' : p.startsWith('/divisions/') || p === '/service-capabilities' || p === '/connect' ? '0.8' : '0.6'
writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable
    .map((p) => `  <url>\n    <loc>${canonicalFor(p)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority(p)}</priority>\n  </url>`)
    .join('\n')}\n</urlset>\n`,
)
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
console.log(`\nsitemap.xml: ${indexable.length} URLs · robots.txt written`)
