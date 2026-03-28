import AnimatedSection from "@/components/AnimatedSection";
import { teamMembers, processSteps } from "@/data/content";
import { Target, Eye, Heart, Sparkles } from "lucide-react";

const values = [
  { icon: Target, title: "Excelencia", desc: "No nos conformamos con lo bueno. Buscamos lo excepcional." },
  { icon: Eye, title: "Transparencia", desc: "Sin letras chiquitas. Comunicación clara y honesta." },
  { icon: Heart, title: "Compromiso", desc: "Tu proyecto es nuestro proyecto. Tu éxito es el nuestro." },
  { icon: Sparkles, title: "Innovación", desc: "Siempre buscando la mejor tecnología y las mejores prácticas." },
];

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-dark text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-secondary-foreground mb-4">Sobre Nosotros</h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
              Somos un equipo de creativos, desarrolladores y estrategas apasionados por transformar negocios a través de la tecnología.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Empoderar a empresas y emprendedores en Latinoamérica con soluciones digitales de clase mundial que impulsen su crecimiento y les permitan competir en la economía global.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser la agencia digital de referencia en México y Latinoamérica, reconocida por la calidad de nuestro trabajo, la innovación constante y el impacto positivo en los negocios de nuestros clientes.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Nuestros Valores</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-border bg-card text-center hover-lift">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Nuestro Equipo</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-border bg-card text-center hover-lift">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-display font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-secondary-foreground">Nuestra Historia</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {[
              { year: "2024", event: "Fundación de LUMA Digital Solutions en Ciudad de México" },
              { year: "2024", event: "Primeros 10 clientes y lanzamiento de servicios de IA" },
              { year: "2025", event: "Expansión a toda Latinoamérica y +50 proyectos completados" },
              { year: "2025", event: "Alianzas estratégicas con empresas de tecnología" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    {i < 3 && <div className="w-0.5 flex-1 bg-secondary-foreground/20 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-primary text-sm font-semibold">{item.year}</span>
                    <p className="text-secondary-foreground mt-1">{item.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
