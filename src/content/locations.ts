import type { Localized } from '../i18n'
import saalfeldImage from '../assets/img/locations/saalfeld.webp'
import somersetWestImage from '../assets/img/locations/somerset-west.webp'
import tallinnImage from '../assets/img/locations/tallinn.webp'

const shared = {
  tallinn: {
    number: '01',
    city: 'Tallinn',
    image: tallinnImage,
    imageSize: { width: 1600, height: 588 },
    photoAuthor: 'ZeevoX',
    photoUrl: 'https://commons.wikimedia.org/wiki/File:Panoramic_View_of_Tallinn,_Estonia.jpg',
    mapUrl: 'https://www.google.com/maps?q=Tallinn,+Estonia&output=embed',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Tallinn%2C%20Estonia',
  },
  saalfeld: {
    number: '02',
    city: 'Saalfeld',
    image: saalfeldImage,
    imageSize: { width: 1600, height: 1012 },
    photoAuthor: 'Kora27',
    photoUrl: 'https://commons.wikimedia.org/wiki/File:Marktplatz_in_Saalfeld,_Th%C3%BCringen_2H1A4922WI.jpg',
    mapUrl: 'https://www.google.com/maps?q=Saalfeld/Saale,+Germany&output=embed',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Saalfeld%2FSaale%2C%20Germany',
  },
  somersetWest: {
    number: '03',
    city: 'Somerset West',
    image: somersetWestImage,
    imageSize: { width: 1600, height: 722 },
    photoAuthor: 'Aerial Picture and Video',
    photoUrl: 'https://commons.wikimedia.org/wiki/File:Helderberg_Mountain_Range,_Somerset_West,_South_Africa.JPG',
    mapUrl: 'https://www.google.com/maps?q=Somerset+West,+South+Africa&output=embed',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Somerset%20West%2C%20South%20Africa',
  },
}

const en = {
  eyebrow: 'Where to find me',
  title: 'Three places. One',
  accent: 'connected practice.',
  copy: 'From Northern Europe to the Cape, my locations keep me close to the people and organisations I work with—across borders, time zones and ambitious ideas.',
  opening: {
    eyebrow: 'Local presence · Global work',
    title: 'Close to the work, wherever it happens.',
    copy: 'My footprint spans the Baltic, Central Europe and Southern Africa. Each location is a practical base for direct collaboration, while my work continues wherever a valuable data problem needs solving.',
  },
  listLabel: 'My locations',
  openInMaps: 'Open in Google Maps',
  photo: 'Photo:',
  map: 'Map',
  mapTitle: (city: string) => `Map showing my ${city} location`,
  locations: [
    {
      ...shared.tallinn,
      label: 'Headquarters',
      country: 'Estonia',
      address: ['15551 Tallinn', 'Estonia'],
      description:
        'Dr. Franke Datenwissenschaften OÜ is registered in Tallinn, so contracts, invoicing and company administration run through Estonia—an EU member state with one of Europe’s most digital public administrations. For clients, that means a straightforward European business partner: EU contract terms, EU VAT handling and the GDPR as the baseline for any work involving personal data. Most engagements run remotely; meetings in Tallinn or elsewhere in the Baltic region can be arranged whenever a project benefits from being in the same room.',
      imageAlt: 'Panoramic view across Tallinn, Estonia',
    },
    {
      ...shared.saalfeld,
      label: 'Germany',
      country: 'Germany',
      address: ['07318 Saalfeld', 'Germany'],
      description:
        'Saalfeld/Saale in Thuringia is my base in Germany. Its central position puts much of the country within a day’s travel, which makes on-site workshops, kick-offs and architecture reviews practical for clients across Germany, Austria and Switzerland. Day-to-day delivery usually runs remotely, in German or English, with time on site planned where it makes a real difference: understanding the problem, aligning stakeholders, handing over systems and enabling the team that will run them.',
      imageAlt: 'Saalfeld market square with St John’s Church rising above the historic buildings',
    },
    {
      ...shared.somersetWest,
      label: 'South Africa',
      country: 'South Africa',
      address: ['7130 Somerset West', 'South Africa'],
      description:
        'Somerset West lies in the Helderberg area of the Western Cape, around 50 kilometres from Cape Town. South African time is UTC+2—one hour ahead of Central Europe in winter and level with it in summer—so remote work with European teams fits comfortably into normal office hours. From here I support clients in South Africa and across the Southern Hemisphere, and stay connected to the local remote-work scene through the Helderberg Remote community.',
      imageAlt: 'Aerial view of Somerset West beneath the Helderberg mountain range',
    },
  ],
}

