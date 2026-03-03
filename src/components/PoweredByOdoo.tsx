import { motion } from "framer-motion";
import logoCasio from "@/assets/logo-casio.png";
import logoKpmg from "@/assets/logo-kpmg.png";
import logoHyundai from "@/assets/logo-hyundai.png";
import logoHeineken from "@/assets/logo-heineken.png";
import logoToyota from "@/assets/logo-toyota.png";

const logos = [
  { name: "Casio", src: logoCasio },
  { name: "KPMG", src: logoKpmg },
  { name: "Hyundai", src: logoHyundai },
  { name: "Heineken", src: logoHeineken },
  { name: "Toyota", src: logoToyota },
];

// Duplicate for seamless loop
const doubled = [...logos, ...logos];

const PoweredByOdoo = () => (
  <section id="powered-by-odoo" className="scroll-mt-24 relative overflow-hidden py-6 md:py-10" style={{ background: "#F6FBFF" }}>
    <div className="relative mx-auto w-[95%] rounded-[32px] md:rounded-[40px] py-12 md:py-16 overflow-hidden"
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
          <span className="inline-block px-8 py-3 rounded-full text-sm font-semibold uppercase"
            style={{
              color: "#FFFFFF",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 4px 16px -2px rgba(0,0,0,0.4), inset 0 1px 0 0 rgba(255,255,255,0.2), inset 0 -1px 0 0 rgba(0,0,0,0.15)",
              letterSpacing: "0.12em",
            }}>
            POWERED BY ODOO
          </span>
          <p className="mt-8 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#FFFFFF", letterSpacing: "-0.01em" }}>
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
                className="h-10 md:h-12 w-auto object-contain shrink-0"
                style={{ opacity: 0.5, filter: "brightness(1.5) grayscale(0.2)" }}
              />
            ))}
          </motion.div>
        </div>

        <p className="mt-10 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#FFFFFF", maxWidth: "38rem" }}>
          Offriamo la potenza e l'affidabilità di Odoo, il software scelto da oltre 12 milioni di utenti in tutto il mondo, adattato alla tua realtà
        </p>
      </div>
    </div>
  </section>
);

export default PoweredByOdoo;
