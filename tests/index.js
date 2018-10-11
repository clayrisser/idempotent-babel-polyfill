import '../src';

describe('idempotent-babel-polyfill', () => {
  it('should import polyfill', async () => {
    expect(global._babelPolyfill).toBe(true);
  });
  it('should allow duplicate imports', async () => {
    require('../src');
    require('../src');
    expect(global._babelPolyfill).toBe(true);
  });
});
