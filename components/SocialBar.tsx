import { Github, Linkedin, Mail } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/content";

const links = [
  {
    href: LINKEDIN_URL,
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Rajesh-AS",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:rajeshsubramanian.as@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export default function SocialBar() {
  return (
    <div className="flex gap-3 justify-center lg:justify-start">
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
