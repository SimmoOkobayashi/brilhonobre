import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Crown, Droplets, Home, ShieldCheck, Sparkles, Wand2 } from "lucide-react";

import hero from "@/assets/hero-carro.jpg";
import higienizacao from "@/assets/higienizacao.jpg";
import polimento from "@/assets/polimento.jpg";
import { InstagramIcon, WhatsAppIcon } from "@/components/site/SocialIcons";
import { Button } from "@/components/ui/button";
import { SOCIAL, buildWhatsAppLink } from "@/lib/contato";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brilho Nobre | Estética Automotiva à Domicílio" },
      {
        name: "description",
        content:
          "Detalhamento, higienização e polimento automotivo no conforto da sua casa. Agende pelo WhatsApp com a Brilho Nobre.",
      },
      { property: "og:title", content: "Brilho Nobre | Estética Automotiva à Domicílio" },
      {
        property: "og:description",
        content: "Além de uma limpeza, um padrão Nobre de cuidado. Atendimento à domicílio.",
      },
    ],
  }),
  component: HomePage,
});

const SERVICOS = [
  {
    icon: Sparkles,
    title: "Detalhamento",
    text: "Limpeza minuciosa, peça por peça, por dentro e por fora — cada detalhe recebe atenção.",
  },
  {
    icon: Droplets,
    title: "Higienização",
    text: "Bancos, carpetes e painel limpos e higienizados para um interior renovado e agradável.",
  },
  {
    icon: Wand2,
    title: "Polimento",
    text: "Pintura com brilho intenso e profundidade, devolvendo ao seu carro o visual de novo.",
  },
];

const DIFERENCIAIS = [
  {
    icon: Home,
    title: "À domicílio",
    text: "Vamos até você. Seu carro é cuidado sem você sair de casa ou do trabalho.",
  },
  {
    icon: Crown,
    title: "Padrão Nobre",
    text: "Mais que uma limpeza: um cuidado caprichado, feito com calma e atenção.",
  },
  {
    icon: ShieldCheck,
    title: "Agendamento fácil",
    text: "Combine dia e horário direto pelo WhatsApp, de forma rápida e sem burocracia.",
  },
];

function HomePage() {
  return (
    <>
      {/* Abertura */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={hero}
          alt="Carro preto com pintura espelhada recebendo acabamento"
          width={1376}
          height={768}
          className="absolute inset-0 size-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-fade-bottom" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 md:px-8">
          <div className="max-w-xl animate-fade-up">
            <p className="eyebrow">Estética automotiva à domicílio</p>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
              Além de uma limpeza, um padrão{" "}
              <span className="text-gold-gradient italic">Nobre</span> de cuidado.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Detalhamento, higienização e polimento feitos onde você estiver.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="gold" size="xl" asChild>
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Agendar agora
                </a>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <Link to="/sobre">
                  Conheça a Brilho Nobre
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Nossos serviços</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Cuidado completo para o seu carro</h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {SERVICOS.map(({ icon: Icon, title, text }, i) => (
              <article
                key={title}
                className="group relative bg-card p-10 transition-colors hover:bg-secondary"
              >
                <span className="font-display text-6xl text-primary/20">0{i + 1}</span>
                <Icon className="mt-6 size-8 text-primary" strokeWidth={1.4} />
                <h3 className="mt-6 text-3xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Imagens + diferenciais */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-royal-glow" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={polimento}
              alt="Polimento da pintura com politriz"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-card"
            />
            <img
              src={higienizacao}
              alt="Higienização de banco de couro"
              width={1024}
              height={1280}
              loading="lazy"
              className="mt-12 aspect-[4/5] w-full rounded-lg object-cover shadow-card"
            />
          </div>

          <div>
            <p className="eyebrow">Por que a Brilho Nobre</p>
            <h2 className="mt-4 text-4xl md:text-6xl">
              O cuidado vai <span className="text-gold-gradient italic">até você</span>
            </h2>
            <ul className="mt-12 space-y-10">
              {DIFERENCIAIS.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-2xl">{title}</h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-card px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-royal-glow" />
            <div className="relative">
              <Crown className="mx-auto size-10 text-primary" strokeWidth={1.3} />
              <h2 className="mt-6 text-4xl md:text-6xl">Seu carro merece brilhar</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
                Chame no WhatsApp, conte qual serviço você procura e agende o melhor horário.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button variant="gold" size="xl" asChild>
                  <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button variant="goldOutline" size="xl" asChild>
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="size-5" />
                    Ver no Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
