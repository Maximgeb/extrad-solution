"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WhatsAppButton from "./ui/WhatsAppButton";
import { WHATSAPP_LINK } from "./ui/WhatsAppButton";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const DUBAI_FEATURES = [
  "Extraction en 24 à 72 heures",
  "Réseau d'avocats et conseillers locaux",
  "Aviation privée au départ de DXB & SHJ",
  "Connaissance approfondie du droit UAE",
  "Accompagnement administratif complet",
  "Discrétion certifiée — zéro trace numérique",
];

const WORLD_DESTINATIONS = [
  { region: "Europe", cities: "Paris · Londres · Genève · Madrid · Amsterdam" },
  { region: "Asie-Pacifique", cities: "Singapour · Bangkok · Tokyo · Hong Kong" },
  { region: "Amériques", cities: "Miami · New York · Montréal · Mexico" },
  { region: "Afrique & Moyen-Orient", cities: "Maroc · Jordanie · Qatar · Kenya" },
];

/* Minimal SVG globe — pure vector, no external deps */
function Globe() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden
    >
      {/* Outer ring */}
      <circle cx="160" cy="160" r="140" stroke="rgba(201,169,110,0.12)" strokeWidth="1" />
      {/* Mid ring */}
      <circle cx="160" cy="160" r="100" stroke="rgba(201,169,110,0.08)" strokeWidth="1" />
      {/* Inner ring */}
      <circle cx="160" cy="160" r="60" stroke="rgba(201,169,110,0.06)" strokeWidth="1" />
      {/* Core */}
      <circle cx="160" cy="160" r="20" stroke="rgba(201,169,110,0.1)" strokeWidth="1" />
      <circle cx="160" cy="160" r="4" fill="rgba(201,169,110,0.4)" />

      {/* Latitude lines */}
      <ellipse cx="160" cy="160" rx="140" ry="50" stroke="rgba(201,169,110,0.07)" strokeWidth="0.8" />
      <ellipse cx="160" cy="160" rx="140" ry="100" stroke="rgba(201,169,110,0.06)" strokeWidth="0.8" />
      <ellipse cx="160" cy="130" rx="120" ry="30" stroke="rgba(201,169,110,0.05)" strokeWidth="0.8" />

      {/* Longitude lines */}
      <line x1="160" y1="20" x2="160" y2="300" stroke="rgba(201,169,110,0.08)" strokeWidth="0.8" />
      <line x1="20" y1="160" x2="300" y2="160" stroke="rgba(201,169,110,0.08)" strokeWidth="0.8" />
      <line x1="60" y1="50" x2="260" y2="270" stroke="rgba(201,169,110,0.05)" strokeWidth="0.8" />
      <line x1="260" y1="50" x2="60" y2="270" stroke="rgba(201,169,110,0.05)" strokeWidth="0.8" />

      {/* Route lines */}
      {/* Dubai to Europe */}
      <path
        d="M 195 148 Q 200 120 170 110 Q 155 100 130 105"
        stroke="rgba(201,169,110,0.35)"
        strokeWidth="1"
        strokeDasharray="4 3"
        fill="none"
      />
      {/* Dubai to Asia */}
      <path
        d="M 195 148 Q 220 140 235 150 Q 250 160 240 175"
        stroke="rgba(201,169,110,0.25)"
        strokeWidth="1"
        strokeDasharray="4 3"
        fill="none"
      />
      {/* Dubai to Americas */}
      <path
        d="M 195 148 Q 190 175 180 190 Q 160 210 130 205 Q 100 200 85 185"
        stroke="rgba(201,169,110,0.2)"
        strokeWidth="1"
        strokeDasharray="4 3"
        fill="none"
      />

      {/* Dubai node — gold, prominent */}
      <circle cx="195" cy="148" r="5" fill="#C9A96E" opacity="0.9" />
      <circle cx="195" cy="148" r="10" stroke="#C9A96E" strokeWidth="1" opacity="0.3" />
      <circle cx="195" cy="148" r="16" stroke="#C9A96E" strokeWidth="0.5" opacity="0.15" />

      {/* Paris */}
      <circle cx="130" cy="105" r="2.5" fill="rgba(245,240,235,0.5)" />
      {/* London */}
      <circle cx="120" cy="98" r="2" fill="rgba(245,240,235,0.4)" />
      {/* Singapore */}
      <circle cx="240" cy="175" r="2.5" fill="rgba(245,240,235,0.5)" />
      {/* Miami */}
      <circle cx="85" cy="185" r="2" fill="rgba(245,240,235,0.4)" />
      {/* Geneva */}
      <circle cx="138" cy="110" r="2" fill="rgba(245,240,235,0.35)" />
    </svg>
  );
}

