/**
 * One-off verification for the photo→placeholder conversion.
 * Renders every route server-side and reports, per route:
 *  - any <img> whose src points at /media/ other than the logo (must be zero)
 *  - how many placeholder slots rendered
 *  - any internal link that does not resolve to a registered route
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
import FAQ from '../src/pages/FAQ'
import NotFound from '../src/pages/NotFound'

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
  '/faq',
]

const KNOWN = new Set(ROUTES)

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
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </MemoryRouter>
  )
}

let failed = 0
for (const path of ROUTES) {
  const html = renderToString(<Tree path={path} />)

  const photoImgs = [...html.matchAll(/<(?:img|video)[^>]+src="(\/media\/[^"]+)"/g)]
    .map((m) => m[1])
    .filter((src) => src !== '/media/logo.webp')

  const placeholders =
    (html.match(/Photograph to be provided/g) || []).length +
    (html.match(/photograph pending/g) || []).length

  const deadLinks = [...html.matchAll(/href="(\/[^"#]*)"/g)]
    .map((m) => m[1])
    .filter((href) => !KNOWN.has(href) && !href.startsWith('/media/'))

  const bad = photoImgs.length > 0 || deadLinks.length > 0
  if (bad) failed++
  console.log(
    `${bad ? 'BAD ' : 'ok  '} ${path.padEnd(34)} placeholders=${String(placeholders).padStart(2)}  photo-imgs=${photoImgs.length}  dead-links=${deadLinks.length ? deadLinks.join(',') : 0}`,
  )
}

console.log(failed === 0 ? '\nClean: no photography shipped, no dead internal links.' : `\n${failed} route(s) need attention.`)
process.exit(failed === 0 ? 0 : 1)
