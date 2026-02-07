import { Metadata } from 'next'
import { HelpCircle, CheckCircle, Phone, MessageCircle, Clock, Euro, Package, Recycle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Häufige Fragen zur Entrümpelung | FAQ Franken-Entrümpelung',
  description: 'Alle Antworten auf Ihre Fragen zu Entrümpelung, Haushaltsauflösung und Kosten. ✓ Ablauf ✓ Preise ✓ Wertanrechnung ✓ Entsorgung ✓ Über 30 FAQ beantwortet',
  keywords: [
    'Entrümpelung FAQ',
    'Haushaltsauflösung Fragen',
    'Entrümpelung Kosten',
    'Was kostet Entrümpelung',
    'Wertanrechnung Entrümpelung',
    'Entrümpelung Ablauf',
    'Sondermüll entsorgen',
  ],
  openGraph: {
    title: 'Häufige Fragen zur Entrümpelung | FAQ',
    description: 'Alle Antworten auf Ihre Fragen zu Entrümpelung, Haushaltsauflösung und Kosten.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.franken-entrumpelung.de/faq',
  },
  alternates: {
    canonical: 'https://www.franken-entrumpelung.de/faq',
  },
}

const faqCategories = [
  {
    title: 'Allgemeine Fragen',
    icon: HelpCircle,
    faqs: [
      {
        question: 'Was kostet eine Entrümpelung?',
        answer: 'Die Kosten für eine Entrümpelung hängen von verschiedenen Faktoren ab: Größe und Lage des Objekts, Menge und Art des zu entsorgenden Materials, Zugänglichkeit (z.B. Stockwerk, Aufzug vorhanden), sowie ob verwertbare Gegenstände vorhanden sind. Nach einer kostenlosen Besichtigung erstellen wir Ihnen ein transparentes Festpreis-Angebot ohne versteckte Kosten.',
      },
      {
        question: 'Wie schnell können Sie vor Ort sein?',
        answer: 'In den meisten Fällen können wir bereits am selben oder nächsten Tag einen kostenlosen Besichtigungstermin anbieten. Die Entrümpelung selbst können wir je nach Auftragslage oft innerhalb von 2-5 Werktagen durchführen. In Notfällen sind auch Express-Termine möglich.',
      },
      {
        question: 'In welchen Gebieten sind Sie tätig?',
        answer: 'Wir sind hauptsächlich im Nürnberger Land tätig, einschließlich Nürnberg, Feucht, Lauf, Altdorf, Hersbruck, Schwabach, Fürth, Erlangen, Roth und allen umliegenden Gemeinden im Umkreis von 70 km um Feucht.',
      },
      {
        question: 'Benötige ich ein Angebot im Voraus?',
        answer: 'Ja, nach der kostenlosen Besichtigung erstellen wir Ihnen ein detailliertes Festpreis-Angebot. So wissen Sie genau, welche Kosten auf Sie zukommen – ohne Überraschungen. Erst nach Ihrer Auftragserteilung beginnen wir mit der Arbeit.',
      },
      {
        question: 'Arbeiten Sie auch am Wochenende?',
        answer: 'Ja, nach Absprache bieten wir auch Termine am Samstag an. Kontaktieren Sie uns einfach, und wir finden gemeinsam einen passenden Termin für Ihre Entrümpelung.',
      },
    ],
  },
  {
    title: 'Ablauf & Organisation',
    icon: Clock,
    faqs: [
      {
        question: 'Wie läuft eine Entrümpelung ab?',
        answer: '1. Kontaktaufnahme: Sie rufen uns an oder füllen das Online-Formular aus. 2. Kostenlose Besichtigung: Wir kommen vorbei und verschaffen uns einen Überblick. 3. Angebot: Sie erhalten ein transparentes Festpreis-Angebot. 4. Terminvereinbarung: Wir legen gemeinsam einen passenden Termin fest. 5. Entrümpelung: Unser Team führt die Arbeiten fachgerecht durch. 6. Übergabe: Sie erhalten Ihre Räumlichkeiten besenrein zurück.',
      },
      {
        question: 'Muss ich bei der Entrümpelung anwesend sein?',
        answer: 'Bei der Besichtigung sollten Sie oder eine bevollmächtigte Person anwesend sein. Bei der Entrümpelung selbst ist Ihre Anwesenheit nicht zwingend erforderlich, wenn Sie uns einen Schlüssel anvertrauen. Viele Kunden schätzen es jedoch, dabei zu sein.',
      },
      {
        question: 'Wie lange dauert eine Entrümpelung?',
        answer: 'Die Dauer hängt vom Umfang ab. Eine kleine Wohnung können wir oft in 2-4 Stunden entrümpeln, ein komplettes Haus kann 1-2 Tage in Anspruch nehmen. Bei der Besichtigung geben wir Ihnen eine genaue Zeiteinschätzung.',
      },
      {
        question: 'Kann ich bestimmte Gegenstände behalten?',
        answer: 'Selbstverständlich! Bei der Besichtigung besprechen wir genau, welche Gegenstände entsorgt werden sollen und welche Sie behalten möchten. Wir können auch Gegenstände für Sie zur Seite stellen oder in bestimmte Räume bringen.',
      },
      {
        question: 'Benötige ich eine Halteverbotszone?',
        answer: 'In den meisten Fällen nicht, da wir flexibel parken können. Bei sehr engen Straßenverhältnissen oder großen Projekten können wir die Halteverbotszone für Sie beantragen und organisieren.',
      },
    ],
  },
  {
    title: 'Kosten & Wertanrechnung',
    icon: Euro,
    faqs: [
      {
        question: 'Was bedeutet "Wertanrechnung"?',
        answer: 'Bei einer Haushaltsauflösung prüfen wir alle Gegenstände auf Verwertbarkeit. Möbel, Antiquitäten, Elektrogeräte oder andere wertvolle Gegenstände können wir verkaufen oder weiterverwerten. Der Erlös wird direkt mit den Entrümpelungskosten verrechnet, wodurch sich Ihre Gesamtkosten erheblich reduzieren können.',
      },
      {
        question: 'Welche Gegenstände werden angerechnet?',
        answer: 'Wir rechnen folgende Gegenstände an: Gut erhaltene Möbel, funktionsfähige Elektrogeräte, Antiquitäten und Sammlerstücke, Edelmetalle und Schmuck, Werkzeuge und Maschinen, hochwertige Haushaltswaren. Die genaue Wertermittlung erfolgt bei der Besichtigung.',
      },
      {
        question: 'Gibt es versteckte Kosten?',
        answer: 'Nein! Unser Festpreis-Angebot beinhaltet alle Leistungen: Anfahrt, Personal, Arbeitsstunden, Entsorgungskosten, Fahrzeugkosten. Nur wenn Sie zusätzliche Leistungen wünschen (z.B. Renovierungsarbeiten), werden diese separat besprochen und berechnet.',
      },
      {
        question: 'Kann die Entrümpelung kostenlos sein?',
        answer: 'In seltenen Fällen, wenn sehr viele hochwertige, verwertbare Gegenstände vorhanden sind, kann die Wertanrechnung die Entrümpelungskosten vollständig decken oder sogar überschreiten. Dies können wir jedoch erst nach der Besichtigung einschätzen.',
      },
      {
        question: 'Welche Zahlungsmethoden akzeptieren Sie?',
        answer: 'Wir akzeptieren Barzahlung, Überweisung und EC-Kartenzahlung. Bei größeren Aufträgen ist auch Ratenzahlung nach Absprache möglich. Die Zahlung erfolgt in der Regel nach Abschluss der Arbeiten.',
      },
    ],
  },
  {
    title: 'Entsorgung & Recycling',
    icon: Recycle,
    faqs: [
      {
        question: 'Was passiert mit den entsorgten Gegenständen?',
        answer: 'Wir entsorgen alle Gegenstände fachgerecht und umweltfreundlich. Verwertbare Möbel und Elektrogeräte werden wiederverwendet oder recycelt. Sperrmüll wird ordnungsgemäß entsorgt. Sondermüll geben wir bei zertifizierten Entsorgungsbetrieben ab. Wir arbeiten mit lokalen Recyclingstationen zusammen.',
      },
      {
        question: 'Entsorgen Sie auch Sondermüll?',
        answer: 'Ja, wir entsorgen fachgerecht: Elektrogeräte, Batterien, Farben und Lacke, Chemikalien, Leuchtstoffröhren, Kühlgeräte. Für besondere Sondermüllarten (z.B. Asbest) arbeiten wir mit spezialisierten Fachbetrieben zusammen.',
      },
      {
        question: 'Was passiert mit persönlichen Dokumenten?',
        answer: 'Persönliche Dokumente, Briefe und Unterlagen werden von uns diskret behandelt. Auf Wunsch können wir diese separat sammeln und Ihnen übergeben oder – nach Ihrer Zustimmung – datenschutzkonform entsorgen bzw. schreddern lassen.',
      },
      {
        question: 'Können Sie auch Möbel transportieren?',
        answer: 'Ja, wir können einzelne Möbelstücke zu Ihnen nach Hause transportieren, zu einer gemeinnützigen Organisation bringen oder zu einem anderen Ort Ihrer Wahl liefern. Dies besprechen wir im Vorfeld.',
      },
    ],
  },
  {
    title: 'Spezielle Dienstleistungen',
    icon: Package,
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen Entrümpelung und Haushaltsauflösung?',
        answer: 'Entrümpelung: Entfernung von Müll, Gerümpel und unerwünschten Gegenständen aus Kellern, Dachböden, Garagen etc. Haushaltsauflösung: Komplette Auflösung eines Haushalts inklusive Verwertung, Verkauf oder Entsorgung aller Gegenstände, oft mit Wertanrechnung. Beide Dienstleistungen bieten wir professionell an.',
      },
      {
        question: 'Bieten Sie auch Endreinigung an?',
        answer: 'Ja, auf Wunsch führen wir nach der Entrümpelung eine besenreine Endreinigung durch. Dazu gehören: Fegen und Wischen aller Räume, Entfernen von Spinnweben und grobem Schmutz, Reinigung der Fenster (optional). So können Sie die Immobilie direkt übergeben oder neu vermieten.',
      },
      {
        question: 'Können Sie auch Messie-Wohnungen entrümpeln?',
        answer: 'Ja, wir haben Erfahrung mit Messie-Haushalten und gehen dabei besonders diskret und sensibel vor. Unser Team arbeitet professionell und respektvoll, ohne zu urteilen. Wir entsorgen alles fachgerecht und hinterlassen die Wohnung besenrein.',
      },
      {
        question: 'Führen Sie auch Gewerbeentrümpelungen durch?',
        answer: 'Ja, wir entrümpeln auch Gewerbeobjekte: Büros, Ladenlokale, Lagerhallen, Praxen, Restaurants. Wir arbeiten auch außerhalb der Geschäftszeiten, um Ihren Betriebsablauf nicht zu stören.',
      },
      {
        question: 'Können Sie auch bei Nachlassauflösungen helfen?',
        answer: 'Ja, wir haben viel Erfahrung mit Nachlassauflösungen und gehen dabei besonders respektvoll und sensibel vor. Wir können auch wertvolle Gegenstände identifizieren und bei der Verwertung helfen. Gerne arbeiten wir auch mit Ihrem Notar oder Nachlassverwalter zusammen.',
      },
    ],
  },
  {
    title: 'Rechtliches & Sicherheit',
    icon: CheckCircle,
    faqs: [
      {
        question: 'Sind Sie versichert?',
        answer: 'Ja, wir verfügen über eine Betriebshaftpflichtversicherung. Sollte während der Entrümpelung ein Schaden entstehen, sind Sie abgesichert. Unsere erfahrenen Mitarbeiter arbeiten jedoch stets sorgfältig, um Schäden zu vermeiden.',
      },
      {
        question: 'Benötige ich eine Genehmigung für die Entrümpelung?',
        answer: 'In der Regel nicht. Lediglich für eine Halteverbotszone auf öffentlichem Grund benötigt man eine Genehmigung, die wir auf Wunsch für Sie beantragen. Ansonsten sind keine besonderen Genehmigungen erforderlich.',
      },
      {
        question: 'Wie gehen Sie mit Datenschutz um?',
        answer: 'Wir behandeln alle persönlichen Daten und Unterlagen streng vertraulich gemäß DSGVO. Alle Mitarbeiter sind zur Verschwiegenheit verpflichtet. Dokumente werden auf Wunsch geschreddert oder datenschutzkonform entsorgt.',
      },
      {
        question: 'Was passiert, wenn ich den Termin absagen muss?',
        answer: 'Kein Problem! Bitte informieren Sie uns so früh wie möglich. Bis 48 Stunden vor dem Termin ist eine kostenlose Stornierung oder Verschiebung möglich. Bei kurzfristigeren Absagen können Stornogebühren anfallen.',
      },
    ],
  },
]

