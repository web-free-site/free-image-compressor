import React, {FC} from 'react'
import {Locale} from '../i18n/messages'
import {SITE} from '../site'
import {AdSlot} from '../components/ads/AdSlot'

interface Props {
  locale: Locale
  kind: 'privacy' | 'terms' | 'about' | 'contact'
}

const en: Record<string, {title: string; body: string[]}> = {
  privacy: {
    title: 'Privacy',
    body: [
      'Free Image Compressor processes your images entirely in your browser. We do not receive your files or run a compression API.',
      'Settings may be saved in localStorage on your device. Clearing site data removes them.',
      'Adsterra ad tags may set cookies or use similar technologies when ads load; see Adsterra’s policy for details.',
      `Questions: ${SITE.contactEmail}.`,
    ],
  },
  terms: {
    title: 'Terms of use',
    body: [
      'This tool is provided “as is” without warranty. You are responsible for lawful use of images you process.',
      'The site may change or pause availability without notice.',
    ],
  },
  about: {
    title: 'About',
    body: [
      'Free Image Compressor is a privacy-first batch image optimizer for JPG, PNG, WebP, AVIF, JPEG XL, and related formats.',
      `It is built on the open-source MIT project image-compressor by ${SITE.upstreamAuthor}, extended for the web-free.site family.`,
      `Operator contact: ${SITE.contactEmail}. Hub: ${SITE.hubUrl}.`,
    ],
  },
  contact: {
    title: 'Contact',
    body: [
      `Email ${SITE.contactEmail} for corrections, licensing questions, or partnership notes about Free Image Compressor.`,
    ],
  },
}

const frCopy: Record<string, {title: string; body: string[]}> = {
  privacy: {
    title: 'Confidentialité',
    body: [
      'Vos images sont traitées uniquement dans le navigateur. Aucun téléversement sur nos serveurs.',
      'Les réglages peuvent être stockés dans le localStorage de l’appareil.',
      'Les publicités Adsterra peuvent déposer des cookies selon leur politique.',
      `Contact : ${SITE.contactEmail}.`,
    ],
  },
  terms: {
    title: 'Conditions',
    body: [
      'Outil fourni en l’état. Vous êtes responsable du contenu des images traitées.',
    ],
  },
  about: {
    title: 'À propos',
    body: [
      'Compresseur d’images gratuit : optimisation par lot en local.',
      `Basé sur le projet MIT ${SITE.upstreamAuthor}/image-compressor, adapté pour ${SITE.hubUrl}.`,
    ],
  },
  contact: {
    title: 'Contact',
    body: [`Écrivez à ${SITE.contactEmail}.`],
  },
}

export const LegalPage: FC<Props> = ({locale, kind}) => {
  const c = locale === 'fr' ? frCopy[kind] : en[kind]
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 prose prose-slate">
      <h1 className="text-3xl font-display font-black text-gleam-dark mb-6">
        {c.title}
      </h1>
      {c.body.map((p, i) => (
        <p key={i} className="text-lg mb-4 text-gleam-dark/80">
          {p}
        </p>
      ))}
      <AdSlot slot="content300x250" className="ad-content" />
    </article>
  )
}