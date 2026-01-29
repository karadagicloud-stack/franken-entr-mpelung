import { Metadata } from 'next'
import { Phone, CheckCircle, Clock, Shield, Users, Sparkles } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Wohnungsauflösung Nürnberg | Schnell & Diskret',
  description: 'Professionelle Wohnungsauflösung in Nürnberg ✓ Diskret ✓ Zuverlässig ✓ Besenreine Übergabe. Auch bei Messie-Wohnungen. Jetzt anfragen!',
  keywords: ['Wohnungsauflösung Nürnberg', 'Wohnungsauflösung Feucht', 'Wohnungsauflösung Altdorf'],
}

export default function WohnungsaufloesungPage() {
  return (
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Wohnungsauflösung{' '}
                  <span className="text-primary-600">Schnell & Diskret</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Professionelle Wohnungsauflösung mit besenreiner Übergabe. 
                  Wir räumen Ihre Wohnung komplett leer – diskret, schnell und zuverlässig.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+491708005653" className="btn btn-primary text-lg flex items-center justify-center space-x-2">
                    <Phone size={20} />
                    <span>Jetzt anrufen</span>
                  </a>
                  <a href="/kontakt" className="btn btn-secondary text-lg">Kostenlos anfragen</a>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
                  alt="Wohnungsauflösung"
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
            <h2 className="text-4xl font-bold text-center mb-12">Unsere Leistungen bei Wohnungsauflösungen</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle, title: 'Komplettservice', text: 'Von der Entrümpelung bis zur Endreinigung' },
                { icon: Clock, title: 'Express möglich', text: 'Oft noch am selben Tag verfügbar' },
                { icon: Shield, title: 'Diskret & Zuverlässig', text: 'Vertrauliche und professionelle Abwicklung' },
                { icon: Sparkles, title: 'Besenreine Übergabe', text: 'Wohnung wird komplett gereinigt' },
                { icon: Users, title: 'Auch Messie-Wohnungen', text: 'Erfahrung mit schwierigen Fällen' },
                { icon: CheckCircle, title: 'Fachgerechte Entsorgung', text: 'Umweltgerechte Entsorgung aller Materialien' },
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

        {/* Anlässe */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">Typische Anlässe für eine Wohnungsauflösung</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                'Umzug ins Pflegeheim',
                'Verkauf oder Vermietung',
                'Todesfall in der Familie',
                'Trennung oder Scheidung',
                'Wohnungswechsel',
                'Messi-Syndrome',
                'Zwangsräumung',
                'Insolvenz',
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-xl">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">Wohnungsauflösung benötigt?</h2>
            <p className="text-xl mb-8 text-primary-100">Wir helfen Ihnen schnell und unkompliziert!</p>
            <a href="tel:+491708005653" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg inline-flex items-center space-x-2">
              <Phone size={20} />
              <span>Jetzt kostenlos anfragen</span>
            </a>
          </div>
        </section>
      </main>
  )
}

