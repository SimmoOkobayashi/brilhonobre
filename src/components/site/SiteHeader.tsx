import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/logo-brilho-nobre.png";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/contato";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Brilho Nobre" width={40} height={55} className="h-12 w-auto" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-semibold tracking-wide text-foreground">
              Brilho Nobre
            </span>
            <span className="mt-1 text-[0.62rem] uppercase tracking-[0.3em] text-primary">
              Estética Automotiva
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="gold" asChild>
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Agendar
            </a>
          </Button>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-5 pb-6 pt-2 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              onClick={() => setOpen(false)}
              className="block border-b border-border/40 py-4 font-display text-2xl text-foreground data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="gold" size="xl" className="mt-6 w-full" asChild>
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
