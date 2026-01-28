import type { Metadata } from 'next'
import CallToAction from '@/components/CallToAction'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kontakt | Franken-Entrümpelung',
  description: 'Kontaktieren Sie uns für eine kostenlose Beratung. Telefon, E-Mail oder Kontaktformular - wir sind für Sie da!',
}

export default function KontaktPage() {
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
      <CallToAction />
    </main>
  )
}

