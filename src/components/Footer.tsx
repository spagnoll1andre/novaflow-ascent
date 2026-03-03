import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users } from "lucide-react";
import logo from "@/assets/novaflow-logo.jpg";

const cols = [
  { title: "Soluzioni", links: ["ERP Odoo", "Digital Solutions", "Infrastruttura", "Supporto"] },
  { title: "Verticali", links: ["Manifatturiero", "Retail", "Servizi", "E-commerce"] },
  { title: "Azienda", links: ["Chi siamo", "Case Study", "Blog", "Lavora con noi"] },
  { title: "Legale", links: ["Privacy Policy", "Termini di Servizio", "Cookie Policy"] },
];

const clients = ["Tada", "Stemau", "Kosmail", "Fraglia"];

const Footer = () => (
  <footer>
    {/* Dark CTA section */}
    <div className="relative overflow-hidden py-24 md:py-32" style={{ background: "linear-gradient(135deg, hsl(226 46% 11%), hsl(226 40% 18%))" }}>
      {/* Subtle noise / vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 50%, hsla(217,83%,50%,0.06) 0%, transparent 60%)" }} />

      <div className="container relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "hsl(217 83% 60%)" }}>Inizia oggi</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>
            Pronto a semplificare la tua azienda?
          </h2>
          <p className="mt-5 text-white/60 leading-relaxed" style={{ maxWidth: "28rem" }}>
            Scopri come NovaFlow può trasformare i tuoi processi in un unico gestionale intelligente. L'analisi iniziale è gratuita e senza impegno.
          </p>

          {/* Client chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="text-xs text-white/40">Già al fianco di:</span>
            {clients.map((c) => (
              <span key={c} className="px-3 py-1 rounded-full text-xs font-medium text-white/70 border border-white/15">{c}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 transition-all duration-200 ease-out hover:-translate-y-[1px] hover:bg-[rgba(255,255,255,0.18)]"
              onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 2px 16px -4px rgba(0,0,0,0.3)",
              }}
            >
              Richiedi un'analisi gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 transition-all duration-200 ease-out hover:-translate-y-[1px] hover:bg-[rgba(255,255,255,0.1)]"
              onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Prenota una demo
            </Button>
          </div>
        </motion.div>

        {/* Right — mini dashboard mockup */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <div className="rounded-[24px] overflow-hidden" style={{
            background: "linear-gradient(135deg, hsl(226 46% 16%), hsl(226 46% 20%))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px -12px rgba(0,0,0,0.5)",
          }}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: "hsl(347 77% 50% / 0.5)" }} />
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: "hsl(45 93% 58% / 0.5)" }} />
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: "hsl(142 71% 45% / 0.5)" }} />
              </div>
              <div className="ml-4 h-2.5 w-24 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-16 p-3 space-y-3 hidden sm:block" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="h-2 w-full rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 p-4 space-y-3">
                <p className="text-xs font-semibold text-white/70">Dashboard</p>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 2px 8px -2px rgba(0,0,0,0.1)" }}>
                    <p className="text-[9px] text-muted-foreground">Efficienza</p>
                    <p className="text-lg font-bold text-foreground">+24%</p>
                  </div>
                  <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 2px 8px -2px rgba(0,0,0,0.1)" }}>
                    <p className="text-[9px] text-muted-foreground">Clienti</p>
                    <p className="text-lg font-bold text-foreground">142</p>
                  </div>
                </div>
                <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.95)" }}>
                  <p className="text-[9px] text-muted-foreground mb-2">Andamento mensile</p>
                  <div className="h-16 flex items-end gap-1">
                    {[40, 55, 45, 65, 50, 70, 60, 80, 68, 75, 85, 78].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: "hsl(217 83% 50% / 0.2)" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Footer columns — light */}
    <div style={{ background: "#F6FBFF" }}>
      <div className="container py-14 md:py-16">
        <div className="container">
          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(218,225,240,0.6) 20%, rgba(218,225,240,0.6) 80%, transparent 100%)" }} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mt-14"
        >
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="NovaFlow" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ maxWidth: "14rem" }}>
              Digitalizzazione su misura per PMI italiane.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-semibold uppercase text-foreground/50 mb-4" style={{ letterSpacing: "0.1em" }}>{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="container pb-8">
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(218,225,240,0.5) 30%, rgba(218,225,240,0.5) 70%, transparent 100%)" }} />
        <p className="mt-6 text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} NovaFlow. Tutti i diritti riservati.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
