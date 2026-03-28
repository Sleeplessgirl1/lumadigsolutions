import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">L</span>
              </div>
              <span className="font-display font-bold text-xl">LUMA Digital</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              Tu marca tiene historia, nosotros la contamos. Soluciones digitales que transforman negocios.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              {["Inicio", "Servicios", "Portfolio", "Blog", "Nosotros", "Contacto"].map((label) => (
                <Link
                  key={label}
                  to={label === "Inicio" ? "/" : `/${label.toLowerCase()}`}
                  className="block text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Servicios</h4>
            <div className="space-y-2">
              {["Desarrollo Web", "Branding", "Automatización IA", "Software a Medida"].map((s) => (
                <Link
                  key={s}
                  to="/servicios"
                  className="block text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="mailto:hola@lumadigital.mx" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> hola@lumadigital.mx
              </a>
              <a href="tel:+521234567890" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +52 (123) 456-7890
              </a>
              <div className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Ciudad de México, México
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} LUMA Digital Solutions. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
