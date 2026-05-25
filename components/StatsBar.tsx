import { siteContent } from "@/lib/content";

const { stats } = siteContent.hero;

export default function StatsBar() {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 mt-8">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <p className="font-mono text-[20px] md:text-[24px] font-bold text-[var(--accent)]">
            {stat.value}
          </p>
          <p className="font-sans text-[11px] text-[var(--muted)] mt-1 uppercase tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
