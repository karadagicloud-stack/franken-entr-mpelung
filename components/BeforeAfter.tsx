'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'
import { CheckCircle } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Wohnungsauflösung',
    description: 'Komplette Haushaltsauflösung mit fachgerechter Entsorgung - bereit für den nächsten Mieter',
    beforeImage: '/wohnung-vorher.jpg',
    afterImage: '/wohnung-nachher.jpg',
    details: [
      'Komplette Möbelentsorgung',
      'Besenreine Übergabe',
      'Innerhalb 2 Tagen erledigt',
    ],
  },
  {
    id: 2,
    title: 'Kellerentrümpelung',
    description: 'Von voll zu leer - professionelle Kellerentrümpelung in kurzer Zeit',
    beforeImage: '/keller-vorher.jpg',
    afterImage: '/keller-nachher.jpg',
    details: [
      'Komplette Kellerräumung',
      'Fachgerechte Entsorgung',
      'Schnell & zuverlässig',
    ],
  },
]

const BeforeAfter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Arbeit spricht für sich
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sehen Sie selbst, wie wir Ihre Räume von Chaos zu Ordnung verwandeln. 
            Jedes Projekt wird professionell und mit größter Sorgfalt durchgeführt.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Slider */}
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeLabel="Vorher"
                  afterLabel="Nachher"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <CheckCircle size={16} />
                  <span>Erfolgreich umgesetzt</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="/kontakt"
                    className="btn btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Jetzt kostenlos anfragen</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für Ihr Projekt?
            </h3>
            <p className="text-xl mb-8 text-primary-100">
              Lassen Sie uns auch Ihr Projekt in eine Erfolgsgeschichte verwandeln!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+491708005653"
                className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg"
              >
                Jetzt anrufen
              </a>
              <a
                href="/kontakt"
                className="btn bg-primary-700 hover:bg-primary-800 text-white text-lg"
              >
                Kostenlos anfragen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BeforeAfter

