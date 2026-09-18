/* ==============================================================
   i18n.js — Language switcher (Spanish default / English toggle)
   The page ships with Spanish written natively into the HTML, so
   it always starts in Spanish even if this script fails to load.
   This file only supplies the English translations and the logic
   to swap between them via the buttons in the style-switcher panel.
   ============================================================== */

const TRANSLATIONS = {
  nav_home: { es: 'Inicio', en: 'Home' },
  nav_about: { es: 'Sobre Mí', en: 'About Me' },
  nav_services: { es: 'Servicios', en: 'Services' },
  nav_portfolio: { es: 'Portafolio', en: 'Portfolio' },
  nav_contact: { es: 'Contacto', en: 'Contact' },

  home_hello: {
    es: 'Hola, mi nombre es <span class="name">Kevin Perez</span>',
    en: 'Hello, my name is <span class="name">Kevin Perez</span>',
  },
  home_profession_prefix: { es: 'Soy ', en: "I'm a " },
  home_bio: {
    es: 'Estudiante de Ingeniería de Sistemas con 3+ años de experiencia automatizando procesos e integrando datos con Python y SQL. Diseño pipelines ETL, construyo dashboards en Power BI y trabajo con bases de datos relacionales y plataformas cloud (Azure, AWS, GCP). Certificado en Azure Fundamentals (AZ-900) y CCNA, enfocado en construir soluciones de datos escalables y confiables que generan valor real para el negocio.',
    en: "Systems Engineering student with 3+ years of experience automating processes and integrating data using Python and SQL. I design ETL pipelines, build Power BI dashboards, and work with relational databases and cloud platforms (Azure, AWS, GCP). Certified in Azure Fundamentals (AZ-900) and CCNA, focused on building scalable, reliable data solutions that generate real business value.",
  },
  btn_cv_es: { es: 'Descargar CV - Español', en: 'Download CV - Spanish' },
  btn_cv_en: { es: 'Descargar CV - Inglés', en: 'Download CV - English' },

  about_title: { es: 'Sobre Mí', en: 'About Me' },
  about_heading: {
    es: 'Soy Kevin Perez, <span>Ingeniero de Datos y Analista de Datos</span>',
    en: 'I\'m Kevin Perez and <span>Data Engineer & Data Analyst</span>',
  },
  about_p1: {
    es: 'Estudiante de Ingeniería de Sistemas con 3+ años de experiencia automatizando procesos, desarrollando soluciones backend e integrando datos con Python y SQL. He participado en el diseño de automatizaciones, construcción de pipelines ETL, transformación y validación de datos, y el desarrollo de herramientas enfocadas en optimizar procesos de negocio con tecnologías modernas.',
    en: "Systems Engineering student with 3+ years of experience automating processes, building backend solutions, and integrating data using Python and SQL. I've worked on designing automations, building ETL pipelines, transforming and validating data, and developing tools focused on optimizing business processes with modern technologies.",
  },
  about_p2: {
    es: 'Tengo conocimientos prácticos de Docker, Kubernetes, Power BI, Git, bases de datos relacionales y servicios cloud, con fuerte interés en construir pipelines de datos escalables, arquitecturas de datos y soluciones basadas en automatización e IA. Soy analítico, de aprendizaje continuo, y enfocado en construir soluciones eficientes y mantenibles que generan valor real para el negocio.',
    en: "I have working knowledge of Docker, Kubernetes, Power BI, Git, relational databases, and cloud services, with a strong interest in building scalable data pipelines, data architectures, and automation/AI-driven solutions. I'm analytical, a continuous learner, and focused on building efficient, maintainable solutions that generate real value for the business.",
  },

  lbl_birthday: { es: 'Nacimiento', en: 'Birthday' },
  lbl_age: { es: 'Edad', en: 'Age' },
  lbl_web: { es: 'Web', en: 'Web' },
  lbl_email: { es: 'Correo', en: 'Email' },
  lbl_degree: { es: 'Título', en: 'Degree' },
  val_degree: { es: 'Ingeniería de Sistemas (en curso)', en: 'Systems Engineering (in progress)' },
  lbl_phone: { es: 'Teléfono', en: 'Phone' },
  lbl_city: { es: 'Ciudad', en: 'City' },
  lbl_status: { es: 'Estado', en: 'Status' },
  val_status: { es: 'Disponible para trabajar', en: 'Open to work' },
  btn_hire: { es: 'Contáctame', en: 'Hire Me' },

  skill_etl: { es: 'ETL / Ingeniería de Datos', en: 'ETL / Data Engineering' },
  skill_db: { es: 'Bases de Datos Relacionales', en: 'Relational Databases' },
  skill_automation: { es: 'Automatización de Procesos', en: 'Process Automation' },
  skill_network: { es: 'Redes y Seguridad', en: 'Networking & Security' },

  edu_title: { es: 'Educación', en: 'Education' },
  present: { es: 'presente', en: 'present' },
  edu1_title: { es: 'Politécnico Grancolombiano — Ingeniería de Sistemas', en: 'Politécnico Grancolombiano — Systems Engineering' },
  edu1_text: {
    es: 'Estudiante de Ingeniería de Sistemas enfocado en Ingeniería de Datos, Cloud Computing, Automatización, DevOps y Desarrollo Backend.',
    en: 'Systems Engineering student focused on Data Engineering, Cloud Computing, Automation, DevOps, and Backend Development.',
  },
  edu2_text: {
    es: 'Certificación Microsoft Azure (AZ-900) con conocimientos fundamentales de servicios cloud, seguridad y gestión de costos. Capacitado para implementar y administrar soluciones en la plataforma Azure.',
    en: 'Microsoft Azure Certified (AZ-900) with foundational cloud skills in core services, security, and cost management. Proficient in deploying and managing cloud solutions on the Azure platform.',
  },
  edu3_text: {
    es: 'Certificación CCNA de Cisco Networking Academy, con experiencia práctica en configuración de redes, resolución de problemas y buenas prácticas de seguridad. Enfocado en enrutamiento, switching e infraestructura escalable a nivel empresarial.',
    en: 'Certified in Cisco Networking Academy (CCNA), with hands-on experience in network configuration, troubleshooting, and security best practices. Focused on enterprise-level routing, switching, and scalable infrastructure solutions.',
  },
  edu4_title: { es: 'Servicio Nacional de Aprendizaje (SENA)', en: 'National Learning Service (SENA)' },
  edu4_text: {
    es: 'Formación en Ciberseguridad y Ethical Hacking, cubriendo pruebas de penetración, evaluación de vulnerabilidades y técnicas de seguridad defensiva. Experiencia práctica con Kali Linux y herramientas de seguridad ofensiva/defensiva.',
    en: 'Cybersecurity and Ethical Hacking training covering penetration testing, vulnerability assessment, and defensive security techniques. Hands-on experience with Kali Linux and offensive/defensive security tools.',
  },

  exp_title: { es: 'Experiencia', en: 'Experience' },
  exp1_title: { es: 'TechVentures — Técnico IT (Integración de Datos y ETL)', en: 'TechVentures — Technical IT (Data Integration & ETL)' },
  exp1_text: {
    es: 'Diseñé e implementé procesos ETL para consolidar información empresarial de múltiples fuentes. Integré datos para construir dashboards en tiempo real en Power BI, automaticé procesos técnicos mediante scripting, y administré infraestructura virtual y plataformas empresariales.',
    en: 'Designed and implemented ETL processes to consolidate business information from multiple sources. Integrated data to build real-time Power BI dashboards, automated technical processes through scripting, and administered virtual infrastructure and enterprise platforms.',
  },
  exp2_title: { es: 'NetAllCorrect — Técnico IT (Automatización y Procesamiento de Datos)', en: 'NetAllCorrect — Technical IT (Automation & Data Processing)' },
  exp2_text: {
    es: 'Automaticé tareas operativas con Python y Bash, desarrollé scripts para procesar y analizar información técnica, y administré servidores Windows/Linux garantizando la disponibilidad del servicio. Documenté y estandaricé procesos técnicos, e implementé controles de seguridad y evaluaciones de infraestructura.',
    en: 'Automated operational tasks with Python and Bash, developed scripts for processing and analyzing technical information, and administered Windows/Linux servers ensuring service availability. Documented and standardized technical processes, and implemented security controls and infrastructure assessments.',
  },
  exp3_title: { es: 'Inversiones Alcabama — Técnico IT (Automatización y Soporte de Datos)', en: 'Inversiones Alcabama — Technical IT (Automation & Data Support)' },
  exp3_text: {
    es: 'Automaticé procesos internos con Python para optimizar tiempos operativos, desarrollé procesos ETL para extracción, transformación y validación de datos, y automaticé reportes e indicadores mediante scripts en Python. Administré y optimicé bases de datos relacionales y construí herramientas internas para mejorar la eficiencia del negocio.',
    en: 'Automated internal processes with Python to optimize operational time, developed ETL processes for data extraction, transformation and validation, and automated reports and KPIs through Python scripts. Administered and optimized relational databases and built internal tools to improve business efficiency.',
  },

  services_title: { es: 'Servicios', en: 'Services' },
  svc1_title: { es: 'Analítica y Reportes de Datos', en: 'Data Analytics & Reporting' },
  svc1_text: { es: 'Transformo datos crudos en insights accionables con dashboards de Power BI y reportes personalizados.', en: 'Transform raw data into actionable insights with Power BI dashboards and custom reporting.' },
  svc2_title: { es: 'ETL e Integración de Datos', en: 'ETL & Data Integration' },
  svc2_text: { es: 'Diseño pipelines ETL para extraer, transformar, validar y consolidar datos de múltiples fuentes.', en: 'Design ETL pipelines to extract, transform, validate, and consolidate data from multiple sources.' },
  svc3_title: { es: 'Automatización de Procesos', en: 'Process Automation' },
  svc3_text: { es: 'Optimizo tareas repetitivas y reportes con scripts en Python/Bash para aumentar la productividad.', en: 'Streamline repetitive tasks and reporting with Python/Bash scripts to boost productivity.' },
  svc4_title: { es: 'Cloud y Automatización DevOps', en: 'Cloud & DevOps Automation' },
  svc4_text: { es: 'Doy soporte a infraestructura en Azure/AWS/GCP con Docker, Kubernetes y pipelines de CI/CD.', en: 'Support infrastructure on Azure/AWS/GCP with Docker, Kubernetes, and CI/CD pipelines.' },
  svc5_title: { es: 'Administración de Bases de Datos', en: 'Database Administration' },
  svc5_text: { es: 'Gestiono, optimizo y mantengo bases de datos relacionales (PostgreSQL, MySQL, SQL Server) para garantizar su confiabilidad.', en: 'Manage, tune, and maintain relational databases (PostgreSQL, MySQL, SQL Server) for reliability.' },
  svc6_title: { es: 'Soporte Técnico e Infraestructura IT', en: 'Helpdesk & IT Infrastructure' },
  svc6_text: { es: 'Brindo soporte técnico y administración de infraestructura para servidores y plataformas empresariales.', en: 'Provide technical support and infrastructure administration for servers and business platforms.' },
  svc7_title: { es: 'Kubernetes y Orquestación de Contenedores', en: 'Kubernetes & Container Orchestration' },
  svc7_text: { es: 'Despliego y escalo aplicaciones en contenedores de forma eficiente con Docker y Kubernetes.', en: 'Deploy and scale containerized applications efficiently with Docker and Kubernetes.' },
  svc8_title: { es: 'Fundamentos de Redes y Seguridad', en: 'Networking & Security Fundamentals' },
  svc8_text: { es: 'Aplico buenas prácticas de redes y seguridad, respaldado por formación CCNA y Ethical Hacking.', en: 'Apply networking and security best practices, backed by CCNA and Ethical Hacking training.' },

  portfolio_title: { es: 'Portafolio', en: 'Portfolio' },
  portfolio_heading: { es: 'Mis Proyectos', en: 'My Projects' },
  portfolio_project_title: { es: 'Bibliopoli — Plataforma Web', en: 'Bibliopoli — Web Platform' },
  portfolio_project_desc: {
    es: 'Aplicación web con sistema de autenticación (login/registro) desarrollada para la comunidad del Politécnico Grancolombiano.',
    en: 'Web application with an authentication system (login/register) built for the Politécnico Grancolombiano community.',
  },
  portfolio_project_cta: { es: 'Ver proyecto', en: 'View project' },

  contact_title: { es: 'Contacto', en: 'Contact Me' },
  contact_q: { es: '¿Tienes alguna pregunta?', en: 'Have You Any Questions?' },
  contact_sub: { es: 'ESTOY A TU SERVICIO', en: "I'M AT YOUR SERVICE" },
  lbl_call: { es: 'Llámame al', en: 'Call Me On' },
  lbl_location: { es: 'Ubicación', en: 'Location' },
  lbl_email2: { es: 'Correo', en: 'Email' },
  lbl_website: { es: 'Sitio Web', en: 'Website' },

  sw_theme_colors: { es: 'Colores del Tema', en: 'Theme Colors' },
  sw_language: { es: 'Idioma', en: 'Language' },
};

