import type { Localized } from '../i18n'
import automotiveImage from '../assets/img/portfolio/automotive-project-image.webp'
import healthcareImage from '../assets/img/portfolio/healthcare-project-image.webp'
import contentPublishingImage from '../assets/img/portfolio/content-publishing-project-image.webp'
import mediaImage from '../assets/img/portfolio/media-project-image.webp'

const services = [
  {
    number: '01',
    title: 'Data & AI Strategy',
    text: 'A clear path from fragmented data to dependable AI. I define target architectures, semantic data layers and governance models that connect business priorities with production delivery.',
    outcome: 'AI roadmaps · Architecture · Model Governance',
  },
  {
    number: '02',
    title: 'Applied Machine Learning',
    text: 'Production-grade models and AI agents for forecasting, classification, behavioral analytics and natural-language data exploration—supported by explainability, evaluation and feedback loops.',
    outcome: 'Predictive ML · LLM systems · Explainability',
  },
  {
    number: '03',
    title: 'Data Platforms',
    text: 'Reliable data and ML foundations for high-volume workloads. I build tested pipelines, feature stores and analytical services with Python, Spark, Airflow and Databricks.',
    outcome: 'Spark pipelines · Feature Stores · Observability',
  },
  {
    number: '04',
    title: 'MLOps & Delivery',
    text: 'Operationalise models with reproducible workflows, CI/CD, monitoring and auditable controls. I also mentor teams in clean code, testing and sustainable delivery practices.',
    outcome: 'CI/CD · Monitoring · Team Enablement',
  },
]

const projects = [
  {
    id: 'automotive-ai',
    sector: 'Automotive',
    period: '2019–2026',
    role: 'Lead AI Strategist & Lead Data Scientist',
    organisation: 'CARIAD SE · Cognizant Mobility GmbH',
    title: 'Automotive AI, from BUS data to decisions',
    text: 'Led the strategy and delivery of production ML systems for driver behavior, safety analytics, AD/ADAS, homologation and issue resolution. Unified CAN, LIN and FlexRay data on Azure Databricks and introduced an LLM-powered analytics layer for natural-language dataset discovery and PySpark generation.',
    result: 'Reduced complex engineering analysis from hours to minutes. This platform for Audi, Porsche and Volkswagen was selected over three internal alternatives for code quality, reliability and delivery speed, with governance aligned to GDPR and NIST SP 800-53.',
    image: automotiveImage,
    imageSize: { width: 807, height: 608 },
    tags: ['Azure Databricks', 'PySpark', 'Feature store', 'MLOps'],
  },
  {
    id: 'healthcare-coaching',
    sector: 'Healthcare',
    period: '2018–2019',
    role: 'Chief Technology Officer',
    organisation: 'BODYVISER GmbH',
    title: 'Personalised coaching for better wellbeing',
    text: 'Developed a machine-learning platform that combined biometric and behavioral data to recommend stress-reduction actions. Research from Dr. Franke’s doctoral work informed predictive health-risk scoring and lifestyle-pattern detection.',
    result: 'Built secure, production-grade Airflow and PostgreSQL pipelines and led technical delivery through the company’s acquisition.',
    image: healthcareImage,
    imageSize: { width: 1010, height: 676 },
    tags: ['Keras', 'scikit-learn', 'Airflow', 'PostgreSQL', 'Health data'],
  },
  {
    id: 'digital-publishing',
    sector: 'Digital Publishing',
    period: '2017–2018',
    role: 'Data Scientist',
    organisation: 'Social Media Interactive · Social Sweethearts',
    title: 'Content performance, predicted',
    text: 'Built retention and churn models from audience, Google Analytics and CRM data, then unified newsletter, shop and analytics sources through production ETL workflows.',
    result: 'Improved marketing return on investment by 28% through more effective targeting and retention decisions.',
    image: contentPublishingImage,
    imageSize: { width: 1209, height: 636 },
    tags: ['Python', 'SparkSQL', 'Looker', 'Matillion', 'Churn prediction'],
  },
  {
    id: 'enterprise-search-media',
    sector: 'Enterprise Search & Media',
    period: '2015–2017',
    role: 'Data Scientist',
    organisation: 'IntraFind Software AG · inovex GmbH',
    title: 'Search relevance and a modern data foundation',
    text: 'Improved enterprise search relevance with supervised ranking models and helped migrate ProSiebenSat.1 Media’s analytical warehouse to Apache Spark with a unified KPI reporting layer.',
    result: 'Created scalable foundations for faster search and more consistent, decision-ready reporting.',
    image: mediaImage,
    imageSize: { width: 1214, height: 711 },
    tags: ['Learning to rank', 'Apache Spark', 'Data migration', 'KPI reporting'],
  },
]

