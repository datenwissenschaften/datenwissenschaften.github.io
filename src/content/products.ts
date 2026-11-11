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
  placeholder?: boolean
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
  sitari: {
    name: 'Sitari.life',
    domain: 'sitari.life',
    placeholder: true,
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
  {
    ...shared.sitari,
    number: '04',
    label: 'Smart home AI',
    tagline: 'Smart homes. Shared savings.',
    description:
      'An early-stage concept for AI-driven home automation that helps local communities—starting near the Sitari estate by my South African base—monitor and optimise shared resources. The goal is straightforward: less gas, water and electricity wasted, without residents having to think about it.',
    highlights: ['Water, gas & electricity monitoring', 'AI-driven usage optimisation', 'Built for local community estates'],
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
  {
    ...shared.sitari,
    number: '04',
    label: 'Smart-Home-KI',
    tagline: 'Smarte Häuser. Gemeinsam sparen.',
    description:
      'Ein Konzept im frühen Stadium für KI-gestützte Hausautomatisierung, mit der lokale Gemeinschaften – beginnend in der Nähe des Sitari-Estates bei meinem südafrikanischen Standort – gemeinsam genutzte Ressourcen überwachen und optimieren. Das Ziel ist einfach: weniger verschwendetes Gas, Wasser und Strom, ohne dass die Bewohner darüber nachdenken müssen.',
    highlights: ['Monitoring von Wasser, Gas & Strom', 'KI-gestützte Verbrauchsoptimierung', 'Entwickelt für Wohnanlagen und lokale Gemeinschaften'],
  },
]

const en = {
  eyebrow: 'Side projects',
  title: 'Beyond client work,',
  accent: 'a few things I build myself.',
  copy: 'Alongside consulting engagements, I run a small set of independent ventures—products shaped by the same data and AI practice, built and operated on my own time.',
  opening: {
    eyebrow: 'Independent ventures · Live and in development',
    title: 'Practice applied to my own ideas.',
    copy: 'These aren’t client deliverables—they’re products I build and run myself, some already live, some still taking shape, all proof that the same thinking behind my consulting work holds up outside it too.',
  },
  listLabel: 'My products',
  statusLive: 'Live',
  statusPending: 'In development',
  visit: (domain: string) => `Visit ${domain}`,
  launchingSoon: 'Launching soon',
  buyNow: 'Buy now',
  addToCart: 'Add to cart',
  resources: { water: 'Water', gas: 'Gas', electricity: 'Electricity' },
  products: productsEn,
}

const de: typeof en = {
  eyebrow: 'Eigene Projekte',
  title: 'Neben der Beratung:',
  accent: 'Dinge, die ich selbst baue.',
  copy: 'Parallel zu meinen Beratungsmandaten betreibe ich einige unabhängige Vorhaben – Produkte, die aus derselben Daten- und KI-Praxis entstehen und die ich in eigener Regie entwickle und betreibe.',
  opening: {
    eyebrow: 'Eigene Vorhaben · Live und in Entwicklung',
    title: 'Praxis, angewandt auf eigene Ideen.',
    copy: 'Das sind keine Kundenprojekte, sondern Produkte, die ich selbst entwickle und betreibe – einige bereits live, andere noch im Entstehen. Sie zeigen, dass die Denkweise hinter meiner Beratung auch außerhalb davon trägt.',
  },
  listLabel: 'Meine Produkte',
  statusLive: 'Live',
  statusPending: 'In Entwicklung',
  visit: (domain: string) => `${domain} besuchen`,
  launchingSoon: 'Startet in Kürze',
  buyNow: 'Jetzt kaufen',
  addToCart: 'In den Einkaufswagen',
  resources: { water: 'Wasser', gas: 'Gas', electricity: 'Strom' },
  products: productsDe,
}

export default { en, de } satisfies Localized<typeof en>
