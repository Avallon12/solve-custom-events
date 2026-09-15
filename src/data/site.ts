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
  phone: '+1 587 582 3853',
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

/**
 * The desktop bar, organised around what a prospective client is looking for
 * (September 2026 refinement): Experiences, How We Work, About, Work,
 * Perspectives, Commitments. Every child is one of her pages or a heading from
 * her documents; the full-screen menu still carries her twelve in her order.
 */
export const divisionNav: NavChild[] = [
  { label: 'Weddings', to: '/divisions/weddings' },
  { label: 'Signature Moments', to: '/divisions/signature-moments' },
  { label: 'Design & Stylization', to: '/divisions/design-stylization' },
  { label: 'Workshops & Curated Experiences', to: '/divisions/workshops' },
  { label: 'Conferences & International Events', to: '/divisions/conferences' },
  { label: 'Fundraising Campaign Events', to: '/divisions/fundraising' },
]

export const header: NavItem[] = [
  {
    label: 'Experiences',
    to: '/divisions',
    children: [{ label: 'What We Create', to: '/what-we-create' }, ...divisionNav],
  },
  {
    label: 'How We Work',
    to: '/service-capabilities',
    children: [
      { label: 'Consultation & Strategy', to: '/service-capabilities#consultation-strategy' },
      { label: 'Planning & Coordination', to: '/service-capabilities#planning-coordination' },
      { label: 'Design & Production', to: '/service-capabilities#design-production' },
      {
        label: 'Full Experience Management',
        to: '/service-capabilities#full-experience-management',
      },
    ],
  },
  {
    label: 'About',
    to: '/foundation',
    children: [
      { label: 'Foundation', to: '/foundation' },
      { label: 'The Sol Vé Way', to: '/the-sol-ve-way' },
      { label: 'Beyond the Occasion', to: '/beyond-the-occasion' },
      { label: 'Sol Vé Principles', to: '/principles' },
      { label: 'Where It Began', to: '/where-it-began' },
      { label: 'Meet the Founder', to: '/founder' },
    ],
  },
  {
    label: 'Work',
    to: '/portfolio',
    children: [
      { label: 'Portfolio & Journal', to: '/portfolio' },
      { label: 'Case Studies', to: '/portfolio#case-studies' },
      { label: 'Features & Press', to: '/features' },
      { label: 'Client Voices', to: '/testimonials' },
    ],
  },
  {
    label: 'Perspectives',
    to: '/perspectives',
    children: [
      { label: 'Convening Without Hierarchy', to: '/perspectives#convening-without-hierarchy' },
      { label: 'Why Environment Shapes Dialogue', to: '/perspectives#why-environment-shapes-dialogue' },
      {
        label: 'Designing Spaces for Difficult Conversations',
        to: '/perspectives#designing-spaces-for-difficult-conversations',
      },
      { label: 'The Future of Global Collaboration', to: '/perspectives#the-future-of-global-collaboration' },
      { label: 'Beauty Is the Invitation', to: '/perspectives#beauty-is-the-invitation' },
      {
        label: 'The Most Important Thing We Design Is Not the Décor',
        to: '/perspectives#the-most-important-thing-we-design',
      },
      { label: 'Why We Still Gather', to: '/perspectives#why-we-still-gather' },
    ],
  },
  {
    label: 'Commitments',
    to: '/commitments',
    children: [
      { label: 'Reconciliation & Land Acknowledgement', to: '/commitments#reconciliation' },
      { label: 'Belonging for All', to: '/commitments#inclusion' },
      { label: 'Environmental Responsibility', to: '/commitments#conservation' },
      { label: 'Community Impact', to: '/commitments#community' },
    ],
  },
]

/**
 * The full-screen menu keeps the client's own page order from "Website order
 * and messaging" — the sequence she has said encodes where the brand is going.
 */
export const navigation: NavItem[] = [
  { label: 'Foundation', to: '/foundation' },
  { label: 'The Sol Vé Way', to: '/the-sol-ve-way' },
  { label: 'Beyond the Occasion', to: '/beyond-the-occasion' },
  { label: 'Our Commitments', to: '/commitments' },
  { label: 'Sol Vé Principles', to: '/principles' },
  { label: 'Where It Began', to: '/where-it-began' },
  { label: 'What We Create', to: '/what-we-create' },
  { label: 'Signature Experiences', to: '/divisions' },
  { label: 'Meet the Founder', to: '/founder' },
  { label: 'Portfolio & Journal', to: '/portfolio' },
  { label: 'Connect', to: '/connect' },
  // FAQ retired 15 September 2026 ("not needed at this time"); it lives in git history.
]

/** Wording approved in the Manual, Chapter 4.1 — never invent new CTA copy. */
export const cta = {
  /** One CTA system across the whole site, so nothing reads wedding-specific. */
  primary: 'Begin the Conversation',
  secondary: 'Explore Our Experiences',
  portfolio: 'View Our Work',
  proposal: 'Request a Proposal',
} as const
