import { EMAIL, GITHUB_URL, LINKEDIN_URL, THESIS_URL } from './content/site'
import { locales, pages, SITE_URL, type Locale, type Localized, type PageKey } from './i18n'

interface PageMeta {
  title: string
  description: string
  /** Breadcrumb label; also used as the schema.org page name. */
  name: string
}

const meta: Record<PageKey, Localized<PageMeta>> = {
  home: {
    en: {
      title: 'Data Science & AI Consultant | Dr. Martin Franke',
      description:
        'Independent data science and AI consultant with 15 years’ experience: AI strategy, machine learning, data platforms and MLOps that run reliably in production.',
      name: 'Home',
    },
    de: {
      title: 'KI-Beratung & Data-Science-Berater | Dr. Martin Franke',
      description:
        'Unabhängiger Data-Science- und KI-Berater mit 15 Jahren Erfahrung: KI-Strategie, Machine Learning, Datenplattformen und MLOps für den produktiven Einsatz – auch im Mittelstand.',
      name: 'Startseite',
    },
  },
  services: {
    en: {
      title: 'Data Science & AI Consulting Services | Dr. Franke',
      description:
        'AI strategy, applied machine learning, data platforms and MLOps: senior consulting and hands-on delivery, from the first question to a production system.',
      name: 'Services',
    },
    de: {
      title: 'KI-Beratung & Data-Science-Leistungen | Dr. Franke',
      description:
        'KI-Strategie, angewandtes Machine Learning, Datenplattformen und MLOps: Senior-Beratung und praktische Umsetzung von der ersten Frage bis zum produktiven System.',
      name: 'Leistungen',
    },
  },
  work: {
    en: {
      title: 'Selected Data Science & AI Projects | Dr. Franke',
      description:
        'Production ML and AI projects for CARIAD (Audi, Porsche, Volkswagen), healthcare, digital publishing and ProSiebenSat.1, with roles, stack and measurable outcomes.',
      name: 'Selected work',
    },
    de: {
      title: 'Data-Science- & KI-Projekte | Dr. Franke',
      description:
        'Produktive ML- und KI-Projekte für CARIAD (Audi, Porsche, Volkswagen), Gesundheit, Digital Publishing und ProSiebenSat.1 – mit Rolle, Technologie und messbaren Ergebnissen.',
      name: 'Projekte',
    },
  },
  about: {
    en: {
      title: 'About Dr. Martin Franke – Data Scientist & AI Strategist',
      description:
        'Doctorate in computer science from TU Dresden and 15 years in machine learning, AI strategy and technical leadership across automotive, healthcare, media and research.',
      name: 'About',
    },
    de: {
      title: 'Über Dr. Martin Franke – Data Scientist & KI-Stratege',
      description:
        'Promotion in Informatik an der TU Dresden und 15 Jahre Erfahrung in Machine Learning, KI-Strategie und technischer Leitung in Automotive, Gesundheit, Medien und Forschung.',
      name: 'Über mich',
    },
  },
  contact: {
    en: {
      title: 'Contact & Book a Call | Dr. Franke Datenwissenschaften',
      description:
        'Discuss your data or AI challenge by email or book an initial call directly in my calendar. Replies usually within two business days.',
      name: 'Contact',
    },
    de: {
      title: 'Kontakt & Erstgespräch | Dr. Franke Datenwissenschaften',
      description:
        'Besprechen Sie Ihre Daten- oder KI-Herausforderung per E-Mail oder buchen Sie direkt ein Erstgespräch in meinem Kalender. Antwort meist innerhalb von zwei Werktagen.',
      name: 'Kontakt',
    },
  },
  'case-study': {
    en: {
      title: 'Open-Source Data & AI Case Studies | Dr. Franke',
      description:
        'Six open-source repositories and Retro Speedlab, a live AI research lab: inspectable evidence of data engineering, reinforcement learning and agentic engineering.',
      name: 'Case studies',
    },
    de: {
      title: 'Open-Source-Fallstudien zu Daten & KI | Dr. Franke',
      description:
        'Sechs Open-Source-Repositories und Retro Speedlab, ein öffentliches KI-Forschungslabor: nachprüfbare Belege für Data Engineering, Reinforcement Learning und agentisches Engineering.',
      name: 'Fallstudien',
    },
  },
  products: {
    en: {
      title: 'Products & Ventures: Knotbase, Book | Dr. Franke',
      description:
        'Independent products by Dr. Martin Franke: the Knotbase AI website assistant, the book “From Data Scientist to AI Strategist” and the Helderberg Remote community.',
      name: 'Products',
    },
    de: {
      title: 'Produkte: Knotbase, Buch & mehr | Dr. Franke',
      description:
        'Eigene Produkte von Dr. Martin Franke: der KI-Website-Assistent Knotbase, das Buch „From Data Scientist to AI Strategist“ und die Community Helderberg Remote.',
      name: 'Produkte',
    },
  },
  locations: {
    en: {
      title: 'Locations: Tallinn, Saalfeld, Somerset West | Dr. Franke',
      description:
        'Data science and AI consulting from Tallinn (Estonia), Saalfeld (Thuringia, Germany) and Somerset West (South Africa), on site and remotely across Europe.',
      name: 'Locations',
    },
    de: {
      title: 'Standorte: Saalfeld, Tallinn, Somerset West | Dr. Franke',
      description:
        'Data-Science- und KI-Beratung aus Saalfeld in Thüringen, Tallinn (Estland) und Somerset West (Südafrika) – vor Ort und remote in ganz Deutschland und Europa.',
      name: 'Standorte',
    },
  },
  imprint: {
    en: {
      title: 'Imprint & Privacy | Dr. Franke Datenwissenschaften',
      description:
        'Company details, intellectual property terms and data protection information for Dr. Franke Datenwissenschaften OÜ.',
      name: 'Imprint & privacy',
    },
    de: {
      title: 'Impressum & Datenschutz | Dr. Franke Datenwissenschaften',
      description:
        'Unternehmensangaben, Hinweise zum geistigen Eigentum und Datenschutzinformationen der Dr. Franke Datenwissenschaften OÜ.',
      name: 'Impressum & Datenschutz',
    },
  },
}

