/**
 * Grid
 * Grid system helpers
 */
export default {
  grid: {
    /**
     * Page Grid
     * Applied to grid-template-columns
     */
    'page-width': 'var(--width-xl)',
    'page-gutter': '5vw',
    'page-main': '2 / 3',
    page: 'minmax(var(--grid-page-gutter), 1fr) minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)',

    /**
     * Template Shorthands
     * Applied to grid-template-[columns/rows]
     */
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    7: 'repeat(7, minmax(0, 1fr))',
    8: 'repeat(8, minmax(0, 1fr))',
    9: 'repeat(9, minmax(0, 1fr))',
    10: 'repeat(10, minmax(0, 1fr))',
    11: 'repeat(11, minmax(0, 1fr))',
    12: 'repeat(12, minmax(0, 1fr))'
  }
};