const TYPED_STRINGS = {
  es: ['', 'Ingeniero de Datos', 'Analista de Datos', 'Desarrollador ETL', 'Ingeniero de Sistemas', 'Ingeniero de Automatización', 'Analista BI / Power BI', 'Entusiasta de Cloud & DevOps'],
  en: ['', 'Data Engineer', 'Data Analyst', 'ETL Developer', 'Systems Engineer', 'Automation Engineer', 'BI / Power BI Analyst', 'Cloud & DevOps Enthusiast'],
};

let currentLang = 'es';

function initTyped(lang) {
  // Guarded the same way as before: a blocked/failed Typed.js CDN falls back to
  // static text instead of throwing and breaking the rest of the page's scripts.
  if (window.typed && typeof window.typed.destroy === 'function') {
    window.typed.destroy();
  }
  const typingEl = document.querySelector('.typing');
  if (typeof Typed !== 'undefined') {
    window.typed = new Typed('.typing', {
      strings: TYPED_STRINGS[lang],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  } else if (typingEl) {
    typingEl.textContent = TYPED_STRINGS[lang][1];
    console.warn('Typed.js failed to load from CDN; showing static fallback text.');
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const entry = TRANSLATIONS[key];
    if (entry && entry[lang] !== undefined) {
      el.innerHTML = entry[lang];
    }
  });

  const esBtn = document.getElementById('lang-es');
  const enBtn = document.getElementById('lang-en');
  if (esBtn && enBtn) {
    esBtn.classList.toggle('active', lang === 'es');
    enBtn.classList.toggle('active', lang === 'en');
  }

  initTyped(lang);
}

function setLanguage(lang) {
  if (lang === currentLang) return;
  applyLanguage(lang);
}

// The page always boots in Spanish (native default), regardless of any previous
// visit — per the requirement that it "start natively in Spanish".
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage('es');
});
