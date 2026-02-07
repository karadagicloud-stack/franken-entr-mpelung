'use client'

import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Haushaltsauflösung', href: '/haushaltsaufloesung-nuernberg' },
      { label: 'Wohnungsauflösung', href: '/wohnungsaufloesung-nuernberg' },
      { label: 'Kellerentrümpelung', href: '#leistungen' },
      { label: 'Büroauflösung', href: '#leistungen' },
      { label: 'Gewerbeentrümpelung', href: '#leistungen' },
      { label: 'Nachlassauflösung', href: '#leistungen' },
      { label: 'Wertanrechnung & Ankauf', href: '/wertanrechnung' },
    ],
    areas: [
      { label: 'Entrümpelung Nürnberg', href: '/entruempelung-nuernberg' },
      { label: 'Entrümpelung Fürth', href: '/entruempelung-fuerth' },
      { label: 'Entrümpelung Erlangen', href: '/entruempelung-erlangen' },
      { label: 'Entrümpelung Feucht', href: '/entruempelung-feucht' },
      { label: 'Entrümpelung Wendelstein', href: '/entruempelung-wendelstein' },
      { label: 'Entrümpelung Altdorf', href: '/entruempelung-altdorf' },
    ],
    company: [
      { label: 'Über uns', href: '#' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Kontakt', href: '#kontakt' },
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'AGB', href: '/agb' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/logo-original.png"
                alt="Franken-Entrümpelung Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Ihr zuverlässiger Partner für professionelle Entrümpelungen in Nürnberg und Umgebung.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+491708005653"
                className="flex items-center space-x-3 hover:text-primary-400 transition-colors"
              >
                <Phone size={18} />
                <span>0170 800 5653</span>
              </a>
              <a
                href="https://wa.me/491708005653?text=Hallo!%20Ich%20interessiere%20mich%20für%20eine%20Entrümpelung."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:info@franken-entruempelung.de"
                className="flex items-center space-x-3 hover:text-primary-400 transition-colors"
              >
                <Mail size={18} />
                <span>info@franken-entruempelung.de</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>Nürnberg, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Servicegebiete</h3>
            <ul className="space-y-2">
              {footerLinks.areas.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Unternehmen</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-3">Folgen Sie uns</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Franken-Entrümpelung. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/impressum" className="hover:text-primary-400 transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-primary-400 transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="hover:text-primary-400 transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

