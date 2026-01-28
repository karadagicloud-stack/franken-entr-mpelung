import { Metadata } from 'next'
import { Phone, CheckCircle, Heart, Euro, Shield, Users } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Nachlassauflösung Nürnberg | Einfühlsam & Professionell',
  description: 'Einfühlsame Nachlassauflösung in Nürnberg ✓ Wertermittlung ✓ Diskret ✓ Professionell ✓ Mit Respekt. Wir helfen in schweren Zeiten. Jetzt anfragen!',
  keywords: ['Nachlassauflösung Nürnberg', 'Wohnungsauflösung Todesfall', 'Erbe auflösen'],
}

export default function NachlassauflösungPage() {
  return (
      <main>
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Nachlassauflösung{' '}
                  <span className="text-primary-600">Mit Einfühlungsvermögen</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  In schweren Zeiten stehen wir Ihnen zur Seite. 
                  Professionelle und respektvolle Nachlassauflösung mit Wertermittlung.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+491234567890" className="btn btn-primary text-lg flex items-center justify-center space-x-2">
                    <Phone size={20} />
                    <span>Jetzt anrufen</span>
                  </a>
                  <a href="/kontakt" className="btn btn-secondary text-lg">Beratung anfragen</a>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Nachlassauflösung"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">Unsere Leistungen bei Nachlassauflösungen</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: 'Einfühlsam & Respektvoll', text: 'Wir gehen sensibel mit Erinnerungsstücken um' },
                { icon: Euro, title: 'Wertermittlung', text: 'Professionelle Bewertung wertvoller Gegenstände' },
                { icon: Shield, title: 'Diskret & Zuverlässig', text: 'Vertrauliche Abwicklung mit Pietät' },
                { icon: Users, title: 'Erfahrenes Team', text: 'Langjährige Erfahrung mit Nachlassauflösungen' },
                { icon: CheckCircle, title: 'Komplettservice', text: 'Von Sortierung bis Entsorgung alles aus einer Hand' },
                { icon: CheckCircle, title: 'Wertanrechnung', text: 'Verwertbare Gegenstände werden angerechnet' },
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
          <div className="container-custom max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-8">Ablauf einer Nachlassauflösung</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Wir begleiten Sie Schritt für Schritt durch diesen schwierigen Prozess
            </p>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Erstkontakt', text: 'Persönliches Gespräch und Terminvereinbarung' },
                { step: 2, title: 'Besichtigung', text: 'Vor-Ort-Termin und Wertermittlung' },
                { step: 3, title: 'Sortierung', text: 'Behalten, Verkaufen oder Entsorgen' },
                { step: 4, title: 'Entrümpelung', text: 'Professionelle Durchführung der Auflösung' },
                { step: 5, title: 'Übergabe', text: 'Besenreine Übergabe der Räumlichkeiten' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start bg-white p-6 rounded-xl">
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

        <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">Wir sind für Sie da</h2>
            <p className="text-xl mb-8 text-primary-100">
              In schweren Zeiten unterstützen wir Sie mit Einfühlungsvermögen und Professionalität
            </p>
            <a href="tel:+491234567890" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg inline-flex items-center space-x-2">
              <Phone size={20} />
              <span>Jetzt Kontakt aufnehmen</span>
            </a>
          </div>
        </section>
      </main>
  )
}

