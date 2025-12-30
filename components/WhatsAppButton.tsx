'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  // WhatsApp Business Link
  // WICHTIG: Ersetze die Nummer mit deiner echten WhatsApp Business Nummer!
  // Format: 49 (Deutschland) + Vorwahl ohne 0 + Rufnummer
  // Beispiel: +49 123 456 7890 wird zu 491234567890
  const whatsappNumber = '491234567890'
  const defaultMessage = 'Hallo! Ich interessiere mich für eine Entrümpelung.'
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-2xl group transition-colors duration-300"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle size={28} className="md:w-8 md:h-8" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Per WhatsApp kontaktieren
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </div>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  )
}

export default WhatsAppButton

