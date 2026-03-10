"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_LINK } from "@/components/ui/WhatsAppButton";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp (prioritaire)",
    value: "Disponible 24h/24 · 7j/7",
    sub: "Réponse garantie sous 2 heures",
    href: `${WHATSAPP_LINK}?text=${encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services.")}`,
    cta: "Écrire sur WhatsApp",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "E-mail",
    value: "[À COMPLÉTER — contact@extrad-solution.com]",
    sub: "Réponse sous 24 heures ouvrées",
    href: "mailto:[À COMPLÉTER]",
    cta: "Envoyer un e-mail",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Téléphone",
    value: "[À COMPLÉTER]",
    sub: "Disponible sur rendez-vous",
    href: "tel:[À COMPLÉTER]",
    cta: "Appeler",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adresse",
    value: "[À COMPLÉTER]",
    sub: "Consultations sur rendez-vous uniquement",
    href: undefined,
    cta: undefined,
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen">
        {/* Header */}
        <div className="pt-36 pb-16 relative" style={{ borderBottom: "1px solid rgba(42,42,42,0.6)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top center, rgba(201,169,110,0.04) 0%, transparent 60%)" }}
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="block w-8 h-px bg-[#C9A96E]" />
              <a href="/" className="text-[#C9A96E] text-[10px] tracking-[0.2em] uppercase font-inter font-medium hover:opacity-70 transition-opacity">
                Extrad Solution
              </a>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-playfair font-bold text-[#F5F0EB] tracking-[-0.03em] leading-[1.1] mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Nous contacter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="text-[rgba(245,240,235,0.5)] text-sm leading-[1.75] max-w-md"
            >
              Notre équipe est disponible 24h/24 pour répondre à vos demandes. Le canal WhatsApp est le moyen le plus rapide pour obtenir une réponse.
            </motion.p>
          </div>
        </div>

        {/* Contact cards */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.75, delay: 0.1 + i * 0.09, ease: EASE }}
                  className="group rounded-sm p-7 relative overflow-hidden"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(42,42,42,0.8)",
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at top left, rgba(201,169,110,0.05) 0%, transparent 70%)" }}
                  />
                  <div className="relative">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center mb-5"
                      style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.15)", color: "#C9A96E" }}
                    >
                      {item.icon}
                    </div>
                    <p className="text-[rgba(245,240,235,0.35)] text-[9px] tracking-[0.15em] uppercase font-inter mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#F5F0EB] text-sm font-inter font-medium mb-1">
                      {item.value}
                    </p>
                    <p className="text-[rgba(245,240,235,0.35)] text-xs font-inter mb-5">
                      {item.sub}
                    </p>
                    {item.href && item.cta && (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-[#C9A96E] text-xs font-inter font-medium tracking-[0.05em] uppercase hover:opacity-70 transition-opacity focus-visible:outline-none"
                      >
                        {item.cta}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 9L9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legal notice */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              className="mt-10 max-w-4xl rounded-sm p-6"
              style={{ background: "rgba(201,169,110,0.03)", border: "1px solid rgba(201,169,110,0.12)" }}
            >
              <p className="text-[rgba(245,240,235,0.4)] text-xs font-inter leading-[1.75]">
                <span className="text-[#C9A96E]">ℹ </span>
                Extrad Solution est un prestataire de coordination logistique. Nous ne fournissons pas de conseil juridique direct. Toutes nos communications sont traitées avec la plus stricte confidentialité. Conformément à notre <a href="/politique-de-confidentialite" className="text-[#C9A96E] hover:underline">politique de confidentialité</a>, vos données ne sont jamais partagées avec des tiers sans votre consentement.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
