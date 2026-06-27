
import fs from "fs";
import path from "path";

const file = fs.readFileSync("src/data/seo-pages.ts", "utf8");

const villes = [...file.matchAll(/\{ slug: "([^"]+)", name: "([^"]+)", dept: "([^"]+)" \}/g)]
  .map(m => ({ slug: m[1], name: m[2], dept: m[3] }))
  .filter(v => !["climatisation", "installation-climatisation", "depannage-climatisation", "entretien-climatisation", "pompe-a-chaleur", "climatisation-reversible"].includes(v.slug));

const services = [
  "climatisation",
  "installation-climatisation",
  "depannage-climatisation",
  "entretien-climatisation",
  "pompe-a-chaleur",
  "climatisation-reversible",
];

const intents = ["", "prix", "urgent", "entreprise", "devis"];

const urls = [];

for (const ville of villes) {
  for (const service of services) {
    for (const intent of intents) {
      const slug = intent ? `${intent}-${service}-${ville.slug}` : `${service}-${ville.slug}`;
      urls.push(`https://pointclim.netlify.app/${slug}`);
    }
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join("\n")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", xml);
console.log(`✅ Sitemap généré : ${urls.length} URLs`);
