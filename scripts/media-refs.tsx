/**
 * Renders every route and prints each /media/ URL it references, one per
 * line, so the media audit can prove every shipped file is on a page and
 * every reference resolves. Run via: npm run check:media
 */
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { readdirSync } from 'node:fs'
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

const ROUTES = ['/', '/foundation', '/the-sol-ve-way', '/beyond-the-occasion', '/commitments', '/principles', '/where-it-began', '/what-we-create', '/signature-experiences', '/service-capabilities', '/divisions', ...experiences.map((e) => `/divisions/${e.slug}`), '/perspectives', '/features', '/testimonials', '/founder', '/portfolio', '/connect', '/faq']

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

const refs = new Map<string, Set<string>>()
for (const path of ROUTES) {
  const html = renderToString(<Tree path={path} />)
  for (const m of html.matchAll(/\/media\/[A-Za-z0-9._-]+/g)) {
    const file = m[0].slice('/media/'.length)
    if (!refs.has(file)) refs.set(file, new Set())
    refs.get(file)!.add(path)
  }
}
const files = readdirSync('public/media').filter((f) => !f.startsWith('.'))
const unreferenced = files.filter((f) => !refs.has(f) && f !== 'logo.webp')
const missing = [...refs.keys()].filter((f) => !files.includes(f))
for (const [file, paths] of [...refs].sort()) console.log(`${file}\t${[...paths].join(' ')}`)
console.log(`\n${files.length} files in public/media, ${refs.size} referenced across ${ROUTES.length} routes.`)
if (unreferenced.length) console.log(`NOT ON ANY PAGE: ${unreferenced.join(', ')}`)
if (missing.length) console.log(`REFERENCED BUT MISSING: ${missing.join(', ')}`)
process.exit(unreferenced.length || missing.length ? 1 : 0)
