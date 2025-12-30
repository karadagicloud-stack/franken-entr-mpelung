import type { Metadata } from 'next'
import Testimonials from '@/components/Testimonials'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kundenbewertungen | Franken-Entrümpelung',
  description: 'Lesen Sie, was unsere über 500 zufriedenen Kunden über uns sagen. 4.9★ Durchschnittsbewertung.',
}

export default function BewertungenPage() {
  return (
    <>
      <Navigation />
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
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

