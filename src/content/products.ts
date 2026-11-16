import type { Localized } from '../i18n'
import knotbaseImage from '../assets/img/products/knotbase.webp'
import helderbergImage from '../assets/img/products/helderberg-remote.webp'
import bookImage from '../assets/img/products/book.avif'

type Product = {
  number: string
  label: string
  name: string
  domain: string
  tagline: string
  description: string
  highlights: string[]
  image?: string
  imageSize?: { width: number; height: number }
  imageAlt?: string
  url?: string
  contain?: boolean
}

const shared = {
  knotbase: {
    name: 'Knotbase',
    domain: 'knotbase.io',
    image: knotbaseImage,
    imageSize: { width: 1600, height: 1000 },
    url: 'https://knotbase.io/?utm_source=datenwissenschaften&utm_medium=referral&utm_campaign=products',
  },
  helderberg: {
    name: 'Helderberg Remote',
    domain: 'helderbergremote.com',
    image: helderbergImage,
    imageSize: { width: 1600, height: 1000 },
    url: 'https://www.helderbergremote.com/?utm_source=datenwissenschaften&utm_medium=referral&utm_campaign=products',
  },
  book: {
    name: 'From Data Scientist to AI Strategist',
    domain: 'amazon.com',
    contain: true,
    image: bookImage,
    imageSize: { width: 311, height: 466 },
    url: 'https://www.amazon.com/Data-Scientist-AI-Strategist-Future-Proof-ebook/dp/B0H4WWDQ69?utm_source=datenwissenschaften&utm_medium=referral&utm_campaign=products',
  },
}

const productsEn: Product[] = [
  {
    ...shared.knotbase,
    number: '01',
    label: 'AI product',
    tagline: 'Answer more questions. Win more customers.',
    description:
      'Knotbase turns the knowledge already on a company’s website into an AI assistant that answers visitors and helps generate leads around the clock. It’s a self-directed build, run outside client engagements, applying the same practical approach to retrieval and deployment I bring to production AI work.',
    highlights: ['Website knowledge base as the source of truth', 'Conversational lead capture', 'No technical setup required'],
    imageAlt: 'Knotbase.io homepage showing an AI chat assistant answering a customer question',
  },
  {
    ...shared.helderberg,
    number: '02',
    label: 'Local community',
    tagline: 'Work remotely. Connect locally.',
    description:
      'A community for remote workers, digital nomads, freelancers and founders around Somerset West, Strand, Gordon’s Bay and Stellenbosch—grown from the same Helderberg base as my South African location. Meetups and a WhatsApp community turn remote work into something less solitary.',
    highlights: ['WhatsApp community', 'Regular local meetups', 'Somerset West · Strand · Gordon’s Bay · Stellenbosch'],
    imageAlt: 'Helderberg Remote homepage with the community logo and a call to join via WhatsApp',
  },
  {
    ...shared.book,
    number: '03',
    label: 'Book',
    tagline: 'From execution to strategic ownership.',
    description:
      'A practitioner’s guide to the shift AI agents are forcing on data science careers—from producing artifacts to owning the judgment, governance and strategic decisions around them. Written by Dr. Martin Franke, it lays out a concrete path toward production credibility, executive communication and team leadership, closing with a 90-day plan to start the transition now.',
    highlights: ['Five-exposure diagnostic for production readiness', 'Governance toolkit: feature registries, audits, fairness', 'A 90-day plan to start the transition'],
    imageAlt: 'Cover of "From Data Scientist to AI Strategist" by Dr. Martin Franke',
  },
]

