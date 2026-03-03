import { motion } from "framer-motion";

const cases = [
  { title: "Azienda Manifatturiera", desc: "Riduzione dei tempi di gestione ordini con ERP integrato.", tag: "Manufacturing", metric: "-40%", metricLabel: "tempi gestione", featured: true },
  { title: "Catena Retail", desc: "Unificazione di 12 punti vendita su piattaforma unica in 8 settimane.", tag: "Retail", metric: "12→1", metricLabel: "piattaforma unica", featured: false },
  { title: "Studio Professionale", desc: "Digitalizzazione completa della fatturazione e timesheet.", tag: "Servizi", metric: "+65%", metricLabel: "efficienza", featured: false },
  { title: "E-commerce B2B", desc: "Integrazione magazzino-sito con sync automatico in tempo reale.", tag: "E-commerce", metric: "Real-time", metricLabel: "sync magazzino", featured: true },
];

const CARD = {
  background: "rgba(255,255,255,0.7)",
  boxShadow: "0 8px 32px -8px hsla(226,46%,11%,0.08), 0 1px 2px 0 hsla(226,46%,11%,0.02), inset 0 1px 0 0 rgba(255,255,255,0.9)",
  border: "1px solid rgba(218,225,240,0.45)",
};

const CaseStudy = () => (
  <section id="soluzioni-verticali" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
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

      {/* Bento grid: 2 featured tall + 2 standard */}
      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {/* Featured card 1 — tall, spans 2 rows */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:row-span-2 rounded-[24px] p-7 flex flex-col justify-between transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_40px_-8px_hsla(226,46%,11%,0.13)]"
          style={CARD}
        >
          <div>
            <span className="inline-block text-[10px] font-semibold uppercase text-primary bg-primary/8 border border-primary/10 px-3 py-1 rounded-full"
              style={{ letterSpacing: "0.08em" }}>
              {cases[0].tag}
            </span>
            <h3 className="mt-5 text-xl font-bold text-foreground" style={{ letterSpacing: "-0.01em" }}>{cases[0].title}</h3>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{cases[0].desc}</p>
          </div>
          <div className="mt-8 pt-5" style={{ borderTop: "1px solid rgba(218,225,240,0.5)" }}>
            <p className="text-[10px] font-semibold uppercase text-muted-foreground" style={{ letterSpacing: "0.1em" }}>{cases[0].metricLabel}</p>
            <p className="text-5xl font-extrabold text-primary leading-none mt-1" style={{ letterSpacing: "-0.03em" }}>{cases[0].metric}</p>
          </div>
        </motion.div>

        {/* Standard cards */}
        {cases.slice(1, 3).map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="md:col-span-2 rounded-[24px] p-6 flex flex-col sm:flex-row sm:items-center sm:gap-8 transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_40px_-8px_hsla(226,46%,11%,0.13)]"
            style={CARD}
          >
            <div className="flex-1">
              <span className="inline-block text-[10px] font-semibold uppercase text-primary bg-primary/8 border border-primary/10 px-3 py-1 rounded-full"
                style={{ letterSpacing: "0.08em" }}>
                {c.tag}
              </span>
              <h3 className="mt-3 text-lg font-bold text-foreground" style={{ letterSpacing: "-0.01em" }}>{c.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:text-right shrink-0 sm:pl-4" style={{ borderLeft: "none" }}>
              <div className="sm:border-l sm:pl-6" style={{ borderColor: "rgba(218,225,240,0.5)" }}>
                <p className="text-[10px] font-semibold uppercase text-muted-foreground" style={{ letterSpacing: "0.1em" }}>{c.metricLabel}</p>
                <p className="text-3xl font-extrabold text-primary leading-none mt-1" style={{ letterSpacing: "-0.03em" }}>{c.metric}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Featured card 4 — bottom full width accent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="md:col-span-3 rounded-[24px] p-7 flex flex-col sm:flex-row sm:items-center sm:gap-10 transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_40px_-8px_hsla(226,46%,11%,0.13)]"
          style={{
            ...CARD,
            background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(246,251,255,0.7) 100%)",
          }}
        >
          <div className="flex-1">
            <span className="inline-block text-[10px] font-semibold uppercase text-primary bg-primary/8 border border-primary/10 px-3 py-1 rounded-full"
              style={{ letterSpacing: "0.08em" }}>
              {cases[3].tag}
            </span>
            <h3 className="mt-3 text-xl font-bold text-foreground" style={{ letterSpacing: "-0.01em" }}>{cases[3].title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cases[3].desc}</p>
          </div>
          <div className="mt-5 sm:mt-0 shrink-0 sm:text-right">
            <div className="sm:border-l sm:pl-8" style={{ borderColor: "rgba(218,225,240,0.5)" }}>
              <p className="text-[10px] font-semibold uppercase text-muted-foreground" style={{ letterSpacing: "0.1em" }}>{cases[3].metricLabel}</p>
              <p className="text-4xl font-extrabold text-primary leading-none mt-1" style={{ letterSpacing: "-0.02em" }}>{cases[3].metric}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CaseStudy;
