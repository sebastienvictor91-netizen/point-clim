import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const SITE_URL = "https://pointclim.netlify.app";

function upsertMeta(selector: string, createAttrs: Record<string, string>, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;

  if (!el) {
    el = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, value]) => el!.setAttribute(key, value));
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null;

  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }

  el.textContent = JSON.stringify(data);
}

export function SEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    const currentUrl = canonical || `${SITE_URL}${window.location.pathname}`;

    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description" }, description);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, currentUrl);
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);

    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = currentUrl;

    upsertJsonLd("pointclim-localbusiness-schema", {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      name: "POINT CLIM",
      url: SITE_URL,
      telephone: "+33175295234",
      description:
        "POINT CLIM intervient en Île-de-France pour l'installation, l'entretien et le dépannage de climatisation et pompes à chaleur.",
      areaServed: [
        "Paris",
        "Essonne",
        "Seine-et-Marne",
        "Yvelines",
        "Hauts-de-Seine",
        "Seine-Saint-Denis",
        "Val-de-Marne",
        "Val-d'Oise",
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33175295234",
        contactType: "customer service",
        availableLanguage: ["fr"],
      },
    });
  }, [title, description, canonical]);

  return null;
}
