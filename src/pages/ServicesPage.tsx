import { Monitor, Palette, Bot, Settings, Video, Box, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { services, pricingPlans, faqItems } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

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
];

const ServicesPage = () => {
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

      {/* Service Sections - COLAB Style */}
      {services.map((service, i) => {
        const Icon = iconMap[service.icon];
        const style = sectionStyles[i % sectionStyles.length];

        return (
          <section
            key={service.id}
            className={`${style.bg} relative overflow-hidden min-h-[80vh] flex items-center`}
          >
            {/* Large watermark text */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            >
              <span
                className={`font-display font-black uppercase text-[12vw] leading-none ${style.watermarkColor} whitespace-nowrap`}
              >
                {style.watermark}
              </span>
            </motion.div>

            {/* 3D-style icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center"
            >
              <div className={`w-64 h-64 rounded-3xl ${style.iconColor} backdrop-blur-sm flex items-center justify-center`}>
                <Icon className={`w-40 h-40 ${style.textColor} opacity-30`} strokeWidth={1} />
              </div>
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 lg:py-28">
              <div className="max-w-2xl">
                <AnimatedSection>
                  <h2
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight ${style.textColor} mb-6 leading-[0.95]`}
                  >
                    {service.title}
                  </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                  <p className={`${style.mutedColor} text-base sm:text-lg leading-relaxed mb-10 max-w-lg`}>
                    {service.longDescription}
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.25}>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {service.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 text-sm ${style.textColor}`}>
                        <Check className="w-4 h-4 mt-0.5 shrink-0 opacity-80" /> {f}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>

                <AnimatedSection delay={0.35}>
                  <div className={`flex flex-wrap gap-8 text-sm ${style.mutedColor} mb-8`}>
                    <div>
                      <strong className={`${style.textColor} font-display`}>Precio:</strong> {service.priceRange}
                    </div>
                    <div>
                      <strong className={`${style.textColor} font-display`}>Tiempo:</strong> {service.deliveryTime}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <Button
                    asChild
                    variant="outline"
                    className={`rounded-full border-2 border-current ${style.textColor} bg-transparent hover:bg-white/10 uppercase font-bold tracking-wider px-8 py-6 text-sm`}
                  >
                    <a href="https://wa.me/526145154240?text=Hola%20te%20escribo%20porque%20me%20interesa%20saber%20más" target="_blank" rel="noopener noreferrer">
                      Contratar <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

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
