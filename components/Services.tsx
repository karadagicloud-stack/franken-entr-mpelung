'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Building2, Package, Trash2, Briefcase, DoorOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    icon: Home,
    title: 'Haushaltsauflösung',
    description: 'Komplette Auflösung von Haushalten mit Wertanrechnung und fachgerechter Entsorgung.',
    locations: ['Nürnberg', 'Fürth', 'Erlangen'],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
    link: '/haushaltsaufloesung',
  },
  {
    icon: DoorOpen,
    title: 'Wohnungsauflösung',
    description: 'Professionelle Wohnungsauflösung – schnell, diskret und zuverlässig.',
    locations: ['Altdorf', 'Feucht', 'Wendelstein'],
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&q=80',
    link: '/wohnungsaufloesung',
  },
  {
    icon: Package,
    title: 'Kellerentrümpelung',
    description: 'Entrümpelung von Kellern, Dachböden und Garagen mit Komplettservice.',
    locations: ['Lauf', 'Hersbruck', 'Röthenbach'],
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80',
    link: '/kellerentruempelung',
  },
  {
    icon: Briefcase,
    title: 'Büroauflösung',
    description: 'Auflösung von Büros und Praxen mit Aktenvernichtung und Möbelentsorgung.',
    locations: ['Schwabach', 'Ansbach', 'Nürnberg'],
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
    link: '/bueroaufloesung',
  },
  {
    icon: Building2,
    title: 'Gewerbeentrümpelung',
    description: 'Entrümpelung gewerblicher Objekte jeder Größenordnung.',
    locations: ['Schwaig', 'Neunkirchen', 'Velden'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
    link: '/gewerbeentruempelung',
  },
  {
    icon: Trash2,
    title: 'Nachlassauflösung',
    description: 'Einfühlsame und professionelle Nachlassauflösung mit Wertermittlung.',
    locations: ['Schnaittach', 'Happurg', 'Engelthal'],
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80',
    link: '/nachlassaufloesung',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="leistungen" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der Haushaltsauflösung bis zur Gewerbeentrümpelung – 
            wir bieten maßgeschneiderte Lösungen für jeden Bedarf
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link href={service.link}>
                  <div className="card group cursor-pointer overflow-hidden p-0 h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Icon on Image */}
                      <div className="absolute top-4 left-4">
                        <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="text-primary-600" size={28} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500 mb-2">Beispielorte:</div>
                        <div className="flex flex-wrap gap-2">
                          {service.locations.map((location) => (
                            <span
                              key={location}
                              className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {location}
                            </span>
                          ))}
                          <span className="inline-block bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                            + viele weitere
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/kontakt"
            className="btn btn-primary text-lg inline-flex items-center space-x-2"
          >
            <span>Kostenlose Beratung anfordern</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
