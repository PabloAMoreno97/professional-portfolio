export const personalInfo = {
  name: 'Pablo Moreno',
  fullName: 'Pablo Andrés Moreno Alvarez',
  title: 'Python Engineer',
  subtitle: 'Backend Developer · Data Engineering',
  location: 'Colombia',
  openTo: 'Open to Remote',
  email: 'pablolm97@gmail.com',
  phone: '+57 3193615662',
  linkedin: 'https://www.linkedin.com/in/pablo-a-alvarez/',
  linkedinHandle: 'pablo-a-alvarez',
  summary:
    'Python engineer with 6+ years of experience building backend services, data pipelines, and enterprise system integrations. Specialized in developing automation workflows and data synchronization between SaaS platforms and ERP systems. Experienced in Python-based data processing, API development, and ETL pipelines using modern data tooling. Comfortable working in Agile environments and delivering production-grade, scalable integration solutions.',
}

export interface Experience {
  company: string
  role: string
  type: string
  period: string
  current: boolean
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: 'Fracttal',
    role: 'Integration Python Developer',
    type: 'Hybrid · Medellín',
    period: 'Dec 2025 – Present',
    current: true,
    bullets: [
      'Design and implement integrations between SaaS platform and enterprise ERP systems.',
      'Develop Python-based data pipelines using Pandas for data transformation and synchronization.',
      'Build integration APIs using FastAPI and Pydantic for schema validation and robust data handling.',
      'Automate workflows using Apache Airflow and monitor data pipeline performance.',
      'Integrate REST APIs, relational databases, and structured files (CSV, Parquet).',
      'Implement caching with Redis to improve performance and reliability.',
      'Deploy services in containerized environments using Kubernetes.',
      'Collaborate with internal teams and client stakeholders to design scalable integration architectures.',
    ],
  },
  {
    company: 'Sombra',
    role: 'Middle Software Engineer',
    type: 'Remote',
    period: 'Apr 2024 – Dec 2025',
    current: false,
    bullets: [
      'Migrated legacy scripts to Python, modernizing ETL workflows and improving maintainability.',
      'Developed and optimized data pipelines using Pandas, NumPy, and SQLAlchemy.',
      'Built backend services using Flask and automated workflows with Apache Airflow.',
      'Containerized services using Docker and maintained CI/CD pipelines with Jenkins.',
      'Optimized SQL queries and implemented scalable data processing solutions.',
    ],
  },
  {
    company: 'PersonalSoft',
    role: 'Senior Software Developer',
    type: 'Remote',
    period: 'Aug 2023 – Mar 2024',
    current: false,
    bullets: [
      'Developed REST APIs using Python with Django and Flask, supporting business-critical processes.',
      'Automated operational workflows using Selenium and Python scripts, reducing manual work.',
      'Implemented unit and integration tests using Pytest and Unittest to ensure code quality.',
      'Designed microservices architectures and integrated SQL databases for modular systems.',
    ],
  },
  {
    company: 'Early Career',
    role: 'Python Developer / Analyst',
    type: 'Colombia',
    period: '2019 – 2023',
    current: false,
    bullets: [
      'Developed backend services and ETL pipelines using Python, Django, Flask, and Pandas.',
      'Integrated external APIs and managed relational databases including PostgreSQL and Oracle.',
      'Built automation tools and data analysis solutions supporting operational processes.',
      'Participated in inventory and invoicing automation projects, improving accuracy and efficiency.',
      'Created reporting pipelines for business insights and operational KPIs.',
    ],
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript'],
  },
  {
    label: 'Backend',
    skills: ['FastAPI', 'Flask', 'Django', 'REST APIs', 'Microservices'],
  },
  {
    label: 'Data Engineering',
    skills: ['Apache Airflow', 'Pandas', 'NumPy', 'ETL Pipelines', 'Parquet'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'MongoDB'],
  },
  {
    label: 'Infrastructure',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git'],
  },
  {
    label: 'Cloud',
    skills: ['AWS Lambda', 'S3', 'API Gateway', 'DynamoDB', 'Azure'],
  },
  {
    label: 'Tools',
    skills: ['Redis', 'Postman', 'Linux', 'Jira', 'Pytest'],
  },
]

export const education = [
  {
    institution: 'Universidad Autónoma de Occidente',
    degree: 'Specialization in Artificial Intelligence',
    period: '2025 – Present',
    location: 'Colombia',
    current: true,
  },
  {
    institution: 'Universidad EAFIT',
    degree: 'Mechanical Engineering',
    period: '2015 – 2020',
    location: 'Medellín, Colombia',
    current: false,
  },
]
