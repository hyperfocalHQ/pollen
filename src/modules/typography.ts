import { fluid } from "../utils/fluid";

/**
 * Typography
 * For a foundation in type
 */
export default {
  /**
   * Modular scale
   * Applied as font-size
   */
  scale: {
    "000": "0.75rem" /* 12px */,
    "00": "0.875rem" /* 14px */,
    "0": "1rem" /* 16px */,
    "1": "1.125rem" /* 18px */,
    "2": "1.25rem" /* 20px */,
    "3": "1.5rem" /* 24px */,
    "4": "1.875rem" /* 30px */,
    "5": "2.25rem" /* 36px */,
    "6": "3rem" /* 48px */,
    "7": "3.75rem" /* 60px */,
    "8": "4.5rem" /* 72px */,
    "9": "6rem" /* 96px */,
    "10": "8rem" /* 128px */,
  },

  /**
   * Fluid type scale using generated clamp()
   * Applied as font-size
   */
  "scale-fluid": {
    "000": fluid(10, 12),
    "00": fluid(12, 14),
    "0": fluid(14, 16),
    "1": fluid(16, 18),
    "2": fluid(18, 20),
    "3": fluid(20, 24),
    "4": fluid(24, 30),
    "5": fluid(30, 36),
    "6": fluid(36, 48),
    "7": fluid(48, 60),
    "8": fluid(60, 72),
    "9": fluid(72, 96),
    "10": fluid(96, 128),
  },

  /**
   * Fonts
   * Applied as font-family and font-weight
   */
  font: {
    sans: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },

  weight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  /**
   * Line Heights
   */
  line: {
    none: 1,
    xs: 1.125,
    sm: 1.275,
    md: 1.5,
    lg: 1.625,
    xl: 2,
  },

  /**
   * Letter spacing
   */
  letter: {
    xs: "-0.05em",
    sm: "-0.025em",
    none: "0em",
    lg: "0.025em",
    xl: "0.05em",
  },

  /**
   * Prose measure
   * Applied as max-width
   */
  prose: {
    xs: "45ch",
    sm: "55ch",
    md: "65ch",
    lg: "75ch",
    xl: "85ch",
  },
};
