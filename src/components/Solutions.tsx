import { motion } from "framer-motion";
import { Cog, Globe, Server, Headphones, ChevronRight } from "lucide-react";

const cards = [
  {
    icon: Cog,
    title: "Sviluppo ERP",
    badge: "Core",
    desc: "Implementazioni Odoo end-to-end per ogni funzione aziendale.",
    items: ["Contabilità & finanza", "Magazzino & produzione", "Vendite & CRM"],
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    badge: "Digital",
    desc: "Siti web, e-commerce e strumenti digitali su misura.",
    items: ["E-commerce B2B/B2C", "Portali clienti", "Integrazioni API"],
  },
  {
    icon: Server,
    title: "Architecture & Infrastructure",
    badge: "Cloud",
    desc: "Infrastrutture cloud affidabili e scalabili.",
    items: ["Cloud hosting gestito", "CI/CD & DevOps", "Monitoraggio 24/7"],
  },
  {
    icon: Headphones,
    title: "Supporto al Cliente",
    badge: "Support",
    desc: "Assistenza dedicata post go-live senza limiti.",
    items: ["SLA garantiti", "Formazione continua", "Account manager dedicato"],
  },
];

const cardBase = {
  background: "rgba(255,255,255,0.85)",
  boxShadow: "0 4px 32px -4px hsla(226,46%,11%,0.07), 0 1px 3px 0 hsla(226,46%,11%,0.03)",
  borderColor: "hsla(218,53%,90%,0.7)",
};

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
            className="group rounded-[28px] border p-6 transition-all duration-[220ms] ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_40px_-4px_hsla(226,46%,11%,0.13),0_1px_4px_0_hsla(226,46%,11%,0.05)] hover:border-primary/20"
            style={cardBase}
          >
            {/* Icon + badge row */}
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/60 bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-full">
                {c.badge}
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            <ul className="mt-4 space-y-1.5">
              {c.items.map((item) => (
                <li key={item} className="text-sm text-foreground/75 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Link */}
            <button
              onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary/70 group-hover:text-primary transition-colors duration-200"
            >
              Scopri di più
              <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
