#!/usr/bin/env node
/**
 * Injects crawler-visible homepage SEO into dist/index.html (post Vite, post route prerender).
 * Source of truth: seo/pages.ts (English homepage entry).
 */
import fs from 'node:fs'
import path from 'node:path'
import {SEO_PAGES} from '../seo/pages.ts'
import {
  renderHomeSeoSection,
  faqJsonLdGraph,
} from './seo-static-html.mjs'

const HOST = 'https://free-image-compressor.web-free.site'
const distIndex = path.resolve('dist/index.html')

if (!fs.existsSync(distIndex)) {
  console.error('inject-home-prerender: dist/index.html missing — run vite build first')
  process.exit(1)
}

const home = SEO_PAGES.find(p => p.path === '/' && p.locale === 'en')
if (!home) {
  console.error('inject-home-prerender: homepage SEO config not found')
  process.exit(1)
}

let html = fs.readFileSync(distIndex, 'utf8')

if (html.includes('id="seo-prerender"')) {
  html = html.replace(
    /<section id="seo-prerender"[\s\S]*?<\/section>\s*/i,
    '',
  )
}

const section = renderHomeSeoSection(home)
if (html.includes('<main id="root"')) {
  html = html.replace('<main id="root"', `${section}\n    <main id="root"`)
} else if (html.includes('<div id="root"')) {
  html = html.replace('<div id="root"', `${section}\n    <div id="root"`)
} else {
  console.error('inject-home-prerender: could not find #root mount point')
  process.exit(1)
}

const hasFaqLd =
  html.includes('"@type": "FAQPage"') || html.includes('"@type":"FAQPage"')
if (!hasFaqLd) {
  const ld = faqJsonLdGraph(home, `${HOST}/`)
  html = html.replace(
    '</head>',
    `    <script type="application/ld+json">${JSON.stringify(ld)}</script>\n  </head>`,
  )
}

fs.writeFileSync(distIndex, html)

const h1Count = (html.match(/<h1\b/gi) ?? []).length
if (h1Count !== 1) {
  console.error(
    `inject-home-prerender: expected 1 <h1> in dist/index.html, found ${h1Count}`,
  )
  process.exit(1)
}

console.log(
  `inject-home-prerender: wrote static homepage SEO (${h1Count} h1) to dist/index.html`,
)