import type { Localized } from '../i18n'

type ServiceNumber = '01' | '02' | '03' | '04'

interface ServiceDetail {
  audience: string
  detail: string
  deliverables: string[]
  proof: { project: string; label: string }
}

const en = {
  intro: {
    eyebrow: 'Services',
    title: 'Expertise that turns',
    accent: 'data into movement.',
    copy: 'One senior point of contact from the first question to production, with no hand-offs between consultants. Strategic guidance and practical implementation across the full data lifecycle.',
  },
  audienceLabel: 'Who it is for',
  deliverablesLabel: 'Typical deliverables',
  proofLabel: 'In practice',
  details: {
    '01': {
      audience:
        'For leadership and technology teams with clear data and AI ambitions but no dependable path from fragmented sources to systems that run in production.',
      detail:
        'In automotive, this meant shaping the strategy for production machine learning on Azure Databricks for Audi, Porsche and Volkswagen, with governance aligned to GDPR and NIST SP 800-53.',
      deliverables: [
        'Assessment of existing data, systems and the decisions they should support',
        'Target architecture and semantic data layer',
        'Prioritised AI roadmap from first use case to production',
        'Model governance: approval, documentation, monitoring and bias audits',
      ],
      proof: { project: 'automotive-ai', label: 'Automotive AI, from BUS data to decisions' },
    },
    '02': {
      audience:
        'For teams that need models working in production—forecasting, classification, behavioral analytics or natural-language data exploration—rather than another prototype.',
      detail:
        'Past work ranges from retention and churn models that improved marketing return on investment by 28% to an LLM-powered analytics layer for natural-language dataset discovery and PySpark generation.',
      deliverables: [
        'Predictive models with documented evaluation',
        'LLM systems and AI agents with review steps and guardrails',
        'Explainability and model reporting for business stakeholders',
        'Feedback loops and A/B tests to measure real impact',
      ],
      proof: { project: 'digital-publishing', label: 'Churn prediction: +28% marketing ROI' },
    },
    '03': {
      audience:
        'For organisations whose data volume or number of sources has outgrown ad-hoc scripts, manual exports and inconsistent reporting.',
      detail:
        'I have unified CAN, LIN and FlexRay bus data on Azure Databricks, built multi-terabyte Spark platforms and helped migrate ProSiebenSat.1 Media’s analytical warehouse to Apache Spark with a unified KPI reporting layer.',
      deliverables: [
        'Tested data pipelines with Spark, Airflow or Databricks',
        'Feature stores for consistent training and inference',
        'Validated migration of data, schemas and workloads',
        'Monitoring and observability for data flows',
      ],
      proof: { project: 'enterprise-search-media', label: 'Warehouse migration to Apache Spark' },
    },
    '04': {
      audience:
        'For teams that already have models but struggle to deploy, monitor or audit them reliably—or that want to raise their own engineering standards.',
      detail:
        'At BODYVISER I built secure Airflow and PostgreSQL pipelines for sensitive health data and led technical delivery through the company’s acquisition; in automotive I mentored data scientists in clean code, test-driven development and CI/CD.',
      deliverables: [
        'Reproducible training and deployment workflows',
        'CI/CD for data and machine-learning code',
        'Model monitoring and auditable controls',
        'Mentoring in clean code, testing and sustainable delivery',
      ],
      proof: { project: 'healthcare-coaching', label: 'Secure pipelines for health data' },
    },
  } satisfies Record<ServiceNumber, ServiceDetail> as Record<string, ServiceDetail | undefined>,
  process: {
    eyebrow: 'A small, sharp process',
    title: ['Three steps.', 'Zero theatre.'],
    copy: 'Every engagement is shaped around fast learning, visible progress and a clean handover.',
    steps: [
      { title: 'Find the lever', text: 'Clarify the decision, bottleneck or repeated task where data can create the most useful change.' },
      { title: 'Prove the path', text: 'Build the smallest credible solution, test it against reality and measure whether it deserves to scale.' },
      { title: 'Automate & transfer', text: 'Make the winning path reliable, observable and understandable—then put it in your team’s hands.' },
    ],
  },
  engagement: {
    eyebrow: 'Working together',
    title: 'How engagements work',
    copy: 'Engagements grow with evidence, not with assumptions. You commit to the next step only once the previous one has shown it is worth it.',
    items: [
      {
        title: 'Start small',
        text: 'Most engagements begin with one focused question: where is the lever? The result is a clear view of where data can create useful change—and where it cannot.',
      },
      {
        title: 'Proof of value',
        text: 'If the lever is real, the smallest credible solution is built and tested against your actual data and processes, so the decision to scale rests on measured results.',
      },
      {
        title: 'Implementation & handover',
        text: 'The proven path becomes a reliable, observable and documented system. Your team is enabled to operate and extend it, so the result does not depend on me.',
      },
      {
        title: 'Remote, in two languages',
        text: 'I work exclusively remotely with clients across Germany, the DACH region and Europe. Working languages are German and English.',
      },
    ],
  },
  compliance: {
    eyebrow: 'Contracts & compliance',
    title: 'The paperwork, settled up front',
    copy: 'Clear contractual terms before any data is touched, so your legal and procurement teams can sign off quickly.',
    items: [
      { title: 'Confidentiality & data protection', text: 'I sign an NDA before sensitive details are shared, and a DPA under GDPR Art. 28 whenever I process your personal data.' },
      { title: 'Your environment', text: 'I prefer to work inside your own systems and cloud accounts, so your data stays there.' },
      { title: 'EU AI Act', text: 'As part of model governance, I help assess and document AI systems for EU AI Act readiness.' },
      { title: 'Invoicing', text: 'Invoices in EUR from Dr. Franke Datenwissenschaften OÜ (Estonia), with VAT reverse charge for EU business clients.' },
      { title: 'Languages', text: 'Contracts and documentation are available in German and English.' },
      { title: 'Insurance', text: 'Professional liability insurance is in place.' },
    ],
  },
  faq: {
    eyebrow: 'Questions & answers',
    title: 'Short answers to common questions',
    items: [
      {
        question: 'What does a data science & AI consultant do?',
        answer:
          'A data science & AI consultant turns data into better decisions and into systems that run in production. In my work, that covers data and AI strategy, applied machine learning and LLM systems, data platforms and MLOps—from the first assessment of your data to a documented system your team can operate.',
      },
      {
        question: 'How does a project start?',
        answer:
          'With a free initial call of about 30 minutes, booked via Calendly or by email. We clarify the decision or process you want to improve and which data and systems already exist. If there is a real lever, the next step is one focused question, not a large commitment up front.',
      },
      {
        question: 'Do you work remotely?',
        answer:
          'Yes, exclusively. I work with clients across Germany, the DACH region and Europe, all of it remotely. Working languages are German and English. Wherever possible, I work directly inside your systems and cloud accounts, so your data stays with you.',
      },
      {
        question: 'Who runs the system afterwards?',
        answer:
          'Your team does. Every engagement ends with a reliable, observable and documented system and a clean handover, so the result does not depend on me. Where it helps, I mentor your engineers in clean code, testing and CI/CD so they can operate and extend the system with confidence.',
      },
      {
        question: 'How is confidential data handled?',
        answer:
          'Under contract and, wherever possible, inside your own environment. I sign NDAs and, when I process personal data, a data processing agreement under GDPR Art. 28. I prefer to work in your systems and cloud accounts so data does not leave them. Past work includes secure pipelines for sensitive health data.',
      },
      {
        question: 'Do you work with mid-sized companies?',
        answer:
          'Yes. Engagements start with one focused question and grow only with measured results, which suits mid-sized companies that need value quickly without first building a large data team. The experience comes from production systems for Audi, Porsche and Volkswagen, scaled to the smallest system that solves your problem.',
      },
    ],
  },
  cta: {
    eyebrow: 'Not sure where to begin?',
    title: 'Bring the messy problem.',
    button: 'Book an initial call',
  },
}

