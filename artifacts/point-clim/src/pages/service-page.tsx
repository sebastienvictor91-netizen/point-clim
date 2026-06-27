import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";
import { SERVICES } from "@/data/content";
import { CheckCircle2, ChevronRight, Phone, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const PHONE_DISPLAY = "01 75 29 52 34";
const PHONE_LINK = "+33175295234";
const WHATSAPP_URL = "https://wa.me/33623558263";

interface ServicePageProps {
id: string;
}

export default function ServicePage({ id }: ServicePageProps) {
const service = SERVICES.find((s) => s.id === id);

if (!service) {
return <div>Service non trouvé</div>;
}

return (
<Layout>
<SEO
title={`${service.title} Île-de-France | Devis Gratuit - POINT CLIM`}
description={`${service.description} Intervention rapide en Île-de-France. Devis rapide et gratuit.`}
/>

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-foreground">
<div className="absolute inset-0 z-0">
<img
src={service.image}
alt={service.title}
className="w-full h-full object-cover object-center opacity-40"
/>
</div>

<div className="container mx-auto px-4 md:px-6 relative z-10">
<div className="max-w-3xl">
<div className="flex items-center gap-2 text-primary text-sm font-semibold mb-4">
<Link href="/" className="hover:text-white transition-colors">Accueil</Link>
<ChevronRight className="w-4 h-4" />
<span className="text-white">{service.title}</span>
</div>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
{service.title}
</h1>

<p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
{service.description} Intervention rapide en Île-de-France par nos techniciens.
</p>

<div className="flex flex-wrap gap-3">
<Button
size="lg"
className="h-14 px-8 text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg"
onClick={() => document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" })}
>
Obtenir un devis gratuit
</Button>

<Button size="lg" className="h-14 px-8 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white border-0" asChild>
<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
<MessageCircle className="w-5 h-5 mr-2" />
Devis immédiat
</a>
</Button>

<Button size="lg" variant="outline" className="h-14 px-8 rounded-xl bg-white/10 text-white border-white/25 hover:bg-white/20" asChild>
<a href={`tel:${PHONE_LINK}`}>
<Phone className="w-5 h-5 mr-2" />
{PHONE_DISPLAY}
</a>
</Button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4 md:px-6">
<div className="flex flex-col lg:flex-row gap-16">
<div className="lg:w-2/3">
<h2 className="text-3xl font-heading font-bold text-foreground mb-6">
En quoi consiste notre prestation ?
</h2>

<p className="text-gray-600 text-lg mb-8 leading-relaxed">
Notre service de {service.title.toLowerCase()} est conçu pour répondre aux exigences de qualité attendues en climatisation et pompe à chaleur. Nous vous accompagnons de l’étude de votre besoin jusqu’à la réalisation complète.
</p>

<div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-100">
<h3 className="text-2xl font-semibold mb-6">Ce que comprend notre intervention :</h3>

<div className="grid sm:grid-cols-2 gap-4">
{service.features.map((feature, idx) => (
<div key={idx} className="flex items-start gap-3">
<CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
<span className="text-gray-700 font-medium">{feature}</span>
</div>
))}
</div>
</div>

<h2 className="text-3xl font-heading font-bold text-foreground mb-6">
Pourquoi choisir POINT CLIM ?
</h2>

<div className="space-y-6 mb-12">
{[
["Expertise terrain", "Des techniciens habitués aux installations résidentielles, commerces, bureaux et locaux professionnels."],
["Transparence totale", "Des devis clairs, détaillés et sans surprise."],
["Accompagnement personnalisé", "Nous vous conseillons sur les solutions adaptées à votre logement, votre budget et vos besoins."],
].map(([title, text], index) => (
<div key={title} className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-secondary/10 flex-shrink-0 flex items-center justify-center text-secondary">
<span className="font-bold text-xl">{index + 1}</span>
</div>
<div>
<h4 className="text-xl font-semibold text-foreground mb-2">{title}</h4>
<p className="text-gray-600">{text}</p>
</div>
</div>
))}
</div>
</div>

<div className="lg:w-1/3">
<div className="sticky top-28">
<div id="devis" className="scroll-mt-32">
<QuoteForm />
</div>

<div className="mt-8 bg-primary text-white rounded-2xl p-6 text-center shadow-xl">
<h4 className="font-semibold text-lg mb-2">Besoin d’une urgence ?</h4>
<p className="text-primary-foreground/80 text-sm mb-6">
Nos techniciens sont disponibles pour vous répondre rapidement.
</p>

<div className="grid gap-3">
<Button size="lg" variant="secondary" className="w-full font-bold bg-white text-primary hover:bg-gray-100" asChild>
<a href={`tel:${PHONE_LINK}`}>
<Phone className="w-5 h-5 mr-2" />
{PHONE_DISPLAY}
</a>
</Button>

<Button size="lg" className="w-full font-bold bg-[#25D366] hover:bg-[#22c55e] text-white border-0" asChild>
<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
<MessageCircle className="w-5 h-5 mr-2" />
Devis immédiat
</a>
</Button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 border-t border-gray-100">
<div className="container mx-auto px-4 text-center max-w-2xl">
<h2 className="text-3xl font-heading font-bold mb-4">Un projet en tête ?</h2>
<p className="text-gray-600 mb-8">
Contactez-nous pour discuter de vos besoins. L’étude de votre projet est gratuite et sans engagement.
</p>

<Button size="lg" className="rounded-full h-12 px-8" asChild>
<Link href="/contact">
Contactez-nous <ArrowRight className="w-4 h-4 ml-2" />
</Link>
</Button>
</div>
</section>
</Layout>
);
}