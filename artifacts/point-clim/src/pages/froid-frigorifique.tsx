import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";

export default function FroidFrigorifiquePage() {
  return (
    <Layout>
      <SEO
        title="Froid frigorifique | POINT CLIM"
        description="Installation, entretien et dépannage de groupes frigorifiques pour véhicules utilitaires, camions et remorques frigorifiques."
      />

      <section className="relative py-28 text-white">
        <img
          src="/images/froid-frigorifique.webp"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Froid frigorifique"
        />
        <div className="absolute inset-0 bg-slate-950/65"></div>

        <div className="container relative mx-auto px-6">
          <h1 className="text-5xl font-black">
            Froid frigorifique
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-white/90">
            Installation, entretien et dépannage de groupes frigorifiques
            pour camions, véhicules utilitaires, remorques et véhicules de transport alimentaire.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border p-8">
              <h2 className="mb-4 text-2xl font-black">Nos prestations</h2>
              <ul className="space-y-3">
                <li>✓ Installation de groupes frigorifiques</li>
                <li>✓ Entretien préventif</li>
                <li>✓ Dépannage rapide</li>
                <li>✓ Recherche de fuite</li>
                <li>✓ Recharge fluide frigorigène</li>
                <li>✓ Contrôle des performances</li>
              </ul>
            </div>

            <div className="rounded-3xl border p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
