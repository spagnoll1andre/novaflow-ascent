import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CARD = {
  background: "rgba(255,255,255,0.7)",
  boxShadow: "0 8px 32px -8px hsla(226,46%,11%,0.08), 0 1px 2px 0 hsla(226,46%,11%,0.02), inset 0 1px 0 0 rgba(255,255,255,0.9)",
  border: "1px solid rgba(218,225,240,0.45)",
};

const ContactForm = () => (
  <section id="contatti" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    {/* Ambient lights */}
    <div className="absolute top-[-10%] left-[40%] w-[600px] h-[400px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.04) 0%, transparent 70%)" }} />
    <div className="absolute bottom-[10%] right-[25%] w-[400px] h-[300px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(230,60%,55%,0.03) 0%, transparent 70%)" }} />

    <div className="container max-w-2xl relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>Contattaci</h2>
        <p className="mt-4 text-muted-foreground">Compila il form e ti ricontatteremo entro 24 ore.</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-5 rounded-[24px] p-8"
        style={CARD}
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

        <Button type="submit" size="lg" className="rounded-full w-full sm:w-auto px-10 transition-all duration-200 ease-out hover:-translate-y-[1px]"
          style={{
            background: "linear-gradient(135deg, hsl(217 83% 50%), hsl(217 83% 58%))",
            boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.35), inset 0 1px 0 0 hsl(217 83% 70% / 0.3)",
          }}>
          Invia richiesta
        </Button>
      </motion.form>
    </div>
  </section>
);

export default ContactForm;
