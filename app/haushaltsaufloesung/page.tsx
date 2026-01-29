import { Metadata } from 'next'
import { Phone, CheckCircle, Euro, Clock, Recycle, Shield } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Haushaltsauflösung Nürnberg | Professionell & Günstig',
  description: 'Professionelle Haushaltsauflösung in Nürnberg und Umgebung ✓ Wertanrechnung ✓ Komplette Entsorgung ✓ Faire Preise. Jetzt kostenlos anfragen!',
  keywords: ['Haushaltsauflösung Nürnberg', 'Haushaltsauflösung Fürth', 'Haushaltsauflösung Erlangen'],
}

export default function HaushaltsaufloesungPage() {
  return (
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Haushaltsauflösung in{' '}
                  <span className="text-primary-600">Nürnberg & Umgebung</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Professionelle und diskrete Haushaltsauflösung mit Wertanrechnung. 
                  Wir kümmern uns um alles – von der Entrümpelung bis zur fachgerechten Entsorgung.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+491708005653"
                    className="btn btn-primary text-lg flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>Jetzt anrufen</span>
                  </a>
                  <a
                    href="/kontakt"
                    className="btn btn-secondary text-lg"
                  >
                    Kostenlos anfragen
                  </a>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80"
                  alt="Haushaltsauflösung Nürnberg"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">Was umfasst unsere Haushaltsauflösung?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle, title: 'Komplette Entrümpelung', text: 'Wir räumen den gesamten Haushalt – vom Keller bis zum Dachboden' },
                { icon: Euro, title: 'Wertanrechnung', text: 'Verwertbare Gegenstände werden angerechnet und reduzieren Ihre Kosten' },
                { icon: Recycle, title: 'Fachgerechte Entsorgung', text: 'Alles wird umweltgerecht entsorgt oder recycelt' },
                { icon: Shield, title: 'Versichert & Zertifiziert', text: 'Vollständig versichert für Ihre Sicherheit' },
                { icon: Clock, title: 'Schnelle Abwicklung', text: 'Oft noch am selben Tag oder innerhalb von 24 Stunden' },
                { icon: CheckCircle, title: 'Besenreine Übergabe', text: 'Auf Wunsch übergeben wir besenrein' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="card">
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-primary-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">So läuft eine Haushaltsauflösung ab</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { step: 1, title: 'Kontaktaufnahme', text: 'Sie kontaktieren uns telefonisch oder per Formular' },
                { step: 2, title: 'Kostenlose Besichtigung', text: 'Wir besichtigen den Haushalt vor Ort und erstellen ein Angebot' },
                { step: 3, title: 'Terminvereinbarung', text: 'Wir vereinbaren einen Wunschtermin mit Ihnen' },
                { step: 4, title: 'Entrümpelung', text: 'Wir führen die komplette Haushaltsauflösung durch' },
                { step: 5, title: 'Entsorgung', text: 'Alle Gegenstände werden fachgerecht entsorgt oder recycelt' },
                { step: 6, title: 'Übergabe', text: 'Sie erhalten den Haushalt besenrein zurück' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicegebiete */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-8">Haushaltsauflösung in Ihrer Region</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Wir sind in Nürnberg, Fürth, Erlangen und dem gesamten Umland für Sie da
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Nürnberg', 'Fürth', 'Erlangen', 'Feucht', 'Schwabach', 'Lauf', 'Hersbruck', 'Altdorf', 'Röthenbach', 'Wendelstein'].map((city) => (
                <span key={city} className="px-6 py-3 bg-primary-50 text-primary-700 rounded-full font-semibold">
                  {city}
                </span>
              ))}
              <span className="px-6 py-3 bg-gray-100 text-gray-600 rounded-full font-semibold">
                + 100+ weitere Orte
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">Bereit für Ihre Haushaltsauflösung?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Kontaktieren Sie uns jetzt für ein kostenloses und unverbindliches Angebot!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+491708005653"
                className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg inline-flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>0170 800 5653</span>
              </a>
              <a
                href="/kontakt"
                className="btn bg-primary-800 hover:bg-primary-900 text-lg"
              >
                Anfrage senden
              </a>
            </div>
          </div>
        </section>
      </main>
  )
}

