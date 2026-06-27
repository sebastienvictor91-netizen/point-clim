import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, UtensilsCrossed, Briefcase, ChevronRight, CheckCircle2, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type PropertyType = "maison" | "appartement" | "commerce" | "bureau" | "";

interface SimulatorResult {
  solution: string;
  details: string[];
  units: string;
  budget: string;
  note: string;
}

function getResult(type: PropertyType, surface: string, rooms: string): SimulatorResult | null {
  if (!type || !surface || !rooms) return null;

  const surf = parseInt(surface.split("-")[0].replace("+", "").trim(), 10);
  const rm = parseInt(rooms, 10);

  if (type === "maison") {
    if (surf <= 80) {
      return {
        solution: "Monosplit ou Multisplit",
        details: ["Climatiseur réversible monosplit pour pièce principale", "Extension possible avec multisplit 2 ou 3 pièces", "Idéal pour une maison individuelle compacte"],
        units: "1 à 2 unités intérieures",
        budget: "1 500 € – 3 500 €",
        note: "Devis précis après visite technique gratuite"
      };
    }
    return {
      solution: "Multisplit ou Gainable",
      details: ["Système multisplit jusqu'à 5 pièces depuis une unité extérieure", "Ou climatisation gainable centralisée pour une diffusion uniforme", "Adapté aux grandes surfaces et maisons à étage"],
      units: "2 à 5 unités intérieures",
      budget: "3 000 € – 8 000 €",
      note: "Étude thermique incluse dans notre visite gratuite"
    };
  }

  if (type === "appartement") {
    if (rm <= 2) {
      return {
        solution: "Monosplit réversible",
        details: ["Une unité extérieure compacte", "Installation en façade ou toiture selon copropriété", "Confort optimal pour petit appartement"],
        units: "1 unité intérieure",
        budget: "900 € – 2 000 €",
        note: "Accord de copropriété souvent requis — nous vous accompagnons"
      };
    }
    return {
      solution: "Multisplit 2 ou 3 pièces",
      details: ["Solution discrète avec une seule unité extérieure", "Jusqu'à 3 pièces climatisées indépendamment", "Idéal pour T3, T4 ou grand appartement"],
      units: "2 à 3 unités intérieures",
      budget: "2 500 € – 5 500 €",
      note: "Nous gérons les démarches de copropriété si besoin"
    };
  }

  if (type === "commerce") {
    return {
      solution: "Système VRV/VRF ou Cassette",
      details: ["Climatiseur cassette encastré au plafond pour un rendu professionnel", "Système VRF pour grandes surfaces ou plusieurs zones", "Confort client et personnel garanti toute l'année"],
      units: surf <= 50 ? "1 à 2 unités" : "2 à 6 unités",
      budget: surf <= 50 ? "2 000 € – 5 000 €" : "5 000 € – 15 000 €",
      note: "Étude personnalisée pour professionnels — priorité intervention"
    };
  }

  if (type === "bureau") {
    return {
      solution: "Gainable ou Multi-Split Professionnel",
      details: ["Diffusion d'air homogène pour espace de travail", "Commande centralisée ou par zone selon les besoins", "Discret, silencieux, adapté au tertiaire"],
      units: surf <= 100 ? "1 à 3 unités" : "3 à 8 unités",
      budget: surf <= 100 ? "3 000 € – 7 000 €" : "7 000 € – 20 000 €",
      note: "Installation en dehors des heures de bureau si besoin"
    };
  }

  return null;
}

const propertyTypes = [
  { value: "maison", label: "Maison", icon: Home },
  { value: "appartement", label: "Appartement", icon: Building2 },
  { value: "commerce", label: "Commerce / Restaurant", icon: UtensilsCrossed },
  { value: "bureau", label: "Bureau / PME", icon: Briefcase },
] as const;

