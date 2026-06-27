import { createFileRoute } from "@tanstack/react-router";
import { LocalSeoPage } from "@/pages/local-seo-page";
import { SEO_PAGES } from "@/data/seo-pages";

export const Route = createFileRoute("/$slug")({
  component: SeoDynamicPage,
});

function SeoDynamicPage() {
  const { slug } = Route.useParams();
  const page = SEO_PAGES.find((p) => p.slug === slug);

  if (!page) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-black mb-3">Page introuvable</h1>
          <p className="text-slate-500">Cette page n’existe pas.</p>
        </div>
      </main>
    );
  }

  return <LocalSeoPage slug={slug} />;
}
