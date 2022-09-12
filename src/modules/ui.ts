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
   * Elevation
   * Applied as box-shadow
   * TODO: Deprecate in v5
   */
  elevation: {
    1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    2: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    3: '0 4px 6px -2px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    4: '0 12px 16px -4px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    5: '0 20px 24px -4px rgba(0, 0, 0, 0.1), 0 8px 8px -4px rgba(0, 0, 0, 0.04)',
    6: '0 24px 48px -12px rgba(0, 0, 0, 0.25)',
    7: '0 32px 64px -12px rgba(0, 0, 0, 0.2)'
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
   * Applied in transitions and animations
   * Inspired by Material Design https://material.io/design/motion/speed.html#easing
   */
  easing: {
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
    decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  }
};
