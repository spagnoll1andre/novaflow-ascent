import { motion } from "framer-motion";
import { Layers, Unplug, Banknote, Palette, HeartHandshake, ShieldCheck } from "lucide-react";

const features = [
  { icon: Layers, title: "Completezza", desc: "Un'unica piattaforma per tutti i processi aziendali." },
  { icon: Unplug, title: "Unificazione", desc: "Elimina silos informativi con un sistema integrato." },
  { icon: Banknote, title: "Prezzi accessibili", desc: "Costi chiari, nessuna sorpresa, ROI misurabile." },
  { icon: Palette, title: "Personalizzazione", desc: "Ogni modulo adattato al tuo modo di lavorare." },
  { icon: HeartHandshake, title: "Assistenza post-vendita", desc: "Supporto continuo anche dopo il go-live." },
  { icon: ShieldCheck, title: "Sicurezza", desc: "Dati protetti con standard enterprise." },
];

const cardBase = {
  background: "rgba(255,255,255,0.85)",
  boxShadow: "0 2px 20px -4px hsla(226,46%,11%,0.06), 0 1px 2px 0 hsla(226,46%,11%,0.02)",
  borderColor: "hsla(218,53%,90%,0.7)",
};

const WhyChooseUs = () => (
  <section id="perche-noi" className="scroll-mt-20 py-20 md:py-28 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.04) 0%, transparent 70%)" }} />
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Perché Scegliere Noi</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="rounded-[24px] border p-5 transition-all duration-[220ms] ease-out hover:-translate-y-[2px] hover:shadow-[0_6px_32px_-4px_hsla(226,46%,11%,0.1)] hover:border-primary/15"
            style={cardBase}
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3.5">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-[15px]">{f.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
