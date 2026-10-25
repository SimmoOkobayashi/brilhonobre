import { buildWhatsAppLink } from "@/lib/contato";

import { WhatsAppIcon } from "./SocialIcons";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-gold transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