export default function Destinations() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const dubaiUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent("Bonjour, je souhaite organiser un départ depuis Dubaï / les Émirats. Pouvez-vous me contacter en toute confidentialité ?")}`;
  const otherUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent("Bonjour, ma destination cible n'est pas listée. Pouvez-vous m'aider ?")}`;

  return (
    <section
      id="destinations"
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: "#111111" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* Globe glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="block w-8 h-px" style={{ background: "#C9A96E" }} />
            <span className="text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase font-inter font-medium">
              Destinations
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-playfair font-bold text-[#F5F0EB] tracking-[-0.03em] leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Dubaï — et bien au-delà.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          {/* Dubai card */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="relative rounded-sm overflow-hidden p-8 md:p-10"
            style={{
              background: "#141414",
              border: "1px solid rgba(201,169,110,0.25)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4), 0 4px 16px rgba(201,169,110,0.08)",
            }}
          >
            {/* Ambient */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(201,169,110,0.06) 0%, transparent 70%)" }}
            />
            {/* Arabic character watermark */}
            <div
              className="absolute top-4 right-6 font-playfair font-bold select-none pointer-events-none"
              style={{ fontSize: "8rem", color: "rgba(201,169,110,0.05)", lineHeight: 1 }}
            >
              د
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-8"
              style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              <span className="text-[#C9A96E] text-[9px] tracking-[0.2em] uppercase font-inter font-medium">
                Spécialité principale
              </span>
            </div>

            <h3 className="font-playfair font-bold text-[#F5F0EB] text-2xl md:text-3xl tracking-[-0.03em] leading-[1.1] mb-2">
              Dubaï & Émirats
            </h3>
            <p className="text-[#C9A96E] text-[9px] tracking-[0.2em] uppercase font-inter font-medium mb-6">
              UAE · DXB · SHJ · AUH
            </p>

            <div
              className="mb-8"
              style={{
                height: "1px",
                background: "linear-gradient(90deg, #C9A96E 0%, rgba(201,169,110,0.2) 60%, transparent 100%)",
              }}
            />

            <p className="text-[rgba(245,240,235,0.58)] text-sm leading-[1.75] mb-8">
              Notre expertise principale. Nous opérons aux Émirats et disposons
              d&apos;un réseau de confiance permettant une intervention rapide et
              totalement discrète, dans le respect total des lois en vigueur.
            </p>

            <ul className="space-y-3 mb-10">
              {DUBAI_FEATURES.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.6, ease: EASE }}
                  className="flex items-start gap-3 text-sm text-[rgba(245,240,235,0.58)]"
                >
                  <span className="text-[#C9A96E] mt-0.5 flex-shrink-0 text-[10px]">✦</span>
                  {feature}
                </motion.li>
              ))}
            </ul>

            <a
              href={dubaiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C9A96E] text-black text-[10px] font-inter font-semibold tracking-[0.1em] uppercase px-7 py-3.5 hover:bg-[#D4B896] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Partir de Dubaï
            </a>
          </motion.div>

          {/* Right column — globe + world */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="flex flex-col gap-4"
          >
            {/* Globe visual */}
            <div
              className="relative rounded-sm overflow-hidden p-6"
              style={{
                background: "#141414",
                border: "1px solid rgba(42,42,42,0.8)",
                minHeight: "220px",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <div className="w-56 h-56">
                  <Globe />
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="font-playfair font-bold text-[#F5F0EB] text-xl tracking-[-0.025em] leading-[1.2] mb-1">
                  Réseau mondial
                </h3>
                <p className="text-[rgba(245,240,235,0.35)] text-[9px] tracking-[0.2em] uppercase font-inter mb-3">
                  50+ pays · Partenaires locaux de confiance
                </p>
                <p className="text-[rgba(245,240,235,0.5)] text-sm leading-[1.7] max-w-xs">
                  Quelle que soit votre destination, nous coordonnons votre relocation
                  avec des experts implantés localement.
                </p>
              </div>
            </div>

            {/* Destinations list */}
            <div
              className="rounded-sm p-7 flex-1"
              style={{
                background: "#141414",
                border: "1px solid rgba(42,42,42,0.8)",
              }}
            >
              <div className="space-y-5">
                {WORLD_DESTINATIONS.map((dest, i) => (
                  <motion.div
                    key={dest.region}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: EASE }}
                    className="pb-5 last:pb-0"
                    style={{
                      borderBottom: i < WORLD_DESTINATIONS.length - 1 ? "1px solid rgba(42,42,42,0.8)" : "none",
                    }}
                  >
                    <p className="text-[#C9A96E] text-[9px] tracking-[0.2em] uppercase font-inter font-medium mb-1.5">
                      {dest.region}
                    </p>
                    <p className="text-[rgba(245,240,235,0.55)] text-sm font-inter leading-[1.6]">
                      {dest.cities}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mini CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              className="rounded-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{
                background: "rgba(201,169,110,0.06)",
                border: "1px solid rgba(201,169,110,0.2)",
              }}
            >
              <div>
                <p className="text-[#F5F0EB] text-sm font-inter font-medium mb-0.5">
                  Destination non listée&nbsp;?
                </p>
                <p className="text-[rgba(245,240,235,0.4)] text-xs font-inter">
                  Nous trouvons toujours une solution.
                </p>
              </div>
              <a
                href={otherUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A96E] hover:text-[#D4B896] text-[9px] tracking-[0.15em] uppercase font-inter font-medium transition-colors duration-200 border border-[rgba(201,169,110,0.4)] hover:border-[rgba(201,169,110,0.7)] px-4 py-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
              >
                Nous contacter
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
