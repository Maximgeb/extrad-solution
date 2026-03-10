"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WhatsAppButton from "./ui/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function About() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="a-propos" className="py-28 md:py-36 bg-[#111111] relative overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(201,169,110,0.04) 0%, transparent 65%)" }}
      />
      <div className="absolute top-0 left-6 right-6 lg:left-12 lg:right-12 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(42,42,42,0.8), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="block w-8 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase font-inter font-medium">
                {t.about.label}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-playfair font-bold text-[#F5F0EB] tracking-[-0.03em] leading-[1.1] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {t.about.h2Line1}
              <br />
              <em className="not-italic" style={{
                background: "linear-gradient(135deg, #D4B896 0%, #C9A96E 45%, #B39060 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {t.about.h2Line2}
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="text-[rgba(245,240,235,0.6)] text-sm leading-[1.8] mb-5"
            >
              {t.about.body1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
              className="text-[rgba(245,240,235,0.6)] text-sm leading-[1.8] mb-8"
            >
              {t.about.body2}
            </motion.p>

            {/* Legal notice */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
              className="rounded-sm p-5 mb-8"
              style={{
                background: "rgba(201,169,110,0.04)",
                border: "1px solid rgba(201,169,110,0.15)",
              }}
            >
              <p className="text-[rgba(245,240,235,0.45)] text-xs leading-[1.75] font-inter">
                <span className="text-[#C9A96E] font-medium">ℹ </span>
                {t.about.legalNotice}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.44, ease: EASE }}
            >
              <WhatsAppButton label={t.about.cta} size="md" />
            </motion.div>
          </div>

          {/* Right — stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                  animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.85, delay: 0.15 + i * 0.1, ease: EASE }}
                  className="rounded-sm p-7"
                  style={{
                    background: "#141414",
                    border: "1px solid rgba(42,42,42,0.8)",
                  }}
                >
                  <span
                    className="font-playfair font-bold text-[#C9A96E] block leading-none tracking-[-0.03em] mb-2"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[rgba(245,240,235,0.35)] text-[9px] tracking-[0.15em] uppercase font-inter">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Compliance badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="mt-3 rounded-sm p-6 flex items-start gap-4"
              style={{
                background: "#141414",
                border: "1px solid rgba(42,42,42,0.8)",
              }}
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)", color: "#C9A96E" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-[#F5F0EB] text-sm font-inter font-medium mb-1">
                  Service 100% légal · Conformité internationale
                </p>
                <p className="text-[rgba(245,240,235,0.4)] text-xs font-inter leading-[1.7]">
                  Nos opérations respectent les législations en vigueur dans chaque pays d'intervention. Aucune intervention dans un cadre illégal.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
