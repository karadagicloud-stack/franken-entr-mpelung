import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://franken-entruempelung.vercel.app'),
  title: {
    default: 'Franken-Entrümpelung | Professionelle Entrümpelung in Nürnberg & Umgebung',
    template: '%s | Franken-Entrümpelung'
  },
  description: 'Professionelle Entrümpelung in Nürnberg, Fürth, Erlangen und dem gesamten Nürnberger Land. ✓ Schnell ✓ Zuverlässig ✓ Günstige Preise. Jetzt kostenlose Beratung anfordern!',
  keywords: ['Entrümpelung Nürnberg', 'Haushaltsauflösung Nürnberg', 'Wohnungsauflösung Nürnberg', 'Entrümpelung Fürth', 'Entrümpelung Erlangen', 'Nürnberger Land'],
  authors: [{ name: 'Franken-Entrümpelung' }],
  creator: 'Franken-Entrümpelung',
  publisher: 'Franken-Entrümpelung',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://franken-entruempelung.vercel.app',
    title: 'Franken-Entrümpelung | Professionelle Entrümpelung in Nürnberg & Umgebung',
    description: 'Professionelle Entrümpelung in Nürnberg, Fürth, Erlangen und dem gesamten Nürnberger Land. Schnell, zuverlässig und günstig.',
    siteName: 'Franken-Entrümpelung',
    images: [
      {
        url: '/logo-original.png',
        width: 512,
        height: 512,
        alt: 'Franken-Entrümpelung Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franken-Entrümpelung | Professionelle Entrümpelung in Nürnberg & Umgebung',
    description: 'Professionelle Entrümpelung in Nürnberg, Fürth, Erlangen und dem gesamten Nürnberger Land.',
    images: ['/logo-original.png'],
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
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
