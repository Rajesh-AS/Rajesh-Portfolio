"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Linkedin } from "lucide-react";
import { siteContent, LINKEDIN_URL } from "@/lib/content";

const { nav } = siteContent;

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (reducedMotion || y < 80) {
        setVisible(true);
      } else if (y > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        animate={{ y: visible ? 0 : -72 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[var(--bg)]/90 backdrop-blur-md border-[var(--border)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-12 h-14">
          <a
            href="#"
            className="font-mono text-base font-bold tracking-tight hover:text-[var(--accent)] transition-colors"
          >
            R<span className="text-[var(--accent)]">.</span>A
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`font-sans text-[13px] font-medium transition-colors relative pb-1 ${
                    active === l.href
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {l.label}
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[var(--accent)]"
                    />
                  )}
                </a>
              </li>
            ))}
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn w-9 h-9"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </li>
          </ul>

          <button
            className="md:hidden text-[var(--text)]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="mobile-overlay md:hidden"
            >
              <button
                className="absolute top-4 right-5 text-[var(--text)]"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              {nav.links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  className={active === l.href ? "text-[var(--accent)]" : ""}
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin"
                onClick={() => setMenuOpen(false)}
              >
                <Linkedin size={16} className="mr-2 inline" />
                LinkedIn
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
