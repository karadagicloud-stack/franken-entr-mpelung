import type { Metadata } from 'next'
import ServiceAreas from '@/components/ServiceAreas'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicegebiete: Nürnberger Land & Metropolregion | Franken-Entrümpelung',
  description: 'Entrümpelung im Nürnberger Land: Lauf, Wendelstein, Altdorf, Hersbruck, Schwabach, Zirndorf, Stein, Oberasbach. Auch in Nürnberg, Fürth, Erlangen & Umgebung. 150+ abgedeckte Städte.',
}

export default function GebiPage() {
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
      <ServiceAreas />
    </main>
  )
}

