'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Mail, Send, CheckCircle } from 'lucide-react'

const CallToAction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="kontakt" className="section bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kostenlose Beratung anfordern
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Kontaktieren Sie uns jetzt für ein unverbindliches Angebot
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Anfrage-Formular
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Vielen Dank!
                </h4>
                <p className="text-gray-600">
                  Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Max Mustermann"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="max@beispiel.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="0911 123456"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ort *
                  </label>
                  <select
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="nuernberg">Nürnberg</option>
                    <option value="fuerth">Fürth</option>
                    <option value="erlangen">Erlangen</option>
                    <option value="feucht">Feucht</option>
                    <option value="wendelstein">Wendelstein</option>
                    <option value="altdorf">Altdorf</option>
                    <option value="lauf">Lauf a.d. Pegnitz</option>
                    <option value="hersbruck">Hersbruck</option>
                    <option value="schwabach">Schwabach</option>
                    <option value="andere">Anderer Ort</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ihre Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary text-lg flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Anfrage senden</span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Direkter Kontakt
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:+491708005653"
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-primary-200 mb-1">Telefon</div>
                    <div className="text-xl font-bold group-hover:underline">
                      0170 800 5653
                    </div>
                    <div className="text-sm text-primary-200 mt-1">
                      Mo-Fr: 7:00-20:00 Uhr<br />Sa: 8:00-18:00 Uhr
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@franken-entrumpelung.de"
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-primary-200 mb-1">E-Mail</div>
                    <div className="text-xl font-bold group-hover:underline">
                      info@franken-entrumpelung.de
                    </div>
                    <div className="text-sm text-primary-200 mt-1">
                      Antwort innerhalb von 24h
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* USPs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Warum uns kontaktieren?
              </h3>

              <ul className="space-y-4">
                {[
                  'Kostenlose & unverbindliche Beratung',
                  'Schnelle Terminvergabe (oft am selben Tag)',
                  'Transparente Festpreise ohne versteckte Kosten',
                  'Professionelles & erfahrenes Team',
                  'Umweltgerechte Entsorgung',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary-200 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