export default function FAQPage() {
  // FAQ Schema für Google (alle FAQs sammeln)
  const allFaqs = faqCategories.flatMap(category => category.faqs)
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      {/* FAQ Schema Markup für Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10" />
          
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <HelpCircle size={16} />
                  <span>Häufig gestellte Fragen</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Fragen & Antworten zur{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    Entrümpelung
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Entrümpelungs- und 
                  Haushaltsauflösungs-Dienstleistungen. Ihre Frage ist nicht dabei? Kontaktieren Sie uns!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+491708005653"
                    className="btn btn-primary text-lg inline-flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>Jetzt anrufen</span>
                  </a>

                  <a
                    href="#kontakt"
                    className="btn btn-secondary text-lg inline-flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>Online anfragen</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`section ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <category.icon className="text-white" size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {category.faqs.map((faq, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="card"
                      >
                        <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-start space-x-2">
                          <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                          <span>{faq.question}</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed ml-7">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ihre Frage nicht dabei?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Kontaktieren Sie uns einfach telefonisch oder per E-Mail. Wir beantworten 
                gerne alle Ihre Fragen zur Entrümpelung und erstellen Ihnen ein kostenloses Angebot.
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
                    <div className="font-semibold">Schnelle Antwort</div>
                    <div className="text-sm text-blue-200">Innerhalb 24h</div>
                  </div>
                  <div>
                    <Euro className="mx-auto mb-2" size={32} />
                    <div className="font-semibold">Kostenlose Beratung</div>
                    <div className="text-sm text-blue-200">Unverbindlich</div>
                  </div>
                  <div>
                    <CheckCircle className="mx-auto mb-2" size={32} />
                    <div className="font-semibold">15+ Jahre Erfahrung</div>
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
