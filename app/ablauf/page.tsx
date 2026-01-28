import type { Metadata } from 'next'
import HowItWorks from '@/components/HowItWorks'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ablauf | Franken-Entrümpelung',
  description: 'So einfach funktioniert unsere Entrümpelung: Von der Kontaktaufnahme bis zur besenreinen Übergabe in 4 einfachen Schritten.',
}

export default function AblaufPage() {
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
      <HowItWorks />
    </main>
  )
}

