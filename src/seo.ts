import dataContent from './content/data'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, ORCID_URL, THESIS_URL } from './content/site'
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
        'Independent Data Science & AI Consultant with 15 years’ experience: AI strategy, machine learning, data platforms and MLOps that run in production.',
      name: 'Home',
    },
    de: {
      title: 'KI-Beratung & Data-Science-Berater | Dr. Martin Franke',
      description:
        'KI-Beratung und Data-Science-Beratung mit 15 Jahren Erfahrung: KI-Strategie, Machine Learning, Datenplattformen und MLOps für den Mittelstand.',
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
        'KI-Strategie, Machine Learning, Datenplattformen und MLOps: Senior-Beratung und praktische Umsetzung bis zum produktiven System.',
      name: 'Leistungen',
    },
  },
  work: {
    en: {
      title: 'Selected Data Science & AI Projects | Dr. Franke',
      description:
        'Production ML and AI work in automotive (CARIAD; Audi, Porsche, VW), healthcare, publishing and media, with roles, stack and outcomes.',
      name: 'Selected work',
    },
    de: {
      title: 'Data-Science- & KI-Projekte | Dr. Franke',
      description:
        'Produktive ML- und KI-Projekte in Automotive (CARIAD; Audi, Porsche, VW), Gesundheit und Medien – mit Rolle, Technologie und Ergebnissen.',
      name: 'Projekte',
    },
  },
  about: {
    en: {
      title: 'About Dr. Martin Franke – Data Scientist & AI Strategist',
      description:
        'Data Science & AI Consultant with a doctorate in computer science (TU Dresden) and 15 years in machine learning, AI strategy and leadership.',
      name: 'About',
    },
    de: {
      title: 'Über Dr. Martin Franke – Data Scientist & KI-Stratege',
      description:
        'Berater für Data Science & KI mit Promotion in Informatik (TU Dresden) und 15 Jahren Erfahrung in Machine Learning und KI-Strategie.',
      name: 'Über mich',
    },
  },
  contact: {
    en: {
      title: 'Contact & Book a Call | Dr. Franke Datenwissenschaften',
      description:
        'Discuss your data or AI challenge in a free 30-minute initial call, booked directly in my calendar, or by email. Replies within two business days.',
      name: 'Contact',
    },
    de: {
      title: 'Kontakt & Erstgespräch | Dr. Franke Datenwissenschaften',
      description:
        'Besprechen Sie Ihre Daten- oder KI-Herausforderung in einem kostenlosen 30-minütigen Erstgespräch – per Kalenderbuchung oder E-Mail.',
      name: 'Kontakt',
    },
  },
  'case-study': {
    en: {
      title: 'Open-Source Data & AI Case Studies | Dr. Franke',
      description:
        'Six open-source repositories and Retro Speedlab, a live AI research lab: inspectable evidence of data engineering, RL and agentic engineering.',
      name: 'Case studies',
    },
    de: {
      title: 'Open-Source-Fallstudien zu Daten & KI | Dr. Franke',
      description:
        'Sechs Open-Source-Repositories und das öffentliche KI-Labor Retro Speedlab: nachprüfbare Belege für Data Engineering und agentisches Engineering.',
      name: 'Fallstudien',
    },
  },
  products: {
    en: {
      title: 'Products & Ventures: Knotbase, Book | Dr. Franke',
      description:
        'Products by Dr. Martin Franke: the Knotbase AI website assistant, the book “From Data Scientist to AI Strategist” and Helderberg Remote.',
      name: 'Products',
    },
    de: {
      title: 'Produkte: Knotbase, Buch & mehr | Dr. Franke',
      description:
        'Eigene Produkte von Dr. Martin Franke: KI-Website-Assistent Knotbase, das Buch „From Data Scientist to AI Strategist“ und Helderberg Remote.',
      name: 'Produkte',
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
    ],
    areaServed: [
      ...['Germany', 'Austria', 'Switzerland', 'Estonia'].map((name) => ({ '@type': 'Country', name })),
      { '@type': 'Place', name: 'Europe' },
    ],
    knowsLanguage: ['de', 'en'],
    founder: { '@id': PERSON_ID },
    sameAs: [GITHUB_URL],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: meta.services[locale].name,
      itemListElement: dataContent[locale].services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${pageUrl('services', locale)}#service-${service.number}`,
          name: service.title,
          description: service.text,
          serviceType: service.title,
          areaServed: { '@type': 'Place', name: 'Europe' },
          provider: { '@id': ORG_ID },
        },
      })),
    },
  }

  const person = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Martin Franke',
    honorificPrefix: 'Dr.',
    jobTitle: locale === 'de' ? 'Berater für Data Science & KI' : 'Data Science & AI Consultant',
    description:
      locale === 'de'
        ? 'Promovierter Informatiker (TU Dresden) und unabhängiger Berater für Data Science & KI: KI-Strategie, Machine Learning, Datenplattformen und MLOps.'
        : 'Computer scientist with a doctorate from TU Dresden and independent Data Science & AI Consultant: AI strategy, machine learning, data platforms and MLOps.',
    url: pageUrl('about', locale),
    image: `${SITE_URL}/martin-franke.jpg`,
    email: EMAIL,
    worksFor: { '@id': ORG_ID },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Technische Universität Dresden', sameAs: 'https://tu-dresden.de/' },
    knowsAbout: ['Data science', 'Machine learning', 'Artificial intelligence', 'AI strategy', 'MLOps', 'Data engineering', 'Apache Spark', 'Large language models', 'Model governance'],
    knowsLanguage: ['de', 'en'],
    subjectOf: {
      '@type': 'Thesis',
      '@id': `${SITE_URL}/#thesis`,
      author: { '@id': PERSON_ID },
      name: 'Wissensbasierte Tagesrhythmenerfassung und -auswertung in ubiquitären Umgebungen',
      inSupportOf: 'Dr.-Ing. (Doctor of Engineering)',
      datePublished: '2016-11-02',
      inLanguage: 'de',
      url: THESIS_URL,
      sourceOrganization: { '@type': 'CollegeOrUniversity', name: 'Technische Universität Dresden' },
    },
    identifier: { '@type': 'PropertyValue', propertyID: 'ORCID', value: '0009-0008-3147-5822' },
    sameAs: [ORCID_URL, LINKEDIN_URL, GITHUB_URL],
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
      // The root redirects by browser language, so it is the x-default for the homepage.
      { rel: 'alternate', hreflang: 'x-default', href: page === 'home' ? `${SITE_URL}/` : pageUrl(page, 'en') },
    ],
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(structuredData(page, locale)) }],
  }
}

export const notFoundHead = (locale: Locale) => ({
  title: locale === 'de' ? 'Seite nicht gefunden | Dr. Franke Datenwissenschaften' : 'Page not found | Dr. Franke Datenwissenschaften',
  htmlAttrs: { lang: languageTags[locale] },
  meta: [{ name: 'robots', content: 'noindex' }],
})
