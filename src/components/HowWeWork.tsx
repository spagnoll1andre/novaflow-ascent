import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Analisi", desc: "Studio dei processi e delle esigenze aziendali." },
  { num: "02", title: "Demo", desc: "Dimostrazione personalizzata della soluzione." },
  { num: "03", title: "Analisi approfondita", desc: "Mappatura dettagliata dei requisiti tecnici." },
  { num: "04", title: "Sviluppo", desc: "Configurazione e personalizzazione dei moduli." },
  { num: "05", title: "Go-live", desc: "Rilascio in produzione con affiancamento." },
  { num: "06", title: "Formazione", desc: "Training del team per l'utilizzo quotidiano." },
  { num: "07", title: "Assistenza", desc: "Supporto continuo e miglioramento costante." },
];

const HowWeWork = () => (
  <section id="automazioni" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    {/* Ambient lights */}
    <div className="absolute top-[20%] right-[20%] w-[500px] h-[400px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.04) 0%, transparent 70%)" }} />

    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>Come Lavoriamo</h2>
        <p className="mt-4 text-muted-foreground">Un metodo collaudato in 7 step.</p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border/60" />

        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-start gap-5 relative group"
            >
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-full flex items-center justify-center font-bold text-sm md:text-base shrink-0 z-10 text-primary-foreground transition-all duration-200 ease-out group-hover:shadow-[0_6px_24px_-2px_hsl(217_83%_50%/0.35)] group-hover:scale-[1.04]"
                style={{ background: "linear-gradient(135deg, hsl(217 83% 50%), hsl(217 83% 58%))", boxShadow: "0 4px 16px -4px hsl(217 83% 50% / 0.25), inset 0 1px 0 0 hsl(217 83% 70% / 0.25)" }}>
                {s.num}
              </div>
              <div className="pt-2 md:pt-4">
                <h3 className="font-bold text-foreground" style={{ letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed" style={{ maxWidth: "28rem" }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowWeWork;
