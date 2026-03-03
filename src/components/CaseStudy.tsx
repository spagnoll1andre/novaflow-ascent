import { motion } from "framer-motion";

const cases = [
  { title: "Azienda Manifatturiera", desc: "Riduzione dei tempi di gestione ordini con ERP integrato.", tag: "Manufacturing", metric: "-40%", metricLabel: "tempi gestione" },
  { title: "Catena Retail", desc: "Unificazione di 12 punti vendita su piattaforma unica in 8 settimane.", tag: "Retail", metric: "12→1", metricLabel: "piattaforma unica" },
  { title: "Studio Professionale", desc: "Digitalizzazione completa della fatturazione e timesheet.", tag: "Servizi", metric: "+65%", metricLabel: "efficienza" },
  { title: "E-commerce B2B", desc: "Integrazione magazzino-sito con sync automatico in tempo reale.", tag: "E-commerce", metric: "Real-time", metricLabel: "sync magazzino" },
];

const CARD = {
  background: "rgba(255,255,255,0.7)",
  boxShadow: "0 8px 40px -8px hsla(226,46%,11%,0.07), 0 1px 2px 0 hsla(226,46%,11%,0.02), inset 0 1px 0 0 rgba(255,255,255,0.9)",
  border: "1px solid rgba(218,225,240,0.5)",
};

const CaseStudy = () => (
  <section id="case-study" className="scroll-mt-24 py-20 md:py-28 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    {/* Ambient lights */}
    <div className="absolute top-[10%] left-[25%] w-[600px] h-[450px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.04) 0%, transparent 70%)" }} />
    <div className="absolute bottom-[-5%] right-[30%] w-[400px] h-[350px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(230,60%,55%,0.03) 0%, transparent 70%)" }} />

    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>Case Study</h2>
        <p className="mt-4 text-muted-foreground">Risultati concreti per aziende come la tua.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-[28px] p-6 transition-all duration-[220ms] ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_48px_-6px_hsla(226,46%,11%,0.14),0_1px_4px_0_hsla(226,46%,11%,0.05)] hover:border-primary/20"
            style={CARD}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-semibold uppercase text-primary bg-primary/8 border border-primary/10 px-3 py-1 rounded-full"
                style={{ letterSpacing: "0.08em" }}>
                {c.tag}
              </span>
              <div className="text-right">
                <p className="text-xl font-extrabold text-primary leading-none">{c.metric}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">{c.metricLabel}</p>
              </div>
            </div>
            <h3 className="font-bold text-foreground text-lg" style={{ letterSpacing: "-0.01em" }}>{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudy;
