export type Lang = 'en' | 'es'

export const personalInfo = {
  name: 'Pablo Moreno',
  fullName: 'Pablo Andrés Moreno Álvarez',
  title: { en: 'Python Engineer', es: 'Ingeniero Python' },
  subtitle: { en: 'Backend Developer · Data Engineering', es: 'Desarrollador Backend · Ingeniería de Datos' },
  location: 'Medellín, Colombia',
  openTo: { en: 'Open to Remote', es: 'Disponible para Remoto' },
  email: 'pablolm97@gmail.com',
  phone: '+57 3193615662',
  linkedin: 'https://www.linkedin.com/in/pablo-a-alvarez/',
  linkedinHandle: 'pablo-a-alvarez',
  summary: {
    en: 'Python engineer with 6+ years of experience building backend services, data pipelines, and enterprise system integrations. Specialized in developing automation workflows and data synchronization between SaaS platforms and ERP systems. Extensive experience in regulated financial environments — delivering integrations for leading banks across Colombia, Panama, and Canada — where code quality, security, and data integrity are non-negotiable. Comfortable owning the full delivery cycle: from requirements gathering with clients to production deployment.',
    es: 'Ingeniero Python con más de 6 años de experiencia construyendo servicios backend, pipelines de datos e integraciones de sistemas empresariales. Especializado en flujos de automatización y sincronización de datos entre plataformas SaaS y sistemas ERP. Amplia experiencia en entornos financieros regulados — entregando integraciones para bancos líderes en Colombia, Panamá y Canadá — donde la calidad del código, la seguridad y la integridad de los datos son innegociables. Cómodo gestionando el ciclo completo de entrega: desde la toma de requerimientos con clientes hasta el despliegue en producción.',
  },
}

export interface BankingPresence {
  country: { en: string; es: string }
  flag: string
  count: number
  description: { en: string; es: string }
}

export const bankingPresence: BankingPresence[] = [
  {
    country: { en: 'Colombia', es: 'Colombia' },
    flag: '🇨🇴',
    count: 2,
    description: {
      en: 'leading Colombian banks',
      es: 'bancos líderes en Colombia',
    },
  },
  {
    country: { en: 'Panama', es: 'Panamá' },
    flag: '🇵🇦',
    count: 2,
    description: {
      en: 'top Panamanian banks',
      es: 'bancos principales en Panamá',
    },
  },
  {
    country: { en: 'Canada', es: 'Canadá' },
    flag: '🇨🇦',
    count: 1,
    description: {
      en: 'major Canadian bank',
      es: 'banco importante en Canadá',
    },
  },
]

export interface Experience {
  company: string
  role: { en: string; es: string }
  type: string
  period: { en: string; es: string }
  current: boolean
  bullets: { en: string[]; es: string[] }
}

