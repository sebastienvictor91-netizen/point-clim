export const APP_DATA = {
  phone: "01 75 29 52 34",
  email: "contact@pointclim.fr",
  whatsapp: "33623558263",
  companyName: "POINT CLIM",
};

export const SERVICES = [
  {
    id: "installation-climatisation",
    title: "Installation climatisation",
    path: "/installation-climatisation",
    description: "Pose de climatisation murale, multisplit ou gainable pour particuliers et professionnels.",
    icon: "Fan",
    image: "/images/installation-climatisation.webp",
    features: ["Étude du besoin", "Pose soignée", "Mise en service", "Conseil matériel"]
  },
  {
    id: "depannage-entretien-climatisation",
    title: "Dépannage & entretien climatisation",
    path: "/depannage-entretien-climatisation",
    description: "Dépannage, entretien, nettoyage, recharge et diagnostic de climatisation.",
    icon: "Wrench",
    image: "/images/depannage-climatisation.webp",
    features: ["Diagnostic panne", "Entretien annuel", "Nettoyage complet", "Recherche de fuite"]
  },
  {
    id: "pompes-a-chaleur",
    title: "Pompes à chaleur",
    path: "/pompes-a-chaleur",
    description: "Installation, entretien et dépannage de PAC air/air et air/eau.",
    icon: "Leaf",
    image: "/images/pompe-a-chaleur.webp",
    features: ["PAC air/air", "PAC air/eau", "Entretien PAC", "Dépannage PAC"]
  },
  {
    id: "froid-frigorifique",
    title: "Froid frigorifique camions",
    path: "/froid-frigorifique-camions",
    description: "Installation, entretien et dépannage de groupes frigorifiques pour camions et utilitaires.",
    icon: "Truck",
    image: "/images/camion-frigorifique.webp",
    features: ["Camions frigorifiques", "Utilitaires", "Entretien", "Dépannage rapide"]
  },
  {
    id: "contrat-maintenance",
    title: "Contrats de maintenance",
    path: "/contrat-maintenance",
    description: "Contrats d’entretien pour climatisation, PAC et installations professionnelles.",
    icon: "ClipboardCheck",
    image: "/images/entretien-climatisation.webp",
    features: ["Visite annuelle", "Priorité dépannage", "Suivi régulier", "Prévention des pannes"]
  },
  {
    id: "climatisation-entreprises",
    title: "Solutions entreprises",
    path: "/climatisation-entreprises",
    description: "Solutions CVC pour bureaux, commerces, restaurants, hôtels et locaux professionnels.",
    icon: "Building2",
    image: "/images/solutions-entreprises.webp",
    features: ["Bureaux", "Commerces", "Restaurants", "VRV / DRV"]
  }
];

export const DEPARTMENTS = [
  { num: "75", name: "Paris", path: "/climatisation-paris" },
  { num: "77", name: "Seine-et-Marne", path: "/climatisation-seine-et-marne" },
  { num: "78", name: "Yvelines", path: "/climatisation-yvelines" },
  { num: "91", name: "Essonne", path: "/climatisation-essonne" },
  { num: "92", name: "Hauts-de-Seine", path: "/climatisation-hauts-de-seine" },
  { num: "93", name: "Seine-Saint-Denis", path: "/climatisation-seine-saint-denis" },
  { num: "94", name: "Val-de-Marne", path: "/climatisation-val-de-marne" },
  { num: "95", name: "Val-d'Oise", path: "/climatisation-val-d-oise" },
];

export const CITIES = [
  { name: "Massy", path: "/climatisation-massy" },
  { name: "Versailles", path: "/climatisation-versailles" },
  { name: "Créteil", path: "/climatisation-creteil" },
  { name: "Nanterre", path: "/climatisation-nanterre" },
  { name: "Boulogne-Billancourt", path: "/climatisation-boulogne-billancourt" },
  { name: "Saint-Denis", path: "/climatisation-saint-denis" },
  { name: "Argenteuil", path: "/climatisation-argenteuil" },
  { name: "Melun", path: "/climatisation-melun" },
];
