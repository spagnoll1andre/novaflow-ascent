import { motion } from "framer-motion";

const logos = ["CASIO", "KPMG", "HYUNDAI", "HEINEKEN", "TOYOTA"];

const PoweredByOdoo = () => (
  <section id="powered-by-odoo" className="scroll-mt-20 py-20 md:py-28" style={{ background: "linear-gradient(180deg, #0F162B 0%, #16234C 100%)" }}>
    <div className="container text-center">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <span className="inline-block px-5 py-2 rounded-full border border-[#3E4455] text-sm font-semibold tracking-wide" style={{ color: "#CECECE" }}>
          POWERED BY ODOO
        </span>
        <p className="mt-6 text-lg md:text-xl font-bold italic max-w-3xl mx-auto" style={{ color: "#CECECE" }}>
          Come partner Odoo, realizziamo soluzioni ERP di eccellenza, customizzate per le tue esigenze
        </p>
      </motion.div>

      <div className="mt-12 flex flex-wrap justify-center items-center gap-10 md:gap-16">
        {logos.map((name) => (
          <span key={name} className="text-2xl md:text-3xl font-bold tracking-wider opacity-50" style={{ color: "#CECECE" }}>
            {name}
          </span>
        ))}
      </div>

      <p className="mt-12 text-sm md:text-base italic max-w-2xl mx-auto" style={{ color: "#3E4455" }}>
        Offriamo la potenza e l'affidabilità di Odoo, il software scelto da oltre 12 milioni di utenti in tutto il mondo, adattato alla tua realtà
      </p>
    </div>
  </section>
);

export default PoweredByOdoo;
