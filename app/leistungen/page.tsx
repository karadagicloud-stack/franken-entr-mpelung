import type { Metadata } from 'next'
import Services from '@/components/Services'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Unsere Leistungen | Franken-Entrümpelung',
  description: 'Alle Entrümpelungsdienstleistungen im Überblick: Haushaltsauflösung, Wohnungsauflösung, Kellerentrümpelung, Büroauflösung und mehr.',
}

export default function LeistungenPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom mb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Zurück zur Startseite</span>
        </Link>
      </div>
      <Services />
    </main>
  )
}

