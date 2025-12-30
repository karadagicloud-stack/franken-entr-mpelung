export default function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://franken-entruempelung.de/#organization',
    name: 'Franken-Entrümpelung',
    description: 'Professionelle Entrümpelung, Haushaltsauflösung und Wohnungsauflösung in Nürnberg und Umgebung',
    url: 'https://franken-entruempelung.de',
    telephone: '+491234567890',
    email: 'info@franken-entruempelung.de',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nürnberg',
      addressRegion: 'Bayern',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.4521,
      longitude: 11.0767,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Nürnberg',
      },
      {
        '@type': 'City',
        name: 'Fürth',
      },
      {
        '@type': 'City',
        name: 'Erlangen',
      },
      {
        '@type': 'City',
        name: 'Feucht',
      },
      {
        '@type': 'City',
        name: 'Wendelstein',
      },
      {
        '@type': 'City',
        name: 'Altdorf',
      },
    ],
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.facebook.com/frankenentruempelung',
      'https://www.instagram.com/frankenentruempelung',
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Entrümpelung',
    provider: {
      '@id': 'https://franken-entruempelung.de/#organization',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 49.4521,
        longitude: 11.0767,
      },
      geoRadius: '100000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Entrümpelungsdienstleistungen',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Haushaltsauflösung',
            description: 'Komplette Auflösung von Haushalten mit Wertanrechnung',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wohnungsauflösung',
            description: 'Professionelle Wohnungsauflösung schnell und diskret',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kellerentrümpelung',
            description: 'Entrümpelung von Kellern, Dachböden und Garagen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Büroauflösung',
            description: 'Auflösung von Büros und Praxen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gewerbeentrümpelung',
            description: 'Entrümpelung gewerblicher Objekte',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nachlassauflösung',
            description: 'Einfühlsame Nachlassauflösung mit Wertermittlung',
          },
        },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine Entrümpelung in Nürnberg?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Kosten für eine Entrümpelung hängen von verschiedenen Faktoren ab, wie z.B. Größe des Objekts, Menge des zu entsorgenden Materials und Aufwand. Wir erstellen Ihnen gerne ein kostenloses und unverbindliches Angebot nach einer Besichtigung vor Ort.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell können Sie eine Entrümpelung durchführen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In vielen Fällen können wir bereits am selben oder nächsten Tag einen Termin anbieten. Die Durchführung selbst dauert je nach Umfang zwischen wenigen Stunden und mehreren Tagen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Gebiete bedienen Sie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wir sind in Nürnberg, Fürth, Erlangen und dem gesamten Nürnberger Land sowie im Umkreis von 100 km tätig. Dazu gehören unter anderem Feucht, Wendelstein, Altdorf, Lauf, Hersbruck, Schwabach und viele weitere Orte.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bieten Sie auch Wertanrechnung an?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, wir bieten bei Haushaltsauflösungen Wertanrechnung für noch verwertbare Gegenstände an. Dies kann die Gesamtkosten erheblich reduzieren.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

