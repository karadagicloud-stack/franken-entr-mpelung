import { MetadataRoute } from 'next'

/**
 * Robots.txt für SEO-Optimierung
 * Sagt Google-Bots welche Seiten sie crawlen dürfen
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // Alle Bots (Google, Bing, etc.)
        allow: '/', // Alle Seiten erlaubt
        disallow: [
          '/api/', // API-Routen nicht crawlen
          '/_next/', // Next.js interne Dateien
          '/private/', // Falls du private Seiten hast
        ],
      },
      {
        userAgent: 'Googlebot', // Spezielle Regeln für Google
        allow: '/',
        crawlDelay: 0, // Keine Verzögerung (schneller crawlen!)
      },
    ],
    sitemap: 'https://www.franken-entrumpelung.de/sitemap.xml',
    host: 'https://www.franken-entrumpelung.de',
  }
}

