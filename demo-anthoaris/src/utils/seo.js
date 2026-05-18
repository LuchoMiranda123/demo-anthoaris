/**
 * Genera el JSON-LD de LocalBusiness para Centro Anthoaris
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'LocalBusiness'],
    name: 'Centro Anthoaris',
    alternateName: 'Anthoaris Centro Terapéutico Integral',
    description:
      'Centro de terapia integral para niños y adolescentes en Lima Norte. Terapia de atención, lenguaje, aprendizaje, conducta, emocional y guardería desde los 12 meses.',
    url: 'https://luchomiranda123.github.io/demo-anthoaris/',
    logo: 'https://luchomiranda123.github.io/demo-anthoaris/images/logo.png',
    image: 'https://luchomiranda123.github.io/demo-anthoaris/images/portada.png',
    telephone: ['+51960505741', '+51913085500'],
    email: 'contacto@centroanthoaris.pe',
    sameAs: [
      'https://www.facebook.com/anthoaris',
      'https://www.instagram.com/centroanthoaris',
    ],
    location: [
      {
        '@type': 'Place',
        name: 'Sede San Martín de Porres',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Universitaria Norte',
          addressLocality: 'San Martín de Porres',
          addressRegion: 'Lima',
          addressCountry: 'PE',
        },
      },
      {
        '@type': 'Place',
        name: 'Sede Comas',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Túpac Amaru',
          addressLocality: 'Comas',
          addressRegion: 'Lima',
          addressCountry: 'PE',
        },
      },
    ],
    medicalSpecialty: [
      'Pediatría',
      'Terapia del Lenguaje',
      'Psicología Infantil',
      'Terapia Conductual',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    priceRange: 'S/',
    areaServed: 'Lima Norte, Lima, Perú',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '48',
    },
  }
}

/**
 * Genera JSON-LD de Article para posts del blog
 */
export function getArticleSchema({ title, excerpt, author, date, url, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image: image || 'https://luchomiranda123.github.io/demo-anthoaris/images/portada.png',
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Centro Anthoaris',
      logo: {
        '@type': 'ImageObject',
        url: 'https://luchomiranda123.github.io/demo-anthoaris/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}
