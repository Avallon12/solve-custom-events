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
import Experiences from '../src/pages/Experiences'
import DivisionPage from '../src/pages/DivisionPage'
import Founder from '../src/pages/Founder'
import Portfolio from '../src/pages/Portfolio'
import Perspectives from '../src/pages/Perspectives'
import Press from '../src/pages/Press'
import Connect from '../src/pages/Connect'
import Mystic from '../src/pages/Mystic'
import Solve from '../src/pages/Solve'
import SolveDelegate from '../src/pages/SolveDelegate'
import SolveSponsor from '../src/pages/SolveSponsor'
import NotFound from '../src/pages/NotFound'
import { divisions } from '../src/data/divisions'

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
  '/solve',
  '/solve/delegate',
  '/solve/sponsor',
  '/does-not-exist',
]

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
        <Route path="/solve" element={<Solve />} />
        <Route path="/solve/delegate" element={<SolveDelegate />} />
        <Route path="/solve/sponsor" element={<SolveSponsor />} />
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
