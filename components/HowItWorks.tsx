'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Calendar, Truck, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const steps = [
  {
    icon: Phone,
    title: 'Kontaktaufnahme',
    description: 'Rufen Sie uns an oder nutzen Sie unser Kontaktformular. Wir beraten Sie kostenlos und unverbindlich.',
    color: 'from-primary-600 to-primary-700',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
  },
  {
    icon: Calendar,
    title: 'Besichtigung & Angebot',
    description: 'Wir besichtigen das Objekt vor Ort, schätzen verwertbare Gegenstände und erstellen ein transparentes Festpreis-Angebot mit Wertanrechnung.',
    color: 'from-primary-600 to-primary-700',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80',
  },
  {
    icon: Truck,
    title: 'Entrümpelung',
    description: 'Zum vereinbarten Termin führen wir die Entrümpelung professionell und zügig durch.',
    color: 'from-primary-500 to-primary-600',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80',
  },
  {
    icon: CheckCircle,
    title: 'Übergabe',
    description: 'Nach Wunsch reinigen wir die Räume besenrein und übergeben das Objekt schlüsselfertig.',
    color: 'from-primary-400 to-primary-500',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
  },
]

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ablauf" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            So einfach geht's
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In 4 Schritten zur erfolgreichen Entrümpelung
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400 -z-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative pt-8"
                >
                  {/* Schlichte Zahl ÜBER dem Bild */}
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary-600">
                      <span className="text-xl font-bold text-primary-600">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="card text-center h-full overflow-hidden p-0">
                    {/* Image */}
                    <div className="relative h-40 mb-4">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      {/* Icon on Image */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="text-white" size={28} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12 relative z-10"
        >
          <a
            href="tel:+491708005653"
            className="btn btn-primary text-lg inline-flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>Jetzt Beratung anfordern</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