const de: typeof en = {
  eyebrow: 'Wo Sie mich finden',
  title: 'Drei Standorte. Eine',
  accent: 'vernetzte Praxis.',
  copy: 'Von Nordeuropa bis ans Kap: Meine Standorte halten mich nah an den Menschen und Organisationen, mit denen ich arbeite – über Grenzen, Zeitzonen und ambitionierte Ideen hinweg.',
  opening: {
    eyebrow: 'Lokal präsent · International tätig',
    title: 'Nah an der Arbeit – wo immer sie stattfindet.',
    copy: 'Meine Standorte reichen vom Baltikum über Mitteleuropa bis ins südliche Afrika. Jeder davon ist eine praktische Basis für die direkte Zusammenarbeit, während meine Arbeit überall dort weitergeht, wo sich ein lohnendes Datenproblem lösen lässt.',
  },
  listLabel: 'Meine Standorte',
  openInMaps: 'In Google Maps öffnen',
  photo: 'Foto:',
  map: 'Karte',
  mapTitle: (city: string) => `Karte mit meinem Standort ${city}`,
  locations: [
    {
      ...shared.tallinn,
      label: 'Firmensitz',
      country: 'Estland',
      address: ['15551 Tallinn', 'Estland'],
      description:
        'Die Dr. Franke Datenwissenschaften OÜ hat ihren Sitz in Tallinn. Verträge, Rechnungsstellung und Verwaltung laufen damit über Estland – einen EU-Mitgliedstaat mit einer der digitalsten Verwaltungen Europas. Für Sie bedeutet das einen unkomplizierten europäischen Geschäftspartner: Vertragsgestaltung nach EU-Standards, Umsatzsteuer nach EU-Regeln und die DSGVO als Grundlage für jede Arbeit mit personenbezogenen Daten. Die meisten Projekte laufen remote; Termine in Tallinn oder im übrigen Baltikum lassen sich vereinbaren, wenn ein Projekt davon profitiert, gemeinsam an einem Tisch zu sitzen.',
      imageAlt: 'Panoramablick über Tallinn, Estland',
    },
    {
      ...shared.saalfeld,
      label: 'Deutschland',
      country: 'Deutschland',
      address: ['07318 Saalfeld', 'Deutschland'],
      description:
        'Saalfeld/Saale in Thüringen ist mein Standort in Deutschland – KI-Beratung aus Thüringen für Unternehmen in ganz Deutschland und im übrigen DACH-Raum. Durch die zentrale Lage ist ein Großteil des Landes innerhalb eines Tages erreichbar, sodass Workshops, Kick-offs und Architektur-Reviews vor Ort gut planbar sind. Die laufende Umsetzung erfolgt meist remote, auf Deutsch oder Englisch. Vor-Ort-Termine setze ich dort ein, wo sie wirklich etwas bewirken: beim Verstehen der Ausgangslage, beim Abstimmen mit Stakeholdern, bei der Übergabe und bei der Befähigung Ihres Teams.',
      imageAlt: 'Marktplatz in Saalfeld mit der Johanneskirche über den historischen Gebäuden',
    },
    {
      ...shared.somersetWest,
      label: 'Südafrika',
      country: 'Südafrika',
      address: ['7130 Somerset West', 'Südafrika'],
      description:
        'Somerset West liegt in der Helderberg-Region am Westkap, rund 50 Kilometer von Kapstadt entfernt. Die südafrikanische Zeit entspricht UTC+2 – im Winter eine Stunde vor der mitteleuropäischen Zeit, im Sommer gleichauf. Die Zusammenarbeit mit Teams in Europa passt damit problemlos in die üblichen Bürozeiten. Von hier aus betreue ich Kunden in Südafrika und auf der gesamten Südhalbkugel und bin über die Community Helderberg Remote mit der lokalen Remote-Work-Szene verbunden.',
      imageAlt: 'Luftaufnahme von Somerset West unterhalb der Helderberg-Bergkette',
    },
  ],
}

export default { en, de } satisfies Localized<typeof en>
