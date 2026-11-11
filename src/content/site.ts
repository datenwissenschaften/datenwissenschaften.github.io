import type { Localized } from '../i18n'

export const CALENDLY_URL = 'https://calendly.com/datenwissenschaften'
export const EMAIL = 'martin.franke@datenwissenschaften.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/datenwissenschaften/'
export const GITHUB_URL = 'https://github.com/datenwissenschaften'
export const THESIS_URL = 'https://nbn-resolving.org/urn:nbn:de:bsz:14-qucosa-212279'

const en = {
  homeLabel: 'Dr. Franke Datenwissenschaften home',
  brandName: 'Dr. Franke Datenwissenschaften',
  nav: {
    label: 'Main navigation',
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    caseStudy: 'Case studies',
    products: 'Products',
    locations: 'Locations',
  },
  switchTheme: (target: string) => `Switch to ${target} mode`,
  themeNames: { dark: 'dark', light: 'light' },
  toggleNav: 'Toggle navigation',
  languageSwitch: { label: 'Deutsch', short: 'DE', aria: 'Diese Seite auf Deutsch' },
  footer: {
    tagline: ['Lean systems. Useful intelligence.', 'Built to keep working.'],
    navigate: 'Navigate',
    connect: 'Connect',
    email: 'Email',
    bookCall: 'Book a call',
    imprint: 'Imprint & privacy',
    locations: 'Tallinn · Saalfeld · Somerset West',
  },
  notFound: {
    eyebrow: 'Error 404',
    title: 'This page',
    accent: 'does not exist.',
    copy: 'The link may be outdated or mistyped. These pages are a good place to continue.',
    home: 'Go to the homepage',
  },
}

const de: typeof en = {
  homeLabel: 'Dr. Franke Datenwissenschaften Startseite',
  brandName: 'Dr. Franke Datenwissenschaften',
  nav: {
    label: 'Hauptnavigation',
    services: 'Leistungen',
    work: 'Projekte',
    about: 'Über mich',
    contact: 'Kontakt',
    caseStudy: 'Fallstudien',
    products: 'Produkte',
    locations: 'Standorte',
  },
  switchTheme: (target: string) => `Zum ${target} Modus wechseln`,
  themeNames: { dark: 'dunklen', light: 'hellen' },
  toggleNav: 'Navigation ein- oder ausblenden',
  languageSwitch: { label: 'English', short: 'EN', aria: 'View this page in English' },
  footer: {
    tagline: ['Schlanke Systeme. Nützliche Intelligenz.', 'Gebaut, um dauerhaft zu funktionieren.'],
    navigate: 'Navigation',
    connect: 'Kontakt',
    email: 'E-Mail',
    bookCall: 'Termin vereinbaren',
    imprint: 'Impressum & Datenschutz',
    locations: 'Tallinn · Saalfeld · Somerset West',
  },
  notFound: {
    eyebrow: 'Fehler 404',
    title: 'Diese Seite',
    accent: 'gibt es nicht.',
    copy: 'Der Link ist möglicherweise veraltet oder falsch geschrieben. Hier können Sie weitermachen.',
    home: 'Zur Startseite',
  },
}

export default { en, de } satisfies Localized<typeof en>
