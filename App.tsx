import React, {useMemo} from 'react'
import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import {SiteLayout} from './components/SiteLayout'
import {CompressorPage} from './pages/CompressorPage'
import {LegalPage} from './pages/LegalPage'
import {Locale} from './i18n/messages'
import {RouteMeta} from './seo/Helmet'

function localeFromPath(path: string): Locale {
  return path.startsWith('/fr') ? 'fr' : 'en'
}

const App = () => {
  const location = useLocation()
  const locale = useMemo(
    () => localeFromPath(location.pathname),
    [location.pathname],
  )

  return (
    <SiteLayout locale={locale}>
      <RouteMeta />
      <Routes>
        <Route
          path="/"
          element={<CompressorPage locale="en" seoPath="/" />}
        />
        <Route
          path="/fr/"
          element={<CompressorPage locale="fr" seoPath="/fr/" />}
        />
        <Route path="/fr" element={<Navigate to="/fr/" replace />} />
        <Route
          path="/compress-jpg-png-webp-no-upload/"
          element={
            <CompressorPage
              locale="en"
              seoPath="/compress-jpg-png-webp-no-upload/"
            />
          }
        />
        <Route
          path="/how-to-compress-images/"
          element={
            <CompressorPage locale="en" seoPath="/how-to-compress-images/" />
          }
        />
        <Route
          path="/privacy"
          element={<LegalPage locale={locale} kind="privacy" />}
        />
        <Route
          path="/terms"
          element={<LegalPage locale={locale} kind="terms" />}
        />
        <Route
          path="/about"
          element={<LegalPage locale={locale} kind="about" />}
        />
        <Route
          path="/contact"
          element={<LegalPage locale={locale} kind="contact" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}

export default App