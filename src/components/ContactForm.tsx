import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm = () => (
  <section id="contatti" className="scroll-mt-20 py-20 md:py-28 bg-background">
    <div className="container max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contattaci</h2>
        <p className="mt-4 text-muted-foreground">Compila il form e ti ricontatteremo entro 24 ore.</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-5"
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

        <Button type="submit" size="lg" className="rounded-full w-full sm:w-auto px-10">
          Invia richiesta
        </Button>
      </motion.form>
    </div>
  </section>
);

export default ContactForm;
