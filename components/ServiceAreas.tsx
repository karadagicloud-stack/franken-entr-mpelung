'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { locations } from '@/lib/locations'

const serviceAreas = [
  {
    name: 'Nürnberg',
    description: 'Entrümpelung in allen Stadtteilen',
    link: '/entruempelung-nuernberg',
    isMain: true,
  },
  {
    name: 'Fürth',
    description: 'Schneller Service in Fürth',
    link: '/entruempelung-fuerth',
    isMain: true,
  },
  {
    name: 'Erlangen',
    description: 'Professionell in Erlangen',
    link: '/entruempelung-erlangen',
    isMain: true,
  },
  {
    name: 'Feucht',
    description: 'Zuverlässig vor Ort',
    link: '/entruempelung-feucht',
  },
  {
    name: 'Wendelstein',
    description: 'Ihr Partner in Wendelstein',
    link: '/entruempelung-wendelstein',
  },
  {
    name: 'Altdorf',
    description: 'Kompetent in Altdorf',
    link: '/entruempelung-altdorf',
  },
  {
    name: 'Lauf',
    description: 'Service in Lauf a.d. Pegnitz',
    link: '/entruempelung-lauf',
  },
  {
    name: 'Hersbruck',
    description: 'Entrümpelung in Hersbruck',
    link: '/entruempelung-hersbruck',
  },
  {
    name: 'Schwabach',
    description: 'Komplett-Service',
    link: '/entruempelung-schwabach',
  },
  {
    name: 'Röthenbach',
    description: 'Schnell & günstig',
    link: '/entruempelung-roethenbach',
  },
  {
    name: 'Schwaig',
    description: 'Professionelle Hilfe',
    link: '/entruempelung-schwaig',
  },
  {
    name: 'Neunkirchen',
    description: 'Zuverlässiger Partner',
    link: '/entruempelung-neunkirchen',
  },
]

const ServiceAreas = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Nur wichtige Orte für die Anzeige
  const mainAreas = serviceAreas.filter(area => area.isMain)
  const otherAreas = serviceAreas.filter(area => !area.isMain)
  
  // Zähle ALLE verfügbaren Locations
  const totalLocations = locations.length
  const displayedLocations = serviceAreas.length

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
            Unsere Servicegebiete
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir sind in Nürnberg, dem gesamten Nürnberger Land und Umgebung für Sie da
          </p>
        </motion.div>

        {/* Main Cities */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mainAreas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={area.link}>
                <div className="card h-full group cursor-pointer bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 hover:border-primary-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {area.name}
                      </h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Other Cities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="card bg-white"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Weitere Servicegebiete:
            </h3>
            <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold">
              {totalLocations - displayedLocations}+ weitere Orte
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherAreas.map((area) => (
              <Link key={area.name} href={area.link}>
                <div className="group p-4 rounded-xl hover:bg-primary-50 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary-600 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {area.name}
                      </div>
                      <div className="text-sm text-gray-500">{area.description}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 p-4 bg-primary-50 rounded-xl text-center">
            <p className="text-gray-700">
              <strong>Gesamter Service-Radius:</strong> 70km von Feucht<br />
              <strong>Abgedeckte Orte:</strong> {totalLocations}+ Städte und Gemeinden<br />
              <span className="text-sm text-gray-600 mt-2 block">
                Alle Orte im Nürnberger Land, Landkreis Roth, Erlangen-Höchstadt und weitere
              </span>
            </p>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ihr Ort ist nicht dabei?
            </h3>
            <p className="text-xl mb-6 text-primary-100">
              Wir bedienen auch viele weitere Orte im Umkreis von 100km. Fragen Sie einfach an!
            </p>
            <a
              href="tel:+491234567890"
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
