"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { WHATSAPP_LINK } from "./ui/WhatsAppButton";
import WhatsAppButton from "./ui/WhatsAppButton";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const SERVICES = [
  {
    number: "01",
    title: "Départ prioritaire confidentiel",
    subtitle: "Dubaï & Émirats",
    description:
      "Coordination confidentielle du départ depuis les Émirats Arabes Unis en moins de 72 heures. Prise en charge complète : aviation privée, logistique terrestre et accompagnement juridique.",
    tags: ["Aviation privée", "72h max", "UAE"],
    waMessage: "Bonjour, je m'intéresse au service de départ prioritaire confidentiel depuis Dubaï.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Mobilité internationale discrète",
    subtitle: "Internationale",
    description:
      "Relocation prioritaire vers votre destination de choix, partout dans le monde. Nous gérons l'intégralité de la chaîne logistique — documents, transports, hébergement de transition.",
    tags: ["Monde entier", "Clé en main", "Confidentiel"],
    waMessage: "Bonjour, je m'intéresse au service de relocation internationale discrète.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Préparation & logistique",
    subtitle: "Sur mesure",
    description:
      "Planification exhaustive de chaque détail de votre départ : itinéraires sécurisés, gestion documentaire, coordination avec nos partenaires locaux, anticipation des imprévus.",
    tags: ["Planification", "Documents", "Réseau mondial"],
    waMessage: "Bonjour, je m'intéresse au service de préparation et logistique sur mesure.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Accompagnement continu",
    subtitle: "Avant & après",
    description:
      "De la première consultation à votre installation définitive, un conseiller dédié reste votre interlocuteur unique — disponible à toute heure, en toute circonstance.",
    tags: ["Dédié 24/7", "Post-arrivée", "Confidentiel"],
    waMessage: "Bonjour, je m'intéresse au service d'accompagnement continu personnalisé.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof SERVICES)[0];
  index: number;
  inView: boolean;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const waUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(service.waMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: EASE }}
    >
      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block h-full group">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative h-full rounded-sm overflow-hidden"
          style={{
            background: "#141414",
            border: `1px solid ${hovered ? "rgba(201,169,110,0.35)" : "rgba(42,42,42,0.8)"}`,
            boxShadow: hovered
              ? "0 12px 40px rgba(0,0,0,0.5), 0 4px 16px rgba(201,169,110,0.08), inset 0 1px 0 rgba(245,240,235,0.06)"
              : "0 2px 8px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(245,240,235,0.04)",
            transition: "border-color 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          {/* Spotlight */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201,169,110,0.07) 0%, transparent 70%)`,
            }}
          />

          <div className="relative p-8 h-full flex flex-col">
            {/* Top */}
            <div className="flex items-start justify-between mb-8">
              <span
                className="font-playfair font-bold leading-none"
                style={{
                  fontSize: "3rem",
                  color: "rgba(201,169,110,0.14)",
                  letterSpacing: "-0.04em",
                  transition: "color 0.4s ease",
                  ...(hovered && { color: "rgba(201,169,110,0.25)" }),
                }}
              >
                {service.number}
              </span>
              <span
                className="transition-colors duration-300"
                style={{ color: hovered ? "#C9A96E" : "rgba(201,169,110,0.45)" }}
              >
                {service.icon}
              </span>
            </div>

            {/* Title */}
            <div className="mb-4">
              <h3 className="font-playfair font-bold text-[#F5F0EB] text-xl tracking-[-0.025em] leading-[1.2] mb-1.5">
                {service.title}
              </h3>
              <p className="text-[#C9A96E] text-[9px] tracking-[0.2em] uppercase font-inter font-medium">
                {service.subtitle}
              </p>
            </div>

            {/* Divider — animates on hover */}
            <div className="mb-5 overflow-hidden h-px">
              <motion.div
                animate={{ scaleX: hovered ? 1.5 : 1, opacity: hovered ? 1 : 0.6 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="origin-left h-full"
                style={{
                  width: "48px",
                  background: "linear-gradient(90deg, #C9A96E 0%, rgba(201,169,110,0.3) 60%, transparent 100%)",
                }}
              />
            </div>

            <p className="text-[rgba(245,240,235,0.55)] text-sm leading-[1.75] mb-8 flex-1">
              {service.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[0.15em] uppercase font-inter px-2.5 py-1 rounded-sm"
                  style={{
                    color: "rgba(201,169,110,0.6)",
                    border: "1px solid rgba(201,169,110,0.15)",
                    transition: "all 0.3s ease",
                    ...(hovered && {
                      color: "rgba(201,169,110,0.85)",
                      borderColor: "rgba(201,169,110,0.3)",
                    }),
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-2">
              <span className="text-[rgba(201,169,110,0.5)] text-[9px] tracking-[0.15em] uppercase font-inter transition-colors duration-300 group-hover:text-[rgba(201,169,110,0.85)]">
                Consulter via WhatsApp
              </span>
              <span className="text-[rgba(201,169,110,0.4)] group-hover:translate-x-1 transition-transform duration-300 text-sm">
                →
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-28 md:py-36 bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={titleRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="block w-8 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase font-inter font-medium">
              Nos services
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-playfair font-bold text-[#F5F0EB] tracking-[-0.03em] leading-[1.1] max-w-lg"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Une expertise à la hauteur
              <br />
              <em className="not-italic" style={{
                background: "linear-gradient(135deg, #D4B896 0%, #C9A96E 45%, #B39060 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                de votre situation.
              </em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="max-w-sm"
            >
              <p className="text-[rgba(245,240,235,0.55)] text-sm leading-[1.75] mb-3">
                Chaque engagement est traité avec la même exigence&nbsp;: discrétion absolue,
                efficacité maximale, zéro compromis.
              </p>
              <p className="text-[#C9A96E] text-sm font-playfair font-semibold tracking-[-0.01em]">
                À partir de 14&nbsp;999€ par siège.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={i}
              inView={gridInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <WhatsAppButton
            label="Discuter de votre situation"
            size="lg"
            variant="outline"
          />
          <p className="text-[rgba(245,240,235,0.25)] text-[10px] font-inter tracking-wide">
            Consultation confidentielle · Réponse sous 2h
          </p>
        </motion.div>
      </div>
    </section>
  );
}
