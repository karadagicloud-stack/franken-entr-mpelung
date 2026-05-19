import { Metadata } from 'next'
import { CheckCircle, Phone, Star, Users, Clock, MapPin, Shield, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Über uns – Franken-Entrümpelung | Ihr regionaler Partner im Nürnberger Land',
  description: 'Franken-Entrümpelung – Ihr zuverlässiger Entrümpelungsdienst aus Feucht. Über 15 Jahre Erfahrung, 4.9 Sterne bei Google, faire Preise. Wir kennen das Nürnberger Land.',
  keywords: [
    'Franken-Entrümpelung',
    'Entrümpelung Feucht',
    'Über uns',
    'regionaler Entrümpelungsdienst',
    'Nürnberger Land',
    'zuverlässige Entrümpelung',
  ],
  openGraph: {
    title: 'Über uns – Franken-Entrümpelung',
    description: 'Ihr regionaler Entrümpelungsdienst aus dem Nürnberger Land. Über 15 Jahre Erfahrung, 4.9 Sterne, faire Festpreise.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.franken-entrumpelung.de/ueber-uns',
  },
  alternates: {
    canonical: 'https://www.franken-entrumpelung.de/ueber-uns',
  },
}

const stats = [
  { value: '15+', label: 'Jahre Erfahrung', icon: Clock },
  { value: '500+', label: 'Zufriedene Kunden', icon: Users },
  { value: '4.9★', label: 'Google-Bewertung', icon: Star },
  { value: '70 km', label: 'Servicegebiet', icon: MapPin },
]

const values = [
  {
    icon: Shield,
    title: 'Festpreisgarantie',
    text: 'Kein Aufschlag nach der Besichtigung. Was wir anbieten, ist der Endpreis – keine versteckten Kosten.',
  },
  {
    icon: Clock,
    title: 'Schnell vor Ort',
    text: 'Oft am gleichen oder nächsten Tag. Wir wissen, dass viele Situationen nicht lange warten können.',
  },
  {
    icon: Heart,
    title: 'Respektvoller Umgang',
    text: 'Besonders bei Nachlassauflösungen und sensiblen Situationen arbeiten wir diskret und einfühlsam.',
  },
  {
    icon: CheckCircle,
    title: 'Besenreine Übergabe',
    text: 'Wir hinterlassen Ihre Räumlichkeiten sauber und ordentlich – fertig für die Übergabe oder Neuvermietung.',
  },
]

const serviceAreas = [
  'Feucht', 'Nürnberg', 'Lauf', 'Altdorf', 'Hersbruck',
  'Schwabach', 'Wendelstein', 'Röthenbach', 'Schwarzenbruck',
  'Fürth', 'Erlangen', 'Zirndorf', 'Oberasbach', 'Stein',
  'Schwaig', 'Eckental', 'Langenzenn', 'Allersberg',
]

export default function UeberUnsPage() {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Franken-Entrümpelung',
    description: 'Professioneller Entrümpelungsdienst im Nürnberger Land mit über 15 Jahren Erfahrung.',
    telephone: '+491708005653',
    email: 'info@franken-entrumpelung.de',
    url: 'https://www.franken-entrumpelung.de',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Feucht',
      postalCode: '90537',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.3758,
      longitude: 11.2103,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '25',
      bestRating: '5',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 49.3758,
        longitude: 11.2103,
      },
      geoRadius: '70000',
    },
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '17:00',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10" />
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MapPin size={16} />
                <span>Heimatbetrieb aus Feucht im Nürnberger Land</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Wer wir sind –{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Ihr regionaler Partner
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Franken-Entrümpelung ist ein familiengeführter Betrieb aus Feucht. Seit über 15 Jahren
                helfen wir Menschen im Nürnberger Land und der gesamten Region dabei, Wohnungen,
                Häuser und Keller professionell zu räumen – schnell, fair und mit einem Team, dem Sie
                vertrauen können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+491708005653"
                  className="btn btn-primary text-lg inline-flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>0170 800 5653</span>
                </a>
                <Link
                  href="/kontakt"
                  className="btn btn-secondary text-lg inline-flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Kostenlos anfragen</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="card text-center">
                  <Icon className="mx-auto text-blue-600 mb-3" size={32} />
                  <div className="text-3xl font-bold text-blue-600 mb-1">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Unsere Geschichte
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Was als kleine Entrümpelung für Nachbarn und Bekannte begann, hat sich über die Jahre
                  zu einem zuverlässigen regionalen Betrieb entwickelt. Wir kommen aus dem Nürnberger
                  Land, kennen die Gegend, die Menschen und die lokalen Gegebenheiten – von engen
                  Altbautreppen in Nürnberger Stadtteilen bis zu Bauernhöfen in den kleinen Gemeinden
                  rund um Hersbruck oder Altdorf.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Im Laufe der Jahre haben wir über 500 Haushalte, Keller, Dachböden und Gewerbeobjekte
                  geräumt. Dabei haben wir eines gelernt: Jeder Auftrag ist anders, und jeder Kunde hat
                  eine eigene Geschichte. Ob es um einen Umzug geht, das Erbe der Großeltern oder eine
                  Zwangsräumung – wir gehen auf jede Situation individuell ein.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Unsere 4.9-Sterne-Bewertung bei Google ist für uns kein Marketinginstrument, sondern
                  der tägliche Ansporn. Wir wissen: In einer Region, wo sich Empfehlungen schnell
                  herumsprechen, zählt Vertrauen mehr als Werbung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Was uns ausmacht
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Unser Servicegebiet
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Wir fahren bis zu 70 km – im gesamten Nürnberger Land, Erlangen, Fürth und darüber hinaus.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm"
                  >
                    {area}
                  </span>
                ))}
                <span className="inline-block bg-gray-200 text-gray-600 px-4 py-2 rounded-full font-medium text-sm">
                  + viele weitere Orte
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                Nicht sicher ob wir zu Ihnen kommen? Einfach anrufen – wir finden eine Lösung.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lernen Sie uns kennen
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Rufen Sie uns an oder schreiben Sie uns – wir melden uns schnell zurück und
                vereinbaren einen kostenlosen Besichtigungstermin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+491708005653"
                  className="btn bg-white text-blue-600 hover:bg-blue-50 text-lg inline-flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>0170 800 5653</span>
                </a>
                <Link
                  href="/kontakt"
                  className="btn bg-blue-800 text-white hover:bg-blue-900 text-lg inline-flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Online anfragen</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
