/**
 * Build static HTML fragments for crawler-visible SEO (no React).
 */

const HUB_REF = 'https://web-free.site/?ref=free-image-compressor'

export function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

/**
 * @param {import('../seo/pages.ts').SeoBlock[]} blocks
 */
export function renderBlocksHtml(blocks) {
  if (!blocks?.length) return ''
  return blocks
    .map(block => {
      switch (block.type) {
        case 'h2':
          return `<h2>${escapeHtml(block.text)}</h2>`
        case 'h3':
          return `<h3>${escapeHtml(block.text)}</h3>`
        case 'p':
          return `<p>${escapeHtml(block.text)}</p>`
        case 'ol':
          return `<ol>${block.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ol>`
        default:
          return ''
      }
    })
    .join('\n')
}

/**
 * @param {{q: string, a: string}[]} faq
 */
export function renderFaqHtml(faq) {
  const items = faq
    .map(
      item =>
        `<div><dt>${escapeHtml(item.q)}</dt><dd>${escapeHtml(item.a)}</dd></div>`,
    )
    .join('')
  return `<h2>Frequently asked questions</h2>\n<dl>${items}</dl>`
}

/**
 * Full static section for the English homepage (exactly one &lt;h1&gt;).
 * @param {import('../seo/pages.ts').SeoPage} page
 */
export function renderHomeSeoSection(page) {
  const blocks = renderBlocksHtml(page.blocks)
  const hub = page.hubGuideUrl
    ? `<p>For a longer walkthrough focused on faster web pages, see the guide <a href="${escapeHtml(page.hubGuideUrl)}">Compress images for your website without upload</a>. You can also browse more private browser utilities on <a href="${HUB_REF}">web-free.site</a>.</p>`
    : ''
  return `<section id="seo-prerender" class="seo-prerender" data-static-seo="home">\n<h1>${escapeHtml(page.h1)}</h1>\n${blocks}\n${hub}\n${renderFaqHtml(page.faq)}\n</section>`
}

/**
 * Short prerender block for secondary routes (one &lt;h1&gt; per file).
 */
export function renderRouteSeoSection(page) {
  return `<section id="seo-prerender" class="seo-prerender" data-static-seo="route"><h1>${escapeHtml(page.h1)}</h1>${page.snippet ?? ''}</section>`
}

/**
 * @param {import('../seo/pages.ts').SeoPage} page
 * @param {string} url
 */
export function faqJsonLdGraph(page, url) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Free Image Compressor',
        url,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
        description:
          'Free Image Compressor batch-compresses JPG, PNG, WebP, AVIF, and more in your browser without uploading files.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {'@type': 'Answer', text: f.a},
        })),
      },
    ],
  }
}