import MockDate from 'mockdate';
import dayjs from 'dayjs';
import dayjsRange from '../src';

beforeEach(() => {
  MockDate.set(new Date());
});

afterEach(() => {
  MockDate.reset();
});

describe('range subtract end range', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-17 19:00:00';

  it('Case. general', () => {
    const rangeBasic = dayjsRange(startDate, endDate);
    const rangeSubEnd = rangeBasic.subtractEndRange(1, 'd');

    expect(rangeSubEnd.endDate).toEqual(dayjs(endDate).subtract(1, 'd'));
    expect(rangeBasic.startDate).toEqual(dayjs(startDate));
    expect(rangeBasic.endDate).toEqual(dayjs(endDate));
  });
});
