"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/motion/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { siteContent } from "@/lib/content";

const { skills } = siteContent;

function MarqueeRow() {
  const items = [...skills.marquee, ...skills.marquee];
  return (
    <div className="marquee-wrap mb-10 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      <div className="marquee-track px-2">
        {items.map((skill, i) => (
          <span key={`${skill}-${i}`} className="marquee-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <SectionReveal>
        <SectionHeader
          label={skills.label}
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <MarqueeRow />

        <div className="skills-grid">
          {skills.rows.map((row) => (
            <div
              key={row.category}
              className="glass-card p-4 rounded-xl"
            >
              <span className="font-mono text-[11px] text-[var(--accent)] block mb-3">
                {row.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {row.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="pill"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
