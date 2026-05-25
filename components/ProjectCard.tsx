import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  num: string;
  emoji: string;
  title: string;
  description: string;
  tags: readonly string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
}

export default function ProjectCard({
  num,
  emoji,
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[11px] text-[var(--hint)]">{num}</span>
        <span
          className="w-8 h-8 flex items-center justify-center rounded-lg text-base"
          style={{ background: "var(--accent-light)" }}
        >
          {emoji}
        </span>
      </div>

      <h3 className="font-sans text-[16px] font-semibold text-[var(--text)] mb-2">
        {title}
      </h3>

      <p className="font-sans text-[13px] text-[var(--muted)] leading-[1.7] flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {tags.map((tag) => (
          <span key={tag} className="pill text-[10px] py-0.5">
            {tag}
          </span>
        ))}
      </div>

      {(liveUrl || githubUrl) && (
        <div className="flex gap-3 mt-4 pt-3 border-t border-[var(--border)]">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] text-[var(--accent)] hover:underline font-medium"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] text-[var(--muted)] hover:text-[var(--accent)] font-medium"
            >
              <Github size={12} />
              Code
            </a>
          )}
        </div>
      )}
    </article>
  );
}
