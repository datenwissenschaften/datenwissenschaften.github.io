import type { Localized } from '../i18n'

type ToolkitGroup = {
  title: string
  description: string
  wide?: boolean
  items: { name: string; description: string }[]
}

const toolkitEn: ToolkitGroup[] = [
  {
    title: 'AI & machine learning',
    description: 'Tools for training, serving and evaluating predictive and generative AI models.',
    items: [
      { name: 'scikit-learn', description: 'A Python library for classical machine learning, preprocessing, model selection and evaluation.' },
      { name: 'PyCaret', description: 'A low-code Python framework that automates common machine-learning experiments and comparisons.' },
      { name: 'Ollama', description: 'A local runtime for downloading, running and serving large language models.' },
      { name: 'llama-factory', description: 'A framework for fine-tuning and evaluating large language models with a wide range of training methods.' },
      { name: 'FiftyOne', description: 'A visual toolkit for exploring datasets, evaluating computer-vision models and finding data-quality issues.' },
    ],
  },
  {
    title: 'Languages & services',
    description: 'Languages, libraries and frameworks used to transform data and build production services.',
    items: [
      { name: 'Python', description: 'A general-purpose programming language widely used for data science, automation and backend services.' },
      { name: 'PySpark', description: 'The Python API for Apache Spark, used to process large datasets across distributed systems.' },
      { name: 'pandas', description: 'A Python library for tabular data manipulation, analysis and transformation.' },
      { name: 'Scala', description: 'A JVM language commonly used to build type-safe, high-performance Spark applications.' },
      { name: 'SQL', description: 'The standard language for querying, transforming and managing relational data.' },
      { name: 'FastAPI', description: 'A modern Python framework for building fast, typed and automatically documented web APIs.' },
      { name: 'Fugue', description: 'An abstraction layer for running data workflows consistently across pandas, Spark and other compute engines.' },
    ],
  },
  {
    title: 'Data & pipelines',
    description: 'Platforms and services for storing, transforming, orchestrating and delivering reliable data.',
    items: [
      { name: 'Apache Spark', description: 'A distributed processing engine for large-scale data engineering, analytics and machine learning.' },
      { name: 'Databricks', description: 'A lakehouse platform that combines data engineering, analytics, governance and machine learning.' },
      { name: 'Airflow', description: 'A workflow orchestrator for scheduling, monitoring and managing data pipelines as code.' },
      { name: 'Matillion', description: 'A cloud data integration platform for building and operating ELT pipelines.' },
      { name: 'PostgreSQL', description: 'A robust open-source relational database with strong SQL and extensibility support.' },
    ],
  },
  {
    title: 'Cloud services',
    description: 'Managed infrastructure and platform services used to deploy scalable data and AI systems.',
    items: [
      { name: 'Azure Cloud', description: 'Microsoft’s cloud platform for computing, storage, networking, data and AI services.' },
      { name: 'AWS', description: 'Amazon Web Services, a broad cloud platform for infrastructure, data processing and machine learning.' },
      { name: 'Google Cloud', description: 'Google’s cloud platform for infrastructure, analytics, data engineering and artificial intelligence.' },
    ],
  },
  {
    title: 'Governance & collaboration',
    description: 'Practices, standards and tools that make delivery controlled, auditable and collaborative.',
    wide: true,
    items: [
      { name: 'Model governance', description: 'Policies and controls for approving, documenting, monitoring and retiring models responsibly.' },
      { name: 'Bias audits', description: 'Structured tests that identify unfair or systematically different model outcomes across groups.' },
      { name: 'A/B testing', description: 'A controlled experiment comparing variants to determine which produces a better outcome.' },
      { name: 'GDPR', description: 'The EU regulation governing lawful, transparent and secure processing of personal data.' },
      { name: 'NIST SP 800-53', description: 'A catalogue of security and privacy controls for protecting information systems and organisations.' },
      { name: 'CI/CD', description: 'Automated practices for continuously testing, integrating and safely delivering software changes.' },
      { name: 'Scrum', description: 'An iterative delivery framework organised around short cycles, defined roles and regular feedback.' },
      { name: 'Kanban', description: 'A visual workflow method that limits work in progress and improves flow.' },
      { name: 'SAFe', description: 'The Scaled Agile Framework for coordinating agile planning and delivery across large organisations.' },
      { name: 'GitHub', description: 'A platform for Git-based source control, code review, automation and team collaboration.' },
      { name: 'Jira', description: 'A work-tracking platform for planning, prioritising and managing software delivery.' },
      { name: 'Confluence', description: 'A collaborative workspace for documentation, decisions and shared project knowledge.' },
    ],
  },
]

