import SolveForm, { type Field } from '../components/SolveForm'
import { COUNTRIES, solve } from '../data/solve'
import { usePageMeta } from '../lib/meta'

/** Fields exactly as specified in Build v5, Page 11. */
const FIELDS: readonly Field[] = [
  { name: 'fullName', label: 'Full name', required: true },
  { name: 'organization', label: 'Organization name', required: true },
  { name: 'role', label: 'Title or role', required: true },
  { name: 'country', label: 'Country', type: 'select', required: true, options: COUNTRIES },
  { name: 'email', label: 'Email address', type: 'email', required: true },
  {
    name: 'pillar',
    label: 'Which pillar interests you most',
    type: 'select',
    options: solve.delegateForm.pillars,
  },
  { name: 'referral', label: 'How did you hear about SOLVÉ' },
]

export default function SolveDelegate() {
  usePageMeta(
    'Register Delegate Interest — SOLVÉ Global Summit',
    'Register your interest in attending SOLVÉ Global Summit, the first politically neutral, cross-sector international conference on human trafficking.',
  )

  return (
    <SolveForm
      eyebrow="Delegate Registration Interest"
      heading={solve.delegateForm.heading}
      body={solve.delegateForm.body}
      fields={FIELDS}
      submit={solve.delegateForm.submit}
      confirmation={solve.delegateForm.confirmation}
      subject="SOLVÉ Global Summit — delegate registration interest"
    />
  )
}
