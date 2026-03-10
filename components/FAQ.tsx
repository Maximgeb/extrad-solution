"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

function FAQItem({ q, a, index, inView }: { q: string; a: string; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.07, ease: EASE }}
      className="border-b"
      style={{ borderColor: "rgba(42,42,42,0.8)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group focus-visible:outline-none"
      >
        <span className="font-playfair font-semibold text-[#F5F0EB] text-base leading-[1.3] group-hover:text-[#C9A96E] transition-colors duration-200">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
          style={{ color: "#C9A96E" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="text-[rgba(245,240,235,0.55)] text-sm leading-[1.8] pb-5 font-inter">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-28 md:py-36 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(201,169,110,0.03) 0%, transparent 65%)" }}
      />
      <div className="absolute top-0 left-6 right-6 lg:left-12 lg:right-12 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(42,42,42,0.8), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Header — 4 cols */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="block w-8 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase font-inter font-medium">
                {t.faq.label}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-playfair font-bold text-[#F5F0EB] tracking-[-0.03em] leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {t.faq.h2Line1}
              <br />
              <em className="not-italic" style={{
                background: "linear-gradient(135deg, #D4B896 0%, #C9A96E 45%, #B39060 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {t.faq.h2Line2}
              </em>
            </motion.h2>
          </div>

          {/* Questions — 8 cols */}
          <div className="lg:col-span-8">
            <div style={{ borderTop: "1px solid rgba(42,42,42,0.8)" }}>
              {t.faq.items.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} index={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
