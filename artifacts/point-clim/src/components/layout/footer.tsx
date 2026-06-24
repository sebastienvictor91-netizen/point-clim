import { Link } from "wouter";
import { Snowflake, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Snowflake className="w-8 h-8 text-secondary" />
              <span className="font-heading font-extrabold text-2xl tracking-tight">
                <span className="text-white">POINT</span>
                <span className="text-secondary">CLIM</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              L'expert en climatisation et pompes à chaleur pour particuliers et professionnels dans toute l'Île-de-France.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold px-3 py-1 bg-white/10 rounded-full">
                RGE QualiPAC
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold px-3 py-1 bg-white/10 rounded-full">
                QualiClima
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Nos Services</h3>
            <ul className="space-y-3">
              <li><Link href="/installation-climatisation" className="text-gray-400 hover:text-secondary transition-colors">Installation de climatisation</Link></li>
              <li><Link href="/pompes-a-chaleur" className="text-gray-400 hover:text-secondary transition-colors">Pompes à chaleur</Link></li>
              <li><Link href="/entretien-climatisation" className="text-gray-400 hover:text-secondary transition-colors">Entretien & Maintenance</Link></li>
              <li><Link href="/depannage-climatisation" className="text-gray-400 hover:text-secondary transition-colors">Dépannage d'urgence</Link></li>
              <li><Link href="/climatisation-entreprises" className="text-gray-400 hover:text-secondary transition-colors">Solutions B2B</Link></li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Zones d'intervention</h3>
            <ul className="space-y-3">
              <li><Link href="/climatisation-paris" className="text-gray-400 hover:text-secondary transition-colors">Paris (75)</Link></li>
              <li><Link href="/climatisation-hauts-de-seine" className="text-gray-400 hover:text-secondary transition-colors">Hauts-de-Seine (92)</Link></li>
              <li><Link href="/climatisation-seine-saint-denis" className="text-gray-400 hover:text-secondary transition-colors">Seine-Saint-Denis (93)</Link></li>
              <li><Link href="/climatisation-val-de-marne" className="text-gray-400 hover:text-secondary transition-colors">Val-de-Marne (94)</Link></li>
              <li><Link href="/zones-intervention" className="text-secondary font-medium hover:text-white transition-colors">Voir les 8 départements →</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+33100000000" className="hover:text-secondary transition-colors block font-medium text-white">01 00 00 00 00</a>
                  <span className="text-sm">Appel non surtaxé</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:contact@pointclim.fr" className="hover:text-secondary transition-colors">contact@pointclim.fr</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span>Intervention 7j/7 en cas d'urgence</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} POINT CLIM — Tous droits réservés
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/mentions-legales" className="text-gray-500 hover:text-white transition-colors">Mentions légales</Link>
            <span className="text-gray-700">|</span>
            <Link href="/politique-confidentialite" className="text-gray-500 hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
