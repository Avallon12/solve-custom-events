import { SITE_NAME, SITE_URL, absolute, canonicalFor, type PageMeta } from './meta'
import { contact, socials } from '../data/site'
import { experiences } from '../data/experiences'
import { perspectives } from '../data/content'

/**
 * JSON-LD for every prerendered page: the organisation, the website, the page
 * itself with its breadcrumb, and — where the page is a service, a person or a
 * set of essays — the matching schema. Emitted as one @graph so entities can
 * reference each other by @id.
 */

const ORG_ID = `${SITE_URL}/#organization`
const SITE_ID = `${SITE_URL}/#website`
const LOGO = absolute('/media/logo.webp')
const FOUNDER = 'Lynea Vaugeois Hetherington'

/** Street address as published on the Google Business listing. */
const address = {
  '@type': 'PostalAddress',
  streetAddress: '312 Meridian Rd NE',
  addressLocality: 'Calgary',
  addressRegion: 'AB',
  postalCode: 'T2A 2N6',
  addressCountry: 'CA',
}

function organization() {
  return {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE_NAME,
    alternateName: 'Sol Ve Custom Events',
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', url: LOGO },
    image: LOGO,
    telephone: '+1-587-582-3853',
    email: contact.email,
    address,
    areaServed: [
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'State', name: 'Alberta' },
      { '@type': 'Country', name: 'Canada' },
    ],
    founder: { '@type': 'Person', name: FOUNDER, jobTitle: 'Founder' },
    sameAs: socials.filter((s) => s.url && s.name !== 'Website').map((s) => s.url),
  }
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-CA',
  }
}

type PageKind = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ProfilePage'

function kindFor(pathname: string): PageKind {
  if (pathname === '/connect') return 'ContactPage'
  if (pathname === '/founder') return 'ProfilePage'
  if (['/foundation', '/where-it-began', '/the-sol-ve-way', '/principles'].includes(pathname)) return 'AboutPage'
  if (['/divisions', '/portfolio', '/features', '/perspectives', '/testimonials'].includes(pathname))
    return 'CollectionPage'
  return 'WebPage'
}

function breadcrumb(pathname: string, label: string) {
  const url = canonicalFor(pathname)
  const items: { name: string; item: string }[] = [{ name: 'Home', item: `${SITE_URL}/` }]
  if (pathname.startsWith('/divisions/')) items.push({ name: 'Divisions', item: `${SITE_URL}/divisions` })
  if (pathname !== '/') items.push({ name: label, item: url })
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  }
}

function extras(pathname: string) {
  const url = canonicalFor(pathname)
  const division = pathname.startsWith('/divisions/')
    ? experiences.find((e) => `/divisions/${e.slug}` === pathname)
    : undefined
  if (division) {
    return [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: division.name,
        serviceType: division.name,
        description: division.tagline,
        url,
        provider: { '@id': ORG_ID },
        areaServed: [
          { '@type': 'City', name: 'Calgary' },
          { '@type': 'Country', name: 'Canada' },
        ],
      },
    ]
  }
  if (pathname === '/founder') {
    return [
      {
        '@type': 'Person',
        '@id': `${url}#person`,
        name: FOUNDER,
        jobTitle: 'Founder',
        worksFor: { '@id': ORG_ID },
        url,
      },
    ]
  }
  if (pathname === '/perspectives') {
    return perspectives.map((essay) => ({
      '@type': 'Article',
      '@id': `${url}#${essay.slug}`,
      headline: essay.title,
      description: essay.standfirst,
      url: `${url}#${essay.slug}`,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-CA',
    }))
  }
  return []
}

export function graphFor(pathname: string, meta: PageMeta, image: string) {
  const url = canonicalFor(pathname)
  const label = meta.title.split(' | ')[0].split(' — ')[0]
  const page = {
    '@type': kindFor(pathname),
    '@id': `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: image },
    inLanguage: 'en-CA',
    breadcrumb: { '@id': `${url}#breadcrumb` },
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [organization(), website(), page, breadcrumb(pathname, label), ...extras(pathname)],
  }
}
