import type { CSSVarsPonyfillOptions } from 'css-vars-ponyfill';
import type { Config, ConfigObject } from '../../@types/pollen';
import modules from '../modules';

/**
 * Configuration helper to provide typescript support
 */
export function defineConfig(config: Config): ConfigObject {
  return typeof config === 'function' ? config(modules) : config;
}

/**
 * Fluid size utility
 */
export function fluid(
  minFontSize: number,
  maxFontSize: number,
  minWidth = 480,
  maxWidth = 1280
) {
  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth),
    yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp(${minFontSize / 16}rem, ${yAxisIntersection / 16}rem + ${
    slope * 100
  }vw, ${maxFontSize / 16}rem)`;
}

/**
 * Conditionally load and apply a shim for CSS variables in IE
 */
export function shimmie({
  onComplete,
  ...config
}: { onComplete?(): void } & Partial<CSSVarsPonyfillOptions>): void {
  const test =
    ((window || {}).CSS || {}).supports && window.CSS.supports('(--a: 0)');

  if (!test) {
    document.body.style.visibility = 'hidden';
    import('css-vars-ponyfill').then(({ default: cssVarsPonyfill }) => {
      cssVarsPonyfill({
        watch: true,
        updateURLs: false,
        onComplete() {
          onComplete && onComplete();
          document.body.style.visibility = 'visible';
        },
        ...config
      });
    });
  }
}
