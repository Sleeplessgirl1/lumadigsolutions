import { Monitor, Palette, Bot, Settings, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { services, pricingPlans, faqItems } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const iconMap: Record<string, React.ElementType> = { Monitor, Palette, Bot, Settings };

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

      {/* Detailed Services */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-4 sm:px-6 space-y-28">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground uppercase tracking-tight mb-6">{service.title}</h2>
                    <div className="section-divider" />
                    <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{service.longDescription}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                          <Check className="w-4 h-4 text-success mt-0.5 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-8 text-sm text-muted-foreground mb-8">
                      <div><strong className="text-foreground font-display">Precio:</strong> {service.priceRange}</div>
                      <div><strong className="text-foreground font-display">Tiempo:</strong> {service.deliveryTime}</div>
                    </div>
                    <Button asChild>
                      <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer">
                        Contratar <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <div className={`aspect-square rounded-2xl bg-primary/5 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Icon className="w-32 h-32 text-primary/20" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

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
                    <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer">{plan.cta}</a>
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
