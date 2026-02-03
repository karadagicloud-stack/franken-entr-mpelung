'use client'

/**
 * Schema Markup für LocalBusiness
 * Hilft Google zu verstehen dass wir ein lokales Unternehmen sind
 * Zeigt Sterne, Adresse, Telefon in Google-Suchergebnissen
 */

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://franken-entruempelung.vercel.app",
    "name": "Franken-Entrümpelung GbR",
    "alternateName": "Franken Entrümpelung",
    "description": "Professionelle Entrümpelung in Nürnberg, Fürth, Erlangen und dem gesamten Nürnberger Land. Schnell, zuverlässig und günstig. Haushaltsauflösung, Wohnungsentrümpelung, Kellerentrümpelung mit Wertanrechnung.",
    "url": "https://franken-entruempelung.vercel.app",
    "logo": "https://franken-entruempelung.vercel.app/android-chrome-512x512.png",
    "image": [
      "https://franken-entruempelung.vercel.app/wohnung-vorher.jpg",
      "https://franken-entruempelung.vercel.app/wohnung-nachher.jpg",
      "https://franken-entruempelung.vercel.app/keller-vorher.jpg",
      "https://franken-entruempelung.vercel.app/keller-nachher.jpg"
    ],
    "telephone": "+49-170-8005653",
    "email": "info@franken-entruempelung.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hauptstraße 53",
      "addressLocality": "Feucht",
      "addressRegion": "Bayern",
      "postalCode": "90537",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.3747",
      "longitude": "11.2064"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "17",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Lauf an der Pegnitz"
      },
      {
        "@type": "City",
        "name": "Wendelstein"
      },
      {
        "@type": "City",
        "name": "Feucht"
      },
      {
        "@type": "City",
        "name": "Altdorf bei Nürnberg"
      },
      {
        "@type": "City",
        "name": "Hersbruck"
      },
      {
        "@type": "City",
        "name": "Schwabach"
      },
      {
        "@type": "City",
        "name": "Schwarzenbruck"
      },
      {
        "@type": "City",
        "name": "Eckental"
      },
      {
        "@type": "City",
        "name": "Röthenbach an der Pegnitz"
      },
      {
        "@type": "City",
        "name": "Schnaittach"
      },
      {
        "@type": "City",
        "name": "Nürnberg"
      },
      {
        "@type": "City",
        "name": "Fürth"
      },
      {
        "@type": "City",
        "name": "Erlangen"
      },
      {
        "@type": "City",
        "name": "Roth"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Entrümpelung Dienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Haushaltsauflösung",
            "description": "Komplette Haushaltsauflösung mit fachgerechter Entsorgung und Wertanrechnung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wohnungsentrümpelung",
            "description": "Professionelle Wohnungsentrümpelung in Nürnberg und Umgebung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kellerentrümpelung",
            "description": "Schnelle und gründliche Kellerentrümpelung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Geschäftsauflösung",
            "description": "Professionelle Geschäftsauflösung und Büroauflösung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sperrmüllentsorgung",
            "description": "Fachgerechte Entsorgung von Sperrmüll und Altgeräten"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.myhammer.de/[dein-profil]",
      "https://www.facebook.com/[dein-profil]",
      "https://www.instagram.com/[dein-profil]"
    ],
    "founder": {
      "@type": "Person",
      "name": "Batuhan Karadag"
    },
    "foundingDate": "2020",
    "slogan": "Professionelle Entrümpelung in Nürnberg & Umgebung - Schnell, Zuverlässig, Günstig"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
