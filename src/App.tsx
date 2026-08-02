import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ContactRail from './components/ContactRail'
import MysticDialog from './components/MysticDialog'
import Home from './pages/Home'
import Foundation from './pages/Foundation'
import Commitments from './pages/Commitments'
import Experiences from './pages/Experiences'
import DivisionPage from './pages/DivisionPage'
import Founder from './pages/Founder'
import Portfolio from './pages/Portfolio'
import Perspectives from './pages/Perspectives'
import Press from './pages/Press'
import Connect from './pages/Connect'
import Mystic from './pages/Mystic'
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
