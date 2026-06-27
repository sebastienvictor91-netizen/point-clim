
export const SERVICES_SEO = [
  { slug: "climatisation", label: "Climatisation" },
  { slug: "installation-climatisation", label: "Installation climatisation" },
  { slug: "depannage-climatisation", label: "Dépannage climatisation" },
  { slug: "entretien-climatisation", label: "Entretien climatisation" },
  { slug: "pompe-a-chaleur", label: "Pompe à chaleur" },
  { slug: "climatisation-reversible", label: "Climatisation réversible" },
];

export const VILLES_SEO = [
  { slug: "paris", name: "Paris", dept: "75" },
  { slug: "boulogne-billancourt", name: "Boulogne-Billancourt", dept: "92" },
  { slug: "nanterre", name: "Nanterre", dept: "92" },
  { slug: "courbevoie", name: "Courbevoie", dept: "92" },
  { slug: "creteil", name: "Créteil", dept: "94" },
  { slug: "vitry-sur-seine", name: "Vitry-sur-Seine", dept: "94" },
  { slug: "saint-denis", name: "Saint-Denis", dept: "93" },
  { slug: "montreuil", name: "Montreuil", dept: "93" },
  { slug: "versailles", name: "Versailles", dept: "78" },
  { slug: "saint-germain-en-laye", name: "Saint-Germain-en-Laye", dept: "78" },
  { slug: "evry-courcouronnes", name: "Évry-Courcouronnes", dept: "91" },
  { slug: "massy", name: "Massy", dept: "91" },
  { slug: "palaiseau", name: "Palaiseau", dept: "91" },
  { slug: "corbeil-essonnes", name: "Corbeil-Essonnes", dept: "91" },
  { slug: "melun", name: "Melun", dept: "77" },
  { slug: "meaux", name: "Meaux", dept: "77" },
  { slug: "cergy", name: "Cergy", dept: "95" },
  { slug: "argenteuil", name: "Argenteuil", dept: "95" },
];

export const SEO_PAGES = VILLES_SEO.flatMap((ville) =>
  SERVICES_SEO.map((service) => ({
    slug: `${service.slug}-${ville.slug}`,
    ville,
    service,
    title: `${service.label} ${ville.name} | POINT CLIM`,
    description: `${service.label} à ${ville.name} (${ville.dept}) : devis gratuit, intervention rapide, installation, entretien et dépannage par POINT CLIM en Île-de-France.`,
  }))
);
