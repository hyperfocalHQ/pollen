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
    scale: {
      '000': '0.75rem' /* 12px */,
      'fluid-000': '0.75rem',
      '00': '0.875rem' /* 14px */,
      'fluid-00': 'clamp(var(--scale-00), 0.8rem + 0.25vw, var(--scale-0))',
      '0': '1rem' /* 16px */,
      'fluid-0':
        'clamp(var(--scale-0), 0.9464285714285714rem + 0.17857142857142858vw, var(--scale-1))',
      '1': '1.125rem' /* 18px */,
      'fluid-1':
        'clamp(var(--scale-1), 1.0714285714285714rem + 0.17857142857142858vw, var(--scale-2))',
      '2': '1.25rem' /* 20px */,
      'fluid-2':
        'clamp(var(--scale-2), 1.1428571428571428rem + 0.35714285714285715vw, var(--scale-3))',
      '3': '1.5rem' /* 24px */,
      'fluid-3':
        'clamp(var(--scale-3), 1.3392857142857142rem + 0.5357142857142857vw, var(--scale-4))',
      '4': '1.875rem' /* 30px */,
      'fluid-4':
        'clamp(var(--scale-4), 1.3928571428571428rem + 1.607142857142857vw, var(--scale-6))',
      '5': '2.25rem' /* 36px */,
      'fluid-5':
        'clamp(var(--scale-6), 2.357142857142857rem + 2.142857142857143vw, var(--scale-8))',
      '6': '3rem' /* 48px */,
      'fluid-6': 'clamp(var(--scale-8), 3rem + 5vw, var(--scale-10))',
      '7': '3.75rem' /* 60px */,
      '8': '4.5rem' /* 72px */,
      '9': '6rem' /* 96px */,
      '10': '8rem' /* 128px */
    },

  /**
   * Fonts
   * Applied as font-family and font-weight
   */
  font: {
    sans: 'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'Consolas, Menlo, Monaco, "Liberation Mono", monospace'
  },

  weight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
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
    xl: 2
  },

  /**
   * Letter spacing
   */
  letter: {
    xs: '-0.05em',
    sm: '-0.025em',
    none: '0em',
    lg: '0.025em',
    xl: '0.05em'
  },

  /**
   * Prose measure
   * Applied as max-width
   */
  prose: {
    xs: '45ch',
    sm: '55ch',
    md: '65ch',
    lg: '75ch',
    xl: '85ch'
  }
};
