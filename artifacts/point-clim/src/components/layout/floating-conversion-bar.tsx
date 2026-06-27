import { Phone, MessageCircle } from "lucide-react";

const PHONE = "0175295234";
const PHONE_DISPLAY = "01 75 29 52 34";
const WHATSAPP = "https://wa.me/33175295234?text=Bonjour%20POINT%20CLIM%2C%20je%20souhaite%20un%20devis%20rapide.";

export function FloatingConversionBar() {
  return (
    <>
      {/* Mobile premium */}
      <div className="fixed left-3 right-3 z-50 md:hidden bottom-[calc(env(safe-area-inset-bottom)+78px)]">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${PHONE}`}
            className="flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 text-white font-black shadow-2xl"
          >
            <Phone className="h-5 w-5" />
            Appeler
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 items-center justify-center gap-2 rounded-full bg-green-500 text-white font-black shadow-2xl"
          >
            <MessageCircle className="h-5 w-5" />
            Devis immédiat
          </a>
        </div>
      </div>

      {/* Desktop seulement */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center gap-3 rounded-full bg-blue-600 px-5 py-4 text-white font-bold shadow-2xl"
        >
          <Phone className="h-5 w-5" />
          {PHONE_DISPLAY}
        </a>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-white font-bold shadow-2xl"
        >
          <MessageCircle className="h-5 w-5" />
          Devis immédiat
        </a>
      </div>
    </>
  );
}
