'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 -z-10" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative isolate">
          {/* Left Content */}
          <div className="relative z-20 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <CheckCircle size={16} />
                <span>Ihr regionaler Partner</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Entrümpelung
                </span>{' '}
                Nürnberger Land
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professionell, schnell und zu fairen Preisen. Ihre Experten für Haushalts- und Gewerbeentrümpelung in der Region.
              </p>

              {/* USPs */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {/* Kostenlose Beratung */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="font-semibold text-gray-700">Kostenlose Beratung</span>
                </motion.div>

                {/* Faire Preise */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="text-primary-600" size={20} />
                  <span className="font-semibold text-gray-700">Faire Preise</span>
                </motion.div>

                {/* Wertanrechnung - Klickbar mit Link */}
                <motion.a
                  href="/wertanrechnung"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 group cursor-pointer"
                >
                  <CheckCircle className="text-primary-600 group-hover:text-primary-700 transition-colors" size={20} />
                  <span className="font-semibold text-gray-700 group-hover:text-primary-700 transition-colors">Wertanrechnung</span>
                  <ArrowRight className="text-primary-600 group-hover:translate-x-1 transition-transform" size={16} />
                </motion.a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="tel:+491708005653"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary text-lg flex items-center justify-center space-x-2 group"
                >
                  <Phone size={20} />
                  <span>Jetzt anrufen</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/kontakt"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary text-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Kostenlos anfragen</span>
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Zufriedenheit</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
                    <div className="text-sm text-gray-600">Rückruf-Garantie</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">5.0★</div>
                    <div className="text-sm text-gray-600">Google Bewertung</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block z-0 w-full overflow-hidden"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl max-w-full">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80"
                alt="Professionelle Entrümpelung Service"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-primary-800/30" />
              
              {/* Logo Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="relative w-48 h-48 bg-white/95 rounded-3xl shadow-2xl p-8">
                  <Image
                    src="/logo-original.png"
                    alt="Franken-Entrümpelung Logo"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 rounded-full p-3">
                  <CheckCircle className="text-primary-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Schnelle Terminvergabe</div>
                  <div className="text-sm text-gray-600">Oft noch am selben Tag</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