export const experience: Experience[] = [
  {
    company: 'Fracttal',
    role: { en: 'Integrations Python Developer', es: 'Desarrollador Python de Integraciones' },
    type: 'Hybrid · Medellín',
    period: { en: 'Dec 2025 – Present', es: 'Dic 2025 – Presente' },
    current: true,
    bullets: {
      en: [
        'Own the full integration delivery cycle: gather and translate client requirements into technical specifications, develop the solution, and deliver to production.',
        'Act as the primary technical point of contact for clients during integration projects, ensuring clear communication and alignment throughout.',
        'Design and develop integrations between the SaaS platform and enterprise ERP systems for clients in regulated industries, including leading financial institutions.',
        'Build data integration pipelines using Python and Pandas for transformation and synchronization across enterprise platforms.',
        'Develop integration APIs using FastAPI and Pydantic, applying strict schema validation and data integrity controls required by regulated environments.',
        'Automate and orchestrate integration workflows using Apache Airflow.',
        'Integrate REST APIs, SQL databases, and structured files (CSV, Parquet) across heterogeneous systems.',
        'Implement caching and intermediate storage with Redis to improve pipeline reliability.',
        'Deploy and operate services in containerized environments using Kubernetes.',
      ],
      es: [
        'Gestión del ciclo completo de entrega de integraciones: toma de requerimientos con clientes, aterrizaje técnico, desarrollo y entrega a producción.',
        'Punto de contacto técnico principal con clientes durante proyectos de integración, asegurando comunicación clara y alineación en todo momento.',
        'Diseño y desarrollo de integraciones entre la plataforma SaaS y sistemas ERP empresariales para clientes en industrias reguladas, incluyendo instituciones financieras líderes.',
        'Construcción de pipelines de integración de datos con Python y Pandas para transformación y sincronización entre plataformas empresariales.',
        'Desarrollo de APIs de integración con FastAPI y Pydantic, aplicando validación estricta de esquemas e integridad de datos requerida en entornos regulados.',
        'Automatización y orquestación de flujos de integración con Apache Airflow.',
        'Integración con APIs REST, bases de datos SQL y archivos estructurados (CSV, Parquet) en sistemas heterogéneos.',
        'Implementación de caché y almacenamiento intermedio con Redis para mayor confiabilidad de los pipelines.',
        'Despliegue y operación de servicios en entornos contenerizados con Kubernetes.',
      ],
    },
  },
  {
    company: 'Sombra',
    role: { en: 'Middle Software Engineer', es: 'Ingeniero de Software Middle' },
    type: 'Remote · United States',
    period: { en: 'Apr 2024 – Dec 2025', es: 'Abr 2024 – Dic 2025' },
    current: false,
    bullets: {
      en: [
        'Migrated legacy batch scripts to Python, primarily ETLs, integrating Apache Airflow for automation and optimization.',
        'Developed and optimized ETL pipelines using Pandas, NumPy, and SQLAlchemy for efficient data processing.',
        'Delivered backend integrations for banking clients, applying strict data validation, security controls, and audit-trail requirements.',
        'Developed backend features using Flask for server-side applications.',
        'Containerized applications using Docker and Docker Compose to streamline deployment.',
        'Managed CI/CD pipelines with Jenkins to automate software delivery.',
        'Used Boto3 to integrate AWS tools into data workflows.',
        'Worked with GitHub following GitFlow practices and participating in code reviews.',
      ],
      es: [
        'Migración de scripts batch legacy a Python, principalmente ETLs, integrando Apache Airflow para automatización.',
        'Desarrollo y optimización de pipelines ETL con Pandas, NumPy y SQLAlchemy para procesamiento eficiente de datos.',
        'Entrega de integraciones backend para clientes bancarios, aplicando validación estricta de datos, controles de seguridad y requisitos de auditoría.',
        'Desarrollo de funcionalidades backend con Flask para aplicaciones server-side.',
        'Contenerización de aplicaciones con Docker y Docker Compose.',
        'Gestión de pipelines CI/CD con Jenkins para automatizar la entrega de software.',
        'Uso de Boto3 para integrar herramientas de AWS en flujos de datos.',
        'Trabajo con GitHub siguiendo prácticas GitFlow y participación en code reviews.',
      ],
    },
  },
  {
    company: 'PersonalSoft',
    role: { en: 'Senior Software Developer', es: 'Desarrollador de Software Senior' },
    type: 'Remote · Panamá',
    period: { en: 'Aug 2023 – Mar 2024', es: 'Ago 2023 – Mar 2024' },
    current: false,
    bullets: {
      en: [
        'Developed backend integrations and REST APIs in Python (Django, Flask) for top Panamanian banking institutions, meeting strict compliance and data security standards.',
        'Automated operational workflows with Selenium and Python, including reporting and mailing pipelines.',
        'Implemented comprehensive test coverage with Pytest and Unittest — critical in banking environments where failures have regulatory implications.',
        'Designed microservices architecture and integrated SQL databases for modular, maintainable systems.',
        'Developed ETL processes using Pandas, NumPy, and Selenium.',
        'Utilized Git and Bitbucket following GitFlow practices, tracking progress with Jira in a Scrum framework.',
      ],
      es: [
        'Desarrollo de integraciones backend y APIs REST en Python (Django, Flask) para importantes instituciones bancarias panameñas, cumpliendo estrictos estándares de cumplimiento y seguridad de datos.',
        'Automatización de flujos operativos con Selenium y Python, incluyendo pipelines de reportes y correos.',
        'Implementación de cobertura de pruebas completa con Pytest y Unittest — crítica en entornos bancarios donde los fallos tienen implicaciones regulatorias.',
        'Diseño de arquitectura de microservicios e integración con bases de datos SQL.',
        'Desarrollo de procesos ETL usando Pandas, NumPy y Selenium.',
        'Uso de Git y Bitbucket siguiendo GitFlow, con seguimiento en Jira bajo marco Scrum.',
      ],
    },
  },
  {
    company: 'Manpower',
    role: { en: 'Python Developer', es: 'Desarrollador Python' },
    type: 'Colombia',
    period: { en: 'Jan 2023 – Aug 2023', es: 'Ene 2023 – Ago 2023' },
    current: false,
    bullets: {
      en: [
        'Full-stack development using Python (Django, Flask) for backend and HTML/CSS/Bootstrap/JavaScript for frontend.',
        'Built data integrations for leading Colombian banking institutions, handling sensitive financial data with strict validation and access controls.',
        'Integrated multiple external APIs and managed SQL databases including PostgreSQL and Oracle.',
        'Implemented security and access control using JWT.',
        'Developed ETL processes, reporting, and mailing automation using Python and Pandas.',
        'Applied design patterns (MVC, DAO) and deployed using Apache.',
      ],
      es: [
        'Desarrollo full-stack con Python (Django, Flask) para backend y HTML/CSS/Bootstrap/JavaScript para frontend.',
        'Construcción de integraciones de datos para importantes bancos colombianos, manejando datos financieros sensibles con validaciones estrictas y controles de acceso.',
        'Integración con múltiples APIs externas y gestión de bases de datos SQL incluyendo PostgreSQL y Oracle.',
        'Implementación de seguridad y control de acceso con JWT.',
        'Desarrollo de procesos ETL, reportes y automatización de correos con Python y Pandas.',
        'Aplicación de patrones de diseño (MVC, DAO) y despliegue con Apache.',
      ],
    },
  },
  {
    company: 'Konecta',
    role: { en: 'Chatbot Developer', es: 'Desarrollador de Chatbot' },
    type: 'Colombia',
    period: { en: 'Jul 2022 – Feb 2023', es: 'Jul 2022 – Feb 2023' },
    current: false,
    bullets: {
      en: [
        'Designed Python scripts to define and control chatbot behavior and conversation flows for financial sector clients.',
        'Connected SQL databases to Python for rapid and secure access to customer and product information.',
        'Applied data validation and access controls appropriate for financial-sector deployments.',
        'Conducted data analysis to improve chatbot performance and response quality.',
        'Monitored and tracked tasks with Azure DevOps within a Scrum framework.',
      ],
      es: [
        'Diseño de scripts Python para definir y controlar el comportamiento y flujos de conversación del chatbot para clientes del sector financiero.',
        'Conexión de bases de datos SQL a Python para acceso rápido y seguro a información de clientes y productos.',
        'Aplicación de validaciones de datos y controles de acceso apropiados para despliegues en el sector financiero.',
        'Análisis de datos para mejorar el rendimiento y calidad de respuestas del chatbot.',
        'Monitoreo y seguimiento de tareas con Azure DevOps en marco Scrum.',
      ],
    },
  },
  {
    company: 'Corbeta / Alkosto',
    role: { en: 'Spare Parts Analyst', es: 'Analista de Repuestos' },
    type: 'Colombia',
    period: { en: 'Jun 2019 – Jul 2022', es: 'Jun 2019 – Jul 2022' },
    current: false,
    bullets: {
      en: [
        'Designed software to automate spare parts catalogs using Python and Pandas.',
        'Developed a web application to automate the invoicing audit process using Django, Pandas, and HTML/Bootstrap/JavaScript.',
        'Created an Excel template with formulas and VBA to automate spare parts price calculation.',
        'Business analysis, data analysis, international negotiations, and supply chain optimization.',
        'Started as intern (Jun–Dec 2019) focused on catalog automation and international urgent orders.',
      ],
      es: [
        'Diseño de software para automatizar catálogos de repuestos usando Python y Pandas.',
        'Desarrollo de aplicación web para automatizar la auditoría del proceso de facturación con Django, Pandas y HTML/Bootstrap/JavaScript.',
        'Creación de plantilla Excel con fórmulas y VBA para automatizar el cálculo de precios de repuestos.',
        'Análisis de negocio, análisis de datos, negociaciones internacionales y optimización de cadena de suministro.',
        'Inició como pasante (Jun–Dic 2019) enfocado en automatización de catálogos y compras urgentes internacionales.',
      ],
    },
  },
]

