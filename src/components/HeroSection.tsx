import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="scroll-mt-20 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Digitalizza la tua azienda con{" "}
            <span className="text-primary">NovaFlow</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg font-medium">
            Soluzioni ERP e digitali su misura per PMI italiane. Automatizza, controlla, cresci.
          </p>
          <p className="mt-3 text-sm text-muted-foreground/70">
            Partner certificato Odoo — oltre 50 implementazioni di successo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8" onClick={() => scrollTo("#contatti")}>
              Richiedi un'analisi gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              onClick={() => scrollTo("#contatti")}
            >
              Prenota una demo
            </Button>
          </div>
        </motion.div>

        {/* Right — dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-card rounded-3xl border border-border/60 shadow-lg p-6 md:p-8 space-y-5">
            {/* Mini stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: BarChart3, label: "Fatturato", value: "+24%" },
                { icon: TrendingUp, label: "Efficienza", value: "+38%" },
                { icon: Users, label: "Clienti", value: "1.2k" },
              ].map((s) => (
                <div key={s.label} className="bg-secondary/60 rounded-2xl p-4 text-center">
                  <s.icon className="h-5 w-5 mx-auto text-primary mb-1" />
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-lg font-bold text-foreground">{s.value}</p>
                </div>
              ))}
            </div>
            {/* Chart placeholder */}
            <div className="bg-secondary/40 rounded-2xl h-40 flex items-end px-4 pb-4 gap-2">
              {[40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 92, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary/80 rounded-t-md"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
