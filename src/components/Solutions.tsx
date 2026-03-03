import { motion } from "framer-motion";
import { Cog, Globe, Server, Headphones } from "lucide-react";

const cards = [
  {
    icon: Cog,
    title: "Sviluppo ERP",
    desc: "Implementazioni Odoo end-to-end per ogni funzione aziendale.",
    items: ["Contabilità & finanza", "Magazzino & produzione", "Vendite & CRM"],
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    desc: "Siti web, e-commerce e strumenti digitali su misura.",
    items: ["E-commerce B2B/B2C", "Portali clienti", "Integrazioni API"],
  },
  {
    icon: Server,
    title: "Architecture & Infrastructure",
    desc: "Infrastrutture cloud affidabili e scalabili.",
    items: ["Cloud hosting gestito", "CI/CD & DevOps", "Monitoraggio 24/7"],
  },
  {
    icon: Headphones,
    title: "Supporto al Cliente",
    desc: "Assistenza dedicata post go-live senza limiti.",
    items: ["SLA garantiti", "Formazione continua", "Account manager dedicato"],
  },
];

const cardStyle = {
  background: "rgba(255,255,255,0.85)",
  boxShadow: "0 4px 32px -4px hsla(226,46%,11%,0.08), 0 1px 3px 0 hsla(226,46%,11%,0.03)",
  borderColor: "hsla(218,53%,90%,0.7)",
};

const cardHoverStyle = "hover:-translate-y-[2px] hover:shadow-[0_8px_40px_-4px_hsla(226,46%,11%,0.13),0_1px_4px_0_hsla(226,46%,11%,0.05)] hover:border-primary/20";

const Solutions = () => (
  <section id="soluzioni" className="scroll-mt-20 py-20 md:py-28 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.04) 0%, transparent 70%)" }} />
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Le Nostre Soluzioni</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Tutto ciò che serve per digitalizzare la tua azienda, in un unico partner.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-[28px] border p-6 transition-all duration-[220ms] ease-out ${cardHoverStyle}`}
            style={cardStyle}
          >
            <c.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            <ul className="mt-4 space-y-1.5">
              {c.items.map((item) => (
                <li key={item} className="text-sm text-foreground/80 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
