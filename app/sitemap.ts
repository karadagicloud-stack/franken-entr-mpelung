import { MetadataRoute } from 'next'

/**
 * Sitemap für Google Search Console
 * Zeigt Google alle wichtigen Seiten deiner Website
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://franken-entruempelung.vercel.app'
  
  // Hauptseiten mit hoher Priorität
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0, // Homepage = wichtigste Seite
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
  ]

  // Dienstleistungs-Seiten
  const servicePages = [
    'haushaltsauflosung',
    'wohnungsauflosung',
    'kellerentruempelung',
    'dachbodenentruempelung',
    'geschäftsauflösung',
    'bueroaufloesung',
    'garage-entruempeln',
    'sperrmull-entsorgen',
    'wertanrechnung',
  ].map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Nürnberger Land Seiten (HÖCHSTE PRIORITÄT!)
  const nuernbergerLandPages = [
    'lauf',
    'wendelstein',
    'feucht',
    'altdorf',
    'hersbruck',
    'schwabach',
    'schwarzenbruck',
    'eckental',
    'roethenbach',
    'schnaittach',
  ].map((location) => ({
    url: `${baseUrl}/entruempelung-${location}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.95, // HÖCHSTE Priorität - unser Hauptgebiet!
  }))

  // Großstädte (wichtig, aber sekundär)
  const grossstadtPages = [
    'nuernberg',
    'fuerth',
    'erlangen',
  ].map((location) => ({
    url: `${baseUrl}/entruempelung-${location}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85, // Wichtig, aber nicht Fokus
  }))
  
  // Weitere Umgebung
  const umgebungPages = [
    'roth',
  ].map((location) => ({
    url: `${baseUrl}/entruempelung-${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

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
  ]

  // Falls du später einen Blog hast, kannst du hier Blog-Posts hinzufügen:
  // const blogPosts = [...]

  return [
    ...mainPages,
    ...servicePages,
    ...nuernbergerLandPages,
    ...grossstadtPages,
    ...umgebungPages,
    ...legalPages,
  ]
}

