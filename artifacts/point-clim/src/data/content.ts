export const APP_DATA = {
  phone: "01 00 00 00 00",
  email: "contact@pointclim.fr",
  whatsapp: "33100000000",
  companyName: "POINT CLIM",
};

export const SERVICES = [
  {
    id: "installation-climatisation",
    title: "Installation de climatisation",
    path: "/installation-climatisation",
    description: "Installation experte de systèmes de climatisation pour un confort optimal en toute saison.",
    icon: "Fan",
    image: "https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Bilan thermique gratuit", "Conseil sur le choix du matériel", "Pose par des techniciens certifiés", "Mise en service et réglages"]
  },
  {
    id: "climatisation-reversible",
    title: "Climatisation réversible",
    path: "/climatisation-reversible",
    description: "La solution 2-en-1 : rafraîchissement en été et chauffage performant en hiver.",
    icon: "ThermometerSun",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Économies d'énergie", "Confort thermique toute l'année", "Systèmes silencieux", "Design élégant s'intégrant à votre intérieur"]
  },
  {
    id: "pompes-a-chaleur",
    title: "Pompes à chaleur",
    path: "/pompes-a-chaleur",
    description: "Installation de PAC air/air et air/eau. Optez pour un système de chauffage écologique et économique.",
    icon: "Leaf",
    image: "https://images.unsplash.com/photo-1621415132223-952ec94db12a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Étude de dimensionnement", "Remplacement chaudière fioul/gaz", "Accompagnement aides de l'État", "SAV et suivi"]
  },
  {
    id: "entretien-climatisation",
    title: "Entretien climatisation",
    path: "/entretien-climatisation",
    description: "Maintenez les performances de votre installation et prolongez sa durée de vie.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Nettoyage des filtres", "Vérification des fluides frigorigènes", "Désinfection antibactérienne", "Contrôle d'étanchéité"]
  },
  {
    id: "entretien-pompe-a-chaleur",
    title: "Entretien pompe à chaleur",
    path: "/entretien-pompe-a-chaleur",
    description: "Maintenance obligatoire et préventive de votre pompe à chaleur.",
    icon: "Settings",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Vérification des performances", "Contrôle compresseur", "Ajustement des paramètres", "Prévention des pannes"]
  },
  {
    id: "depannage-climatisation",
    title: "Dépannage climatisation",
    path: "/depannage-climatisation",
    description: "Intervention rapide pour toute panne de climatisation. Service d'urgence.",
    icon: "AlertTriangle",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Diagnostic panne précis", "Devis de réparation clair", "Intervention prioritaire", "Pièces de rechange certifiées"]
  },
  {
    id: "depannage-pompe-a-chaleur",
    title: "Dépannage pompe à chaleur",
    path: "/depannage-pompe-a-chaleur",
    description: "Votre pompe à chaleur est en panne ? Nous intervenons rapidement pour rétablir votre chauffage.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Recherche de fuite", "Remplacement pièces défectueuses", "Remise en service", "Conseils d'utilisation"]
  },
  {
    id: "contrat-maintenance",
    title: "Contrat de maintenance",
    path: "/contrat-maintenance",
    description: "La tranquillité d'esprit avec nos contrats d'entretien annuels sur mesure.",
    icon: "ClipboardCheck",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Visite annuelle programmée", "Priorité d'intervention", "Main d'œuvre incluse sur dépannage", "Certificat d'étanchéité"]
  },
  {
    id: "climatisation-entreprises",
    title: "Climatisation entreprises",
    path: "/climatisation-entreprises",
    description: "Solutions CVC adaptées aux locaux professionnels : bureaux, commerces, restaurants, santé.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Étude thermique poussée", "Systèmes VRV / DRV", "Installation sans gêner l'activité", "Contrats de maintenance B2B"]
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
