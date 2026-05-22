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
        'Migrated legacy batch scripts to production-grade Python ETLs, integrating Apache Airflow to automate scheduling and eliminate manual intervention.',
        'Built and optimized ETL pipelines using Pandas, NumPy, and SQLAlchemy for efficient large-scale data processing and database interactions.',
        'Delivered backend integrations for a lead bank in Canada, applying strict data validation, security controls, and audit-trail requirements in regulated environments.',
        'Developed backend services with Flask; containerized deployments using Docker and Docker Compose for consistent, portable environments.',
        'Managed CI/CD pipelines with Jenkins and integrated AWS services (Lambda, S3, DynamoDB) into data workflows using Boto3.',
        'Maintained code quality through GitFlow practices and active participation in code reviews on GitHub.',
      ],
      es: [
        'Migré scripts batch legacy a ETLs Python de calidad productiva, integrando Apache Airflow para automatizar la orquestación y eliminar intervención manual.',
        'Construí y optimicé pipelines ETL con Pandas, NumPy y SQLAlchemy para procesamiento eficiente de grandes volúmenes de datos.',
        'Entregué integraciones backend para un banco líder en Canadá, aplicando validación estricta de datos, controles de seguridad y trazabilidad de auditoría en entornos regulados.',
        'Desarrollé servicios backend con Flask; contenerización con Docker y Docker Compose para despliegues reproducibles.',
        'Gestioné pipelines CI/CD con Jenkins; integré AWS (Lambda, S3, DynamoDB) vía Boto3; GitFlow en GitHub.',
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
        'Built REST APIs and backend integrations in Python (Django, Flask) for banking institutions in Panama, meeting strict compliance and data security standards.',
        'Automated operational workflows using Selenium and Python — reporting pipelines and email automation — eliminating recurring manual processes.',
        'Achieved comprehensive test coverage with Pytest and Unittest, ensuring reliability in regulated environments where failures carry compliance implications.',
        'Designed microservices architecture with modular SQL database integrations for scalable, maintainable systems.',
        'Built ETL pipelines using Pandas, NumPy, and Selenium for data extraction and transformation across enterprise sources.',
      ],
      es: [
        'Construí APIs REST e integraciones backend en Python (Django, Flask) para instituciones bancarias en Panamá, cumpliendo estrictos estándares de cumplimiento y seguridad de datos.',
        'Automaticé flujos operativos con Selenium y Python — pipelines de reportes y correos — eliminando procesos manuales recurrentes.',
        'Alcancé cobertura de pruebas completa con Pytest y Unittest, garantizando confiabilidad en entornos regulados donde los fallos tienen implicaciones de cumplimiento.',
        'Diseñé arquitectura de microservicios con integraciones modulares de bases de datos SQL para sistemas escalables y mantenibles.',
        'Construí procesos ETL con Pandas, NumPy y Selenium para extracción y transformación de datos de fuentes empresariales.',
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
        'Delivered full-stack applications for Colombian banking institutions using Python (Django, Flask) for backend and HTML/CSS/Bootstrap/JavaScript for frontend.',
        'Built data integrations handling sensitive financial data with strict validation, JWT-based access control, and MVC/DAO design patterns.',
        'Integrated multiple external APIs and managed relational databases (PostgreSQL, Oracle) for data-driven business processes.',
        'Developed ETL pipelines, automated reporting, and email workflows using Python and Pandas.',
      ],
      es: [
        'Entregué aplicaciones full-stack para instituciones bancarias en Colombia con Python (Django, Flask) para backend y HTML/CSS/Bootstrap/JavaScript para frontend.',
        'Construí integraciones de datos manejando información financiera sensible con validación estricta, control de acceso JWT y patrones MVC/DAO.',
        'Integré múltiples APIs externas y gestioné bases de datos relacionales (PostgreSQL, Oracle) para procesos de negocio basados en datos.',
        'Desarrollé pipelines ETL, reportes automatizados y flujos de correo con Python y Pandas.',
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
        'Designed Python scripts to orchestrate chatbot conversation flows for a leading Colombian bank, enabling automated customer interactions at scale.',
        'Integrated SQL databases with Python backend for fast, secure access to customer and product data in a financial context.',
        'Applied data validation and access controls meeting financial-sector security requirements.',
        'Analyzed chatbot interaction data to identify improvement opportunities and optimize response quality.',
      ],
      es: [
        'Diseñé scripts Python para orquestar flujos de conversación del chatbot de un banco líder en Colombia, habilitando interacciones automatizadas con clientes a escala.',
        'Integré bases de datos SQL con Python para acceso rápido y seguro a datos de clientes y productos en contexto financiero.',
        'Apliqué validaciones de datos y controles de acceso alineados con los requisitos de seguridad del sector financiero.',
        'Analicé datos de interacción del chatbot para identificar oportunidades de mejora y optimizar la calidad de respuestas.',
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
        'Built Python + Pandas software to automate spare parts catalog generation, replacing error-prone manual processes.',
        'Developed a full-stack web application (Django + Pandas + HTML/Bootstrap/JS) to automate invoicing audits, improving accuracy and reducing review time.',
        'Created an Excel/VBA template to automate spare parts pricing calculations across product lines.',
        'Led data analysis and supply chain optimization initiatives; managed international supplier negotiations.',
        'Promoted from intern (Jun–Dec 2019) after delivering catalog automation and handling urgent international purchase orders.',
      ],
      es: [
        'Construí software con Python y Pandas para automatizar la generación de catálogos de repuestos, reemplazando procesos manuales propensos a error.',
        'Desarrollé aplicación web full-stack (Django + Pandas + HTML/Bootstrap/JS) para automatizar la auditoría de facturación, mejorando precisión y reduciendo tiempo de revisión.',
        'Creé plantilla Excel con macros VBA para automatizar el cálculo de precios de repuestos en múltiples líneas de producto.',
        'Lideré análisis de datos e iniciativas de optimización de cadena de suministro; gestión de negociaciones internacionales con proveedores.',
        'Promovido de pasante (Jun–Dic 2019) tras entregar la automatización de catálogos y gestionar órdenes de compra urgentes internacionales.',
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
