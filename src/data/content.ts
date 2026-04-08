import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.png";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.png";
import portfolio10 from "@/assets/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";

export const services = [
  {
    id: "web",
    icon: "Monitor",
    title: "Desarrollo Web",
    description: "Sitios, tiendas online, portales. Diseño responsive, rápido, SEO-ready.",
    subServices: ["Emprendedor", "PYMES", "E-commerce", "Portales"],
    longDescription: "Creamos sitios web modernos, rápidos y optimizados para SEO. Desde landing pages hasta plataformas complejas de e-commerce, nuestro equipo desarrolla soluciones web que convierten visitantes en clientes. Usamos las últimas tecnologías como React, Next.js y Tailwind CSS para garantizar rendimiento excepcional.",
    features: ["Diseño responsive mobile-first", "Optimización SEO avanzada", "Integración con CMS", "SSL y seguridad"],
    priceRange: "",
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
    priceRange: "",
    deliveryTime: "1-4 semanas",
  },
  {
    id: "ai",
    icon: "Bot",
    title: "Automatización IA",
    description: "Chatbots, automatización de procesos, atención 24/7.",
    subServices: ["Chatbots", "Procesos", "Integración CRM"],
    longDescription: "Implementamos soluciones de inteligencia artificial que automatizan procesos repetitivos y mejoran la experiencia del cliente. Chatbots inteligentes, automatización de flujos de trabajo y integración con tu CRM existente para escalar tu negocio sin aumentar costos.",
    features: ["Chatbots con IA conversacional", "Automatización de procesos", "Integración con CRM/ERP", "Atención al cliente 24/7", "Análisis de datos automatizado", "Flujos de trabajo inteligentes"],
    priceRange: "",
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
    priceRange: "",
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
    priceRange: "",
    deliveryTime: "2-8 semanas",
  },
  {
    id: "renders",
    icon: "Box",
    title: "Renders 3D",
    description: "Visualización arquitectónica, renders de producto y animaciones 3D.",
    subServices: ["Render arquitectónico", "Render de producto", "Animación 3D", "Recorridos virtuales"],
    longDescription: "Creamos renders fotorrealistas y animaciones 3D que dan vida a tus proyectos antes de construirlos. Desde visualización arquitectónica hasta renders de producto para e-commerce, transformamos ideas en imágenes impactantes que venden.",
    features: ["Renders fotorrealistas", "Visualización arquitectónica", "Renders de producto", "Recorridos virtuales 360°", "Postproducción profesional"],
    priceRange: "",
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
    title: "CRM",
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
    title: "Asistente Bot",
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
  {
    id: "7",
    title: "DISEÑO DESDE CERO",
    category: "Branding",
    description: "Diseño de e-commerce para agencia de marketing, utilizando la paleta de colores correspondiente.",
    image: portfolio7,
    tags: ["Branding", "e-commerce", "Diseño"],
    client: "Clever Media",
    results: "+200% engagement en redes",
    stack: ["Shopify", "Photoshop", "Figma"],
  },
  {
    id: "8",
    title: "CREACIÓN DE FLYERS",
    category: "Branding",
    description: "Branding para Videojuego indie, diseño de logotipo, paleta de colores, tipografía. ",
    image: portfolio8,
    tags: ["Branding", "VideoJuegos", "Digital"],
    client: "PowerFit GYM",
    results: "+150% membresías nuevas",
    stack: ["Illustrator", "Figma", "After Effects"],
  },
  {
    id: "9",
    title: "Creación de logos",
    category: "Branding",
    description: "Identidad de tu marca de lujo para todo tipo de empresa. Papelería, tarjetas y manual de marca.",
    image: portfolio9,
    tags: ["Branding", "Diseño", "Marketing"],
    client: "Loom IA",
    results: "+80% percepción de valor",
    stack: ["Illustrator", "InDesign", "Photoshop"],
  },
  {
    id: "10",
    title: "PORTADA DE LIBRO",
    category: "Branding",
    description: "Creación de portadas para libro, de acuerdo a temáticas.",
    image: portfolio10,
    tags: ["Marca", "Ilustración", "Diseño"],
    client: "F. Rocha",
    results: "+100% visibilidad de productos",
    stack: ["Illustrator", "Photoshop", "Diseño"],
  },
  {
    id: "11",
    title: "​PUBLICIDAD COPRPORATIVA",
    category: "Branding",
    description: "Branding rústico-moderno para empresas. Publicaciones, reels y experiencia de marca.",
    image: "user-uploads://17bc2227-91e8-43dc-93bf-dd7033f8ee38.jpg",
    tags: ["Branding", "Etiquetas", "Packaging"],
    client: "Luma",
    results: "+90% reconocimiento local",
    stack: ["Illustrator", "Photoshop", "InDesign"],
  },
];

export const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Fundador",
    company: "Las Baras",
    text: "LUMA transformó nuestra presencia digital. Las ventas online crecieron un 180% en 3 meses. Increíble equipo.",
    rating: 5,
    result: "+180% ventas",
  },
  {
    name: "Ana García",
    role: "Fundadora",
    company: "Estilstas Mague",
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
    company: "Dos Aguas",
    text: "Nuestros clientes ya no nos preguntan el menú por mensaje. Todo está en la página y recibimos más visitas al local.",
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
    readTime: "25 min",
    image: "ecommerce",
    excerpt: "Descubre los pasos esenciales para crear una tienda online exitosa. Desde la elección de plataforma hasta estrategias de marketing digital que funcionan.",
    content: `En 2026, lanzar un e-commerce ya no es un lujo, es una necesidad. Si eres dueño de un negocio en Chihuahua o México y aún no tienes tienda online, te estás dejando dinero en la mesa. Pero aquí viene la buena noticia: lanzar un e-commerce exitoso es más accesible que nunca.

En LUMA Digital Solutions hemos ayudado a decenas de empresas a transformar sus negocios físicos en máquinas de venta online. En esta guía te compartiremos exactamente cómo hacerlo.

## 1. Define tu Estrategia de E-commerce

Antes de comprar dominio o contratar a un desarrollador, necesitas claridad. Responde estas preguntas:

**¿Qué vas a vender?** No es tan obvio como parece. Define exactamente qué productos o servicios ofrecerás. ¿Todo tu catálogo o solo lo más popular?

**¿Quién es tu cliente ideal?** ¿Jóvenes de 18-25 años? ¿Profesionales de 35-50? ¿Amas de casa? Cada grupo necesita un enfoque diferente.

**¿Cuál es tu presupuesto?** Ser honesto aquí evita problemas después. ¿Tienes $500, $5,000 o $50,000? Cada número tiene diferentes opciones.

**¿Cuál es tu diferencial?** ¿Por qué comprarían en tu tienda y no en Amazon o Mercado Libre? Necesitas una respuesta clara.

**¿Cuáles son tus márgenes?** Si vendes algo a $100, ¿cuánto cuesta producirlo o comprarlo? ¿Qué margen necesitas para que sea rentable?

Tómate una semana para responder estas preguntas. No es perder tiempo, es ganar dinero después.

## 2. Elige la Plataforma Correcta

Aquí es donde muchos se equivocan. No existe una plataforma "mejor" para todos. Depende de tu caso.

### Shopify
**Para quién:** Negocios medianos, con presupuesto, que quieren crecer rápido.
**Costo:** Desde $29/mes hasta $299/mes
**Ventajas:** Fácil de usar, integración con múltiples métodos de pago, escalable
**Desventajas:** Caro, comisiones por transacción

### WooCommerce (WordPress)
**Para quién:** Negocios que ya tienen sitio web, que quieren máximo control
**Costo:** Hosting ($10-30/mes) + plugins ($0-500/mes)
**Ventajas:** Máxima flexibilidad, bajo costo inicial
**Desventajas:** Más técnico, requiere mantenimiento

### Prestashop
**Para quién:** Negocios medianos, con conocimiento técnico
**Costo:** Hosting ($10-30/mes) + temas/módulos
**Ventajas:** Muy versátil, bueno para catálogos grandes
**Desventajas:** Curva de aprendizaje mayor

### Tienda Nativa (Custom)
**Para quién:** Grandes negocios, con presupuesto importante
**Costo:** $2,000-15,000+ desarrollo
**Ventajas:** Completamente personalizado, velocidad, SEO optimizado
**Desventajas:** Más caro, pero mejor a largo plazo

**Nuestra recomendación:** Si eres pequeño-mediano en Chihuahua, comienza con WooCommerce. Si necesitas escalabilidad inmediata y presupuesto disponible, Shopify.

## 3. Estructura tu Catálogo de Productos

Un e-commerce sin estructura es como un supermercado sin pasillos: los clientes se pierden.

### Organiza así:

**Categorías claras:** No más de 5-7 categorías principales. Si tienes más, agrupa.

**Subcategorías lógicas:** Un cliente debe entender dónde está cada cosa.

**Filtros útiles:** Precio, color, tamaño, marca. Según tu industria.

**Productos destacados:** ¿Cuáles venden más? Ponlos arriba.

**SKUs organizados:** Cada producto necesita código único para control de inventario.

**Descripciones SEO:** "Zapato" vs "Zapato deportivo para correr 2025 color negro número 42". Adivina cuál posiciona mejor.

### Ejemplo de estructura (Tienda de ropa):

\`\`\`
Hombre
├─ Camisetas
│  ├─ Deportivas
│  ├─ Casuales
│  └─ Formales
├─ Pantalones
└─ Accesorios

Mujer
├─ Vestidos
├─ Blusas
└─ Accesorios

Niños
\`\`\`

## 4. Define tu Estrategia de Precios

Aquí muchos cometen errores costosos.

### Fórmula básica:

**Precio de venta = (Costo del producto × 2.5) + gastos**

No es magia, es matemática. Si algo cuesta $100 comprarlo y tus gastos mensuales son $2,000, necesitas vender volumen.

### Estrategias comunes:

**Precio psicológico:** $99 en lugar de $100 (parece más barato)

**Descuentos por volumen:** Compra 3, 10% descuento

**Bundle (paquetes):** Vende producto A + B + C junto por menos que separado

**Ofertas de tiempo limitado:** "Esta semana 20% descuento"

**Puntos/Lealtad:** Clientes que vuelven = margen más alto

En Chihuahua, la competencia es precio. Pero no es una batalla que ganes bajando precios. Ganas con valor: mejor calidad, mejor servicio, mejor experiencia.

## 5. Optimiza tu Página de Inicio

Tu homepage es como la vidriera de una tienda física. Si no es atractiva, nadie entra.

### Elementos clave:

**Propuesta clara (arriba del todo):** En 5 segundos el visitante debe saber qué vendes y por qué debería comprar contigo. No "Bienvenido a nuestra tienda". Sí "Zapatos cómodos y durables, fabricados en Chihuahua, con 90 días garantía".

**Imagen/Video de impacto:** Una foto genérica de un producto no convierte. Una foto de un cliente feliz usando tu producto = conversión.

**Productos destacados:** Los 4-6 que más venden o tienen mejor margen.

**Testimonios reales:** "Compré hace 2 semanas y llegó perfectamente. Super recomendado." - María, Chihuahua.

**CTA (Call To Action) claro:** Botones grandes, colores contrastantes. "Comprar ahora" no "Click aquí".

**Trust signals:** 🔒 "Pago seguro", ⭐ "500+ clientes satisfechos", 📦 "Envío a toda México".

## 6. Elige Métodos de Pago (MUY importante)

Si solo aceptas transferencia bancaria, pierdes 30% de tus ventas.

### Métodos que DEBES tener en 2025:

**Tarjeta de crédito/débito:** No negocia. Stripe, 2Checkout o similar.

**Mercado Pago:** En México es obligatorio. Comisión ~3.49% pero llega dinero al día siguiente.

**PayPal:** Menos popular en México pero sigue siendo opción.

**OXXO/Rappi Pay:** Para gente sin tarjeta. Crucial en Chihuahua.

**Transferencia bancaria:** Para clientes B2B.

**Efectivo contra entrega:** Si haces delivery local, opción valiosa.

Costo: Entre 2-4% de cada venta. Es inversión, no gasto.

## 7. Plan de Logística y Envíos

Un producto bonito que llega roto = cliente furioso.

### Opciones:

**Logística propia:** Si estás en Chihuahua y solo entregas localmente, viable.

**DHL, FedEx, Estafeta:** Caro ($50+) pero confiable.

**Paquetería local:** En Chihuahua tienes opciones locales, 25-40% más barato.

**Marketplace logistics:** Envío integrado en Mercado Libre, Amazon.

**Dropshipping:** Proveedores envían directo. Margen bajo pero sin inventario.

### Recomendación:
Comienza ofreciendo envío GRATIS (incluido en precio). Es 2025 y clientes lo esperan. Más viable que cobrar envío.

## 8. Optimiza para SEO y Google Shopping

Lanzar un e-commerce sin SEO es como abrir tienda en calle donde nadie pasa.

### SEO básico (gratis):

**Títulos de producto:** "Zapato deportivo Nike air 2025" (bueno) vs "Zapato" (malo)

**Descripciones:** Mínimo 150 palabras por producto. Incluye palabras clave naturales.

**URLs amigables:** /zapatos-deportivos-nike-air-2025 no /producto?id=12345

**Imágenes optimizadas:** Nombres descriptivos, alt text, comprimir tamaño.

**Links internos:** Producto A → "También vean" Producto B.

**Velocidad:** E-commerce lento = 50% abandono. Comprimir imágenes, usar CDN.

### Google Shopping (pago pero ROI alto):

- Budget inicial: $10-20/día
- Costo por click: $0.50-3.00 (según competencia)
- Conversión esperada: 2-5%

En Chihuahua, Google Shopping es PODEROSO. Gente busca precio y compara.

## 9. Email Marketing (Tu arma secreta)

El cliente más valioso es el que ya compró.

### Setup básico:

**Mailchimp/Brevo:** Gratis hasta 500 contactos.

**Welcome email:** Cuando se registran, envía automático "Bienvenido, aquí tu 10% descuento"

**Carrito abandonado:** Cliente deja producto en carrito, email 24h después: "Se te olvidó pagar, aquí tu link"

**Recomendaciones:** "Ya compraste X, te podría gustar Y"

**Newsletter:** Semanal, no daily. Contenido + descuentos.

Con email bien hecho, incrementas repeat customers 30%.

## 10. Mide, Ajusta y Crece

Lanzas, ¿y qué? Si no mides, no sabes qué funciona.

### Métricas clave:

**Conversión:** Visitantes que compran. Meta: 2-5%

**Ticket promedio:** Dinero por venta. Objetivo: ir subiendo.

**Costo de adquisición (CAC):** ¿Cuánto gastas en ads para traer un cliente?

**Lifetime value (LTV):** ¿Cuánto gasta ese cliente en total a lo largo del tiempo?

**ROI:** Inversión dividida entre ganancia. Busca 3:1 mínimo.

**Productos estrella:** ¿Cuáles venden más? Promociona esos.

**Productos zombies:** ¿Cuáles no venden? Elimina o descuenta.

### Herramientas gratis:

- Google Analytics 4
- Google Search Console
- Panel de tu plataforma (Shopify, WooCommerce)

Revísalo cada viernes. 1 hora. Datos = decisiones mejores.

## 11. Marketing Inicial (Presupuesto bajo)

Lanzas bonito pero nadie ve. Necesitas traffic.

### Canal 1: Redes Sociales (GRATIS)

**TikTok:** Videos cortos de 15-30 segundos mostrando productos. Viral potencial alto.

**Instagram:** Fotos de productos, behind-the-scenes, cliente testimonials.

**Facebook:** Anuncios dirigidos a Chihuahua, 5 pesos/día mínimo.

**Recomendación:** Comienza orgánico. Cuando tengas 1,000 seguidores, invierte en ads.

### Canal 2: Ads pagados (pequeño presupuesto)

**Facebook/Instagram ads:** $5-10/día. Retargeting a visitantes.

**Google Shopping:** $10-20/día. Mostrar productos directamente.

**Google Search:** "Comprar [tu producto] en Chihuahua" - $1-2 por click.

**TikTok ads:** $10/día mínimo pero ROI alto en jóvenes.

### Canal 3: Referidos/Influencers locales

En Chihuahua, micro-influencers locales (5-50k seguidores) cobran $300-1,000 por publicación. Mejor ROI que crear contenido propio a veces.

**Presupuesto inicial recomendado:** $300-500/mes en marketing.

## 12. Servicio al Cliente (la diferencia)

Aquí es donde muchos fracasan.

**Responde en máximo 24 horas.**

**WhatsApp:** Tu canal principal. No es opcional en 2025.

**Email:** Para consultas formales.

**Chat en vivo:** Si tienes presupuesto, increíble para conversión.

### Políticas claras:

- ¿Cuál es tu política de devolución? (Mínimo 30 días)
- ¿Qué pasa si llega dañado?
- ¿Cómo se hace un reclamo?

Comunica esto ANTES de que compren, no después.

## 13. Checklist Final de Lanzamiento

Antes de ir live:

- [ ] Dominio registrado (.com.mx es más confiable)
- [ ] Plataforma instalada y funcionando
- [ ] 50+ productos cargados con descripciones y fotos
- [ ] Métodos de pago integrados y testeados
- [ ] Política de privacidad, términos y condiciones
- [ ] Sistema de email marketing configurado
- [ ] Google Analytics y Search Console conectados
- [ ] Testimonios/reviews iniciales cargados
- [ ] Imágenes optimizadas para velocidad
- [ ] Mobile responsive 100% (prueba en teléfono)
- [ ] 3 personas diferentes probaron compra (test antes de público)
- [ ] Soporte configurado (WhatsApp, email, etc)
- [ ] Redes sociales listas (publicar anuncio de lanzamiento)
- [ ] Presupuesto de marketing listo ($300-500/mes mínimo)

## Conclusión: Tu E-commerce en 2025 es Viable

Lanzar un e-commerce exitoso en 2025 no requiere ser ingeniero, millonario o tener suerte.

Requiere:
- **Claridad** (saber qué vendes y a quién)
- **Ejecución** (hacer que funcione)
- **Optimización** (medir y ajustar)
- **Paciencia** (toma 3-6 meses ver resultados)

En LUMA Digital Solutions hemos acompañado a negocios en Chihuahua desde cero ventas hasta $100,000/mes en ventas online.

¿No sabes por dónde empezar? Tenemos una solución.

---

## ¿Listo para Lanzar tu E-commerce?

En LUMA Digital Solutions no solo hacemos tiendas online bonitas. Hacemos máquinas de venta.

Nuestro paquete **E-commerce Completo** incluye:

- ✅ Desarrollo profesional de tu tienda (Shopify o custom)
- ✅ Integración de métodos de pago (Mercado Pago, Stripe, OXXO)
- ✅ Optimización SEO y Google Shopping setup
- ✅ Capacitación en gestión de inventario
- ✅ 3 meses de soporte y optimización
- ✅ Auditoría de conversión y mejoras

**Precio:** $2,500 - $5,000 USD (según complejidad)
**Tiempo:** 4-6 semanas de desarrollo

**¿Cuántos clientes online quieres en 2025?**

Contáctanos por WhatsApp: 614 515 4240

Tu marca tiene historia. Nosotros la contamos.

**LUMA Digital Solutions** — Chihuahua, México`,
  },
  {
    slug: "seo-tips-empresas",
    title: "5 Estrategias SEO que Tu Negocio Necesita Hoy",
    category: "Marketing",
    date: "2025-03-01",
    author: "LUMA Team",
    readTime: "6 min",
    image: "seo",
    excerpt: "Si tu negocio está en Google pero nadie te encuentra, tienes un problema. El SEO es la base de cualquier estrategia digital exitosa. Descubre 5 estrategias probadas que realmente funcionan.",
    content: "¿Por qué necesitas SEO?\nSi tu negocio está en Google pero nadie te encuentra, tienes un problema. El SEO es la base de cualquier estrategia digital exitosa.\n\n5 Estrategias que funcionan\n\n1. Optimización On-Page\n• Títulos claros (\"Agencia diseño web Chihuahua\")\n• Keywords naturales\n• URLs limpias\n• Estructura con H1, H2, H3\n\n2. Contenido de Calidad\n• Artículos que ayudan\n• Blog actualizado (1-2 posts/mes)\n• Resuelve problemas reales\n\n3. Link Building\n• Directorios locales (Google My Business, Yelp)\n• Menciones en medios\n• Alianzas con complementarios\n• Guest posting\n\n4. Mobile First\n• 70% de búsquedas son móvil\n• Página rápida en celular\n• Botones clickeables\n\n5. Velocidad de Carga\n• Menos de 3 segundos\n• Comprimir imágenes\n• Hosting decente\n\nPlan 90 días\nMes 1: Auditoría SEO + optimizar 5 páginas clave\nMes 2: Contenido + link building local\nMes 3: Consolidar + analizar resultados\n\nCasos reales\n• Restaurante Guadalajara: +60% reservas en 4 meses\n• Consultoría CDMX: +3 clientes/mes sin publicidad\n• E-commerce Monterrey: +150% tráfico, +80% ventas\n\nErrores a evitar\n🚫 Prometer resultados en 1 semana\n🚫 Comprar links baratos\n🚫 Ignorar mobile\n🚫 Copiar contenido\n\n¿Necesitas SEO?\nContáctanos para consulta gratuita.\n📱 614-370-7858\n🌐 @lumadigsolutions\nLUMA Digital Solutions 🚀",
  },
  {
    slug: "ia-negocios-mexico",
    title: "Cómo la IA está Transformando los Negocios en México",
    category: "Tecnología",
    date: "2025-02-20",
    author: "LUMA Team",
    readTime: "7 min",
    image: "ia",
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
    title: "\u200BAPRENDER SOBRE TI",
    description: "Piensa en esto como una terapia de marca, donde nos cuentas todo sobre tu empresa, hacia d\u00F3nde se dirige y qu\u00E9 no ha funcionado en el pasado. Este proceso puede durar todo el tiempo que sea necesario para que entendamos qu\u00E9 es lo que te motiva.",
  },
  {
    number: "02",
    title: "CREAR EL PLAN DE JUEGO ",
    description: "Una vez que te ayudamos a definir tus objetivos, creamos la mejor estrategia posible que se adapte a tu presupuesto y cronograma. Nos aseguraremos de que haya suficiente margen de maniobra para giros de \u00FAltimo momento, para que siempre se sienta como t\u00FA.",
  },
  {
    number: "03",
    title: "HACER QUE LAS COSAS SUCEDAN",
    description: "Aqu\u00ED es donde empieza la diversi\u00F3n. Nuestros expertos tomar\u00E1n las riendas y se pondr\u00E1n manos a la obra, manteni\u00E9ndote informado durante todo el camino. Siempre tendr\u00E1s nuestra total atenci\u00F3n, sin excusas.",
  },
  {
    number: "04",
    title: "OPTIMIZAR + REPETIR",
    description: "Una vez que lanzamos, seguimos con manos a la obra. Nuestro equipo rastrear\u00E1 el rendimiento, informar\u00E1 nuestros hallazgos y aprovechar\u00E1 cada oportunidad para mejorar las cosas, para que puedas relajarte y ver crecer tus n\u00FAmeros.",
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
