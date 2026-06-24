import { Layout } from "@/components/layout/layout";
import { SEO } from "@/components/seo";

export default function PrivacyPage() {
  return (
    <Layout>
      <SEO 
        title="Politique de Confidentialité | POINT CLIM" 
        description="Politique de confidentialité et gestion des données personnelles de POINT CLIM." 
      />

      <section className="bg-foreground text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Politique de Confidentialité
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-blue prose-lg">
          <h2>1. Introduction</h2>
          <p>Dans le cadre de son activité, la société POINT CLIM, dont le siège social est situé en Île-de-France, est amenée à collecter et à traiter des informations dont certaines sont qualifiées de "données personnelles". POINT CLIM attache une grande importance au respect de la vie privée, et n'utilise que des données de manière responsable et confidentielle et dans une finalité précise.</p>

          <h2>2. Données personnelles collectées</h2>
          <p>Sur le site web de POINT CLIM, il y a deux types de données susceptibles d'être recueillies :</p>
          <ul>
            <li><strong>Les données transmises directement :</strong> Ces données sont celles que vous nous transmettez directement, via un formulaire de contact ou bien par contact direct par email. Sont obligatoires dans le formulaire de contact les champs "prénom et nom", "téléphone", "email", et les informations relatives au lieu d'intervention souhaité.</li>
            <li><strong>Les données collectées automatiquement :</strong> Lors de vos visites, une fois votre consentement donné, nous pouvons recueillir des informations relatives à votre navigation, la durée de votre consultation, votre adresse IP, votre type et version de navigateur. </li>
          </ul>

          <h2>3. Utilisation des données</h2>
          <p>Les données que vous nous transmettez directement sont utilisées dans le but de vous recontacter et/ou dans le cadre de la demande que vous nous faites (demande de devis, information technique). Les données "web analytics" sont collectées de forme anonyme et nous permettent de mesurer l'audience de notre site web, les consultations et les éventuelles erreurs afin d'améliorer constamment l'expérience des utilisateurs. Ces données sont utilisées par POINT CLIM, responsable du traitement des données, et ne seront jamais cédées à un tiers ni utilisées à d'autres fins que celles détaillées ci-dessus.</p>

          <h2>4. Base légale</h2>
          <p>Les données personnelles ne sont collectées qu'après consentement obligatoire de l'utilisateur. Ce consentement est valablement recueilli, libre, clair et sans équivoque.</p>

          <h2>5. Durée de conservation</h2>
          <p>Les données seront sauvegardées pour une durée maximale de 3 ans.</p>

          <h2>6. Vos droits</h2>
          <p>Vous avez le droit de consultation, demande de modification ou d'effacement sur l'ensemble de vos données personnelles. Vous pouvez également retirer votre consentement au traitement de vos données. Pour exercer ces droits, veuillez contacter : contact@pointclim.fr.</p>
        </div>
      </section>
    </Layout>
  );
}
