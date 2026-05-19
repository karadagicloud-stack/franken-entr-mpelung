import type { Metadata } from 'next'
import Services from '@/components/Services'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { locations, serviceTypes } from '@/lib/locations'

export const metadata: Metadata = {
  title: 'Unsere Leistungen | Franken-Entrümpelung',
  description: 'Alle Entrümpelungsdienstleistungen im Überblick: Haushaltsauflösung, Wohnungsauflösung, Kellerentrümpelung, Büroauflösung und mehr.',
}

export default function LeistungenPage() {
  const topLocations = locations.filter((location) =>
    ['nuernberg', 'fuerth', 'erlangen', 'lauf', 'wendelstein', 'altdorf', 'hersbruck', 'schwabach'].includes(location.slug)
  )

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
            Professionelle Entrümpelungsleistungen im Nürnberger Land
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Wir bieten maßgeschneiderte Lösungen für Entrümpelung, Wohnungsauflösung, Haushaltsauflösung, Kellerentrümpelung, Büroauflösung und Nachlassauflösung.
          </p>
          <p className="text-gray-600 mb-8">
            Unsere Experten sind in Lauf, Wendelstein, Altdorf, Hersbruck, Schwabach, Nürnberg, Fürth und Erlangen vor Ort für Sie aktiv.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {serviceTypes.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="rounded-3xl border border-gray-200 p-6 hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere wichtigsten Einsatzorte</h2>
            <p className="text-gray-600 mb-6">
              Wir sind regional verfügbar und unterstützen Sie in den folgenden Städten mit schneller Anfahrt und fairen Preisen.
            </p>
            <div className="flex flex-wrap gap-3">
              {topLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/entruempelung-${location.slug}`}
                  className="inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-500 hover:text-primary-700 transition-colors"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Services />
    </main>
  )
}

