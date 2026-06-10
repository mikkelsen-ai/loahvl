import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { SITE_CONFIG } from '@/lib/config'

const title = 'LØA – Linjeforeningen for Økonomi & Administrasjon ved HVL'
const description =
  'LØA er linjeforeningen for økonomi- og administrasjonsstudenter ved HVL. Vi arrangerer bedriftspresentasjoner, case-kvelder og sosiale events – og er broen mellom studenter og næringsliv.'
const url = 'https://loa-hvl.no'

export const metadata: Metadata = {
  title,
  description,
  robots: 'index, follow',
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: 'LØA HVL',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: `${url}/loa-logo.jpg`,
        width: 1200,
        height: 630,
        alt: 'LØA – Linjeforeningen for Økonomi & Administrasjon ved HVL',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.fullName,
  alternateName: SITE_CONFIG.name,
  url,
  email: SITE_CONFIG.email,
  description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Inndalsveien 28',
    postalCode: '5009',
    addressLocality: 'Bergen',
    addressCountry: 'NO',
  },
  sameAs: [SITE_CONFIG.instagram, SITE_CONFIG.facebook],
  memberOf: {
    '@type': 'EducationalOrganization',
    name: SITE_CONFIG.school,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
