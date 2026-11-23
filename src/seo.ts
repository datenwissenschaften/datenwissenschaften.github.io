import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import dataContent from './content/data'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, ORCID_URL, THESIS_URL } from './content/site'
import { locales, pageAlternates, pageUrl, SITE_URL, useLocale, type Locale, type Localized, type PageKey } from './i18n'

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
        'Independent data science and AI consulting for mid-sized companies in Europe. AI strategy, data platforms and production machine learning in English and German.',
      name: 'Home',
    },
    de: {
      title: 'KI- & Data-Science-Beratung | Dr. Martin Franke',
      description:
        'Unabhängige KI-Beratung für den Mittelstand in Deutschland und im DACH-Raum. KI-Strategie, Datenplattformen und Machine Learning im Produktivbetrieb.',
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
        'Email Dr. Martin Franke or book a free 30-minute call about your data or AI project. Remote consulting in German and English.',
      name: 'Contact',
    },
    de: {
      title: 'Kontakt & Erstgespräch | Dr. Franke Datenwissenschaften',
      description:
        'Kontaktieren Sie Dr. Martin Franke per E-Mail oder buchen Sie ein kostenloses 30-minütiges Erstgespräch. Remote-Beratung auf Deutsch und Englisch.',
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

const ogLocales: Record<Locale, string> = { en: 'en_GB', de: 'de_DE' }
const ORG_ID = `${SITE_URL}/#organization`
export const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`
const PORTRAIT_URL = `${SITE_URL}/martin-franke.jpg`
const areaServed = [
  ...['Germany', 'Austria', 'Switzerland'].map((name) => ({ '@type': 'Country', name })),
  { '@type': 'Place', name: 'Europe' },
]

export const pageLabel = (page: PageKey, locale: Locale) => meta[page][locale].name

const jsonLd = (data: object) => JSON.stringify(data).replace(/</g, '\\u003c')

// Collection markup lives with its lazy-loaded page, so its content stays out of the home bundle.
export function useCollectionSchema(
  page: 'work' | 'case-study' | 'products',
  items: (url: string, locale: Locale) => object[],
) {
  const { locale } = useLocale()
  useHead(computed(() => {
    const url = pageUrl(page, locale.value)
    return {
      script: [{
        key: 'collection-jsonld',
        type: 'application/ld+json',
        innerHTML: jsonLd({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          '@id': `${url}#items`,
          itemListElement: items(url, locale.value).map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item,
          })),
        }),
      }],
    }
  }))
}

