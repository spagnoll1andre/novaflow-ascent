import { motion } from "framer-motion";

const cases = [
  { title: "Azienda Manifatturiera", desc: "Riduzione del 40% dei tempi di gestione ordini con ERP integrato.", tag: "Manufacturing" },
  { title: "Catena Retail", desc: "Unificazione di 12 punti vendita su piattaforma unica in 8 settimane.", tag: "Retail" },
  { title: "Studio Professionale", desc: "Digitalizzazione completa della fatturazione e timesheet.", tag: "Servizi" },
  { title: "E-commerce B2B", desc: "Integrazione magazzino-sito con sync automatico in tempo reale.", tag: "E-commerce" },
];

const cardStyle = {
  background: "rgba(255,255,255,0.85)",
  boxShadow: "0 4px 32px -4px hsla(226,46%,11%,0.08), 0 1px 3px 0 hsla(226,46%,11%,0.03)",
  borderColor: "hsla(218,53%,90%,0.7)",
};

const CaseStudy = () => (
  <section id="case-study" className="scroll-mt-20 py-20 md:py-28 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Case Study</h2>
        <p className="mt-4 text-muted-foreground">Risultati concreti per aziende come la tua.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-[28px] border p-6 transition-all duration-[220ms] ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_40px_-4px_hsla(226,46%,11%,0.13),0_1px_4px_0_hsla(226,46%,11%,0.05)] hover:border-primary/20"
            style={cardStyle}
          >
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{c.tag}</span>
            <h3 className="mt-4 font-bold text-foreground text-lg">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudy;
