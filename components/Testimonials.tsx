'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Jan K',
    location: 'Google Rezension',
    rating: 5,
    text: 'Super kompetente und freundliche Mitarbeiter. Arbeiten sorgfältig und ordentlich. Würde den Service jederzeit wieder in Anspruch nehmen.',
    service: 'Entrümpelung',
  },
  {
    name: 'Joel Wüstenberg',
    location: 'Google Rezension',
    rating: 5,
    text: 'Unkompliziert! Kontaktieren & beauftragen, mehr gibt es nicht zu sagen!',
    service: 'Entrümpelung',
  },
  {
    name: 'Emil Venus',
    location: 'Local Guide',
    rating: 5,
    text: 'Als das Haus meiner Verwandten ausgeräumt werden musste waren sie sehr zuverlässig und schnell, gerne wieder!',
    service: 'Haushaltsauflösung',
  },
  {
    name: 'Kaan Gürbüz',
    location: 'Local Guide',
    rating: 5,
    text: 'Bei Franken-Entrümpelung handelt es sich um ein hervorragendes Unternehmen. Die versprochenen Leistungszeiten werden pflichtgemäß eingehalten. Mit Herrn Karadag hat man einen sehr freundlichen und kompetenten Ansprechpartner. Wahrlich ein Top-Service.',
    service: 'Verifizierte Bewertung',
  },
  {
    name: 'Kerem',
    location: 'Google Rezension',
    rating: 5,
    text: 'Sehr zuverlässige Entrümpelungsfirma. Terminabsprache lief problemlos, das Team war pünktlich, freundlich und hat sauber gearbeitet. Preis wie vereinbart, keine versteckten Kosten. Klare Weiterempfehlung.',
    service: 'Entrümpelung',
  },
  {
    name: 'Can Tekin',
    location: 'Google Rezension',
    rating: 5,
    text: 'Ich bin sehr zufrieden mit der Entrümpelung meiner alten Wohnung. Von der ersten Kontaktaufnahme bis zur Durchführung lief alles reibungslos. Pünktlich, sauber gearbeitet und sehr freundlich. Preis-Leistung stimmt auf jeden Fall.',
    service: 'Wohnungsentrümpelung',
  },
  {
    name: 'Mehmet',
    location: 'Google Rezension',
    rating: 5,
    text: 'Sehr zuverlässiger und schneller Service! Alles wurde sauber und professionell erledigt. Absolut empfehlenswert!',
    service: 'Entrümpelung',
  },
  {
    name: 'Ümit Kazmacan',
    location: 'Google Rezension',
    rating: 5,
    text: 'Ich war sehr zufrieden mit der Entrümpelung. Es verlief alles sehr schnell und kostengünstiger als bei der Konkurrenz, zuverlässig und sauber. Nur weiter zu empfehlen!',
    service: 'Entrümpelung',
  },
  {
    name: 'R S',
    location: 'Google Rezension',
    rating: 5,
    text: 'Super kompetent! Habe diese Firma für die Entrümpelung meines Kellers kontaktiert! Preislich top! Ging ganz flott und super freundlicher Kundenservice! Absolute Empfehlung!',
    service: 'Kellerentrümpelung',
  },
  {
    name: 'Maël',
    location: 'Google Rezension',
    rating: 5,
    text: 'Nach dem Tod eines nahen Angehörigen in Deutschland habe ich dieses Unternehmen mit der kompletten Reinigung eines Hauses beauftragt. Die Arbeit wurde schnell, mit viel Sorgfalt und Professionalität erledigt. Das Team war pünktlich und sehr effizient.',
    service: 'Haushaltsauflösung',
  },
  {
    name: 'Boris Jamchtchik',
    location: 'Local Guide',
    rating: 5,
    text: 'Ein ehemaliger Mieter hat die ganze Wohnungseinrichtung inkl. Müll in der Wohnung gelassen. Das Team von Franken Entrümpelung hat innerhalb von einem Tag die ganze Wohnung entrümpt, trotz 6. Stock ohne Aufzug! Professionell und zuverlässig.',
    service: 'Wohnungsentrümpelung',
  },
  {
    name: 'Samet Sahan',
    location: 'Google Rezension',
    rating: 5,
    text: 'Ich bin mit der Entrümpelung sehr zufrieden! Das Team war schnell, professionell und hat alles ordentlich hinterlassen. Ich hatte zwei volle Zimmer zum Entrümpeln, und sie haben alles super erledigt.',
    service: 'Entrümpelung',
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
            Echte Bewertungen von echten Kunden auf Google
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0/5</span>
            <span className="text-gray-600">(Google Bewertungen)</span>
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

