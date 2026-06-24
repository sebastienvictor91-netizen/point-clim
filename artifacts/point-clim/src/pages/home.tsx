import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";
import { WeatherSection } from "@/components/weather-section";
import { Simulator } from "@/components/simulator";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Clock, Award, CheckCircle2, ChevronRight, Phone, MessageCircle, Star } from "lucide-react";
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

const TESTIMONIALS = [
  {
    name: "Laurent M.",
    role: "Particulier",
    location: "Paris 15e",
    text: "Équipe très professionnelle. L'installation de ma climatisation réversible s'est parfaitement déroulée. Chantier propre, explications claires et tarif transparent. Je recommande sans hésiter."
  },
  {
    name: "Karim B.",
    role: "Gérant de restaurant",
    location: "Hauts-de-Seine",
    text: "Intervention en urgence pour une panne de climatisation en plein été. Le technicien est arrivé rapidement et a tout remis en ordre en deux heures. Professionnalisme exemplaire."
  },
  {
    name: "Isabelle C.",
    role: "Pharmacienne",
    location: "Essonne",
    text: "Nous avons fait appel à POINT CLIM pour l'installation de notre système de climatisation. Le résultat est impeccable, discret et silencieux. Notre équipe et nos clients apprécient la différence."
  },
  {
    name: "Marc T.",
    role: "Syndic de copropriété",
    location: "Yvelines",
    text: "Nous avons confié la maintenance de nos installations à POINT CLIM. Un contrat clair, un suivi rigoureux et des techniciens toujours disponibles. La qualité de service est au rendez-vous."
  },
  {
    name: "Nathalie R.",
    role: "Directrice de bureau",
    location: "Seine-Saint-Denis",
    text: "POINT CLIM a installé un système de climatisation dans nos locaux. Travaux réalisés un week-end pour ne pas perturber notre activité. Résultat parfait, équipe à l'écoute."
  }
];

