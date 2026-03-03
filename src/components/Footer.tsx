import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/novaflow-logo.jpg";

const cols = [
{ title: "Soluzioni", links: ["ERP Odoo", "Digital Solutions", "Infrastruttura", "Supporto"] },
{ title: "Verticali", links: ["Manifatturiero", "Retail", "Servizi", "E-commerce"] },
{ title: "Azienda", links: ["Chi siamo", "Case Study", "Blog", "Lavora con noi"] },
{ title: "Legale", links: ["Privacy Policy", "Termini di Servizio", "Cookie Policy"] }];


const clients = ["Tada", "Stemau", "Kosmail", "FVR"];

const Footer = () =>
<footer>
    {/* Dark CTA section — 95% width rounded panel */}
    <div className="py-3 md:py-5" style={{ background: "#F6FBFF" }}>
      <div className="relative mx-auto w-[95%] rounded-[32px] md:rounded-[40px] py-10 md:py-14 overflow-hidden"
    style={{
      background: "linear-gradient(180deg, #0F162B 0%, #16234C 100%)",
      boxShadow: "0 24px 80px -12px hsla(226,46%,11%,0.35), 0 0 0 0.5px rgba(255,255,255,0.05)"
    }}>
        {/* Subtle noise / vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 50%, hsla(217,83%,50%,0.06) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.06) 50%, transparent 90%)" }} />

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="font-semibold uppercase tracking-[0.12em] text-sm" style={{ color: "hsl(217 83% 60%)" }}>Inizia oggi</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium" style={{ color: "#FFFFFF", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
              Pronto a semplificare la tua azienda?
            </h2>
            <p className="mt-5 leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "28rem" }}>
              Scopri come NovaFlow può trasformare i tuoi processi in un unico gestionale intelligente. L'analisi iniziale è gratuita e senza impegno.
            </p>

            {/* Client chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <span className="text-primary-foreground text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Già al fianco di:</span>
              {clients.map((c) =>
            <span key={c} className="px-3 py-1 rounded-full font-medium text-primary-foreground text-sm" style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>{c}</span>
            )}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
              size="lg"
              className="rounded-full px-8 transition-all duration-200 ease-out hover:-translate-y-[1px]"
              onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "linear-gradient(180deg, hsl(217 83% 62%), hsl(217 83% 50%))",
                color: "#fff",
                border: "1px solid hsl(217 83% 60% / 0.3)",
                boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.4), inset 0 1px 0 0 hsl(217 83% 75% / 0.4)"
              }}>
              
                Richiedi un'analisi gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
              size="lg"
              className="rounded-full px-8 transition-all duration-200 ease-out hover:-translate-y-[1px]"
              onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "rgba(255,255,255,0.95)",
                color: "#0F162B",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 2px 12px -2px rgba(0,0,0,0.2), inset 0 1px 0 0 rgba(255,255,255,1)",
                fontWeight: 600
              }}>
              
                Prenota una demo
              </Button>
            </div>
          </motion.div>

          {/* Right — mini dashboard mockup */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="rounded-[24px] overflow-hidden" style={{
            background: "linear-gradient(135deg, hsl(226 46% 16%), hsl(226 46% 20%))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px -12px rgba(0,0,0,0.5)"
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
                  {[1, 2, 3, 4, 5].map((n) =>
                <div key={n} className="h-2 w-full rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
                )}
                </div>

                {/* Content */}
                <div className="flex-1 p-4 space-y-3">
                  <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>Dashboard</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 2px 8px -2px rgba(0,0,0,0.1)" }}>
                      <p className="text-[9px]" style={{ color: "#6B7280" }}>Efficienza</p>
                      <p className="text-lg font-bold" style={{ color: "#0F162B" }}>+24%</p>
                    </div>
                    <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 2px 8px -2px rgba(0,0,0,0.1)" }}>
                      <p className="text-[9px]" style={{ color: "#6B7280" }}>Clienti</p>
                      <p className="text-lg font-bold" style={{ color: "#0F162B" }}>142</p>
                    </div>
                  </div>
                  <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.95)" }}>
                    <p className="text-[9px] mb-2" style={{ color: "#6B7280" }}>Andamento mensile</p>
                    <div className="h-16 flex items-end gap-1">
                      {[40, 55, 45, 65, 50, 70, 60, 80, 68, 75, 85, 78].map((h, i) =>
                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: "hsl(217 83% 50% / 0.2)" }} />
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
        className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mt-14">
        
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="NovaFlow" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ maxWidth: "14rem" }}>
              Digitalizzazione su misura per PMI italiane.
            </p>
          </div>
          {cols.map((col) =>
        <div key={col.title}>
              <h4 className="text-[11px] font-semibold uppercase text-foreground/50 mb-4" style={{ letterSpacing: "0.1em" }}>{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) =>
            <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out">{link}</a>
                  </li>
            )}
              </ul>
            </div>
        )}
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
  </footer>;


export default Footer;