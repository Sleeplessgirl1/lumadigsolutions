import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

export const services = [
  {
    id: "web",
    icon: "Monitor",
    title: "Desarrollo Web",
    description: "Sitios, tiendas online, portales. Diseño responsive, rápido, SEO-ready.",
    subServices: ["Emprendedor", "PYMES", "E-commerce", "Portales"],
    longDescription: "Creamos sitios web modernos, rápidos y optimizados para SEO. Desde landing pages hasta plataformas complejas de e-commerce, nuestro equipo desarrolla soluciones web que convierten visitantes en clientes. Usamos las últimas tecnologías como React, Next.js y Tailwind CSS para garantizar rendimiento excepcional.",
    features: ["Diseño responsive mobile-first", "Optimización SEO avanzada", "Integración con CMS", "SSL y seguridad", "Velocidad de carga <2s", "Analíticas integradas"],
    priceRange: "$500 - $5,000 USD",
    deliveryTime: "2-8 semanas",
  },
  {
    id: "branding",
    icon: "Palette",
    title: "Branding & Publicidad",
    description: "Identidad visual que comunica tu marca. Logos, colores, manuales.",
    subServices: ["Logo", "Paleta", "Manual de Marca", "Generación de contenido"],
    longDescription: "Tu marca es tu historia. Diseñamos identidades visuales que conectan con tu audiencia y transmiten profesionalismo. Desde el logo hasta el manual de marca completo, creamos sistemas visuales coherentes que destacan en cualquier medio.",
    features: ["Diseño de logo profesional", "Paleta de colores estratégica", "Tipografía personalizada", "Manual de marca completo", "Papelería corporativa", "Templates para redes sociales"],
    priceRange: "$300 - $3,000 USD",
    deliveryTime: "1-4 semanas",
  },
  {
    id: "ai",
    icon: "Bot",
    title: "Automatización IA",
    description: "Chatbots, automatización de procesos, atención 24/7.",
    subServices: ["Chatbots", "Procesos", "Integración CRM"],
    longDescription: "Implementamos soluciones de inteligencia artificial que automatizan procesos repetitivos y mejoran la experiencia del cliente. Chatbots inteligentes, automatización de flujos de trabajo y integración con tu CRM existente para escalar tu negocio sin aumentar costos operativos.",
    features: ["Chatbots con IA conversacional", "Automatización de procesos", "Integración con CRM/ERP", "Atención al cliente 24/7", "Análisis de datos automatizado", "Flujos de trabajo inteligentes"],
    priceRange: "$800 - $8,000 USD",
    deliveryTime: "3-10 semanas",
  },
  {
    id: "software",
    icon: "Settings",
    title: "Software a Medida",
    description: "Soluciones custom, backends, APIs, automatización empresarial.",
    subServices: ["Backend", "Frontend", "APIs", "Testing"],
    longDescription: "Desarrollamos software personalizado que se adapta exactamente a las necesidades de tu negocio. Desde APIs robustas hasta aplicaciones empresariales completas, construimos soluciones escalables con las mejores prácticas de ingeniería de software.",
    features: ["Arquitectura escalable", "APIs REST y GraphQL", "Bases de datos optimizadas", "Testing automatizado", "Documentación técnica", "Soporte y mantenimiento"],
    priceRange: "$2,000 - $20,000 USD",
    deliveryTime: "4-16 semanas",
  },
  {
    id: "audiovisual",
    icon: "Video",
    title: "Producción Audiovisual",
    description: "Videos corporativos, comerciales, contenido para redes y storytelling visual.",
    subServices: ["Video corporativo", "Comerciales", "Reels & Shorts", "Documentales de marca"],
    longDescription: "Producimos contenido audiovisual de alto impacto que cuenta la historia de tu marca. Desde videos corporativos y comerciales hasta contenido para redes sociales, nuestro equipo de producción crea piezas visuales que conectan emocionalmente con tu audiencia y generan resultados.",
    features: ["Videos corporativos", "Comerciales y spots", "Contenido para redes sociales", "Edición y postproducción", "Motion graphics", "Storytelling de marca"],
    priceRange: "$1,000 - $15,000 USD",
    deliveryTime: "2-8 semanas",
  },
  {
    id: "renders",
    icon: "Box",
    title: "Renders 3D",
    description: "Visualización arquitectónica, renders de producto y animaciones 3D.",
    subServices: ["Render arquitectónico", "Render de producto", "Animación 3D", "Recorridos virtuales"],
    longDescription: "Creamos renders fotorrealistas y animaciones 3D que dan vida a tus proyectos antes de construirlos. Desde visualización arquitectónica hasta renders de producto para e-commerce, transformamos ideas en imágenes impactantes que venden.",
    features: ["Renders fotorrealistas", "Visualización arquitectónica", "Renders de producto", "Animaciones 3D", "Recorridos virtuales 360°", "Postproducción profesional"],
    priceRange: "$500 - $10,000 USD",
    deliveryTime: "1-6 semanas",
  },
];

