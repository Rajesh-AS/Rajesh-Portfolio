"use client";

import SectionReveal from "@/components/motion/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import HighlightCard from "@/components/HighlightCard";
import { siteContent } from "@/lib/content";

const { about } = siteContent;

export default function About() {
  return (
    <section id="about" className="section-padding">
      <SectionReveal>
        <SectionHeader
          label={about.label}
          title={about.title}
          subtitle={about.subtitle}
        />

        <div className="section-grid-2 mb-12">
          <div className="space-y-4">
            {about.intro.map((p, i) => (
              <p
                key={i}
                className="font-sans text-[15px] text-[var(--muted)] leading-[1.8]"
              >
                {p}
              </p>
            ))}
          </div>

          <div>
            <p className="section-label">{about.educationLabel}</p>
            <div className="timeline space-y-6">
              {about.education.map((edu, i) => (
                <div key={i} className="relative pl-2">
                  <div
                    className={`timeline-dot ${
                      edu.active ? "timeline-dot--active" : ""
                    }`}
                  />
                  <p className="font-sans text-[14px] font-semibold text-[var(--text)]">
                    {edu.degree}
                  </p>
                  <p className="font-sans text-[13px] text-[var(--muted)] mt-1">
                    {edu.institution}
                  </p>
                  <p className="font-mono text-[11px] text-[var(--hint)] mt-0.5">
                    {edu.period}
                  </p>
                  {edu.highlights.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {edu.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="font-sans text-[12px] text-[var(--muted)] flex gap-2"
                        >
                          <span className="text-[var(--accent)]">▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="inline-block font-mono text-[10px] px-2 py-0.5 rounded mt-2 bg-[var(--accent-light)] text-[var(--accent)]">
                    {edu.badge}
                  </span>
                </div>
              ))}
            </div>

            <p className="section-label mt-8 mb-3">Languages</p>
            <div className="flex flex-wrap gap-2">
              {about.languages.map((lang) => (
                <span key={lang.name} className="pill">
                  {lang.name} — {lang.level}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="section-label mb-4">Learning Highlights</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {about.highlights.map((h) => (
            <HighlightCard
              key={h.title}
              icon={h.icon}
              title={h.title}
              description={h.description}
            />
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
