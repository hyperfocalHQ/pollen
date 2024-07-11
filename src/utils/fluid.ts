/**
 * Fluid size utility
 */
export function fluid(
  minSize: number,
  maxSize: number,
  minWidth = 480,
  maxWidth = 1280
) {
  const slope = (maxSize - minSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minSize;

  return `clamp(${minSize / 16}rem, ${yAxisIntersection / 16}rem + ${
    slope * 100
  }vw, ${maxSize / 16}rem)`;
}
