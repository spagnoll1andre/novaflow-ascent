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
            className="group rounded-[24px] p-6 flex flex-col items-center text-center transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_40px_-8px_hsla(226,46%,11%,0.13)]"
            style={CARD}
          >
            {/* Icon */}
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5"
              style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.6)" }}>
              <c.icon className="h-6 w-6 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-foreground mb-3" style={{ letterSpacing: "-0.015em" }}>{c.title}</h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 flex-1">
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-primary/80"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid hsla(217,83%,50%,0.15)",
                    boxShadow: "0 1px 4px 0 hsla(226,46%,11%,0.04), inset 0 1px 0 0 rgba(255,255,255,0.9)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors duration-200"
            >
              Scopri di più
              <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
