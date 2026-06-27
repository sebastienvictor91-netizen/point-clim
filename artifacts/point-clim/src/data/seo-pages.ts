
export const SERVICES_SEO = [
  { slug: "climatisation", label: "Climatisation" },
  { slug: "installation-climatisation", label: "Installation climatisation" },
  { slug: "depannage-climatisation", label: "Dépannage climatisation" },
  { slug: "entretien-climatisation", label: "Entretien climatisation" },
  { slug: "pompe-a-chaleur", label: "Pompe à chaleur" },
  { slug: "climatisation-reversible", label: "Climatisation réversible" },
];

export const INTENTIONS_SEO = [
  { slug: "", label: "" },
  { slug: "prix", label: "Prix" },
  { slug: "urgent", label: "Urgence" },
  { slug: "entreprise", label: "Entreprise" },
  { slug: "devis", label: "Devis" },
];

export const VILLES_SEO = [
  { slug: "paris", name: "Paris", dept: "75" },
  { slug: "boulogne-billancourt", name: "Boulogne-Billancourt", dept: "92" },
  { slug: "nanterre", name: "Nanterre", dept: "92" },
  { slug: "courbevoie", name: "Courbevoie", dept: "92" },
  { slug: "levallois-perret", name: "Levallois-Perret", dept: "92" },
  { slug: "issy-les-moulineaux", name: "Issy-les-Moulineaux", dept: "92" },
  { slug: "antony", name: "Antony", dept: "92" },
  { slug: "colombes", name: "Colombes", dept: "92" },
  { slug: "asnieres-sur-seine", name: "Asnières-sur-Seine", dept: "92" },
  { slug: "rueil-malmaison", name: "Rueil-Malmaison", dept: "92" },

  { slug: "creteil", name: "Créteil", dept: "94" },
  { slug: "vitry-sur-seine", name: "Vitry-sur-Seine", dept: "94" },
  { slug: "saint-maur-des-fosses", name: "Saint-Maur-des-Fossés", dept: "94" },
  { slug: "champigny-sur-marne", name: "Champigny-sur-Marne", dept: "94" },
  { slug: "ivry-sur-seine", name: "Ivry-sur-Seine", dept: "94" },
  { slug: "maisons-alfort", name: "Maisons-Alfort", dept: "94" },

  { slug: "saint-denis", name: "Saint-Denis", dept: "93" },
  { slug: "montreuil", name: "Montreuil", dept: "93" },
  { slug: "aubervilliers", name: "Aubervilliers", dept: "93" },
  { slug: "drancy", name: "Drancy", dept: "93" },
  { slug: "noisy-le-grand", name: "Noisy-le-Grand", dept: "93" },
  { slug: "aulnay-sous-bois", name: "Aulnay-sous-Bois", dept: "93" },

  { slug: "versailles", name: "Versailles", dept: "78" },
  { slug: "saint-germain-en-laye", name: "Saint-Germain-en-Laye", dept: "78" },
  { slug: "sartrouville", name: "Sartrouville", dept: "78" },
  { slug: "mantes-la-jolie", name: "Mantes-la-Jolie", dept: "78" },
  { slug: "poissy", name: "Poissy", dept: "78" },
  { slug: "trappes", name: "Trappes", dept: "78" },

  { slug: "evry-courcouronnes", name: "Évry-Courcouronnes", dept: "91" },
  { slug: "massy", name: "Massy", dept: "91" },
  { slug: "palaiseau", name: "Palaiseau", dept: "91" },
  { slug: "corbeil-essonnes", name: "Corbeil-Essonnes", dept: "91" },
  { slug: "savigny-sur-orge", name: "Savigny-sur-Orge", dept: "91" },
  { slug: "sainte-genevieve-des-bois", name: "Sainte-Geneviève-des-Bois", dept: "91" },

  { slug: "melun", name: "Melun", dept: "77" },
  { slug: "meaux", name: "Meaux", dept: "77" },
  { slug: "chelles", name: "Chelles", dept: "77" },
  { slug: "pontault-combault", name: "Pontault-Combault", dept: "77" },
  { slug: "savigny-le-temple", name: "Savigny-le-Temple", dept: "77" },
  { slug: "torcy", name: "Torcy", dept: "77" },

  { slug: "cergy", name: "Cergy", dept: "95" },
  { slug: "argenteuil", name: "Argenteuil", dept: "95" },
  { slug: "sarcelles", name: "Sarcelles", dept: "95" },
  { slug: "garges-les-gonesse", name: "Garges-lès-Gonesse", dept: "95" },
  { slug: "franconville", name: "Franconville", dept: "95" },
  { slug: "ermont", name: "Ermont", dept: "95" },

  { slug: "neuilly-sur-seine", name: "Neuilly-sur-Seine", dept: "92" },
  { slug: "vincennes", name: "Vincennes", dept: "94" },
  { slug: "fontenay-sous-bois", name: "Fontenay-sous-Bois", dept: "94" },
  { slug: "bagnolet", name: "Bagnolet", dept: "93" },
];

export const SEO_PAGES = VILLES_SEO.flatMap((ville) =>
  SERVICES_SEO.flatMap((service) =>
    INTENTIONS_SEO.map((intent) => {
      const slug = intent.slug
        ? `${intent.slug}-${service.slug}-${ville.slug}`
        : `${service.slug}-${ville.slug}`;

      const intentTitle = intent.label ? `${intent.label} ${service.label}` : service.label;

      return {
        slug,
        ville,
        service,
        intent,
        title: `${intentTitle} ${ville.name} | POINT CLIM`,
        description: `${intentTitle} à ${ville.name} (${ville.dept}) : devis gratuit, intervention rapide, installation, entretien et dépannage par POINT CLIM en Île-de-France.`,
      };
    })
  )
);
