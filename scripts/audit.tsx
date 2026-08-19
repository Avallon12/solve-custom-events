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
import SolVeWay from '../src/pages/SolVeWay'
import BeyondTheOccasion from '../src/pages/BeyondTheOccasion'
import Principles from '../src/pages/Principles'
import WhereItBegan from '../src/pages/WhereItBegan'
import SignatureExperiences from '../src/pages/SignatureExperiences'
import Divisions from '../src/pages/Divisions'
import DivisionPage from '../src/pages/DivisionPage'
import ServiceCapabilities from '../src/pages/ServiceCapabilities'
import Perspectives from '../src/pages/Perspectives'
import Features from '../src/pages/Features'
import Testimonials from '../src/pages/Testimonials'
import { experiences } from '../src/data/experiences'
import WhatWeCreate from '../src/pages/WhatWeCreate'
import Founder from '../src/pages/Founder'
import Portfolio from '../src/pages/Portfolio'
import Connect from '../src/pages/Connect'
import NotFound from '../src/pages/NotFound'

/** Every Sol Vé route. /solve is excluded — it is the summit's own page. */
const ROUTES = [
  '/',
  '/foundation',
  '/the-sol-ve-way',
  '/beyond-the-occasion',
  '/commitments',
  '/principles',
  '/where-it-began',
  '/what-we-create',
  '/signature-experiences',
  '/service-capabilities',
  '/divisions',
  ...experiences.map((e) => `/divisions/${e.slug}`),
  '/perspectives',
  '/features',
  '/testimonials',
  '/founder',
  '/portfolio',
  '/connect',
  '/nowhere',
]

/** Case-insensitive; catches alt text, metadata and hidden markup alike. */
const BANNED = [
  // SOLVÉ Global Summit — off the Sol Vé site until the client says otherwise.
  /solv[ée]\s+global/i,
  /global\s+summit/i,
  /\bSOLV[ÉE]\b(?!\s*(Custom|Vé))/,
  // Photographer credits — off the site until Lynea supplies the names.
  /credit to be confirmed/i,
  /artist credit/i,
  /photography by/i,
]

function Tree({ path }: { path: string }) {
  return (
    <MemoryRouter initialEntries={[path]}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/the-sol-ve-way" element={<SolVeWay />} />
        <Route path="/beyond-the-occasion" element={<BeyondTheOccasion />} />
        <Route path="/commitments" element={<Commitments />} />
        <Route path="/principles" element={<Principles />} />
        <Route path="/where-it-began" element={<WhereItBegan />} />
        <Route path="/signature-experiences" element={<SignatureExperiences />} />
        <Route path="/service-capabilities" element={<ServiceCapabilities />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/divisions/:slug" element={<DivisionPage />} />
        <Route path="/perspectives" element={<Perspectives />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/what-we-create" element={<WhatWeCreate />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/connect" element={<Connect />} />
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
    ? '\nClean: no summit reference and no photographer-credit line on any route.'
    : `\n${failures} route(s) contain banned content.`,
)
process.exit(failures === 0 ? 0 : 1)
