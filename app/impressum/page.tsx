import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum | Franken-Entrümpelung',
  description: 'Impressum und Kontaktdaten der Franken-Entrümpelung',
}

export default function ImpressumPage() {
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
              Impressum
            </h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Firmenname:</strong><br />
                  Franken-Entrümpelung GbR<br />
                  <br />
                  <strong>Anschrift:</strong><br />
                  Hauptstraße 53<br />
                  90537 Feucht<br />
                  <br />
                  <strong>Vertreten durch die Gesellschafter:</strong><br />
                  Batuhan Karadag<br />
                  Faik Ege Karadag<br />
                  Gökhan Karadag<br />
                  Antonio Campisano
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kontakt
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Telefon:</strong> <a href="tel:+4917080005653" className="text-primary-600 hover:underline">0170 8005653</a><br />
                  <strong>E-Mail:</strong> <a href="mailto:info@franken-entruempelung.de" className="text-primary-600 hover:underline">info@franken-entruempelung.de</a><br />
                  <strong>Website:</strong> <a href="https://franken-entruempelung.vercel.app" className="text-primary-600 hover:underline">www.franken-entruempelung.de</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Umsatzsteuer-ID
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Batuhan Karadag<br />
                  Hauptstraße 53<br />
                  90537 Feucht
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  EU-Streitschlichtung
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline"> https://ec.europa.eu/consumers/odr/</a><br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Haftung für Inhalte
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                  Tätigkeit hinweisen.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Haftung für Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                  Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Urheberrecht
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
  )
}

