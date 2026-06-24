import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Clock, Award, CheckCircle2, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { SERVICES, DEPARTMENTS } from "@/data/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="POINT CLIM | Expert Climatisation & Pompe à Chaleur Île-de-France" 
        description="Installation, entretien et dépannage de climatisation et pompes à chaleur en Île-de-France. Devis gratuit, intervention rapide. Certifié RGE QualiPAC." 
      />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Installation climatisation" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground text-sm font-semibold mb-6">
                Intervention dans toute l'Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Climatisation & Pompes à Chaleur en Île-de-France
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Expert reconnu pour l'installation, l'entretien et le dépannage de vos systèmes thermiques. Particuliers et professionnels, bénéficiez d'un confort optimal toute l'année avec POINT CLIM.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg" onClick={() => document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' })}>
                  Demander un devis gratuit
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm" asChild>
                  <a href="tel:+33100000000">
                    <Phone className="w-5 h-5 mr-2" />
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-8 relative z-20 -mt-10 mx-4 md:mx-auto container rounded-2xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Intervention rapide</h4>
              <p className="text-xs text-gray-500">Dépannage 7j/7</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Devis gratuit</h4>
              <p className="text-xs text-gray-500">Transparent & détaillé</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Certifié RGE</h4>
              <p className="text-xs text-gray-500">QualiPAC & QualiClima</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Garantie</h4>
              <p className="text-xs text-gray-500">Pièces et main d'œuvre</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nos Services d'Expertise</h2>
            <p className="text-gray-600 text-lg">
              Des solutions complètes pour répondre à tous vos besoins en génie climatique, de l'étude à la maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <motion.div 
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-1">{service.description}</p>
                  <Link href={service.path} className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors mt-auto">
                    En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Équipe technique" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Pourquoi choisir POINT CLIM ?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Forts de notre expérience, nous nous engageons à vous fournir des prestations de haute qualité, dans le respect des normes en vigueur.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex-shrink-0 flex items-center justify-center text-secondary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Expertise certifiée</h4>
                    <p className="text-gray-600">Nos techniciens sont qualifiés et régulièrement formés aux dernières technologies.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex-shrink-0 flex items-center justify-center text-secondary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Réactivité absolue</h4>
                    <p className="text-gray-600">Intervention rapide en cas de panne, devis envoyé sous 24h ouvrées.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex-shrink-0 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Travail soigné</h4>
                    <p className="text-gray-600">Finitions impeccables et nettoyage complet du chantier après chaque intervention.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM SECTION */}
      <section id="devis" className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Découvrez notre savoir-faire</h2>
            <p className="text-gray-300 text-lg">
              Suivez nos équipes sur le terrain et découvrez la qualité de nos installations.
            </p>
          </div>
          <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </section>

      {/* AREAS MAP SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nos Zones d'Intervention en Île-de-France</h2>
            <p className="text-gray-600 text-lg">
              Nous couvrons l'ensemble des départements franciliens pour vous assurer un service de proximité.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DEPARTMENTS.map((dept) => (
              <Link 
                key={dept.num} 
                href={dept.path}
                className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-primary/5 hover:border-primary/20 transition-all text-center group"
              >
                <div className="text-3xl font-bold text-primary mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{dept.num}</div>
                <div className="font-semibold text-foreground">{dept.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Avis de nos clients</h2>
            <p className="text-gray-600 text-lg">
              La satisfaction de nos clients est notre meilleure publicité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Laurent M.",
                role: "Particulier - Paris 15",
                text: "Équipe très professionnelle. L'installation de ma climatisation réversible s'est parfaitement déroulée. Chantier propre et explications claires."
              },
              {
                name: "Sophie D.",
                role: "Gérante de restaurant - Hauts-de-Seine",
                text: "Intervention en urgence un dimanche pour une panne de chambre froide. Le technicien a été très réactif et a sauvé notre marchandise. Merci !"
              },
              {
                name: "Marc T.",
                role: "Syndic de copropriété - Yvelines",
                text: "Nous avons confié l'entretien de nos installations à Point Clim. Un contrat de maintenance clair et un suivi rigoureux. Je recommande."
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Questions Fréquentes</h2>
            <p className="text-gray-600 text-lg">
              Tout ce que vous devez savoir avant de faire appel à nos services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-lg">Quels sont vos délais d'intervention ?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Pour une panne ou une urgence, nous intervenons dans les 24h à 48h selon la nature du problème. Pour une installation neuve, un devis est établi sous 48h ouvrées après visite, et l'installation est planifiée selon vos disponibilités.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-lg">Vos devis sont-ils gratuits ?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Oui, tous nos devis d'installation et de remplacement sont 100% gratuits et sans engagement. Un technicien se déplace pour évaluer vos besoins et réaliser une étude thermique préalable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-lg">Travaillez-vous avec des marques spécifiques ?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  En tant qu'experts indépendants, nous travaillons avec les plus grandes marques du marché (Daikin, Mitsubishi, Toshiba, Panasonic...) pour vous garantir un matériel fiable et performant, adapté à votre budget.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold text-lg">Quelles sont les garanties sur vos installations ?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Vous bénéficiez de la garantie constructeur sur le matériel (généralement 3 à 5 ans pour les pièces, compresseur) ainsi que d'une garantie décennale sur notre main d'œuvre pour les installations neuves.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-semibold text-lg">Aidez-vous pour les aides de l'État ?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Oui, en tant qu'entreprise certifiée RGE (Reconnu Garant de l'Environnement), nous vous accompagnons dans le montage de vos dossiers de demandes d'aides (MaPrimeRénov', CEE, etc.) pour vos travaux de rénovation énergétique.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Prêt à améliorer votre confort ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Demandez votre devis gratuit dès aujourd'hui. Nos experts vous répondent rapidement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base font-bold rounded-xl bg-white text-primary hover:bg-gray-100 shadow-xl" onClick={() => document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' })}>
              Demander mon devis en ligne
            </Button>
            <Button size="lg" className="h-14 px-8 text-base font-bold rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl" asChild>
              <a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
}
