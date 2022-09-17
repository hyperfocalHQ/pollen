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
    xs: '3px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    100: '100%',
    full: '9999px'
  },

  /**
   * Blurs
   * Applied as backdrop-filter
   */
  blur: {
    xs: 'blur(4px)',
    sm: 'blur(8px)',
    md: 'blur(16px)',
    lg: 'blur(24px)',
    xl: 'blur(40px)'
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
    xs: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    sm: '0 4px 6px -2px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    md: '0 12px 16px -4px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    lg: '0 20px 24px -4px rgba(0, 0, 0, 0.1), 0 8px 8px -4px rgba(0, 0, 0, 0.04)',
    xl: '0 24px 48px -12px rgba(0, 0, 0, 0.25)'
  },

  /**
   * Motion easing curves
   * Appplied in transitions and animations
   */
  ease: {
    inSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    outSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    inOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    inQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    outQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    inOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    inCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    outCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    inOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    inQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    outQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    inOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
    inQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    outQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    inOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
    inExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    outExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    inOutExpo: 'cubic-bezier(1, 0, 0, 1)',
    inCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    outCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    inOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    inBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    outBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    inOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },

  // UPCOMING DEPRECATIONS
  // TODO: Deprecate in v5
  easing: {
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
    decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  },
  elevation: {
    1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    2: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    3: '0 4px 6px -2px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    4: '0 12px 16px -4px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    5: '0 20px 24px -4px rgba(0, 0, 0, 0.1), 0 8px 8px -4px rgba(0, 0, 0, 0.04)',
    6: '0 24px 48px -12px rgba(0, 0, 0, 0.25)',
    7: '0 32px 64px -12px rgba(0, 0, 0, 0.2)'
  }
};
