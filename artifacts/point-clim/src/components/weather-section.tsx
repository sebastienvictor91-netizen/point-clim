import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Thermometer, Wind, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WeatherSection() {
  const [temp, setTemp] = useState(39);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp((t) => (t === 39 ? 40 : t === 40 ? 38 : 39));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const indoorWithout = temp - 5;

  return (
    <section className="py-20 bg-gradient-to-br from-[#0d2a6e] via-[#1B3F8F] to-[#1a5fa8] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-300 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm font-semibold mb-5 backdrop-blur-sm">
            <Thermometer className="w-4 h-4 text-orange-300" />
            Aujourd'hui en Île-de-France
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            40°C dehors. 24°C chez vous.
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Visualisez l'impact concret de la climatisation sur votre confort quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          {/* Outside */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-400/30 flex items-center justify-center mx-auto mb-4">
              <Thermometer className="w-8 h-8 text-orange-300" />
            </div>
            <div className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">Extérieur</div>
            <motion.div
              key={temp}
              initial={{ scale: 1.2, color: "#fbbf24" }}
              animate={{ scale: 1, color: "#fb923c" }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold mb-2"
            >
              {temp}°C
            </motion.div>
            <div className="text-blue-200 text-sm">Température ambiante</div>
          </motion.div>

          {/* Arrow */}
          <div className="hidden md:flex flex-col items-center gap-6">
            <div className="w-px h-full bg-white/20 absolute" />
            <div className="relative z-10 flex flex-col gap-6 w-full">
              <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 text-center">
                <AlertTriangle className="w-5 h-5 text-red-300 mx-auto mb-2" />
                <div className="text-xs text-red-200 font-semibold">Sans climatisation</div>
                <div className="text-2xl font-bold text-red-300 mt-1">{indoorWithout}°C intérieur</div>
                <div className="text-xs text-red-200 mt-1">Inconfort, fatigue, risques</div>
              </div>
              <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4 text-center">
                <CheckCircle className="w-5 h-5 text-green-300 mx-auto mb-2" />
                <div className="text-xs text-green-200 font-semibold">Avec POINT CLIM</div>
                <div className="text-2xl font-bold text-green-300 mt-1">24°C intérieur</div>
                <div className="text-xs text-green-200 mt-1">Confort optimal garanti</div>
              </div>
            </div>
          </div>

          {/* With Point Clim */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mx-auto mb-4">
              <Wind className="w-8 h-8 text-green-300" />
            </div>
            <div className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">Avec POINT CLIM</div>
            <div className="text-6xl font-bold text-green-300 mb-2">24°C</div>
            <div className="space-y-1 mt-4">
              {["Température stable", "Confort optimal", "Air filtré et sain", "Économies d'énergie"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile comparison (visible on sm only) */}
        <div className="md:hidden mt-6 grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 text-center">
            <AlertTriangle className="w-5 h-5 text-red-300 mx-auto mb-1" />
            <div className="text-xs text-red-200 font-semibold">Sans clim</div>
            <div className="text-xl font-bold text-red-300">{indoorWithout}°C</div>
          </div>
          <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4 text-center">
            <CheckCircle className="w-5 h-5 text-green-300 mx-auto mb-1" />
            <div className="text-xs text-green-200 font-semibold">Avec POINT CLIM</div>
            <div className="text-xl font-bold text-green-300">24°C</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="h-14 px-10 text-base font-bold rounded-xl bg-white text-primary hover:bg-gray-100 shadow-2xl"
            onClick={() => document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-weather-cta"
          >
            Je veux mon devis aujourd'hui
          </Button>
        </div>
      </div>
    </section>
  );
}
