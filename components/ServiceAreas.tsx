'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { locations } from '@/lib/locations'

const ServiceAreas = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highPriorityLocations = locations.filter((location) => location.priority === 'high')
  const mediumPriorityLocations = locations.filter((location) => location.priority === 'medium')
  const mainAreas = highPriorityLocations.slice(0, 8)
  const otherAreas = mediumPriorityLocations.slice(0, 16)
  const activeLocations = highPriorityLocations.length + mediumPriorityLocations.length
  const displayedLocations = mainAreas.length + otherAreas.length

  return (
    <section id="gebiete" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entrümpelung im Nürnberger Land & Metropolregion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Spezialisiert auf Lauf, Wendelstein, Altdorf, Hersbruck, Schwabach, Zirndorf, Stein und Oberasbach</strong>
            <br />
            <span className="text-lg">Auch in Nürnberg, Fürth, Erlangen und der gesamten Region aktiv</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mainAreas.map((location, index) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/entruempelung-${location.slug}`}>
                <div className="card h-full group cursor-pointer bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 hover:border-primary-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-gray-600">{location.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="card bg-white"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Weitere wichtige Servicegebiete:</h3>
            <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold">
              {activeLocations - displayedLocations}+ weitere Orte
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherAreas.map((location) => (
              <Link key={location.slug} href={`/entruempelung-${location.slug}`}>
                <div className="group p-4 rounded-xl hover:bg-primary-50 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary-600 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {location.name}
                      </div>
                      <div className="text-sm text-gray-500">{location.distance} Entfernung</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 p-4 bg-primary-50 rounded-xl">
            <div className="text-gray-700 space-y-3">
              <div>
                <strong className="text-gray-900">Haupteinsatzgebiet:</strong> Nürnberger Land & Metropolregion Nürnberg
              </div>
              <div>
                <strong className="text-gray-900">Spezialisiert auf:</strong> Lauf, Wendelstein, Altdorf, Hersbruck, Schwabach, Zirndorf, Stein, Oberasbach
              </div>
              <div>
                <strong className="text-gray-900">Auch verfügbar in:</strong> Nürnberg, Fürth, Erlangen & Umgebung
              </div>
              <div>
                <strong className="text-gray-900">Abgedeckte Orte:</strong> {activeLocations}+ Städte und Gemeinden
              </div>
              <div className="text-sm text-gray-600 pt-2 border-t border-primary-100">
                Landkreise: Nürnberger Land, Fürth, Roth, Erlangen-Höchstadt
              </div>
              <div className="text-sm font-semibold text-primary-700 pt-1">
                Standort Feucht – Ihr regionaler Partner für die gesamte Metropolregion
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ihr Ort ist nicht aufgeführt?</h3>
            <p className="text-xl mb-6 text-primary-100">
              Kein Problem! Wir sind flexibel und kommen auch gerne zu Ihnen – fragen Sie uns einfach unverbindlich an!
            </p>
            <a
              href="tel:+491708005653"
              className="btn bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Jetzt anrufen</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceAreas
