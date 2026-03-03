import { motion } from "framer-motion";

const logos = ["CASIO", "KPMG", "HYUNDAI", "HEINEKEN", "TOYOTA"];

const PoweredByOdoo = () => (
  <section id="powered-by-odoo" className="scroll-mt-20 relative overflow-hidden">
    {/* Elegant transition from light */}
    <div className="h-24 md:h-32" style={{ background: "linear-gradient(180deg, #F6FBFF 0%, #0F162B 100%)" }} />

    <div className="relative py-20 md:py-28" style={{ background: "linear-gradient(180deg, #0F162B 0%, #16234C 100%)" }}>
      {/* Central halo */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, hsla(217,70%,40%,0.12) 0%, transparent 70%)" }} />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(10,14,28,0.5) 100%)" }} />
      {/* Noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />

      <div className="container text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-6 py-2.5 rounded-full border text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#CECECE", borderColor: "rgba(206,206,206,0.15)", background: "rgba(206,206,206,0.04)" }}>
            POWERED BY ODOO
          </span>
          <p className="mt-8 text-xl md:text-2xl font-bold italic max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#CECECE" }}>
            Come partner Odoo, realizziamo soluzioni ERP di eccellenza, customizzate per le tue esigenze
          </p>
        </motion.div>

        {/* Logos */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="text-xl md:text-2xl font-bold tracking-[0.25em] select-none transition-opacity duration-300 hover:opacity-60"
              style={{ color: "rgba(206,206,206,0.35)" }}
            >
              {name}
            </motion.span>
          ))}
        </div>

        <p className="mt-14 text-sm md:text-base italic max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#6B7280" }}>
          Offriamo la potenza e l'affidabilità di Odoo, il software scelto da oltre 12 milioni di utenti in tutto il mondo, adattato alla tua realtà
        </p>
      </div>
    </div>

    {/* Elegant transition to light */}
    <div className="h-24 md:h-32" style={{ background: "linear-gradient(180deg, #16234C 0%, #F6FBFF 100%)" }} />
  </section>
);

export default PoweredByOdoo;
