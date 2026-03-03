import { motion } from "framer-motion";
import { Zap, ShieldCheck, LayoutDashboard } from "lucide-react";

const CARD = {
  background: "rgba(255,255,255,0.7)",
  boxShadow: "0 8px 40px -8px hsla(226,46%,11%,0.07), 0 1px 2px 0 hsla(226,46%,11%,0.02), inset 0 1px 0 0 rgba(255,255,255,0.9)",
  border: "1px solid rgba(218,225,240,0.5)",
};

const cards = [
  {
    icon: Zap,
    title: "Velocità ed Efficienza",
    desc: "Automatizziamo i processi ripetitivi e riduciamo i tempi operativi, permettendo al tuo team di concentrarsi su ciò che conta davvero.",
  },
  {
    icon: ShieldCheck,
    title: "Sicurezza dei Dati",
    desc: "I tuoi dati aziendali protetti con standard enterprise: backup automatici, accessi controllati e conformità normativa garantita.",
  },
  {
    icon: LayoutDashboard,
    title: "Controllo Centralizzato",
    desc: "Un'unica dashboard per monitorare vendite, magazzino, contabilità e risorse umane — tutto in tempo reale, ovunque ti trovi.",
  },
];

const chips = [
  "Meno errori manuali",
  "Processi unificati",
  "Report in tempo reale",
  "Scalabilità garantita",
  "Onboarding rapido",
  "Costi prevedibili",
  "Integrazione nativa",
  "Supporto dedicato",
];

const WhatWeDo = () => (
  <section id="di-cosa-ci-occupiamo" className="scroll-mt-24 py-20 md:py-28 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    {/* Ambient lights */}
    <div className="absolute top-[-5%] right-[30%] w-[600px] h-[400px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.04) 0%, transparent 70%)" }} />
    <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[350px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(230,60%,60%,0.03) 0%, transparent 70%)" }} />

    <div className="container relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-primary/70 mb-3" style={{ letterSpacing: "0.08em" }}>
          Di cosa ci occupiamo
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>
          Velocità, efficienza e sicurezza per le PMI italiane
        </h2>
        <p className="mt-4 text-muted-foreground max-w-prose mx-auto">
          Risolviamo situazioni in cui l'azienda utilizza strumenti obsoleti, frammentati o eccessivamente costosi — con un unico gestionale intelligente e assistenza reale.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-[28px] p-7 transition-all duration-[220ms] ease-out hover:-translate-y-[2px]"
            style={{
              ...CARD,
              transition: "transform 220ms ease-out, box-shadow 220ms ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 48px -8px hsla(226,46%,11%,0.12), 0 1px 3px 0 hsla(226,46%,11%,0.04), inset 0 1px 0 0 rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = CARD.boxShadow;
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: "linear-gradient(135deg, hsla(217,83%,50%,0.1), hsla(217,83%,50%,0.05))",
                border: "1px solid hsla(217,83%,50%,0.12)",
              }}>
              <card.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2" style={{ letterSpacing: "-0.015em" }}>
              {card.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed" style={{ maxWidth: "32rem" }}>
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Benefit chips */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
      >
        {chips.map((chip) => (
          <span
            key={chip}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-primary/80"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid hsla(217,83%,50%,0.12)",
              boxShadow: "0 1px 4px 0 hsla(226,46%,11%,0.04), inset 0 1px 0 0 rgba(255,255,255,0.9)",
              letterSpacing: "0.02em",
            }}
          >
            {chip}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhatWeDo;
