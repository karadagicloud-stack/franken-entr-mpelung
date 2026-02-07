'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Ablauf', href: '/ablauf' },
    { label: 'Gebiete', href: '/gebiete' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Bewertungen', href: '/bewertungen' },
    { label: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-20 h-20 hover:scale-105 transition-transform">
              <Image
                src="/logo-original.png"
                alt="Franken-Entrümpelung Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-900 hover:text-primary-600 font-semibold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <a
                href="https://wa.me/491708005653?text=Hallo!%20Ich%20interessiere%20mich%20für%20eine%20Entrümpelung."
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+491708005653"
                className="btn btn-primary flex items-center space-x-2"
              >
                <Phone size={18} />
                <span>Anrufen</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-900 hover:text-primary-600 font-semibold transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/491708005653?text=Hallo!%20Ich%20interessiere%20mich%20für%20eine%20Entrümpelung."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25D366] hover:bg-[#20BA5A] text-white w-full flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+491708005653"
                  className="btn btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>Anrufen</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
