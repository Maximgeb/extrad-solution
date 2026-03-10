"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_LINK } from "./ui/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

const lineGrow = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: EASE },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.45]);

  const WHATSAPP_CONSULT = `${WHATSAPP_LINK}?text=${encodeURIComponent(t.hero.cta1 === "Demander une consultation" ? "Bonjour, je souhaite une consultation confidentielle urgente pour un rapatriement depuis Dubaï vers Paris CDG." : "Hello, I'd like an urgent confidential consultation for a departure from Dubai to Paris CDG.")}`;
  const WHATSAPP_DIRECT = `${WHATSAPP_LINK}?text=${encodeURIComponent(t.hero.cta2 === "Parler sur WhatsApp" ? "Bonjour, je souhaite vous parler directement de mon rapatriement depuis Dubaï." : "Hello, I'd like to speak directly about my departure from Dubai.")}`;

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] flex flex-col overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div className="absolute inset-0 scale-[1.06]" style={{ y: imageY }}>
        <Image
          src="/hero-pc.png"
          alt="Extrad Solution — Rapatriement depuis Dubaï"
          fill
          className="object-cover object-center hidden md:block"
          priority
          quality={95}
        />
        <Image
          src="/hero-mobile.png"
          alt="Extrad Solution — Rapatriement depuis Dubaï"
          fill
          className="object-cover object-[50%_25%] block md:hidden"
          priority
          quality={95}
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-bl from-[#C9A96E]/6 via-transparent to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(10,10,10,0.65) 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />
      <motion.div className="absolute inset-0 bg-[#0A0A0A]" style={{ opacity: overlayOpacity }} />

      {/* Spacer */}
      <div className="flex-1 min-h-[80px]" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full pb-12 md:pb-24"
        style={{ y: contentY }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-xl">

            {/* Route badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <motion.span
                variants={lineGrow}
                className="block h-px origin-left flex-shrink-0"
                style={{ width: 32, background: "#C9A96E" }}
              />
              <span className="text-[#C9A96E] text-[10px] tracking-[0.22em] uppercase font-inter font-medium">
                {t.hero.badge}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="font-playfair font-bold text-[#F5F0EB] leading-[1.06] tracking-[-0.03em] mb-5"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              {t.hero.h1Line1}
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
                {t.hero.h1Line2}
              </em>
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={fadeUp}
              className="text-[rgba(245,240,235,0.62)] text-[0.95rem] leading-[1.75] mb-5 max-w-[430px]"
            >
              {t.hero.body}
            </motion.p>

            {/* Price — compact */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-9">
              <span className="text-[#C9A96E] font-inter font-medium text-sm">
                {t.hero.priceLabel}{" "}
                <strong className="font-playfair font-semibold text-[0.95rem]">
                  14&nbsp;999€
                </strong>{" "}
                {t.hero.priceSuffix}
              </span>
              <span className="w-px h-3 bg-[rgba(201,169,110,0.3)]" />
              <span className="text-[rgba(245,240,235,0.3)] text-[10px] font-inter">
                {t.hero.consultLabel}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <motion.a
                href={WHATSAPP_CONSULT}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(201,169,110,0.32)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="inline-flex items-center gap-3 bg-[#C9A96E] text-black text-[10px] font-inter font-bold tracking-[0.12em] uppercase px-8 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.hero.cta1}
              </motion.a>

              <motion.a
                href={WHATSAPP_DIRECT}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="inline-flex items-center gap-2 text-[rgba(245,240,235,0.6)] hover:text-[#F5F0EB] text-[10px] font-inter font-medium tracking-[0.12em] uppercase py-4 transition-colors duration-300 group focus-visible:outline-none"
              >
                {t.hero.cta2}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.a>
            </motion.div>

            {/* USP stats */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-6 md:gap-10 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(201,169,110,0.15)" }}
            >
              {t.hero.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.08, duration: 0.6, ease: EASE }}
                  className="flex flex-col items-center text-center"
                >
                  <span className="font-playfair font-bold text-[#C9A96E] text-base leading-none tracking-[-0.02em]">
                    {stat.value}
                  </span>
                  <span className="text-[rgba(245,240,235,0.3)] text-[8px] tracking-[0.18em] uppercase font-inter mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[rgba(245,240,235,0.28)] text-[8px] tracking-[0.22em] uppercase font-inter rotate-90">
          Défiler
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.35, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[rgba(201,169,110,0.6)] to-transparent origin-top mt-2"
        />
      </motion.div>
    </section>
  );
}
