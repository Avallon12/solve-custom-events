import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ContactRail from './components/ContactRail'
import Home from './pages/Home'

/**
 * Every page but Home loads on demand, so the first visit ships only the
 * shell and the page requested. Prerendered HTML is already on screen while a
 * chunk loads, so the fallback never shows on a cold start.
 */
const Foundation = lazy(() => import('./pages/Foundation'))
const SolVeWay = lazy(() => import('./pages/SolVeWay'))
const BeyondTheOccasion = lazy(() => import('./pages/BeyondTheOccasion'))
const Commitments = lazy(() => import('./pages/Commitments'))
const Principles = lazy(() => import('./pages/Principles'))
const WhereItBegan = lazy(() => import('./pages/WhereItBegan'))
const WhatWeCreate = lazy(() => import('./pages/WhatWeCreate'))
const SignatureExperiences = lazy(() => import('./pages/SignatureExperiences'))
const Divisions = lazy(() => import('./pages/Divisions'))
const DivisionPage = lazy(() => import('./pages/DivisionPage'))
const ServiceCapabilities = lazy(() => import('./pages/ServiceCapabilities'))
const Perspectives = lazy(() => import('./pages/Perspectives'))
const Features = lazy(() => import('./pages/Features'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Founder = lazy(() => import('./pages/Founder'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Connect = lazy(() => import('./pages/Connect'))
const FAQ = lazy(() => import('./pages/FAQ'))
const NotFound = lazy(() => import('./pages/NotFound'))

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

/** The whole app minus the router — shared by the browser entry and the prerender script. */
export function Shell() {
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
        <Suspense fallback={null}>
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

          {/* The six header sections */}
          <Route path="/service-capabilities" element={<ServiceCapabilities />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/divisions/:slug" element={<DivisionPage />} />
          <Route path="/perspectives" element={<Perspectives />} />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
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
