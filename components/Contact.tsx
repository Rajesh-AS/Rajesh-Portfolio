"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import SectionReveal from "@/components/motion/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";
import { siteContent, LINKEDIN_URL } from "@/lib/content";

const { contact } = siteContent;

const iconMap = {
  LinkedIn: Linkedin,
  Email: Mail,
  GitHub: Github,
} as const;

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <SectionReveal>
        <div className="section-grid-2 items-start">
          <div>
            <SectionHeader
              label={contact.label}
              title={contact.title}
              subtitle={contact.subtitle}
            />
            <p className="font-sans text-[18px] font-semibold text-[var(--text)] -mt-4 mb-3">
              {contact.headline}
            </p>
            <p className="font-sans text-[14px] text-[var(--muted)] leading-[1.75] mb-6">
              {contact.subtext}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin magnetic-hover"
              >
                <Linkedin size={16} className="mr-2" />
                {contact.ctaLinkedIn}
              </a>
              <a
                href="mailto:rajeshsubramanian.as@gmail.com"
                className="btn-secondary magnetic-hover"
              >
                <Mail size={14} className="mr-2" />
                {contact.ctaEmail}
              </a>
            </div>
          </div>

          <StaggerChildren className="flex flex-col gap-3">
            {contact.items.map((c) => {
              const Icon = iconMap[c.label as keyof typeof iconMap] ?? Mail;
              return (
                <StaggerItem key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row"
                  >
                    <span className="contact-icon w-[36px] h-[36px] flex items-center justify-center rounded-lg bg-[var(--tag-bg)] shrink-0">
                      <Icon
                        size={16}
                        className={
                          c.label === "LinkedIn"
                            ? "text-[#0a66c2]"
                            : "text-[var(--muted)]"
                        }
                      />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] text-[var(--hint)]">
                        {c.label}
                      </p>
                      <p className="font-sans text-[13px] text-[var(--text)]">
                        {c.value}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </SectionReveal>
    </section>
  );
}
