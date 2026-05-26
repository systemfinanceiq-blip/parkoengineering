export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-15 blueprint-grid" aria-hidden />
      <div className="container-wide relative py-20 md:py-28">
        <p className="text-xs font-bold tracking-[0.22em] text-accent">
          <span className="inline-block h-px w-10 bg-accent align-middle mr-3" />
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display font-black uppercase text-4xl md:text-6xl leading-[0.95] max-w-3xl whitespace-pre-line">
          {title.replace(/\\n/g, "\n")}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-primary-foreground/85 text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
