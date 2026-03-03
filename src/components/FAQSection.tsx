import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
{ q: "Come unificate i processi aziendali?", a: "Implementiamo Odoo come piattaforma unica che integra vendite, magazzino, contabilità e HR, eliminando la frammentazione tra strumenti diversi." },
{ q: "Quali sono i costi e i tempi di implementazione?", a: "Offriamo piani trasparenti con costi definiti in fase di analisi. I tempi variano da 4 a 12 settimane in base alla complessità del progetto." },
{ q: "Che tipo di supporto offrite dopo il go-live?", a: "Forniamo assistenza continuativa con SLA garantiti, account manager dedicato, formazione periodica e aggiornamenti regolari della piattaforma." },
{ q: "Come gestite privacy e sicurezza dei dati?", a: "I dati sono protetti con crittografia enterprise, backup automatici, accesso basato su ruoli e piena conformità GDPR." }];


const FAQSection = () =>
<section id="faq" className="scroll-mt-24 relative overflow-hidden py-3 md:py-5" style={{ background: "#F6FBFF" }}>
    <div className="relative mx-auto w-[95%] rounded-[32px] md:rounded-[40px] py-8 md:py-10 overflow-hidden"
  style={{
    background: "linear-gradient(180deg, #0F162B 0%, #0F162B 100%)",
    boxShadow: "0 32px 100px -16px hsla(226,46%,11%,0.4), 0 0 0 0.5px rgba(255,255,255,0.05)"
  }}>
      <div className="absolute inset-0 pointer-events-none"
    style={{ background: "radial-gradient(ellipse 50% 40% at 50% 15%, hsla(217,70%,50%,0.08) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay"
    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.06) 50%, transparent 95%)" }} />

      <div className="container max-w-3xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block px-5 py-1.5 rounded-full text-xs font-semibold uppercase"
        style={{
          color: "#FFFFFF",
          background: "rgba(255,255,255,0.10)",
          border: "1px solid rgba(255,255,255,0.20)",
          letterSpacing: "0.10em"
        }}>
            FAQ
          </span>
          <h2 className="mt-8 text-3xl md:text-4xl font-bold" style={{ color: "#FFFFFF", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
            Domande Frequenti
          </h2>
          <p className="mt-5 text-base leading-relaxed mx-auto font-extralight text-primary-foreground" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "30rem" }}>
            Le risposte alle domande più comuni. Non trovi quello che cerchi? Contattaci direttamente.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((f, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}>
          
              <AccordionItem value={`item-${i}`} className="border-0">
                <div className="border-b transition-colors duration-200"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <AccordionTrigger
                className="text-left font-medium hover:no-underline py-6 text-base leading-relaxed transition-colors duration-200"
                style={{ color: "#FFFFFF" }}>
                
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm pb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "34rem" }}>
                    {f.a}
                  </AccordionContent>
                </div>
              </AccordionItem>
            </motion.div>
        )}
        </Accordion>

      </div>
    </div>
  </section>;


export default FAQSection;