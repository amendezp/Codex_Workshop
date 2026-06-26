interface SectionBlockProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionBlock({
  title,
  subtitle,
  children,
  className = "",
}: SectionBlockProps) {
  return (
    <section className={`mb-10 ${className}`}>
      <h2 className="mb-1 font-serif text-2xl font-semibold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mb-4 text-sm text-muted-foreground">{subtitle}</p>
      )}
      {!subtitle && <div className="mb-4" />}
      {children}
    </section>
  );
}
