export const services = [
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

export const projects = [
  {
    sector: 'Automotive',
    period: '2019–2026',
    role: 'Lead AI Strategist & Lead Data Scientist',
    organisation: 'CARIAD SE · Cognizant Mobility GmbH',
    title: 'Automotive AI, from BUS data to decisions',
    text: 'Led the strategy and delivery of production ML systems for driver behavior, safety analytics, AD/ADAS, homologation and issue resolution. Unified CAN, LIN and FlexRay data on Azure Databricks and introduced an LLM-powered analytics layer for natural-language dataset discovery and PySpark generation.',
    result: 'Reduced complex engineering analysis from hours to minutes. Earlier platform work for Audi, Porsche and Volkswagen was selected over three internal alternatives for code quality, reliability and delivery speed, with governance aligned to GDPR and NIST SP 800-53.',
    image: new URL('./assets/img/portfolio/automotive-project-image.png', import.meta.url).href,
    tags: ['Azure Databricks', 'PySpark', 'Feature store', 'MLOps'],
  },
  {
    sector: 'Healthcare',
    period: '2018–2019',
    role: 'Chief Technology Officer',
    organisation: 'BODYVISER GmbH',
    title: 'Personalised coaching for better wellbeing',
    text: 'Developed a machine-learning platform that combined biometric and behavioral data to recommend stress-reduction actions. Research from Dr. Franke’s doctoral work informed predictive health-risk scoring and lifestyle-pattern detection.',
    result: 'Built secure, production-grade Airflow and PostgreSQL pipelines and led technical delivery through the company’s acquisition.',
    image: new URL('./assets/img/portfolio/healthcare-project-image.png', import.meta.url).href,
    tags: ['Keras', 'scikit-learn', 'Airflow', 'PostgreSQL', 'Health data'],
  },
  {
    sector: 'Digital Publishing',
    period: '2017–2018',
    role: 'Data Scientist',
    organisation: 'Social Media Interactive · Social Sweethearts',
    title: 'Content performance, predicted',
    text: 'Built retention and churn models from audience, Google Analytics and CRM data, then unified newsletter, shop and analytics sources through production ETL workflows.',
    result: 'Improved marketing return on investment by 28% through more effective targeting and retention decisions.',
    image: new URL('./assets/img/portfolio/content-publishing-project-image.png', import.meta.url).href,
    tags: ['Python', 'SparkSQL', 'Looker', 'Matillion', 'Churn prediction'],
  },
  {
    sector: 'Enterprise Search & Media',
    period: '2015–2017',
    role: 'Data Scientist',
    organisation: 'IntraFind Software AG · inovex GmbH',
    title: 'Search relevance and a modern data foundation',
    text: 'Improved enterprise search relevance with supervised ranking models and helped migrate ProSiebenSat.1 Media’s analytical warehouse to Apache Spark with a unified KPI reporting layer.',
    result: 'Created scalable foundations for faster search and more consistent, decision-ready reporting.',
    image: new URL('./assets/img/portfolio/media-project-image.png', import.meta.url).href,
    tags: ['Learning to rank', 'Apache Spark', 'Data migration', 'KPI reporting'],
  },
]

export const experience = [
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
