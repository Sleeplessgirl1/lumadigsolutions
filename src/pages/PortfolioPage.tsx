import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { portfolioItems } from "@/data/content";
import { X } from "lucide-react";

const categories = ["Todos", "Web", "E-commerce", "Branding", "IA", "Software"];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);

  const filtered = filter === "Todos" ? portfolioItems : portfolioItems.filter((p) => p.category === filter);

  return (
    <div className="pt-[70px]">
      <section className="py-28 bg-primary/5 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-foreground uppercase tracking-tight mb-6">Portfolio</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Proyectos que hablan por nosotros</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <div
                  onClick={() => setSelectedProject(item)}
                  className="group rounded-lg overflow-hidden bg-card border border-border transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-card-hover cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary text-primary-foreground">{item.category}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display font-bold text-foreground uppercase">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.description}</p>
                    <div className="flex gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs text-muted-foreground">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full aspect-video object-cover rounded-t-lg" />
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/80 flex items-center justify-center text-background hover:bg-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-10">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary">{selectedProject.category}</span>
              <h2 className="text-2xl font-display font-bold text-foreground mt-4 mb-3 uppercase">{selectedProject.title}</h2>
              <div className="section-divider" />
              <p className="text-muted-foreground mb-6 leading-relaxed">{selectedProject.description}</p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div><strong className="text-foreground text-sm font-display">Cliente:</strong> <span className="text-muted-foreground text-sm">{selectedProject.client}</span></div>
                <div><strong className="text-foreground text-sm font-display">Resultado:</strong> <span className="text-primary text-sm font-bold">{selectedProject.results}</span></div>
              </div>
              <div>
                <strong className="text-foreground text-sm font-display">Stack:</strong>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedProject.stack.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
