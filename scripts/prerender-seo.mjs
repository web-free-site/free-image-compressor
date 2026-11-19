import fs from 'node:fs'
import path from 'node:path'

const HOST = 'https://free-image-compressor.web-free.site'
const dist = path.resolve('dist')
const baseHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const pages = [
  {
    path: '/fr/',
    locale: 'fr',
    title:
      'Compresseur d’images gratuit — JPG, PNG, WebP dans le navigateur',
    description:
      'Compressez des images par lot sans les envoyer sur internet. Aperçu avant/après, ZIP, codecs WASM jSquash.',
    h1: 'Compresseur d’images gratuit (JPG, PNG, WebP)',
    snippet:
      '<p>Compressez JPG, PNG et WebP sur votre appareil. Aucun téléversement serveur.</p>',
  },
  {
    path: '/compress-jpg-png-webp-no-upload/',
    locale: 'en',
    title:
      'Compress JPG, PNG and WebP in the browser — no upload | Free tool',
    description:
      'Shrink JPG, PNG, and WebP files locally. Batch compressor with quality slider and ZIP export.',
    h1: 'Compress JPG, PNG & WebP without uploading',
    snippet:
      '<p>Local batch compression for the formats you use every day. Files stay on your device.</p>',
  },
  {
    path: '/how-to-compress-images/',
    locale: 'en',
    title: 'How to compress images in your browser — step-by-step',
    description:
      'Learn how to batch compress photos with Free Image Compressor.',
    h1: 'How to compress images (browser, private)',
    snippet:
      '<p>Drag files, set quality, compare results, download ZIP — all in the browser.</p>',
  },
  {
    path: '/privacy',
    locale: 'en',
    title: 'Privacy — Free Image Compressor',
    description: 'Privacy policy for Free Image Compressor.',
    h1: 'Privacy',
    snippet:
      '<p>Images are processed in your browser. We do not upload your files.</p>',
  },
  {
    path: '/terms',
    locale: 'en',
    title: 'Terms — Free Image Compressor',
    description: 'Terms of use.',
    h1: 'Terms of use',
    snippet: '<p>Tool provided as-is. Local processing only.</p>',
  },
  {
    path: '/about',
    locale: 'en',
    title: 'About — Free Image Compressor',
    description: 'About this open-source browser tool.',
    h1: 'About Free Image Compressor',
    snippet:
      '<p>Based on Sethispr/image-compressor (MIT) and the web-free.site hub.</p>',
  },
  {
    path: '/contact',
    locale: 'en',
    title: 'Contact — Free Image Compressor',
    description: 'Contact the operator.',
    h1: 'Contact',
    snippet: '<p>Email gentil@quevvy.com for support.</p>',
  },
]

function buildPage(page) {
  const url = HOST + (page.path === '/' ? '/' : page.path)
  let html = baseHtml
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${page.locale}"`)
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${page.description}" />`,
  )
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${page.title}" />`,
  )
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${page.description}" />`,
  )
  const seoBlock = `<section id="seo-prerender" class="seo-prerender"><h1>${page.h1}</h1>${page.snippet}</section>`
  if (html.includes('<main id="root"')) {
    html = html.replace(
      '<main id="root"',
      `${seoBlock}<main id="root"`,
    )
  } else {
    html = html.replace(
      '<div id="root"></div>',
      `${seoBlock}<div id="root"></div>`,
    )
  }
  const faqLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Free Image Compressor',
        url,
        applicationCategory: 'MultimediaApplication',
        offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
      },
      {
        '@type': 'FAQPage',
        mainEntity: [{ '@type': 'Question', name: page.h1, acceptedAnswer: { '@type': 'Answer', text: page.description } }],
      },
    ],
  }
  html = html.replace(
    '<script src="https://ref.web-free.site/r.js" defer></script>
</head>',
    `    <script type="application/ld+json">${JSON.stringify(faqLd)}</script>\n  </head>`,
  )
  return html
}

for (const page of pages) {
  const dir = path.join(dist, page.path.replace(/^\//, ''))
  fs.mkdirSync(dir, {recursive: true})
  fs.writeFileSync(path.join(dir, 'index.html'), buildPage(page))
}

console.log('Prerendered', pages.length, 'route shells from Vite index.html')