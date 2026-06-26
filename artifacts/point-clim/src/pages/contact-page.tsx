import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";
import { QuoteForm } from "@/components/quote-form";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <Layout>
      <SEO 
        title="Contactez POINT CLIM | Devis et Dépannage Climatisation" 
        description="Besoin d'un devis pour une climatisation ou d'un dépannage urgent en Île-de-France ? Contactez POINT CLIM par téléphone, email ou via notre formulaire." 
      />

      <section className="bg-foreground text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Notre équipe est à votre disposition pour toute demande de devis, conseil technique ou intervention d'urgence.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Par téléphone</h3>
              <p className="text-gray-500 mb-6 text-sm">Pour une réponse immédiate ou une urgence (appel non surtaxé).</p>
              <a href="tel:+33100000000" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">01 00 00 00 00</a>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Via WhatsApp</h3>
              <p className="text-gray-500 mb-6 text-sm">Envoyez-nous un message ou des photos de votre installation.</p>
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold" asChild>
                 <a href="https://wa.me/33623558263" target="_blank" rel="noopener noreferrer">
                  Démarrer la discussion
                 </a>
              </Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Par email</h3>
              <p className="text-gray-500 mb-6 text-sm">Pour une demande d'informations générales.</p>
              <a href="mailto:contact@pointclim.fr" className="text-lg font-bold text-primary hover:text-primary/80 transition-colors">contact@pointclim.fr</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-heading font-bold mb-8">Informations pratiques</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Siège social</h4>
                    <p className="text-gray-600">Île-de-France<br/>Nous intervenons directement chez vous ou dans vos locaux.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horaires d'ouverture</h4>
                    <p className="text-gray-600 mb-1">Lundi au Vendredi : 8h00 - 19h00</p>
                    <p className="text-gray-600 mb-1">Samedi : 9h00 - 17h00</p>
                    <p className="text-gray-600 font-semibold text-primary mt-2">Dépannage d'urgence assuré 7j/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

