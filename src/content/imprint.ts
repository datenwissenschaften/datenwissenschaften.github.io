import type { Localized } from '../i18n'

type Principle = { title: string; paragraphs: string[] }

const en = {
  intro: {
    eyebrow: 'Legal',
    title: 'Imprint &',
    accent: 'privacy.',
    copy: 'Company information, intellectual property terms and data protection details for Dr. Franke Datenwissenschaften OÜ.',
  },
  nav: {
    label: 'Legal page navigation',
    company: 'Company details',
    ip: 'Intellectual property',
    privacy: 'GDPR compliance',
    rights: 'Your rights',
    cookies: 'Cookies & third parties',
  },
  company: {
    eyebrow: 'Imprint',
    heading: 'Company details',
    country: 'Estonia',
    facts: [
      { term: 'Commercial Register Number', value: '16803592' },
      { term: 'VAT Identification Number', value: 'EE102649275' },
      { term: 'Managing Director', value: 'Dr. Martin Franke' },
      { term: 'Responsible for Content', value: 'Dr. Franke Datenwissenschaften OÜ' },
    ],
    contactHeading: 'Contact',
    emailLabel: 'Email:',
    note: 'Dr. Franke Datenwissenschaften OÜ is a company registered in Estonia. This imprint provides the legally required company information in accordance with applicable European regulations. Please use the contact details above for any enquiries or concerns.',
  },
  ip: {
    eyebrow: 'Legal notice',
    heading: 'Intellectual property',
    blocks: [
      {
        title: 'Copyright',
        text: 'The content, design and images on this website are the intellectual property of Dr. Franke Datenwissenschaften OÜ and are protected by applicable copyright laws. Any unauthorised use, reproduction or distribution of material from this website is prohibited.',
      },
      {
        title: 'Trademarks',
        text: 'Unless otherwise stated, all trademarks, service marks and trade names used on this website are the property of Dr. Franke Datenwissenschaften OÜ. Use of these marks without prior written permission may infringe applicable intellectual property laws.',
      },
      {
        title: 'Permitted use',
        text: 'Permission is granted to make electronic copies and print individual pages from this website solely for personal, non-commercial purposes. Any other use requires the prior written permission of Dr. Franke Datenwissenschaften OÜ.',
      },
    ],
    questions: {
      before: 'Questions about the use of website content may be directed to',
      after: '. Thank you for respecting our intellectual property rights.',
    },
  },
  privacy: {
    eyebrow: 'Data protection',
    heading: 'GDPR compliance statement',
    intro: 'Dr. Franke Datenwissenschaften OÜ is committed to protecting the privacy and security of personal data in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. The following principles guide how we collect, use and protect personal data.',
    principles: [
      {
        title: 'Data collection and processing',
        paragraphs: ['We collect and process personal data only for specified, explicit and lawful purposes. Collection is limited to the information necessary for the intended purpose, and individuals are informed about how their data is processed.'],
      },
      {
        title: 'Lawful basis for processing',
        paragraphs: ['Personal data is processed only where a lawful basis applies. Depending on the circumstances, this may include consent, performance of a contract, compliance with a legal obligation, protection of vital interests, performance of a task in the public interest or exercise of official authority, or legitimate interests pursued by the controller or a third party.'],
      },
      {
        title: 'Data minimisation and retention',
        paragraphs: ['We limit the collection of personal data to what is adequate, relevant and necessary for the intended purpose. Personal data is retained only for as long as necessary to fulfil that purpose or meet applicable legal requirements.'],
      },
      {
        title: 'Data accuracy',
        paragraphs: ['We take reasonable steps to keep personal data accurate and up to date. Individuals may request the correction of inaccurate or incomplete personal data concerning them.'],
      },
      {
        title: 'Data security',
        paragraphs: ['We apply appropriate technical and organisational measures to protect personal data against unauthorised or unlawful processing and against accidental loss, destruction or damage.'],
      },
    ] as Principle[],
  },
  rights: {
    eyebrow: 'Data subjects',
    heading: 'Your rights',
    principles: [
      {
        title: 'Individual rights',
        paragraphs: ['Subject to the conditions established by applicable law, individuals may have the right to access, rectify or erase their personal data; restrict or object to processing; and receive their data in a portable format. Where processing relies on consent, consent may be withdrawn at any time without affecting the lawfulness of processing carried out before withdrawal.'],
      },
      {
        title: 'International data transfers',
        paragraphs: ['Where personal data is transferred to a third country or international organisation, we ensure that an appropriate transfer mechanism and adequate safeguards are in place as required by the GDPR.'],
      },
    ] as Principle[],
    dpo: {
      title: 'Data Protection Officer',
      before: 'To ask a data protection question or exercise your rights, contact our Data Protection Officer, Dr. Martin Franke, at',
      after: '.',
    },
  },
  cookies: {
    eyebrow: 'Website technology',
    heading: 'Cookies & third-party services',
    principles: [
      {
        title: 'Server access data',
        paragraphs: ['When you visit this website, the web server processes technical access data, such as your IP address, the time of the request and the requested page, in order to deliver the website securely.'],
      },
      {
        title: 'Cookies and local storage',
        paragraphs: ['This website does not use analytics or advertising cookies. It uses local browser storage to remember the visitor’s light or dark theme preference. When a visitor uses the language switch, a single cookie (“lang”) stores the chosen language for one year so the homepage opens in that language. Both preferences remain on the visitor’s device and can be removed through the browser settings.'],
      },
      {
        title: 'Web analytics',
        paragraphs: ['This website uses a self-hosted instance of Umami web analytics at tracking.datenwissenschaften.com. Umami works without cookies and collects aggregated page-view statistics, without tracking visitors across websites or building personal profiles.'],
      },
      {
        title: 'Chat assistant',
        paragraphs: ['The pages load a chat assistant provided by Knotbase (knotbase.io), our own product. When the assistant is loaded, technical information such as the visitor’s IP address is transmitted to knotbase.io. Messages a visitor types into the chat assistant are processed to generate answers.'],
      },
      {
        title: 'External services',
        paragraphs: [
          'The external scheduling link opens Calendly in a separate website; Calendly’s own privacy and cookie terms apply once that service is opened.',
        ],
      },
      {
        title: 'Updates to this statement',
        paragraphs: ['This GDPR compliance statement may be updated periodically to reflect changes in our privacy practices, website functionality or applicable law. The current version will be published on this page.'],
      },
    ] as Principle[],
    thanks: 'Thank you for entrusting Dr. Franke Datenwissenschaften OÜ with your data. We are committed to maintaining high standards of data protection and privacy.',
    effective: 'Effective date: 11 December 2023',
    reviewed: 'Last reviewed: 11 November 2026',
    rights: 'All rights reserved.',
  },
}

