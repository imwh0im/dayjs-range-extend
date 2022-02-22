import MockDate from 'mockdate';
import dayjs from 'dayjs';
import dayjsRange from '../src';

beforeEach(() => {
  MockDate.set(new Date());
});

afterEach(() => {
  MockDate.reset();
});

describe('range get date', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-16 19:00:00';

  it('Case. get each value', () => {
    expect(dayjsRange(startDate, endDate).startDate).toEqual(dayjs(startDate));
    expect(dayjsRange(startDate, endDate).endDate).toEqual(dayjs(endDate));
  });
});
