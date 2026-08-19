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

/**
 * The header, as the client specified: Service Capabilities, Divisions,
 * Commitments, Perspectives, Features and Testimonials — each with a dropdown.
 * Every child below is a heading from her own documents; nothing is invented.
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
    label: 'Service Capabilities',
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
  { label: 'Divisions', to: '/divisions', children: divisionNav },
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
    label: 'Features',
    to: '/features',
    children: [
      { label: 'AVOLA Magazine', to: '/features#avola-magazine' },
      { label: 'REDTV Canada', to: '/features#redtv-canada' },
      { label: 'Bridal Fantasy', to: '/features#bridal-fantasy' },
      { label: 'Dancing With Her', to: '/features#dancing-with-her' },
      { label: "Men's Vow Magazine", to: '/features#men-s-vow-magazine' },
    ],
  },
  {
    label: 'Testimonials',
    to: '/testimonials',
    children: [
      { label: 'Bride & Groom', to: '/testimonials#bride-groom' },
      { label: 'Corporate Executive', to: '/testimonials#corporate-executive' },
      { label: 'Charity Partner', to: '/testimonials#charity-partner' },
      { label: 'Performer', to: '/testimonials#performer' },
      { label: 'Venue Partner', to: '/testimonials#venue-partner' },
      { label: 'Sponsor', to: '/testimonials#sponsor' },
      { label: 'Community Leader', to: '/testimonials#community-leader' },
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
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Connect', to: '/connect' },
  { label: 'FAQ', to: '/faq' },
]

/** Wording approved in the Manual, Chapter 4.1 — never invent new CTA copy. */
export const cta = {
  /** One CTA system across the whole site, so nothing reads wedding-specific. */
  primary: 'Begin the Conversation',
  secondary: 'Explore Our Experiences',
  portfolio: 'View Our Work',
  proposal: 'Request a Proposal',
} as const
