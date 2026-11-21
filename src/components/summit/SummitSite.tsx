import { Route, Routes, useLocation } from 'react-router-dom'
import { summitPaths } from '../../data/summit'
import SummitHome from '../../pages/summit/SummitHome'
import SummitAbout from '../../pages/summit/SummitAbout'
import SummitPlatform from '../../pages/summit/SummitPlatform'
import SummitChallenges from '../../pages/summit/SummitChallenges'
import SummitImpact from '../../pages/summit/SummitImpact'
import SummitContact from '../../pages/summit/SummitContact'
import SummitRegister from '../../pages/summit/SummitRegister'
import NotFound from '../../pages/NotFound'
import SummitHeader from './SummitHeader'
import SummitFooter from './SummitFooter'
import { SummitLanguageProvider } from './SummitLanguage'
import { RegisterButton } from './ui'

/**
 * SOLVÉ Global Summit at /global-summit: its own header, footer and language
 * switch in place of the Sol Vé masthead. The seven pages follow Rida's
 * Website User Flow in order.
 */
export default function SummitSite() {
  const { pathname } = useLocation()
  const onRegister = pathname === summitPaths.register

  return (
    <SummitLanguageProvider>
      <div className="min-h-screen bg-summit-cream font-ui text-summit-body">
        <SummitHeader />
        <main>
          <Routes>
            <Route path={summitPaths.home} element={<SummitHome />} />
            <Route path={summitPaths.about} element={<SummitAbout />} />
            <Route path={summitPaths.platform} element={<SummitPlatform />} />
            <Route path={summitPaths.challenges} element={<SummitChallenges />} />
            <Route path={summitPaths.impact} element={<SummitImpact />} />
            <Route path={summitPaths.contact} element={<SummitContact />} />
            <Route path={summitPaths.register} element={<SummitRegister />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SummitFooter />

        {/* Phones: the header has no room for the button, so Register Interest rides along the bottom. */}
        {!onRegister && (
          <div className="fixed inset-x-3 bottom-3 z-40 sm:hidden">
            <RegisterButton size="md" className="w-full" />
          </div>
        )}
      </div>
    </SummitLanguageProvider>
  )
}
