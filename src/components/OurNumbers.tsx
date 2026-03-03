import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Anni di esperienza", desc: "Al fianco delle PMI italiane nel percorso di digitalizzazione.", variant: "primary" as const, span: 1 },
  { value: "30+", label: "Clienti PMI seguiti", desc: "", variant: "dark" as const, span: 2 },
  { value: "50+", label: "Progetti completati", desc: "Soluzioni su misura consegnate e operative.", variant: "light" as const, span: 1 },
  { value: "150+", label: "Moduli Odoo attivi", desc: "Configurazioni specializzate per ogni area aziendale.", variant: "accent" as const, span: 1 },
  { value: "1.000+", label: "Ore di formazione", desc: "Erogate ai team dei nostri clienti per garantire piena autonomia.", variant: "light" as const, span: 1 },
];

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    background: "linear-gradient(135deg, hsl(217 83% 50%), hsl(217 83% 58%))",
    color: "#fff",
    border: "none",
  },
  dark: {
    background: "linear-gradient(135deg, hsl(226 46% 11%), hsl(226 40% 18%))",
    color: "#fff",
    border: "none",
  },
  accent: {
    background: "linear-gradient(180deg, hsl(217 83% 96%), hsl(217 83% 93%))",
    color: "hsl(226 46% 11%)",
    border: "1px solid rgba(218,225,240,0.5)",
  },
  light: {
    background: "rgba(255,255,255,0.7)",
    color: "hsl(226 46% 11%)",
    border: "1px solid rgba(218,225,240,0.5)",
  },
};

const OurNumbers = () => (
  <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="text-xs font-semibold uppercase text-primary tracking-[0.12em]">I nostri numeri</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>
          Noi, raccontati dai nostri numeri
        </h2>
        <p className="mt-4 text-muted-foreground mx-auto" style={{ maxWidth: "34rem" }}>
          Fatti concreti e tangibili che riassumono la nostra esperienza, la base per iniziare a conoscerci meglio e costruire un rapporto di fiducia che duri nel tempo.
        </p>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {/* Row 1: 1 + 2 span */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-[24px] p-6 md:p-8 transition-all duration-200 ease-out hover:-translate-y-[2px]"
          style={{ ...variantStyles.primary, boxShadow: "0 8px 32px -8px hsl(217 83% 50% / 0.25)" }}
        >
          <p className="text-4xl md:text-5xl font-extrabold leading-tight">5+</p>
          <p className="mt-3 font-bold text-sm">Anni di esperienza</p>
          <p className="mt-1 text-sm opacity-80">Al fianco delle PMI italiane nel percorso di digitalizzazione.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          className="rounded-[24px] p-6 md:p-8 sm:col-span-1 lg:col-span-2 transition-all duration-200 ease-out hover:-translate-y-[2px]"
          style={{ ...variantStyles.dark, boxShadow: "0 8px 32px -8px hsla(226,46%,11%,0.2)" }}
        >
          <p className="text-4xl md:text-5xl font-extrabold leading-tight">30+</p>
          <p className="mt-3 font-bold text-sm">Clienti PMI seguiti</p>
        </motion.div>

        {/* Row 2: 3 equal */}
        {[
          { value: "50+", label: "Progetti completati", desc: "Soluzioni su misura consegnate e operative.", v: "light" },
          { value: "150+", label: "Moduli Odoo attivi", desc: "Configurazioni specializzate per ogni area aziendale.", v: "accent" },
          { value: "1.000+", label: "Ore di formazione", desc: "Erogate ai team dei nostri clienti per garantire piena autonomia.", v: "light" },
        ].map((s, i) => (
          <motion.div
            key={s.value}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.05 }}
            className="rounded-[24px] p-6 md:p-8 transition-all duration-200 ease-out hover:-translate-y-[2px]"
            style={variantStyles[s.v]}
          >
            <p className="text-4xl md:text-5xl font-extrabold leading-tight" style={s.v === "accent" ? { color: "hsl(217 83% 50%)" } : undefined}>
              {s.value}
            </p>
            <p className="mt-3 font-bold text-sm">{s.label}</p>
            {s.desc && <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OurNumbers;
