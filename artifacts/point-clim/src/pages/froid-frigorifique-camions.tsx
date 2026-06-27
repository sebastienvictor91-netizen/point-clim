import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";
import { CheckCircle2, Truck, Snowflake, Wrench, ShieldCheck } from "lucide-react";

export default function FroidFrigorifiqueCamionsPage() {
  return (
    <Layout>
      <SEO
        title="Froid frigorifique camions | POINT CLIM Île-de-France"
        description="Installation, entretien et dépannage de groupes frigorifiques pour camions, utilitaires et véhicules frigorifiques en Île-de-France."
      />

      <section className="relative overflow-hidden bg-slate-950 py-32 text-white">
        <img
          src="/images/camion-frigorifique.webp"
          alt="Froid frigorifique camions"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-black uppercase tracking-widest">
              Camions • Utilitaires • Remorques
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Froid frigorifique pour véhicules professionnels.
            </h1>

            <p className="text-lg leading-relaxed text-white/80 md:text-xl">
              Installation, entretien et dépannage de groupes frigorifiques pour camions, véhicules utilitaires, remorques et transport sous température dirigée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Truck, title: "Véhicules frigorifiques", text: "Camions, utilitaires et remorques." },
              { icon: Snowflake, title: "Froid performant", text: "Contrôle et maintien de température." },
              { icon: Wrench, title: "Dépannage rapide", text: "Diagnostic et remise en service." },
              { icon: ShieldCheck, title: "Entretien régulier", text: "Prévention des pannes et suivi." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                <Icon className="mb-5 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-black text-slate-950">{title}</h3>
                <p className="text-sm text-slate-500">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-widest text-primary">
                Nos prestations
              </p>
              <h2 className="mb-6 text-4xl font-black text-slate-950">
                Intervention sur groupes frigorifiques.
              </h2>

              <ul className="space-y-4 text-slate-700">
                {[
                  "Installation de groupes frigorifiques",
                  "Entretien préventif et contrôle complet",
                  "Dépannage et diagnostic panne",
                  "Recherche de fuite et contrôle étanchéité",
                  "Contrôle température et performances",
                  "Intervention en Île-de-France",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="devis" className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
