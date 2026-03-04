import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, ArrowUpRight, Download, Mail, Phone, MapPin,
  Briefcase, GraduationCap, Wrench, Send, ExternalLink,
  Instagram, Youtube, Dribbble
} from "lucide-react";
import avatarImg from "@/assets/portfolio-avatar.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const stats = [
  { value: "30+", label: "Progetti Completati" },
  { value: "8+", label: "Anni di Esperienza" },
  { value: "36+", label: "Clienti Soddisfatti" },
  { value: "10+", label: "Premi Ricevuti" },
];

const experiences = [
  {
    role: "Framer & UI/UX Designer",
    company: "Circlum Tech",
    period: "2023 - Presente",
    description: "Progettazione di prototipi interattivi con Framer, concentrandosi su esperienze utente fluide e soluzioni scalabili attraverso feedback degli utenti e collaborazione.",
  },
  {
    role: "UI/UX Designer",
    company: "CoreOS",
    period: "2021 - 2023",
    description: "Creazione di design web e mobile intuitivi, conduzione di ricerche utente e collaborazione con sviluppatori per garantire una consegna funzionale e coerente.",
  },
  {
    role: "Graphics Designer",
    company: "Pixel Square",
    period: "2020 - 2021",
    description: "Progettazione di risorse di marketing, componenti UI e visual di brand, migliorando le campagne digitali e l'identità visiva complessiva attraverso la collaborazione creativa.",
  },
];

const projects = [
  { title: "HelloBot", category: "SaaS & Startup", pages: "8 Pagine", image: project1, link: "#" },
  { title: "Flexisoft", category: "SaaS & Startup", pages: "6 Pagine", image: project2, link: "#" },
  { title: "Excludia", category: "Digital Agency", pages: "8 Pagine", image: project3, link: "#" },
  { title: "CryptoraHub", category: "Crypto & Web3", pages: "7 Pagine", image: project4, link: "#" },
];

const education = [
  {
    title: "UI/UX Design Certification",
    institution: "Interaction Design Foundation, Online",
    period: "2018 - 2019",
    description: "Esperienza pratica in ricerca UX, prototipazione, wireframing e test di usabilità, con focus su esperienze digitali fluide e user-friendly.",
  },
  {
    title: "Bachelor of Design in Interaction Design",
    institution: "National University of Singapore",
    period: "2015 - 2017",
    description: "Programma completo focalizzato sulla progettazione di prodotti digitali incentrati sull'utente, integrando estetica e funzionalità attraverso principi pratici di interaction design.",
  },
];

const tools = [
  { name: "Figma", category: "Design Tool" },
  { name: "Framer", category: "No Code Development" },
  { name: "Notion", category: "Produttività" },
  { name: "Illustrator", category: "Grafica Vettoriale" },
  { name: "Photoshop", category: "Photo Editing" },
  { name: "Odoo", category: "ERP Platform" },
];

