"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Linkedin } from "lucide-react";
import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import TypewriterText from "@/components/TypewriterText";
import ScrollIndicator from "@/components/ScrollIndicator";
import SocialBar from "@/components/SocialBar";
import StatsBar from "@/components/StatsBar";
import { siteContent, LINKEDIN_URL } from "@/lib/content";

const { hero } = siteContent;

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[92vh] section-padding pt-28 pb-12 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center lg:items-start"
        >
          <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-2 border-[var(--border)] photo-ring">
            {!imgError ? (
              <Image
                src="/RajeshAS_AIDS.png"
                alt="Rajesh AS"
                width={160}
                height={160}
                className="w-full h-full object-cover object-center"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-mono text-4xl font-bold text-[var(--accent)] bg-[var(--surface)]">
                RA
              </div>
            )}
          </div>
          <div className="mt-6">
            <SocialBar />
          </div>
          <p className="font-mono text-[10px] text-[var(--accent)] mt-4 tracking-wider uppercase">
            {hero.openTo}
          </p>
        </motion.div>

        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-mono text-[11px] text-[var(--accent)] tracking-widest uppercase mb-3"
          >
            {hero.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[52px] lg:text-[56px] font-bold leading-[1.05] tracking-tight"
          >
            {hero.name}{" "}
            <span className="text-gradient">{hero.nameAccent}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-3 text-[15px] text-[var(--muted)]"
          >
            <TypewriterText words={hero.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="font-mono text-[12px] text-[var(--hint)] mt-3 leading-relaxed max-w-2xl"
          >
            {hero.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 space-y-3 max-w-2xl"
          >
            {hero.bio.map((p, i) => (
              <p
                key={i}
                className="font-sans text-[15px] text-[var(--muted)] leading-[1.75]"
              >
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <a href="#projects" className="btn-primary magnetic-hover">
              {hero.ctaPrimary}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin magnetic-hover"
            >
              <Linkedin size={14} className="mr-2" />
              {hero.ctaLinkedIn}
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary magnetic-hover"
            >
              <ArrowDown size={12} className="mr-1.5" />
              {hero.ctaResume}
            </a>
          </motion.div>

          <StatsBar />

          <div className="mt-6">
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </section>
  );
}
