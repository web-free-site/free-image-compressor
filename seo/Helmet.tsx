import React, {FC, ReactNode, createContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {SEO_PAGES, canonicalFor} from './pages'

const Ctx = createContext({})

export const HelmetProvider: FC<{children: ReactNode}> = ({children}) => (
  <Ctx.Provider value={{}}>{children}</Ctx.Provider>
)

export const RouteMeta: FC = () => {
  const location = useLocation()
  const path = location.pathname
  const page =
    SEO_PAGES.find(p => p.path === path) ??
    (path === '/fr' ? SEO_PAGES.find(p => p.path === '/fr/') : undefined) ??
    SEO_PAGES[0]

  useEffect(() => {
    document.title = page.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', page.description)

    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalFor(page.path)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', page.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', page.description)
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonical.href)

    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', page.title)
    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', page.description)
    const metaTitle = document.querySelector('meta[name="title"]')
    if (metaTitle) metaTitle.setAttribute('content', page.title)

    document.documentElement.lang = page.locale
  }, [location.pathname, page])

  return null
}