export default function Home() {
  return (
    <Layout>
      <SEO
        title="POINT CLIM | Expert Climatisation & Pompe à Chaleur Île-de-France"
        description="Installation, entretien et dépannage de climatisation et pompes à chaleur en Île-de-France. Devis gratuit, intervention rapide, particuliers et professionnels."
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Installation climatisation en Île-de-France"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/30 backdrop-blur-sm border border-primary/40 text-white text-sm font-semibold mb-6">
                Intervention dans toute l'Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)
              </div>

              <div className="inline-block px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-4">
                40°C dehors. 24°C chez vous.
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Installation, entretien et dépannage de climatisation et pompes à chaleur en Île-de-France
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Intervention rapide auprès des particuliers, commerces, bureaux, restaurants, copropriétés et entreprises. Devis gratuit et sans engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="h-14 px-8 text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg"
                  onClick={() => document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="button-hero-devis"
                >
                  Obtenir mon devis aujourd'hui
                </Button>
                <Button
                  size="lg"
                  className="h-14 px-8 text-base font-bold rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg"
                  asChild
                >
                  <a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer" data-testid="button-hero-whatsapp">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base font-bold rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
                  asChild
                >
                  <a href="tel:+33100000000" data-testid="button-hero-call">
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
          {[
            { icon: Clock, title: "Intervention rapide", sub: "Dépannage 7j/7" },
            { icon: Shield, title: "Devis gratuit", sub: "Transparent et détaillé" },
            { icon: Award, title: "Certifié RGE", sub: "QualiPAC & QualiClima" },
            { icon: CheckCircle2, title: "Garantie", sub: "Pièces et main d'œuvre" },
          ].map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{title}</h4>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WEATHER SECTION */}
      <WeatherSection />

      {/* SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nos Services d'Expertise</h2>
            <p className="text-gray-600 text-lg">
              Des solutions complètes pour répondre à tous vos besoins en génie climatique, de l'installation à la maintenance.
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

      {/* SIMULATOR */}
      <Simulator />

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Technicien POINT CLIM"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Pourquoi choisir POINT CLIM ?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Nous nous engageons à fournir des prestations de haute qualité, dans le respect des normes en vigueur et des délais annoncés.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Expertise certifiée",
                    desc: "Nos techniciens sont qualifiés et régulièrement formés aux dernières technologies de climatisation et de pompes à chaleur."
                  },
                  {
                    icon: Clock,
                    title: "Réactivité absolue",
                    desc: "Intervention rapide en cas de panne. Devis envoyé le jour même lorsque le dossier est complet."
                  },
                  {
                    icon: CheckCircle2,
                    title: "Travail soigné",
                    desc: "Finitions impeccables et nettoyage complet du chantier après chaque intervention. Chez vous comme chez nous."
                  },
                  {
                    icon: Award,
                    title: "Particuliers et professionnels",
                    desc: "Maisons, appartements, restaurants, pharmacies, bureaux, entrepôts : nous maîtrisons tous les environnements."
                  }
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex-shrink-0 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">{title}</h4>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
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
              Suivez nos équipes sur le terrain et découvrez la qualité de nos installations de climatisation et pompes à chaleur.
            </p>
          </div>
          <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Installation climatisation POINT CLIM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* AREAS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nos Zones d'Intervention</h2>
            <p className="text-gray-600 text-lg">
              Toute l'Île-de-France couverte pour un service de proximité dans votre département.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DEPARTMENTS.map((dept) => (
              <Link
                key={dept.num}
                href={dept.path}
                className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:bg-primary/5 hover:border-primary/20 transition-all text-center group"
                data-testid={`link-dept-${dept.num}`}
              >
                <div className="text-3xl font-bold text-primary mb-2 opacity-40 group-hover:opacity-100 transition-opacity">{dept.num}</div>
                <div className="font-semibold text-foreground text-sm">{dept.name}</div>
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
              La satisfaction de nos clients est notre meilleure référence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic flex-1">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.role} — {review.location}</div>
                  </div>
                </div>
              </motion.div>
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
              {[
                {
                  q: "Quels sont vos délais d'intervention ?",
                  a: "Pour une panne ou une urgence, nous intervenons dans les 24h à 48h selon la nature du problème. Pour une installation neuve, un devis est établi rapidement après échange téléphonique ou visite, et les travaux sont planifiés selon vos disponibilités."
                },
                {
                  q: "Vos devis sont-ils gratuits ?",
                  a: "Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous par téléphone, WhatsApp ou via notre formulaire, et nous vous répondons rapidement."
                },
                {
                  q: "Intervenez-vous pour les entreprises et les commerces ?",
                  a: "Oui. Nous travaillons aussi bien pour les particuliers que pour les professionnels : restaurants, pharmacies, cabinets médicaux, bureaux, entrepôts, hôtels, copropriétés. Nous avons l'habitude des contraintes spécifiques aux locaux professionnels."
                },
                {
                  q: "Travaillez-vous avec des marques spécifiques ?",
                  a: "En tant qu'experts indépendants, nous travaillons avec les grandes marques du marché (Daikin, Mitsubishi Electric, Toshiba, Panasonic, Atlantic…) pour vous garantir un matériel fiable adapté à votre budget."
                },
                {
                  q: "Quelles garanties offrez-vous ?",
                  a: "Vous bénéficiez de la garantie constructeur sur le matériel ainsi que d'une garantie sur notre main d'œuvre. Nous vous communiquons les détails précis lors de l'établissement de votre devis."
                },
                {
                  q: "Pouvez-vous m'aider à obtenir des aides de l'État ?",
                  a: "Nous vous informons sur les aides disponibles (MaPrimeRénov', CEE, TVA réduite...) applicables à votre projet. Consultez-nous pour connaître votre situation précise."
                },
                {
                  q: "Dans quels départements intervenez-vous ?",
                  a: "Nous intervenons dans toute l'Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95)."
                },
                {
                  q: "Comment se déroule une installation de climatisation ?",
                  a: "Après un échange pour comprendre votre besoin et définir la solution adaptée, nos techniciens interviennent pour l'installation. Les travaux comprennent la pose des unités intérieure et extérieure, le passage de liaisons frigorifiques et les raccordements électriques. Nous veillons à laisser votre espace propre à la fin du chantier."
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Prêt à améliorer votre confort ?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Demandez votre devis gratuit aujourd'hui. Nos experts vous répondent rapidement.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="h-14 px-8 text-base font-bold rounded-xl bg-white text-primary hover:bg-gray-100 shadow-xl"
              onClick={() => document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-finalcta-devis"
            >
              Demander mon devis en ligne
            </Button>
            <Button
              size="lg"
              className="h-14 px-8 text-base font-bold rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl"
              asChild
            >
              <a href="https://wa.me/33100000000" target="_blank" rel="noopener noreferrer" data-testid="button-finalcta-whatsapp">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base font-bold rounded-xl bg-white/10 hover:bg-white/20 text-white border-white/30"
              asChild
            >
              <a href="tel:+33100000000" data-testid="button-finalcta-call">
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