const serviceNames: Localized<string[]> = {
  en: ['Data & AI Strategy', 'Applied Machine Learning', 'Data Platforms', 'MLOps & Delivery'],
  de: ['Daten- & KI-Strategie', 'Angewandtes Machine Learning', 'Datenplattformen', 'MLOps & Umsetzung'],
}

const pageTypes: Partial<Record<PageKey, string>> = {
  about: 'ProfilePage',
  contact: 'ContactPage',
  work: 'CollectionPage',
  'case-study': 'CollectionPage',
  products: 'CollectionPage',
}

const languageTags: Record<Locale, string> = { en: 'en', de: 'de' }
const ogLocales: Record<Locale, string> = { en: 'en_US', de: 'de_DE' }

export const pageUrl = (page: PageKey, locale: Locale) => `${SITE_URL}${pages[page][locale]}`

const ORG_ID = `${SITE_URL}/#organization`
const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

function structuredData(page: PageKey, locale: Locale) {
  const url = pageUrl(page, locale)
  const { name, description, title } = meta[page][locale]

  const organization = {
    '@type': ['ProfessionalService', 'Organization'],
    '@id': ORG_ID,
    name: 'Dr. Franke Datenwissenschaften',
    legalName: 'Dr. Franke Datenwissenschaften OÜ',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    email: EMAIL,
    vatID: 'EE102649275',
    identifier: { '@type': 'PropertyValue', propertyID: 'Estonian Commercial Register', value: '16803592' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sepapaja tn 6',
      postalCode: '15551',
      addressLocality: 'Tallinn',
      addressCountry: 'EE',
    },
    location: [
      { '@type': 'Place', name: 'Tallinn', address: { '@type': 'PostalAddress', addressLocality: 'Tallinn', addressCountry: 'EE' } },
      { '@type': 'Place', name: 'Saalfeld', address: { '@type': 'PostalAddress', addressLocality: 'Saalfeld/Saale', addressRegion: 'Thüringen', addressCountry: 'DE' } },
      { '@type': 'Place', name: 'Somerset West', address: { '@type': 'PostalAddress', addressLocality: 'Somerset West', addressRegion: 'Western Cape', addressCountry: 'ZA' } },
    ],
    areaServed: ['DE', 'AT', 'CH', 'EE', 'ZA', 'Europe'],
    availableLanguage: ['en', 'de'],
    founder: { '@id': PERSON_ID },
    sameAs: [GITHUB_URL],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: meta.services[locale].name,
      itemListElement: serviceNames[locale].map((serviceName) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: serviceName, provider: { '@id': ORG_ID } },
      })),
    },
  }

  const person = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Martin Franke',
    honorificPrefix: 'Dr.',
    jobTitle: locale === 'de' ? 'Data Scientist und KI-Stratege' : 'Data Scientist and AI Strategist',
    description:
      locale === 'de'
        ? 'Promovierter Informatiker (TU Dresden) und unabhängiger Berater für Data Science, Machine Learning und KI-Strategie.'
        : 'Computer scientist with a doctorate from TU Dresden and independent consultant for data science, machine learning and AI strategy.',
    url: pageUrl('about', locale),
    image: `${SITE_URL}/martin-franke.jpg`,
    email: EMAIL,
    worksFor: { '@id': ORG_ID },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Technische Universität Dresden', sameAs: 'https://tu-dresden.de/' },
    knowsAbout: ['Data science', 'Machine learning', 'Artificial intelligence', 'AI strategy', 'MLOps', 'Data engineering', 'Apache Spark', 'Large language models', 'Model governance'],
    knowsLanguage: ['de', 'en'],
    subjectOf: {
      '@type': 'Thesis',
      name: 'Wissensbasierte Tagesrhythmenerfassung und -auswertung in ubiquitären Umgebungen',
      inSupportOf: 'Doctoral degree (Dr.)',
      datePublished: '2016-11-02',
      inLanguage: 'de',
      url: THESIS_URL,
      sourceOrganization: { '@type': 'CollegeOrUniversity', name: 'Technische Universität Dresden' },
    },
    sameAs: [LINKEDIN_URL, GITHUB_URL],
  }

  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: 'Dr. Franke Datenwissenschaften',
    inLanguage: ['en', 'de'],
    publisher: { '@id': ORG_ID },
  }

  const webPage: Record<string, unknown> = {
    '@type': pageTypes[page] ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: languageTags[locale],
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': page === 'about' ? PERSON_ID : ORG_ID },
  }
  if (page === 'about') webPage.mainEntity = { '@id': PERSON_ID }

  const graph: unknown[] = [organization, person, website, webPage]

  if (page !== 'home') {
    webPage.breadcrumb = { '@id': `${url}#breadcrumb` }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: meta.home[locale].name, item: pageUrl('home', locale) },
        { '@type': 'ListItem', position: 2, name, item: url },
      ],
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

