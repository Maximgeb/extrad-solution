"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppButton from "./ui/WhatsAppButton";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lang } from "@/locales/translations";

function FlagToggle() {
  const { lang, setLang } = useLanguage();
  const next: Lang = lang === "fr" ? "en" : "fr";
  return (
    <motion.button
      onClick={() => setLang(next)}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="flex items-center justify-center w-8 h-8 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
      style={{ border: "1px solid rgba(201,169,110,0.2)", background: "rgba(201,169,110,0.06)" }}
      aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
    >
      <span className="text-base leading-none">{lang === "fr" ? "🇫🇷" : "🇬🇧"}</span>
    </motion.button>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-nav py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Extrad Solution"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-offwhite-muted hover:text-offwhite text-xs tracking-widest uppercase font-inter font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <WhatsAppButton label={t.nav.cta} size="sm" />
          </div>

          {/* Mobile: flag toggle + burger */}
          <div className="lg:hidden flex items-center gap-3">
            <FlagToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              aria-label="Menu"
            >
              <span className={`block w-6 h-px bg-offwhite transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-px bg-offwhite transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-offwhite transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
      >
        <ul className="flex flex-col items-center gap-8 mb-8">
          {t.nav.links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: 16 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-offwhite text-2xl font-playfair font-medium tracking-luxury hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="mb-6">
          <LanguageSwitcher />
        </div>
        <WhatsAppButton label={t.nav.cta} size="lg" />
      </motion.div>
    </>
  );
}
