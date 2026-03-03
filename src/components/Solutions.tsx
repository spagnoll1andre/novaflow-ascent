import { motion } from "framer-motion";
import { Cog, Globe, Server, Headphones, ChevronRight } from "lucide-react";

const cards = [
  {
    icon: Cog, title: "Sviluppo ERP", badge: "Core",
    desc: "Unifichiamo contabilità, magazzino, produzione e vendite in un'unica piattaforma Odoo su misura per la tua realtà aziendale.",
    tags: ["Contabilità", "Magazzino", "Produzione", "Vendite"],
  },
  {
    icon: Server, title: "Automazioni", badge: "Auto",
    desc: "Eliminiamo il lavoro ripetitivo con custom actions, import/export Excel, modelli previsionali e workflow agentici basati su AI.",
    tags: ["Custom Actions", "Import/Export", "Previsioni", "Agentic AI"],
  },
  {
    icon: Globe, title: "Digital Solutions", badge: "Digital",
    desc: "Progettiamo siti web, eCommerce e app mobile per far crescere il tuo business online, integrati con il tuo gestionale ERP.",
    tags: ["Web & eCommerce", "App Mobile", "Infrastruttura", "Integrazioni"],
  },
  {
    icon: Headphones, title: "Supporto al Cliente", badge: "Support",
    desc: "Formazione del team, assistenza post-rilascio e un punto di contatto dedicato che conosce la tua azienda e cresce con te.",
    tags: ["Formazione", "Assistenza", "Point of Contact", "Post-vendita"],
  },
];

const CARD = {
  background: "rgba(255,255,255,0.7)",
  boxShadow: "0 8px 32px -8px hsla(226,46%,11%,0.08), 0 1px 2px 0 hsla(226,46%,11%,0.02), inset 0 1px 0 0 rgba(255,255,255,0.9)",
  border: "1px solid rgba(218,225,240,0.45)",
};

const Solutions = () => (
  <section id="sviluppo-erp" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    <div className="absolute top-[-10%] left-[35%] w-[700px] h-[500px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.04) 0%, transparent 70%)" }} />
    <div className="absolute bottom-[-5%] right-[25%] w-[500px] h-[400px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(230,60%,55%,0.03) 0%, transparent 70%)" }} />

    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>Le Nostre Soluzioni</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto" style={{ maxWidth: "32rem" }}>Tutto ciò che serve per digitalizzare la tua azienda, in un unico partner.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-[24px] p-7 flex flex-col transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_40px_-8px_hsla(226,46%,11%,0.13)]"
            style={CARD}
          >
            {/* Header: icon left, badge right */}
            <div className="flex items-start justify-between mb-5">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
                style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.6)" }}>
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-[9px] font-semibold uppercase text-primary/60 bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-full"
                style={{ letterSpacing: "0.08em" }}>
                {c.badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-foreground mb-2" style={{ letterSpacing: "-0.015em" }}>{c.title}</h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>

            {/* Bullet items */}
            <ul className="space-y-2.5 mb-5 flex-1">
              {c.tags.map((tag) => (
                <li key={tag} className="text-sm text-foreground/75 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                  {tag}
                </li>
              ))}
            </ul>

            {/* Text link CTA */}
            <button
              onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/70 group-hover:text-primary transition-colors duration-200"
            >
              Scopri di più
              <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
