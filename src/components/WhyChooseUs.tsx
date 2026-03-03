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

const WhyChooseUs = () => (
  <section id="perche-noi" className="scroll-mt-20 py-20 md:py-28 bg-secondary/30">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Perché Scegliere Noi</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4"
          >
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
