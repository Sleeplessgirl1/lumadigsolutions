import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/521234567890?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
