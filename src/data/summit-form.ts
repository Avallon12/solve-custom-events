/**
 * Register Your Interest → Rida's team-owned Google Form, whose responses land
 * in the team's linked Google Sheet.
 *
 * To connect it, open the Form's pre-filled link (⋮ → Get pre-filled link),
 * fill every question, and copy:
 *   - `action`: the form URL with `/viewform…` replaced by `/formResponse`,
 *     e.g. https://docs.google.com/forms/d/e/1FAIpQL…/formResponse
 *   - each `entry.123456789` name into `entries` below.
 *
 * The Form's Area of Interest choices must read exactly as INTEREST_OPTIONS in
 * src/data/summit.ts. If the Form has "Collect email addresses" switched on,
 * set `entries.email` to 'emailAddress'.
 *
 * Until `action` and every entry are filled in, Submit opens an email draft to
 * `fallbackEmail` instead, so nothing typed into the form is lost.
 */
export const registrationForm = {
  action: '',
  entries: {
    fullName: '',
    email: '',
    organization: '',
    interest: '',
    message: '',
  },
  fallbackEmail: 'info@solveglobalsummit.com',
}

export const googleFormConnected =
  registrationForm.action !== '' && Object.values(registrationForm.entries).every(Boolean)
