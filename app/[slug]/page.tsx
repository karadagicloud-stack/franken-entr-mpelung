import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import LocalServicePage from '@/components/LocalServicePage'
import { locations, serviceTypes } from '@/lib/locations'

// Parse slug like "entruempelung-nuernberg" into service and location
function parseSlug(slug: string): { service: string; location: string } | null {
  // Try each service type to see if slug starts with it
  for (const service of serviceTypes) {
    if (slug.startsWith(service.slug + '-')) {
      const location = slug.substring(service.slug.length + 1)
      return { service: service.slug, location }
    }
  }
  return null
}

// Generate static params only for high and medium priority locations.
// Low-priority locations have near-identical thin content which hurts domain authority.
export async function generateStaticParams() {
  const params = []

  for (const location of locations) {
    if (location.priority === 'low') continue
    for (const service of serviceTypes) {
      params.push({
        slug: `${service.slug}-${location.slug}`,
      })
    }
  }

  return params
}

// Generate metadata for each page
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const parsed = parseSlug(params.slug)
  if (!parsed) {
    return { title: 'Seite nicht gefunden' }
  }

  const location = locations.find((l) => l.slug === parsed.location)
  const service = serviceTypes.find((s) => s.slug === parsed.service)

  if (!location || !service) {
    return {
      title: 'Seite nicht gefunden',
    }
  }

  const title = `${service.title} in ${location.name} | Professionell, schnell & fair`
  const description = `${service.description} in ${location.name}. Ihre regionale Adresse für ${service.title.toLowerCase()} im Nürnberger Land mit schneller Anfahrt und fairen Festpreisen.`
  const isLowPriority = location.priority === 'low'

  return {
    title,
    description,
    keywords: [
      `${service.slug} ${location.name}`,
      `${service.slug} ${location.slug}`,
      `${service.title} ${location.name}`,
      `${service.slug} ${location.name} günstig`,
      `${service.slug} ${location.name} Preis`,
      `${service.title} ${location.name}`,
    ],
    robots: isLowPriority
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'de_DE',
      url: `https://www.franken-entrumpelung.de/${params.slug}`,
    },
    alternates: {
      canonical: `https://www.franken-entrumpelung.de/${params.slug}`,
    },
  }
}

export default function LocalServiceRoute({
  params,
}: {
  params: { slug: string }
}) {
  const parsed = parseSlug(params.slug)
  if (!parsed) {
    notFound()
  }

  const location = locations.find((l) => l.slug === parsed.location)
  const service = serviceTypes.find((s) => s.slug === parsed.service)

  if (!location || !service) {
    notFound()
  }

  return <LocalServicePage location={location} service={service} />
}

