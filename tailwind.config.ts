import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        "black-elevated": "#141414",
        "black-card": "#1A1A1A",
        "black-border": "#2A2A2A",
        gold: "#C9A96E",
        "gold-light": "#D4B896",
        "gold-dark": "#B39060",
        offwhite: "#F5F0EB",
        "offwhite-muted": "rgba(245,240,235,0.6)",
        "offwhite-dim": "rgba(245,240,235,0.35)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxury: "-0.03em",
        wide: "0.12em",
        widest: "0.2em",
      },
      lineHeight: {
        luxury: "1.1",
        body: "1.7",
      },
      boxShadow: {
        "gold-sm": "0 4px 16px rgba(201,169,110,0.08), 0 1px 4px rgba(0,0,0,0.4)",
        "gold-md": "0 8px 32px rgba(201,169,110,0.12), 0 4px 12px rgba(0,0,0,0.5)",
        "gold-lg": "0 20px 60px rgba(201,169,110,0.18), 0 8px 24px rgba(0,0,0,0.6)",
        card: "0 2px 8px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(245,240,235,0.06)",
        nav: "0 1px 0 rgba(201,169,110,0.12), 0 8px 32px rgba(0,0,0,0.7)",
        button: "0 4px 20px rgba(201,169,110,0.3), 0 1px 4px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