const toolkitDe: ToolkitGroup[] = [
  {
    title: 'KI & Machine Learning',
    description: 'Werkzeuge, um prädiktive und generative KI-Modelle zu trainieren, bereitzustellen und zu evaluieren.',
    items: [
      { name: 'scikit-learn', description: 'Eine Python-Bibliothek für klassisches Machine Learning, Vorverarbeitung, Modellauswahl und Evaluation.' },
      { name: 'PyCaret', description: 'Ein Low-Code-Framework für Python, das typische Machine-Learning-Experimente und Modellvergleiche automatisiert.' },
      { name: 'Ollama', description: 'Eine lokale Laufzeitumgebung, um große Sprachmodelle herunterzuladen, auszuführen und bereitzustellen.' },
      { name: 'llama-factory', description: 'Ein Framework für das Fine-Tuning und die Evaluation großer Sprachmodelle mit einer Vielzahl von Trainingsverfahren.' },
      { name: 'FiftyOne', description: 'Ein visuelles Toolkit, um Datensätze zu erkunden, Computer-Vision-Modelle zu bewerten und Datenqualitätsprobleme zu finden.' },
    ],
  },
  {
    title: 'Sprachen & Services',
    description: 'Sprachen, Bibliotheken und Frameworks, mit denen Daten transformiert und produktive Services gebaut werden.',
    items: [
      { name: 'Python', description: 'Eine universelle Programmiersprache, die in Data Science, Automatisierung und Backend-Services weit verbreitet ist.' },
      { name: 'PySpark', description: 'Die Python-Schnittstelle zu Apache Spark, um große Datensätze verteilt zu verarbeiten.' },
      { name: 'pandas', description: 'Eine Python-Bibliothek zum Bearbeiten, Analysieren und Transformieren tabellarischer Daten.' },
      { name: 'Scala', description: 'Eine JVM-Sprache, mit der häufig typsichere, performante Spark-Anwendungen entwickelt werden.' },
      { name: 'SQL', description: 'Die Standardsprache, um relationale Daten abzufragen, zu transformieren und zu verwalten.' },
      { name: 'FastAPI', description: 'Ein modernes Python-Framework für schnelle, typisierte und automatisch dokumentierte Web-APIs.' },
      { name: 'Fugue', description: 'Eine Abstraktionsschicht, mit der Daten-Workflows einheitlich auf pandas, Spark und anderen Compute-Engines laufen.' },
    ],
  },
  {
    title: 'Daten & Pipelines',
    description: 'Plattformen und Services, um verlässliche Daten zu speichern, zu transformieren, zu orchestrieren und bereitzustellen.',
    items: [
      { name: 'Apache Spark', description: 'Eine verteilte Verarbeitungs-Engine für Data Engineering, Analytics und Machine Learning im großen Maßstab.' },
      { name: 'Databricks', description: 'Eine Lakehouse-Plattform, die Data Engineering, Analytics, Governance und Machine Learning vereint.' },
      { name: 'Airflow', description: 'Ein Workflow-Orchestrator, mit dem Datenpipelines als Code geplant, überwacht und verwaltet werden.' },
      { name: 'Matillion', description: 'Eine Cloud-Plattform für Datenintegration, mit der ELT-Pipelines aufgebaut und betrieben werden.' },
      { name: 'PostgreSQL', description: 'Eine robuste relationale Open-Source-Datenbank mit starkem SQL-Support und guter Erweiterbarkeit.' },
    ],
  },
  {
    title: 'Cloud-Services',
    description: 'Verwaltete Infrastruktur- und Plattformdienste, um skalierbare Daten- und KI-Systeme zu betreiben.',
    items: [
      { name: 'Azure Cloud', description: 'Die Cloud-Plattform von Microsoft für Rechenleistung, Speicher, Netzwerk, Daten- und KI-Services.' },
      { name: 'AWS', description: 'Amazon Web Services, eine umfassende Cloud-Plattform für Infrastruktur, Datenverarbeitung und Machine Learning.' },
      { name: 'Google Cloud', description: 'Die Cloud-Plattform von Google für Infrastruktur, Analytics, Data Engineering und künstliche Intelligenz.' },
    ],
  },
  {
    title: 'Governance & Zusammenarbeit',
    description: 'Praktiken, Standards und Werkzeuge, die die Umsetzung kontrolliert, prüfbar und kooperativ machen.',
    wide: true,
    items: [
      { name: 'Model Governance', description: 'Richtlinien und Kontrollen, um Modelle verantwortungsvoll freizugeben, zu dokumentieren, zu überwachen und außer Betrieb zu nehmen.' },
      { name: 'Bias-Audits', description: 'Strukturierte Tests, die unfaire oder systematisch abweichende Modellergebnisse für verschiedene Gruppen aufdecken.' },
      { name: 'A/B-Tests', description: 'Kontrollierte Experimente, die Varianten vergleichen, um festzustellen, welche das bessere Ergebnis liefert.' },
      { name: 'DSGVO', description: 'Die EU-Verordnung für die rechtmäßige, transparente und sichere Verarbeitung personenbezogener Daten.' },
      { name: 'NIST SP 800-53', description: 'Ein Katalog von Sicherheits- und Datenschutzkontrollen zum Schutz von Informationssystemen und Organisationen.' },
      { name: 'CI/CD', description: 'Automatisierte Verfahren, um Softwareänderungen fortlaufend zu testen, zu integrieren und sicher auszuliefern.' },
      { name: 'Scrum', description: 'Ein iteratives Vorgehensmodell mit kurzen Zyklen, klaren Rollen und regelmäßigem Feedback.' },
      { name: 'Kanban', description: 'Eine visuelle Methode zur Arbeitssteuerung, die parallele Aufgaben begrenzt und den Arbeitsfluss verbessert.' },
      { name: 'SAFe', description: 'Das Scaled Agile Framework zur Abstimmung agiler Planung und Umsetzung in großen Organisationen.' },
      { name: 'GitHub', description: 'Eine Plattform für Git-basierte Versionsverwaltung, Code-Reviews, Automatisierung und Zusammenarbeit im Team.' },
      { name: 'Jira', description: 'Ein Werkzeug zur Aufgabenverfolgung, um Softwareprojekte zu planen, zu priorisieren und zu steuern.' },
      { name: 'Confluence', description: 'Ein gemeinsamer Arbeitsbereich für Dokumentation, Entscheidungen und Projektwissen.' },
    ],
  },
]

