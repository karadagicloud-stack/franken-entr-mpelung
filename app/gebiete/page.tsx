import type { Metadata } from 'next'
import ServiceAreas from '@/components/ServiceAreas'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicegebiete | Franken-Entrümpelung',
  description: 'Wir sind in Nürnberg, Fürth, Erlangen und dem gesamten Nürnberger Land für Sie da. Servicegebiet mit 100km Umkreis.',
}

export default function GebiPage() {
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
        <ServiceAreas />
      </main>
      <Footer />
    </>
  )
}

