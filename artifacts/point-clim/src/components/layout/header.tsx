import { Link } from "wouter";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Snowflake,
  MessageCircle,
} from "lucide-react";
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
  { name: "Installation", path: "/installation-climatisation" },
  { name: "Dépannage & entretien", path: "/depannage-entretien-climatisation" },
  { name: "Pompes à chaleur", path: "/pompes-a-chaleur" },
  { name: "Froid frigorifique", path: "/froid-frigorifique-camions" },
  { name: "Maintenance", path: "/contrat-maintenance" },
  { name: "Entreprises", path: "/climatisation-entreprises" },
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
    <header
      className={`fixed left-0 right-0 top-0 z-40 border-b transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          data-testid="link-logo"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
            <Snowflake className="h-5 w-5 text-white" />
          </div>

          <div className="leading-none">
            <div
              className={`font-heading text-2xl font-black tracking-tight ${
                isScrolled ? "text-slate-950" : "text-white"
              }`}
            >
              POINT <span className="text-primary">CLIM</span>
            </div>
            <div
              className={`mt-1 text-[10px] font-bold uppercase tracking-[0.22em] ${
                isScrolled ? "text-slate-500" : "text-white/65"
              }`}
            >
              Climatisation • PAC
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className={`text-sm font-bold transition-colors ${navText}`}>
            Accueil
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-bold transition-colors focus:outline-none ${navText}`}
            >
              Services <ChevronDown className="h-4 w-4 opacity-60" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="center"
              className="mt-3 w-80 rounded-2xl border-slate-100 p-2 shadow-2xl"
            >
              {services.map((service) => (
                <DropdownMenuItem key={service.path} asChild>
                  <Link
                    href={service.path}
                    className="w-full cursor-pointer rounded-xl px-3 py-2.5 font-medium"
                  >
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/depannage-entretien-climatisation"
            className={`text-sm font-bold transition-colors ${navText}`}
          >
            Dépannage
          </Link>

          <Link
            href="/depannage-entretien-climatisation"
            className={`text-sm font-bold transition-colors ${navText}`}
          >
            Entretien
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-bold transition-colors focus:outline-none ${navText}`}
            >
              Zones <ChevronDown className="h-4 w-4 opacity-60" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="center"
              className="mt-3 w-72 rounded-2xl border-slate-100 p-2 shadow-2xl"
            >
              {zones.map((zone) => (
                <DropdownMenuItem key={zone.path} asChild>
                  <Link
                    href={zone.path}
                    className="w-full cursor-pointer rounded-xl px-3 py-2.5 font-medium"
                  >
                    {zone.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/contact"
            className={`text-sm font-bold transition-colors ${navText}`}
          >
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
              <span
                className={`block text-[10px] font-bold uppercase tracking-wider ${
                  isScrolled ? "text-slate-500" : "text-white/60"
                }`}
              >
                Disponible 7j/7
              </span>
              <span className="block text-sm font-black">{PHONE_DISPLAY}</span>
            </span>
          </a>

          <Button
            asChild
            size="sm"
            className={`h-12 rounded-2xl px-7 font-black shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] ${
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
            isScrolled
              ? "text-slate-950 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-slate-100 bg-white shadow-2xl lg:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-5 py-6">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE_LINK}`}
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-4 font-black text-white transition-all hover:bg-primary/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>Appeler</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 text-sm font-black text-white transition-all hover:bg-[#20bd5a]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                <span>Devis immédiat</span>
              </a>
            </div>

            <Link
              href="/"
              className="rounded-xl px-4 py-3 font-bold text-slate-800 hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>

            <div>
              <p className="mb-2 px-4 text-xs font-black uppercase tracking-widest text-slate-400">
                Services
              </p>

              <div className="grid gap-1">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 px-4 text-xs font-black uppercase tracking-widest text-slate-400">
                Zones
              </p>

              <div className="flex flex-wrap gap-2 px-4">
                {zones.map((zone) => (
                  <Link
                    key={zone.path}
                    href={zone.path}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 hover:border-primary hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {zone.name}
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