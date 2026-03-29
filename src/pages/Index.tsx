import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Monitor, Palette, Bot, Settings, Star, Check, Calendar, ChevronRight, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { services, portfolioItems, processSteps, pricingPlans, testimonials, blogPosts } from "@/data/content";

const iconMap: Record<string, React.ElementType> = { Monitor, Palette, Bot, Settings };

const Index = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block font-bold uppercase tracking-[0.2em] text-primary mb-8 text-xl">
              Agencia Digital en México
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-foreground leading-[1.1] tracking-tight uppercase">
              Tu marca tiene
              <br />
              <span className="text-gradient">historia</span>
            </h1>
            <p className="text-sm text-muted-foreground font-body tracking-widest uppercase mb-8 sm:text-2xl">Nosotros la contamos</p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body leading-relaxed">
              Desarrollamos soluciones digitales que transforman negocios. Web, branding, IA y software a medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mx-[11px] px-0">
              <Button asChild size="lg">
                <a href="https://wa.me/6145154240?text=Hola%20LUMA%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" className="border border-secondary font-sans">
                  Comienza Ahora <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://wa.me/6145154240?text=Hola%20LUMA%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">
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
            <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="w-6 h-6 animate-float py-0 my-[19px]" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-28 md:py-36 bg-background border-0 border-dotted rounded-3xl">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
                Lo que hacemos
              </h2>
              <ArrowRight className="w-8 h-8 text-primary hidden sm:block" />
            </div>
            <p className="text-muted-foreground max-w-xl text-lg">
              Soluciones integrales para llevar tu negocio al siguiente nivel
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <AnimatedSection key={service.id} delay={i * 0.1}>
                  <div className="card-colab h-full text-left rounded-xl opacity-100 border border-secondary">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 mb-6 shadow-sm flex-row flex items-center justify-center border border-popover-foreground">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground uppercase tracking-wide mb-4">{service.title}</h3>
                    <div className="section-divider" />
                    <div className="space-y-2">
                      {service.subServices.map((sub) => (
                        <p key={sub} className="text-sm text-muted-foreground">{sub}</p>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          <AnimatedSection className="mt-14 mx-0 text-center">
            <Button asChild>
              <Link to="/servicios">Somos Muy Talentosos <X className="ml-2 w-4 h-4 text-[#8249df]" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-28 md:py-36 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
              Proyectos que Hemos Realizado
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <div className="group rounded-lg overflow-hidden bg-card border border-border transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary text-primary-foreground">{item.category}</span>
                        <p className="text-secondary-foreground text-sm mt-3">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-foreground uppercase">{item.title}</h3>
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
          <AnimatedSection className="mt-14">
            <Button asChild>
              <Link to="/portfolio">Ver Más Proyectos <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESO - Two column layout */}
      <section className="py-28 md:py-36 bg-background" ref={processRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - Steps */}
            <div className="space-y-14">
              {processSteps.map((step, i) => (
                <AnimatedSection key={step.number} delay={i * 0.15}>
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-foreground uppercase tracking-wide mb-3">
                      {step.title}
                    </h3>
                    <div className="w-full h-[2px] bg-primary/30 mb-4" />
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            {/* Right - Heading + CTA */}
            <div className="lg:sticky lg:top-32">
              <AnimatedSection>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-foreground uppercase tracking-tight leading-[1.1] mb-8">
                  Nuestro
                  <br />
                  <span className="text-gradient">Proceso</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-md">
                  Nuestro credo se resume en cuatro palabras: hacemos más, hablamos menos. Una vez que te conocemos a fondo y construimos la estrategia perfecta, entregamos resultados que hablan por sí solos.
                </p>
                <div className="flex items-center gap-3">
                  <Button asChild size="lg">
                    <a href="https://wa.me/6145154240?text=Hola%20LUMA%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">
                      Te Mostramos Cómo
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full w-12 h-12 p-0">
                    <a href="https://wa.me/6145154240?text=Hola%20LUMA%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer">
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 md:py-36 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
              Planes para Todos
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div className={`p-10 rounded-lg border h-full flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlighted
                    ? "border-primary bg-card shadow-glow"
                    : "border-border bg-card hover:border-primary"
                }`}>
                  {plan.highlighted && (
                    <span className="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary text-primary-foreground self-start mb-6">
                      Más popular
                    </span>
                  )}
                  <h3 className="font-display font-bold text-xl text-foreground uppercase">{plan.name}</h3>
                  <div className="mt-6 mb-3">
                    <span className="text-5xl font-display font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-8">{plan.description}</p>
                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full"
                  >
                    <a href="https://wa.me/526145154240" target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <p className="text-muted-foreground text-sm">
              ¿Necesitas algo custom?{" "}
              <a href="https://wa.me/526145154240" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                Agenda una consulta gratis
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
              Lo que dicen nuestros clientes
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="card-colab h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">{t.result}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-28 md:py-36 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
              También escribimos bien 💡
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-card-hover h-full">
                    <div className="h-48 bg-gradient-dark" />
                    <div className="p-8">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
                      <h3 className="font-display font-bold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors text-lg">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-6 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>{post.readTime} de lectura</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-14">
            <Button asChild>
              <Link to="/blog">Ver Blog Completo <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 md:py-36 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-secondary-foreground mb-6 uppercase tracking-tight leading-[1.1]">
              ¿Listo para
              <br />
              transformar tu negocio?
            </h2>
            <p className="text-secondary-foreground/60 text-lg mb-12 max-w-xl mx-auto">
              Hablemos sobre tus objetivos. La primera consulta es gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://wa.me/526145154240" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-4 h-4" /> Agendar Consulta
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
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
