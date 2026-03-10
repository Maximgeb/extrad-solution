"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "./ui/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StickyWhatsApp() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(t.sticky.wa)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onHoverStart={() => setExpanded(true)}
            onHoverEnd={() => setExpanded(false)}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex items-center gap-0 overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            style={{
              background: "rgba(20, 18, 14, 0.92)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(201, 169, 110, 0.25)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.5), 0 4px 16px rgba(201,169,110,0.12), inset 0 1px 0 rgba(245,240,235,0.06)",
            }}
          >
            {/* Icon pill */}
            <div className="flex items-center justify-center w-12 h-12 text-gold flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>

            {/* Expanded label */}
            <motion.div
              initial={false}
              animate={expanded ? { width: "auto", opacity: 1, paddingRight: 16 } : { width: 0, opacity: 0, paddingRight: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden flex flex-col whitespace-nowrap"
            >
              <span className="text-[#F5F0EB] text-[10px] font-inter font-semibold tracking-[0.1em] uppercase leading-tight">
                {t.sticky.label}
              </span>
              <span className="text-[rgba(201,169,110,0.7)] text-[9px] font-inter tracking-[0.08em] uppercase leading-tight mt-0.5">
                {t.sticky.sub}
              </span>
            </motion.div>
          </motion.a>

          {/* Subtle pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut", repeatDelay: 1 }}
            className="absolute inset-0 rounded-sm border border-gold/30 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
