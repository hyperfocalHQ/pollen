/**
 * Conditionally load and apply a shim for CSS variables in IE
 * @param config Optional additional css-vars-ponyfill configuration
 */
export function shimmie({ onComplete, ...config }: any): void {
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
