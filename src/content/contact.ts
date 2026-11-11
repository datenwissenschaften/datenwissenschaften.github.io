import type { Localized } from '../i18n'

const en = {
  intro: {
    eyebrow: 'Start a project',
    title: 'Let’s find the',
    accent: 'highest-leverage move.',
    copy: 'Tell me what you are trying to improve, automate or understand. An initial conversation is direct, useful and free of sales theatre.',
  },
  direct: 'Direct contact',
  callPrompt: 'Prefer a call? Choose a time that works for you.',
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
    text: 'Remote-first across Germany, the DACH region and Europe; on site by arrangement. Working languages: German and English.',
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
    copy: 'Schreiben Sie mir, was Sie verbessern, automatisieren oder besser verstehen möchten. Ein Erstgespräch ist direkt, nützlich und frei von Verkaufsrhetorik.',
  },
  direct: 'Direkter Kontakt',
  callPrompt: 'Lieber telefonieren? Wählen Sie einen passenden Termin.',
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
    text: 'Remote-first in ganz Deutschland, im DACH-Raum und in Europa; nach Absprache auch vor Ort. Arbeitssprachen: Deutsch und Englisch.',
  },
  response: {
    title: 'Antwortzeit',
    text: 'In der Regel innerhalb von zwei Werktagen.',
  },
  note: ['Klarer Umfang.', 'Volle Aufmerksamkeit.', 'Schlanke Umsetzung.'],
}

export default { en, de } satisfies Localized<typeof en>
