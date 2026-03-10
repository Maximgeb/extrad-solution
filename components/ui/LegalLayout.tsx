"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  sections: Section[];
}

export default function LegalLayout({ title, lastUpdated, sections }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="bg-[#0A0A0A] min-h-screen">
        {/* Header */}
        <div
          className="pt-36 pb-16 relative"
          style={{ borderBottom: "1px solid rgba(42,42,42,0.6)" }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top center, rgba(201,169,110,0.04) 0%, transparent 60%)" }}
          />
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-playfair font-bold text-[#F5F0EB] tracking-[-0.03em] leading-[1.1] mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              {title}
            </motion.h1>
            {lastUpdated && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[rgba(245,240,235,0.3)] text-xs font-inter"
              >
                Dernière mise à jour : {lastUpdated}
              </motion.p>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="py-16 pb-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10"
              >
                {section.title && (
                  <h2 className="font-playfair font-semibold text-[#F5F0EB] text-lg mb-4 tracking-[-0.02em]">
                    {section.title}
                  </h2>
                )}
                <div className="text-[rgba(245,240,235,0.55)] text-sm leading-[1.8] font-inter space-y-3">
                  {section.content}
                </div>
                {i < sections.length - 1 && (
                  <div className="mt-10 h-px" style={{ background: "rgba(42,42,42,0.6)" }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