export const portfolioItems = [
  {
    id: "1",
    title: "AGENCIA DE MKT",
    category: "E-commerce",
    description: "Tienda online completa con +500 productos, pasarela de pagos y panel de administración.",
    image: portfolio1,
    tags: ["React", "PayPal", "Node.js"],
    client: "TechStore México",
    results: "+180% ventas online",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
  },
  {
    id: "2",
    title: "Marca Orgánica",
    category: "Branding",
    description: "Identidad visual completa para startup de productos orgánicos. Logo, paleta, manual de marca.",
    image: portfolio2,
    tags: ["Branding", "Diseño", "Estrategia"],
    client: "Verde Natural",
    results: "+95% reconocimiento de marca",
    stack: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: "3",
    title: "Dashboard Analytics",
    category: "Software",
    description: "Plataforma de análisis de datos en tiempo real para empresa de logística.",
    image: portfolio3,
    tags: ["React", "Python", "ML"],
    client: "LogiMex",
    results: "-40% tiempo de análisis",
    stack: ["React", "Python", "TensorFlow", "PostgreSQL"],
  },
  {
    id: "4",
    title: "AsistenteBot",
    category: "IA",
    description: "Chatbot con IA para atención al cliente 24/7. +10,000 conversaciones mensuales.",
    image: portfolio4,
    tags: ["OpenAI", "Node.js", "WhatsApp"],
    client: "ServiMax",
    results: "-60% tickets de soporte",
    stack: ["OpenAI", "Node.js", "WhatsApp API", "MongoDB"],
  },
  {
    id: "5",
    title: "REDISEÑO WEB",
    category: "Web",
    description: "Sitio web con reservaciones online y menú digital para cadena de restaurantes.",
    image: portfolio5,
    tags: ["Next.js", "Tailwind", "Supabase"],
    client: "Sabores Mexicanos",
    results: "+120% reservaciones",
    stack: ["Next.js", "Tailwind CSS", "Supabase"],
  },
  {
    id: "6",
    title: "CATÁLOGO DIGITAL",
    category: "Software",
    description: "Sistema ERP completo para gestión de inventarios, ventas y producción.",
    image: portfolio6,
    tags: ["React", "Node.js", "PostgreSQL"],
    client: "IndustriaMX",
    results: "+35% eficiencia operativa",
    stack: ["React", "Express", "PostgreSQL", "Docker"],
  },
];

export const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CEO",
    company: "TechStore MX",
    text: "LUMA transformó nuestra presencia digital. Las ventas online crecieron un 180% en 3 meses. Increíble equipo.",
    rating: 5,
    result: "+180% ventas",
  },
  {
    name: "Ana García",
    role: "Fundadora",
    company: "Verde Natural",
    text: "El branding que crearon para nosotros captura perfectamente la esencia de nuestra marca. Profesionales al 100%.",
    rating: 5,
    result: "+95% reconocimiento",
  },
  {
    name: "Roberto Silva",
    role: "Director de Operaciones",
    company: "LogiMex",
    text: "El dashboard que desarrollaron nos ahorra horas de trabajo diario. La mejor inversión que hemos hecho.",
    rating: 5,
    result: "-40% tiempo",
  },
  {
    name: "María López",
    role: "Gerente de Servicio",
    company: "ServiMax",
    text: "El chatbot maneja más del 60% de nuestras consultas. Nuestro equipo ahora se enfoca en lo que importa.",
    rating: 5,
    result: "-60% tickets",
  },
];

