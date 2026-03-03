import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Unplug, Banknote, SlidersHorizontal, HeartHandshake, ShieldCheck } from "lucide-react";

const features = [
{ icon: ShieldCheck, title: "Completezza delle competenze", desc: "Copriamo finanza agevolata, intelligenza artificiale, cybersecurity e gestione dei processi aziendali: competenze rare, riunite in un unico interlocutore." },
{ icon: Layers, title: "Unificazione dei processi", desc: "Un solo strumento per ufficio, magazzino, produzione e vendite. Niente più dati dispersi tra tool separati, niente più inefficienze da riconciliazione manuale." },
{ icon: Banknote, title: "Prezzi accessibili", desc: "Costi chiari, nessuna sorpresa. Il nostro modello permette alle PMI italiane di accedere a tecnologia enterprise a un prezzo realmente sostenibile." },
{ icon: SlidersHorizontal, title: "Personalizzazione reale", desc: "Adattiamo ogni dettaglio alla tua realtà. Partiamo da un'infrastruttura solida collaudata sui nostri progetti passati e costruiamo intorno alle esigenze specifiche di chi lavora nella tua azienda." },
{ icon: HeartHandshake, title: "Assistenza post-vendita", desc: "Supporto continuo anche dopo il go-live. Non ti lasciamo solo: il nostro team è al tuo fianco per ogni aggiornamento, problema o evoluzione." },
{ icon: Unplug, title: "Sicurezza", desc: "Dati protetti con standard enterprise. Backup automatici, crittografia e controllo degli accessi per garantire la massima tranquillità." }];


const WhyChooseUs = () =>
<section id="chi-siamo" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    <div className="container relative z-10">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left — sticky */}
        <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:sticky md:top-32">
        
          <span className="font-semibold uppercase text-primary tracking-[0.12em] text-sm">Perché scegliere noi</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>
            Non solo un fornitore.<br />Il tuo partner tecnologico.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed" style={{ maxWidth: "26rem" }}>
            La differenza tra chi installa un software e chi costruisce una soluzione con te — presente oggi e nei tuoi sviluppi futuri.
          </p>
          <div className="mt-4 h-px w-12" style={{ background: "rgba(218,225,240,0.6)" }} />
          <div className="mt-6">
            <Button
            size="lg"
            className="rounded-full px-8 transition-all duration-200 ease-out hover:-translate-y-[1px]"
            onClick={() => document.querySelector("#contatti")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "linear-gradient(135deg, hsl(217 83% 50%), hsl(217 83% 58%))",
              boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.35), 0 0 0 0.5px hsl(217 83% 50% / 0.15), inset 0 1px 0 0 hsl(217 83% 70% / 0.3)"
            }}>
            
              Richiedi un'analisi gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Right — scrollable features */}
        <div className="flex flex-col gap-0">
          {features.map((f, i) =>
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="py-7 first:pt-0 last:border-b-0" style={{ borderBottom: "1px solid rgba(218,225,240,0.35)" }}>
          
              <div className="flex items-start gap-4">
                <f.icon className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground text-base" style={{ letterSpacing: "-0.01em" }}>{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
        )}
        </div>
      </div>
    </div>
  </section>;


export default WhyChooseUs;