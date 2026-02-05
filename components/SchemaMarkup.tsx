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
    "@id": "https://www.franken-entrumpelung.de",
    "name": "Franken-Entrümpelung GbR",
    "alternateName": "Franken Entrümpelung",
    "description": "Professionelle Entrümpelung im Nürnberger Land: Lauf, Wendelstein, Altdorf, Hersbruck, Schwabach, Zirndorf, Stein, Oberasbach. Auch in Nürnberg, Fürth, Erlangen. Schnell, zuverlässig und fair. Haushaltsauflösung, Wohnungsentrümpelung, Kellerentrümpelung mit Wertanrechnung.",
    "url": "https://www.franken-entrumpelung.de",
    "logo": "https://www.franken-entrumpelung.de/android-chrome-512x512.png",
    "image": [
      "https://www.franken-entrumpelung.de/wohnung-vorher.jpg",
      "https://www.franken-entrumpelung.de/wohnung-nachher.jpg",
      "https://www.franken-entrumpelung.de/keller-vorher.jpg",
      "https://www.franken-entrumpelung.de/keller-nachher.jpg"
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
      "reviewCount": "20",
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
        "name": "Zirndorf"
      },
      {
        "@type": "City",
        "name": "Stein"
      },
      {
        "@type": "City",
        "name": "Oberasbach"
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
        "name": "Langenzenn"
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
        "name": "Schwaig"
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
      },
      {
        "@type": "City",
        "name": "Neunkirchen am Brand"
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
    "slogan": "Entrümpelung Nürnberger Land - Schnell, Zuverlässig, Fair"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
