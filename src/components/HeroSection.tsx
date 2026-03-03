import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Users, ShieldCheck, Zap, Layers, Clock, CheckCircle2, Award } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const dashRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dashRef.current) return;
    const rect = dashRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -4, y: x * 4 });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

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
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-xl">
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
          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-medium leading-relaxed" style={{ maxWidth: "28rem" }}>
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
            <Button size="lg" className="rounded-full px-8 transition-all duration-200 ease-out hover:-translate-y-[1px]"
              onClick={() => scrollTo("#contatti")}
              style={{
                background: "linear-gradient(180deg, hsl(217 83% 62%), hsl(217 83% 50%))",
                boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.4), 0 0 0 0.5px hsl(217 83% 50% / 0.2), inset 0 1px 0 0 hsl(217 83% 75% / 0.4)",
                border: "1px solid hsl(217 83% 60% / 0.3)",
              }}>
              Richiedi un'analisi gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline"
              className="rounded-full px-8 transition-all duration-200 ease-out hover:-translate-y-[1px]"
              onClick={() => scrollTo("#contatti")}
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(218,225,240,0.6)",
                boxShadow: "0 2px 12px -2px hsla(226,46%,11%,0.08), inset 0 1px 0 0 rgba(255,255,255,0.9)",
                color: "hsl(226 46% 20%)",
              }}>
              Prenota una demo
            </Button>
          </div>

          {/* Trust meta-line */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-muted-foreground/70">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary/50" />
              Risposta entro 24h
            </span>
            <span className="hidden sm:block h-3 w-px bg-border/60" />
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary/50" />
              Analisi gratuita
            </span>
            <span className="hidden sm:block h-3 w-px bg-border/60" />
            <span className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-primary/50" />
              50+ progetti completati
            </span>
          </div>
        </motion.div>

        {/* Right — multi-layer dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          ref={dashRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Outer glow */}
          <div className="absolute -inset-8 rounded-[56px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.07) 0%, transparent 70%)" }} />

          {/* Layer 1 — Main dashboard */}
          <motion.div
            className="rounded-[32px] p-1 relative"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(218,225,240,0.5)",
              boxShadow: "0 20px 72px -12px hsla(226,46%,11%,0.14), 0 2px 4px 0 hsla(226,46%,11%,0.03), inset 0 1px 0 0 rgba(255,255,255,0.9)",
              transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {/* Glare overlay */}
            <div className="absolute inset-0 rounded-[32px] pointer-events-none z-20 overflow-hidden">
              <div className="absolute inset-0"
                style={{
                  background: `linear-gradient(${115 + tilt.y * 8}deg, rgba(255,255,255,0.12) 0%, transparent 50%, transparent 100%)`,
                  transition: "background 0.3s ease-out",
                }} />
            </div>

            {/* Inner card */}
            <div className="rounded-[28px] p-5 md:p-6 space-y-3.5 relative z-10"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(246,251,255,0.92) 100%)",
                boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.9), inset 0 -1px 0 0 rgba(218,225,240,0.15)",
                border: "1px solid rgba(218,225,240,0.35)",
              }}>

              {/* Top bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: "hsl(347 77% 50% / 0.5)" }} />
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: "hsl(45 93% 58% / 0.5)" }} />
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: "hsl(142 71% 45% / 0.5)" }} />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary/50 border border-border/30">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(142 71% 45%)" }} />
                  <span className="text-[10px] font-medium text-muted-foreground">Live</span>
                </div>
              </div>

              {/* Mini stat cards */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: BarChart3, label: "Fatturato", value: "+24%", trend: "↑ 12% vs mese" },
                  { icon: TrendingUp, label: "Efficienza", value: "+38%", trend: "↑ 8% vs mese" },
                  { icon: Users, label: "Clienti", value: "1.2k", trend: "↑ 15 nuovi" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl p-3 text-center"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, hsl(222 52% 97%) 100%)",
                      border: "1px solid rgba(218,225,240,0.45)",
                      boxShadow: "0 2px 8px -2px hsla(226,46%,11%,0.06), inset 0 1px 0 0 rgba(255,255,255,0.8)",
                    }}>
                    <s.icon className="h-3.5 w-3.5 mx-auto text-primary mb-1" />
                    <p className="text-[9px] text-muted-foreground font-medium">{s.label}</p>
                    <p className="text-base font-bold text-foreground leading-tight">{s.value}</p>
                    <p className="text-[8px] text-primary/60 mt-0.5 font-medium">{s.trend}</p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-2xl p-3.5"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, hsl(222 52% 97%/0.5) 100%)",
                  border: "1px solid rgba(218,225,240,0.45)",
                  boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.7)",
                }}>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[9px] font-semibold text-foreground/70 uppercase" style={{ letterSpacing: "0.06em" }}>Revenue Overview</span>
                  <span className="text-[9px] text-muted-foreground">Ultimi 12 mesi</span>
                </div>
                <div className="h-24 flex items-end gap-1">
                  {[40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 92, 88].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm"
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
            </div>
          </motion.div>

          {/* Layer 2 — floating mini-card top-right */}
          <motion.div
            initial={{ opacity: 0, y: 12, x: 8 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -top-4 -right-3 md:-top-5 md:-right-6 z-30 rounded-2xl p-3 md:p-3.5"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(218,225,240,0.5)",
              boxShadow: "0 12px 40px -8px hsla(226,46%,11%,0.15), 0 1px 3px 0 hsla(226,46%,11%,0.04), inset 0 1px 0 0 rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
              transform: `perspective(800px) rotateX(${tilt.x * 0.6}deg) rotateY(${tilt.y * 0.6}deg)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-[9px] text-muted-foreground font-medium">Crescita</p>
                <p className="text-sm font-bold text-foreground leading-tight">+47%</p>
              </div>
            </div>
          </motion.div>

          {/* Layer 3 — floating mini-card bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 12, x: -8 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="absolute -bottom-3 -left-2 md:-bottom-5 md:-left-6 z-30 rounded-2xl p-3 md:p-3.5"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid rgba(218,225,240,0.5)",
              boxShadow: "0 12px 40px -8px hsla(226,46%,11%,0.15), 0 1px 3px 0 hsla(226,46%,11%,0.04), inset 0 1px 0 0 rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
              transform: `perspective(800px) rotateX(${tilt.x * 0.6}deg) rotateY(${tilt.y * 0.6}deg)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ background: "hsl(142 71% 45% / 0.1)" }}>
                <CheckCircle2 className="h-4 w-4" style={{ color: "hsl(142 71% 45%)" }} />
              </div>
              <div>
                <p className="text-[9px] text-muted-foreground font-medium">Ordini completati</p>
                <p className="text-sm font-bold text-foreground leading-tight">1,284</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
