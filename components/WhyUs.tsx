"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Euro, Users, Leaf, Award } from "lucide-react";

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "100% Zuverlässig",
      description: "Versichert, lizenziert und mit jahrelanger Erfahrung",
    },
    {
      icon: Clock,
      title: "Schnelle Termine",
      description: "Oft schon innerhalb von 24-48 Stunden verfügbar",
    },
    {
      icon: Euro,
      title: "Faire Preise",
      description: "Transparente Kalkulation, oft mit Wertanrechnung",
    },
    {
      icon: Users,
      title: "Erfahrenes Team",
      description: "Professionelle Mitarbeiter mit Expertise",
    },
    {
      icon: Leaf,
      title: "Umweltbewusst",
      description: "Fachgerechte Entsorgung und Recycling",
    },
    {
      icon: Award,
      title: "Kundenzufriedenheit",
      description: "4.9/5 Sterne aus über 250+ Bewertungen",
    },
  ];

  return (
    <section id="ueber-uns" className="section-padding bg-gradient-to-br from-white to-secondary-50" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Warum <span className="text-primary-600">Franken-Entrümpelung</span>?
          </h2>
          <p className="text-xl text-secondary-600">
            Über 1000 zufriedene Kunden vertrauen auf unsere Expertise und Zuverlässigkeit
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "1000+", label: "Entrümpelungen" },
            { number: "250+", label: "Bewertungen" },
            { number: "4.9/5", label: "Durchschnitt" },
            { number: "100km", label: "Service-Radius" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-secondary-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