const en = {
  eyebrow: 'About Dr. Franke',
  title: 'Rigorous thinking.',
  accent: 'Practical delivery.',
  copy: 'Dr. Martin Franke is a German computer scientist (doctorate, TU Dresden, 2016) and independent Data Science & AI Consultant, working remotely from Saalfeld (Germany) and Tallinn (Estonia). Fifteen years of machine learning, AI transformation and technical leadership across automotive, healthcare, media and research.',
  portraitAlt: 'Dr. Martin Franke, Data Science & AI Consultant',
  portraitCaption: ['Dr. Martin Franke', 'Founder · Data Science & AI Consultant'],
  lead: ['I help organisations use data with more ', 'clarity, speed and independence.'],
  paragraphs: [
    'My work spans AI strategy, data engineering, predictive analytics, model governance and production delivery. I have led automotive AI programmes, built multi-terabyte Spark platforms, developed personalised healthcare products and translated research into working systems. That breadth lets me follow a problem from the boardroom question to the production pipeline—and keep the intent intact along the way.',
    'I also invest in the capability around the technology: mentoring data scientists in clean code, test-driven development, CI/CD and reproducible workflows. Dr. Franke Datenwissenschaften is deliberately lean, giving clients direct access to senior thinking and hands-on implementation.',
    'Having lived for extended periods in four countries, I have also had the opportunity to learn from different cultures and ways of working—and to build a global network of colleagues and collaborators. That experience has taught me to listen carefully, adapt to the local context and collaborate thoughtfully across borders.',
  ],
  doctorate: {
    label: 'Doctorate',
    before: 'I hold a doctorate (Dr.) in computer science from Technische Universität Dresden, supervised by Prof. Dr. Gerhard Weber. My thesis, ',
    thesisTitle: '“Wissensbasierte Tagesrhythmenerfassung und -auswertung in ubiquitären Umgebungen”',
    after: ' (submitted 2015, defended on 6 April 2016, published 2016), deals with the knowledge-based recognition and analysis of daily routines from heterogeneous sensor data. It combines machine learning with semantic modelling through ontologies, in the context of Ambient Assisted Living.',
  },
  workWithMe: 'Work with me',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  principles: {
    eyebrow: 'Operating principles',
    title: 'How good work gets done.',
    items: [
      { title: 'Start with the decision', text: 'Technology earns its place by improving an outcome—not by adding another logo to the architecture diagram.' },
      { title: 'Make complexity pay rent', text: 'Every extra model, service and dependency must create more value than the burden it introduces.' },
      { title: 'Automate the repeatable', text: 'Human attention belongs on exceptions and judgment. Everything predictable should become a dependable flow.' },
      { title: 'Leave capability behind', text: 'Good consulting reduces dependency. Your team should understand, operate and extend what we build together.' },
    ],
  },
  experience: {
    eyebrow: 'Selected experience',
    title: ['Research depth.', 'Production perspective.'],
    copy: 'Roles spanning academic research, product leadership, enterprise platforms and applied AI strategy.',
  },
  toolkit: {
    eyebrow: 'Core technologies',
    title: 'A practical, production-ready toolkit.',
    copy: 'Selected for the problem, with an emphasis on tested code, reproducible delivery and governance.',
    groups: toolkitEn,
  },
}

