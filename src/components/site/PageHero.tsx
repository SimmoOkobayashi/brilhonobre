interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}

export function PageHero({ eyebrow, title, highlight, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 md:pb-20 md:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-royal-glow" />
      <div className="relative mx-auto max-w-4xl px-5 text-center animate-fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
          {title} {highlight && <span className="text-gold-gradient italic">{highlight}</span>}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        <div className="gold-rule mx-auto mt-10 w-40" />
      </div>
    </section>
  );
}
