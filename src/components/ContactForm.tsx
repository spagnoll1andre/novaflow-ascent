import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm = () => (
  <section id="contatti" className="scroll-mt-20 py-20 md:py-28 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.04) 0%, transparent 70%)" }} />
    <div className="container max-w-2xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contattaci</h2>
        <p className="mt-4 text-muted-foreground">Compila il form e ti ricontatteremo entro 24 ore.</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-5 rounded-[28px] border p-8"
        style={{ background: "rgba(255,255,255,0.85)", boxShadow: "0 4px 32px -4px hsla(226,46%,11%,0.08)", borderColor: "hsla(218,53%,90%,0.7)" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome *</Label>
            <Input id="nome" placeholder="Mario Rossi" className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="azienda">Azienda *</Label>
            <Input id="azienda" placeholder="Azienda S.r.l." className="rounded-xl" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="mario@azienda.it" className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefono">Telefono (opz.)</Label>
            <Input id="telefono" placeholder="+39 333 1234567" className="rounded-xl" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Settore</Label>
          <Select>
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="Seleziona settore" />
            </SelectTrigger>
            <SelectContent>
              {["Manifatturiero", "Retail", "Servizi", "E-commerce", "Altro"].map((s) => (
                <SelectItem key={s} value={s.toLowerCase()}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="messaggio">Messaggio</Label>
          <Textarea id="messaggio" placeholder="Descrivici le tue esigenze..." className="rounded-xl min-h-[120px]" />
        </div>

        <Button type="submit" size="lg" className="rounded-full w-full sm:w-auto px-10 shadow-[0_2px_16px_0_hsl(217_83%_50%/0.25)] hover:shadow-[0_4px_24px_0_hsl(217_83%_50%/0.35)] transition-all duration-200"
          style={{ background: "linear-gradient(135deg, hsl(217 83% 50%), hsl(217 83% 58%))" }}>
          Invia richiesta
        </Button>
      </motion.form>
    </div>
  </section>
);

export default ContactForm;
