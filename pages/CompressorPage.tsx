import React, {FC} from 'react'
import {Locale, t} from '../i18n/messages'
import {SEO_PAGES, SeoBlock} from '../seo/pages'
import {JsonLd} from '../components/JsonLd'
import {AdSlot} from '../components/ads/AdSlot'
import CompressorTool from '../CompressorTool'

const HUB_REF = 'https://web-free.site/?ref=free-image-compressor'

interface Props {
  locale: Locale
  seoPath: string
}

function renderBlock(block: SeoBlock, index: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={index}
          className="text-xl md:text-2xl font-display font-bold mb-3 mt-8"
        >
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={index} className="text-lg font-display font-bold mb-2 mt-6">
          {block.text}
        </h3>
      )
    case 'ol':
      return (
        <ol
          key={index}
          className="list-decimal list-inside space-y-2 mb-4 font-medium opacity-90 pl-1"
        >
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      )
    case 'p':
      return (
        <p
          key={index}
          className="text-base md:text-lg mb-4 font-medium opacity-90 leading-relaxed"
        >
          {block.text}
        </p>
      )
    default:
      return null
  }
}

export const CompressorPage: FC<Props> = ({locale, seoPath}) => {
  const seo =
    SEO_PAGES.find(p => p.path === seoPath) ??
    SEO_PAGES.find(p => p.path === '/')!

  const isEnglishHome = seoPath === '/' && locale === 'en'
  const bodyBlocks =
    seo.blocks && seo.blocks.length > 0 ? seo.blocks : null
  const legacyParagraphs =
    !bodyBlocks && seo.paragraphs.length > 0 ? seo.paragraphs : null

  return (
    <>
      {seoPath !== '/' ? <JsonLd page={seo} /> : null}
      <CompressorTool locale={locale} seoH1={seo.h1} />

      <AdSlot slot="betweenToolContent728x90" className="ad-between" />

      <article className="max-w-4xl mx-auto px-6 pb-16 pt-4 text-gleam-dark">
        {bodyBlocks
          ? bodyBlocks.map((block, i) => renderBlock(block, i))
          : legacyParagraphs?.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg mb-4 font-medium opacity-90"
              >
                {p}
              </p>
            ))}

        {isEnglishHome && seo.hubGuideUrl ? (
          <p className="text-base md:text-lg mb-4 font-medium opacity-90 leading-relaxed">
            For a longer walkthrough focused on faster web pages, see the guide{' '}
            <a
              href={seo.hubGuideUrl}
              className="text-gleam-pink underline hover:no-underline"
              rel="noopener noreferrer"
            >
              Compress images for your website without upload
            </a>
            . You can also browse more private browser utilities on{' '}
            <a
              href={HUB_REF}
              className="text-gleam-pink underline hover:no-underline"
              rel="noopener noreferrer"
            >
              web-free.site
            </a>
            .
          </p>
        ) : null}

        <AdSlot slot="content468x60" className="ad-content my-6" />
        <h2 className="text-xl font-display font-bold mb-3">
          Frequently asked questions
        </h2>
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