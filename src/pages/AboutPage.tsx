import AnimatedSection from "@/components/AnimatedSection";
import { teamMembers, processSteps } from "@/data/content";
import { Target, Eye, Heart, Sparkles, Rocket, Users, Handshake, Globe } from "lucide-react";

const values = [
  { icon: Target, title: "Excelencia", desc: "No nos conformamos con lo bueno. Buscamos lo excepcional." },
  { icon: Eye, title: "Transparencia", desc: "Sin letras chiquitas. Comunicación clara y honesta." },
  { icon: Heart, title: "Compromiso", desc: "Tu proyecto es nuestro proyecto. Tu éxito es el nuestro." },
  { icon: Sparkles, title: "Innovación", desc: "Siempre buscando la mejor tecnología y las mejores prácticas." },
];

const AboutPage = () => {
  return (
    <div className="pt-[70px]">
      <section className="py-28 bg-primary/5 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-foreground uppercase tracking-tight mb-6">Sobre Nosotros</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Somos un equipo de creativos, desarrolladores y estrategas apasionados por transformar negocios a través de la tecnología.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-foreground uppercase tracking-tight mb-6">Nuestra Misión</h2>
              <div className="section-divider" />
              <p className="text-muted-foreground leading-relaxed text-lg">
                Empoderar a empresas y emprendedores en Latinoamérica con soluciones digitales de clase mundial que impulsen su crecimiento y les permitan competir en la economía global.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-display font-bold text-foreground uppercase tracking-tight mb-6">Nuestra Visión</h2>
              <div className="section-divider" />
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ser la agencia digital de referencia en México y Latinoamérica, reconocida por la calidad de nuestro trabajo, la innovación constante y el impacto positivo en los negocios de nuestros clientes.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">Nuestros Valores</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="card-colab text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground uppercase tracking-wide mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">Nuestro Equipo</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="card-colab text-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-display font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="font-display font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((s) => (
                      <span key={s} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 md:py-36 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-secondary-foreground uppercase tracking-tight">Nuestra Historia</h2>
          </AnimatedSection>
          <div className="space-y-10">
            {[
              { year: "2025", event: "Fundación de Luma Solutions." },
              { year: "2026", event: "Primeros 10 clientes y lanzamiento de servicios de IA" },
              { year: "2025", event: "Alianza estratégica con Productores de Video" },
              { year: "2027", event: "Impacto en todo México" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    {i < 3 && <div className="w-0.5 flex-1 bg-secondary-foreground/20 mt-2" />}
                  </div>
                  <div className="pb-4">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">{item.year}</span>
                    <p className="text-secondary-foreground mt-2 text-lg">{item.event}</p>
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
