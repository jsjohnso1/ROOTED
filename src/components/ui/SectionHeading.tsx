type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <span className="h-px w-6 bg-gold" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-paper text-balance">
        {title}
      </h2>
      {description ? (
        <p className="text-base sm:text-lg text-muted leading-relaxed text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
