export const services = [
  {
    number: '01',
    title: 'Data & AI Strategy',
    text: 'A clear path from scattered data to decisions. I audit what exists, remove unnecessary complexity and define the smallest system that creates value.',
    outcome: 'Roadmaps · architecture · governance',
  },
  {
    number: '02',
    title: 'Applied Machine Learning',
    text: 'Production-minded models for forecasting, classification and intelligent automation—built around the business problem, not around the latest buzzword.',
    outcome: 'Prediction · NLP · experimentation',
  },
  {
    number: '03',
    title: 'Data Platforms',
    text: 'Reliable pipelines and analytical foundations that stay maintainable as your data grows. From Python services to Spark and Databricks workloads.',
    outcome: 'Pipelines · warehouses · observability',
  },
  {
    number: '04',
    title: 'Automation',
    text: 'Turn repeated manual work into dependable systems. I connect data, models and workflows so your team can focus on judgment instead of busywork.',
    outcome: 'Workflows · reporting · integrations',
  },
]

export const projects = [
  {
    sector: 'Automotive',
    title: 'Driving intelligence at scale',
    text: 'Automated statistical analysis combining sensor and user data on a big-data platform to detect patterns and trigger informed reactions.',
    image: new URL('./assets/img/portfolio/automotive-project-image.png', import.meta.url).href,
    tags: ['Sensor data', 'Behavior modelling', 'Automation'],
  },
  {
    sector: 'Media',
    title: 'A modern data foundation',
    text: 'Migration of a PostgreSQL data warehouse to Apache Hadoop, integrating more than 30 data sources into one reliable KPI layer.',
    image: new URL('./assets/img/portfolio/media-project-image.png', import.meta.url).href,
    tags: ['Data engineering', 'Hadoop', '30+ sources'],
  },
  {
    sector: 'Digital Publishing',
    title: 'Content performance, predicted',
    text: 'Optimization of social content targeting and distribution to improve share rates, engagement and advertising performance.',
    image: new URL('./assets/img/portfolio/content-publishing-project-image.png', import.meta.url).href,
    tags: ['Predictive analytics', 'Targeting', 'Optimization'],
  },
  {
    sector: 'Healthcare',
    title: 'Data for better wellbeing',
    text: 'Mobile, data-informed experiences designed to help people manage chronic stress, connect with experts and build adaptive routines.',
    image: new URL('./assets/img/portfolio/healthcare-project-image.png', import.meta.url).href,
    tags: ['Mobile', 'Health data', 'Personalization'],
  },
]
