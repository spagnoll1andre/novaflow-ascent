import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/novaflow-logo.jpg";

const cols = [
  { title: "Soluzioni", links: ["ERP Odoo", "Digital Solutions", "Infrastruttura", "Supporto"] },
  { title: "Verticali", links: ["Manifatturiero", "Retail", "Servizi", "E-commerce"] },
  { title: "Azienda", links: ["Chi siamo", "Case Study", "Blog", "Lavora con noi"] },
  { title: "Legale", links: ["Privacy Policy", "Termini di Servizio", "Cookie Policy"] },
];

const Footer = () => (
  <footer style={{ background: "#F6FBFF" }}>
    {/* Brand moment */}
    <div className="relative overflow-hidden py-20 md:py-28">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-extrabold leading-none"
          style={{ color: "rgba(218,225,240,0.18)", letterSpacing: "-0.04em" }}>
          NovaFlow
        </span>
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>
            Pronto a trasformare la tua azienda?
          </h2>
          <p className="mt-4 text-muted-foreground mx-auto" style={{ maxWidth: "28rem" }}>
            Inizia oggi il tuo percorso di digitalizzazione con un team dedicato.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="rounded-full px-8 transition-all duration-[220ms] ease-out hover:-translate-y-[1px]"
              onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "linear-gradient(135deg, hsl(217 83% 50%), hsl(217 83% 58%))",
                boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.35), 0 0 0 0.5px hsl(217 83% 50% / 0.15), inset 0 1px 0 0 hsl(217 83% 70% / 0.3)",
              }}
            >
              Richiedi un'analisi gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Hairline divider */}
    <div className="container">
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(218,225,240,0.6) 20%, rgba(218,225,240,0.6) 80%, transparent 100%)" }} />
    </div>

    {/* Columns */}
    <div className="container py-14 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8"
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
  </footer>
);

export default Footer;
