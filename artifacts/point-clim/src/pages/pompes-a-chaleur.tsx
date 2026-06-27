import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle2, Flame, Droplets, Wind, ShieldCheck, Zap } from "lucide-react";

const PHONE_DISPLAY = "01 75 29 52 34";
const PHONE_LINK = "+33175295234";
const WHATSAPP_URL =
  "https://wa.me/33623558263?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20une%20pompe%20à%20chaleur.";

export default function PompesAChaleurPage() {
  return (
    <Layout>
      <SEO
        title="Pompes à chaleur air/air & air/eau | POINT CLIM Île-de-France"
        description="Installation, entretien et dépannage de pompes à chaleur air/air et air/eau en Île-de-France. Devis gratuit, intervention rapide, solutions économiques."
      />

      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white">
        <div className="absolute inset-0">
          <img src="/images/hero-point-clim.webp" alt="Pompe à chaleur et confort thermique" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-blue-950/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-black uppercase tracking-widest">
              Pompe à chaleur air/air & air/eau
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Chauffage performant.
              <br />
              <span className="text-primary">Confort toute l’année.</span>
            </h1>

            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-white/75">
              Installation, entretien et dépannage de pompes à chaleur air/air et air/eau en Île-de-France pour maisons, appartements et locaux professionnels.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="h-14 rounded-full px-8 font-black" onClick={() => document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" })}>
                Demander un devis gratuit
              </Button>

              <Button size="lg" className="h-14 rounded-full bg-[#25D366] px-8 font-black text-white hover:bg-[#20bd5a]" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>

              <Button size="lg" variant="outline" className="h-14 rounded-full border-white/25 bg-white/10 px-8 font-black text-white hover:bg-white/20" asChild>
                <a href={`tel:${PHONE_LINK}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-primary">Deux solutions</p>
            <h2 className="text-4xl font-black text-slate-950 md:text-5xl">
              Air/air ou air/eau : on vous oriente vers le bon système.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-100 bg-blue-50 p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
                <Wind className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-3xl font-black text-slate-950">PAC air/air</h3>
              <p className="mb-6 text-slate-600">
                Aussi appelée climatisation réversible. Elle chauffe en hiver et rafraîchit en été avec des unités intérieures murales, consoles ou gainables.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-600">
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Chauffage + climatisation</li>
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Idéal maisons, appartements, bureaux</li>
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Installation rapide et discrète</li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-3xl font-black text-slate-950">PAC air/eau</h3>
              <p className="mb-6 text-slate-600">
                Solution de chauffage central qui alimente radiateurs, plancher chauffant et parfois l’eau chaude sanitaire selon l’installation.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-600">
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Remplacement chaudière possible</li>
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Chauffage économique</li>
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Étude technique nécessaire</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Flame, title: "Chauffage performant", text: "Confort stable en hiver." },
              { icon: Zap, title: "Économies d’énergie", text: "Solution basse consommation." },
              { icon: ShieldCheck, title: "Pose soignée", text: "Installation propre et durable." },
              { icon: CheckCircle2, title: "Devis gratuit", text: "Conseil adapté à votre logement." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
                <Icon className="mb-5 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-black text-slate-950">{title}</h3>
                <p className="text-sm text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="devis" className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-primary">Devis gratuit</p>
            <h2 className="text-4xl font-black text-slate-950">Votre projet pompe à chaleur</h2>
          </div>
          <QuoteForm />
        </div>
      </section>
    </Layout>
  );
}
