import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";
import { WeatherSection } from "@/components/weather-section";
import { Simulator } from "@/components/simulator";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Award,
  CheckCircle2,
  ChevronRight,
  Phone,
  MessageCircle,
  Star,
  Zap,
  Leaf,
  Users,
} from "lucide-react";
import { SERVICES, DEPARTMENTS } from "@/data/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE_DISPLAY = "01 75 29 52 34";
const PHONE_LINK = "+33175295234";
const WHATSAPP = "33623558263";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;

const TESTIMONIALS = [
  {
    name: "Laurent M.",
    role: "Particulier",
    location: "Paris 15e",
    text: "Équipe très professionnelle. L'installation de ma climatisation réversible s'est parfaitement déroulée. Chantier propre, explications claires et tarif transparent.",
  },
  {
    name: "Karim B.",
    role: "Gérant de restaurant",
    location: "Hauts-de-Seine",
    text: "Intervention en urgence pour une panne en plein été. Le technicien est arrivé rapidement et tout a été remis en ordre en deux heures. Professionnalisme exemplaire.",
  },
  {
    name: "Isabelle C.",
    role: "Pharmacienne",
    location: "Essonne",
    text: "Système installé discrètement, silencieux et efficace. Notre équipe et nos clients apprécient la différence de confort. Je recommande sans hésitation.",
  },
  {
    name: "Marc T.",
    role: "Syndic de copropriété",
    location: "Yvelines",
    text: "Contrat de maintenance sérieux, techniciens toujours disponibles et réactifs. Un partenaire de confiance pour notre immeuble.",
  },
  {
    name: "Nathalie R.",
    role: "Directrice",
    location: "Seine-Saint-Denis",
    text: "Installation réalisée un week-end pour ne pas perturber notre activité. Résultat parfait, équipe à l'écoute et très propre. Exactement ce qu'on attendait.",
  },
];

const FAQ = [
  {
    q: "Quels sont vos délais d'intervention ?",
    a: "Pour une panne ou une urgence, nous intervenons dans les 24h à 48h. Pour une installation, un devis est établi rapidement et les travaux planifiés selon vos disponibilités.",
  },
  {
    q: "Vos devis sont-ils gratuits ?",
    a: "Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous par téléphone, WhatsApp ou formulaire.",
  },
  {
    q: "Intervenez-vous pour les entreprises et commerces ?",
    a: "Oui — restaurants, pharmacies, cabinets médicaux, bureaux, entrepôts, hôtels, copropriétés. Nous maîtrisons les contraintes spécifiques aux locaux professionnels.",
  },
  {
    q: "Avec quelles marques travaillez-vous ?",
    a: "Nous sommes indépendants et travaillons avec Daikin, Mitsubishi Electric, Toshiba, Panasonic, Atlantic et d'autres grandes marques selon votre budget et vos besoins.",
  },
  {
    q: "Pouvez-vous m'aider à obtenir des aides de l'État ?",
    a: "Nous vous informons sur les aides disponibles applicables à votre situation. Demandez-nous lors de votre devis.",
  },
  {
    q: "Dans quels départements intervenez-vous ?",
    a: "Toute l'Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Val-d'Oise (95).",
  },
  {
    q: "Comment se déroule une installation de climatisation ?",
    a: "Après échange sur votre projet, nos techniciens posent les unités intérieure et extérieure, réalisent les liaisons frigorifiques et les raccordements électriques. Chantier propre garanti.",
  },
  {
    q: "Quelles garanties offrez-vous ?",
    a: "Garantie constructeur sur le matériel et garantie sur notre main d'œuvre. Les détails vous sont communiqués dans votre devis.",
  },
];

