import { createFileRoute } from "@tanstack/react-router";
import { Crown, Gem, HeartHandshake } from "lucide-react";

import logo from "@/assets/logo-brilho-nobre.png";
import polimento from "@/assets/polimento.jpg";
import { PageHero } from "@/components/site/PageHero";
import { WhatsAppIcon } from "@/components/site/SocialIcons";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/contato";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós | Brilho Nobre Estética Automotiva" },
      {
        name: "description",
        content:
          "Conheça a Brilho Nobre: estética automotiva à domicílio com detalhamento, higienização e polimento.",
      },
      { property: "og:title", content: "Sobre Nós | Brilho Nobre Estética Automotiva" },
      {
        property: "og:description",
        content: "Nossa missão é oferecer um padrão Nobre de cuidado para o seu carro, onde você estiver.",
      },
    ],
  }),
  component: SobrePage,
});

const VALORES = [
  {
    icon: Crown,
    title: "Excelência",
    text: "Cada serviço é tratado como único, com acabamento caprichado do começo ao fim.",
  },
  {
    icon: HeartHandshake,
    title: "Confiança",
    text: "Cuidamos do seu carro com o mesmo respeito que você tem por ele.",
  },
  {
    icon: Gem,
    title: "Comodidade",
    text: "Atendimento à domicílio para que você ganhe tempo enquanto nós cuidamos de tudo.",
  },
];

function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title="Um padrão"
        highlight="Nobre"
        description="A Brilho Nobre nasceu para levar estética automotiva de qualidade até a porta da sua casa."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
          <div className="relative">
            <img
              src={polimento}
              alt="Profissional da Brilho Nobre polindo a pintura de um carro"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full max-w-lg rounded-lg object-cover shadow-card"
            />
            <div className="absolute -bottom-8 right-0 hidden rounded-lg border border-primary/30 bg-card p-6 shadow-card md:block lg:-right-4">
              <img src={logo} alt="Brilho Nobre" width={90} height={124} loading="lazy" className="h-28 w-auto" />
            </div>
          </div>

          <div>
            <p className="eyebrow">Nossa história</p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Mais do que deixar limpo, deixar <span className="text-gold-gradient italic">impecável</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Acreditamos que o carro é parte da rotina e do orgulho de quem dirige. Por isso, a
                Brilho Nobre oferece detalhamento, higienização e polimento com atenção a cada
                detalhe.
              </p>
              <p>
                Nosso atendimento é à domicílio: vamos até você com tudo o que é necessário,
                para que seu carro receba um cuidado de alto nível sem que você perca tempo.
              </p>
              <p className="font-display text-2xl italic text-foreground">
                “Além de uma limpeza, um padrão Nobre de cuidado.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-card py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-royal-glow" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="eyebrow">Nossos valores</p>
            <h2 className="mt-4 text-4xl md:text-5xl">O que nos guia</h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {VALORES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Icon className="size-7" strokeWidth={1.4} />
                </span>
                <h3 className="mt-6 text-3xl">{title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center md:py-28">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-4xl md:text-5xl">Pronto para ver seu carro brilhar?</h2>
          <Button variant="gold" size="xl" className="mt-10" asChild>
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Agendar pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
