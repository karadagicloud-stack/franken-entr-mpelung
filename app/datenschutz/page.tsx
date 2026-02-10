import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Franken-Entrümpelung',
  description: 'Datenschutzerklärung der Franken-Entrümpelung',
}

export default function DatenschutzPage() {
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
              Datenschutzerklärung
            </h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Allgemeine Hinweise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem 
                  Text aufgeführten Datenschutzerklärung.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen 
                  Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser 
                  Datenschutzerklärung entnehmen.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
                  es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten 
                  werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, 
                  Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
                  gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden, 
                  sofern Sie dem zugestimmt haben. Hauptsächlich werden die Daten genutzt, um Ihre 
                  Anfragen zu bearbeiten und mit Ihnen in Kontakt zu treten.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                  Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
                  Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
                  Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                  Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Verantwortliche Stelle
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  <strong>Franken-Entrümpelung GbR</strong><br />
                  Vertreten durch die Gesellschafter:<br />
                  Batuhan Karadag, Faik Ege Karadag, Gökhan Karadag, Antonio Campisano<br /><br />
                  Hauptstraße 53<br />
                  90537 Feucht<br /><br />
                  Telefon: <a href="tel:+4917080005653" className="text-primary-600 hover:underline">0170 8005653</a><br />
                  E-Mail: <a href="mailto:info@franken-entrumpelung.de" className="text-primary-600 hover:underline">info@franken-entrumpelung.de</a>
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder 
                  gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen 
                  Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Hosting
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Externes Hosting</h3>
                <p className="text-gray-700 leading-relaxed">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website 
                  erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann 
                  es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                  Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert 
                  werden, handeln.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen 
                  und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, 
                  schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen 
                  Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt 
                  wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO 
                  und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff 
                  auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG 
                  umfasst.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner 
                  Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Wir setzen folgenden Hoster ein:</strong><br />
                  Vercel Inc.<br />
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789<br />
                  USA
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Datenschutz</h3>
                <p className="text-gray-700 leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir 
                  behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                  Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
                  Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie 
                  nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation 
                  per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem 
                  Zugriff durch Dritte ist nicht möglich.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Speicherdauer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                  verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung 
                  entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur 
                  Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich 
                  zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder 
                  handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach 
                  Fortfall dieser Gründe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Datenerfassung auf dieser Website
                </h2>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Server-Log-Dateien</h3>
                <p className="text-gray-700 leading-relaxed">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der 
                  Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung 
                  und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Kontaktformular</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern 
                  Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung 
                  auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten 
                  Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a 
                  DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur 
                  Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die 
                  Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende 
                  gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive 
                  aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
                  Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir 
                  nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern 
                  Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung 
                  auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten 
                  Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a 
                  DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns 
                  zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die 
                  Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende 
                  gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Plugins und Tools
                </h2>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">Google Fonts (lokales Hosting)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, 
                  die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine 
                  Verbindung zu Servern von Google findet dabei nicht statt.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Weitere Informationen zu Google Fonts finden Sie unter{' '}
                  <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    https://developers.google.com/fonts/faq
                  </a>{' '}
                  und in der Datenschutzerklärung von Google:{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    https://policies.google.com/privacy
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Ihre Rechte
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
                  personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung 
                  sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren 
                  Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung 
                  eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, 
                  maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der 
                  Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch 
                  machbar ist.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Auskunft, Löschung und Berichtigung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf 
                  unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft 
                  und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder 
                  Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten 
                  können Sie sich jederzeit an uns wenden.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu 
                  verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der 
                  Verarbeitung besteht in folgenden Fällen:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                  <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                  <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese 
                  Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, 
                  Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen 
                  natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses 
                  der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Widerspruch gegen Werbe-E-Mails</h3>
                <p className="text-gray-700 leading-relaxed">
                  Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur 
                  Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird 
                  hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche 
                  Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, 
                  vor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. SSL- bzw. TLS-Verschlüsselung
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                  Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber 
                  senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                  daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem 
                  Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns 
                  übermitteln, nicht von Dritten mitgelesen werden.
                </p>
              </section>

              <section className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Hinweis zur Datenschutzerklärung
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Diese Datenschutzerklärung wurde auf Basis der geltenden DSGVO-Anforderungen erstellt. 
                  Stand: Februar 2026. Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit 
                  sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer 
                  Leistungen in der Datenschutzerklärung umzusetzen.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mt-3">
                  Quelle: Erstellt mit Unterstützung von e-recht24.de und angepasst für Franken-Entrümpelung GbR.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
  )
}

