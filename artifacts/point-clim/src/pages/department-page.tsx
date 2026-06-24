import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";
import { MapPin, Shield, Clock, ThumbsUp } from "lucide-react";
import { DEPARTMENTS } from "@/data/content";
import { Link } from "wouter";

interface DepartmentPageProps {
  num: string;
  name: string;
}

export default function DepartmentPage({ num, name }: DepartmentPageProps) {
  return (
    <Layout>
      <SEO 
        title={`Climatisation ${name} (${num}) | Installation & Entretien - POINT CLIM`} 
        description={`Expert en climatisation et pompes à chaleur dans le ${num} (${name}). Installation, dépannage, entretien. Devis gratuit et intervention rapide.`} 
      />

      <section className="bg-foreground text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 text-secondary mb-4">
            <MapPin className="w-6 h-6" />
            <span className="font-semibold tracking-wide uppercase">Intervention locale</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Votre expert climatisation en <span className="text-primary">{name} ({num})</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            POINT CLIM intervient rapidement partout dans le département {num} pour l'installation, l'entretien et le dépannage de vos pompes à chaleur et climatisations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <Clock className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Intervention Rapide</h3>
                <p className="text-gray-600 text-sm">Nos équipes basées près du {num} garantissent des délais d'intervention réduits.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <Shield className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Artisan RGE</h3>
                <p className="text-gray-600 text-sm">Profitez des aides de l'État pour vos travaux de rénovation énergétique dans le {num}.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <ThumbsUp className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Devis Gratuit</h3>
                <p className="text-gray-600 text-sm">Étude thermique sans engagement directement à votre domicile en {name}.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-6">Nos services en {name}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Que vous soyez un particulier ou un professionnel situé en {name}, nous vous proposons une gamme complète de services adaptés à vos besoins :
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <Link href="/installation-climatisation" className="text-lg font-medium hover:text-primary transition-colors">Installation de climatisation réversible</Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <Link href="/pompes-a-chaleur" className="text-lg font-medium hover:text-primary transition-colors">Pose de pompes à chaleur (PAC air-air, PAC air-eau)</Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <Link href="/entretien-climatisation" className="text-lg font-medium hover:text-primary transition-colors">Entretien et maintenance préventive</Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <Link href="/depannage-climatisation" className="text-lg font-medium hover:text-primary transition-colors">Dépannage d'urgence 7j/7</Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <Link href="/climatisation-entreprises" className="text-lg font-medium hover:text-primary transition-colors">Solutions pour les entreprises et commerces</Link>
                </li>
              </ul>
              
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="font-semibold text-xl mb-3 text-foreground">Besoin d'un installateur certifié dans le {num} ?</h3>
                <p className="text-gray-600 mb-0">Ne laissez pas la chaleur estivale ou le froid hivernal gâcher votre confort. Nos techniciens qualifiés sont prêts à intervenir chez vous.</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">Nous intervenons dans toute l'Île-de-France</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {DEPARTMENTS.map((dept) => (
              <Link 
                key={dept.num} 
                href={dept.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${dept.num === num ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
              >
                {dept.name} ({dept.num})
              </Link>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
