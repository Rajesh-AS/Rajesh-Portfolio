"use client";

import SectionReveal from "@/components/motion/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";
import { siteContent } from "@/lib/content";

const { projects } = siteContent;

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <SectionReveal>
        <SectionHeader
          label={projects.label}
          title={projects.title}
          subtitle={projects.subtitle}
        />

        <StaggerChildren className="bento-grid">
          {projects.items.map((project) => (
            <StaggerItem
              key={project.num}
              className={project.featured ? "bento-featured" : ""}
            >
              <ProjectCard
                num={project.num}
                emoji={project.emoji}
                title={project.title}
                description={project.description}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionReveal>
    </section>
  );
}
