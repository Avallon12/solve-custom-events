/**
 * Static generation. After `vite build`, renders every route into real HTML —
 * dist/<route>/index.html — so crawlers, email clients and LinkedIn link
 * previews see the full page, and each route carries its own title, meta
 * description and Open Graph tags. The client hydrates over this markup
 * (src/main.tsx). Vercel serves these files ahead of the SPA rewrite because
 * the filesystem is checked before rewrites.
 *
 * Titles and descriptions come from each page's own usePageMeta call,
 * captured during render via ssrMeta — one source of truth, no drift.
 *
 * Runs via: npm run prerender  (part of npm run build)
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { Shell } from '../src/App'
import { SITE_ORIGIN, ssrMeta } from '../src/lib/meta'
import { experiences } from '../src/data/experiences'

const ROUTES = [
  '/',
  '/foundation',
  '/the-sol-ve-way',
  '/beyond-the-occasion',
  '/commitments',
  '/principles',
  '/where-it-began',
  '/what-we-create',
  '/signature-experiences',
  '/service-capabilities',
  '/divisions',
  ...experiences.map((e) => `/divisions/${e.slug}`),
  '/perspectives',
  '/features',
  '/testimonials',
  '/founder',
  '/portfolio',
  '/connect',
  '/faq',
]

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/**
 * The template must be the pristine vite output (empty #root). The '/' route
 * overwrites dist/index.html, so the first run stashes the pristine copy —
 * re-running prerender without a fresh `vite build` then still works.
 */
const STASH = 'dist/.prerender-template.html'
const indexHtml = readFileSync('dist/index.html', 'utf8')
let template: string
if (indexHtml.includes('<div id="root"></div>')) {
  template = indexHtml
  writeFileSync(STASH, template)
} else {
  template = readFileSync(STASH, 'utf8')
}

for (const route of ROUTES) {
  let markup = renderToString(
    <MemoryRouter initialEntries={[route]}>
      <Shell />
    </MemoryRouter>,
  )

  // React 19 emits resource preloads inline (it has no <head> to hoist to
  // in renderToString). Left inside #root they break hydration — lift them
  // into the real <head> where they belong.
  const preloads = markup.match(/<link rel="preload"[^>]*>/g) ?? []
  markup = markup.replace(/<link rel="preload"[^>]*>/g, '')

  const title = escapeHtml(ssrMeta.title)
  const description = escapeHtml(ssrMeta.description)
  const url = `${SITE_ORIGIN}${route === '/' ? '/' : `${route}/`}`

  const og = [
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:site_name" content="Sol Vé Custom Events" />`,
    `    <meta property="og:title" content="${title}" />`,
    `    <meta property="og:description" content="${description}" />`,
    `    <meta property="og:url" content="${url}" />`,
    `    <meta property="og:image" content="${SITE_ORIGIN}/og.png" />`,
    `    <meta property="og:image:width" content="1200" />`,
    `    <meta property="og:image:height" content="630" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${title}" />`,
    `    <meta name="twitter:description" content="${description}" />`,
    `    <meta name="twitter:image" content="${SITE_ORIGIN}/og.png" />`,
    `    <link rel="canonical" href="${url}" />`,
    ...preloads.map((tag) => `    ${tag}`),
  ].join('\n')

  const out = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta[^>]*name="description"[\s\S]*?\/?>/, `<meta name="description" content="${description}" />`)
    .replace('</head>', `${og}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

  const file = route === '/' ? 'dist/index.html' : join('dist', route, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, out)
  console.log(`prerendered ${route.padEnd(34)} ${ssrMeta.title}`)
}

console.log(`\n${ROUTES.length} routes prerendered with unique titles, descriptions and OG tags.`)