const experience = [
  {
    period: '2025–2026',
    role: 'Lead AI Strategist',
    organisation: 'CARIAD SE · Automotive',
    summary: 'AI strategy, automotive BUS data, LLM-driven analytics and governed production agents on Azure Databricks.',
  },
  {
    period: '2019–2025',
    role: 'Lead Data Scientist',
    organisation: 'Cognizant Mobility GmbH · Automotive',
    summary: 'Multi-terabyte ML and ETL platforms for Volkswagen Group brands, plus model governance and team mentoring.',
  },
  {
    period: '2018–2019',
    role: 'Chief Technology Officer',
    organisation: 'BODYVISER GmbH · Healthcare',
    summary: 'Personalised health coaching, risk modelling and secure data pipelines through company acquisition.',
  },
  {
    period: '2017–2018',
    role: 'Data Scientist',
    organisation: 'Social Media Interactive · Social Sweethearts',
    summary: 'Retention and churn prediction that increased marketing ROI by 28%.',
  },
  {
    period: '2015–2017',
    role: 'Data Scientist',
    organisation: 'IntraFind Software AG · inovex GmbH',
    summary: 'Supervised search ranking and migration of a media data warehouse to Apache Spark.',
  },
  {
    period: '2012–2016',
    role: 'Research Associate & Lecturer',
    organisation: 'TU Dresden · Health & Behavior Analytics',
    summary: 'Sensor-fusion research using IoT, smartphone and social data to identify lifestyle anomalies and depression risk.',
  },
]

const en = { services, projects, experience }

