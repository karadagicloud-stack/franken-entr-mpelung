'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Shield, Euro, Truck, Recycle, Award, Coins, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Clock,
    title: 'Schnelle Termine',
    description: 'Oft noch am selben oder nächsten Tag – wir sind flexibel und schnell vor Ort.',
    link: null,
  },
  {
    icon: Shield,
    title: 'Voll versichert',
    description: 'Haftpflicht- und Transportversicherung für Ihre Sicherheit inklusive.',
    link: null,
  },
  {
    icon: Coins,
    title: 'Wertanrechnung & Ankauf',
    description: 'Wir kaufen verwertbare Gegenstände wie Möbel, Elektrogeräte und Antiquitäten an. Der Wert wird direkt verrechnet oder ausgezahlt.',
    link: '/wertanrechnung',
  },
  {
    icon: Euro,
    title: 'Faire Preise',
    description: 'Transparente Preisgestaltung ohne versteckte Kosten. Kostenlose Besichtigung.',
    link: null,
  },
  {
    icon: Truck,
    title: 'Komplettservice',
    description: 'Von der Entrümpelung bis zur Endreinigung – alles aus einer Hand.',
    link: null,
  },
  {
    icon: Recycle,
    title: 'Umweltgerecht',
    description: 'Fachgerechte Entsorgung und Recycling gemäß allen Vorschriften.',
    link: null,
  },
]

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Warum Franken-Entrümpelung?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ihr verlässlicher Partner für professionelle Entrümpelungen in der Region
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const content = (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-between">
                    {feature.title}
                    {feature.link && (
                      <ArrowRight className="text-primary-600 group-hover:translate-x-1 transition-transform" size={20} />
                    )}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {feature.link && (
                    <div className="mt-4">
                      <span className="text-primary-600 font-semibold text-sm group-hover:underline">
                        Mehr erfahren →
                      </span>
                    </div>
                  )}
                </div>
              </>
            )

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                {feature.link ? (
                  <Link href={feature.link} className="block h-full">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features

