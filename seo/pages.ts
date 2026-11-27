import {SITE} from '../site'

export type SeoBlock =
  | {type: 'p'; text: string}
  | {type: 'h2'; text: string}
  | {type: 'h3'; text: string}
  | {type: 'ol'; items: string[]}

export interface SeoPage {
  path: string
  locale: 'en' | 'fr'
  title: string
  description: string
  h1: string
  keywords: string
  paragraphs: string[]
  blocks?: SeoBlock[]
  hubGuideUrl?: string
  faq: {q: string; a: string}[]
}

export const SEO_PAGES: SeoPage[] = [
  {
    path: '/',
    locale: 'en',
    title:
      'Free Image Compressor — shrink JPG, PNG, WebP in your browser (no upload)',
    description:
      'Free Image Compressor reduces JPG, PNG, WebP, AVIF, and more in your browser. Batch queue, before/after compare, ZIP download. Files stay on your device — no sign-up.',
    h1: 'Free Image Compressor',
    keywords:
      'free image compressor, compress jpg online, batch image optimizer, webp compressor browser, compress images without uploading',
    paragraphs: [],
    hubGuideUrl:
      'https://web-free.site/guides/compress-images-for-website-free/',
    blocks: [
      {
        type: 'p',
        text: 'Free Image Compressor is a browser-based tool that shrinks photos and graphics without uploading them to a cloud server. You can batch-process JPG, JPEG, PNG, WebP, GIF, AVIF, and JPEG XL, adjust quality and dimensions, preview the savings, and download optimized files or a ZIP archive. Everything runs on your device using WebAssembly codecs from the jSquash and Squoosh ecosystem, so sensitive scans, product shots, and personal albums stay private.',
      },
      {
        type: 'h2',
        text: 'What this free image compressor does',
      },
      {
        type: 'p',
        text: 'Large images slow down websites, bounce email attachments over provider limits, and eat mobile data when you share them in chat apps. This compressor lowers file size while keeping visuals acceptable for web, email, and social posts. You set output format and quality, optionally resize to maximum width or height, and inspect a before-and-after comparison on any file in the queue. Multiple files process in parallel through web workers, so a folder of shop photos or event pictures can finish faster than opening each file in a desktop editor.',
      },
      {
        type: 'p',
        text: 'Unlike many “free” tools that quietly send your pictures to remote APIs, processing here never leaves your tab. There is no account, no per-file upload quota on our side, and no watermark on exports. The practical limit is your device memory and CPU, which is why very large batches work best on a desktop browser with a few dozen images at a time.',
      },
      {
        type: 'h2',
        text: 'How to compress images in five steps',
      },
      {
        type: 'ol',
        items: [
          'Open Free Image Compressor and drag images or a folder onto the drop zone, or use the file picker to add one or many files.',
          'Open Settings to choose output format (for example WebP for the web or JPEG for universal sharing), set quality, and turn on resize if you need smaller pixel dimensions.',
          'Review the queue: each job shows original size, compressed size, and percent saved as workers finish.',
          'Click Compare on any finished job to check sharpness and artifacts before you publish or send the file.',
          'Download individual optimized images or use the batch ZIP option when you compressed a whole folder.',
        ],
      },
      {
        type: 'h2',
        text: 'Privacy and in-browser processing',
      },
      {
        type: 'p',
        text: 'When you use a server-side compressor, your files may be stored, scanned, or used for machine-learning datasets according to that vendor’s policy. Free Image Compressor avoids that model: decoding and re-encoding happen locally in WebAssembly modules loaded once per session. Network requests are limited to loading the app and codecs, not to transmitting your image bytes. That makes the tool a practical choice for invoices, IDs, medical paperwork, unreleased product photos, or any workflow where “upload to random website” is not acceptable. Clear your browser tab when you are done if you share the computer with others.',
      },
      {
        type: 'h2',
        text: 'Common use cases',
      },
      {
        type: 'p',
        text: 'Website owners use it to prepare hero images, blog thumbnails, and catalog photos so pages load faster and Core Web Vitals improve. Shopify, WordPress, and static-site publishers can export WebP or AVIF alongside fallbacks. Sellers compress product PNGs before listing on marketplaces with strict size caps. Students and remote workers reduce screenshot and scan sizes for email and LMS uploads. Travelers on metered connections shrink vacation albums before backing them up to cloud drives. Marketers batch-convert campaign assets to consistent quality without installing Photoshop or GIMP.',
      },
    ],
    faq: [
      {
        q: 'Are my images uploaded to the internet?',
        a: 'No. Compression runs entirely in your browser with WebAssembly and web workers. Your files are not sent to our servers for encoding.',
      },
      {
        q: 'Which image formats can I compress?',
        a: 'You can open JPG, JPEG, PNG, WebP, GIF, AVIF, and JPEG XL, and export to common formats including JPEG, PNG, WebP, and AVIF depending on your settings.',
      },
      {
        q: 'Is Free Image Compressor really free?',
        a: 'Yes. There is no subscription and no sign-up required to compress images in the browser.',
      },
      {
        q: 'Can I compress multiple images at once?',
        a: 'Yes. Add as many files as your device can handle in parallel. When the queue finishes, download each file or grab everything in one ZIP.',
      },
      {
        q: 'How much smaller will my files get?',
        a: 'Savings depend on the original format, resolution, and quality you choose. Photos often shrink 40–80% at moderate quality; PNG screenshots may compress less unless you resize or switch to WebP.',
      },
    ],
  },
  {
    path: '/fr/',
    locale: 'fr',
    title:
      'Compresseur d’images gratuit — JPG, PNG, WebP dans le navigateur',
    description:
      'Compressez des images par lot sans les envoyer sur internet. Aperçu avant/après, ZIP, codecs WASM jSquash. Gratuit et local.',
    h1: 'Compresseur d’images gratuit (JPG, PNG, WebP)',
    keywords:
      'compresseur image gratuit, réduire taille photo, webp navigateur',
    paragraphs: [
      'Réduisez le poids de vos photos pour le web, WhatsApp ou la boutique en ligne. Glissez vos fichiers : le traitement se fait sur votre téléphone ou ordinateur, pas sur nos serveurs.',
      'Réglez la qualité, redimensionnez, comparez visuellement, puis téléchargez le lot en ZIP. Les codecs proviennent de l’écosystème Squoosh via jSquash.',
      'Interface en français pour l’Afrique francophone et l’Europe — données sensibles (factures scannées, pièces d’identité) restent sur l’appareil.',
    ],
    faq: [
      {
        q: 'Mes photos sont-elles envoyées en ligne ?',
        a: 'Non. Tout le traitement reste dans votre navigateur.',
      },
      {
        q: 'Quels formats ?',
        a: 'JPG, PNG, WebP, GIF, AVIF, JPEG XL et conversions associées.',
      },
      {
        q: 'C’est gratuit ?',
        a: 'Oui, sans inscription obligatoire.',
      },
    ],
  },
  {
    path: '/compress-jpg-png-webp-no-upload/',
    locale: 'en',
    title:
      'Compress JPG, PNG and WebP in the browser — no upload | Free tool',
    description:
      'Shrink JPG, PNG, and WebP files locally. Batch compressor with quality slider and ZIP export. No server upload.',
    h1: 'Compress JPG, PNG & WebP without uploading',
    keywords:
      'compress jpg no upload, png optimizer browser, webp compress local',
    paragraphs: [
      'Search engines and social apps punish heavy images. This page opens the same Free Image Compressor tuned for JPG, PNG, and WebP — the formats most teams use daily.',
      'Because files stay on-device, you can optimize scans, product shots, or event albums on a shared PC without worrying about cloud retention policies.',
      'Use the comparison modal to check artifacts before you publish. Then batch-download optimized files.',
    ],
    faq: [
      {
        q: 'Why not upload to a cloud compressor?',
        a: 'Uploading exposes files to third-party servers. Local WASM avoids that.',
      },
      {
        q: 'Can I compress hundreds at once?',
        a: 'Yes, queue as many files as your device can handle in parallel workers.',
      },
    ],
  },
  {
    path: '/how-to-compress-images/',
    locale: 'en',
    title: 'How to compress images in your browser — step-by-step',
    description:
      'Learn how to batch compress photos with Free Image Compressor: add files, set quality, compare, download.',
    h1: 'How to compress images (browser, private)',
    keywords: 'how to compress images, reduce photo size tutorial',
    paragraphs: [
      'Step 1: Open Free Image Compressor and drag images or a folder onto the drop zone.',
      'Step 2: Choose output format and quality in Settings — enable resize if you need thumbnails.',
      'Step 3: Wait for the queue to finish, open Compare on any job, then download single files or a ZIP.',
      'Tip: Enable auto-download if you want each finished file saved immediately.',
    ],
    faq: [
      {
        q: 'Does it work offline?',
        a: 'After the first load, many browsers cache the WASM bundles for offline use.',
      },
      {
        q: 'What about HEIC from iPhone?',
        a: 'Convert via PNG or JPEG output if the browser cannot decode the input.',
      },
    ],
  },
]

export function canonicalFor(path: string): string {
  if (path === '/') return `${SITE.canonicalHost}/`
  const p = path.endsWith('/') ? path : `${path}/`
  return `${SITE.canonicalHost}${p}`
}