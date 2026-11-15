import fs from 'node:fs'
import path from 'node:path'

const HOST = 'https://free-image-compressor.web-free.site'
const paths = [
  "/how-to-compress-an-image-for-whatsapp/",
  "/how-to-reduce-image-size-for-email/",
  '/',
  '/fr/',
  '/compress-jpg-png-webp-no-upload/',
  '/how-to-compress-images/',
  '/privacy',
  '/terms',
  '/about',
  '/contact',
]

const urls = paths
  .map(
    p => `  <url>
    <loc>${HOST}${p === '/' ? '/' : p}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' || p === '/fr/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

fs.writeFileSync(path.join('dist', 'sitemap.xml'), xml)
console.log('Wrote sitemap.xml')