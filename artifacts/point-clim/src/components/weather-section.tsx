import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WITHOUT = [
  { icon: "🌡️", label: "39°C intérieur" },
  { icon: "😴", label: "Nuits difficiles" },
  { icon: "😓", label: "Fatigue & stress" },
  { icon: "💨", label: "Ventilateurs inutiles" },
  { icon: "🔴", label: "Inconfort permanent" },
];

const WITH = [
  { icon: "❄️", label: "24°C stable" },
  { icon: "😴", label: "Sommeil réparateur" },
  { icon: "✨", label: "Bien-être au quotidien" },
  { icon: "🌬️", label: "Air filtré & sain" },
  { icon: "🟢", label: "Confort optimal" },
];

export function WeatherSection() {
  return (
    <section className="py-28 bg-[#f7f9fc] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">La différence POINT CLIM</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
            Deux réalités.<br />Un seul choix.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* WITHOUT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 border border-red-100"></div>
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">Sans POINT CLIM</span>
              </div>
              <div className="text-7xl font-heading font-bold text-red-300/60 mb-8 leading-none">38°C</div>
              <ul className="space-y-4">
                {WITHOUT.map(({ icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-gray-600">
                    <span className="text-xl leading-none">{icon}</span>
                    <span className="text-base font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* WITH */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-50 border border-blue-100"></div>
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Avec POINT CLIM</span>
              </div>
              <div className="text-7xl font-heading font-bold text-primary/25 mb-8 leading-none">24°C</div>
              <ul className="space-y-4">
                {WITH.map(({ icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-gray-700">
                    <span className="text-xl leading-none">{icon}</span>
                    <span className="text-base font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="h-14 px-10 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-weather-cta"
          >
            Je veux mon devis aujourd'hui
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
