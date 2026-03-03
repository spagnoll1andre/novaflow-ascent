import { motion } from "framer-motion";
import logoHyundai from "@/assets/logo-hyundai.png";
import logoCasio from "@/assets/logo-casio.png";
import logoKpmg from "@/assets/logo-kpmg.png";
import logoHeineken from "@/assets/logo-heineken.png";
import logoMitsubishi from "@/assets/logo-mitsubishi.png";
import logoShell from "@/assets/logo-shell.png";
import logoIbm from "@/assets/logo-ibm.png";
import logoMastercard from "@/assets/logo-mastercard.png";
import logoMizuno from "@/assets/logo-mizuno.png";
import logoAeon from "@/assets/logo-aeon.png";
import logoMegamarket from "@/assets/logo-megamarket.png";

const logos = [
  { name: "Hyundai", src: logoHyundai },
  { name: "Casio", src: logoCasio },
  { name: "KPMG", src: logoKpmg },
  { name: "Heineken", src: logoHeineken },
  { name: "Mitsubishi", src: logoMitsubishi },
  { name: "Shell", src: logoShell },
  { name: "IBM", src: logoIbm },
  { name: "Mizuno", src: logoMizuno },
  { name: "Aeon", src: logoAeon },
  { name: "Mega Market", src: logoMegamarket },
  { name: "Mastercard", src: logoMastercard },
];

// Duplicate for seamless loop
const doubled = [...logos, ...logos];

const PoweredByOdoo = () => (
  <section id="powered-by-odoo" className="scroll-mt-24 relative overflow-hidden py-3 md:py-5" style={{ background: "#F6FBFF" }}>
    <div className="relative mx-auto w-[95%] rounded-[32px] md:rounded-[40px] py-8 md:py-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0F162B 0%, #16234C 100%)",
        boxShadow: "0 24px 80px -12px hsla(226,46%,11%,0.35), 0 0 0 0.5px rgba(255,255,255,0.05)",
      }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, hsla(217,70%,45%,0.12) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(10,14,28,0.5) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.06) 50%, transparent 90%)" }} />

      <div className="container text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-8 py-2 rounded-full text-sm font-semibold uppercase"
            style={{
              color: "#FFFFFF",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 4px 16px -2px rgba(0,0,0,0.4), inset 0 1px 0 0 rgba(255,255,255,0.2), inset 0 -1px 0 0 rgba(0,0,0,0.15)",
              letterSpacing: "0.12em",
            }}>
            POWERED BY ODOO
          </span>
          <p className="mt-8 text-xl md:text-2xl font-medium mx-auto leading-relaxed"
            style={{ color: "#FFFFFF", letterSpacing: "-0.01em", maxWidth: "80%" }}>
            Come partner Odoo, realizziamo soluzioni ERP di eccellenza, customizzate per le tue esigenze
          </p>
        </motion.div>

        {/* Infinite scrolling logos */}
        <div className="mt-10 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #0F162B 0%, transparent 100%)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: "linear-gradient(270deg, #16234C 0%, transparent 100%)" }} />

          <motion.div
            className="flex items-center gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ width: "fit-content" }}
          >
            {doubled.map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                className="h-14 md:h-16 w-auto object-contain shrink-0"
                style={{ opacity: 0.85 }}
              />
            ))}
          </motion.div>
        </div>

        <p className="mt-10 text-xl md:text-2xl font-medium mx-auto leading-relaxed"
          style={{ color: "#FFFFFF", letterSpacing: "-0.01em", maxWidth: "80%" }}>
          Offriamo la potenza e l'affidabilità di Odoo, il software scelto da oltre 12 milioni di utenti in tutto il mondo, adattato alla tua realtà
        </p>
      </div>
    </div>
  </section>
);

export default PoweredByOdoo;
