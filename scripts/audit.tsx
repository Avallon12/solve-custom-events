/**
 * Content audit. Renders every Sol Vé route and fails on anything that must not
 * appear there — currently any SOLVÉ Global Summit reference, which the client's
 * newest document asks be kept off the site until the summit is finalised.
 *
 * Run with: npm run audit
 */
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'
import Home from '../src/pages/Home'
import Foundation from '../src/pages/Foundation'
import Commitments from '../src/pages/Commitments'
import Experiences from '../src/pages/Experiences'
import DivisionPage from '../src/pages/DivisionPage'
import Founder from '../src/pages/Founder'
import Portfolio from '../src/pages/Portfolio'
import Perspectives from '../src/pages/Perspectives'
import Press from '../src/pages/Press'
import Connect from '../src/pages/Connect'
import Mystic from '../src/pages/Mystic'
import NotFound from '../src/pages/NotFound'
import { divisions } from '../src/data/divisions'

/** Every Sol Vé route. /solve is excluded — it is the summit's own page. */
const ROUTES = [
  '/',
  '/foundation',
  '/commitments',
  '/experiences',
  ...divisions.map((d) => `/experiences/${d.slug}`),
  '/founder',
  '/portfolio',
  '/perspectives',
  '/press',
  '/connect',
  '/mystic',
  '/nowhere',
]

/** Case-insensitive; catches alt text, metadata and hidden markup alike. */
const BANNED = [/solv[ée]\s+global/i, /global\s+summit/i, /\bSOLV[ÉE]\b(?!\s*(Custom|Vé))/]

function Tree({ path }: { path: string }) {
  return (
    <MemoryRouter initialEntries={[path]}>
      <Nav onOpenMystic={() => {}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/commitments" element={<Commitments />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences/:slug" element={<DivisionPage />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/perspectives" element={<Perspectives />} />
        <Route path="/press" element={<Press />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/mystic" element={<Mystic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </MemoryRouter>
  )
}

let failures = 0
for (const path of ROUTES) {
  // Markup, not just visible text — alt attributes and hidden nodes count.
  const html = renderToString(<Tree path={path} />)
  const hits = BANNED.flatMap((re) => {
    const m = html.match(new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g'))
    return m ?? []
  })
  if (hits.length) {
    failures += 1
    console.log(`FAIL ${path.padEnd(34)} ${[...new Set(hits)].join(', ')}`)
  } else {
    console.log(`ok   ${path.padEnd(34)} clean`)
  }
}

console.log(
  failures === 0
    ? '\nNo SOLVÉ Global Summit reference on any Sol Vé route.'
    : `\n${failures} route(s) still reference the summit.`,
)
process.exit(failures === 0 ? 0 : 1)
