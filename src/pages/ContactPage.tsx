import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", budget: "", projectType: [] as string[], message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "¡Mensaje enviado!", description: "Te contactaremos pronto." });
      setForm({ name: "", email: "", phone: "", company: "", budget: "", projectType: [], message: "" });
    }, 1500);
  };

  const handleCheckbox = (value: string) => {
    setForm((prev) => ({
      ...prev,
      projectType: prev.projectType.includes(value)
        ? prev.projectType.filter((t) => t !== value)
        : [...prev.projectType, value],
    }));
  };

  return (
    <div className="pt-[70px]">
      <section className="py-28 bg-primary/5 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-foreground uppercase tracking-tight mb-6">Contacto</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Cuéntanos sobre tu proyecto. La primera consulta es gratis.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-display font-bold text-foreground mb-2 block uppercase tracking-wider">Nombre *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-4 rounded-lg border-2 border-border bg-card text-foreground text-sm focus:ring-0 focus:border-primary outline-none transition-colors" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="text-sm font-display font-bold text-foreground mb-2 block uppercase tracking-wider">Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-4 rounded-lg border-2 border-border bg-card text-foreground text-sm focus:ring-0 focus:border-primary outline-none transition-colors" placeholder="tu@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-display font-bold text-foreground mb-2 block uppercase tracking-wider">Teléfono</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-5 py-4 rounded-lg border-2 border-border bg-card text-foreground text-sm focus:ring-0 focus:border-primary outline-none transition-colors" placeholder="+52 (123) 456-7890" />
                    </div>
                    <div>
                      <label className="text-sm font-display font-bold text-foreground mb-2 block uppercase tracking-wider">Empresa</label>
                      <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-5 py-4 rounded-lg border-2 border-border bg-card text-foreground text-sm focus:ring-0 focus:border-primary outline-none transition-colors" placeholder="Tu empresa" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-display font-bold text-foreground mb-2 block uppercase tracking-wider">Presupuesto estimado</label>
                    <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full px-5 py-4 rounded-lg border-2 border-border bg-card text-foreground text-sm focus:ring-0 focus:border-primary outline-none transition-colors">
                      <option value="">Selecciona un rango</option>
                      <option value="500-1000">$500 - $1,000 USD</option>
                      <option value="1000-3000">$1,000 - $3,000 USD</option>
                      <option value="3000-5000">$3,000 - $5,000 USD</option>
                      <option value="5000-10000">$5,000 - $10,000 USD</option>
                      <option value="10000+">$10,000+ USD</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-display font-bold text-foreground mb-4 block uppercase tracking-wider">Tipo de proyecto</label>
                    <div className="flex flex-wrap gap-4">
                      {["Sitio Web", "E-commerce", "Branding", "Automatización IA", "Software", "Otro"].map((type) => (
                        <label key={type} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input type="checkbox" checked={form.projectType.includes(type)} onChange={() => handleCheckbox(type)} className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                          <span className="text-foreground">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-display font-bold text-foreground mb-2 block uppercase tracking-wider">Mensaje *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-5 py-4 rounded-lg border-2 border-border bg-card text-foreground text-sm focus:ring-0 focus:border-primary outline-none transition-colors resize-none" placeholder="Cuéntanos sobre tu proyecto..." />
                  </div>

                  <Button type="submit" disabled={loading} size="lg">
                    {loading ? (
                      <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> Enviando...</span>
                    ) : (
                      <span className="flex items-center gap-2"><Send className="w-4 h-4" /> Enviar Mensaje</span>
                    )}
                  </Button>
                </form>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="space-y-8">
                  <div className="card-colab">
                    <h3 className="font-display font-bold text-foreground uppercase tracking-wide mb-6">Información</h3>
                    <div className="space-y-5">
                      <a href="mailto:hola@lumadigital.mx" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </a>
                      <a href="tel:+526145154240" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-5 h-5 text-primary" /> +52 (614) 515-4240
                      </a>
                      <a href="https://wa.me/526145154240" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="w-5 h-5 text-primary" /> WhatsApp
                      </a>
                      <div className="flex items-start gap-3 text-sm text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary shrink-0" /> Chihuahua México
                      </div>
                      <div className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Clock className="w-5 h-5 text-primary shrink-0" /> Lun - Vie: 9:00 - 18:00 CST
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden border border-border">
                    <div
                      ref={(node) => {
                        if (node && !node.querySelector('iframe')) {
                          const iframe = document.createElement('iframe');
                          iframe.title = "Ubicación LUMA";
                          iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240857.44994685427!2d-99.42677199999999!3d19.390519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076cda0e0!2sCiudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1";
                          iframe.width = "100%";
                          iframe.height = "250";
                          iframe.style.border = "0";
                          iframe.allowFullscreen = true;
                          iframe.loading = "lazy";
                          iframe.referrerPolicy = "no-referrer-when-downgrade";
                          node.appendChild(iframe);
                        }
                      }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
