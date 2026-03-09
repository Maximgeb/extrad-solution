"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { value: "100%", label: "Légal & consenti", description: "Chaque engagement respecte les législations locales et internationales." },
  { value: "72h", label: "Délai maximum", description: "De la consultation initiale au départ effectif, en moins de 72 heures." },
  { value: "50+", label: "Pays desservis", description: "Un réseau mondial de partenaires de confiance, sur tous les continents." },
  { value: "0", label: "Trace numérique", description: "Protocole de confidentialité strict. Votre identité et vos données restent protégées." },
];

const GUARANTEES = [
  {
    title: "Confidentialité absolue",
    description:
      "Vos informations personnelles ne sont jamais partagées. Nos communications sont chiffrées. Votre vie privée est notre priorité absolue.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: "Service 100% légal",
    description:
      "Extrad Solution opère exclusivement dans le cadre légal. Tous nos processus sont conformes aux lois en vigueur dans les pays d'intervention.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Engagement personnel",
    description:
      "Vous avez un interlocuteur unique et dédié tout au long de votre dossier. Pas de standard, pas de délégation — un humain, disponible pour vous.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

export default function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="confiance" className="py-28 md:py-36 bg-black-elevated relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="block w-8 h-px bg-gold" />
            <span className="text-gold text-xs tracking-widest uppercase font-inter font-medium">
              Pourquoi nous
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-bold text-offwhite tracking-luxury leading-luxury"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            La confiance se mérite.
            <br />
            <em className="not-italic text-gradient-gold">Nous la prouvons.</em>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black-border mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black-card p-8 md:p-10 flex flex-col"
            >
              <span
                className="font-playfair font-bold text-gradient-gold tracking-luxury leading-none mb-3"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
              >
                {stat.value}
              </span>
              <span className="text-offwhite text-sm font-inter font-medium mb-3 leading-snug">
                {stat.label}
              </span>
              <p className="text-offwhite-dim text-xs leading-body font-inter">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {GUARANTEES.map((guarantee, i) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black-card border border-black-border rounded-sm p-8 shadow-card"
            >
              <div className="text-gold mb-5">{guarantee.icon}</div>
              <h3 className="font-playfair font-bold text-offwhite text-lg tracking-luxury leading-luxury mb-3">
                {guarantee.title}
              </h3>
              <div className="gold-divider mb-4" />
              <p className="text-offwhite-muted text-sm leading-body">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center text-offwhite-dim text-xs leading-body max-w-2xl mx-auto font-inter"
        >
          Extrad Solution n&apos;intervient que dans des situations légales et avec le
          consentement total de la personne concernée. Nous ne facilitons aucune
          activité illicite, coercitive ou contraire aux droits fondamentaux.
        </motion.p>
      </div>
    </section>
  );
}
