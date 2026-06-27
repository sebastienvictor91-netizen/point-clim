import { Link } from "wouter";
import { Snowflake, Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";

const PHONE_DISPLAY = "01 75 29 52 34";
const PHONE_LINK = "+33175295234";
const WHATSAPP_URL =
  "https://wa.me/33623558263?text=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20pour%20une%20climatisation.";
const EMAIL = "contact@pointclim.fr";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight">
                <span className="text-white">POINT</span>{" "}
                <span className="text-primary">CLIM</span>
              </span>
            </Link>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Installation, entretien et dépannage de climatisation et pompes à chaleur en Île-de-France.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold px-3 py-2 bg-white/10 rounded-full border border-white/10">
                Climatisation
              </span>
              <span className="text-xs font-bold px-3 py-2 bg-white/10 rounded-full border border-white/10">
                Pompe à chaleur
              </span>
              <span className="text-xs font-bold px-3 py-2 bg-white/10 rounded-full border border-white/10">
                Dépannage
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">
              Nos services
            </h3>
            <ul className="space-y-3">
              <li><Link href="/installation-climatisation" className="text-slate-400 hover:text-primary transition-colors">Installation climatisation</Link></li>
              <li><Link href="/climatisation-reversible" className="text-slate-400 hover:text-primary transition-colors">Climatisation réversible</Link></li>
              <li><Link href="/pompes-a-chaleur" className="text-slate-400 hover:text-primary transition-colors">Pompes à chaleur</Link></li>
              <li><Link href="/entretien-climatisation" className="text-slate-400 hover:text-primary transition-colors">Entretien climatisation</Link></li>
              <li><Link href="/depannage-climatisation" className="text-slate-400 hover:text-primary transition-colors">Dépannage urgent</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">
              Zones d’intervention
            </h3>
            <ul className="space-y-3">
              <li><Link href="/climatisation-paris" className="text-slate-400 hover:text-primary transition-colors">Paris (75)</Link></li>
              <li><Link href="/climatisation-hauts-de-seine" className="text-slate-400 hover:text-primary transition-colors">Hauts-de-Seine (92)</Link></li>
              <li><Link href="/climatisation-seine-saint-denis" className="text-slate-400 hover:text-primary transition-colors">Seine-Saint-Denis (93)</Link></li>
              <li><Link href="/climatisation-val-de-marne" className="text-slate-400 hover:text-primary transition-colors">Val-de-Marne (94)</Link></li>
              <li><Link href="/zones-intervention" className="text-primary font-bold hover:text-white transition-colors">Voir les 8 départements →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">
              Contact
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <a href={`tel:${PHONE_LINK}`} className="block font-black text-white hover:text-primary transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                  <span className="text-sm">Appel direct</span>
                </div>
              </li>

              <li className="flex items-start gap-3 text-slate-400">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-1" />
                <div>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block font-black text-white hover:text-[#25D366] transition-colors">
                    WhatsApp
                  </a>
                  <span className="text-sm">Devis instantané</span>
                </div>
              </li>

              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                  {EMAIL}
                </a>
              </li>

              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Intervention 7j/7 en cas d’urgence</span>
              </li>

              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Île-de-France : 75, 77, 78, 91, 92, 93, 94, 95</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} POINT CLIM — Tous droits réservés
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/mentions-legales" className="text-slate-500 hover:text-white transition-colors">
              Mentions légales
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/politique-confidentialite" className="text-slate-500 hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
