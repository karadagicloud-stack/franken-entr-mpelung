import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Franken-Entrümpelung',
  description: 'Datenschutzerklärung der Franken-Entrümpelung',
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
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
              Datenschutzerklärung
            </h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="text-yellow-800 font-semibold">
                  ⚠️ WICHTIG: Dies ist eine Basis-Datenschutzerklärung. Sie müssen diese an Ihre 
                  tatsächliche Datenverarbeitung anpassen! Empfehlung: Lassen Sie sich rechtlich beraten 
                  oder nutzen Sie einen professionellen Datenschutz-Generator.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Allgemeine Hinweise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Verantwortliche Stelle
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  [Ihr Name / Ihre Firma]<br />
                  [Straße und Hausnummer]<br />
                  [PLZ] Nürnberg<br /><br />
                  Telefon: [Ihre Telefonnummer]<br />
                  E-Mail: [Ihre E-Mail-Adresse]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Datenerfassung auf dieser Website
                </h2>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Server-Log-Dateien</h3>
                <p className="text-gray-700 leading-relaxed">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung dieser 
                  Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Kontaktformular</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive 
                  aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
                  Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir 
                  nicht ohne Ihre Einwilligung weiter.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Ihre Rechte
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben jederzeit das Recht:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                  <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                  <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                  <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                  <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO)</li>
                  <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
                  <li>Beschwerde bei der Aufsichtsbehörde einzureichen</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Diese Website verwendet keine Cookies zur Analyse des Nutzerverhaltens. Technisch 
                  notwendige Cookies können verwendet werden, um die Funktionalität der Website zu 
                  gewährleisten.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. SSL- bzw. TLS-Verschlüsselung
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                  Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                  daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an 
                  dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Hinweis:</strong> Diese Datenschutzerklärung wurde mit größter Sorgfalt erstellt, 
                  ersetzt jedoch keine individuelle Rechtsberatung. Für eine rechtssichere Datenschutzerklärung 
                  sollten Sie einen Rechtsanwalt oder einen Datenschutz-Generator konsultieren.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

