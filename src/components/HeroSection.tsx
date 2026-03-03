import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Layers, TrendingUp, Clock, CheckCircle2, Award } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const dashRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: dashRef,
    offset: ["start end", "end start"],
  });

  const dashY = useTransform(scrollYProgress, [0, 0.5], [120, 0]);
  const dashOpacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const dashScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  return (
    <section id="hero" className="scroll-mt-24 pt-28 pb-8 md:pt-36 md:pb-12 relative overflow-hidden"
      style={{ background: "#F6FBFF" }}>
      {/* Ambient light layers */}
      <div className="absolute top-[-20%] left-[30%] w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,50%,0.05) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsla(217,83%,70%,0.04) 0%, transparent 70%)" }} />

      <div className="container relative z-10">
        {/* Centered text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow pill */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/20 bg-primary/5 text-primary"
              style={{ letterSpacing: "0.04em" }}>
              <ShieldCheck className="h-3.5 w-3.5" />
              Partner Odoo • ERP & Automazioni
            </span>
          </motion.div>

          <h1 className="mt-6 text-[2.65rem] md:text-[3.3rem] lg:text-[3.7rem] font-extrabold text-foreground leading-[1.08]"
            style={{ letterSpacing: "-0.025em" }}>
            Digitalizza la tua azienda con{" "}
            <span className="text-primary">NovaFlow</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mx-auto" style={{ maxWidth: "32rem" }}>
            Soluzioni ERP e digitali su misura per PMI italiane. Automatizza, controlla, cresci.
          </p>

          {/* Mini benefits */}
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { icon: Layers, text: "Controllo totale" },
              { icon: Zap, text: "Automazione intelligente" },
              { icon: TrendingUp, text: "Scalabilità illimitata" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-sm text-foreground/75">
                <b.icon className="h-4 w-4 text-primary/70 shrink-0" />
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 transition-all duration-200 ease-out hover:-translate-y-[1px]"
              onClick={() => scrollTo("#contatti")}
              style={{
                background: "linear-gradient(180deg, hsl(217 83% 62%), hsl(217 83% 50%))",
                boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.4), 0 0 0 0.5px hsl(217 83% 50% / 0.2), inset 0 1px 0 0 hsl(217 83% 75% / 0.4)",
                border: "1px solid hsl(217 83% 60% / 0.3)",
              }}>
              Richiedi un'analisi gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline"
              className="rounded-full px-8 transition-all duration-200 ease-out hover:-translate-y-[1px]"
              onClick={() => scrollTo("#contatti")}
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(218,225,240,0.6)",
                boxShadow: "0 2px 12px -2px hsla(226,46%,11%,0.08), inset 0 1px 0 0 rgba(255,255,255,0.9)",
                color: "hsl(226 46% 20%)",
              }}>
              Prenota una demo
            </Button>
          </div>

          {/* Trust meta-line */}
          <div className="mt-5 flex flex-wrap justify-center items-center gap-5 text-xs text-muted-foreground/70">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary/50" />
              Risposta entro 24h
            </span>
            <span className="hidden sm:block h-3 w-px bg-border/60" />
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary/50" />
              Analisi gratuita
            </span>
            <span className="hidden sm:block h-3 w-px bg-border/60" />
            <span className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-primary/50" />
              50+ progetti completati
            </span>
          </div>
        </motion.div>

        {/* Dashboard preview — below, 80% width, scroll-reveal */}
        <motion.div
          ref={dashRef}
          style={{ y: dashY, opacity: dashOpacity, scale: dashScale }}
          className="mt-16 md:mt-20 w-[80%] mx-auto"
        >
          <div className="rounded-[24px] md:rounded-[32px] overflow-hidden relative"
            style={{
              boxShadow: "0 32px 80px -16px hsla(226,46%,11%,0.16), 0 2px 4px 0 hsla(226,46%,11%,0.03)",
              border: "1px solid rgba(218,225,240,0.5)",
            }}
          >
            <img src={dashboardPreview} alt="NovaFlow Dashboard" className="w-full h-auto block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
