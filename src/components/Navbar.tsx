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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b shadow-[0_1px_12px_0_rgba(15,22,43,0.06)]"
      style={{ backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)", background: "rgba(255,255,255,0.72)", borderColor: "rgba(218,225,240,0.55)" }}>
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
              className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:rounded-full after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            onClick={() => scrollTo("#contatti")}
            className="rounded-full px-6 shadow-[0_2px_16px_0_hsl(217_83%_50%/0.25)] hover:shadow-[0_4px_24px_0_hsl(217_83%_50%/0.35)] transition-all duration-200"
            style={{ background: "linear-gradient(135deg, hsl(217 83% 50%), hsl(217 83% 58%))" }}
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
        <div className="md:hidden pb-6 border-t" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)", borderColor: "rgba(218,225,240,0.55)" }}>
          <div className="container flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollTo("#contatti")} className="rounded-full mt-2"
              style={{ background: "linear-gradient(135deg, hsl(217 83% 50%), hsl(217 83% 58%))" }}>
              Prenota il cambiamento
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
