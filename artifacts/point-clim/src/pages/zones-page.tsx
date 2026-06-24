import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { DEPARTMENTS, CITIES } from "@/data/content";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";

export default function ZonesPage() {
  return (
    <Layout>
      <SEO 
        title="Zones d'intervention Climatisation & PAC en Île-de-France | POINT CLIM" 
        description="POINT CLIM intervient dans tous les départements d'Île-de-France (75, 77, 78, 91, 92, 93, 94, 95) pour l'installation et le dépannage de votre climatisation." 
      />

      <section className="bg-foreground text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Nos Zones d'Intervention en Île-de-France
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Basés stratégiquement en région parisienne, nous déployons nos techniciens qualifiés dans tous les départements pour vous garantir une réactivité optimale.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-10 text-center">Découvrez nos services près de chez vous</h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              {DEPARTMENTS.map((dept) => (
                <Link 
                  key={dept.num} 
                  href={dept.path}
                  className="flex items-center justify-between p-6 rounded-xl border border-gray-100 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors">
                      {dept.num}
                    </div>
                    <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {dept.name}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-heading font-bold mb-8 text-center">Villes principales d'intervention</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {CITIES.map((city, idx) => (
                 <Link 
                  key={idx} 
                  href={city.path}
                  className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors font-medium flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  {city.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-16 bg-gray-50 p-8 md:p-12 rounded-2xl">
               <h2 className="text-2xl font-heading font-bold mb-6 text-center">Demandez votre devis pour une intervention</h2>
               <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
