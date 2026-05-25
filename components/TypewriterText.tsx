"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  words: readonly string[];
  className?: string;
}

export default function TypewriterText({
  words,
  className = "",
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(words[0] ?? "");
      return;
    }

    const current = words[wordIndex] ?? "";
    const typeSpeed = isDeleting ? 40 : 70;

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 400);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayed(current.slice(0, displayed.length - 1));
      } else {
        setDisplayed(current.slice(0, displayed.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, reducedMotion]);

  return (
    <span className={`inline-block min-w-[200px] ${className}`}>
      <span className="text-gradient">{displayed}</span>
      {!reducedMotion && (
        <span
          className="inline-block w-[2px] h-[1em] bg-[var(--accent)] ml-0.5 align-middle"
          aria-hidden="true"
        />
      )}
    </span>
  );
}
