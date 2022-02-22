import MockDate from 'mockdate';
import dayjsRange from '../src';

beforeEach(() => {
  MockDate.set(new Date());
});

afterEach(() => {
  MockDate.reset();
});

describe('range clone', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-16 10:00:00';

  it('Case. clone', () => {
    const originalRange = dayjsRange(startDate, endDate);
    const cloneRange = originalRange.clone();
    expect(originalRange.isEqual(cloneRange)).toBe(true);
    expect(originalRange.addStartRange(1, 'd').isEqual(cloneRange)).toBe(false);
  });
});
