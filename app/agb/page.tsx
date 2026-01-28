import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AGB | Franken-Entrümpelung',
  description: 'Allgemeine Geschäftsbedingungen der Franken-Entrümpelung',
}

export default function AGBPage() {
  return (
      <main className="pt-32 pb-16">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Allgemeine Geschäftsbedingungen (AGB)
            </h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="text-yellow-800 font-semibold">
                  ⚠️ WICHTIG: Dies sind Muster-AGB. Sie müssen diese an Ihr Geschäftsmodell anpassen! 
                  Empfehlung: Lassen Sie Ihre AGB von einem Fachanwalt prüfen.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  § 1 Geltungsbereich
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  (1) Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen 
                  [Ihr Firmenname] (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber") 
                  über Entrümpelungs- und Entsorgungsdienstleistungen.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (2) Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, 
                  der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  § 2 Vertragsschluss
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  (1) Der Vertrag kommt durch schriftliches oder mündliches Angebot und dessen Annahme zustande.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (2) Angebote des Auftragnehmers sind freibleibend, sofern nicht ausdrücklich etwas anderes 
                  vereinbart wurde.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  § 3 Leistungsumfang
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  (1) Der Umfang der zu erbringenden Leistungen ergibt sich aus der Leistungsbeschreibung 
                  im Angebot bzw. Auftrag.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (2) Zusatzleistungen, die nicht im Angebot enthalten sind, werden gesondert berechnet.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (3) Der Auftraggeber hat dem Auftragnehmer alle für die Durchführung der Arbeiten 
                  notwendigen Informationen rechtzeitig zur Verfügung zu stellen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  § 4 Preise und Zahlung
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  (1) Es gelten die im Angebot genannten Preise. Alle Preise verstehen sich inklusive 
                  der gesetzlichen Mehrwertsteuer.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (2) Die Zahlung ist sofort nach Leistungserbringung fällig, sofern nichts anderes 
                  vereinbart wurde.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (3) Bei Zahlungsverzug werden Verzugszinsen in Höhe von 5 Prozentpunkten über dem 
                  Basiszinssatz berechnet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  § 5 Terminvereinbarung und Durchführung
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  (1) Termine werden nach Absprache zwischen Auftraggeber und Auftragnehmer vereinbart.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (2) Der Auftraggeber hat sicherzustellen, dass das zu entrümpelnde Objekt zum 
                  vereinbarten Termin zugänglich ist.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (3) Kann der vereinbarte Termin aus vom Auftraggeber zu vertretenden Gründen nicht 
                  eingehalten werden, behält sich der Auftragnehmer das Recht vor, eine 
                  Ausfallpauschale zu berechnen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  § 6 Haftung
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  (1) Der Auftragnehmer haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (2) Der Auftraggeber ist verpflichtet, wertvolle oder empfindliche Gegenstände vor 
                  Beginn der Arbeiten zu kennzeichnen oder zu entfernen.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (3) Eine Haftung für versteckte Mängel am Objekt ist ausgeschlossen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  § 7 Entsorgung und Verwertung
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  (1) Die Entsorgung erfolgt fachgerecht gemäß den gesetzlichen Bestimmungen.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (2) Verwertbare Gegenstände können nach Absprache mit dem Auftraggeber verkauft und 
                  der Erlös mit den Gesamtkosten verrechnet werden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  § 8 Widerrufsrecht
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Die Widerrufsbelehrung ist 
                  Bestandteil des Vertrags.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  § 9 Schlussbestimmungen
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  (1) Es gilt das Recht der Bundesrepublik Deutschland.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (2) Gerichtsstand ist Nürnberg, sofern der Auftraggeber Kaufmann ist.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit 
                  der übrigen Bestimmungen hiervon unberührt.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg mt-8">
                <p className="text-sm text-gray-600">
                  <strong>Stand:</strong> [Datum einfügen]<br />
                  [Ihr Firmenname]<br />
                  [Adresse]
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
  )
}

