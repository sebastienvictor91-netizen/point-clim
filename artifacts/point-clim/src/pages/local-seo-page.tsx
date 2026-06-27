
import { SEO_PAGES } from "@/data/seo-pages";
import { QuoteForm } from "@/components/quote-form";
import { Phone, MapPin, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export function LocalSeoPage({ slug }: { slug: string }) {
  const page = SEO_PAGES.find((p) => p.slug === slug);

  if (!page) {
    return null;
  }

  const { ville, service } = page;

  return (
    <main className="bg-white">
      <section className="bg-slate-950 text-white py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-400 font-bold mb-3">POINT CLIM • Île-de-France</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {service.label} à {ville.name}
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Devis gratuit, intervention rapide et accompagnement professionnel pour vos besoins en climatisation,
              pompe à chaleur, entretien et dépannage à {ville.name} ({ville.dept}).
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#devis" className="rounded-full bg-blue-600 px-8 py-4 font-black text-white">
                Obtenir un devis gratuit
              </a>
              <a href="tel:0175295234" className="rounded-full bg-white/10 px-8 py-4 font-black text-white border border-white/20">
                <Phone className="inline w-5 h-5 mr-2" />
                01 75 29 52 34
              </a>
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Intervention rapide", "Devis gratuit"],
                ["Techniciens qualifiés", "Garantie pièces & main d'œuvre"],
              ].flat().map((item) => (
                <div key={item} className="bg-white rounded-2xl p-5 text-slate-900">
                  <CheckCircle2 className="text-blue-600 mb-3" />
                  <div className="font-bold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-black mb-4">
                Votre spécialiste {service.label.toLowerCase()} à {ville.name}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                POINT CLIM accompagne les particuliers, commerces, bureaux et professionnels à {ville.name}
                pour les projets de climatisation et de pompe à chaleur. Notre objectif : vous proposer une solution
                fiable, adaptée à votre logement ou local, avec un devis clair et une intervention rapide.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-2xl p-5">
                <Clock className="text-blue-600 mb-3" />
                <h3 className="font-black mb-2">Rapide</h3>
                <p className="text-slate-600">Prise de contact rapide après votre demande.</p>
              </div>
              <div className="border rounded-2xl p-5">
                <MapPin className="text-blue-600 mb-3" />
                <h3 className="font-black mb-2">Local</h3>
                <p className="text-slate-600">Intervention à {ville.name} et communes voisines.</p>
              </div>
              <div className="border rounded-2xl p-5">
                <ShieldCheck className="text-blue-600 mb-3" />
                <h3 className="font-black mb-2">Sérieux</h3>
                <p className="text-slate-600">Installation, entretien et dépannage avec suivi professionnel.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-4">Questions fréquentes à {ville.name}</h2>
              <div className="space-y-4">
                <div className="border rounded-2xl p-5">
                  <h3 className="font-bold">Combien coûte une intervention ?</h3>
                  <p className="text-slate-600">Le prix dépend de la configuration, du matériel et de l'accès. Le devis est gratuit.</p>
                </div>
                <div className="border rounded-2xl p-5">
                  <h3 className="font-bold">Intervenez-vous rapidement ?</h3>
                  <p className="text-slate-600">Oui, les demandes urgentes sont traitées en priorité selon disponibilité.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="devis">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