export const blogPosts = [
  {
    slug: "guia-ecommerce-2025",
    title: "Guía Completa: Cómo Lanzar tu E-commerce en 2025",
    category: "E-commerce",
    date: "2025-03-15",
    author: "LUMA Team",
    readTime: "8 min",
    excerpt: "Descubre los pasos esenciales para crear una tienda online exitosa. Desde la elección de plataforma hasta estrategias de marketing digital que funcionan.",
    content: "El comercio electrónico sigue creciendo a ritmos exponenciales en Latinoamérica...",
  },
  {
    slug: "seo-tips-empresas",
    title: "10 Tips de SEO que Toda Empresa Necesita Implementar",
    category: "Marketing",
    date: "2025-03-01",
    author: "LUMA Team",
    readTime: "6 min",
    excerpt: "Mejora tu posicionamiento en Google con estas estrategias probadas. Desde optimización on-page hasta link building efectivo para empresas mexicanas.",
    content: "El SEO es la base de cualquier estrategia digital exitosa...",
  },
  {
    slug: "ia-negocios-mexico",
    title: "Cómo la IA está Transformando los Negocios en México",
    category: "Tecnología",
    date: "2025-02-20",
    author: "LUMA Team",
    readTime: "7 min",
    excerpt: "La inteligencia artificial ya no es ciencia ficción. Conoce casos reales de empresas mexicanas que están usando IA para crecer y automatizar procesos.",
    content: "La adopción de IA en empresas mexicanas ha crecido un 300% en el último año...",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$3,200",
    period: "MXN",
    description: "Perfecto para emprendedores y negocios nuevos",
    features: [
      "Landing page profesional",
      "Diseño responsive",
      "SEO básico",
      "Formulario de contacto",
      "Hosting 1 año incluido",
      "Soporte por email",
    ],
    highlighted: false,
    cta: "Comenzar",
  },
  {
    name: "Business",
    price: "$6,500",
    period: "MXN",
    description: "Para empresas que buscan crecer online",
    features: [
      "Sitio web multi-página",
      "Diseño personalizado",
      "SEO avanzado",
      "Blog integrado",
      "Panel de administración",
      "Integración redes sociales",
      "Analytics dashboard",
      "Soporte prioritario",
    ],
    highlighted: true,
    cta: "Elegir Plan",
  },
  {
    name: "E-commerce",
    price: "$10,000",
    period: "MXN",
    description: "Tienda online completa lista para vender",
    features: [
      "Todo en Business +",
      "Catálogo de productos",
      "Pasarela de pagos",
      "Gestión de inventario",
      "Email marketing",
      "Chatbot básico",
      "Reportes de ventas",
      "Soporte 24/7",
    ],
    highlighted: false,
    cta: "Comenzar a Vender",
  },
];

export const teamMembers = [
  {
    name: "Jacqueline R.",
    role: "Fundador & Developer",
    bio: "Experiencia en desarrollo web y estrategia digital. \nDesde la conceptualización técnica hasta el deployment.",
    specialties: ["Estrategia Digital", "UX/UI", "Desarrollo"],
  },
  {
    name: "Itzel R.",
    role: "Fundador & Dirección",
    bio: "Experiencia en dirección estratégica y gestión empresarial. Apasionada por crear estrategias que transforman negocios.",
    specialties: ["Liderazgo", "Finanzas", "Branding"],
  },
  {
    name: "Óscar G.",
    role: "Director de Diseño & Producción ",
    bio: "Diseñador gráfico especializado en crear identidades visuales que conectan marcas con sus audiencias de forma estratégica. ",
    specialties: ["Social Media", "Ilustración", "Video Production"],
  },
  {
    name: "Valentina R.",
    role: "Especialista en IA",
    bio: "Ingeniera en IA con maestría en NLP. Lidera nuestros proyectos de automatización y chatbots inteligentes.",
    specialties: ["Machine Learning", "NLP", "Automatización"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Escucha",
    description: "Entendemos tu negocio, tu visión, tu mercado.",
  },
  {
    number: "02",
    title: "Estrategia",
    description: "Diseñamos la ruta: tech, design, marketing.",
  },
  {
    number: "03",
    title: "Ejecución",
    description: "Hacemos. Rápido, bien, sin excusas.",
  },
  {
    number: "04",
    title: "Optimización",
    description: "Medimos, mejoramos, escalamos.",
  },
];

export const faqItems = [
  {
    question: "¿Cuánto tiempo tarda un proyecto?",
    answer: "Depende del alcance. Una landing page puede estar lista en 1-2 semanas, mientras que un e-commerce completo puede tomar 4-8 semanas. Siempre damos un timeline claro antes de comenzar.",
  },
  {
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer: "Sí, todos nuestros planes incluyen soporte post-lanzamiento. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, backups y soporte técnico.",
  },
  {
    question: "¿Puedo ver ejemplos de su trabajo?",
    answer: "¡Claro! Visita nuestra sección de Portfolio para ver proyectos recientes. También podemos agendar una llamada para mostrarte casos similares al tuyo.",
  },
  {
    question: "¿Trabajan con empresas fuera de México?",
    answer: "Sí, trabajamos con clientes en toda Latinoamérica, Estados Unidos y España. Nuestro equipo trabaja de forma remota y nos adaptamos a diferentes zonas horarias.",
  },
  {
    question: "¿Qué tecnologías usan?",
    answer: "Usamos las tecnologías más modernas: React, Next.js, Node.js, Python, PostgreSQL, AWS, entre otras. Elegimos el stack ideal según las necesidades de cada proyecto.",
  },
  {
    question: "¿Cómo es el proceso de pago?",
    answer: "Trabajamos con un modelo de 50% anticipo y 50% al entregar. Para proyectos grandes, ofrecemos pagos en 3 parcialidades. Aceptamos transferencia, Stripe, PayPal y tarjeta.",
  },
];
