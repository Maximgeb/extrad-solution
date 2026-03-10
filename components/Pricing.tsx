"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_LINK } from "./ui/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Pricing() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const waUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(t.pricing.cta === "Réserver ma consultation" ? "Bonjour, je souhaite obtenir un devis personnalisé pour un rapatriement depuis Dubaï." : "Hello, I'd like to get a personalised quote for a departure from Dubai.")}`;

  return (
    <section id="tarifs" className="py-28 md:py-36 bg-[#111111] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,169,110,0.045) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="block w-8 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase font-inter font-medium">
              {t.pricing.label}
            </span>
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-playfair font-bold text-[#F5F0EB] tracking-[-0.03em] leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {t.pricing.h2Line1}
              <br />
              <em className="not-italic" style={{
                background: "linear-gradient(135deg, #D4B896 0%, #C9A96E 45%, #B39060 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {t.pricing.h2Line2}
              </em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="text-[rgba(245,240,235,0.5)] text-sm leading-[1.75] max-w-xs"
            >
              {t.pricing.subtitle}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="relative rounded-sm overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #1A1610 0%, #141414 60%, #0F0F0F 100%)",
              border: "1px solid rgba(201,169,110,0.3)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.5), 0 4px 16px rgba(201,169,110,0.1)",
            }}
          >
            {/* Featured badge */}
            <div className="absolute top-0 right-0">
              <div
                className="px-4 py-1.5 text-[9px] tracking-[0.2em] uppercase font-inter font-bold text-black"
                style={{ background: "#C9A96E" }}
              >
                {t.pricing.badge}
              </div>
            </div>

            <div className="p-8 md:p-10">
              {/* Route */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[rgba(245,240,235,0.6)] text-sm font-inter">{t.pricing.routeFrom}</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                  className="flex-1 h-px origin-left"
                  style={{ background: "linear-gradient(90deg, #C9A96E, rgba(201,169,110,0.3))" }}
                />
                <span className="text-[#F5F0EB] text-sm font-inter font-medium">{t.pricing.routeTo}</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className="font-playfair font-bold text-[#C9A96E] block leading-none tracking-[-0.03em]"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 3.5rem)" }}
                >
                  {t.pricing.price}
                </span>
                <span className="text-[rgba(245,240,235,0.4)] text-xs font-inter tracking-wide mt-2 block">
                  {t.pricing.priceSub}
                </span>
              </div>

              {/* Divider */}
              <div
                className="mb-6"
                style={{ height: "1px", background: "linear-gradient(90deg, rgba(201,169,110,0.3), transparent)" }}
              />

              {/* Inclusions */}
              <ul className="space-y-3 mb-10">
                {t.pricing.includes.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.6, ease: EASE }}
                    className="flex items-start gap-3 text-sm text-[rgba(245,240,235,0.6)]"
                  >
                    <span className="text-[#C9A96E] flex-shrink-0 text-[10px] mt-0.5">✦</span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(201,169,110,0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="inline-flex items-center gap-3 bg-[#C9A96E] text-black text-[10px] font-inter font-bold tracking-[0.12em] uppercase w-full justify-center py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.pricing.cta}
              </motion.a>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="flex flex-col gap-4"
          >
            {/* Other routes */}
            <div
              className="rounded-sm p-7 flex-1"
              style={{ background: "#141414", border: "1px solid rgba(42,42,42,0.8)" }}
            >
              <p className="text-[rgba(245,240,235,0.4)] text-[9px] tracking-[0.2em] uppercase font-inter mb-6">
                {t.pricing.otherRoutesLabel}
              </p>
              <div className="space-y-4">
                {t.pricing.routes.map((route, i) => (
                  <motion.div
                    key={`${route.from}-${route.to}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: EASE }}
                    className="flex items-center justify-between py-4"
                    style={{ borderBottom: i < t.pricing.routes.length - 1 ? "1px solid rgba(42,42,42,0.8)" : "none" }}
                  >
                    <div>
                      <p className="text-[#F5F0EB] text-sm font-inter font-medium">
                        {route.from} → {route.to}
                      </p>
                      <p className="text-[rgba(245,240,235,0.35)] text-[10px] font-inter mt-0.5">
                        {route.note}
                      </p>
                    </div>
                    <span className="text-[#C9A96E] font-playfair font-semibold text-base tracking-[-0.02em]">
                      {route.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Custom quote card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="rounded-sm p-7"
              style={{
                background: "rgba(201,169,110,0.06)",
                border: "1px solid rgba(201,169,110,0.18)",
              }}
            >
              <p className="text-[#F5F0EB] text-base font-playfair font-semibold tracking-[-0.02em] mb-2">
                {t.pricing.customTitle}
              </p>
              <p className="text-[rgba(245,240,235,0.5)] text-sm leading-[1.7] mb-5">
                {t.pricing.customBody}
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A96E] hover:text-[#D4B896] text-[9px] tracking-[0.18em] uppercase font-inter font-semibold border border-[rgba(201,169,110,0.35)] hover:border-[rgba(201,169,110,0.65)] px-5 py-2.5 transition-all duration-200 focus-visible:outline-none group"
              >
                {t.pricing.customCta}
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
