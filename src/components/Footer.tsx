import { motion } from "framer-motion";
import logo from "@/assets/novaflow-logo.jpg";

const cols = [
  { title: "Soluzioni", links: ["ERP Odoo", "Digital Solutions", "Infrastruttura", "Supporto"] },
  { title: "Verticali", links: ["Manifatturiero", "Retail", "Servizi", "E-commerce"] },
  { title: "Azienda", links: ["Chi siamo", "Case Study", "Blog", "Lavora con noi"] },
  { title: "Legale", links: ["Privacy Policy", "Termini di Servizio", "Cookie Policy"] },
];

const Footer = () => (
  <footer className="py-16 border-t border-border" style={{ background: "#F6FBFF" }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        className="grid grid-cols-2 md:grid-cols-5 gap-8"
      >
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="NovaFlow" className="h-8 w-auto mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">Digitalizzazione su misura per PMI italiane.</p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-foreground mb-3 text-sm">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
      <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NovaFlow. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
);

export default Footer;
