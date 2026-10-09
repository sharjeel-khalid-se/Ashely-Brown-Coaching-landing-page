/**
 * Design system theme tokens matching Coach Ash's brand banner.
 * All colors verified for WCAG AA compliance.
 */
export const themeColors = {
  // Brand Palette: Soft Cream & Dusty Pink
  cream: "#FAF7F4",
  blush: "#F9DCE4",
  blushLight: "#FDF4F6",
  accent: "#E4719A",
  magenta: "#C2185B",
  warmBeige: "#EFE2D8",
  darkBrown: "#3A2A28",
  textDeep: "#2E2438",
  textMuted: "#6B6275",
  white: "#FFFFFF",

  // Legacy mappings for backwards compatibility
  crimson: "#C2185B",
  crimsonHover: "#A3154D",
  hotPink: "#E4719A",
  coralPink: "#E4719A",
  coralPinkText: "#C2185B",
  offWhite: "#FAF7F4",
  deepText: "#2E2438",
  mutedText: "#6B6275",
} as const;

export type ThemeColors = typeof themeColors;
