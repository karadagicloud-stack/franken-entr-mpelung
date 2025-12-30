import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://franken-entruempelung.de'),
  title: {
    default: 'Franken-Entrümpelung | Professionelle Entrümpelung in Nürnberg & Umgebung',
    template: '%s | Franken-Entrümpelung'
  },
  description: 'Professionelle Entrümpelung in Nürnberg, Fürth, Erlangen und dem gesamten Nürnberger Land. ✓ Schnell ✓ Zuverlässig ✓ Günstige Preise. Jetzt kostenlose Beratung anfordern!',
  keywords: ['Entrümpelung Nürnberg', 'Haushaltsauflösung Nürnberg', 'Wohnungsauflösung Nürnberg', 'Entrümpelung Fürth', 'Entrümpelung Erlangen', 'Nürnberger Land'],
  authors: [{ name: 'Franken-Entrümpelung' }],
  creator: 'Franken-Entrümpelung',
  publisher: 'Franken-Entrümpelung',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://franken-entruempelung.de',
    title: 'Franken-Entrümpelung | Professionelle Entrümpelung in Nürnberg & Umgebung',
    description: 'Professionelle Entrümpelung in Nürnberg, Fürth, Erlangen und dem gesamten Nürnberger Land. Schnell, zuverlässig und günstig.',
    siteName: 'Franken-Entrümpelung',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franken-Entrümpelung | Professionelle Entrümpelung in Nürnberg & Umgebung',
    description: 'Professionelle Entrümpelung in Nürnberg, Fürth, Erlangen und dem gesamten Nürnberger Land.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
