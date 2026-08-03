import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ContactRail from './components/ContactRail'
import MysticDialog from './components/MysticDialog'
import Home from './pages/Home'
import Foundation from './pages/Foundation'
import Commitments from './pages/Commitments'
import WhatWeCreate from './pages/Experiences'
import DivisionPage from './pages/DivisionPage'
import Founder from './pages/Founder'
import Portfolio from './pages/Portfolio'
import Perspectives from './pages/Perspectives'
import Press from './pages/Press'
import Connect from './pages/Connect'
import SolVeWay from './pages/SolVeWay'
import BeyondTheOccasion from './pages/BeyondTheOccasion'
import Principles from './pages/Principles'
import WhereItBegan from './pages/WhereItBegan'
import SignatureExperiences from './pages/SignatureExperiences'
import Mystic from './pages/Mystic'
import Solve from './pages/Solve'
import SolveDelegate from './pages/SolveDelegate'
import SolveSponsor from './pages/SolveSponsor'
import NotFound from './pages/NotFound'

/** New page: top of page. Same page with a hash: scroll to that section. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}

function Shell() {
  const [mysticOpen, setMysticOpen] = useState(false)

  return (
    <>
      <ScrollManager />
      <Nav onOpenMystic={() => setMysticOpen(true)} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* The client's order, from "Website order and messaging". */}
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/the-sol-ve-way" element={<SolVeWay />} />
          <Route path="/beyond-the-occasion" element={<BeyondTheOccasion />} />
          <Route path="/commitments" element={<Commitments />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/where-it-began" element={<WhereItBegan />} />
          <Route path="/what-we-create" element={<WhatWeCreate />} />
          <Route path="/what-we-create/:slug" element={<DivisionPage />} />
          <Route path="/signature-experiences" element={<SignatureExperiences />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/perspectives" element={<Perspectives />} />
          <Route path="/press" element={<Press />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/mystic" element={<Mystic />} />

          {/*
            SOLVÉ Global Summit. Built in full, deliberately UNLINKED — the
            newest client document asks that it not be positioned anywhere on
            the site until its brand and governance are settled. Reachable only
            by direct URL. To publish: add it to `navigation` in data/site.ts.
          */}
          <Route path="/solve" element={<Solve />} />
          <Route path="/solve/delegate" element={<SolveDelegate />} />
          <Route path="/solve/sponsor" element={<SolveSponsor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <ContactRail />
      <MysticDialog open={mysticOpen} onClose={() => setMysticOpen(false)} />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
