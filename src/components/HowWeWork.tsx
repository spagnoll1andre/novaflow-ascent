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
  <section id="come-lavoriamo" className="scroll-mt-20 py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Come Lavoriamo</h2>
        <p className="mt-4 text-muted-foreground">Un metodo collaudato in 7 step.</p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-5 relative"
            >
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm md:text-base shrink-0 z-10">
                {s.num}
              </div>
              <div className="pt-2 md:pt-4">
                <h3 className="font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowWeWork;
