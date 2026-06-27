import { SEO_PAGES } from "@/data/seo-pages";
import { LocalSeoPage } from "@/pages/local-seo-page";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import ServicePage from "@/pages/service-page";
import PompesAChaleurPage from "@/pages/pompes-a-chaleur";
import FroidFrigorifiqueCamionsPage from "@/pages/froid-frigorifique-camions";
import DepartmentPage from "@/pages/department-page";
import CityPage from "@/pages/city-page";
import ZonesPage from "@/pages/zones-page";
import AboutPage from "@/pages/about-page";
import ContactPage from "@/pages/contact-page";
import ShowcasePage from "@/pages/showcase-page";
import LegalPage from "@/pages/legal-page";
import PrivacyPage from "@/pages/privacy-page";
import { DEPARTMENTS, CITIES, SERVICES } from "@/data/content";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      <Route
        path="/pompes-a-chaleur"
        component={PompesAChaleurPage}
      />

      {/* Service Pages */}
      {SERVICES.map((service) => (
        <Route key={service.id} path={service.path}>
          <ServicePage id={service.id} />
        </Route>
      ))}

      <Route path="/realisations" component={ShowcasePage} />
      <Route path="/zones-intervention" component={ZonesPage} />
      <Route path="/qui-sommes-nous" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/mentions-legales" component={LegalPage} />
      <Route
        path="/politique-confidentialite"
        component={PrivacyPage}
      />

      {/* Department Pages */}
      {DEPARTMENTS.map((dept) => (
        <Route key={dept.num} path={dept.path}>
          <DepartmentPage num={dept.num} name={dept.name} />
        </Route>
      ))}

      {/* City Pages */}
      {CITIES.map((city) => (
        <Route key={city.name} path={city.path}>
          <CityPage
            name={city.name.toLowerCase().replace(/ /g, "-")}
          />
        </Route>
      ))}

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;