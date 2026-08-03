import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ContactRail from './components/ContactRail'
import Home from './pages/Home'
import Foundation from './pages/Foundation'
import SolVeWay from './pages/SolVeWay'
import BeyondTheOccasion from './pages/BeyondTheOccasion'
import Commitments from './pages/Commitments'
import Principles from './pages/Principles'
import WhereItBegan from './pages/WhereItBegan'
import WhatWeCreate from './pages/WhatWeCreate'
import SignatureExperiences from './pages/SignatureExperiences'
import Founder from './pages/Founder'
import Portfolio from './pages/Portfolio'
import Connect from './pages/Connect'
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
  return (
    <>
      <ScrollManager />
      <Nav />

      <main>
        {/*
          Routes follow "Website order and messaging" exactly. The client has
          said the sequence encodes where the brand is going, so nothing here
          is added, removed or reordered without her.
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/the-sol-ve-way" element={<SolVeWay />} />
          <Route path="/beyond-the-occasion" element={<BeyondTheOccasion />} />
          <Route path="/commitments" element={<Commitments />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/where-it-began" element={<WhereItBegan />} />
          <Route path="/what-we-create" element={<WhatWeCreate />} />
          <Route path="/signature-experiences" element={<SignatureExperiences />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <ContactRail />
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