const de: typeof en = {
  services: [
    {
      number: '01',
      title: 'Daten- & KI-Strategie',
      text: 'Ein klarer Weg von verstreuten Daten zu verlässlicher KI. Ich entwerfe Zielarchitekturen, semantische Datenschichten und Governance-Modelle, die Geschäftsprioritäten mit dem produktiven Betrieb verbinden.',
      outcome: 'KI-Roadmaps · Architektur · Model Governance',
    },
    {
      number: '02',
      title: 'Angewandtes Machine Learning',
      text: 'Produktionsreife Modelle und KI-Agenten für Prognosen, Klassifikation, Verhaltensanalysen und die Datenexploration in natürlicher Sprache – abgesichert durch Erklärbarkeit, Evaluation und Feedback-Schleifen.',
      outcome: 'Predictive ML · LLM-Systeme · Erklärbarkeit',
    },
    {
      number: '03',
      title: 'Datenplattformen',
      text: 'Belastbare Daten- und ML-Fundamente für große Datenmengen. Ich baue getestete Pipelines, Feature Stores und analytische Services mit Python, Spark, Airflow und Databricks.',
      outcome: 'Spark-Pipelines · Feature Stores · Observability',
    },
    {
      number: '04',
      title: 'MLOps & Umsetzung',
      text: 'Modelle in den Betrieb bringen – mit reproduzierbaren Workflows, CI/CD, Monitoring und nachvollziehbaren Kontrollen. Zudem begleite ich Teams als Mentor bei Clean Code, Testing und nachhaltigen Delivery-Praktiken.',
      outcome: 'CI/CD · Monitoring · Team-Enablement',
    },
  ],
  projects: [
    {
      ...projects[0],
      sector: 'Automobilindustrie',
      role: 'Lead AI Strategist & Lead Data Scientist',
      title: 'Automotive-KI: von BUS-Daten zu Entscheidungen',
      text: 'Verantwortung für Strategie und Umsetzung produktiver ML-Systeme für Fahrverhalten, Sicherheitsanalysen, AD/ADAS, Homologation und Fehleranalyse. CAN-, LIN- und FlexRay-Daten wurden auf Azure Databricks vereinheitlicht und um eine LLM-gestützte Analyseschicht ergänzt, mit der sich Datensätze in natürlicher Sprache finden und PySpark-Code generieren lässt.',
      result: 'Komplexe Engineering-Analysen dauern nun Minuten statt Stunden. Die Plattform für Audi, Porsche und Volkswagen setzte sich wegen Codequalität, Zuverlässigkeit und Umsetzungsgeschwindigkeit gegen drei interne Alternativen durch – mit einer Governance nach DSGVO und NIST SP 800-53.',
      tags: ['Azure Databricks', 'PySpark', 'Feature Store', 'MLOps'],
    },
    {
      ...projects[1],
      sector: 'Gesundheitswesen',
      role: 'Chief Technology Officer',
      title: 'Personalisiertes Coaching für mehr Wohlbefinden',
      text: 'Aufbau einer Machine-Learning-Plattform, die biometrische Daten und Verhaltensdaten kombiniert, um konkrete Maßnahmen zur Stressreduktion zu empfehlen. Erkenntnisse aus Dr. Frankes Promotion flossen in die Vorhersage von Gesundheitsrisiken und die Erkennung von Lebensstilmustern ein.',
      result: 'Sichere, produktionsreife Pipelines mit Airflow und PostgreSQL aufgebaut und die technische Umsetzung bis zur Übernahme des Unternehmens verantwortet.',
      tags: ['Keras', 'scikit-learn', 'Airflow', 'PostgreSQL', 'Gesundheitsdaten'],
    },
    {
      ...projects[2],
      sector: 'Digital Publishing',
      role: 'Data Scientist',
      title: 'Content-Performance, vorhergesagt',
      text: 'Entwicklung von Retention- und Churn-Modellen auf Basis von Zielgruppen-, Google-Analytics- und CRM-Daten; anschließend Zusammenführung von Newsletter-, Shop- und Analytics-Quellen in produktiven ETL-Workflows.',
      result: 'Return on Investment im Marketing um 28 % gesteigert – durch gezielteres Targeting und bessere Entscheidungen zur Kundenbindung.',
      tags: ['Python', 'SparkSQL', 'Looker', 'Matillion', 'Churn-Prognose'],
    },
    {
      ...projects[3],
      sector: 'Enterprise Search & Medien',
      role: 'Data Scientist',
      title: 'Suchrelevanz und ein modernes Datenfundament',
      text: 'Verbesserung der Relevanz von Enterprise-Suche mit überwachten Ranking-Modellen sowie Mitarbeit an der Migration des analytischen Data Warehouse von ProSiebenSat.1 Media auf Apache Spark mit einer einheitlichen KPI-Reporting-Schicht.',
      result: 'Skalierbare Grundlagen für schnellere Suche und ein konsistentes, entscheidungsreifes Reporting geschaffen.',
      tags: ['Learning to Rank', 'Apache Spark', 'Datenmigration', 'KPI-Reporting'],
    },
  ],
  experience: [
    {
      period: '2025–2026',
      role: 'Lead AI Strategist',
      organisation: 'CARIAD SE · Automobilindustrie',
      summary: 'KI-Strategie, Fahrzeug-BUS-Daten, LLM-gestützte Analytik und kontrollierte KI-Agenten im Produktivbetrieb auf Azure Databricks.',
    },
    {
      period: '2019–2025',
      role: 'Lead Data Scientist',
      organisation: 'Cognizant Mobility GmbH · Automobilindustrie',
      summary: 'ML- und ETL-Plattformen im Multi-Terabyte-Bereich für Marken des Volkswagen Konzerns, dazu Model Governance und Mentoring im Team.',
    },
    {
      period: '2018–2019',
      role: 'Chief Technology Officer',
      organisation: 'BODYVISER GmbH · Gesundheitswesen',
      summary: 'Personalisiertes Gesundheitscoaching, Risikomodellierung und sichere Datenpipelines bis zur Übernahme des Unternehmens.',
    },
    {
      period: '2017–2018',
      role: 'Data Scientist',
      organisation: 'Social Media Interactive · Social Sweethearts',
      summary: 'Retention- und Churn-Prognosen, die den Marketing-ROI um 28 % steigerten.',
    },
    {
      period: '2015–2017',
      role: 'Data Scientist',
      organisation: 'IntraFind Software AG · inovex GmbH',
      summary: 'Überwachtes Such-Ranking und Migration eines Medien-Data-Warehouse auf Apache Spark.',
    },
    {
      period: '2012–2016',
      role: 'Wissenschaftlicher Mitarbeiter & Dozent',
      organisation: 'TU Dresden · Gesundheits- & Verhaltensanalytik',
      summary: 'Forschung zur Sensordatenfusion aus IoT-, Smartphone- und Social-Media-Daten, um Auffälligkeiten im Lebensstil und Depressionsrisiken zu erkennen.',
    },
  ],
}

export default { en, de } satisfies Localized<typeof en>
