/**
 * CDD Design System v1.0
 * Design Tokens — fonte única da verdade
 * Importar nos produtos: import { tokens } from "cdd-design-system/tokens"
 */

export const colors = {
  // Brand primitives
  graphite:     "#121417",
  concrete:     "#0B0D0F",
  steel:        "#1F4B99",
  steelLight:   "#2D5FBF",
  steelDark:    "#163775",
  gold:         "#C6A96B",
  goldLight:    "#D9C08A",
  goldDark:     "#A88B4E",
  teal:         "#4FD1C5",
  tealLight:    "#76DDD4",
  tealDark:     "#38B2A8",
  // Semantic
  success:      "#2F9E44",
  successLight: "#40C057",
  warning:      "#F59F00",
  warningLight: "#FAB005",
  error:        "#E03131",
  errorLight:   "#F03E3E",
  // Dark surfaces
  surface0:  "#0B0D0F",
  surface1:  "#121417",
  surface2:  "#1A1E23",
  surface3:  "#222830",
  surface4:  "#2C3340",
  // Dark text
  textPrimary:   "#F4F6F8",
  textSecondary: "#9AA3AE",
  textTertiary:  "#616B77",
  textDisabled:  "#404850",
  // Light surfaces
  ltSurface0: "#FFFFFF",
  ltSurface1: "#F8F9FA",
  ltSurface2: "#F1F3F5",
  ltSurface3: "#E9ECEF",
  ltSurface4: "#DEE2E6",
  ltTextPrimary:   "#121417",
  ltTextSecondary: "#495057",
  ltTextTertiary:  "#868E96",
} as const;

export const typography = {
  fontSans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
  fontDisplay: ["Sora", "Inter", "ui-sans-serif", "sans-serif"],
  fontMono:    ["JetBrains Mono", "ui-monospace", "monospace"],
  scale: {
    "2xs": "10px", xs: "12px", sm: "13px", base: "15px",
    lg: "17px", xl: "20px", "2xl": "24px", "3xl": "30px",
    "4xl": "36px", "5xl": "48px",
  },
} as const;

export const spacing = {
  "0": "0", "0.5": "2px", "1": "4px", "1.5": "6px",
  "2": "8px", "2.5": "10px", "3": "12px", "4": "16px",
  "5": "20px", "6": "24px", "8": "32px", "10": "40px",
  "12": "48px", "16": "64px",
} as const;

export const radius = {
  none: "0", xs: "4px", sm: "6px", md: "10px",
  lg: "14px", xl: "20px", "2xl": "28px", full: "9999px",
} as const;

export const shadow = {
  xs: "0 1px 2px rgba(0,0,0,0.4)",
  sm: "0 2px 6px rgba(0,0,0,0.45)",
  md: "0 4px 16px rgba(0,0,0,0.5)",
  lg: "0 8px 32px rgba(0,0,0,0.55)",
  xl: "0 16px 64px rgba(0,0,0,0.6)",
  glowGold:  "0 0 0 1px rgba(198,169,107,0.3), 0 4px 16px rgba(198,169,107,0.15)",
  glowSteel: "0 0 0 1px rgba(31,75,153,0.4), 0 4px 16px rgba(31,75,153,0.2)",
  glowTeal:  "0 0 0 1px rgba(79,209,197,0.3), 0 4px 16px rgba(79,209,197,0.15)",
} as const;

export const tokens = { colors, typography, spacing, radius, shadow } as const;
export type Tokens = typeof tokens;