export default function Home() {
  return (
    <Layout>
      <SEO
        title="POINT CLIM | Expert Climatisation & Pompe à Chaleur Île-de-France"
        description="Installation, entretien et dépannage de climatisation et pompes à chaleur en Île-de-France. 38°C dehors. 24°C chez vous. Devis gratuit, intervention rapide."
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-point-clim.webp"
            alt="Climatisation murale dans un intérieur moderne"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/45 to-black/10" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <div className="inline-flex flex-col gap-3">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.28em] text-white/85">
                  Installation • Entretien • Dépannage
                </span>

                <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-3 text-xs md:text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-xl border border-blue-300/30">
                  Île-de-France • 75 • 77 • 78 • 91 • 92 • 93 • 94 • 95
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              38°C dehors.
              <br />
              <span className="text-primary">24°C</span> chez vous.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-xl font-light leading-relaxed"
            >
              Votre confort thermique partout en Île-de-France. Installation,
              entretien et dépannage de climatisation et pompes à chaleur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                className="h-14 px-8 rounded-full text-base font-semibold shadow-2xl hover:scale-[1.02] transition-transform"
                onClick={() =>
                  document
                    .getElementById("devis")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-testid="button-hero-devis"
              >
                Obtenir mon devis gratuit
              </Button>

              <Button
                size="lg"
                className="h-14 px-8 rounded-full text-base font-semibold bg-[#25D366] hover:bg-[#22c55e] text-white shadow-2xl hover:scale-[1.02] transition-transform border-0"
                asChild
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-hero-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full text-base font-semibold bg-white/10 hover:bg-white/20 text-white border-white/25 backdrop-blur-sm"
                asChild
              >
                <a href={`tel:${PHONE_LINK}`} data-testid="button-hero-call">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { icon: Clock, label: "Intervention rapide", sub: "Dépannage 7j/7" },
              { icon: Shield, label: "Devis gratuit", sub: "Transparent & sans engagement" },
              { icon: Award, label: "Techniciens qualifiés", sub: "Climatisation & PAC" },
              { icon: CheckCircle2, label: "Garantie", sub: "Pièces & main d'œuvre" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div key={i} className="flex items-center gap-4 py-6 px-6">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WeatherSection />

      {/* SERVICES */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Ce que nous faisons
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Des solutions
              <br />
              pour chaque besoin.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={service.path}
                  className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                  data-testid={`link-service-${service.id}`}
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-primary text-sm font-semibold">
                      Découvrir{" "}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Simulator />

      {/* WHY US */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Notre engagement
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-8">
                Pourquoi POINT CLIM ?
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: Zap,
                    title: "Réactivité",
                    desc: "Intervention rapide en cas de panne. Devis transmis le jour même lorsque le dossier est complet.",
                  },
                  {
                    icon: Users,
                    title: "Particuliers & professionnels",
                    desc: "Maisons, appartements, restaurants, pharmacies, bureaux, entrepôts — nous maîtrisons tous les environnements.",
                  },
                  {
                    icon: Leaf,
                    title: "Solutions durables",
                    desc: "Pompes à chaleur, systèmes réversibles, équipements certifiés. Confort et économies d'énergie sur le long terme.",
                  },
                  {
                    icon: Shield,
                    title: "Travail soigné",
                    desc: "Finitions impeccables, chantier nettoyé, techniciens qualifiés et formés aux dernières technologies.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex-shrink-0 flex items-center justify-center text-primary mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1.5">
                        {title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85"
                alt="Intérieur confortable avec climatisation"
                loading="lazy"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="text-2xl font-heading font-bold text-foreground">
                  Île-de-France
                </div>
                <div className="text-sm text-gray-400 mt-0.5">
                  8 départements couverts
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="devis" className="py-28 bg-[#f7f9fc]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Gratuit & sans engagement
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Demandez votre devis
              </h2>
            </motion.div>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-28 bg-foreground text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Découvrir
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Le confort, ça se vit.
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="POINT CLIM — Confort thermique Île-de-France"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Couverture totale
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Toute l'Île-de-France.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {DEPARTMENTS.map((dept, i) => (
              <motion.div
                key={dept.num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href={dept.path}
                  className="group flex flex-col items-start p-6 rounded-2xl border border-gray-100 hover:border-primary/30 hover:bg-primary/3 transition-all"
                  data-testid={`link-dept-${dept.num}`}
                >
                  <div className="text-4xl font-heading font-bold text-gray-100 group-hover:text-primary/20 transition-colors mb-2">
                    {dept.num}
                  </div>
                  <div className="font-semibold text-foreground text-sm">
                    {dept.name}
                  </div>
                  <div className="text-xs text-primary font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Voir la page <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-[#f7f9fc]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Ce qu'ils disent
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Ils nous font confiance.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 flex flex-col"
              >
                <div className="flex text-amber-400 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-50">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {r.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {r.role} — {r.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                Vos questions.
                <br />
                Nos réponses.
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Tout ce que vous devez savoir avant de faire appel à nos
                services.
              </p>

              <Button
                size="lg"
                className="h-13 px-8 rounded-full font-semibold"
                onClick={() =>
                  document
                    .getElementById("devis")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-testid="button-faq-cta"
              >
                Demander un devis
              </Button>
            </motion.div>

            <div>
              <Accordion type="single" collapsible className="w-full">
                {FAQ.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-base py-5 hover:text-primary hover:no-underline transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Confort thermique"
            loading="lazy"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
              Prêt à commencer ?
            </p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Votre confort.
              <br />
              Notre priorité.
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto font-light">
              Demandez votre devis gratuit. Nos experts vous répondent
              rapidement.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="h-14 px-10 rounded-full text-base font-semibold bg-white text-foreground hover:bg-gray-100 shadow-2xl"
                onClick={() =>
                  document
                    .getElementById("devis")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-testid="button-cta-devis"
              >
                Demander mon devis
              </Button>

              <Button
                size="lg"
                className="h-14 px-10 rounded-full text-base font-semibold bg-[#25D366] hover:bg-[#22c55e] text-white border-0"
                asChild
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-cta-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 rounded-full text-base font-semibold bg-white/8 hover:bg-white/15 text-white border-white/20"
                asChild
              >
                <a href={`tel:${PHONE_LINK}`} data-testid="button-cta-call">
                  <Phone className="w-5 h-5 mr-2" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FLOATING MOBILE CONTACT */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-3 md:hidden">
        <a
          href={`tel:${PHONE_LINK}`}
          className="flex-1 h-12 rounded-full bg-primary text-white font-semibold flex items-center justify-center shadow-xl"
        >
          Appeler
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 rounded-full bg-[#25D366] text-white font-semibold flex items-center justify-center shadow-xl"
        >
          WhatsApp
        </a>
      </div>
    </Layout>
  );
}