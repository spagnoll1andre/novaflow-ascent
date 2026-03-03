import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/novaflow-logo.jpg";

const navItems = [
  { label: "Soluzioni", href: "#soluzioni" },
  { label: "Automazioni", href: "#come-lavoriamo" },
  { label: "Chi siamo", href: "#perche-noi" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="NovaFlow" className="h-8 md:h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            onClick={() => scrollTo("#contatti")}
            className="rounded-full px-6"
          >
            Prenota il cambiamento
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 pb-6">
          <div className="container flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-base font-medium text-foreground/80 hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollTo("#contatti")} className="rounded-full mt-2">
              Prenota il cambiamento
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
