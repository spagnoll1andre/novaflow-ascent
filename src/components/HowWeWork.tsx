import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const steps = [
{ num: "01", title: "Analisi", desc: "Studio dei processi e delle esigenze aziendali." },
{ num: "02", title: "Demo", desc: "Dimostrazione personalizzata della soluzione." },
{ num: "03", title: "Analisi approfondita", desc: "Mappatura dettagliata dei requisiti tecnici." },
{ num: "04", title: "Sviluppo", desc: "Configurazione e personalizzazione dei moduli." },
{ num: "05", title: "Go-live", desc: "Rilascio in produzione con affiancamento." },
{ num: "06", title: "Formazione", desc: "Training del team per l'utilizzo quotidiano." },
{ num: "07", title: "Assistenza", desc: "Supporto continuo e miglioramento costante." }];


const HowWeWork = () =>
<section id="automazioni" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    <div className="absolute top-[20%] right-[20%] w-[500px] h-[400px] rounded-full pointer-events-none"
  style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.04) 0%, transparent 70%)" }} />

    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }} className="text-center mb-14">
        <span className="inline-block px-8 py-3 rounded-full text-sm font-semibold uppercase"
      style={{
        color: "#FFFFFF",
        background: "rgba(15,22,43,0.9)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 4px 16px -2px rgba(0,0,0,0.3)",
        letterSpacing: "0.12em"
      }}>
          Come Lavoriamo
        </span>
        <h2 className="mt-8 text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>
          Analisi, Integrazione, Automazione<br className="hidden md:block" /> tutto su misura
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed mx-auto" style={{ maxWidth: "38rem" }}>
          Partiamo da una consulenza gratuita, ascoltando con attenzione le tue esigenze. Un metodo collaudato in 7 step per digitalizzare la tua azienda.
        </p>
      </motion.div>

      <div className="mx-auto relative" style={{ maxWidth: "70%" }}>
        {/* Vertical dashed line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(to bottom, rgba(15,22,43,0.15) 0px, rgba(15,22,43,0.15) 6px, transparent 6px, transparent 14px)" }} />

        <AccordionPrimitive.Root type="single" collapsible className="space-y-4 relative z-10">
          {steps.map((s, i) =>
        <motion.div
          key={s.num}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}>
          
              <AccordionPrimitive.Item value={`step-${i}`} className="border-0">
                <div className="rounded-2xl overflow-hidden transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #0F162B 0%, #16234C 100%)",
              boxShadow: "0 4px 20px -4px rgba(15,22,43,0.3), 0 0 0 0.5px rgba(255,255,255,0.05)"
            }}>
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                  className="flex flex-1 items-center justify-between px-6 py-4 hover:no-underline text-left font-semibold text-base transition-all [&[data-state=open]>svg]:rotate-45"
                  style={{ color: "hsl(217, 83%, 60%)" }}>
                  
                      <span className="text-base font-extralight">{s.title}</span>
                      <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 border-accent-foreground" style={{ color: "rgba(255,255,255,0.5)" }} />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionPrimitive.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-6 pb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {s.desc}
                    </div>
                  </AccordionPrimitive.Content>
                </div>
              </AccordionPrimitive.Item>
            </motion.div>
        )}
        </AccordionPrimitive.Root>
      </div>
    </div>
  </section>;


export default HowWeWork;