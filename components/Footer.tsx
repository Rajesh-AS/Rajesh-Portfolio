import { Github, Linkedin, Mail } from "lucide-react";
import { siteContent, LINKEDIN_URL } from "@/lib/content";

const { footer } = siteContent;

const socials = [
  { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/Rajesh-AS", icon: Github, label: "GitHub" },
  { href: "mailto:rajeshsubramanian.as@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="section-padding pt-0 pb-10 border-t border-[var(--border)]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-sans text-[14px] text-[var(--muted)] text-center md:text-left">
          {footer.tagline}
        </p>
        <div className="flex gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="font-mono text-[11px] text-[var(--hint)]">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
