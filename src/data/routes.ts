import { experiences } from './experiences'
import { caseStudies } from './case-studies'
import { summitPaths } from './summit'

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
  '/service-capabilities',
  '/divisions',
  ...experiences.map((e) => `/divisions/${e.slug}`),
  '/perspectives',
  '/features',
  '/testimonials',
  '/founder',
  '/portfolio',
  ...caseStudies.map((c) => `/portfolio/${c.slug}`),
  '/connect',
]

/** SOLVÉ Global Summit, in the order of Rida's Website User Flow. */
export const SUMMIT_ROUTES: readonly string[] = [
  summitPaths.home,
  summitPaths.about,
  summitPaths.platform,
  summitPaths.challenges,
  summitPaths.impact,
  summitPaths.contact,
  summitPaths.register,
]

/** Everything the prerender script writes to static HTML and the sitemap. */
export const ALL_ROUTES: readonly string[] = [...ROUTES, ...SUMMIT_ROUTES]
