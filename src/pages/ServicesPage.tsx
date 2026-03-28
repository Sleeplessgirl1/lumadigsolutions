import { Monitor, Palette, Bot, Settings, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { services, pricingPlans, faqItems } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const iconMap: Record<string, React.ElementType> = { Monitor, Palette, Bot, Settings };

const ServicesPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-dark text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Servicios</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-secondary-foreground mt-3 mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
              Soluciones digitales integrales para empresas y startups que buscan crecer
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 space-y-20">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.longDescription}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 text-success mt-0.5 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                      <div><strong className="text-foreground">Precio:</strong> {service.priceRange}</div>
                      <div><strong className="text-foreground">Tiempo:</strong> {service.deliveryTime}</div>
                    </div>
                    <Button asChild className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0">
                      <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer">
                        Contratar <ChevronRight className="ml-1 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <div className={`aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Icon className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Comparativa de Planes</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div className={`p-8 rounded-xl border h-full flex flex-col ${
                  plan.highlighted ? "border-primary shadow-glow bg-card" : "border-border bg-card"
                }`}>
                  {plan.highlighted && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground self-start mb-4">Más popular</span>
                  )}
                  <h3 className="font-display font-bold text-xl text-foreground">{plan.name}</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-success mt-0.5 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={plan.highlighted ? "w-full bg-gradient-primary hover:opacity-90 text-primary-foreground border-0" : "w-full"} variant={plan.highlighted ? "default" : "outline"}>
                    <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Preguntas Frecuentes</h2>
          </AnimatedSection>
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:shadow-card">
                  <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
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
