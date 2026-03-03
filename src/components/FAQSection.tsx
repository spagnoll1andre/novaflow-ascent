import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Come unificate i processi aziendali?", a: "Implementiamo Odoo come piattaforma unica che integra vendite, magazzino, contabilità e HR, eliminando la frammentazione tra strumenti diversi." },
  { q: "Quali sono i costi e i tempi di implementazione?", a: "Offriamo piani trasparenti con costi definiti in fase di analisi. I tempi variano da 4 a 12 settimane in base alla complessità del progetto." },
  { q: "Che tipo di supporto offrite dopo il go-live?", a: "Forniamo assistenza continuativa con SLA garantiti, account manager dedicato, formazione periodica e aggiornamenti regolari della piattaforma." },
  { q: "Come gestite privacy e sicurezza dei dati?", a: "I dati sono protetti con crittografia enterprise, backup automatici, accesso basato su ruoli e piena conformità GDPR." },
];

const FAQSection = () => (
  <section id="faq" className="scroll-mt-20 relative overflow-hidden">
    {/* Elegant transition from light */}
    <div className="h-24 md:h-32" style={{ background: "linear-gradient(180deg, #F6FBFF 0%, #0F162B 100%)" }} />

    <div className="relative py-20 md:py-28" style={{ background: "linear-gradient(180deg, #0F162B 0%, #16234C 100%)" }}>
      {/* Central halo */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, hsla(217,70%,40%,0.12) 0%, transparent 70%)" }} />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(10,14,28,0.5) 100%)" }} />
      {/* Noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />

      <div className="container max-w-3xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block px-6 py-2.5 rounded-full border text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#CECECE", borderColor: "rgba(206,206,206,0.15)", background: "rgba(206,206,206,0.04)" }}>
            FAQ
          </span>
          <h2 className="mt-8 text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#E0E0E0" }}>
            Domande Frequenti
          </h2>
          <p className="mt-5 text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            Le risposte alle domande più comuni. Non trovi quello che cerchi? Contattaci direttamente.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-1">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <AccordionItem value={`item-${i}`} className="border-0">
                <div className="rounded-2xl transition-colors duration-200"
                  style={{ borderBottom: "1px solid rgba(206,206,206,0.08)" }}>
                  <AccordionTrigger
                    className="text-left font-medium hover:no-underline py-6 px-1 text-base leading-relaxed transition-colors duration-200"
                    style={{ color: "#D4D4D4" }}
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm pb-6 px-1 leading-relaxed" style={{ color: "#8B919E" }}>
                    {f.a}
                  </AccordionContent>
                </div>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>

    {/* Elegant transition to light */}
    <div className="h-24 md:h-32" style={{ background: "linear-gradient(180deg, #16234C 0%, #F6FBFF 100%)" }} />
  </section>
);

export default FAQSection;
