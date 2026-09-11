import { experiences } from './experiences'

/**
 * Every indexable route, in the client's page order. The prerender script
 * renders each one to static HTML and lists it in the sitemap; keep this in
 * step with the <Routes> in App.tsx.
 */
export const ROUTES: readonly string[] = [
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