/** Head entries (title, meta, links, JSON-LD) for a page, consumed by useHead. */
export function pageHead(page: PageKey, locale: Locale) {
  const { title, description } = meta[page][locale]
  const url = pageUrl(page, locale)
  const image = `${SITE_URL}/og-image.png`
  const otherLocale = locales.find((value) => value !== locale) as Locale

  return {
    title,
    htmlAttrs: { lang: languageTags[locale] },
    meta: [
      { name: 'description', content: description },
      { property: 'og:type', content: page === 'about' ? 'profile' : 'website' },
      { property: 'og:site_name', content: 'Dr. Franke Datenwissenschaften' },
      { property: 'og:locale', content: ogLocales[locale] },
      { property: 'og:locale:alternate', content: ogLocales[otherLocale] },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '974' },
      { property: 'og:image:height', content: '577' },
      { property: 'og:image:alt', content: 'Dr. Franke Datenwissenschaften logo' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [
      { rel: 'canonical', href: url },
      ...locales.map((value) => ({ rel: 'alternate', hreflang: languageTags[value], href: pageUrl(page, value) })),
      { rel: 'alternate', hreflang: 'x-default', href: pageUrl(page, 'en') },
    ],
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(structuredData(page, locale)) }],
  }
}

export const notFoundHead = (locale: Locale) => ({
  title: locale === 'de' ? 'Seite nicht gefunden | Dr. Franke Datenwissenschaften' : 'Page not found | Dr. Franke Datenwissenschaften',
  htmlAttrs: { lang: languageTags[locale] },
  meta: [{ name: 'robots', content: 'noindex' }],
})
