import { Metadata } from 'next'
import { Phone, CheckCircle, Briefcase, FileText, Lock, Clock } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Büroauflösung Nürnberg | Aktenvernichtung & Möbelentsorgung',
  description: 'Professionelle Büroauflösung in Nürnberg ✓ Aktenvernichtung ✓ Möbelentsorgung ✓ Diskret ✓ Zertifiziert. Jetzt anfragen!',
  keywords: ['Büroauflösung Nürnberg', 'Praxisauflösung', 'Aktenvernichtung'],
}

export default function BüroaufloesungPage() {
  return (
      <main>
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Büroauflösung{' '}
                  <span className="text-primary-600">Professionell & Diskret</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Büros, Praxen und Kanzleien professionell auflösen. 
                  Mit zertifizierter Aktenvernichtung und fachgerechter Möbelentsorgung.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+491708005653" className="btn btn-primary text-lg flex items-center justify-center space-x-2">
                    <Phone size={20} />
                    <span>Jetzt anrufen</span>
                  </a>
                  <a href="/kontakt" className="btn btn-secondary text-lg">Angebot einholen</a>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Büroauflösung"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12">Unsere Leistungen</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Briefcase, title: 'Komplette Büroauflösung', text: 'Möbel, IT, Inventar – alles wird fachgerecht entsorgt' },
                { icon: FileText, title: 'Aktenvernichtung', text: 'DSGVO-konforme und zertifizierte Aktenvernichtung' },
                { icon: Lock, title: 'Datenschutz', text: 'Vertrauliche und diskrete Abwicklung' },
                { icon: CheckCircle, title: 'IT-Entsorgung', text: 'Sichere Entsorgung von Computern und Servern' },
                { icon: Clock, title: 'Außerhalb der Geschäftszeiten', text: 'Arbeiten auch abends und am Wochenende' },
                { icon: Briefcase, title: 'Für alle Branchen', text: 'Büros, Arztpraxen, Kanzleien, etc.' },
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
            <h2 className="text-4xl font-bold text-center mb-12">Wir lösen auf:</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                'Büros & Verwaltungen',
                'Arztpraxen & Kliniken',
                'Anwaltskanzleien',
                'Steuerberater-Büros',
                'Co-Working-Spaces',
                'Laden-Geschäfte'
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
            <h2 className="text-4xl font-bold mb-6">Büroauflösung geplant?</h2>
            <p className="text-xl mb-8 text-primary-100">Kostenlose Beratung und Angebot</p>
            <a href="tel:+491708005653" className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg inline-flex items-center space-x-2">
              <Phone size={20} />
              <span>Jetzt Kontakt aufnehmen</span>
            </a>
          </div>
        </section>
      </main>
  )
}

