import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "Tempo perso in processi manuali e ripetitivi",
  "Errori manuali che compromettono dati e decisioni",
  "Costi nascosti dovuti a strumenti frammentati",
];

const solutions = [
  "Controllo totale su ogni area aziendale",
  "Automazione intelligente dei flussi operativi",
  "Efficienza misurabile e scalabile dal giorno uno",
];

const CARD = {
  background: "rgba(255,255,255,0.7)",
  boxShadow: "0 8px 40px -8px hsla(226,46%,11%,0.07), 0 1px 2px 0 hsla(226,46%,11%,0.02), inset 0 1px 0 0 rgba(255,255,255,0.9)",
  border: "1px solid rgba(218,225,240,0.5)",
};

const ProblemSolution = () => (
  <section id="problema-soluzione" className="scroll-mt-24 py-20 md:py-28 relative overflow-hidden" style={{ background: "#F6FBFF" }}>
    {/* Ambient lights */}
    <div className="absolute top-0 left-[40%] w-[600px] h-[400px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.04) 0%, transparent 70%)" }} />
    <div className="absolute bottom-0 right-[30%] w-[500px] h-[350px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, hsla(230,60%,60%,0.03) 0%, transparent 70%)" }} />

    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.025em", lineHeight: "1.15" }}>Il problema. La soluzione.</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="rounded-[28px] p-7 space-y-5" style={CARD}>
          <h3 className="text-lg font-bold text-destructive">Senza NovaFlow</h3>
          {problems.map((p) => (
            <div key={p} className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-muted-foreground" style={{ maxWidth: "32rem" }}>{p}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="rounded-[28px] p-7 space-y-5" style={CARD}>
          <h3 className="text-lg font-bold text-primary">Con NovaFlow</h3>
          {solutions.map((s) => (
            <div key={s} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground" style={{ maxWidth: "32rem" }}>{s}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
