import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageHero } from "@/components/site/PageHero";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/site/SocialIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  SOCIAL,
  WHATSAPP_DISPLAY,
  buildOrcamentoMessage,
  buildWhatsAppLink,
} from "@/lib/contato";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Brilho Nobre Estética Automotiva" },
      {
        name: "description",
        content:
          "Agende detalhamento, higienização ou polimento à domicílio com a Brilho Nobre pelo WhatsApp (35) 99939-7252.",
      },
      { property: "og:title", content: "Contato | Brilho Nobre Estética Automotiva" },
      {
        property: "og:description",
        content: "Peça seu orçamento e agende pelo WhatsApp. Atendimento à domicílio.",
      },
    ],
  }),
  component: ContatoPage,
});

const SERVICOS = ["Detalhamento", "Higienização", "Polimento", "Ainda não sei"];

const CANAIS = [
  { href: SOCIAL.instagram, label: "Instagram", detail: SOCIAL.instagramHandle, Icon: InstagramIcon },
  { href: SOCIAL.tiktok, label: "TikTok", detail: "@brilhonobre.oficial", Icon: TikTokIcon },
  { href: SOCIAL.facebook, label: "Facebook", detail: "brilhonobre.oficial", Icon: FacebookIcon },
  { href: SOCIAL.youtube, label: "YouTube", detail: "@brilhonobre.oficial", Icon: YouTubeIcon },
];

function ContatoPage() {
  const [servico, setServico] = useState<string>("Detalhamento");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = buildOrcamentoMessage({
      nome: String(data.get("nome") ?? ""),
      veiculo: String(data.get("veiculo") ?? ""),
      local: String(data.get("local") ?? ""),
      mensagem: String(data.get("mensagem") ?? ""),
      servico,
    });
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos cuidar do"
        highlight="seu carro"
        description="Preencha os dados abaixo e sua mensagem chega pronta no nosso WhatsApp."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-8 shadow-card md:p-10 lg:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl">Peça seu orçamento</h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="nome">Seu nome</Label>
                <Input id="nome" name="nome" required maxLength={80} placeholder="Como podemos te chamar?" className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="veiculo">Veículo</Label>
                <Input id="veiculo" name="veiculo" maxLength={80} placeholder="Modelo e ano" className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="local">Bairro / Cidade</Label>
                <Input id="local" name="local" maxLength={80} placeholder="Onde será o atendimento" className="h-12" />
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium">Serviço de interesse</legend>
              <div className="mt-3 flex flex-wrap gap-3">
                {SERVICOS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={servico === s}
                    onClick={() => setServico(s)}
                    className="rounded-full border border-border px-5 py-2 text-sm text-muted-foreground transition-colors hover:border-primary aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 space-y-2">
              <Label htmlFor="mensagem">Mensagem (opcional)</Label>
              <Textarea id="mensagem" name="mensagem" maxLength={600} rows={4} placeholder="Conte um pouco do que seu carro precisa" />
            </div>

            <Button type="submit" variant="gold" size="xl" className="mt-8 w-full">
              <Send />
              Enviar pelo WhatsApp
            </Button>
          </form>

          <aside className="space-y-6 lg:col-span-2">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-primary/40 bg-secondary p-8 transition-colors hover:border-primary"
            >
              <WhatsAppIcon className="size-8 text-primary" />
              <p className="eyebrow mt-6">WhatsApp para agendamentos</p>
              <p className="mt-2 font-display text-4xl text-foreground">{WHATSAPP_DISPLAY}</p>
            </a>

            <div className="rounded-xl border border-border bg-card p-8">
              <MapPin className="size-7 text-primary" strokeWidth={1.5} />
              <p className="eyebrow mt-6">Atendimento</p>
              <p className="mt-2 text-lg text-foreground">À domicílio — vamos até você.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <p className="eyebrow">Redes sociais</p>
              <ul className="mt-5 divide-y divide-border">
                {CANAIS.map(({ href, label, detail, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 py-4 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="size-5 text-primary" />
                      <span className="font-medium text-foreground">{label}</span>
                      <span className="ml-auto truncate text-sm">{detail}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