const de: typeof en = {
  intro: {
    eyebrow: 'Rechtliches',
    title: 'Impressum &',
    accent: 'Datenschutz.',
    copy: 'Angaben zum Unternehmen, Hinweise zum geistigen Eigentum und Informationen zum Datenschutz der Dr. Franke Datenwissenschaften OÜ.',
  },
  nav: {
    label: 'Navigation der Rechtsseite',
    company: 'Angaben zum Unternehmen',
    ip: 'Geistiges Eigentum',
    privacy: 'Datenschutz nach DSGVO',
    rights: 'Ihre Rechte',
    cookies: 'Cookies & Drittanbieter',
  },
  company: {
    eyebrow: 'Impressum',
    heading: 'Angaben zum Unternehmen',
    country: 'Estland',
    facts: [
      { term: 'Handelsregisternummer', value: '16803592' },
      { term: 'Umsatzsteuer-Identifikationsnummer', value: 'EE102649275' },
      { term: 'Geschäftsführer', value: 'Dr. Martin Franke' },
      { term: 'Verantwortlich für den Inhalt', value: 'Dr. Franke Datenwissenschaften OÜ' },
    ],
    contactHeading: 'Kontakt',
    emailLabel: 'E-Mail:',
    note: 'Die Dr. Franke Datenwissenschaften OÜ ist ein in Estland eingetragenes Unternehmen. Dieses Impressum enthält die gesetzlich vorgeschriebenen Unternehmensangaben gemäß den geltenden europäischen Vorschriften. Für Anfragen und Anliegen nutzen Sie bitte die oben genannten Kontaktdaten.',
  },
  ip: {
    eyebrow: 'Rechtliche Hinweise',
    heading: 'Geistiges Eigentum',
    blocks: [
      {
        title: 'Urheberrecht',
        text: 'Die Inhalte, die Gestaltung und die Bilder dieser Website sind geistiges Eigentum der Dr. Franke Datenwissenschaften OÜ und durch das geltende Urheberrecht geschützt. Jede unbefugte Nutzung, Vervielfältigung oder Verbreitung von Material dieser Website ist untersagt.',
      },
      {
        title: 'Marken',
        text: 'Sofern nicht anders angegeben, sind alle auf dieser Website verwendeten Marken, Dienstleistungsmarken und Handelsnamen Eigentum der Dr. Franke Datenwissenschaften OÜ. Die Verwendung dieser Kennzeichen ohne vorherige schriftliche Genehmigung kann geltende Schutzrechte verletzen.',
      },
      {
        title: 'Zulässige Nutzung',
        text: 'Elektronische Kopien und Ausdrucke einzelner Seiten dieser Website sind ausschließlich für den persönlichen, nicht kommerziellen Gebrauch gestattet. Jede andere Nutzung bedarf der vorherigen schriftlichen Genehmigung der Dr. Franke Datenwissenschaften OÜ.',
      },
    ],
    questions: {
      before: 'Fragen zur Nutzung von Inhalten dieser Website richten Sie bitte an',
      after: '. Vielen Dank, dass Sie unsere Rechte am geistigen Eigentum respektieren.',
    },
  },
  privacy: {
    eyebrow: 'Datenschutz',
    heading: 'Datenschutzerklärung nach DSGVO',
    intro: 'Die Dr. Franke Datenwissenschaften OÜ verpflichtet sich, den Schutz und die Sicherheit personenbezogener Daten gemäß der Datenschutz-Grundverordnung (DSGVO) und den übrigen anwendbaren Datenschutzgesetzen zu gewährleisten. Die folgenden Grundsätze bestimmen, wie wir personenbezogene Daten erheben, verwenden und schützen.',
    principles: [
      {
        title: 'Erhebung und Verarbeitung von Daten',
        paragraphs: ['Wir erheben und verarbeiten personenbezogene Daten nur für festgelegte, eindeutige und rechtmäßige Zwecke. Die Erhebung beschränkt sich auf die für den jeweiligen Zweck erforderlichen Angaben, und betroffene Personen werden darüber informiert, wie ihre Daten verarbeitet werden.'],
      },
      {
        title: 'Rechtsgrundlage der Verarbeitung',
        paragraphs: ['Personenbezogene Daten werden nur verarbeitet, wenn eine Rechtsgrundlage besteht. Je nach Fall kann dies eine Einwilligung, die Erfüllung eines Vertrags, die Erfüllung einer rechtlichen Verpflichtung, der Schutz lebenswichtiger Interessen, die Wahrnehmung einer Aufgabe im öffentlichen Interesse oder in Ausübung öffentlicher Gewalt oder ein berechtigtes Interesse des Verantwortlichen oder eines Dritten sein.'],
      },
      {
        title: 'Datenminimierung und Speicherdauer',
        paragraphs: ['Wir beschränken die Erhebung personenbezogener Daten auf das, was für den jeweiligen Zweck angemessen, erheblich und notwendig ist. Personenbezogene Daten werden nur so lange gespeichert, wie es zur Erfüllung dieses Zwecks oder gesetzlicher Anforderungen erforderlich ist.'],
      },
      {
        title: 'Richtigkeit der Daten',
        paragraphs: ['Wir ergreifen angemessene Maßnahmen, damit personenbezogene Daten richtig und aktuell sind. Betroffene Personen können die Berichtigung unrichtiger oder unvollständiger Daten verlangen, die sie betreffen.'],
      },
      {
        title: 'Datensicherheit',
        paragraphs: ['Wir setzen geeignete technische und organisatorische Maßnahmen ein, um personenbezogene Daten vor unbefugter oder unrechtmäßiger Verarbeitung sowie vor unbeabsichtigtem Verlust, unbeabsichtigter Zerstörung oder Beschädigung zu schützen.'],
      },
    ],
  },
  rights: {
    eyebrow: 'Betroffenenrechte',
    heading: 'Ihre Rechte',
    principles: [
      {
        title: 'Rechte der betroffenen Personen',
        paragraphs: ['Nach Maßgabe des geltenden Rechts haben betroffene Personen gegebenenfalls das Recht auf Auskunft, Berichtigung oder Löschung ihrer personenbezogenen Daten, auf Einschränkung der Verarbeitung, auf Widerspruch gegen die Verarbeitung sowie auf Datenübertragbarkeit. Beruht eine Verarbeitung auf einer Einwilligung, kann diese jederzeit widerrufen werden; die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.'],
      },
      {
        title: 'Übermittlung in Drittländer',
        paragraphs: ['Werden personenbezogene Daten an ein Drittland oder eine internationale Organisation übermittelt, stellen wir sicher, dass ein geeigneter Übermittlungsmechanismus und angemessene Garantien gemäß der DSGVO bestehen.'],
      },
    ],
    dpo: {
      title: 'Datenschutzbeauftragter',
      before: 'Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an unseren Datenschutzbeauftragten, Dr. Martin Franke, unter',
      after: '.',
    },
  },
  cookies: {
    eyebrow: 'Technik der Website',
    heading: 'Cookies & Dienste von Drittanbietern',
    principles: [
      {
        title: 'Server-Zugriffsdaten',
        paragraphs: ['Beim Besuch dieser Website verarbeitet der Webserver technische Zugriffsdaten, etwa Ihre IP-Adresse, den Zeitpunkt der Anfrage und die aufgerufene Seite, um die Website sicher auszuliefern.'],
      },
      {
        title: 'Cookies und lokaler Speicher',
        paragraphs: ['Diese Website verwendet keine Analyse- oder Werbe-Cookies. Sie nutzt den lokalen Speicher des Browsers, um die Wahl zwischen hellem und dunklem Design zu speichern. Wenn Sie die Sprachumschaltung verwenden, speichert ein einzelnes Cookie („lang“) die gewählte Sprache für ein Jahr, damit die Startseite in dieser Sprache öffnet. Beide Einstellungen verbleiben auf Ihrem Gerät und können über die Browsereinstellungen gelöscht werden.'],
      },
      {
        title: 'Webanalyse',
        paragraphs: ['Diese Website nutzt eine selbst gehostete Instanz der Webanalyse Umami unter tracking.datenwissenschaften.com. Umami arbeitet ohne Cookies und erfasst zusammengefasste Statistiken über Seitenaufrufe, ohne Besucher über Websites hinweg zu verfolgen oder persönliche Profile zu erstellen.'],
      },
      {
        title: 'Chat-Assistent',
        paragraphs: ['Auf den Seiten wird ein Chat-Assistent von Knotbase (knotbase.io) geladen, unserem eigenen Produkt. Beim Laden des Assistenten werden technische Informationen wie Ihre IP-Adresse an knotbase.io übermittelt. Nachrichten, die Sie in den Chat-Assistenten eingeben, werden verarbeitet, um Antworten zu erzeugen.'],
      },
      {
        title: 'Externe Dienste',
        paragraphs: [
          'Der externe Link zur Terminvereinbarung öffnet Calendly als separate Website; sobald Sie diesen Dienst aufrufen, gelten die Datenschutz- und Cookie-Bestimmungen von Calendly.',
        ],
      },
      {
        title: 'Änderungen dieser Erklärung',
        paragraphs: ['Diese Datenschutzerklärung kann von Zeit zu Zeit aktualisiert werden, um Änderungen unserer Datenschutzpraxis, der Funktionen der Website oder der Rechtslage zu berücksichtigen. Die jeweils aktuelle Fassung wird auf dieser Seite veröffentlicht.'],
      },
    ],
    thanks: 'Vielen Dank, dass Sie der Dr. Franke Datenwissenschaften OÜ Ihre Daten anvertrauen. Wir legen großen Wert auf einen hohen Standard bei Datenschutz und Privatsphäre.',
    effective: 'Gültig ab: 11. Dezember 2023',
    reviewed: 'Zuletzt überprüft: 11. November 2026',
    rights: 'Alle Rechte vorbehalten.',
  },
}

export default { en, de } satisfies Localized<typeof en>
