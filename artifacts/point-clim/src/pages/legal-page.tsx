import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";

export default function LegalPage() {
  return (
    <Layout>
      <SEO 
        title="Mentions Légales | POINT CLIM" 
        description="Mentions légales du site POINT CLIM." 
      />

      <section className="bg-foreground text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Mentions Légales
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-blue prose-lg">
          <h2>1. Éditeur du site</h2>
          <p>Le présent site est édité par :</p>
          <ul>
            <li><strong>Raison sociale :</strong> POINT CLIM</li>
            <li><strong>Forme juridique :</strong> [À compléter]</li>
            <li><strong>Capital social :</strong> [À compléter]</li>
            <li><strong>Siège social :</strong> [À compléter], Île-de-France</li>
            <li><strong>SIRET :</strong> [À compléter]</li>
            <li><strong>RCS :</strong> [À compléter]</li>
            <li><strong>Email :</strong> contact@pointclim.fr</li>
          </ul>

          <h2>2. Directeur de la publication</h2>
          <p>Le Directeur de la publication est [À compléter].</p>

          <h2>3. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <ul>
            <li><strong>Nom de l'hébergeur :</strong> Replit</li>
            <li><strong>Adresse :</strong> San Francisco, CA, USA</li>
          </ul>

          <h2>4. Propriété intellectuelle</h2>
          <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>

          <h2>5. Données personnelles</h2>
          <p>D'une façon générale, vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité et à fournir des informations personnelles vous concernant. Cependant, nous pouvons parfois vous demander des informations, par exemple, pour traiter une commande, établir une correspondance ou soumettre un devis. Pour plus d'informations, veuillez consulter notre politique de confidentialité.</p>

          <h2>6. Litiges</h2>
          <p>En cas de litige, les tribunaux compétents seront ceux du siège social de la société POINT CLIM.</p>
        </div>
      </section>
    </Layout>
  );
}
