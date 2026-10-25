import { Link } from "@tanstack/react-router";

import logo from "@/assets/logo-brilho-nobre.png";
import { SOCIAL, WHATSAPP_DISPLAY, buildWhatsAppLink } from "@/lib/contato";

import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon, YouTubeIcon } from "./SocialIcons";

const SOCIAL_LINKS = [
  { href: SOCIAL.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: SOCIAL.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: SOCIAL.youtube, label: "YouTube", Icon: YouTubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={44} height={60} loading="lazy" className="h-14 w-auto" />
            <span className="font-display text-2xl font-semibold">Brilho Nobre</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Além de uma limpeza, um padrão Nobre de cuidado. Estética automotiva à domicílio.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navegação</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            </li>
            <li>
              <Link to="/sobre" className="text-muted-foreground hover:text-primary">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/contato" className="text-muted-foreground hover:text-primary">Contato</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Agendamentos</p>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center gap-2 text-foreground hover:text-primary"
          >
            <WhatsAppIcon className="size-5 text-primary" />
            {WHATSAPP_DISPLAY}
          </a>
          <div className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="gold-rule" />
      <p className="py-6 text-center text-xs tracking-wide text-muted-foreground">
        © {new Date().getFullYear()} Brilho Nobre · Estética Automotiva
      </p>
    </footer>
  );
}
