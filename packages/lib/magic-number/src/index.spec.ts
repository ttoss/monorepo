import { magicNumber } from './index';

test('should return a number between 0 and 1000', () => {
  const m = magicNumber();
  expect(m).toBeGreaterThanOrEqual(0);
  expect(m).toBeLessThanOrEqual(1000);
});