export const skillGroups = [
  { label: { en: 'Languages',        es: 'Lenguajes'           }, skills: ['Python', 'SQL', 'JavaScript'] },
  { label: { en: 'Backend',          es: 'Backend'             }, skills: ['FastAPI', 'Flask', 'Django', 'REST APIs', 'Microservices'] },
  { label: { en: 'Data Engineering', es: 'Ingeniería de Datos' }, skills: ['Apache Airflow', 'Pandas', 'NumPy', 'SQLAlchemy', 'ETL Pipelines', 'Parquet'] },
  { label: { en: 'Databases',        es: 'Bases de Datos'      }, skills: ['PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'MongoDB'] },
  { label: { en: 'Infrastructure',   es: 'Infraestructura'     }, skills: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git', 'GitFlow'] },
  { label: { en: 'Cloud',            es: 'Nube'                }, skills: ['AWS Lambda', 'S3', 'API Gateway', 'DynamoDB', 'Boto3', 'Azure'] },
  { label: { en: 'Tools',            es: 'Herramientas'        }, skills: ['Redis', 'Postman', 'Linux', 'Jira', 'Pytest', 'Selenium', 'JWT'] },
]

export interface Project {
  slug: string
  title: string
  category: { en: string; es: string }
  description: { en: string; es: string }
  stack: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: 'etl-financial-pipeline',
    title: 'Financial ETL Pipeline',
    category: { en: 'Data Engineering', es: 'Ingeniería de Datos' },
    description: {
      en: 'End-to-end batch pipeline that ingests daily stock prices from Alpha Vantage, computes analytics metrics (MA, volatility, returns) and stores them in a two-layer PostgreSQL schema (raw → analytics). Orchestrated with Apache Airflow and exposed via a REST API.',
      es: 'Pipeline batch end-to-end que ingesta precios diarios de acciones desde Alpha Vantage, calcula métricas de análisis (MA, volatilidad, retornos) y las almacena en un schema PostgreSQL de dos capas (raw → analytics). Orquestado con Apache Airflow y expuesto vía API REST.',
    },
    stack: ['Python', 'Apache Airflow', 'FastAPI', 'PostgreSQL', 'Pandas', 'Docker', 'Neon', 'Render'],
    github: 'https://github.com/PabloAMoreno97/etl-financial-pipeline',
    demo: 'https://etl-financial-api.onrender.com/docs',
  },
]

export const education = [
  {
    institution: 'Universidad Autónoma de Occidente',
    degree: { en: 'Specialization in Artificial Intelligence', es: 'Especialización en Inteligencia Artificial' },
    period: '2025',
    location: 'Colombia',
    current: true,
  },
  {
    institution: 'Universidad EAFIT',
    degree: { en: "Engineer's Degree, Mechanical Engineering", es: 'Ingeniería Mecánica' },
    period: '2015 – 2020',
    location: 'Medellín, Colombia',
    current: false,
  },
  {
    institution: 'Universidad Nacional de Colombia',
    degree: { en: 'Certificate – Web Applications Development', es: 'Certificado – Desarrollo de Aplicaciones Web' },
    period: 'Oct – Nov 2022',
    location: 'Colombia',
    current: false,
  },
  {
    institution: 'Universidad Nacional de Colombia',
    degree: { en: 'Certificate – Software Development', es: 'Certificado – Desarrollo de Software' },
    period: 'Aug – Oct 2022',
    location: 'Colombia',
    current: false,
  },
  {
    institution: 'Universidad Nacional de Colombia',
    degree: { en: 'Certificate – Basic Programming', es: 'Certificado – Programación Básica' },
    period: 'Jun – Aug 2022',
    location: 'Colombia',
    current: false,
  },
]
