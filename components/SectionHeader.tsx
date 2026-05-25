interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="section-label">{label}</p>
      <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-[15px] text-[var(--muted)] mt-2 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
