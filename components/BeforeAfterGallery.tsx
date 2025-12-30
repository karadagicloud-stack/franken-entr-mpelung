'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Haushaltsauflösung Nürnberg',
    before: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'Komplette Entrümpelung eines 4-Zimmer-Hauses in Nürnberg',
  },
  {
    id: 2,
    title: 'Kellerentrümpelung Fürth',
    before: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
    description: 'Vollständige Entrümpelung und Reinigung eines 80m² Kellers',
  },
  {
    id: 3,
    title: 'Wohnungsauflösung Erlangen',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    description: '3-Zimmer Wohnung besenrein übergeben',
  },
]

const BeforeAfterGallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeProject, setActiveProject] = useState(0)

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
            Vorher & Nachher
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sehen Sie selbst, wie wir aus vollgestellten Räumen saubere und aufgeräumte Flächen machen
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Project Selector */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeProject === index
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {project.title}
              </motion.button>
            ))}
          </div>

          {/* Before/After Images */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 mb-8"
          >
            {/* Before */}
            <div className="relative group">
              <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                VORHER
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={projects[activeProject].before}
                  alt={`Vorher - ${projects[activeProject].title}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* After */}
            <div className="relative group">
              <div className="absolute top-4 left-4 z-10 bg-primary-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                NACHHER
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={projects[activeProject].after}
                  alt={`Nachher - ${projects[activeProject].title}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            key={`desc-${activeProject}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 mb-6">
              {projects[activeProject].description}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-primary-600 font-semibold">
                <span>Besenreine Übergabe</span>
                <ArrowRight className="animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Möchten Sie auch solche Ergebnisse? Kontaktieren Sie uns für ein unverbindliches Angebot!
          </p>
          <a
            href="/kontakt"
            className="btn btn-primary text-lg inline-flex items-center space-x-2"
          >
            <span>Jetzt Angebot einholen</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default BeforeAfterGallery

