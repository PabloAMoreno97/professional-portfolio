export type Lang = 'en' | 'es'

export const personalInfo = {
  name: 'Pablo Moreno',
  fullName: 'Pablo Andrés Moreno Álvarez',
  title: { en: 'Python Engineer', es: 'Ingeniero Python' },
  subtitle: { en: 'Backend Developer · Data Engineering · AI Agents', es: 'Desarrollador Backend · Ingeniería de Datos · Agentes IA' },
  location: 'Medellín, Colombia',
  openTo: { en: 'Open to Remote', es: 'Disponible para Remoto' },
  email: 'pablolm97@gmail.com',
  phone: '+57 3193615662',
  linkedin: 'https://www.linkedin.com/in/pablo-a-alvarez/',
  linkedinHandle: 'pablo-a-alvarez',
  summary: {
    en: 'Python engineer with 6+ years building backend services, data pipelines, and enterprise ERP integrations. Currently at Fracttal operating in an AI-first paradigm — designing AI agents, integrating MCP servers, and acting as code architect with Claude Code to deliver production integrations at speed. Delivered solutions for leading banks in Colombia, Panama, and Canada where security and data integrity are non-negotiable. Comfortable owning the full delivery cycle: from client requirements to production deployment.',
    es: 'Ingeniero Python con más de 6 años construyendo servicios backend, pipelines de datos e integraciones ERP empresariales. Actualmente en Fracttal con cultura AI-first — diseñando agentes IA, integrando servidores MCP y actuando como arquitecto de código con Claude Code para entregar integraciones de calidad a alta velocidad. Experiencia en entornos financieros regulados — integraciones para bancos líderes en Colombia, Panamá y Canadá — donde la seguridad e integridad de los datos son innegociables. Cómodo gestionando el ciclo completo: desde requerimientos del cliente hasta producción.',
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
    type: 'Hybrid · Medellín, Colombia',
    period: { en: 'Dec 2025 – Present', es: 'Dic 2025 – Presente' },
    current: true,
    bullets: {
      en: [
        'Own the full integration delivery cycle: gather client requirements, architect technical solutions with AI-assisted development, and deploy to production.',
        'Act as primary technical point of contact for clients during integration projects, ensuring clear communication and alignment throughout.',
        'Design and develop integrations between the SaaS platform and enterprise ERP systems for clients in regulated industries.',
        'Build data integration pipelines using Python and Pandas for transformation and synchronization across enterprise platforms.',
        'Develop integration APIs using FastAPI and Pydantic, applying strict schema validation and data integrity controls.',
        'Design and deploy AI agents using Claude API and MCP (Model Context Protocol) servers to automate and extend integration workflows.',
        'Work within an AI-first engineering culture — acting as code architect using Claude Code to design, review, and deliver production-grade integrations at speed.',
        'Automate and orchestrate integration workflows using Apache Airflow.',
        'Integrate REST APIs, SQL databases, and structured files (CSV, Parquet) across heterogeneous systems.',
        'Deploy and operate services in containerized environments using Kubernetes.',
      ],
      es: [
        'Gestión del ciclo completo de entrega: toma de requerimientos con clientes, diseño técnico asistido por IA y entrega a producción.',
        'Punto de contacto técnico principal con clientes durante proyectos de integración, asegurando comunicación clara y alineación en todo momento.',
        'Diseño y desarrollo de integraciones entre la plataforma SaaS y sistemas ERP empresariales para clientes en industrias reguladas.',
        'Construcción de pipelines de integración de datos con Python y Pandas para transformación y sincronización entre plataformas empresariales.',
        'Desarrollo de APIs de integración con FastAPI y Pydantic, aplicando validación estricta de esquemas e integridad de datos.',
        'Diseño y despliegue de agentes IA usando la API de Claude y servidores MCP (Model Context Protocol) para automatizar y extender flujos de integración.',
        'Trabajo en cultura de ingeniería AI-first — actuando como arquitecto de código con Claude Code para diseñar, revisar y entregar integraciones de calidad productiva a gran velocidad.',
        'Automatización y orquestación de flujos de integración con Apache Airflow.',
        'Integración con APIs REST, bases de datos SQL y archivos estructurados (CSV, Parquet) en sistemas heterogéneos.',
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
    type: 'Remote · Colombia',
    period: { en: 'Aug 2023 – Mar 2024', es: 'Ago 2023 – Mar 2024' },
    current: false,
    bullets: {
      en: [
        'Developed backend integrations and REST APIs in Python (Django, Flask) for banking institutions, meeting strict compliance and data security standards.',
        'Automated operational workflows with Selenium and Python, including reporting and mailing pipelines.',
        'Implemented comprehensive test coverage with Pytest and Unittest — critical in banking environments where failures have regulatory implications.',
        'Designed microservices architecture and integrated SQL databases for modular, maintainable systems.',
        'Developed ETL processes using Pandas, NumPy, and Selenium.',
        'Utilized Git and Bitbucket following GitFlow practices, tracking progress with Jira in a Scrum framework.',
      ],
      es: [
        'Desarrollo de integraciones backend y APIs REST en Python (Django, Flask) para importantes instituciones bancarias, cumpliendo estrictos estándares regulatorios y de seguridad de datos.',
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
    type: 'Remote · Colombia',
    period: { en: 'Jan 2023 – Aug 2023', es: 'Ene 2023 – Ago 2023' },
    current: false,
    bullets: {
      en: [
        'Full-stack development using Python (Django, Flask) for backend and HTML/CSS/Bootstrap/JavaScript for frontend.',
        'Built data integrations for banking institutions, handling sensitive financial data with strict validation and access controls.',
        'Integrated multiple external APIs and managed SQL databases including PostgreSQL and Oracle.',
        'Implemented security and access control using JWT.',
        'Developed ETL processes, reporting, and mailing automation using Python and Pandas.',
        'Applied design patterns (MVC, DAO) and deployed using Apache.',
      ],
      es: [
        'Desarrollo full-stack con Python (Django, Flask) para backend y HTML/CSS/Bootstrap/JavaScript para frontend.',
        'Construcción de integraciones de datos para bancos, manejando datos financieros sensibles con validaciones estrictas y controles de acceso.',
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
    type: 'Remote · Colombia',
    period: { en: 'Jul 2022 – Feb 2023', es: 'Jul 2022 – Feb 2023' },
    current: false,
    bullets: {
      en: [
        'Designed Python scripts to define and control chatbot behavior and conversation flows for a colombian lead bank.',
        'Connected SQL databases to Python for rapid and secure access to customer and product information.',
        'Applied data validation and access controls appropriate for financial-sector deployments.',
        'Conducted data analysis to improve chatbot performance and response quality.',
        'Monitored and tracked tasks with Azure DevOps within a Scrum framework.',
      ],
      es: [
        'Diseño de scripts Python para definir y controlar el comportamiento y flujos de conversación del chatbot para un banco líder en Colombia.',
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
    type: 'Medellín, Colombia',
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
  { label: { en: 'AI & Agents',      es: 'IA y Agentes'        }, skills: ['Claude API', 'MCP', 'AI Agents', 'Claude Code', 'LLM Orchestration', 'Prompt Engineering'] },
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
  {
    slug: 'etl-transport-pipeline',
    title: 'NYC Taxi Transport Pipeline',
    category: { en: 'Data Engineering', es: 'Ingeniería de Datos' },
    description: {
      en: 'Batch ETL pipeline that ingests monthly NYC Yellow Taxi trip data (Parquet), enriches it with geospatial zone data via GeoPandas, and loads aggregated metrics into PostgreSQL. Orchestrated with a Click CLI + GitHub Actions instead of Airflow. Includes an interactive Folium choropleth map and a FastAPI for zone and borough analytics.',
      es: 'Pipeline ETL batch que ingesta datos mensuales de viajes en taxi de NYC (Parquet), los enriquece con datos geoespaciales de zonas vía GeoPandas y carga métricas agregadas en PostgreSQL. Orquestado con CLI Click + GitHub Actions en lugar de Airflow. Incluye un mapa coroplético interactivo con Folium y una FastAPI para consultar métricas por zona y borough.',
    },
    stack: ['Python', 'Pandas', 'GeoPandas', 'FastAPI', 'PostgreSQL', 'Parquet', 'Folium', 'Click', 'GitHub Actions', 'Docker', 'Neon', 'Render'],
    github: 'https://github.com/PabloAMoreno97/etl-transport-pipeline',
    demo: 'https://etl-transport-api.onrender.com/docs',
  },
  {
    slug: 'fastapi-task-manager',
    title: 'Task Manager API',
    category: { en: 'Backend & APIs', es: 'Backend y APIs' },
    description: {
      en: 'Production-ready REST API for task management built with Clean Architecture (routers → services → repositories). Features JWT auth with refresh token rotation (tokens stored and revoked in PostgreSQL), async SQLAlchemy 2, Alembic migrations, and rate limiting on the login endpoint. 27 tests covering unit (security) and integration (auth + CRUD).',
      es: 'API REST production-ready para gestión de tareas, construida con Clean Architecture (routers → services → repositories). Incluye autenticación JWT con rotación de refresh tokens (tokens almacenados y revocables en PostgreSQL), SQLAlchemy 2 asíncrono, migraciones con Alembic y rate limiting en el endpoint de login. 27 tests cubriendo unidad (seguridad) e integración (auth + CRUD).',
    },
    stack: ['Python', 'FastAPI', 'SQLAlchemy 2', 'Alembic', 'PostgreSQL', 'JWT', 'bcrypt', 'slowapi', 'Pytest', 'Docker', 'Neon', 'Render'],
    github: 'https://github.com/PabloAMoreno97/fastapi-task-manager',
  },
  {
    slug: 'fastapi-async-jobs',
    title: 'Async Jobs API',
    category: { en: 'Backend & APIs', es: 'Backend y APIs' },
    description: {
      en: 'Event-driven REST API for asynchronous file processing. Users upload CSV/XLSX files; a Celery worker processes them in the background while progress events stream live to clients over WebSockets via Redis pub/sub. Demonstrates worker pattern, async/sync SQLAlchemy split, and Redis beyond caching.',
      es: 'API REST event-driven para procesamiento asíncrono de archivos. Los usuarios suben CSV/XLSX; un worker Celery los procesa en background mientras los eventos de progreso se transmiten en vivo vía WebSockets sobre Redis pub/sub. Demuestra el patrón worker, separación async/sync de SQLAlchemy y Redis más allá de caché.',
    },
    stack: ['Python', 'FastAPI', 'Celery', 'Redis', 'WebSockets', 'SQLAlchemy 2', 'Alembic', 'PostgreSQL', 'Pandas', 'Pytest', 'Docker'],
    github: 'https://github.com/PabloAMoreno97/fastapi-async-jobs',
  },
  {
    slug: 'ml-sentiment-api',
    title: 'Sentiment Analysis API',
    category: { en: 'AI & Machine Learning', es: 'IA y Machine Learning' },
    description: {
      en: 'End-to-end NLP project: EDA, training (TF-IDF + Logistic Regression baseline, optional DistilBERT comparison), evaluation with classification report and confusion matrix, model serialization with joblib, and a FastAPI service exposing single and batch prediction endpoints. Reproducible from a committed sample dataset.',
      es: 'Proyecto NLP end-to-end: EDA, entrenamiento (baseline TF-IDF + Regresión Logística, comparativa opcional con DistilBERT), evaluación con classification report y matriz de confusión, serialización del modelo con joblib y un servicio FastAPI que expone endpoints de predicción individual y por lotes. Reproducible desde un dataset de muestra incluido en el repo.',
    },
    stack: ['Python', 'scikit-learn', 'pandas', 'FastAPI', 'Pydantic', 'joblib', 'Jupyter', 'Pytest', 'Docker'],
    github: 'https://github.com/PabloAMoreno97/ml-sentiment-api',
  },
  {
    slug: 'ml-predictive-maintenance',
    title: 'Predictive Maintenance (RUL)',
    category: { en: 'AI & Machine Learning', es: 'IA y Machine Learning' },
    description: {
      en: 'Industrial ML on NASA CMAPSS turbofan sensor time-series: feature engineering with rolling stats and lag features, XGBoost regressor for Remaining Useful Life prediction, MLflow experiment tracking, SHAP explainability, and a FastAPI service serving predictions and feature attributions. Directly aligned with industrial maintenance workflows.',
      es: 'ML industrial sobre series temporales de sensores de turbofans (NASA CMAPSS): ingeniería de features con estadísticos en ventana y lags, regresor XGBoost para predecir Remaining Useful Life, seguimiento de experimentos con MLflow, explicabilidad con SHAP y un servicio FastAPI que sirve predicciones y atribuciones de features. Alineado directamente con flujos de mantenimiento industrial.',
    },
    stack: ['Python', 'XGBoost', 'pandas', 'NumPy', 'MLflow', 'SHAP', 'FastAPI', 'Jupyter', 'Pytest', 'Docker'],
    github: 'https://github.com/PabloAMoreno97/ml-predictive-maintenance',
  },
]

export const education = [
  {
    institution: 'Universidad Autónoma de Occidente',
    degree: { en: 'Specialization in Artificial Intelligence', es: 'Especialización en Inteligencia Artificial' },
    period: 'Jan 2025 – Dec 2025',
    location: 'Colombia',
    current: false,
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
