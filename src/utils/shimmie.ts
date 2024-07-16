import cssVarsPonyfill, {
  type CSSVarsPonyfillOptions,
} from "css-vars-ponyfill";
/**
 * Conditionally load and apply a shim for CSS variables in IE
 */
export function shimmie({
  onComplete,
  ...config
}: { onComplete?(): void } & Partial<CSSVarsPonyfillOptions>): void {
  const test =
    ((window || {}).CSS || {}).supports && window.CSS.supports("(--a: 0)");

  if (!test) {
    document.body.style.visibility = "hidden";
    cssVarsPonyfill({
      watch: true,
      updateURLs: false,
      onComplete() {
        onComplete?.();
        document.body.style.visibility = "visible";
      },
      ...config,
    });
  }
}
