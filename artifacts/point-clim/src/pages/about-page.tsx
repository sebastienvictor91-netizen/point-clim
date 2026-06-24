import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { Award, Target, Users, ThumbsUp } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <SEO 
        title="Qui sommes-nous ? L'expert Climatisation & PAC | POINT CLIM" 
        description="Découvrez POINT CLIM, votre partenaire de confiance en Île-de-France pour l'installation et l'entretien de systèmes de climatisation et pompes à chaleur." 
      />

      <section className="bg-foreground text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Qui sommes-nous ?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            L'excellence thermique au service de votre confort en Île-de-France.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez POINT CLIM, nous avons une conviction simple : le confort thermique ne doit pas être un luxe, mais une évidence accessible et respectueuse de l'environnement.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Spécialistes de la climatisation réversible et des pompes à chaleur, nous accompagnons les particuliers et les professionnels d'Île-de-France dans leur transition énergétique. Notre objectif est de vous fournir des installations performantes, durables, qui réduisent vos factures d'énergie tout en optimisant votre confort.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Technicien POINT CLIM en intervention" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Nos Engagements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">La qualité de service n'est pas qu'une promesse, c'est notre méthode de travail au quotidien.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Qualité Certifiée</h3>
              <p className="text-gray-600 text-sm">Artisans RGE, nous travaillons dans le strict respect des normes en vigueur et des DTU.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conseil Objectif</h3>
              <p className="text-gray-600 text-sm">Nous dimensionnons précisément vos besoins pour vous proposer la solution technique la plus adaptée.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proximité</h3>
              <p className="text-gray-600 text-sm">Notre maillage sur toute l'Île-de-France nous permet une grande réactivité pour vos dépannages.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ThumbsUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Satisfaction</h3>
              <p className="text-gray-600 text-sm">Un chantier propre, des explications claires et un SAV présent et à l'écoute de nos clients.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
