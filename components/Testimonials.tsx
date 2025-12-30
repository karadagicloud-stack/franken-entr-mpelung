'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Familie Schmidt',
    location: 'Nürnberg',
    rating: 5,
    text: 'Sehr professionelle und schnelle Abwicklung. Die Haushaltsauflösung wurde innerhalb von 2 Tagen erledigt. Faire Preise und nettes Team!',
    service: 'Haushaltsauflösung',
  },
  {
    name: 'Thomas Müller',
    location: 'Fürth',
    rating: 5,
    text: 'Kompetent, zuverlässig und pünktlich. Die Kellerentrümpelung wurde reibungslos durchgeführt. Kann ich nur weiterempfehlen!',
    service: 'Kellerentrümpelung',
  },
  {
    name: 'Andrea Wagner',
    location: 'Erlangen',
    rating: 5,
    text: 'Nach dem Tod meiner Mutter musste die Wohnung aufgelöst werden. Das Team war sehr einfühlsam und hat alles professionell erledigt. Vielen Dank!',
    service: 'Nachlassauflösung',
  },
  {
    name: 'Markus Weber',
    location: 'Feucht',
    rating: 5,
    text: 'Schneller Termin, faire Preisgestaltung und saubere Arbeit. Die Wohnungsauflösung wurde perfekt durchgeführt.',
    service: 'Wohnungsauflösung',
  },
  {
    name: 'Julia Hoffmann',
    location: 'Wendelstein',
    rating: 5,
    text: 'Sehr zufrieden mit dem Service! Pünktlich, freundlich und gründlich. Die Entrümpelung war in kürzester Zeit erledigt.',
    service: 'Entrümpelung',
  },
  {
    name: 'Stefan Bauer',
    location: 'Altdorf',
    rating: 5,
    text: 'Professionelle Büroauflösung mit Aktenvernichtung. Alles lief reibungslos und termingerecht. Absolut empfehlenswert!',
    service: 'Büroauflösung',
  },
]

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <section id="bewertungen" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Über 500 zufriedene Kunden vertrauen auf unseren Service
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">(500+ Bewertungen)</span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Desktop View - 3 Cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card h-full"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-blue-600 font-medium mt-1">
                    {testimonial.service}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet View - 1 Card */}
          <div className="lg:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={18} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              <div className="pt-4 border-t border-gray-100">
                <div className="font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[currentIndex].location}
                </div>
                <div className="text-sm text-blue-600 font-medium mt-1">
                  {testimonials[currentIndex].service}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:bg-blue-50 group"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="text-gray-600 group-hover:text-blue-600" size={24} />
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Gehe zu Testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:bg-blue-50 group"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="text-gray-600 group-hover:text-blue-600" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

