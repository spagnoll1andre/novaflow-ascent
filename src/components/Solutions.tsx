import { motion } from "framer-motion";
import { Cog, Globe, Server, Headphones, ChevronRight } from "lucide-react";

const cards = [
  {
    icon: Cog, title: "Sviluppo ERP", badge: "Core",
    desc: "Unifichiamo contabilità, magazzino, produzione e vendite in un'unica piattaforma Odoo su misura per la tua realtà aziendale.",
    tags: ["Contabilità", "Magazzino", "Produzione", "Vendite"],
  },
  {
    icon: Server, title: "Automazioni", badge: "AI",
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

const CARD_DARK = {
  background: "rgba(255,255,255,0.06)",
  boxShadow: "0 8px 32px -8px rgba(0,0,0,0.3), inset 0 1px 0 0 rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const Solutions = () => (
  <section id="sviluppo-erp" className="scroll-mt-24 relative overflow-hidden py-3 md:py-5" style={{ background: "#F6FBFF" }}>
    <div className="relative mx-auto w-[95%] rounded-[32px] md:rounded-[40px] py-10 md:py-14 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0F162B 0%, #16234C 100%)",
        boxShadow: "0 24px 80px -12px hsla(226,46%,11%,0.35), 0 0 0 0.5px rgba(255,255,255,0.05)",
      }}>
      {/* Ambient overlays */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, hsla(217,70%,45%,0.12) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(10,14,28,0.5) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.06) 50%, transparent 90%)" }} />

      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-medium" style={{ color: "#FFFFFF", letterSpacing: "-0.025em", lineHeight: "1.15" }}>Le Nostre Soluzioni</h2>
          <p className="mt-4 mx-auto" style={{ color: "#FFFFFF", maxWidth: "80%" }}>Tutto ciò che serve per digitalizzare la tua azienda, in un unico partner.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-[24px] p-7 flex flex-col transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_16px_48px_-8px_rgba(0,0,0,0.4)]"
              style={CARD_DARK}
            >
              {/* Header: icon left, badge right */}
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.1)", boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <c.icon className="h-5 w-5" style={{ color: "#FFFFFF" }} />
                </div>
                <span className="text-[11px] font-medium uppercase px-3 py-1.5 rounded-full"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    letterSpacing: "0.08em",
                  }}>
                  {c.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium mb-2" style={{ color: "#FFFFFF", letterSpacing: "-0.015em" }}>{c.title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.85)" }}>{c.desc}</p>

              {/* Bullet items */}
              <ul className="space-y-2.5 mb-5 flex-1">
                {c.tags.map((tag) => (
                  <li key={tag} className="text-sm flex items-center gap-2.5" style={{ color: "rgba(255,255,255,0.9)" }}>
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "rgba(255,255,255,0.6)" }} />
                    {tag}
                  </li>
                ))}
              </ul>

              {/* Text link CTA */}
              <button
                onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-1.5 text-base font-medium transition-colors duration-200"
                style={{ color: "#FFFFFF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              >
                Scopri di più
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Solutions;
