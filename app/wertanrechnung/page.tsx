import type { Metadata } from 'next'
import { ArrowLeft, Coins, Home, Tv, Watch, Wrench, BookOpen, CheckCircle, Calculator, Euro, TrendingDown, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Wertanrechnung & Ankauf bei Entrümpelung | Franken-Entrümpelung',
  description: 'Sparen Sie bares Geld durch Wertanrechnung! Wir kaufen Möbel, Elektrogeräte und Antiquitäten an und rechnen den Wert direkt mit Ihren Entrümpelungskosten auf. Kostenlose Werteinschätzung inklusive.',
  keywords: ['Wertanrechnung Entrümpelung', 'Ankauf bei Haushaltsauflösung', 'Entrümpelung mit Wertanrechnung', 'Möbel Ankauf Nürnberg', 'Kostenlose Entrümpelung'],
}

export default function WertanrechnungPage() {
  const categories = [
    {
      icon: Home,
      title: 'Möbel',
      items: ['Schränke', 'Tische & Stühle', 'Sofas & Sessel', 'Betten', 'Kommoden'],
    },
    {
      icon: Tv,
      title: 'Elektrogeräte',
      items: ['Fernseher', 'Waschmaschinen', 'Kühlschränke', 'Geschirrspüler', 'Kleingeräte'],
    },
    {
      icon: Watch,
      title: 'Wertgegenstände',
      items: ['Antiquitäten', 'Schmuck & Uhren', 'Kunstgegenstände', 'Sammlungen', 'Porzellan'],
    },
  ]

  const process = [
    {
      number: '1',
      title: 'Kostenlose Besichtigung',
      description: 'Wir kommen zu Ihnen und schauen uns alle Gegenstände an. Die Besichtigung ist für Sie völlig kostenlos und unverbindlich.',
    },
    {
      number: '2',
      title: 'Professionelle Werteinschätzung',
      description: 'Unsere Experten schätzen den aktuellen Marktwert verwertbarer Gegenstände direkt vor Ort ein. Fair und transparent.',
    },
    {
      number: '3',
      title: 'Transparentes Angebot',
      description: 'Sie erhalten ein Festpreis-Angebot für die Entrümpelung minus dem Wert der angekauften Gegenstände. Keine versteckten Kosten.',
    },
    {
      number: '4',
      title: 'Verrechnung oder Auszahlung',
      description: 'Der Wert wird direkt mit den Entrümpelungskosten verrechnet oder auf Wunsch an Sie ausgezahlt. Sie entscheiden!',
    },
  ]

  const benefits = [
    'Reduzierung der Entrümpelungskosten',
    'Kostenlose professionelle Werteinschätzung',
    'Faire Marktpreise für Ihre Gegenstände',
    'Keine Extrakosten für Sie',
    'Schnelle und unkomplizierte Abwicklung',
    'In Einzelfällen: Komplett kostenlose Entrümpelung',
  ]

  const faqs = [
    {
      question: 'Was genau wird angekauft?',
      answer: 'Wir kaufen alle verwertbaren Gegenstände an: Möbel in gutem Zustand, funktionsfähige Elektrogeräte, Antiquitäten, Schmuck, Porzellan und weitere Wertgegenstände. Ausgeschlossen sind stark beschädigte Gegenstände ohne Wiederverkaufswert.',
    },
    {
      question: 'Wer schätzt den Wert meiner Gegenstände?',
      answer: 'Unsere erfahrenen Mitarbeiter mit über 15 Jahren Branchenerfahrung führen die Werteinschätzung durch. Wir kennen die aktuellen Marktpreise und bewerten fair und transparent.',
    },
    {
      question: 'Kann die Entrümpelung komplett kostenfrei werden?',
      answer: 'In seltenen Fällen, wenn besonders wertvolle Gegenstände vorhanden sind (z.B. hochwertige Antiquitäten, Designer-Möbel), kann der Ankaufswert die Entrümpelungskosten vollständig decken. Dies klären wir bei der kostenlosen Besichtigung.',
    },
    {
      question: 'Bekomme ich auch eine Barauszahlung?',
      answer: 'Ja! Sie können wählen: Entweder wird der Wert direkt mit den Entrümpelungskosten verrechnet, oder wir zahlen Ihnen den Betrag aus. Ganz wie Sie möchten.',
    },
    {
      question: 'Was passiert mit den angekauften Gegenständen?',
      answer: 'Funktionsfähige Gegenstände werden von uns weiterverkauft, repariert oder gespendet. So leisten wir auch einen Beitrag zur Nachhaltigkeit und Ressourcenschonung.',
    },
    {
      question: 'Gibt es eine Mindestmenge für den Ankauf?',
      answer: 'Nein! Auch einzelne wertvolle Gegenstände kaufen wir gerne an. Jede Wertanrechnung hilft Ihnen, Kosten zu sparen.',
    },
  ]

  return (
    <main className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="container-custom mb-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Zurück zur Startseite</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container-custom mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl mb-6">
            <Coins className="text-white" size={40} />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Wertanrechnung & Ankauf bei Entrümpelung
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Sparen Sie bares Geld! Wir kaufen verwertbare Gegenstände an und rechnen den Wert 
            direkt mit Ihren Entrümpelungskosten auf – fair, transparent und unkompliziert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+491708005653"
              className="btn btn-primary text-lg"
            >
              Jetzt kostenlose Werteinschätzung
            </a>
            <a
              href="/kontakt"
              className="btn btn-secondary text-lg"
            >
              Unverbindlich anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Beispielrechnung */}
      <section className="container-custom mb-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary-100">
            <div className="flex items-center space-x-3 mb-6">
              <Calculator className="text-primary-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">
                Beispielrechnung
              </h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-lg text-gray-700">Haushaltsauflösung 80m²</span>
                <span className="text-lg font-semibold text-gray-900">1.200 €</span>
              </div>
              
              <div className="space-y-2 py-3 border-b border-gray-200">
                <div className="flex justify-between items-center text-primary-700">
                  <span className="text-lg">Ankauf verwertbarer Gegenstände:</span>
                </div>
                <div className="flex justify-between items-center pl-4">
                  <span className="text-gray-600">• Esstisch mit 6 Stühlen</span>
                  <span className="text-gray-700">180 €</span>
                </div>
                <div className="flex justify-between items-center pl-4">
                  <span className="text-gray-600">• Kleiderschrank (Massivholz)</span>
                  <span className="text-gray-700">150 €</span>
                </div>
                <div className="flex justify-between items-center pl-4">
                  <span className="text-gray-600">• Fernseher + Waschmaschine</span>
                  <span className="text-gray-700">120 €</span>
                </div>
                <div className="flex justify-between items-center pl-4 font-semibold">
                  <span className="text-primary-700">Gesamt Wertanrechnung:</span>
                  <span className="text-primary-700">- 450 €</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 bg-primary-100 rounded-xl px-6">
                <span className="text-xl font-bold text-gray-900">Ihre Endkosten:</span>
                <span className="text-3xl font-bold text-primary-600">750 €</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-primary-600">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-primary-600">Sie sparen 450 €!</strong> In diesem Beispiel reduzieren sich 
                die Entrümpelungskosten um über 37% durch die Wertanrechnung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Was wird angekauft */}
      <section className="container-custom mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was wird angekauft?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir kaufen alle verwertbaren Gegenstände an, die noch in gutem Zustand sind 
            und einen Marktwert haben.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            <strong>Hinweis:</strong> Werkzeuge und Bücher kaufen wir in der Regel nicht an.
          </p>
        </div>
      </section>

      {/* Prozess */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              So funktioniert die Wertanrechnung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Einfach, transparent und fair – in nur 4 Schritten sparen Sie Geld
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ihre Vorteile
            </h2>
            <p className="text-xl text-gray-600">
              Warum Sie von unserer Wertanrechnung profitieren
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <HelpCircle className="text-primary-600" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-xl text-gray-600">
                Alles was Sie über Wertanrechnung wissen müssen
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA zu Services */}
      <section className="container-custom py-20">
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Profitieren Sie von unserer Wertanrechnung
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Bei allen unseren Entrümpelungsdienstleistungen bieten wir Ihnen die 
            Wertanrechnung an. Kostenlose Besichtigung und Werteinschätzung inklusive!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/haushaltsaufloesung" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Haushaltsauflösung
            </Link>
            <Link href="/wohnungsaufloesung" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Wohnungsauflösung
            </Link>
            <Link href="/nachlassaufloesung" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Nachlassauflösung
            </Link>
            <Link href="/bueroaufloesung" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Büroauflösung
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+491708005653"
              className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg"
            >
              Jetzt anrufen: 0170 800 5653
            </a>
            <a
              href="/kontakt"
              className="btn btn-secondary bg-primary-800 hover:bg-primary-900 text-white text-lg border-white"
            >
              Kostenlos anfragen
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}



