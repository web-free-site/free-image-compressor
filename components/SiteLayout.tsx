import React, {FC, ReactNode} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Locale, t} from '../i18n/messages'
import {AdSlot, SponsoredSmartlink, useAdScripts} from './ads/AdSlot'
import {SITE} from '../site'

interface Props {
  locale: Locale
  children: ReactNode
}

const localePath = (locale: Locale, path: string) =>
  locale === 'fr' && path === '/' ? '/fr/' : path

export const SiteLayout: FC<Props> = ({locale, children}) => {
  const location = useLocation()
  useAdScripts()

  const isFr = location.pathname.startsWith('/fr')
  const switchEn =
    isFr && location.pathname === '/fr/'
      ? '/'
      : isFr
        ? location.pathname.replace(/^\/fr/, '') || '/'
        : location.pathname
  const switchFr =
    isFr || location.pathname === '/'
      ? isFr
        ? location.pathname
        : '/fr/'
      : `/fr${location.pathname}`

  const showHomeTop =
    location.pathname === '/' ||
    location.pathname === '/fr/' ||
    location.pathname === '/fr'

  return (
    <div className="min-h-screen flex flex-col">
      <div className="site-top-nav bg-gleam-dark text-gleam-cream text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <Link
            to={localePath(locale, '/')}
            className="font-bold hover:text-gleam-pink"
          >
            {t(locale, 'siteName')}
          </Link>
          <nav className="flex flex-wrap items-center gap-3" aria-label="Main">
            <Link to={localePath(locale, '/')} className="hover:text-gleam-pink">
              {t(locale, 'compressImages')}
            </Link>
            <Link to="/how-to-compress-images/" className="hover:text-gleam-pink">
              {t(locale, 'howTo')}
            </Link>
            <Link
              to="/compress-jpg-png-webp-no-upload/"
              className="hover:text-gleam-pink"
            >
              {t(locale, 'noUploadGuide')}
            </Link>
            <div className="flex gap-1" aria-label={t(locale, 'language')}>
              <Link
                to={switchEn}
                className={!isFr ? 'text-gleam-pink font-bold' : ''}
              >
                EN
              </Link>
              <span className="opacity-40">/</span>
              <Link
                to={switchFr}
                className={isFr ? 'text-gleam-pink font-bold' : ''}
              >
                FR
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <AdSlot slot="header728x90" className="ad-header" label="Sponsored" />
      {showHomeTop ? (
        <AdSlot slot="homeTop728x90" className="ad-home-top" />
      ) : null}

      <div className="flex-1">{children}</div>

      <AdSlot slot="mobileSticky320x50" className="ad-mobile-sticky" label="Sponsored" />

      <footer className="bg-gleam-dark text-gleam-cream text-center text-xs md:text-sm py-6 px-4 space-y-3 relative z-30">
        <p>
          <a href={SITE.hubUrl} className="hover:text-gleam-pink" rel="noopener noreferrer">
            {t(locale, 'moreFreeTools')}
          </a>
        </p>
        <p>
          {t(locale, 'poweredBy')}{' '}
          <a
            href={SITE.upstreamUrl}
            className="hover:text-gleam-pink"
            rel="noopener noreferrer"
          >
            {SITE.upstreamAuthor}/image-compressor
          </a>{' '}
          (MIT) · jSquash / Squoosh codecs
        </p>
        <p className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <Link to="/privacy" className="hover:text-gleam-pink">
            {t(locale, 'privacy')}
          </Link>
          <Link to="/terms" className="hover:text-gleam-pink">
            {t(locale, 'terms')}
          </Link>
          <Link to="/about" className="hover:text-gleam-pink">
            {t(locale, 'about')}
          </Link>
          <Link to="/contact" className="hover:text-gleam-pink">
            {t(locale, 'contact')}
          </Link>
        </p>
        <SponsoredSmartlink />
      </footer>
    </div>
  )
}