/**
 * Single source of truth for navigation, contact details and social links.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * BEFORE LAUNCH — paste the confirmed URLs into `socials` below.
 * Any entry left as an empty string renders as a dimmed, non-clickable icon
 * marked "link pending" rather than a broken link. Lynea's note is explicit:
 * the LinkedIn must point at the Sol Vé Custom Events company page, NOT a
 * personal profile.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const contact = {
  email: 'info@solvecustomevents.com',
  phone: '1-587-582-3853',
  phoneHref: 'tel:+15875823853',
  location: 'Calgary, Alberta, Canada',
  serving: 'Serving clients throughout Canada and internationally.',
} as const

export type Social = {
  name: string
  handleLabel: string
  url: string
  note?: string
}

export const socials: Social[] = [
  {
    name: 'LinkedIn',
    handleLabel: 'Sol Vé Custom Events',
    url: 'https://www.linkedin.com/company/sol-v%C3%A9-custom-events/',
    note: 'Company page — not a personal profile',
  },
  {
    name: 'Instagram',
    handleLabel: '@solvecustomevents',
    url: 'https://www.instagram.com/solvecustomevents/',
  },
  {
    name: 'Facebook',
    handleLabel: 'Sol Vé Custom Events',
    url: 'https://www.facebook.com/solvecustomevents/',
  },
  { name: 'Website', handleLabel: 'solvecustomevents.com', url: 'https://solvecustomevents.com' },
]

export const mystic = {
  site: 'https://www.mysticmoonlightmasquerade.com',
  tickets: 'https://www.eventbrite.ca/e/mystic-moonlight-masquerade-gala-ball-tickets-1990348600242',
  email: 'lynea@mysticmoonlightmasquerade.com',
} as const

export type NavChild = { label: string; to: string }
export type NavItem = { label: string; to: string; children?: NavChild[] }

export const divisionNav: NavChild[] = [
  { label: 'Design & Stylization', to: '/experiences/design-stylization' },
  { label: 'Weddings', to: '/experiences/weddings' },
  { label: 'Signature Moments', to: '/experiences/signature-moments' },
  { label: 'Workshops & Curated Experiences', to: '/experiences/workshops' },
  { label: 'Conferences & International Events', to: '/experiences/conferences' },
  { label: 'Fundraising Campaign Events', to: '/experiences/fundraising' },
]

export const navigation: NavItem[] = [
  {
    label: 'Foundation',
    to: '/foundation',
    children: [
      { label: 'The Foundation', to: '/foundation' },
      { label: 'The Sol Vé Way', to: '/foundation#the-sol-ve-way' },
      { label: 'Beyond the Occasion', to: '/foundation#beyond-the-occasion' },
      { label: 'Where It Began', to: '/foundation#where-it-began' },
      { label: 'Meet the Founder', to: '/founder' },
    ],
  },
  { label: 'Commitments', to: '/commitments' },
  {
    label: 'Experiences',
    to: '/experiences',
    children: [{ label: 'What We Create', to: '/experiences' }, ...divisionNav],
  },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Perspectives', to: '/perspectives' },
  { label: 'Press', to: '/press' },
]

/** Wording approved in the Manual, Chapter 4.1 — never invent new CTA copy. */
export const cta = {
  primary: 'Tell Us Your Vision',
  begin: 'Begin Your Journey',
  discover: 'Discover Experiences',
  proposal: 'Request a Proposal',
  connect: 'Connect With Us',
} as const
