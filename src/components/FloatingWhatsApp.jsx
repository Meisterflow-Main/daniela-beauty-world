import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+41797505152&text=Hallo%20liebe%20Daniela%21%20%0A%0AIch%20w%C3%BCrde%20gerne%20eine%20deiner%20Behandlungen%20buchen.%20%0A%0ALiebe%20Gr%C3%BC%C3%9Fe%21"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Per WhatsApp kontaktieren"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-luxe hover:scale-110 transition-transform duration-300 animate-float"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-gold rounded-full border-2 border-white" />
    </a>
  );
}