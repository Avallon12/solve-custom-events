import SolveForm, { type Field } from '../components/SolveForm'
import { solve } from '../data/solve'
import { usePageMeta } from '../lib/meta'

/** Fields exactly as specified in Build v5, Page 11. */
const FIELDS: readonly Field[] = [
  { name: 'organization', label: 'Organization name', required: true },
  { name: 'contactName', label: 'Contact name', required: true },
  { name: 'title', label: 'Title', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  {
    name: 'level',
    label: 'Sponsorship interest level',
    type: 'select',
    options: solve.sponsorForm.levels,
  },
  { name: 'message', label: 'Message', type: 'textarea' },
]

export default function SolveSponsor() {
  usePageMeta(
    'Sponsorship Inquiry — SOLVÉ Global Summit',
    'Sponsorship opportunities for SOLVÉ Global Summit, the first politically neutral, cross-sector international conference on human trafficking.',
  )

  return (
    <SolveForm
      eyebrow="Sponsorship Inquiry"
      heading={solve.sponsorForm.heading}
      body={solve.sponsorForm.body}
      fields={FIELDS}
      submit={solve.sponsorForm.submit}
      confirmation={solve.sponsorForm.confirmation}
      subject="SOLVÉ Global Summit — sponsorship inquiry"
    />
  )
}
