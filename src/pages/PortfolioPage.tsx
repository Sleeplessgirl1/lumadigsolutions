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
    <div className="pt-20">
      <section className="py-20 bg-gradient-dark text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-secondary-foreground mb-4">Portfolio</h1>
            <p className="text-secondary-foreground/70 max-w-xl mx-auto text-lg">Proyectos que hablan por nosotros</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <div
                  onClick={() => setSelectedProject(item)}
                  className="group rounded-xl overflow-hidden bg-card border border-border hover-lift cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs px-2 py-1 rounded-md bg-primary/80 text-primary-foreground">{item.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    <div className="flex gap-2 mt-3">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">{tag}</span>
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
        <div className="fixed inset-0 z-50 bg-secondary/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full aspect-video object-cover rounded-t-2xl" />
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-secondary-foreground hover:bg-secondary">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-8">
              <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">{selectedProject.category}</span>
              <h2 className="text-2xl font-display font-bold text-foreground mt-3 mb-2">{selectedProject.title}</h2>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div><strong className="text-foreground text-sm">Cliente:</strong> <span className="text-muted-foreground text-sm">{selectedProject.client}</span></div>
                <div><strong className="text-foreground text-sm">Resultado:</strong> <span className="text-primary text-sm font-semibold">{selectedProject.results}</span></div>
              </div>
              <div>
                <strong className="text-foreground text-sm">Stack:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.stack.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">{s}</span>
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