const Portfolio = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Portfolio — John Anderson | NovaFlow</title>
        <meta name="description" content="Portfolio di John Anderson — Framer & UI/UX Designer con oltre 8 anni di esperienza." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container py-8 md:py-12 lg:py-16">

          {/* ───── MOBILE-ONLY HERO ───── */}
          <motion.div {...fadeUp} className="lg:hidden mt-4 mb-8">
            <span className="text-sm font-semibold text-primary">Ciao!</span>
            <h1 className="mt-3 text-[2rem] font-extrabold text-foreground leading-[1.1]"
              style={{ letterSpacing: "-0.025em" }}>
              Sono Andrea Spagnolli,{" "}
              <span className="text-primary">amministratore di NovaFlow</span>{" "}
              con base a Roma
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12">

            {/* ───── SIDEBAR ───── */}
            <motion.aside {...fadeUp} className="lg:sticky lg:top-8 lg:self-start">
              <Card className="overflow-hidden border-border/50"
                style={{
                  borderRadius: "24px",
                  boxShadow: "0 12px 48px -12px hsla(226,46%,11%,0.10)",
                }}>
                <div className="p-6 flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden mb-5"
                    style={{ boxShadow: "inset 0 0 0 1px hsla(226,46%,11%,0.06)" }}>
                    <img src={avatarImg} alt="John Anderson" className="w-full h-full object-cover" />
                  </div>

                  {/* Availability badge */}
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-primary/20 bg-primary/5 text-primary mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Disponibile per lavori
                  </span>

                  <h2 className="text-xl font-bold text-foreground">John Anderson</h2>

                  {/* Social icons */}
                  <div className="flex items-center gap-3 mt-4">
                    {[Instagram, Youtube, Dribbble].map((Icon, i) => (
                      <a key={i} href="#" className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-3 mt-6 w-full">
                    <Button variant="outline" className="flex-1 rounded-full text-sm gap-2">
                      <Download className="w-4 h-4" /> Download CV
                    </Button>
                    <Button className="flex-1 rounded-full text-sm gap-2"
                      onClick={() => scrollTo("#contact")}
                      style={{
                        background: "linear-gradient(180deg, hsl(217 83% 62%), hsl(217 83% 50%))",
                        boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.4), inset 0 1px 0 0 hsl(217 83% 75% / 0.4)",
                        border: "1px solid hsl(217 83% 60% / 0.3)",
                      }}>
                      <Send className="w-4 h-4" /> Contattami
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.aside>

            {/* ───── MAIN CONTENT ───── */}
            <main className="space-y-12 md:space-y-16 min-w-0">

              {/* HERO INTRO */}
              <motion.section {...fadeUp} className="hidden lg:block">
                <span className="text-sm font-semibold text-primary">👋 Ciao!</span>
                <h1 className="mt-3 text-[2.2rem] md:text-[3rem] font-extrabold text-foreground leading-[1.1]"
                  style={{ letterSpacing: "-0.025em" }}>
                  Sono John Anderson,{" "}
                  <span className="text-primary">Framer Designer</span>{" "}
                  con base a Los Angeles, CA.
                </h1>
                <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  Mi specializzo nella creazione di esperienze digitali pulite e user-friendly, unendo creatività e funzionalità. Con una solida esperienza nel design interattivo, mi concentro sulla realizzazione di design che non solo sono belli, ma offrono anche interazioni fluide e coinvolgenti.
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center p-4 rounded-2xl border border-border/50 bg-card"
                      style={{ boxShadow: "0 2px 12px -4px hsla(226,46%,11%,0.06)" }}>
                      <div className="text-2xl md:text-3xl font-extrabold text-foreground">{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* EXPERIENCE */}
              <motion.section {...fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">Esperienza</h2>
                </div>
                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <Card key={exp.company} className="border-border/50"
                      style={{ borderRadius: "20px", boxShadow: "0 4px 16px -4px hsla(226,46%,11%,0.06)" }}>
                      <CardContent className="p-5 md:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-foreground">{exp.role}</h3>
                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                          </div>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap self-start">
                            {exp.period}
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>

              {/* PROJECTS */}
              <motion.section {...fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">Progetti</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {projects.map((p) => (
                    <a key={p.title} href={p.link}
                      className="group block rounded-[20px] overflow-hidden border border-border/50 bg-card transition-all duration-200 hover:-translate-y-1"
                      style={{ boxShadow: "0 4px 16px -4px hsla(226,46%,11%,0.06)" }}>
                      <div className="aspect-[5/3] overflow-hidden">
                        <img src={p.image} alt={p.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="p-5 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{p.title}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{p.category} · {p.pages}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.section>

              {/* EDUCATION */}
              <motion.section {...fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">Formazione</h2>
                </div>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <Card key={edu.title} className="border-border/50"
                      style={{ borderRadius: "20px", boxShadow: "0 4px 16px -4px hsla(226,46%,11%,0.06)" }}>
                      <CardContent className="p-5 md:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-foreground">{edu.title}</h3>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                          </div>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap self-start">
                            {edu.period}
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>

              {/* TOOLS / SKILLS */}
              <motion.section {...fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">Strumenti</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {tools.map((t) => (
                    <div key={t.name} className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card"
                      style={{ boxShadow: "0 2px 12px -4px hsla(226,46%,11%,0.06)" }}>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-foreground">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* CONTACT */}
              <motion.section id="contact" {...fadeUp} className="scroll-mt-8">
                <div className="w-[95%] mx-auto rounded-[32px] p-8 md:p-12"
                  style={{
                    background: "linear-gradient(160deg, #0F162B 0%, #16234C 100%)",
                    boxShadow: "0 24px 64px -16px hsla(226,46%,11%,0.3)",
                  }}>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground text-center mb-8"
                    style={{ letterSpacing: "-0.02em" }}>
                    Mettiamoci in Contatto!
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                    {[
                      { icon: Phone, label: "Telefono", value: "+(02) 4057 2930", href: "tel:+0240572930" },
                      { icon: Mail, label: "Email", value: "info@novaflow.it", href: "mailto:info@novaflow.it" },
                      { icon: MapPin, label: "Indirizzo", value: "Milano, Italia", href: "https://maps.google.com" },
                    ].map((c) => (
                      <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl transition-colors"
                        style={{ background: "hsla(0,0%,100%,0.06)", border: "1px solid hsla(0,0%,100%,0.08)" }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: "hsla(217,83%,50%,0.2)" }}>
                          <c.icon className="w-5 h-5" style={{ color: "hsl(217 83% 70%)" }} />
                        </div>
                        <div>
                          <div className="text-xs font-medium" style={{ color: "hsla(0,0%,100%,0.5)" }}>{c.label}</div>
                          <div className="text-sm font-semibold" style={{ color: "#fff" }}>{c.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Simple contact form */}
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Il tuo nome"
                        className="w-full px-5 py-3 rounded-xl text-sm outline-none"
                        style={{
                          background: "hsla(0,0%,100%,0.06)",
                          border: "1px solid hsla(0,0%,100%,0.1)",
                          color: "#fff",
                        }} />
                      <input type="email" placeholder="La tua email"
                        className="w-full px-5 py-3 rounded-xl text-sm outline-none"
                        style={{
                          background: "hsla(0,0%,100%,0.06)",
                          border: "1px solid hsla(0,0%,100%,0.1)",
                          color: "#fff",
                        }} />
                    </div>
                    <textarea rows={4} placeholder="Il tuo messaggio"
                      className="w-full px-5 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{
                        background: "hsla(0,0%,100%,0.06)",
                        border: "1px solid hsla(0,0%,100%,0.1)",
                        color: "#fff",
                      }} />
                    <Button className="rounded-full px-8"
                      style={{
                        background: "linear-gradient(180deg, hsl(217 83% 62%), hsl(217 83% 50%))",
                        boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.4), inset 0 1px 0 0 hsl(217 83% 75% / 0.4)",
                        border: "1px solid hsl(217 83% 60% / 0.3)",
                      }}>
                      Invia Messaggio <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </div>
              </motion.section>

              {/* Footer credit */}
              <div className="text-center text-xs text-muted-foreground pb-8">
                © {new Date().getFullYear()} NovaFlow. Tutti i diritti riservati.
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
