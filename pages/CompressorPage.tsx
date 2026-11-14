import React, {FC} from 'react'
import {Locale, t} from '../i18n/messages'
import {SEO_PAGES} from '../seo/pages'
import {JsonLd} from '../components/JsonLd'
import {AdSlot} from '../components/ads/AdSlot'
import CompressorTool from '../CompressorTool'

interface Props {
  locale: Locale
  seoPath: string
}

export const CompressorPage: FC<Props> = ({locale, seoPath}) => {
  const seo =
    SEO_PAGES.find(p => p.path === seoPath) ??
    SEO_PAGES.find(p => p.path === '/')!

  return (
    <>
      <JsonLd page={seo} />
      <CompressorTool locale={locale} seoH1={seo.h1} />

      <AdSlot slot="betweenToolContent728x90" className="ad-between" />

      <article className="max-w-4xl mx-auto px-6 pb-16 pt-4 text-gleam-dark">
        <h2 className="text-2xl font-display font-black mb-4 sr-only">
          {seo.h1}
        </h2>
        {seo.paragraphs.map((p, i) => (
          <p key={i} className="text-base md:text-lg mb-4 font-medium opacity-90">
            {p}
          </p>
        ))}
        <AdSlot slot="content468x60" className="ad-content my-6" />
        <h2 className="text-xl font-display font-bold mb-3">FAQ</h2>
        <dl className="space-y-4 mb-8">
          {seo.faq.map(item => (
            <div key={item.q}>
              <dt className="font-bold">{item.q}</dt>
              <dd className="opacity-80">{item.a}</dd>
            </div>
          ))}
        </dl>
        <AdSlot slot="content300x250" className="ad-content" />
        <p className="text-sm opacity-70 mt-6">{t(locale, 'privateNote')}</p>
      </article>
    </>
  )
}