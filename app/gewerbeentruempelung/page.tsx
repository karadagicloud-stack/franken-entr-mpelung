import { Metadata } from 'next'
import { Phone, CheckCircle, Building2, Truck, Clock, Shield } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Gewerbeentrümpelung Nürnberg | Große Objekte & Hallen',
  description: 'Professionelle Gewerbeentrümpelung in Nürnberg ✓ Lagerhallen ✓ Produktionsstätten ✓ Große Objekte ✓ Schnell & Zuverlässig. Jetzt anfragen!',
  keywords: ['Gewerbeentrümpelung Nürnberg', 'Betriebsauflösung', 'Hallenräumung'],
}

export default function GewerbeentrümpelungPage() {
  return (
      <main>
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Gewerbe-entrümpelung{' '}
                  <span className="text-primary-600">Jeder Größenordnung</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Professionelle Entrümpelung gewerblicher Objekte. 
                  Von Lagerräumen bis zu kompletten Produktionshallen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+491234567890" className="btn btn-primary text-lg flex items-center justify-center space-x-2">
                    <Phone size={20} />
                    <span>Jetzt anrufen</span>
                  </a>
                  <a href="/kontakt" className="btn btn-secondary text-lg">Angebot anfragen</a>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Gewerbeentrümpelung"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">Unsere Gewerbe-Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Building2, title: 'Große Objekte', text: 'Hallen, Produktionsstätten, Lager jeder Größe' },
                { icon: Truck, title: 'Großes Fuhrpark', text: 'LKWs und Spezialfahrzeuge für große Mengen' },
                { icon: Clock, title: 'Flexible Zeiten', text: 'Auch nachts und am Wochenende verfügbar' },
                { icon: Shield, title: 'Vollständig versichert', text: 'Haftpflicht für gewerbliche Objekte' },
                { icon: CheckCircle, title: 'Komplette Entsorgung', text: 'Inklusive Sondermüll und Gefahrenstoffe' },
                { icon: Building2, title: 'Betriebsauflösungen', text: 'Komplette Betriebe professionell auflösen' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="card">
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

        <section className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">Wir entrümpeln gewerblich:</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                'Lagerhallen & Logistikzentren',
                'Produktionsstätten & Fabriken',
                'Werkstätten & Manufakturen',
                'Hotels & Gastronomie',
                'Einzelhandel & Geschäfte',
                'Industriegebäude'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-xl">
                  <CheckCircle className="text-primary-600" size={24} />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">Gewerbe-Objekt entrümpeln lassen?</h2>
            <p className="text-xl mb-8 text-primary-100">Kostenlose Besichtigung und individuelles Angebot</p>
            <a href="tel:+491234567890" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg inline-flex items-center space-x-2">
              <Phone size={20} />
              <span>Jetzt Kontakt aufnehmen</span>
            </a>
          </div>
        </section>
      </main>
  )
}

