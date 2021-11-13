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
   */
  elevation: {
    1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    2: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    3: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    4: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    5: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    6: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
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
