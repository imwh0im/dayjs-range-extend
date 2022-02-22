import MockDate from 'mockdate';
import dayjsRange from '../src';

beforeEach(() => {
  MockDate.set(new Date());
});

afterEach(() => {
  MockDate.reset();
});

it('range isEqual', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-16 19:00:00';
  const otherDate = '2021-07-17 00:00:00';

  expect(
    dayjsRange(startDate, endDate).isEqual(dayjsRange(startDate, endDate)),
  ).toBe(true);
  expect(
    dayjsRange(startDate, endDate).isEqual(dayjsRange(endDate, startDate)),
  ).toBe(true);
  expect(
    dayjsRange(endDate, startDate).isEqual(dayjsRange(startDate, otherDate)),
  ).toBe(false);
});
