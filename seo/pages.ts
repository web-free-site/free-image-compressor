import {SITE} from '../site'

export interface SeoPage {
  path: string
  locale: 'en' | 'fr'
  title: string
  description: string
  h1: string
  keywords: string
  paragraphs: string[]
  faq: {q: string; a: string}[]
}

export const SEO_PAGES: SeoPage[] = [
  {
    path: '/',
    locale: 'en',
    title:
      'Free Image Compressor — batch JPG, PNG, WebP in your browser | No upload',
    description:
      'Compress and convert unlimited images in your browser. Batch queue, before/after preview, ZIP download. Private WASM processing — files never leave your device.',
    h1: 'Free Image Compressor for JPG, PNG, WebP and more',
    keywords:
      'free image compressor, compress jpg online, batch image optimizer, webp compressor browser',
    paragraphs: [
      'Free Image Compressor helps photographers, shop owners, and web publishers shrink photos without sending them to a server. Drop a folder of JPG, PNG, WebP, AVIF, or JPEG XL files and get smaller downloads in seconds.',
      'Everything runs locally with jSquash WebAssembly codecs (from the Squoosh ecosystem). Resize, pick output quality, compare before and after, then download individually or as a ZIP.',
      'No account, no file-size cap on our side — your browser memory is the only limit. Ideal when you want privacy on a slow mobile connection.',
    ],
    faq: [
      {
        q: 'Are my images uploaded to the internet?',
        a: 'No. Compression happens entirely in your browser using web workers and WASM.',
      },
      {
        q: 'Which formats are supported?',
        a: 'Common inputs include JPG, PNG, WebP, GIF, AVIF, and JPEG XL. You can convert to PNG, WebP, JPEG, AVIF, and more.',
      },
      {
        q: 'Is it free?',
        a: 'Yes. The tool is free to use in your browser.',
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