export type Locale = 'en' | 'fr'

const en = {
  siteName: 'Free Image Compressor',
  tagline: 'Batch compress JPG, PNG, WebP & more in your browser — no upload.',
  compressImages: 'Compress',
  howTo: 'How-to',
  noUploadGuide: 'No-upload guide',
  privacy: 'Privacy',
  terms: 'Terms',
  about: 'About',
  contact: 'Contact',
  language: 'Language',
  moreFreeTools: 'More free tools at web-free.site',
  poweredBy: 'Based on',
  queue: 'Queue',
  clearAll: 'Clear All',
  processing: 'Processing…',
  batchComplete: 'Batch optimization complete!',
  privateNote:
    'Images never leave your device. Processing uses WebAssembly in local workers.',
  heroTitle: 'Free, unlimited, privacy-first.',
  heroSubtitle:
    'Batch compress and convert images offline on your phone or computer.',
} as const

const fr: Record<keyof typeof en, string> = {
  siteName: 'Compresseur d’images gratuit',
  tagline:
    'Compressez JPG, PNG, WebP par lot dans le navigateur — sans envoi sur serveur.',
  compressImages: 'Compresser',
  howTo: 'Mode d’emploi',
  noUploadGuide: 'Sans envoi',
  privacy: 'Confidentialité',
  terms: 'Conditions',
  about: 'À propos',
  contact: 'Contact',
  language: 'Langue',
  moreFreeTools: 'Plus d’outils gratuits sur web-free.site',
  poweredBy: 'Basé sur',
  queue: 'File',
  clearAll: 'Tout effacer',
  processing: 'Traitement…',
  batchComplete: 'Lot terminé !',
  privateNote:
    'Vos images ne quittent jamais l’appareil. Traitement WebAssembly en local.',
  heroTitle: 'Gratuit, illimité, respectueux de la vie privée.',
  heroSubtitle:
    'Compressez et convertissez des images par lot, même hors ligne.',
}

export function t(locale: Locale, key: keyof typeof en): string {
  return locale === 'fr' ? fr[key] : en[key]
}