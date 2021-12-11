function typeset(scale: string | number, line: number, family: string) {
  return `var(--scale-${scale})/${line} var(--font-${family})`;
}

export default {
  typeset: {
    /* Sans */
    'sans-000': typeset('000', 1.3, 'sans'),
    'sans-00': typeset('00', 1.4, 'sans'),
    'sans-0': typeset(0, 1.5, 'sans'),
    'sans-1': typeset(1, 1.5, 'sans'),
    'sans-2': typeset(2, 1.5, 'sans'),
    'sans-3': typeset(3, 1.3, 'sans'),
    'sans-4': typeset(4, 1.25, 'sans'),
    'sans-5': typeset(5, 1.25, 'sans'),
    'sans-6': typeset(6, 1.2, 'sans'),
    'sans-7': typeset(7, 1.2, 'sans'),
    'sans-8': typeset(8, 1.2, 'sans'),
    'sans-9': typeset(9, 1.15, 'sans'),
    'sans-10': typeset(10, 1.15, 'sans'),
    /* Serif */
    'serif-000': typeset('000', 1.3, 'serif'),
    'serif-00': typeset('00', 1.35, 'serif'),
    'serif-0': typeset(0, 1.45, 'serif'),
    'serif-1': typeset(1, 1.45, 'serif'),
    'serif-2': typeset(2, 1.4, 'serif'),
    'serif-3': typeset(3, 1.3, 'serif'),
    'serif-4': typeset(4, 1.2, 'serif'),
    'serif-5': typeset(5, 1.2, 'serif'),
    'serif-6': typeset(6, 1.2, 'serif'),
    'serif-7': typeset(7, 1.2, 'serif'),
    'serif-8': typeset(8, 1.15, 'serif'),
    'serif-9': typeset(9, 1.1, 'serif'),
    'serif-10': typeset(10, 1.1, 'serif')
  }
};
