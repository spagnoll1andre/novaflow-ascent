import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/novaflow-logo.jpg";

const navItems = [
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Sviluppo ERP", href: "#sviluppo-erp" },
  { label: "Automazioni", href: "#automazioni" },
  { label: "Altri Servizi", href: "#altri-servizi" },
  { label: "Soluzioni Verticali", href: "#soluzioni-verticali" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        background: "rgba(246,251,255,0.65)",
        borderBottom: "1px solid rgba(218,225,240,0.35)",
        boxShadow: "0 1px 24px -4px hsla(226,46%,11%,0.06), 0 0 0 0.5px rgba(218,225,240,0.25)",
      }}
    >
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
            className="rounded-full px-6 transition-all duration-200 ease-out hover:-translate-y-[1px]"
            style={{
              background: "linear-gradient(180deg, hsl(217 83% 62%), hsl(217 83% 50%))",
              boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.4), 0 0 0 0.5px hsl(217 83% 50% / 0.2), inset 0 1px 0 0 hsl(217 83% 75% / 0.4)",
              border: "1px solid hsl(217 83% 60% / 0.3)",
            }}
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
        <div
          className="md:hidden pb-6"
          style={{
            background: "rgba(246,251,255,0.92)",
            backdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(218,225,240,0.35)",
          }}
        >
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
            <Button
              onClick={() => scrollTo("#contatti")}
              className="rounded-full mt-2"
              style={{
                background: "linear-gradient(180deg, hsl(217 83% 62%), hsl(217 83% 50%))",
                boxShadow: "0 4px 20px -4px hsl(217 83% 50% / 0.4), inset 0 1px 0 0 hsl(217 83% 75% / 0.4)",
                border: "1px solid hsl(217 83% 60% / 0.3)",
              }}
            >
              Prenota il cambiamento
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
