interface HighlightCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function HighlightCard({
  icon,
  title,
  description,
}: HighlightCardProps) {
  return (
    <div className="highlight-card">
      <span className="text-2xl mb-2 block">{icon}</span>
      <h3 className="font-sans text-[14px] font-semibold text-[var(--text)] mb-2">
        {title}
      </h3>
      <p className="font-sans text-[12px] text-[var(--muted)] leading-[1.65]">
        {description}
      </p>
    </div>
  );
}
