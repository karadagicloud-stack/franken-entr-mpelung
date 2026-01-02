'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-32 h-32 bg-white rounded-3xl shadow-2xl p-6">
            <Image
              src="/logo-original.png"
              alt="Franken-Entrümpelung Logo"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          Wir kommen bald zurück!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-lg font-semibold mb-6">
            🚀 Unsere neue Website startet in Kürze
          </div>

          <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
            Wir arbeiten gerade an unserer neuen Website, um Ihnen den besten Service zu bieten. 
            In der Zwischenzeit erreichen Sie uns telefonisch oder per E-Mail.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Kontaktieren Sie uns
          </h2>

          <div className="space-y-4">
            <a
              href="tel:+491234567890"
              className="flex items-center justify-center space-x-3 text-lg text-gray-700 hover:text-primary-600 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                <Phone className="text-primary-600 group-hover:text-white" size={20} />
              </div>
              <span className="font-semibold">+49 123 456 7890</span>
            </a>

            <a
              href="mailto:info@franken-entruempelung.de"
              className="flex items-center justify-center space-x-3 text-lg text-gray-700 hover:text-primary-600 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                <Mail className="text-primary-600 group-hover:text-white" size={20} />
              </div>
              <span className="font-semibold">info@franken-entruempelung.de</span>
            </a>

            <div className="flex items-center justify-center space-x-3 text-lg text-gray-700">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <MapPin className="text-primary-600" size={20} />
              </div>
              <span className="font-semibold">Nürnberg & Umgebung</span>
            </div>
          </div>
        </motion.div>

        {/* Services Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-600"
        >
          <p className="text-sm mb-2">Unsere Leistungen:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Haushaltsauflösung',
              'Wohnungsauflösung',
              'Kellerentrümpelung',
              'Büroauflösung',
              'Gewerbeentrümpelung',
              'Nachlassauflösung',
            ].map((service) => (
              <span
                key={service}
                className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Franken-Entrümpelung. Alle Rechte vorbehalten.
        </motion.div>
      </motion.div>
    </div>
  )
}
