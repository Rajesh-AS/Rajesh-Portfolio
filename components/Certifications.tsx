"use client";

import { useState } from "react";
import SectionReveal from "@/components/motion/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";
import { siteContent } from "@/lib/content";

const { certifications } = siteContent;

const filters = [
  { id: "all", label: "All" },
  { id: "meta", label: "Meta" },
  { id: "aws", label: "AWS" },
  { id: "other", label: "Other" },
] as const;

export default function Certifications() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? certifications.items
      : certifications.items.filter((c) => c.category === filter);

  return (
    <section className="section-padding">
      <SectionReveal>
        <SectionHeader
          label={certifications.label}
          title={certifications.title}
          subtitle={certifications.subtitle}
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`pill cursor-pointer ${
                filter === f.id
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : ""
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <StaggerChildren className="cert-grid">
          {filtered.map((cert) => (
            <StaggerItem key={cert.name}>
              <div className="cert-card">
                <p className="font-mono text-[10px] text-[var(--accent)] mb-1">
                  {cert.issuer}
                </p>
                <p className="font-sans text-[13px] font-medium text-[var(--text)] leading-snug">
                  {cert.name}
                </p>
                <p className="font-mono text-[10px] text-[var(--hint)] mt-2">
                  {cert.date}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionReveal>
    </section>
  );
}
