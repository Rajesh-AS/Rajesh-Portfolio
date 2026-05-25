"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="scroll-indicator inline-flex flex-col items-center gap-1 text-[var(--hint)] hover:text-[var(--accent)] transition-colors"
      aria-label="Scroll to about section"
    >
      <span className="font-mono text-[9px] tracking-widest uppercase">
        Scroll
      </span>
      <ChevronDown size={18} />
    </motion.a>
  );
}