const productsDe: Product[] = [
  {
    ...shared.knotbase,
    number: '01',
    label: 'KI-Produkt',
    tagline: 'Mehr Fragen beantworten. Mehr Kunden gewinnen.',
    description:
      'Knotbase macht aus dem Wissen, das bereits auf einer Unternehmenswebsite steht, einen KI-Assistenten, der Besuchern rund um die Uhr Fragen beantwortet und dabei hilft, Leads zu gewinnen. Ich entwickle und betreibe Knotbase eigenständig und unabhängig von Kundenprojekten – mit demselben pragmatischen Ansatz für Retrieval und Deployment, den ich auch in produktive KI-Projekte einbringe.',
    highlights: ['Die eigene Website als verlässliche Wissensquelle', 'Lead-Gewinnung im Dialog', 'Keine technische Einrichtung nötig'],
    imageAlt: 'Startseite von Knotbase.io mit einem KI-Chat-Assistenten, der eine Kundenfrage beantwortet',
  },
  {
    ...shared.helderberg,
    number: '02',
    label: 'Lokale Community',
    tagline: 'Remote arbeiten. Lokal vernetzen.',
    description:
      'Eine Community für Remote-Arbeitende, digitale Nomaden, Freiberufler und Gründer rund um Somerset West, Strand, Gordon’s Bay und Stellenbosch – entstanden an derselben Helderberg-Basis wie mein südafrikanischer Standort. Treffen vor Ort und eine WhatsApp-Community machen Remote-Arbeit weniger einsam.',
    highlights: ['WhatsApp-Community', 'Regelmäßige Treffen vor Ort', 'Somerset West · Strand · Gordon’s Bay · Stellenbosch'],
    imageAlt: 'Startseite von Helderberg Remote mit dem Community-Logo und einer Einladung, über WhatsApp beizutreten',
  },
  {
    ...shared.book,
    number: '03',
    label: 'Buch',
    tagline: 'Von der Umsetzung zur strategischen Verantwortung.',
    description:
      'Ein Praxisleitfaden zu dem Wandel, den KI-Agenten in Data-Science-Karrieren erzwingen: weg vom Erstellen einzelner Artefakte, hin zur Verantwortung für Urteilsvermögen, Governance und strategische Entscheidungen. Dr. Martin Franke zeigt einen konkreten Weg zu Glaubwürdigkeit im Produktivbetrieb, zur Kommunikation mit der Geschäftsführung und zur Teamführung – abgerundet durch einen 90-Tage-Plan für den sofortigen Einstieg. Das Buch ist auf Englisch erschienen.',
    highlights: ['Diagnose der Produktionsreife anhand von fünf Kriterien', 'Governance-Toolkit: Feature-Registries, Audits, Fairness', 'Ein 90-Tage-Plan für den Umstieg'],
    imageAlt: 'Cover des Buchs „From Data Scientist to AI Strategist“ von Dr. Martin Franke',
  },
]

const en = {
  eyebrow: 'Side projects',
  title: 'Beyond client work,',
  accent: 'a few things I build myself.',
  copy: 'Alongside consulting engagements, I run a small set of independent ventures—products shaped by the same data and AI practice, built and operated on my own time.',
  opening: {
    eyebrow: 'Independent ventures · Live today',
    title: 'Practice applied to my own ideas.',
    copy: 'These aren’t client deliverables—they’re products I build and run myself, all live today and all proof that the same thinking behind my consulting work holds up outside it too.',
  },
  listLabel: 'My products',
  statusLive: 'Live',
  visit: (domain: string) => `Visit ${domain}`,
  buyNow: 'Buy now',
  addToCart: 'Add to cart',
  products: productsEn,
}

const de: typeof en = {
  eyebrow: 'Eigene Projekte',
  title: 'Neben der Beratung:',
  accent: 'Dinge, die ich selbst baue.',
  copy: 'Parallel zu meinen Beratungsmandaten betreibe ich einige unabhängige Vorhaben – Produkte, die aus derselben Daten- und KI-Praxis entstehen und die ich in eigener Regie entwickle und betreibe.',
  opening: {
    eyebrow: 'Eigene Vorhaben · Bereits live',
    title: 'Praxis, angewandt auf eigene Ideen.',
    copy: 'Das sind keine Kundenprojekte, sondern Produkte, die ich selbst entwickle und betreibe und die bereits live sind. Sie zeigen, dass die Denkweise hinter meiner Beratung auch außerhalb davon trägt.',
  },
  listLabel: 'Meine Produkte',
  statusLive: 'Live',
  visit: (domain: string) => `${domain} besuchen`,
  buyNow: 'Jetzt kaufen',
  addToCart: 'In den Einkaufswagen',
  products: productsDe,
}

export default { en, de } satisfies Localized<typeof en>
