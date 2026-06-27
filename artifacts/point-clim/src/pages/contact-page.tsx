import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PHONE_DISPLAY = "01 75 29 52 34";
const PHONE_LINK = "+33175295234";
const WHATSAPP_URL =
  "https://wa.me/33623558263?text=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20pour%20une%20climatisation.";
const EMAIL = "contact@pointclim.fr";

export default function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact POINT CLIM | Devis Climatisation & Pompe à Chaleur"
        description="Contactez POINT CLIM pour un devis gratuit, une installation, un entretien ou un dépannage de climatisation et pompe à chaleur en Île-de-France."
      />

      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-20 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-point-clim.webp"
            alt="Climatisation intérieure moderne"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-blue-950/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-[#25D366]" />
                Disponible maintenant
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Parlez à un expert
                <br />
                <span className="text-primary">POINT CLIM.</span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Devis gratuit, installation, entretien et dépannage de climatisation
                et pompe à chaleur partout en Île-de-France.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button size="lg" className="h-14 rounded-full px-8 text-base font-bold" asChild>
                  <a href={`tel:${PHONE_LINK}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {PHONE_DISPLAY}
                  </a>
                </Button>

                <Button
                  size="lg"
                  className="h-14 rounded-full bg-[#25D366] px-8 text-base font-bold text-white hover:bg-[#20bd5a]"
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="rounded-[24px] bg-white p-6 text-slate-950">
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
                  Contact direct
                </p>

                <h2 className="mb-6 text-2xl font-black">
                  Une réponse rapide pour votre projet.
                </h2>

                <div className="space-y-4">
                  <a
                    href={`tel:${PHONE_LINK}`}
                    className="flex items-center gap-4 rounded-2xl bg-primary p-4 text-white shadow-xl transition hover:scale-[1.01]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary">
                      <Phone className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase text-white/70">
                        Appel direct
                      </span>
                      <span className="block text-xl font-black">{PHONE_DISPLAY}</span>
                    </span>
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 transition hover:scale-[1.01]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
                      <MessageCircle className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase text-emerald-600">
                        WhatsApp
                      </span>
                      <span className="block text-xl font-black text-slate-950">
                        Devis instantané
                      </span>
                    </span>
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5 text-center">
                  <div>
                    <div className="text-lg font-black text-primary">7j/7</div>
                    <div className="text-xs text-slate-400">Urgence</div>
                  </div>
                  <div>
                    <div className="text-lg font-black text-primary">0€</div>
                    <div className="text-xs text-slate-400">Devis</div>
                  </div>
                  <div>
                    <div className="text-lg font-black text-primary">IDF</div>
                    <div className="text-xs text-slate-400">Zone</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Choisissez votre moyen de contact
            </p>
            <h2 className="text-3xl font-black text-slate-950 md:text-5xl">
              Simple, rapide et clair.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <a
              href={`tel:${PHONE_LINK}`}
              className="group rounded-[28px] border border-slate-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-black">Appeler maintenant</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-500">
                Pour une urgence, un prix ou une réponse immédiate.
              </p>
              <span className="text-2xl font-black text-primary">{PHONE_DISPLAY}</span>
              <p className="mt-2 text-xs text-slate-400">Appel non surtaxé</p>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[28px] border border-emerald-100 bg-emerald-50 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] text-white">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-black">Devis immédiat</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-500">
                Envoyez vos photos, votre besoin ou votre adresse.
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-600 shadow-sm">
                Devis instantané <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="group rounded-[28px] border border-slate-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-black">Email</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-500">
                Pour une demande détaillée ou un dossier complet.
              </p>
              <span className="text-lg font-black text-primary">{EMAIL}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                Informations pratiques
              </p>
              <h2 className="mb-8 text-3xl font-black text-slate-950 md:text-4xl">
                Intervention en Île-de-France.
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    title: "Zone d’intervention",
                    text: "Paris, Seine-et-Marne, Yvelines, Essonne, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne et Val-d’Oise.",
                  },
                  {
                    icon: Clock,
                    title: "Horaires",
                    text: "Lundi au vendredi : 8h - 19h. Samedi : 9h - 17h. Urgence selon disponibilité.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Travail soigné",
                    text: "Devis clair, intervention propre, accompagnement sérieux du premier contact à la fin du chantier.",
                  },
                  {
                    icon: Zap,
                    title: "Réactivité",
                    text: "Contact rapide par téléphone ou WhatsApp pour qualifier votre besoin et vous orienter.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-black text-slate-950">{title}</h3>
                      <p className="text-sm leading-relaxed text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-xl md:p-8">
              <div className="mb-7">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                  Devis gratuit
                </p>
                <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
                  Décrivez votre besoin.
                </h2>
                <p className="mt-3 text-slate-500">
                  Installation, entretien, dépannage, pompe à chaleur ou climatisation réversible.
                </p>
              </div>

              <QuoteForm />

              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-blue-50 p-4 text-sm font-semibold text-slate-600">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                Votre demande est envoyée à {EMAIL}. Réponse rapide après réception.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}