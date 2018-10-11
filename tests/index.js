describe('idempotent-babel-polyfill', () => {
  it('should import polyfill', async () => {
    require('idempotent-babel-polyfill');
    expect(global._babelPolyfill).toBe(true);
  });
  it('should allow duplicate imports', async () => {
    require('idempotent-babel-polyfill');
    require('idempotent-babel-polyfill');
    expect(global._babelPolyfill).toBe(true);
  });
});
