"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_LINK } from "./ui/WhatsAppButton";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const waUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent("Bonjour, je souhaite une consultation confidentielle. Pouvez-vous me recontacter ?")}`;

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(201,169,110,1) 0px, rgba(201,169,110,1) 1px, transparent 1px, transparent 64px)",
        }}
      />
      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201,169,110,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="block w-8 h-px" style={{ background: "#C9A96E" }} />
          <span className="text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase font-inter font-medium">
            Première étape
          </span>
          <span className="block w-8 h-px" style={{ background: "#C9A96E" }} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="font-playfair font-bold text-[#F5F0EB] tracking-[-0.03em] leading-[1.08] mb-6"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
        >
          Votre situation est unique.
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
            Notre réponse aussi.
          </em>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="text-[rgba(245,240,235,0.55)] text-base md:text-lg leading-[1.75] mb-4 max-w-xl mx-auto"
        >
          Un seul message suffit pour démarrer. Votre consultation est
          confidentielle, sans engagement, disponible 24h/24.
        </motion.p>

        {/* Pricing */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.28, ease: EASE }}
          className="text-[#C9A96E] font-playfair font-semibold text-xl tracking-[-0.02em] mb-12"
        >
          À partir de 14&nbsp;999€ par siège.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-3 bg-[#C9A96E] text-black text-xs font-inter font-semibold tracking-[0.1em] uppercase px-10 py-4.5 hover:bg-[#D4B896] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            style={{ paddingTop: "18px", paddingBottom: "18px" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Démarrer maintenant
          </motion.a>
          <p className="text-[rgba(245,240,235,0.2)] text-[10px] font-inter tracking-wide">
            Consultation confidentielle · Sans engagement · Réponse sous 2 heures
          </p>
        </motion.div>
      </div>
    </section>
  );
}
