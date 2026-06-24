import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingConversionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:bottom-auto md:top-24 md:left-auto md:right-4 md:p-0 flex md:flex-col gap-3 justify-center bg-white/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-t md:border-none shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] md:shadow-none animate-in slide-in-from-bottom-10 md:slide-in-from-right-10 duration-500">
      <a 
        href="tel:+33100000000" 
        data-testid="float-call"
        className="flex-1 md:flex-none"
      >
        <Button 
          size="lg" 
          className="w-full rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 animate-pulse-slow"
        >
          <Phone className="w-5 h-5 mr-2" />
          <span className="md:hidden lg:inline">01 00 00 00 00</span>
        </Button>
      </a>
      
      <a 
        href="https://wa.me/33100000000?text=Bonjour,%20je%20souhaite%20un%20devis%20pour..." 
        target="_blank" 
        rel="noopener noreferrer"
        data-testid="float-whatsapp"
        className="flex-1 md:flex-none"
      >
        <Button 
          size="lg" 
          className="w-full rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          <span className="md:hidden lg:inline">WhatsApp</span>
        </Button>
      </a>
    </div>
  );
}
