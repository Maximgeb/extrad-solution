"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const PILLARS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Confidentialité absolue",
    description: "Chaque échange, chaque document, chaque déplacement opère dans un cadre strictement confidentiel.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    title: "Consentement systématique",
    description: "Aucune action n'est entreprise sans votre validation explicite. Vous restez décisionnaire à chaque étape.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Conformité juridique",
    description: "Service 100% légal. Nos opérations respectent le droit international et les législations locales.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: "Interlocuteur dédié",
    description: "Un conseiller unique suit votre dossier de la première consultation jusqu'à l'arrivée à destination.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Coordination 24/7",
    description: "Notre équipe opère sans interruption. Délais courts, réactivité maximale, zéro heure d'attente inutile.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Réseau international vérifié",
    description: "Partenaires sélectionnés dans 50+ pays : juridiques, logistiques, aviation. Chaque maillon est certifié.",
  },
];

const PROOF = [
  { value: "< 2h", label: "Réponse initiale" },
  { value: "24–72h", label: "Coordination départ" },
  { value: "50+", label: "Pays couverts" },
  { value: "100%", label: "Cadre légal" },
];

const INCLUDES = [
  "Évaluation confidentielle initiale",
  "Coordination personnalisée du départ",
  "Logistique adaptée au niveau d'urgence",
  "Orientation juridique via partenaires selon besoin",
  "Suivi direct jusqu'à exécution complète",
];

export default function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(201,169,110,0.04) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(201,169,110,0.03) 0%, transparent 65%)" }}
      />
      {/* Subtle separator top */}
      <div className="absolute top-0 left-6 right-6 lg:left-12 lg:right-12 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(42,42,42,0.8), transparent)" }} />

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
              Cadre d'engagement
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
              Un service bâti sur
              <br />
              <em className="not-italic" style={{
                background: "linear-gradient(135deg, #D4B896 0%, #C9A96E 45%, #B39060 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                la confiance et la rigueur.
              </em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="text-[rgba(245,240,235,0.5)] text-sm leading-[1.75] max-w-xs"
            >
              Chaque engagement repose sur six piliers non négociables,
              appliqués sans exception à chaque dossier.
            </motion.p>
          </div>
        </div>

        {/* 6 pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.85, delay: 0.1 + i * 0.08, ease: EASE }}
              className="group relative rounded-sm p-7 overflow-hidden"
              style={{
                background: "#111111",
                border: "1px solid rgba(42,42,42,0.8)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(201,169,110,0.05) 0%, transparent 70%)" }}
              />
              {/* Top gold line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, #C9A96E, rgba(201,169,110,0.2), transparent)" }}
              />

              <div className="relative">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-5 transition-all duration-300 group-hover:border-[rgba(201,169,110,0.35)]"
                  style={{
                    background: "rgba(201,169,110,0.06)",
                    border: "1px solid rgba(201,169,110,0.15)",
                    color: "#C9A96E",
                  }}
                >
                  {pillar.icon}
                </div>
                <h3 className="font-playfair font-semibold text-[#F5F0EB] text-base tracking-[-0.02em] mb-2 leading-[1.3]">
                  {pillar.title}
                </h3>
                <p className="text-[rgba(245,240,235,0.45)] text-sm leading-[1.7]">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: proof stats + includes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">

          {/* Proof stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.55, ease: EASE }}
            className="rounded-sm p-7"
            style={{
              background: "rgba(201,169,110,0.04)",
              border: "1px solid rgba(201,169,110,0.14)",
            }}
          >
            <p className="text-[rgba(245,240,235,0.35)] text-[9px] tracking-[0.2em] uppercase font-inter mb-7">
              Indicateurs opérationnels
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              {PROOF.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.65 + i * 0.07, ease: EASE }}
                >
                  <span
                    className="font-playfair font-bold text-[#C9A96E] block leading-none tracking-[-0.03em] mb-1.5"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
                  >
                    {item.value}
                  </span>
                  <span className="text-[rgba(245,240,235,0.35)] text-[9px] tracking-[0.15em] uppercase font-inter">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Includes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.65, ease: EASE }}
            className="rounded-sm p-7"
            style={{
              background: "#111111",
              border: "1px solid rgba(42,42,42,0.8)",
            }}
          >
            <p className="text-[rgba(245,240,235,0.35)] text-[9px] tracking-[0.2em] uppercase font-inter mb-7">
              Ce qui est inclus
            </p>
            <ul className="space-y-4">
              {INCLUDES.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.75 + i * 0.07, ease: EASE }}
                  className="flex items-start gap-3 text-sm text-[rgba(245,240,235,0.55)]"
                >
                  <span className="text-[#C9A96E] flex-shrink-0 text-[10px] mt-0.5">✦</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