const de: typeof en = {
  eyebrow: 'Über Dr. Franke',
  title: 'Gründlich gedacht.',
  accent: 'Pragmatisch umgesetzt.',
  copy: 'Dr. Martin Franke ist deutscher Informatiker (Promotion an der TU Dresden, 2016) und unabhängiger Berater für Data Science & KI. Er arbeitet remote von Saalfeld (Deutschland) und Tallinn (Estland) aus. Fünfzehn Jahre Machine Learning, KI-Transformation und technische Führung in Automobilindustrie, Gesundheitswesen, Medien und Forschung.',
  portraitAlt: 'Dr. Martin Franke, Berater für Data Science & KI',
  portraitCaption: ['Dr. Martin Franke', 'Gründer · Berater für Data Science & KI'],
  lead: ['Ich helfe Unternehmen, ihre Daten mit mehr ', 'Klarheit, Tempo und Unabhängigkeit zu nutzen.'],
  paragraphs: [
    'Meine Arbeit reicht von KI-Strategie über Data Engineering, Predictive Analytics und Model Governance bis zum produktiven Betrieb. Ich habe KI-Programme in der Automobilindustrie geleitet, Spark-Plattformen im Multi-Terabyte-Bereich aufgebaut, personalisierte Gesundheitsprodukte entwickelt und Forschung in funktionierende Systeme übersetzt. Diese Bandbreite erlaubt es mir, ein Thema von der Frage der Geschäftsführung bis zur produktiven Pipeline zu begleiten – ohne dass die ursprüngliche Absicht unterwegs verloren geht.',
    'Genauso wichtig ist mir, dass Teams die Technik selbst beherrschen: Ich begleite Data Scientists als Mentor bei Clean Code, testgetriebener Entwicklung, CI/CD und reproduzierbaren Workflows. Dr. Franke Datenwissenschaften ist bewusst schlank aufgestellt – Sie arbeiten direkt mit erfahrener Beratung und praktischer Umsetzung aus einer Hand.',
    'Ich habe längere Zeit in vier Ländern gelebt. Dabei konnte ich von unterschiedlichen Kulturen und Arbeitsweisen lernen und ein internationales Netzwerk aus Kolleginnen, Kollegen und Partnern aufbauen. Diese Erfahrung hat mich gelehrt, genau zuzuhören, mich auf den jeweiligen Kontext einzustellen und über Grenzen hinweg umsichtig zusammenzuarbeiten.',
  ],
  doctorate: {
    label: 'Promotion',
    before: 'Meine Promotion (Dr.) in Informatik habe ich an der Technischen Universität Dresden abgeschlossen, betreut von Prof. Dr. Gerhard Weber. Meine Dissertation ',
    thesisTitle: '„Wissensbasierte Tagesrhythmenerfassung und -auswertung in ubiquitären Umgebungen“',
    after: ' (eingereicht 2015, verteidigt am 6. April 2016, veröffentlicht 2016) befasst sich mit der wissensbasierten Erkennung und Auswertung von Tagesabläufen aus heterogenen Sensordaten. Sie verbindet Machine Learning mit semantischer Modellierung durch Ontologien – im Kontext von Ambient Assisted Living.',
  },
  workWithMe: 'Zusammenarbeit anfragen',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  principles: {
    eyebrow: 'Arbeitsprinzipien',
    title: 'So entsteht gute Arbeit.',
    items: [
      { title: 'Von der Entscheidung her denken', text: 'Technologie rechtfertigt sich dadurch, dass sie ein Ergebnis verbessert – nicht durch ein weiteres Logo im Architekturdiagramm.' },
      { title: 'Komplexität muss sich lohnen', text: 'Jedes zusätzliche Modell, jeder Service und jede Abhängigkeit muss mehr Nutzen stiften, als sie an Aufwand mitbringt.' },
      { title: 'Wiederholbares automatisieren', text: 'Menschliche Aufmerksamkeit gehört zu Ausnahmen und Urteilsfragen. Alles Vorhersehbare sollte zu einem verlässlichen Ablauf werden.' },
      { title: 'Kompetenz im Haus lassen', text: 'Gute Beratung verringert Abhängigkeit. Ihr Team sollte verstehen, betreiben und weiterentwickeln können, was wir gemeinsam aufbauen.' },
    ],
  },
  experience: {
    eyebrow: 'Ausgewählte Stationen',
    title: ['Forschungstiefe.', 'Produktionsperspektive.'],
    copy: 'Rollen in akademischer Forschung, Produktverantwortung, Unternehmensplattformen und angewandter KI-Strategie.',
  },
  toolkit: {
    eyebrow: 'Kerntechnologien',
    title: 'Ein praxiserprobtes Toolkit für den Produktivbetrieb.',
    copy: 'Ausgewählt nach Problemstellung – mit Fokus auf getesteten Code, reproduzierbare Auslieferung und Governance.',
    groups: toolkitDe,
  },
}

export default { en, de } satisfies Localized<typeof en>
