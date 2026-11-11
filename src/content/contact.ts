import type { Localized } from '../i18n'

const en = {
  intro: {
    eyebrow: 'Start a project',
    title: 'Let’s find the',
    accent: 'highest-leverage move.',
    copy: 'Tell me what you are trying to improve, automate or understand. The initial call is free, takes about 30 minutes and is direct and useful, with no sales pitch.',
  },
  direct: 'Direct contact',
  callPrompt: 'Prefer a call? Book a free initial call of about 30 minutes at a time that works for you.',
  calendar: 'Open my calendar ↗',
  calendarAria: 'Open my calendar on Calendly (opens in a new tab)',
  firstMessage: {
    title: 'A useful first message includes',
    items: [
      'The decision or process you want to improve',
      'What data and systems already exist',
      'What a valuable outcome would look like',
      'Your broad timing',
    ],
  },
  collaboration: {
    title: 'How we work',
    text: 'Remote only, across Germany, the DACH region and Europe. In German or English, whichever suits your team.',
  },
  response: {
    title: 'Response',
    text: 'Usually within two business days.',
  },
  note: ['Clear scope.', 'Senior attention.', 'Lean delivery.'],
}

const de: typeof en = {
  intro: {
    eyebrow: 'Projekt anfragen',
    title: 'Finden wir den',
    accent: 'wirksamsten Hebel.',
    copy: 'Schreiben Sie mir, was Sie verbessern, automatisieren oder besser verstehen möchten. Das Erstgespräch ist kostenlos, dauert etwa 30 Minuten und ist direkt, nützlich und frei von Verkaufsrhetorik.',
  },
  direct: 'Direkter Kontakt',
  callPrompt: 'Lieber telefonieren? Vereinbaren Sie ein kostenloses Erstgespräch von etwa 30 Minuten zu einem passenden Termin.',
  calendar: 'Kalender öffnen ↗',
  calendarAria: 'Meinen Kalender bei Calendly öffnen (öffnet in einem neuen Tab)',
  firstMessage: {
    title: 'Eine hilfreiche erste Nachricht enthält',
    items: [
      'die Entscheidung oder den Prozess, den Sie verbessern möchten',
      'welche Daten und Systeme bereits vorhanden sind',
      'wie ein wertvolles Ergebnis aussehen würde',
      'Ihren groben Zeitrahmen',
    ],
  },
  collaboration: {
    title: 'Zusammenarbeit',
    text: 'Ausschließlich remote, in ganz Deutschland, im DACH-Raum und in Europa. Auf Deutsch oder Englisch – ganz wie es für Ihr Team passt.',
  },
  response: {
    title: 'Antwortzeit',
    text: 'In der Regel innerhalb von zwei Werktagen.',
  },
  note: ['Klarer Umfang.', 'Volle Aufmerksamkeit.', 'Schlanke Umsetzung.'],
}

export default { en, de } satisfies Localized<typeof en>
