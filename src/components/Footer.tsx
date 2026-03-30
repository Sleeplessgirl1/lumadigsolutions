import { Mail, Phone, MapPin } from "lucide-react";

const marqueeText = "Tu web. Tus clientes. Siempre. 🚀 Your web. Your clients. Always. ✨ Tu web. Tus clientes. Siempre. 💜 Your web. Your clients. Always. 🔥 ";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Marquee */}
      <div className="bg-primary py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-primary-foreground font-display font-black text-xl md:text-2xl uppercase tracking-wider mx-4"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-primary/90 to-primary/70 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Logo grande */}

          <div className="flex flex-col items-start gap-6">
            <a
              href="https://www.instagram.com/lumadigsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight hover:opacity-70 transition-opacity"
            >
              @lumadigsolutions
            </a>
            <a
              href="https://wa.me/526145154240?text=Hola%20te%20escribo%20porque%20me%20interesa%20saber%20m%C3%A1s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight hover:opacity-70 transition-opacity"
            >
              +52 (614) 515-4240
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-foreground/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-start gap-2 text-sm text-foreground/60">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              CUU
            </div>
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} LUMA Digital Solutions. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
