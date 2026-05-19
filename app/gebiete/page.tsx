import type { Metadata } from 'next'
import ServiceAreas from '@/components/ServiceAreas'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { locations } from '@/lib/locations'

export const metadata: Metadata = {
  title: 'Servicegebiete: Nürnberger Land & Metropolregion | Franken-Entrümpelung',
  description: 'Entrümpelung im Nürnberger Land: Lauf, Wendelstein, Altdorf, Hersbruck, Schwabach, Zirndorf, Stein, Oberasbach. Auch in Nürnberg, Fürth, Erlangen & Umgebung. 150+ abgedeckte Städte.',
}

export default function GebiPage() {
  const topLocations = locations.filter((location) => location.priority !== 'low').slice(0, 12)

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

      <section className="container-custom mb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entrümpelung in Lauf, Wendelstein, Nürnberg, Fürth und Umgebung
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Franken-Entrümpelung ist Ihr regionaler Partner für Entrümpelung, Wohnungsauflösung, Kellerentrümpelung und Haushaltsauflösung im Nürnberger Land sowie in der Metropolregion Nürnberg.
          </p>
          <p className="text-gray-600 mb-8">
            Wir sorgen für eine saubere, besenreine Übergabe Ihrer Räume in Lauf, Wendelstein, Altdorf, Hersbruck, Schwabach und vielen weiteren Orten in der Region.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/entruempelung-${location.slug}`}
                className="group block rounded-3xl border border-gray-200 p-6 hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700">
                  {location.name}
                </h2>
                <p className="text-gray-600">{location.description}</p>
                <p className="mt-4 text-sm text-gray-500">
                  {location.distance} Entfernung · {location.priority === 'high' ? 'Top Standort' : 'Wichtiges Servicegebiet'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas />
    </main>
  )
}