const de: typeof en = {
  intro: {
    eyebrow: 'Leistungen',
    title: 'Expertise, die Daten',
    accent: 'in Bewegung bringt.',
    copy: 'Ein erfahrener Ansprechpartner von der ersten Frage bis zum Produktivbetrieb – ohne Wechsel zwischen Beratern. KI-Beratung, Data-Science-Beratung und praktische Umsetzung über den gesamten Datenlebenszyklus.',
  },
  audienceLabel: 'Für wen',
  deliverablesLabel: 'Typische Ergebnisse',
  proofLabel: 'Aus der Praxis',
  details: {
    '01': {
      audience:
        'Für Geschäftsführung und Technologieverantwortliche mit klaren Daten- und KI-Zielen, denen aber der verlässliche Weg von verstreuten Datenquellen zu produktiven Systemen fehlt.',
      detail:
        'Im Automotive-Umfeld bedeutete das, die Strategie für produktives Machine Learning auf Azure Databricks für Audi, Porsche und Volkswagen mitzugestalten – mit einer Governance nach DSGVO und NIST SP 800-53.',
      deliverables: [
        'Bestandsaufnahme von Daten, Systemen und den Entscheidungen, die sie unterstützen sollen',
        'Zielarchitektur und semantische Datenschicht',
        'Priorisierte KI-Roadmap vom ersten Anwendungsfall bis zum Produktivbetrieb',
        'Model Governance: Freigabe, Dokumentation, Monitoring und Bias-Audits',
      ],
      proof: { project: 'automotive-ai', label: 'Automotive-KI: von Busdaten zu Entscheidungen' },
    },
    '02': {
      audience:
        'Für Teams, die Modelle im Produktivbetrieb brauchen – für Prognosen, Klassifikation, Verhaltensanalysen oder die Datenexploration in natürlicher Sprache – und nicht den nächsten Prototyp.',
      detail:
        'Die Bandbreite reicht von Retention- und Churn-Modellen, die den Marketing-ROI um 28 % gesteigert haben, bis zu einer LLM-gestützten Analyseschicht, mit der sich Datensätze in natürlicher Sprache finden und PySpark-Code generieren lässt.',
      deliverables: [
        'Prognosemodelle mit dokumentierter Evaluation',
        'LLM-Systeme und KI-Agenten mit Prüfschritten und Guardrails',
        'Erklärbarkeit und Modell-Reporting für Fachbereiche',
        'Feedbackschleifen und A/B-Tests, die den tatsächlichen Nutzen messen',
      ],
      proof: { project: 'digital-publishing', label: 'Churn-Prognose: +28 % Marketing-ROI' },
    },
    '03': {
      audience:
        'Für Unternehmen, deren Datenvolumen oder Zahl an Quellen über Ad-hoc-Skripte, manuelle Exporte und uneinheitliches Reporting hinausgewachsen ist.',
      detail:
        'Ich habe CAN-, LIN- und FlexRay-Busdaten auf Azure Databricks zusammengeführt, Spark-Plattformen im Multi-Terabyte-Bereich aufgebaut und die Migration des analytischen Data Warehouse von ProSiebenSat.1 Media auf Apache Spark samt einheitlichem KPI-Reporting begleitet.',
      deliverables: [
        'Getestete Daten-Pipelines mit Spark, Airflow oder Databricks',
        'Feature Stores für konsistentes Training und Inferenz',
        'Validierte Migration von Daten, Schemata und Workloads',
        'Monitoring und Observability für Datenflüsse',
      ],
      proof: { project: 'enterprise-search-media', label: 'Data-Warehouse-Migration auf Apache Spark' },
    },
    '04': {
      audience:
        'Für Teams, die bereits Modelle haben, sie aber nicht zuverlässig ausrollen, überwachen oder prüfen können – oder die ihre eigenen Engineering-Standards anheben wollen.',
      detail:
        'Bei BODYVISER habe ich sichere Airflow- und PostgreSQL-Pipelines für sensible Gesundheitsdaten aufgebaut und die technische Umsetzung bis zur Übernahme des Unternehmens verantwortet; im Automotive-Umfeld habe ich Data Scientists in Clean Code, testgetriebener Entwicklung und CI/CD gecoacht.',
      deliverables: [
        'Reproduzierbare Trainings- und Deployment-Workflows',
        'CI/CD für Daten- und Machine-Learning-Code',
        'Modell-Monitoring und prüfbare Kontrollen',
        'Mentoring in Clean Code, Testing und nachhaltiger Delivery',
      ],
      proof: { project: 'healthcare-coaching', label: 'Sichere Pipelines für Gesundheitsdaten' },
    },
  },
  process: {
    eyebrow: 'Ein schlanker, klarer Prozess',
    title: ['Drei Schritte.', 'Ohne Umwege.'],
    copy: 'Jedes Projekt ist auf schnelles Lernen, sichtbaren Fortschritt und eine saubere Übergabe ausgelegt.',
    steps: [
      { title: 'Den Hebel finden', text: 'Klären, bei welcher Entscheidung, welchem Engpass oder welcher wiederkehrenden Aufgabe Daten den größten Nutzen stiften.' },
      { title: 'Den Nutzen nachweisen', text: 'Die kleinste glaubwürdige Lösung bauen, an der Realität testen und messen, ob sie es wert ist, skaliert zu werden.' },
      { title: 'Automatisieren & übergeben', text: 'Den erfolgreichen Ansatz zuverlässig, beobachtbar und nachvollziehbar machen – und ihn dann in die Hände Ihres Teams legen.' },
    ],
  },
  engagement: {
    eyebrow: 'Zusammenarbeit',
    title: 'So arbeiten wir zusammen',
    copy: 'Ein Projekt wächst mit belastbaren Ergebnissen, nicht mit Annahmen. Den nächsten Schritt gehen Sie erst, wenn der vorherige gezeigt hat, dass er sich lohnt.',
    items: [
      {
        title: 'Klein anfangen',
        text: 'Am Anfang steht meist eine fokussierte Frage: Wo liegt der Hebel? Das Ergebnis ist ein klares Bild, wo Daten echten Nutzen stiften können – und wo nicht.',
      },
      {
        title: 'Proof of Value',
        text: 'Ist der Hebel real, entsteht die kleinste glaubwürdige Lösung und wird mit Ihren tatsächlichen Daten und Prozessen getestet. So beruht die Entscheidung zum Skalieren auf gemessenen Ergebnissen.',
      },
      {
        title: 'Umsetzung & Übergabe',
        text: 'Aus dem bewährten Ansatz wird ein zuverlässiges, beobachtbares und dokumentiertes System. Ihr Team wird befähigt, es selbst zu betreiben und weiterzuentwickeln – ohne Abhängigkeit von mir.',
      },
      {
        title: 'Remote, zweisprachig',
        text: 'Ich arbeite ausschließlich remote mit Kunden in ganz Deutschland, im DACH-Raum und in Europa. Arbeitssprachen sind Deutsch und Englisch.',
      },
    ],
  },
  compliance: {
    eyebrow: 'Verträge & Compliance',
    title: 'Formalitäten, vorab geklärt',
    copy: 'Klare Vertragsgrundlagen, bevor Daten ins Spiel kommen – damit Rechtsabteilung und Einkauf zügig zustimmen können.',
    items: [
      { title: 'Vertraulichkeit & Datenschutz', text: 'Vor dem Austausch sensibler Details unterzeichne ich eine Geheimhaltungsvereinbarung (NDA); verarbeite ich personenbezogene Daten für Sie, schließen wir einen AVV nach Art. 28 DSGVO.' },
      { title: 'Ihre Umgebung', text: 'Ich arbeite bevorzugt direkt in Ihren Systemen und Cloud-Konten – Ihre Daten bleiben dort.' },
      { title: 'EU AI Act', text: 'Im Rahmen der Model Governance unterstütze ich Sie dabei, KI-Systeme für den EU AI Act zu bewerten und zu dokumentieren.' },
      { title: 'Rechnungsstellung', text: 'Rechnungen in EUR über die Dr. Franke Datenwissenschaften OÜ (Estland), für Geschäftskunden in der EU im Reverse-Charge-Verfahren.' },
      { title: 'Sprachen', text: 'Verträge und Dokumentation gibt es auf Deutsch und Englisch.' },
      { title: 'Versicherung', text: 'Eine Berufshaftpflichtversicherung besteht.' },
    ],
  },
  faq: {
    eyebrow: 'Fragen & Antworten',
    title: 'Kurze Antworten auf häufige Fragen',
    items: [
      {
        question: 'Was macht ein Berater für Data Science & KI?',
        answer:
          'Data-Science-Beratung und KI-Beratung machen aus Daten bessere Entscheidungen und Systeme, die im Produktivbetrieb laufen. Bei mir umfasst das Daten- und KI-Strategie, angewandtes Machine Learning und LLM-Systeme, Datenplattformen und MLOps – von der ersten Bestandsaufnahme Ihrer Daten bis zu einem dokumentierten System, das Ihr Team selbst betreibt.',
      },
      {
        question: 'Wie beginnt ein Projekt?',
        answer:
          'Mit einem kostenlosen Erstgespräch von etwa 30 Minuten, das Sie über Calendly oder per E-Mail vereinbaren. Wir klären, welche Entscheidung oder welchen Prozess Sie verbessern möchten und welche Daten und Systeme es bereits gibt. Gibt es einen echten Hebel, folgt eine fokussierte erste Frage – keine große Vorabverpflichtung.',
      },
      {
        question: 'Arbeiten Sie remote?',
        answer:
          'Ja, ausschließlich. Ich arbeite mit Kunden in ganz Deutschland, im DACH-Raum und in Europa – vollständig remote. Arbeitssprachen sind Deutsch und Englisch. Wo möglich, arbeite ich direkt in Ihren Systemen und Cloud-Konten, sodass Ihre Daten bei Ihnen bleiben.',
      },
      {
        question: 'Wer betreibt das System danach?',
        answer:
          'Ihr Team. Jedes Projekt endet mit einem zuverlässigen, beobachtbaren und dokumentierten System und einer sauberen Übergabe, damit das Ergebnis nicht von mir abhängt. Wo es hilft, begleite ich Ihre Entwicklerinnen und Entwickler in Clean Code, Testing und CI/CD, damit sie das System sicher betreiben und weiterentwickeln.',
      },
      {
        question: 'Wie gehen Sie mit vertraulichen Daten um?',
        answer:
          'Vertraglich abgesichert und, wo immer möglich, innerhalb Ihrer eigenen Umgebung. Ich unterzeichne NDAs und, wenn ich personenbezogene Daten verarbeite, einen AVV nach Art. 28 DSGVO. Ich arbeite bevorzugt in Ihren Systemen und Cloud-Konten, damit die Daten sie nicht verlassen. Zu meinen Projekten gehören sichere Pipelines für sensible Gesundheitsdaten.',
      },
      {
        question: 'Arbeiten Sie auch mit dem Mittelstand?',
        answer:
          'Ja. Projekte beginnen mit einer fokussierten Frage und wachsen nur mit gemessenen Ergebnissen – das passt gut zum Mittelstand, der schnell Nutzen braucht, ohne zuerst ein großes Datenteam aufzubauen. Die Erfahrung stammt aus Produktivsystemen für Audi, Porsche und Volkswagen, übertragen auf das kleinste System, das Ihr Problem löst.',
      },
    ],
  },
  cta: {
    eyebrow: 'Unsicher, wo Sie anfangen sollen?',
    title: 'Bringen Sie das unübersichtliche Problem mit.',
    button: 'Erstgespräch vereinbaren',
  },
}

export default { en, de } satisfies Localized<typeof en>
