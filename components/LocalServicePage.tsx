'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Euro, CheckCircle, Star, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from './Navigation'
import Footer from './Footer'
import { LocationData, ServiceType } from '@/lib/locations'

interface LocalServicePageProps {
  location: LocationData
  service: ServiceType
}

export default function LocalServicePage({ location, service }: LocalServicePageProps) {
  // Generate location-specific schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Franken-Entrümpelung',
      telephone: '+491708005653',
      areaServed: {
        '@type': 'City',
        name: location.name,
      },
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: 'https://franken-entruempelung.de',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: service.title,
        item: `https://franken-entruempelung.de/${service.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.name,
      },
    ],
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10" />
          
          <div className="container-custom">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-sm text-gray-600 mb-6"
            >
              <Link href="/" className="hover:text-blue-600">Startseite</Link>
              <span>/</span>
              <Link href={`/${service.slug}`} className="hover:text-blue-600">{service.title}</Link>
              <span>/</span>
              <span className="text-blue-600 font-semibold">{location.name}</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <MapPin size={16} />
                    <span>{location.distance} von Nürnberg</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    {service.title} in{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      {location.name}
                    </span>
                  </h1>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description} in {location.name}. Professionell, schnell und zu fairen Preisen.
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                      <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-1">4.9★</div>
                      <div className="text-sm text-gray-600">Bewertung</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                      <div className="text-sm text-gray-600">Kunden</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="tel:+491708005653"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary text-lg flex items-center justify-center space-x-2"
                    >
                      <Phone size={20} />
                      <span>Jetzt anrufen</span>
                      <ArrowRight size={20} />
                    </motion.a>

                    <motion.a
                      href="#kontakt"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-secondary text-lg flex items-center justify-center space-x-2"
                    >
                      <MessageCircle size={20} />
                      <span>Kostenlos anfragen</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
                    <div className="text-center mb-6">
                      <MapPin className="mx-auto text-blue-600 mb-4" size={48} />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.name}</h3>
                      <p className="text-gray-600">Einwohner: {location.population}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm text-gray-700">
                        <CheckCircle className="text-green-500" size={18} />
                        <span>Schnelle Anfahrt</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-700">
                        <CheckCircle className="text-green-500" size={18} />
                        <span>Lokaler Service</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-700">
                        <CheckCircle className="text-green-500" size={18} />
                        <span>Faire Preise</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Benefits */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Ihre Vorteile bei {service.title} in {location.name}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {service.title} {location.name} – Professionell und zuverlässig
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sie suchen nach einer professionellen {service.title.toLowerCase()} in {location.name}? 
                  Franken-Entrümpelung ist Ihr zuverlässiger Partner im Nürnberger Land. Mit über 15 Jahren 
                  Erfahrung bieten wir Ihnen einen umfassenden Service von der Besichtigung bis zur besenreinen Übergabe.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  In {location.name} sind wir bestens bekannt und bereits für zahlreiche zufriedene Kunden tätig geworden. 
                  Die Entfernung von {location.distance} von unserem Hauptstandort ermöglicht uns eine schnelle Anfahrt 
                  und flexible Terminvereinbarungen – oft noch am selben oder nächsten Tag.
                </p>

                {location.neighborhoods && location.neighborhoods.length > 0 && (
                  <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">
                      Wir sind in allen Stadtteilen von {location.name} für Sie da:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {location.neighborhoods.map((neighborhood) => (
                        <span
                          key={neighborhood}
                          className="inline-block bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700"
                        >
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  Unser Service umfasst:
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    'Kostenlose Besichtigung und Beratung vor Ort',
                    'Transparentes Festpreis-Angebot ohne versteckte Kosten',
                    'Professionelle Entrümpelung mit erfahrenem Team',
                    'Fachgerechte Entsorgung und Recycling',
                    'Wertanrechnung für verwertbare Gegenstände',
                    'Optional: Besenreine Endreinigung',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Location Info */}
        {location.landmarks && location.landmarks.length > 0 && (
          <section className="section bg-white">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Bekannte Orte in {location.name}
                </h2>
                <p className="text-gray-600 mb-8">
                  Wir kennen uns in {location.name} bestens aus:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {location.landmarks.map((landmark) => (
                    <span
                      key={landmark}
                      className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Häufige Fragen zur {service.title} in {location.name}
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: `Was kostet eine ${service.title.toLowerCase()} in ${location.name}?`,
                    answer: `Die Kosten hängen von verschiedenen Faktoren ab, wie z.B. Größe des Objekts und Menge des Materials. Nach einer kostenlosen Besichtigung in ${location.name} erstellen wir Ihnen ein transparentes Festpreis-Angebot.`,
                  },
                  {
                    question: `Wie schnell können Sie in ${location.name} vor Ort sein?`,
                    answer: `Durch unsere Nähe zu ${location.name} (${location.distance} Entfernung) können wir oft noch am selben oder nächsten Tag einen Besichtigungstermin anbieten.`,
                  },
                  {
                    question: `Bieten Sie auch Wertanrechnung in ${location.name} an?`,
                    answer: `Ja, wir bieten bei Haushaltsauflösungen Wertanrechnung für verwertbare Gegenstände an. Dies kann die Gesamtkosten erheblich reduzieren.`,
                  },
                  {
                    question: `Welche Stadtteile von ${location.name} bedienen Sie?`,
                    answer: location.neighborhoods 
                      ? `Wir sind in allen Stadtteilen von ${location.name} für Sie da, einschließlich ${location.neighborhoods.slice(0, 3).join(', ')} und weiteren Bereichen.`
                      : `Wir bedienen das gesamte Stadtgebiet von ${location.name} und Umgebung.`,
                  },
                ].map((faq, index) => (
                  <div key={index} className="card">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="section bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Jetzt {service.title} in {location.name} anfragen
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Kostenlose Beratung und schnelle Terminvergabe. Rufen Sie uns an oder 
                fordern Sie online ein Angebot an.
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
                  href="/#kontakt"
                  className="btn bg-blue-800 text-white hover:bg-blue-900 text-lg inline-flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Online anfragen</span>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-500">
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <Clock className="mx-auto mb-2" size={32} />
                    <div className="font-semibold">Schnelle Termine</div>
                    <div className="text-sm text-blue-200">Oft am selben Tag</div>
                  </div>
                  <div>
                    <Euro className="mx-auto mb-2" size={32} />
                    <div className="font-semibold">Faire Preise</div>
                    <div className="text-sm text-blue-200">Transparente Kosten</div>
                  </div>
                  <div>
                    <Star className="mx-auto mb-2" size={32} />
                    <div className="font-semibold">4.9★ Bewertung</div>
                    <div className="text-sm text-blue-200">500+ Kunden</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

