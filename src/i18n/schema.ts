// src/i18n/schema.ts — Reusable Schema.org JSON-LD helpers for Grutas de Tolantongo

const siteUrl = 'https://tolantongo.com.mx';

export const business = {
  name: 'Grutas de Tolantongo',
  telephone: '+525564650507',
  email: 'info@grutasdetolantongo.mx',
  url: siteUrl,
  address: {
    '@type': 'PostalAddress' as const,
    streetAddress: 'Comunidad El Alberto',
    addressLocality: 'Cardonal',
    addressRegion: 'Hidalgo',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates' as const,
    latitude: 20.6392,
    longitude: -99.115,
  },
  openingHours: {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '06:00',
    closes: '20:00',
  },
  image: `${siteUrl}/media/grutas-tolantongo-pozas-termales-panoramica-amplia.webp`,
  priceRange: '$$',
  sameAs: [
    'https://www.facebook.com/grutasdetolantongomx',
    'https://www.instagram.com/grutasdetolantongomx',
    'https://www.tiktok.com/@grutasdetolantongomx',
    'https://www.pinterest.com/grutasdetolantongomx',
  ],
};

/** TouristAttraction schema — for attraction pages (grutas, activities, thermal waters) */
export function touristAttraction(overrides: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: business.name,
    url: overrides.url || business.url,
    telephone: business.telephone,
    address: business.address,
    geo: business.geo,
    openingHoursSpecification: [business.openingHours],
    image: overrides.image || business.image,
    priceRange: business.priceRange,
    ...overrides,
  };
}

/** LocalBusiness schema — for contact/main business pages */
export function localBusiness(overrides: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    url: business.url,
    telephone: business.telephone,
    email: business.email,
    address: business.address,
    geo: business.geo,
    openingHoursSpecification: [business.openingHours],
    image: business.image,
    priceRange: business.priceRange,
    sameAs: business.sameAs,
    ...overrides,
  };
}

/** LodgingBusiness / Campground schema */
export function lodging(type: 'LodgingBusiness' | 'Campground', overrides: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: overrides.name || business.name,
    url: overrides.url || business.url,
    telephone: business.telephone,
    address: business.address,
    geo: business.geo,
    image: overrides.image || business.image,
    priceRange: business.priceRange,
    checkinTime: '14:00',
    checkoutTime: '12:00',
    ...overrides,
  };
}

/** FAQPage schema from array of {question, answer} */
export function faqPage(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** Generic WebPage schema — for legal/info pages */
export function webPage(overrides: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: overrides.name,
    url: overrides.url,
    description: overrides.description,
    publisher: { '@type': 'Organization', name: business.name, url: business.url },
    ...overrides,
  };
}

/** Place schema with directions info */
export function place(overrides: Record<string, any> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: business.name,
    address: business.address,
    geo: business.geo,
    hasMap: 'https://maps.google.com/?q=20.6392,-99.115',
    image: overrides.image || business.image,
    ...overrides,
  };
}
