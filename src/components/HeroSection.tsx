import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Users, ShieldCheck, Zap, Layers, Clock, CheckCircle2 } from "lucide-react";

const CARD_STYLE = {
  background: "rgba(255,255,255,0.7)",
  boxShadow: "0 8px 40px -8px hsla(226,46%,11%,0.08), 0 1px 3px 0 hsla(226,46%,11%,0.03)",
  border: "1px solid rgba(218,225,240,0.5)",
};
const CARD_INSET = "inset 0 1px 0 0 rgba(255,255,255,0.9), inset 0 -1px 0 0 rgba(218,225,240,0.15)";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="scroll-mt-24 pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden"
      style={{ background: "#F6FBFF" }}>
      {/* Ambient light layers */}
      <div className="absolute top-[-20%] left-[30%] w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.05) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,70%,0.04) 0%, transparent 70%)" }} />
      <div className="absolute top-[40%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsla(230,60%,50%,0.03) 0%, transparent 70%)" }} />

      <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          {/* Eyebrow pill */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/20 bg-primary/5 text-primary"
              style={{ letterSpacing: "0.04em" }}>
              <ShieldCheck className="h-3.5 w-3.5" />
              Partner Odoo • ERP & Automazioni
            </span>
          </motion.div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-[1.08]"
            style={{ letterSpacing: "-0.025em" }}>
            Digitalizza la tua azienda con{" "}
            <span className="text-primary">NovaFlow</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-md font-medium leading-relaxed" style={{ maxWidth: "28rem" }}>
            Soluzioni ERP e digitali su misura per PMI italiane. Automatizza, controlla, cresci.
          </p>

          {/* Mini benefits */}
          <div className="mt-5 flex flex-col gap-2.5">
            {[
              { icon: Layers, text: "Controllo totale su ogni processo aziendale" },
              { icon: Zap, text: "Automazione intelligente dei flussi operativi" },
              { icon: TrendingUp, text: "Scalabilità dal giorno uno, senza limiti" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2.5 text-sm text-foreground/75">
                <b.icon className="h-4 w-4 text-primary/70 shrink-0" />
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 transition-all duration-[220ms] ease-out hover:-translate-y-[1px]"
              onClick={() => scrollTo("#contatti")}
              style={{
                background: "linear-gradient(135deg, hsl(217 83% 50%), hsl(217 83% 58%))",
                boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.35), 0 0 0 0.5px hsl(217 83% 50% / 0.15), inset 0 1px 0 0 hsl(217 83% 70% / 0.3)",
              }}>
              Richiedi un'analisi gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-[220ms] ease-out"
              onClick={() => scrollTo("#contatti")}
            >
              Prenota una demo
            </Button>
          </div>

          {/* Trust line */}
          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground/60">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Risposta entro 24h</span>
            <span className="h-3 w-px bg-border" />
            <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Analisi gratuita</span>
            <span className="h-3 w-px bg-border" />
            <span>50+ progetti completati</span>
          </div>
        </motion.div>

        {/* Right — dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-6 rounded-[48px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.06) 0%, transparent 70%)" }} />

          <div className="rounded-[32px] p-1 relative"
            style={{
              ...CARD_STYLE,
              boxShadow: "0 16px 64px -12px hsla(226,46%,11%,0.12), 0 2px 4px 0 hsla(226,46%,11%,0.03), " + CARD_INSET,
            }}>

            {/* Inner card */}
            <div className="rounded-[28px] p-5 md:p-7 space-y-4"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(246,251,255,0.9) 100%)",
                boxShadow: CARD_INSET,
                border: "1px solid rgba(218,225,240,0.35)",
              }}>

              {/* Top bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/50" />
                  <div className="h-3 w-3 rounded-full bg-green-400/50" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/50 border border-border/30">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-[10px] font-medium text-muted-foreground">Live</span>
                </div>
              </div>

              {/* Mini stat cards */}
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { icon: BarChart3, label: "Fatturato", value: "+24%", trend: "↑ 12% vs mese" },
                  { icon: TrendingUp, label: "Efficienza", value: "+38%", trend: "↑ 8% vs mese" },
                  { icon: Users, label: "Clienti", value: "1.2k", trend: "↑ 15 nuovi" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl p-3.5 text-center"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, hsl(222 52% 97%) 100%)",
                      border: "1px solid rgba(218,225,240,0.45)",
                      boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.8)",
                    }}>
                    <s.icon className="h-4 w-4 mx-auto text-primary mb-1.5" />
                    <p className="text-[10px] text-muted-foreground font-medium">{s.label}</p>
                    <p className="text-lg font-bold text-foreground leading-tight">{s.value}</p>
                    <p className="text-[9px] text-primary/60 mt-0.5 font-medium">{s.trend}</p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-2xl p-4"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, hsl(222 52% 97%/0.5) 100%)",
                  border: "1px solid rgba(218,225,240,0.45)",
                  boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.7)",
                }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold text-foreground/70 uppercase" style={{ letterSpacing: "0.06em" }}>Revenue Overview</span>
                  <span className="text-[10px] text-muted-foreground">Ultimi 12 mesi</span>
                </div>
                <div className="h-28 flex items-end gap-1.5">
                  {[40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 92, 88].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md transition-all duration-300"
                      style={{
                        height: `${h}%`,
                        background: i >= 10
                          ? "linear-gradient(180deg, hsl(217 83% 50%), hsl(217 83% 60%))"
                          : `linear-gradient(180deg, hsl(217 83% 50% / ${0.3 + i * 0.05}), hsl(217 83% 60% / ${0.2 + i * 0.04}))`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex items-center gap-2">
                {[
                  { label: "Ordini oggi", value: "147" },
                  { label: "Tempo medio", value: "2.4h" },
                  { label: "Soddisfazione", value: "98%" },
                ].map((s) => (
                  <div key={s.label} className="flex-1 rounded-xl p-2.5"
                    style={{
                      background: "rgba(246,251,255,0.7)",
                      border: "1px solid rgba(218,225,240,0.4)",
                      boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.7)",
                    }}>
                    <p className="text-[9px] text-muted-foreground font-medium">{s.label}</p>
                    <p className="text-sm font-bold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
