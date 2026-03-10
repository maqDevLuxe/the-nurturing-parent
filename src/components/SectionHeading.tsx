interface Props {
  tag?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ tag, title, description, center = true }: Props) => (
  <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
    {tag && (
      <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
        {tag}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
