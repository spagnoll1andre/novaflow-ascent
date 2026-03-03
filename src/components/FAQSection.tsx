import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Come unificate i processi aziendali?", a: "Implementiamo Odoo come piattaforma unica che integra vendite, magazzino, contabilità e HR, eliminando la frammentazione tra strumenti diversi." },
  { q: "Quali sono i costi e i tempi di implementazione?", a: "Offriamo piani trasparenti con costi definiti in fase di analisi. I tempi variano da 4 a 12 settimane in base alla complessità del progetto." },
  { q: "Che tipo di supporto offrite dopo il go-live?", a: "Forniamo assistenza continuativa con SLA garantiti, account manager dedicato, formazione periodica e aggiornamenti regolari della piattaforma." },
  { q: "Come gestite privacy e sicurezza dei dati?", a: "I dati sono protetti con crittografia enterprise, backup automatici, accesso basato su ruoli e piena conformità GDPR." },
];

const FAQSection = () => (
  <section id="faq" className="scroll-mt-20 py-20 md:py-28" style={{ background: "linear-gradient(180deg, #0F162B 0%, #16234C 100%)" }}>
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-block px-5 py-2 rounded-full border border-[#3E4455] text-sm font-semibold" style={{ color: "#CECECE" }}>FAQ</span>
        <h2 className="mt-6 text-3xl md:text-4xl font-bold" style={{ color: "#CECECE" }}>Frequently Asked Questions</h2>
        <p className="mt-4 text-base" style={{ color: "#3E4455" }}>
          Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#3E4455]/40">
            <AccordionTrigger className="text-left font-medium hover:no-underline py-5" style={{ color: "#CECECE" }}>
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm pb-5" style={{ color: "#3E4455" }}>
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
