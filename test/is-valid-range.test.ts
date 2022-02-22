import MockDate from 'mockdate';
import dayjsRange from '../src';

beforeEach(() => {
  MockDate.set(new Date());
});

afterEach(() => {
  MockDate.reset();
});

describe('rage isValidRange', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-16 10:00:00';

  it('Case. include null', () => {
    expect(dayjsRange(startDate, null).isValidRange()).toBe(false);
    expect(dayjsRange(null, startDate).isValidRange()).toBe(false);
  });

  it('Case. General', () => {
    expect(dayjsRange(startDate, endDate).isValidRange()).toBe(true);
    expect(dayjsRange(endDate, startDate).isValidRange()).toBe(true);
  });
});
