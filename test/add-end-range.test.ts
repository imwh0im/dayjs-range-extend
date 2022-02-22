import MockDate from 'mockdate';
import dayjs from 'dayjs';
import dayjsRange from '../src';

beforeEach(() => {
  MockDate.set(new Date());
});

afterEach(() => {
  MockDate.reset();
});

describe('range add range', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-17 19:00:00';

  it('range add each date', () => {
    const rangeBasic = dayjsRange(startDate, endDate);
    const rangeAddEnd = rangeBasic.addEndRange(1, 'd');

    expect(rangeAddEnd.endDate).toEqual(dayjs(endDate).add(1, 'd'));
    expect(rangeBasic.startDate).toEqual(dayjs(startDate));
    expect(rangeBasic.endDate).toEqual(dayjs(endDate));
  });
});
