/**
 * UI library
 * For consistency across UI and motion
 */
export default {
  /**
   * Radiuses
   * Applied as border-radius
   */
  radius: {
    xs: "3px",
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    100: "100%",
    full: "9999px"
  },

  /**
   * Blurs
   * Applied as backdrop-filter
   */
  blur: {
    xs: "blur(4px)",
    sm: "blur(8px)",
    md: "blur(16px)",
    lg: "blur(24px)",
    xl: "blur(40px)"
  },

  /**
   * Layers
   * Applied as z-index
   */
  layer: {
    below: -1,
    1: 10,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    top: 2147483647
  },

  /**
   * Shadow
   * Applied as box-shadow
   */
  shadow: {
    xs: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    sm: "0 4px 6px -2px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
    md: "0 12px 16px -4px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    lg: "0 20px 24px -4px rgba(0, 0, 0, 0.1), 0 8px 8px -4px rgba(0, 0, 0, 0.04)",
    xl: "0 24px 48px -12px rgba(0, 0, 0, 0.25)"
  },

  /**
   * Motion easing curves
   * Appplied in transitions and animations
   */
  ease: {
    "in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
    "out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
    "in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
    "in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    "out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    "in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    "in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    "out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
    "in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
    "in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
    "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
    "in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    "out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
    "in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
    "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
    "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
    "in-out-expo": "cubic-bezier(1, 0, 0, 1)",
    "in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
    "out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
    "in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    "in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
    "out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    "in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  }
};
