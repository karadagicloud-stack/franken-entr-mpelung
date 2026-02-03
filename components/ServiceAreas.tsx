'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { locations } from '@/lib/locations'

const serviceAreas = [
  {
    name: 'Lauf a.d. Pegnitz',
    description: '✨ Unser Hauptgebiet - nur 10km!',
    link: '/entruempelung-lauf',
    isMain: true,
  },
  {
    name: 'Wendelstein',
    description: '✨ Regional & schnell - 7km Entfernung',
    link: '/entruempelung-wendelstein',
    isMain: true,
  },
  {
    name: 'Feucht',
    description: '🏠 Unser Heimatort - vor Ort!',
    link: '/entruempelung-feucht',
    isMain: true,
  },
  {
    name: 'Altdorf',
    description: '✨ Ihr Partner im Nürnberger Land',
    link: '/entruempelung-altdorf',
    isMain: true,
  },
  {
    name: 'Hersbruck',
    description: '✨ Zuverlässig im Nürnberger Land',
    link: '/entruempelung-hersbruck',
    isMain: true,
  },
  {
    name: 'Schwabach',
    description: '✨ Professionell & regional',
    link: '/entruempelung-schwabach',
    isMain: true,
  },
  {
    name: 'Zirndorf',
    description: '✨ Schnell & zuverlässig - 22km',
    link: '/entruempelung-zirndorf',
    isMain: true,
  },
  {
    name: 'Stein',
    description: '✨ Service bei Nürnberg - 16km',
    link: '/entruempelung-stein',
    isMain: true,
  },
  {
    name: 'Oberasbach',
    description: '✨ Kompetent & nah - 18km',
    link: '/entruempelung-oberasbach',
    isMain: true,
  },
  {
    name: 'Schwarzenbruck',
    description: 'Ihr Nachbar - nur 8km',
    link: '/entruempelung-schwarzenbruck',
  },
  {
    name: 'Eckental',
    description: 'Zuverlässig - 22km',
    link: '/entruempelung-eckental',
  },
  {
    name: 'Langenzenn',
    description: 'Professionell - 30km',
    link: '/entruempelung-langenzenn',
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
    name: 'Schnaittach',
    description: 'Service im Nürnberger Land',
    link: '/entruempelung-schnaittach',
  },
  {
    name: 'Nürnberg',
    description: 'Auch in der Großstadt für Sie da',
    link: '/entruempelung-nuernberg',
  },
  {
    name: 'Fürth',
    description: 'Service auch in Fürth',
    link: '/entruempelung-fuerth',
  },
  {
    name: 'Erlangen',
    description: 'Auch in Erlangen verfügbar',
    link: '/entruempelung-erlangen',
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
            Entrümpelung im Nürnberger Land & Metropolregion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Spezialisiert auf Lauf, Wendelstein, Altdorf, Hersbruck & Region</strong><br />
            <span className="text-lg">Auch in Zirndorf, Stein, Oberasbach, Nürnberg, Fürth, Erlangen</span>
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
              <strong>🏠 Unser Haupteinsatzgebiet:</strong> Nürnberger Land & Metropolregion Nürnberg<br />
              <strong>💚 Spezialisiert auf:</strong> Lauf, Wendelstein, Altdorf, Hersbruck, Schwabach, Zirndorf, Stein, Oberasbach<br />
              <strong>✅ Auch verfügbar:</strong> Nürnberg, Fürth, Erlangen & Umgebung<br />
              <strong>📍 Abgedeckte Orte:</strong> {totalLocations}+ Städte und Gemeinden<br />
              <span className="text-sm text-gray-600 mt-2 block">
                Landkreise: Nürnberger Land, Fürth, Roth, Erlangen-Höchstadt
              </span>
              <span className="text-sm font-semibold text-primary-700 mt-2 block">
                Regional aus Feucht - Ihr lokaler Partner! ❤️
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
              Ihr Ort ist nicht aufgeführt?
            </h3>
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
