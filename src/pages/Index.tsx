import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Monitor, Palette, Bot, Settings, Star, Check, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import { services, portfolioItems, processSteps, pricingPlans, testimonials, blogPosts } from "@/data/content";

const iconMap: Record<string, React.ElementType> = { Monitor, Palette, Bot, Settings };

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Agencia Digital en México
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-secondary-foreground leading-tight mb-6">
              Tu marca tiene historia,
              <br />
              <span className="text-gradient">nosotros la contamos</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-10 font-body">
              Desarrollamos soluciones digitales que transforman negocios. Web, branding, IA y software a medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 text-base px-8 h-12">
                <a href="#servicios">
                  Comienza Ahora <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 text-base px-8 h-12">
                <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer">
                  Agenda Consulta Gratis
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <a href="#servicios" className="text-secondary-foreground/50 hover:text-primary transition-colors">
              <ArrowDown className="w-6 h-6 animate-float" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Servicios</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3">
              Lo que hacemos
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Soluciones integrales para llevar tu negocio al siguiente nivel
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <AnimatedSection key={service.id} delay={i * 0.1}>
                  <div className="group p-6 rounded-xl border border-border bg-card hover-lift cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.subServices.map((sub) => (
                        <span key={sub} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">{sub}</span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/servicios">Ver todos los servicios <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3">
              Proyectos que Hemos Realizado
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <div className="group rounded-xl overflow-hidden bg-card border border-border hover-lift">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                      <div>
                        <span className="text-xs px-2 py-1 rounded-md bg-primary/80 text-primary-foreground">{item.category}</span>
                        <p className="text-secondary-foreground text-sm mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <div className="flex gap-2 mt-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs text-muted-foreground">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/portfolio">Ver más proyectos <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Proceso</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-foreground mt-3">
              Nuestro Proceso
            </h2>
            <p className="text-secondary-foreground/60 mt-4">4 pasos para transformar tu negocio</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15}>
                <div className="text-center">
                  <span className="text-5xl font-display font-bold text-gradient">{step.number}</span>
                  <h3 className="font-display font-semibold text-xl text-secondary-foreground mt-4 mb-2">{step.title}</h3>
                  <p className="text-secondary-foreground/60 text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Precios</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3">
              Planes para Todos los Tamaños
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div className={`p-8 rounded-xl border h-full flex flex-col ${
                  plan.highlighted
                    ? "border-primary bg-gradient-to-b from-primary/5 to-transparent shadow-glow"
                    : "border-border bg-card"
                }`}>
                  {plan.highlighted && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground self-start mb-4">
                      Más popular
                    </span>
                  )}
                  <h3 className="font-display font-bold text-xl text-foreground">{plan.name}</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={plan.highlighted
                      ? "w-full bg-gradient-primary hover:opacity-90 text-primary-foreground border-0"
                      : "w-full"
                    }
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              ¿Necesitas algo custom?{" "}
              <a href="https://wa.me/521234567890" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Agenda una consulta gratis
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonios</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3">
              Lo que dicen nuestros clientes
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-border bg-card h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm italic flex-1 mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-sm font-semibold text-primary">{t.result}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Blog</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3">
              Últimas noticias
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="rounded-xl border border-border bg-card overflow-hidden hover-lift h-full">
                    <div className="h-48 bg-gradient-dark" />
                    <div className="p-6">
                      <span className="text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary">{post.category}</span>
                      <h3 className="font-display font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>{post.readTime} de lectura</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/blog">Ver blog completo <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-foreground mb-4">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
              Hablemos sobre tus objetivos. La primera consulta es gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 text-base px-8 h-12">
                <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-4 h-4" /> Agendar Consulta Gratis
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 text-base px-8 h-12">
                <Link to="/contacto">
                  Enviar Mensaje
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
