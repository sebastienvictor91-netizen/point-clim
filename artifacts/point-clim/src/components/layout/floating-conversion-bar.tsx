import { Phone, MessageCircle } from "lucide-react";

const PHONE_DISPLAY = "01 75 29 52 34";
const PHONE_LINK = "+33175295234";
const WHATSAPP_URL =
  "https://wa.me/33623558263?text=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20gratuit%20pour%20une%20climatisation.";

export function FloatingConversionBar() {
  return (
    <div className="fixed bottom-5 right-5 z-50 hidden flex-col items-end gap-3 md:flex">
      <a
        href={`tel:${PHONE_LINK}`}
        aria-label="Appeler POINT CLIM"
        className="group flex items-center gap-3 rounded-full bg-blue-600 px-5 py-4 text-white shadow-[0_18px_45px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_22px_55px_rgba(37,99,235,0.5)]"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600">
          <Phone className="h-6 w-6" />
        </span>

        <span className="hidden text-left leading-tight sm:block">
          <span className="block text-xs font-semibold uppercase tracking-wide text-white/75">
            Conseiller disponible
          </span>
          <span className="block text-base font-extrabold">
            {PHONE_DISPLAY}
          </span>
        </span>
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Obtenir un devis gratuit sur WhatsApp"
        className="group flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_22px_55px_rgba(37,211,102,0.45)]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#25D366]">
          <MessageCircle className="h-6 w-6" />
        </span>

        <span className="hidden text-left leading-tight sm:block">
          <span className="block text-xs font-bold uppercase tracking-wide text-white/80">
            Devis gratuit
          </span>
          <span className="block text-sm font-extrabold">
            Réponse immédiate
          </span>
        </span>
      </a>
    </div>
  );
}