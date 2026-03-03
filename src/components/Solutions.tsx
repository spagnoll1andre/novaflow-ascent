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

const Solutions = () => (
  <section id="soluzioni" className="scroll-mt-20 py-20 md:py-28 bg-background">
    <div className="container">
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
            className="bg-card rounded-3xl border border-border/60 p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 ease-out"
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
