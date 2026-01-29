import { Metadata } from 'next'
import { Phone, CheckCircle, Trash2, Box, Home, Recycle } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Kellerentrümpelung Nürnberg | Keller, Dachboden & Garage',
  description: 'Kellerentrümpelung in Nürnberg ✓ Keller ✓ Dachboden ✓ Garage ✓ Komplettservice mit Entsorgung. Faire Preise. Jetzt anfragen!',
  keywords: ['Kellerentrümpelung Nürnberg', 'Dachboden entrümpeln', 'Garage entrümpeln'],
}

export default function KellerentrümpelungPage() {
  return (
      <main>
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Keller, Dachboden & Garage{' '}
                  <span className="text-primary-600">professionell entrümpeln</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Ihr Keller ist voll? Dachboden überladen? Wir entrümpeln Keller, Dachböden und Garagen schnell und zuverlässig.
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
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80"
                  alt="Kellerentrümpelung"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">Was wir entrümpeln</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Box, title: 'Keller', text: 'Komplette Kellerentrümpelung inkl. Entsorgung' },
                { icon: Home, title: 'Dachböden', text: 'Dachboden räumen und besenrein übergeben' },
                { icon: Trash2, title: 'Garagen', text: 'Garagen vollständig leer räumen' },
                { icon: Box, title: 'Lagerräume', text: 'Lager und Abstellräume entrümpeln' },
                { icon: Recycle, title: 'Schuppen', text: 'Gartenschuppen und Geräteschuppen' },
                { icon: CheckCircle, title: 'Komplettservice', text: 'Mit Entsorgung und Reinigung' },
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
            <h2 className="text-4xl font-bold text-center mb-12">Das wird entsorgt</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                'Alte Möbel', 'Elektrogeräte', 'Kartons', 'Sperrmüll',
                'Werkzeug', 'Gartengeräte', 'Fahrräder', 'Reifen',
                'Bauschutt', 'Holz', 'Metall', 'Alles andere'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 bg-white p-3 rounded-lg">
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">Keller voll? Wir räumen auf!</h2>
            <p className="text-xl mb-8 text-primary-100">Kostenlose Besichtigung und Angebot</p>
            <a href="tel:+491708005653" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg inline-flex items-center space-x-2">
              <Phone size={20} />
              <span>Jetzt anfragen</span>
            </a>
          </div>
        </section>
      </main>
  )
}

