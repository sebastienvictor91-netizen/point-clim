import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";
import { MapPin } from "lucide-react";
import { Link } from "wouter";

interface CityPageProps {
  name: string;
}

export default function CityPage({ name }: CityPageProps) {
  // Format city name for title case (e.g., "boulogne-billancourt" -> "Boulogne-Billancourt")
  const formattedName = name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');

  return (
    <Layout>
      <SEO 
        title={`Climatisation ${formattedName} | Installation & Dépannage - POINT CLIM`} 
        description={`Votre installateur de climatisation et pompe à chaleur à ${formattedName}. Intervention rapide, devis gratuit, entreprise certifiée RGE.`} 
      />

      <section className="bg-foreground text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 text-secondary mb-4">
            <MapPin className="w-6 h-6" />
            <span className="font-semibold tracking-wide uppercase">Votre ville</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Installation et Dépannage Climatisation à <span className="text-primary">{formattedName}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            POINT CLIM met son expertise à votre service pour tous vos projets de confort thermique à {formattedName} et ses environs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-6">Faites appel à un professionnel de confiance à {formattedName}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vous résidez à {formattedName} et souhaitez installer un système de climatisation réversible ou une pompe à chaleur ? Ou peut-être avez-vous besoin d'un dépannage urgent sur votre installation existante ?
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe technique dédiée intervient rapidement sur votre commune pour vous garantir un service de proximité, efficace et au meilleur prix.
              </p>
              
              <div className="space-y-4 mb-8">
                <Link href="/installation-climatisation" className="block p-4 border border-gray-100 rounded-lg hover:border-primary transition-colors">
                  <h4 className="font-semibold text-lg text-primary mb-1">Installation</h4>
                  <p className="text-gray-600 text-sm">Pose de matériels performants et durables.</p>
                </Link>
                <Link href="/depannage-climatisation" className="block p-4 border border-gray-100 rounded-lg hover:border-primary transition-colors">
                  <h4 className="font-semibold text-lg text-primary mb-1">Dépannage Urgence</h4>
                  <p className="text-gray-600 text-sm">Intervention rapide à {formattedName}.</p>
                </Link>
                <Link href="/entretien-climatisation" className="block p-4 border border-gray-100 rounded-lg hover:border-primary transition-colors">
                  <h4 className="font-semibold text-lg text-primary mb-1">Entretien</h4>
                  <p className="text-gray-600 text-sm">Maintenance préventive pour pérenniser votre système.</p>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
               <div className="sticky top-28">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
