"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex items-center gap-0.5 rounded-sm overflow-hidden"
      style={{ border: "1px solid rgba(201,169,110,0.2)" }}
    >
      {(["fr", "en"] as const).map((l) => (
        <motion.button
          key={l}
          onClick={() => setLang(l)}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-[9px] font-inter font-semibold tracking-[0.12em] uppercase transition-all duration-200 focus-visible:outline-none"
          style={{
            background: lang === l ? "rgba(201,169,110,0.15)" : "transparent",
            color: lang === l ? "#C9A96E" : "rgba(245,240,235,0.35)",
          }}
          aria-label={l === "fr" ? "Français" : "English"}
        >
          <span className="text-sm leading-none">{l === "fr" ? "🇫🇷" : "🇬🇧"}</span>
          <span>{l.toUpperCase()}</span>
        </motion.button>
      ))}
    </div>
  );
}
