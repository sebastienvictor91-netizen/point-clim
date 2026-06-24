import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "Installation climatisation", path: "/installation-climatisation" },
  { name: "Climatisation réversible", path: "/climatisation-reversible" },
  { name: "Pompes à chaleur", path: "/pompes-a-chaleur" },
  { name: "Entretien climatisation", path: "/entretien-climatisation" },
  { name: "Entretien pompe à chaleur", path: "/entretien-pompe-a-chaleur" },
  { name: "Dépannage climatisation", path: "/depannage-climatisation" },
  { name: "Dépannage pompe à chaleur", path: "/depannage-pompe-a-chaleur" },
  { name: "Contrat de maintenance", path: "/contrat-maintenance" },
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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm py-3 border-b border-black/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" data-testid="link-logo">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isScrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"}`}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2 14H10v-1h4v1zm-4-3v-2.81l-.6-.4C7.98 9.07 7 7.6 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.68-.85 3.18-2.4 4.19l-.6.4V13z"/>
            </svg>
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
            POINT<span className={isScrolled ? "text-primary" : "text-white/70"}> CLIM</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
          >
            Accueil
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}>
              Services <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-60 mt-2">
              {services.map((s) => (
                <DropdownMenuItem key={s.path} asChild>
                  <Link href={s.path} className="w-full cursor-pointer">{s.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}>
              Zones <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-60 mt-2">
              {zones.map((z) => (
                <DropdownMenuItem key={z.path} asChild>
                  <Link href={z.path} className="w-full cursor-pointer">{z.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/qui-sommes-nous"
            className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
          >
            À propos
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+33100000000"
            data-testid="link-header-phone"
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
          >
            <Phone className="w-4 h-4" />
            01 00 00 00 00
          </a>
          <Button
            asChild
            size="sm"
            className={`rounded-full px-5 font-semibold shadow-none transition-all ${isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-foreground hover:bg-white/90"}`}
          >
            <Link href="/contact" data-testid="link-header-devis">Devis gratuit</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
            <Link href="/" className="py-3 font-medium text-foreground/80 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>

            <div className="py-3 border-b border-gray-50">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Services</p>
              <div className="grid grid-cols-1 gap-1">
                {services.map((s) => (
                  <Link key={s.path} href={s.path} className="py-1.5 text-sm text-foreground/70 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-3 border-b border-gray-50">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Zones d'intervention</p>
              <div className="flex flex-wrap gap-2">
                {zones.map((z) => (
                  <Link key={z.path} href={z.path} className="text-xs px-3 py-1 rounded-full border border-gray-200 text-foreground/60 hover:border-primary hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    {z.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:+33100000000" className="flex items-center justify-center gap-2 h-12 rounded-xl border border-gray-200 font-semibold text-foreground" data-testid="link-mobile-call">
                <Phone className="w-4 h-4" /> 01 00 00 00 00
              </a>
              <Button asChild className="h-12 rounded-xl font-semibold">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} data-testid="link-mobile-devis">Devis gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
