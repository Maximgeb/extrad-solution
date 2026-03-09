"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { WHATSAPP_LINK } from "./ui/WhatsAppButton";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const waUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent("Bonjour, je souhaite une consultation confidentielle concernant vos services.")}`;

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-[#0A0A0A] relative overflow-hidden" style={{ borderTop: "1px solid rgba(42,42,42,0.6)" }}>
      {/* Top gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: EASE }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, #C9A96E 0%, rgba(201,169,110,0.3) 50%, transparent 100%)" }}
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,169,110,0.03) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand — 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
            className="md:col-span-5"
          >
            <Image
              src="/logo.png"
              alt="Extrad Solution"
              width={160}
              height={40}
              className="h-8 w-auto object-contain mb-6"
            />
            <p className="text-[rgba(245,240,235,0.5)] text-sm leading-[1.75] mb-2 max-w-xs">
              Service premium de relocation internationale, discret et légal.
              Spécialiste des départs depuis Dubaï & les Émirats Arabes Unis.
            </p>
            <p className="text-[#C9A96E] text-sm font-playfair font-semibold mb-8">
              À partir de 14&nbsp;999€ par siège.
            </p>

            {/* WhatsApp block */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 group focus-visible:outline-none"
            >
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[rgba(201,169,110,0.5)]"
                style={{
                  background: "rgba(201,169,110,0.08)",
                  border: "1px solid rgba(201,169,110,0.2)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A96E">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-[#F5F0EB] text-sm font-inter font-medium group-hover:text-[#C9A96E] transition-colors duration-200">
                  WhatsApp confidentiel 24/7
                </p>
                <p className="text-[rgba(245,240,235,0.35)] text-[10px] font-inter tracking-wide mt-0.5">
                  Réponse garantie sous 2 heures
                </p>
              </div>
            </a>
          </motion.div>

          {/* Services — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="md:col-span-3"
          >
            <h4 className="text-[rgba(245,240,235,0.4)] text-[9px] tracking-[0.2em] uppercase font-inter font-medium mb-6">
              Services
            </h4>
            <ul className="space-y-3.5">
              {[
                "Évacuation urgente Dubaï",
                "Relocation internationale",
                "Préparation & logistique",
                "Accompagnement continu",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-[rgba(245,240,235,0.5)] hover:text-[#C9A96E] text-sm font-inter transition-colors duration-200 focus-visible:outline-none"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact — 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="md:col-span-4"
          >
            <h4 className="text-[rgba(245,240,235,0.4)] text-[9px] tracking-[0.2em] uppercase font-inter font-medium mb-6">
              Informations
            </h4>
            <ul className="space-y-5">
              {[
                { label: "Disponibilité", value: "24h/24 · 7j/7" },
                { label: "Zone principale", value: "Dubaï · UAE · Monde entier" },
                { label: "Délai d'intervention", value: "24 à 72 heures" },
                { label: "Tarification", value: "À partir de 14 999€ / siège" },
              ].map((item) => (
                <li key={item.label}>
                  <p className="text-[rgba(245,240,235,0.3)] text-[9px] tracking-[0.15em] uppercase font-inter mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[rgba(245,240,235,0.6)] text-sm font-inter">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(42,42,42,0.6)" }}
        >
          <p className="text-[rgba(245,240,235,0.25)] text-[10px] font-inter tracking-wide">
            © {year} Extrad Solution. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {["Service 100% légal", "Confidentialité absolue", "Consentement exigé"].map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                {i > 0 && <span className="w-px h-3 bg-[rgba(42,42,42,0.8)]" />}
                <span className="text-[rgba(245,240,235,0.2)] text-[9px] font-inter tracking-[0.1em]">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
