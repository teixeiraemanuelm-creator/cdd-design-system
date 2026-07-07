import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/tokens/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      // ── CDD Brand Colors ──────────────────────────────────────────────
      colors: {
        // Primitives
        "cdd-graphite":      "#121417",
        "cdd-concrete":      "#0B0D0F",
        "cdd-steel":         "#1F4B99",
        "cdd-steel-light":   "#2D5FBF",
        "cdd-steel-dark":    "#163775",
        "cdd-gold":          "#C6A96B",
        "cdd-gold-light":    "#D9C08A",
        "cdd-gold-dark":     "#A88B4E",
        "cdd-teal":          "#4FD1C5",
        "cdd-teal-light":    "#76DDD4",
        "cdd-teal-dark":     "#38B2A8",
        "cdd-success":       "#2F9E44",
        "cdd-success-light": "#40C057",
        "cdd-warning":       "#F59F00",
        "cdd-warning-light": "#FAB005",
        "cdd-error":         "#E03131",
        "cdd-error-light":   "#F03E3E",
        // Surface scale (dark theme)
        "surface-0":  "#0B0D0F",  // deepest bg
        "surface-1":  "#121417",  // main bg
        "surface-2":  "#1A1E23",  // card
        "surface-3":  "#222830",  // elevated card
        "surface-4":  "#2C3340",  // hover / input
        // Text scale
        "text-primary":   "#F4F6F8",
        "text-secondary": "#9AA3AE",
        "text-tertiary":  "#616B77",
        "text-disabled":  "#404850",
        // Light theme surfaces
        "lt-surface-0": "#FFFFFF",
        "lt-surface-1": "#F8F9FA",
        "lt-surface-2": "#F1F3F5",
        "lt-surface-3": "#E9ECEF",
        "lt-surface-4": "#DEE2E6",
        "lt-text-primary":   "#121417",
        "lt-text-secondary": "#495057",
        "lt-text-tertiary":  "#868E96",
      },

      // ── Typography ────────────────────────────────────────────────────
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "sans-serif"],
        mono:    ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px", letterSpacing: "0.04em" }],
        xs:    ["12px", { lineHeight: "16px" }],
        sm:    ["13px", { lineHeight: "18px" }],
        base:  ["15px", { lineHeight: "22px" }],
        lg:    ["17px", { lineHeight: "24px" }],
        xl:    ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "38px" }],
        "4xl": ["36px", { lineHeight: "44px" }],
        "5xl": ["48px", { lineHeight: "56px" }],
      },

      // ── Spacing ───────────────────────────────────────────────────────
      spacing: {
        "0.5": "2px",  "1": "4px",   "1.5": "6px",
        "2":   "8px",  "2.5": "10px","3": "12px",
        "4":   "16px", "5": "20px",  "6": "24px",
        "8":   "32px", "10": "40px", "12": "48px",
        "16":  "64px", "20": "80px", "24": "96px",
      },

      // ── Border radius ─────────────────────────────────────────────────
      borderRadius: {
        none: "0",
        xs:   "4px",
        sm:   "6px",
        md:   "10px",
        lg:   "14px",
        xl:   "20px",
        "2xl":"28px",
        full: "9999px",
      },

      // ── Shadows ───────────────────────────────────────────────────────
      boxShadow: {
        "cdd-xs": "0 1px 2px rgba(0,0,0,0.4)",
        "cdd-sm": "0 2px 6px rgba(0,0,0,0.45)",
        "cdd-md": "0 4px 16px rgba(0,0,0,0.5)",
        "cdd-lg": "0 8px 32px rgba(0,0,0,0.55)",
        "cdd-xl": "0 16px 64px rgba(0,0,0,0.6)",
        "glow-gold":  "0 0 0 1px rgba(198,169,107,0.3), 0 4px 16px rgba(198,169,107,0.15)",
        "glow-steel": "0 0 0 1px rgba(31,75,153,0.4), 0 4px 16px rgba(31,75,153,0.2)",
        "glow-teal":  "0 0 0 1px rgba(79,209,197,0.3), 0 4px 16px rgba(79,209,197,0.15)",
      },

      // ── Animations ────────────────────────────────────────────────────
      keyframes: {
        "cdd-fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "cdd-fade-out": {
          from: { opacity: "1", transform: "translateY(0)" },
          to:   { opacity: "0", transform: "translateY(6px)" },
        },
        "cdd-slide-in": {
          from: { opacity: "0", transform: "translateX(-8px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        "cdd-scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        "cdd-pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(198,169,107,0)" },
          "50%":       { boxShadow: "0 0 0 4px rgba(198,169,107,0.3)" },
        },
      },
      animation: {
        "cdd-fade-in":    "cdd-fade-in 0.18s ease-out both",
        "cdd-fade-out":   "cdd-fade-out 0.15s ease-in both",
        "cdd-slide-in":   "cdd-slide-in 0.2s ease-out both",
        "cdd-scale-in":   "cdd-scale-in 0.18s ease-out both",
        "cdd-pulse-gold": "cdd-pulse-gold 2s ease-in-out infinite",
      },

      // ── Grid ─────────────────────────────────────────────────────────
      gridTemplateColumns: {
        "cdd-sidebar": "260px 1fr",
        "cdd-2":  "repeat(2, 1fr)",
        "cdd-3":  "repeat(3, 1fr)",
        "cdd-4":  "repeat(4, 1fr)",
        "cdd-12": "repeat(12, 1fr)",
      },
    },
  },
  plugins: [],
};

export default config;
