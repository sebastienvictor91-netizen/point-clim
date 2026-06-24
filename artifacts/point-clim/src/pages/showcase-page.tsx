import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const REALISATIONS = [
  {
    id: 1,
    title: "Climatisation réversible en appartement",
    location: "Paris 15ème (75)",
    type: "Particulier",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Installation d'un système multi-split Daikin pour 3 pièces. Intégration discrète des unités murales et passage des liaisons en faux-plafond."
  },
  {
    id: 2,
    title: "PAC Air/Eau en remplacement de chaudière",
    location: "Versailles (78)",
    type: "Particulier",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Dépose d'une ancienne chaudière fioul et installation d'une pompe à chaleur air/eau haute température pour production de chauffage et ECS."
  },
  {
    id: 3,
    title: "Climatisation pour espace de bureaux",
    location: "La Défense (92)",
    type: "Professionnel",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Équipement d'un open-space de 200m² avec système VRV. Installation de cassettes encastrées en plafond technique."
  },
  {
    id: 4,
    title: "Climatisation de salle de restaurant",
    location: "Boulogne-Billancourt (92)",
    type: "Professionnel",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Installation d'unités gainables invisibles pour préserver l'esthétique de la salle tout en assurant un confort optimal aux clients."
  },
  {
    id: 5,
    title: "Pompe à chaleur pour pavillon neuf",
    location: "Massy (91)",
    type: "Particulier",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Mise en œuvre d'une PAC raccordée à un plancher chauffant sur 120m² pour un confort thermique parfait et de grandes économies d'énergie."
  },
  {
    id: 6,
    title: "Climatisation de salle serveur",
    location: "Créteil (94)",
    type: "Professionnel",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Solution de rafraîchissement technique avec redondance pour assurer une température constante indispensable aux équipements informatiques."
  }
];

export default function ShowcasePage() {
  return (
    <Layout>
      <SEO 
        title="Nos Réalisations Climatisation et PAC | POINT CLIM" 
        description="Découvrez en images nos dernières installations de pompes à chaleur et climatisations chez des particuliers et professionnels en Île-de-France." 
      />

      <section className="bg-foreground text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Un aperçu de notre savoir-faire au travers de chantiers récents réalisés pour nos clients franciliens.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REALISATIONS.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-foreground">
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{item.location}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.desc}</p>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 mr-1.5" /> Chantier réceptionné
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-white p-10 rounded-3xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-4">Vous avez un projet similaire ?</h2>
            <p className="text-gray-600 mb-8 text-lg">Nos techniciens se déplacent chez vous pour étudier la faisabilité et vous proposer la meilleure solution technique.</p>
            <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold" asChild>
              <Link href="/contact">Demander une étude gratuite</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
