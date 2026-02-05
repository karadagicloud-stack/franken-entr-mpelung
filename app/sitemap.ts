import { MetadataRoute } from 'next'
import { locations, serviceTypes } from '@/lib/locations'

/**
 * Sitemap für Google Search Console
 * Zeigt Google alle wichtigen Seiten deiner Website
 * ALLE 369 Landing Pages werden automatisch generiert!
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.franken-entrumpelung.de'
  
  // Hauptseiten mit hoher Priorität
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gebiete`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bewertungen`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ablauf`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dienstleistungs-Seiten
  const servicePages = [
    'haushaltsaufloesung',
    'wohnungsaufloesung',
    'kellerentruempelung',
    'bueroaufloesung',
    'nachlassaufloesung',
    'gewerbeentruempelung',
    'wertanrechnung',
  ].map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ALLE dynamischen Landing Pages generieren!
  // Für jede Location × jeden Service-Typ = 123 × 3 = 369 Seiten!
  const dynamicPages: MetadataRoute.Sitemap = []
  
  locations.forEach((location) => {
    serviceTypes.forEach((service) => {
      // Priorität basierend auf Location-Priorität
      let priority = 0.8
      if (location.priority === 'high') priority = 0.9
      if (location.priority === 'medium') priority = 0.85
      
      dynamicPages.push({
        url: `${baseUrl}/${service.slug}-${location.slug}`,
        lastModified: new Date(),
        changeFrequency: location.priority === 'high' ? 'weekly' : 'monthly' as const,
        priority: priority,
      })
    })
  })

  // Rechtliche Seiten
  const legalPages = [
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return [
    ...mainPages,
    ...servicePages,
    ...dynamicPages, // ALLE 369 Landing Pages!
    ...legalPages,
  ]
}

