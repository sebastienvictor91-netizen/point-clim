import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Snowflake, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PHONE_DISPLAY = "01 75 29 52 34";
const PHONE_LINK = "+33175295234";
const WHATSAPP_URL =
  "https://wa.me/33623558263?text=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20pour%20une%20climatisation.";

const services = [
  { name: "Installation climatisation", path: "/installation-climatisation" },
  { name: "Dépannage climatisation", path: "/depannage-climatisation" },
  { name: "Entretien climatisation", path: "/entretien-climatisation" },
  { name: "Climatisation réversible", path: "/climatisation-reversible" },
  { name: "Pompe à chaleur air/air", path: "/pompe-a-chaleur-air-air" },
  { name: "Pompe à chaleur air/eau", path: "/pompe-a-chaleur-air-eau" },
  { name: "Contrat maintenance", path: "/contrat-maintenance" },
  { name: "Solutions entreprises", path: "/climatisation-entreprises" },
];

const zones = [
  { name: "Paris (75)", path: "/climatisation-paris" },
  { name: "Seine-et-Marne (77)", path: "/climatisation-seine-et-marne" },
  { name: "Yvelines (78)", path: "/climatisation-yvelines" },
  { name: "Essonne (91)", path: "/climatisation-essonne" },
  { name: "Hauts-de-Seine (92)", path: "/climatisation-hauts-de-seine" },
  { name: "Seine-Saint-Denis (93)", path: "/climatisation-seine-saint-denis" },
  { name: "Val-de-Marne (94)", path: "/climatisation-val-de-marne" },
  { name: "Val-d'Oise (95)", path: "/climatisation-val-d-oise" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = isScrolled
    ? "bg-white/95 border-slate-200/70 shadow-sm backdrop-blur-2xl py-3"
    : "bg-white/10 border-white/10 backdrop-blur-xl py-4";

  const navText = isScrolled
    ? "text-slate-700 hover:text-slate-950"
    : "text-white/85 hover:text-white";

  return (
    <header className={`fixed left-0 right-0 top-0 z-40 border-b transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="group flex items-center gap-3" data-testid="link-logo">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-105">
            <Snowflake className="h-6 w-6 text-white" />
          </div>

          <div className="leading-none">
            <div className={`font-heading text-2xl font-black tracking-tight ${isScrolled ? "text-slate-950" : "text-white"}`}>
              POINT <span className="text-primary">CLIM</span>
            </div>
            <div className={`mt-1 text-[10px] font-bold uppercase tracking-[0.22em] ${isScrolled ? "text-slate-500" : "text-white/65"}`}>
              Climatisation • PAC
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className={`text-sm font-bold transition-colors ${navText}`}>
            Accueil
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-bold transition-colors focus:outline-none ${navText}`}>
              Services <ChevronDown className="h-4 w-4 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="mt-3 w-72 rounded-2xl border-slate-100 p-2 shadow-2xl">
              {services.map((s) => (
                <DropdownMenuItem key={s.path} asChild>
                  <Link href={s.path} className="w-full cursor-pointer rounded-xl px-3 py-2.5 font-medium">
                    {s.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/depannage-climatisation" className={`text-sm font-bold transition-colors ${navText}`}>
            Dépannage
          </Link>

          <Link href="/entretien-climatisation" className={`text-sm font-bold transition-colors ${navText}`}>
            Entretien
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-bold transition-colors focus:outline-none ${navText}`}>
              Zones <ChevronDown className="h-4 w-4 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="mt-3 w-72 rounded-2xl border-slate-100 p-2 shadow-2xl">
              {zones.map((z) => (
                <DropdownMenuItem key={z.path} asChild>
                  <Link href={z.path} className="w-full cursor-pointer rounded-xl px-3 py-2.5 font-medium">
                    {z.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/contact" className={`text-sm font-bold transition-colors ${navText}`}>
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE_LINK}`}
            data-testid="link-header-phone"
            className={`hidden xl:flex items-center gap-3 rounded-2xl px-4 py-2.5 transition-all ${
              isScrolled
                ? "bg-slate-100 text-slate-950 hover:bg-slate-200"
                : "bg-white/12 text-white hover:bg-white/20"
            }`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
              <Phone className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className={`block text-[10px] font-bold uppercase tracking-wider ${isScrolled ? "text-slate-500" : "text-white/60"}`}>
                Appel direct
              </span>
              <span className="block text-sm font-black">{PHONE_DISPLAY}</span>
            </span>
          </a>

          <Button
            asChild
            size="sm"
            className={`h-12 rounded-2xl px-6 font-black shadow-lg transition-all hover:scale-[1.02] ${
              isScrolled
                ? "bg-primary text-white hover:bg-primary/90 shadow-primary/25"
                : "bg-white text-slate-950 hover:bg-white/90 shadow-black/10"
            }`}
          >
            <Link href="/contact" data-testid="link-header-devis">
              Devis gratuit
            </Link>
          </Button>
        </div>

        <button
          className={`rounded-xl p-2 transition-colors lg:hidden ${
            isScrolled ? "text-slate-950 hover:bg-slate-100" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-slate-100 bg-white shadow-2xl lg:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-5 py-6">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE_LINK}`}
                className="flex h-13 items-center justify-center gap-2 rounded-2xl bg-primary font-black text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                Appeler
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#25D366] font-black text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <Link href="/" className="rounded-xl px-4 py-3 font-bold text-slate-800 hover:bg-slate-50" onClick={() => setIsMobileMenuOpen(false)}>
              Accueil
            </Link>

            <div>
              <p className="mb-2 px-4 text-xs font-black uppercase tracking-widest text-slate-400">
                Services
              </p>
              <div className="grid gap-1">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    href={s.path}
                    className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 px-4 text-xs font-black uppercase tracking-widest text-slate-400">
                Zones
              </p>
              <div className="flex flex-wrap gap-2 px-4">
                {zones.map((z) => (
                  <Link
                    key={z.path}
                    href={z.path}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 hover:border-primary hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {z.name}
                  </Link>
                ))}
              </div>
            </div>

            <Button asChild className="mt-2 h-12 rounded-2xl font-black">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Demander un devis gratuit
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}