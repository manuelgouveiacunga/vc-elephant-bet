import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/244929025408', '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#F72585] text-white p-4 rounded-full shadow-2xl hover:bg-[#d41d6f] transform hover:scale-110 transition-all duration-300 z-50 animate-bounce-slow"
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
}
