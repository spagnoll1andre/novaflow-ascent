import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
{
  date: "10 GEN 2026",
  tag: "ERP & GESTIONALE",
  tagColor: "hsl(217 83% 50%)",
  title: "Come scegliere un ERP per la tua PMI",
  desc: "Non si tratta di adattare l'azienda al software, ma di modellare il software sull'azienda. Un ERP su misura elimina silos informativi e inefficienze operative.",
  bg: "linear-gradient(135deg, hsl(226 46% 14%), hsl(226 46% 22%))"
},
{
  date: "28 GEN 2026",
  tag: "AUTOMAZIONI",
  tagColor: "hsl(142 71% 45%)",
  title: "Automazioni aziendali: da dove iniziare",
  desc: "Processi manuali ripetitivi, informazioni disperse, report tardivi: i cinque segnali da non ignorare prima che il problema si aggravi.",
  bg: "linear-gradient(135deg, hsl(160 40% 16%), hsl(160 40% 24%))"
},
{
  date: "14 FEB 2026",
  tag: "ODOO",
  tagColor: "hsl(270 60% 60%)",
  title: "Odoo per aziende manifatturiere: vantaggi reali",
  desc: "Nel 2026 le soluzioni integrate nei gestionali non sono più un vantaggio futuro: sono un alleato concreto per la gestione quotidiana.",
  bg: "linear-gradient(135deg, hsl(270 30% 14%), hsl(270 30% 22%))"
}];


const BlogSection = () =>
<section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-block font-semibold tracking-wide uppercase text-primary/70 text-sm" style={{ letterSpacing: "0.08em" }}>BLOG</span>
        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>
          Gli ultimi aggiornamenti
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {posts.map((p, i) =>
      <motion.a
        key={p.title}
        href="#"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.07 }}
        className="rounded-[24px] p-6 flex flex-col justify-between min-h-[408px] group transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_40px_-8px_hsla(226,46%,11%,0.3)]"
        style={{ background: p.bg }}>
        
            <div>
              <p className="text-[11px] font-medium text-white/50 uppercase tracking-wider">{p.date}</p>
              <span
            className="inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
            style={{ background: `${p.tagColor}22`, color: p.tagColor, border: `1px solid ${p.tagColor}33` }}>
            
                {p.tag}
              </span>
              <h3 className="mt-4 text-white leading-snug text-xl font-medium">{p.title}</h3>
            </div>
            <div>
              <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all duration-200" style={{ color: p.tagColor }}>
                Leggi di più <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.a>
      )}
      </div>
    </div>
  </section>;


export default BlogSection;