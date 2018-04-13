export function idempotentBabelPolyfill() {
  if (
    !global._babelPolyfill &&
    // eslint-disable-next-line no-undef
    (typeof window === 'undefined' || !window._babelPolyfill)
  ) {
    return require('babel-polyfill');
  }
  return null;
}

export default idempotentBabelPolyfill();
