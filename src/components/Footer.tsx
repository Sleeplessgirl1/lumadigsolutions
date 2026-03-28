import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">L</span>
              </div>
              <span className="font-display font-bold text-xl">LUMA Digital</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-8">
              Tu marca tiene historia, nosotros la contamos. Soluciones digitales que transforman negocios.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-6">Links</h4>
            <div className="space-y-3">
              {["Inicio", "Servicios", "Portfolio", "Blog", "Nosotros", "Contacto"].map((label) => (
                <Link
                  key={label}
                  to={label === "Inicio" ? "/" : `/${label.toLowerCase()}`}
                  className="block text-sm text-background/60 hover:text-primary transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-6">Servicios</h4>
            <div className="space-y-3">
              {["Desarrollo Web", "Branding", "Automatización IA", "Software a Medida"].map((s) => (
                <Link
                  key={s}
                  to="/servicios"
                  className="block text-sm text-background/60 hover:text-primary transition-colors duration-200"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-6">Contacto</h4>
            <div className="space-y-4">
              <a href="mailto:hola@lumadigital.mx" className="flex items-center gap-3 text-lg font-display font-bold text-background hover:text-primary transition-colors duration-200">
                <Mail className="w-5 h-5" /> hola@lumadigital.mx
              </a>
              <a href="tel:+521234567890" className="flex items-center gap-3 text-lg font-display font-bold text-background hover:text-primary transition-colors duration-200">
                <Phone className="w-5 h-5" /> +52 (123) 456-7890
              </a>
              <div className="flex items-start gap-3 text-sm text-background/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Ciudad de México, México
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} LUMA Digital Solutions. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/40 hover:text-primary transition-colors duration-200">Privacidad</a>
            <a href="#" className="text-sm text-background/40 hover:text-primary transition-colors duration-200">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
