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
  { label: 'Design & Stylization', to: '/what-we-create/design-stylization' },
  { label: 'Weddings', to: '/what-we-create/weddings' },
  { label: 'Signature Moments', to: '/what-we-create/signature-moments' },
  { label: 'Workshops & Curated Experiences', to: '/what-we-create/workshops' },
  { label: 'Conferences & International Events', to: '/what-we-create/conferences' },
  { label: 'Fundraising Campaign Events', to: '/what-we-create/fundraising' },
]

/**
 * The order is the client's, from "Website order and messaging", and is not
 * ours to rearrange — she has said the sequence encodes where the brand is
 * going. Add nothing to this list without her.
 */
export const navigation: NavItem[] = [
  { label: 'Foundation', to: '/foundation' },
  { label: 'The Sol Vé Way', to: '/the-sol-ve-way' },
  { label: 'Beyond the Occasion', to: '/beyond-the-occasion' },
  { label: 'Our Commitments', to: '/commitments' },
  { label: 'Sol Vé Principles', to: '/principles' },
  { label: 'Where It Began', to: '/where-it-began' },
  { label: 'What We Create', to: '/what-we-create' },
  { label: 'Signature Experiences', to: '/signature-experiences' },
  { label: 'Meet the Founder', to: '/founder' },
  { label: 'Portfolio / Journal', to: '/portfolio' },
  { label: 'Connect', to: '/connect' },
]

/** Wording approved in the Manual, Chapter 4.1 — never invent new CTA copy. */
export const cta = {
  /** One CTA system across the whole site, so nothing reads wedding-specific. */
  primary: 'Begin the Conversation',
  secondary: 'Explore Our Experiences',
  portfolio: 'View Our Work',
  proposal: 'Request a Proposal',
} as const