function structuredData(page: PageKey, locale: Locale) {
  const url = pageUrl(page, locale)
  const { description, title } = meta[page][locale]
  const organization = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Dr. Franke Datenwissenschaften',
    legalName: 'Dr. Franke Datenwissenschaften OÜ',
    url: pageUrl('home', 'en'),
    logo: {
      '@type': 'ImageObject',
      contentUrl: `${SITE_URL}/search-logo.png`,
      width: 512,
      height: 512,
    },
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
    areaServed,
    founder: { '@id': PERSON_ID },
    contactPoint: {
      '@type': 'ContactPoint',
      url: pageUrl('contact', locale),
      email: EMAIL,
      availableLanguage: ['de', 'en'],
    },
    hasOfferCatalog: { '@id': `${pageUrl('services', locale)}#services` },
  }

  const person = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Martin Franke',
    honorificPrefix: 'Dr.',
    jobTitle: locale === 'de' ? 'Berater für Data Science & KI' : 'Data Science & AI Consultant',
    url: pageUrl('about', 'en'),
    image: PORTRAIT_URL,
    worksFor: { '@id': ORG_ID },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Technische Universität Dresden', url: 'https://tu-dresden.de/' },
    knowsAbout: dataContent[locale].services.map((service) => service.title),
    knowsLanguage: ['de', 'en'],
    identifier: { '@type': 'PropertyValue', propertyID: 'ORCID', value: '0009-0008-3147-5822' },
    sameAs: [ORCID_URL, LINKEDIN_URL, GITHUB_URL],
  }

  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: 'Dr. Franke Datenwissenschaften',
    inLanguage: locales,
    publisher: { '@id': ORG_ID },
  }

  const webPage: Record<string, unknown> = {
    '@type': pageTypes[page] ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': page === 'about' ? PERSON_ID : ORG_ID },
  }

  const graph: unknown[] = [organization, person, website, webPage]

  if (page !== 'home') {
    webPage.breadcrumb = { '@id': `${url}#breadcrumb` }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: (['home', page] as const).map((key, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: pageLabel(key, locale),
        item: pageUrl(key, locale),
      })),
    })
  }

  if (page === 'home' || page === 'contact' || page === 'imprint') {
    webPage.mainEntity = { '@id': ORG_ID }
  }

  if (page === 'about') {
    const thesis = {
      '@type': 'Thesis',
      '@id': THESIS_URL,
      url: THESIS_URL,
      author: { '@id': PERSON_ID },
      name: 'Wissensbasierte Tagesrhythmenerfassung und -auswertung in ubiquitären Umgebungen',
      inSupportOf: 'Dr.-Ing.',
      datePublished: '2016',
      inLanguage: 'de',
      sourceOrganization: person.alumniOf,
    }
    webPage.mainEntity = { '@id': PERSON_ID }
    webPage.mentions = { '@id': THESIS_URL }
    webPage.primaryImageOfPage = { '@type': 'ImageObject', contentUrl: PORTRAIT_URL }
    graph.push(thesis)
  }

  if (page === 'services') {
    const catalogId = `${url}#services`
    webPage.mainEntity = { '@id': catalogId }
    graph.push({
      '@type': 'OfferCatalog',
      '@id': catalogId,
      name: pageLabel(page, locale),
      itemListElement: dataContent[locale].services.map((service) => {
        const anchor = `${url}#${service.id}`
        return {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': anchor,
            url: anchor,
            name: service.title,
            description: service.text,
            provider: { '@id': ORG_ID },
            areaServed,
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: pageUrl('contact', locale),
              availableLanguage: ['de', 'en'],
            },
          },
        }
      }),
    })
  }

  if (page === 'work' || page === 'case-study' || page === 'products') {
    webPage.mainEntity = { '@id': `${url}#items` }
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

function socialImage(page: PageKey, locale: Locale) {
  if (page === 'about') {
    return { url: PORTRAIT_URL, width: 600, height: 900, alt: 'Dr. Martin Franke' }
  }
  return {
    url: `${SITE_URL}/social-${locale}.jpg`,
    width: 1200,
    height: 630,
    alt: locale === 'de' ? 'Dr. Martin Franke · KI-Beratung & Data Science' : 'Dr. Martin Franke · Data Science & AI Consulting',
  }
}

export function pageHead(page: PageKey, locale: Locale) {
  const { title, description } = meta[page][locale]
  const url = pageUrl(page, locale)
  const image = socialImage(page, locale)
  const otherLocale = locale === 'en' ? 'de' : 'en'

  return {
    title,
    htmlAttrs: { lang: locale },
    meta: [
      { name: 'robots', content: 'max-image-preview:large' },
      { name: 'description', content: description },
      { property: 'og:type', content: page === 'about' ? 'profile' : 'website' },
      { property: 'og:site_name', content: 'Dr. Franke Datenwissenschaften' },
      { property: 'og:locale', content: ogLocales[locale] },
      { property: 'og:locale:alternate', content: ogLocales[otherLocale] },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image.url },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: String(image.width) },
      { property: 'og:image:height', content: String(image.height) },
      { property: 'og:image:alt', content: image.alt },
      { name: 'twitter:card', content: page === 'about' ? 'summary' : 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image.url },
      { name: 'twitter:image:alt', content: image.alt },
    ],
    link: [
      { rel: 'canonical', href: url },
      ...pageAlternates(page).map(({ language, href }) => ({ rel: 'alternate', hreflang: language, href })),
    ],
    script: [{
      key: 'site-jsonld',
      type: 'application/ld+json',
      innerHTML: jsonLd(structuredData(page, locale)),
    }],
  }
}

export const notFoundHead = (locale: Locale) => ({
  title: locale === 'de' ? 'Seite nicht gefunden | Dr. Franke Datenwissenschaften' : 'Page not found | Dr. Franke Datenwissenschaften',
  htmlAttrs: { lang: locale },
  meta: [{ name: 'robots', content: 'noindex' }],
})
