/**
 * Route smoke test. Renders every page server-side and reports any that throw,
 * plus a rough content length so an accidentally-empty page is obvious.
 * Run with: npm run smoke
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
import WhatWeCreate from '../src/pages/WhatWeCreate'
import Founder from '../src/pages/Founder'
import Portfolio from '../src/pages/Portfolio'
import Connect from '../src/pages/Connect'
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
  '/founder',
  '/portfolio',
  '/connect',
  '/does-not-exist',
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

let failed = 0
for (const path of ROUTES) {
  try {
    const html = renderToString(<Tree path={path} />)
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    const status = text.length > 1200 ? 'ok  ' : 'THIN'
    if (status === 'THIN') failed++
    console.log(`${status} ${path.padEnd(34)} ${text.length} chars of copy`)
  } catch (error) {
    failed++
    console.log(`FAIL ${path.padEnd(34)} ${(error as Error).message}`)
  }
}

console.log(failed === 0 ? '\nAll routes rendered.' : `\n${failed} route(s) need attention.`)
process.exit(failed === 0 ? 0 : 1)