export function Simulator() {
  const [type, setType] = useState<PropertyType>("");
  const [surface, setSurface] = useState("");
  const [rooms, setRooms] = useState("");
  const [department, setDepartment] = useState("");
  const [showResult, setShowResult] = useState(false);

  const result = getResult(type, surface, rooms);
  const canSimulate = type && surface && rooms && department;

  const handleSimulate = () => {
    if (canSimulate) setShowResult(true);
  };

  return (
    <section className="py-24 bg-gray-50" id="simulateur">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-5 py-2 text-sm font-semibold mb-5">
            <Calculator className="w-4 h-4" />
            Simulateur gratuit
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Quelle solution pour votre projet ?
          </h2>
          <p className="text-gray-600 text-lg">
            Renseignez votre profil en 30 secondes et obtenez une recommandation personnalisée.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            {/* Step 1: Property type */}
            <div className="mb-8">
              <Label className="block text-base font-semibold text-foreground mb-4">
                1. Type de bien
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {propertyTypes.map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    data-testid={`button-type-${value}`}
                    onClick={() => { setType(value); setShowResult(false); }}
                    className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all font-medium text-sm ${
                      type === value
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-gray-200 hover:border-primary/40 text-gray-600 hover:text-primary"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 + 3 + 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <Label className="block text-base font-semibold text-foreground mb-3">
                  2. Surface approximative
                </Label>
                <Select onValueChange={(v) => { setSurface(v); setShowResult(false); }}>
                  <SelectTrigger data-testid="select-surface" className="h-12">
                    <SelectValue placeholder="Choisissez..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-30">Moins de 30 m²</SelectItem>
                    <SelectItem value="30-60">30 à 60 m²</SelectItem>
                    <SelectItem value="60-100">60 à 100 m²</SelectItem>
                    <SelectItem value="100-200">100 à 200 m²</SelectItem>
                    <SelectItem value="200+">Plus de 200 m²</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-base font-semibold text-foreground mb-3">
                  3. Nombre de pièces
                </Label>
                <Select onValueChange={(v) => { setRooms(v); setShowResult(false); }}>
                  <SelectTrigger data-testid="select-rooms" className="h-12">
                    <SelectValue placeholder="Choisissez..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 pièce (studio)</SelectItem>
                    <SelectItem value="2">2 pièces</SelectItem>
                    <SelectItem value="3">3 pièces</SelectItem>
                    <SelectItem value="4">4 pièces</SelectItem>
                    <SelectItem value="5">5 pièces et plus</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-base font-semibold text-foreground mb-3">
                  4. Département
                </Label>
                <Select onValueChange={(v) => { setDepartment(v); setShowResult(false); }}>
                  <SelectTrigger data-testid="select-department" className="h-12">
                    <SelectValue placeholder="Choisissez..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="75">Paris (75)</SelectItem>
                    <SelectItem value="77">Seine-et-Marne (77)</SelectItem>
                    <SelectItem value="78">Yvelines (78)</SelectItem>
                    <SelectItem value="91">Essonne (91)</SelectItem>
                    <SelectItem value="92">Hauts-de-Seine (92)</SelectItem>
                    <SelectItem value="93">Seine-Saint-Denis (93)</SelectItem>
                    <SelectItem value="94">Val-de-Marne (94)</SelectItem>
                    <SelectItem value="95">Val-d'Oise (95)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full h-14 text-base font-bold rounded-xl"
              disabled={!canSimulate}
              onClick={handleSimulate}
              data-testid="button-simulate"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Obtenir ma recommandation
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Result */}
            <AnimatePresence>
              {showResult && result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 rounded-2xl border-2 border-primary/20 bg-primary/5 p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-1">Solution recommandée</div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">{result.solution}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Détails de la solution</div>
                      <ul className="space-y-2">
                        {result.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-gray-700 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Nombre d'unités conseillé</div>
                        <div className="text-xl font-bold text-foreground">{result.units}</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-100">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Budget estimatif</div>
                        <div className="text-xl font-bold text-primary">{result.budget}</div>
                        <div className="text-xs text-gray-400 mt-1">Fournitures + pose, hors aides</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
                    {result.note}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      className="flex-1 h-12 font-bold rounded-xl"
                      onClick={() => document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' })}
                      data-testid="button-simulator-quote"
                    >
                      Demander un devis gratuit
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 h-12 font-bold rounded-xl border-primary text-primary hover:bg-primary/5"
                      asChild
                    >
                      <a href="https://wa.me/33623558263" target="_blank" rel="noopener noreferrer" data-testid="button-simulator-whatsapp">
                        Discuter sur Devis immédiat
                      </a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
