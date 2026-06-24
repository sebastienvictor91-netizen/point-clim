import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Snowflake, ChevronDown } from "lucide-react";
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
  { name: "Dépannage 24/7", path: "/depannage-climatisation" },
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Snowflake className="w-8 h-8 text-primary transition-transform group-hover:rotate-180 duration-700" />
          <span className="font-heading font-extrabold text-2xl tracking-tight">
            <span className="text-foreground">POINT</span>
            <span className="text-primary">CLIM</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Accueil
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
              Services <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.path} asChild>
                  <Link href={service.path} className="w-full cursor-pointer">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
              Zones d'intervention <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              {zones.map((zone) => (
                <DropdownMenuItem key={zone.path} asChild>
                  <Link href={zone.path} className="w-full cursor-pointer">
                    {zone.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/qui-sommes-nous" className="text-sm font-medium hover:text-primary transition-colors">
            Qui sommes-nous
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg transition-all font-semibold">
            <Link href="/contact">Devis Gratuit</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <Link href="/" className="py-2 text-lg font-medium border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            Accueil
          </Link>
          
          <div className="py-2">
            <div className="text-sm text-gray-500 font-semibold mb-2 uppercase tracking-wider">Nos Services</div>
            <div className="flex flex-col gap-2 pl-4 border-l-2 border-primary/20">
              {services.map((service) => (
                <Link 
                  key={service.path} 
                  href={service.path} 
                  className="py-1 text-foreground/80 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="py-2">
            <div className="text-sm text-gray-500 font-semibold mb-2 uppercase tracking-wider">Zones d'intervention</div>
            <div className="flex flex-col gap-2 pl-4 border-l-2 border-primary/20">
              {zones.map((zone) => (
                <Link 
                  key={zone.path} 
                  href={zone.path} 
                  className="py-1 text-foreground/80 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {zone.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/qui-sommes-nous" className="py-2 text-lg font-medium border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            Qui sommes-nous
          </Link>
          <Link href="/contact" className="py-2 text-lg font-medium border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>

          <Button asChild size="lg" className="w-full mt-4 rounded-full font-semibold">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Devis Gratuit</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
