import { Monitor, Palette, Bot, Settings, Video, Box, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { services, pricingPlans, faqItems } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const iconMap: Record<string, React.ElementType> = { Monitor, Palette, Bot, Settings, Video, Box };

const sectionStyles = [
  {
    bg: "bg-primary",
    textColor: "text-primary-foreground",
    mutedColor: "text-primary-foreground/70",
    watermark: "DESARROLLO",
    iconColor: "text-primary-foreground/15",
    watermarkColor: "text-primary-foreground/10",
  },
  {
    bg: "bg-accent",
    textColor: "text-accent-foreground",
    mutedColor: "text-accent-foreground/70",
    watermark: "DISEÑO",
    iconColor: "text-accent-foreground/15",
    watermarkColor: "text-accent-foreground/10",
  },
  {
    bg: "bg-secondary",
    textColor: "text-secondary-foreground",
    mutedColor: "text-secondary-foreground/70",
    watermark: "INTELIGENCIA",
    iconColor: "text-secondary-foreground/15",
    watermarkColor: "text-secondary-foreground/10",
  },
  {
    bg: "bg-[hsl(330,70%,50%)]",
    textColor: "text-white",
    mutedColor: "text-white/70",
    watermark: "SOFTWARE",
    iconColor: "text-white/15",
    watermarkColor: "text-white/10",
  },
  {
    bg: "bg-[hsl(15,80%,50%)]",
    textColor: "text-white",
    mutedColor: "text-white/70",
    watermark: "PRODUCCIÓN",
    iconColor: "text-white/15",
    watermarkColor: "text-white/10",
  },
  {
    bg: "bg-[hsl(199,89%,48%)]",
    textColor: "text-white",
    mutedColor: "text-white/70",
    watermark: "RENDERS",
    iconColor: "text-white/15",
    watermarkColor: "text-white/10",
  },
];

const ServiceCard = ({ service, style, isActive }: { service: typeof services[0]; style: typeof sectionStyles[0]; isActive: boolean }) => {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.88,
        y: isActive ? 0 : -60,
        x: isActive ? 0 : 80,
        rotateZ: isActive ? 0 : 3,
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute inset-0 ${style.bg} rounded-3xl overflow-hidden flex items-center ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Centered icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.div
          initial={false}
          animate={{
            scale: isActive ? 1 : 0.6,
            opacity: isActive ? 0.15 : 0,
            rotate: isActive ? 0 : -15,
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: isActive ? 0.15 : 0 }}
        >
          <Icon className={`w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 ${style.textColor}`} strokeWidth={0.8} />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={false}
        animate={{
          y: isActive ? 0 : 30,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut", delay: isActive ? 0.2 : 0 }}
        className="relative z-10 px-6 sm:px-10 md:px-14 py-10 md:py-14 w-full"
      >
        <div className="max-w-2xl">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight ${style.textColor} mb-4 leading-[0.95]`}>
            {service.title}
          </h2>

          <p className={`${style.mutedColor} text-sm sm:text-base leading-relaxed mb-6 max-w-lg`}>
            {service.longDescription}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {service.features.map((f) => (
              <li key={f} className={`flex items-start gap-2 text-xs sm:text-sm ${style.textColor}`}>
                <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-80" /> {f}
              </li>
            ))}
          </ul>

          <div className={`flex flex-wrap gap-6 text-xs sm:text-sm ${style.mutedColor} mb-6`}>
            <div>
              <strong className={`${style.textColor} font-display`}>Precio:</strong> {service.priceRange}
            </div>
            <div>
              <strong className={`${style.textColor} font-display`}>Tiempo:</strong> {service.deliveryTime}
            </div>
          </div>

          <Button
            asChild
            variant="outline"
            className={`rounded-full border-2 border-current ${style.textColor} bg-transparent hover:bg-white/10 uppercase font-bold tracking-wider px-6 py-5 text-xs sm:text-sm`}
          >
            <a href="https://wa.me/526145154240?text=Hola%20te%20escribo%20porque%20me%20interesa%20saber%20más" target="_blank" rel="noopener noreferrer">
              Contratar <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      services.length - 1,
      Math.floor(latest * services.length)
    );
    setActiveIndex(index);
  });

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="py-28 bg-primary/5 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-foreground uppercase tracking-tight mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Soluciones digitales integrales para empresas y startups que buscan crecer
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sticky card stack */}
      <div ref={containerRef} style={{ height: `${services.length * 100}vh` }} className="relative">
        <div className="sticky top-[70px] h-[calc(100vh-70px)] flex items-center justify-center px-4 sm:px-6">
          {/* Dots navigation */}
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
            {services.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-white scale-125 shadow-lg" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Card container */}
          <div className="relative w-full max-w-6xl h-[80vh] md:h-[75vh]">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                style={sectionStyles[i % sectionStyles.length]}
                isActive={i === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Comparison Table */}
      <section className="py-28 md:py-36 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">Comparativa de Planes</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div className={`p-10 rounded-lg border h-full flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlighted ? "border-primary shadow-glow bg-card" : "border-border bg-card hover:border-primary"
                }`}>
                  {plan.highlighted && (
                    <span className="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary text-primary-foreground self-start mb-6">Más popular</span>
                  )}
                  <h3 className="font-display font-bold text-xl text-foreground uppercase">{plan.name}</h3>
                  <div className="mt-6 mb-8">
                    <span className="text-5xl font-display font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="w-4 h-4 text-success mt-0.5 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={plan.highlighted ? "default" : "outline"} className="w-full">
                    <a href="https://wa.me/526145154240?text=Hola%20te%20escribo%20porque%20me%20interesa%20saber%20más" target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">Preguntas Frecuentes</h2>
          </AnimatedSection>
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-8 data-[state=open]:shadow-card data-[state=open]:border-primary transition-all">
                  <AccordionTrigger className="text-foreground font-display font-bold text-left hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
