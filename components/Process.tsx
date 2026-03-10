"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WhatsAppButton from "./ui/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type Step = {
  number: string;
  title: string;
  description: string;
  detail: string;
  accent: string;
};

function StepCard({
  step,
  index,
  totalInView,
}: {
  step: Step;
  index: number;
  totalInView: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative lg:grid lg:grid-cols-2 lg:gap-20 mb-6 lg:mb-0 lg:py-10">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
        animate={totalInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.25 + index * 0.18, ease: EASE }}
        className={`group relative ${isLeft ? "lg:col-start-1" : "lg:col-start-2"}`}
      >
        <div className="relative bg-[#141414] border border-[#2A2A2A] hover:border-[rgba(201,169,110,0.3)] rounded-sm p-8 transition-all duration-500 overflow-hidden"
          style={{
            boxShadow: "0 2px 8px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(245,240,235,0.04)",
          }}
        >
          {/* Hover gold glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at top left, rgba(201,169,110,0.06) 0%, transparent 70%)",
            }}
          />

          {/* Number */}
          <div className={`flex items-center gap-3 mb-6 ${isLeft ? "lg:flex-row" : ""}`}>
            <span
              className="font-playfair font-bold leading-none"
              style={{
                fontSize: "clamp(2.5rem, 4vw, 3rem)",
                color: "rgba(201,169,110,0.18)",
                letterSpacing: "-0.04em",
              }}
            >
              {step.number}
            </span>
            <span className="text-[#C9A96E] text-[9px] tracking-[0.2em] uppercase font-inter font-medium border border-[rgba(201,169,110,0.2)] px-2.5 py-1">
              {step.accent}
            </span>
          </div>

          <h3 className="font-playfair font-bold text-[#F5F0EB] text-xl tracking-[-0.025em] leading-[1.2] mb-3">
            {step.title}
          </h3>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={totalInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 + index * 0.18, ease: EASE }}
            className="origin-left mb-5"
            style={{
              height: "1px",
              width: "48px",
              background: "linear-gradient(90deg, #C9A96E 0%, rgba(201,169,110,0.3) 60%, transparent 100%)",
            }}
          />

          <p className="text-[rgba(245,240,235,0.58)] text-sm leading-[1.75] mb-5">
            {step.description}
          </p>

          <p className="text-[rgba(201,169,110,0.5)] text-[9px] tracking-[0.18em] uppercase font-inter">
            ✦ {step.detail}
          </p>
        </div>
      </motion.div>

      {/* Center node */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={totalInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.4 + index * 0.18,
        }}
        className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center"
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: "#0A0A0A",
            border: "1.5px solid #C9A96E",
            boxShadow: "0 0 0 6px rgba(10,10,10,0.8), 0 0 20px rgba(201,169,110,0.2)",
          }}
        >
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#C9A96E" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 40%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="processus"
      className="py-28 md:py-36 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-[rgba(201,169,110,0.04)] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-[rgba(201,169,110,0.03)] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={sectionRef}>
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="block w-8 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase font-inter font-medium">
              {t.process.label}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-playfair font-bold text-[#F5F0EB] tracking-[-0.03em] leading-[1.1] max-w-lg"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {t.process.h2Line1}
              <br />
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, #D4B896 0%, #C9A96E 45%, #B39060 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.process.h2Line2}
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="text-[rgba(245,240,235,0.55)] text-sm leading-[1.75] max-w-xs"
            >
              {t.process.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line (desktop) */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden"
            style={{ background: "rgba(42,42,42,0.6)" }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                scaleY: lineScaleY,
                height: "100%",
                background:
                  "linear-gradient(to bottom, transparent 0%, #C9A96E 20%, #C9A96E 80%, transparent 100%)",
                opacity: 0.5,
              }}
            />
          </div>

          {t.process.steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} totalInView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-20 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-[rgba(245,240,235,0.45)] text-xs tracking-[0.1em] uppercase font-inter">
            {t.process.readyCta}
          </p>
          <WhatsAppButton
            label={t.process.cta}
            size="lg"
            message={t.process.ctaWa}
          />
          <p className="text-[rgba(245,240,235,0.25)] text-[10px] font-inter tracking-wide">
            {t.process.ctaNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
