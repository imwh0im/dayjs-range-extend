import MockDate from 'mockdate';
import dayjs from 'dayjs';
import dayjsRange from '../src';

beforeEach(() => {
  MockDate.set(new Date());
});

afterEach(() => {
  MockDate.reset();
});

it('range isValidRange', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-16 10:00:00';

  expect(dayjsRange(startDate, null).isValidRange()).toBe(false);
  expect(dayjsRange(null, startDate).isValidRange()).toBe(false);
  expect(dayjsRange(startDate, endDate).isValidRange()).toBe(true);
  expect(dayjsRange(endDate, startDate).isValidRange()).toBe(true);
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

it('range isOverlap', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-16 19:00:00';
  const otherDate = '2021-07-17 00:00:00';
  const otherDate2 = '2021-07-19 00:00:00';

  expect(
    dayjsRange(startDate, endDate).isOverlap(dayjsRange(otherDate, otherDate2)),
  ).toBe(false);
  expect(
    dayjsRange(startDate, endDate).isOverlap(dayjsRange(endDate, otherDate)),
  ).toBe(false);
  expect(
    dayjsRange(startDate, startDate).isOverlap(dayjsRange(startDate, endDate)),
  ).toBe(false);
  expect(
    dayjsRange(startDate, otherDate).isOverlap(dayjsRange(endDate, otherDate2)),
  ).toBe(true);
  expect(
    dayjsRange(endDate, otherDate).isOverlap(dayjsRange(endDate, otherDate2)),
  ).toBe(true);
  expect(
    dayjsRange(startDate, endDate).isOverlap(dayjsRange(startDate, endDate)),
  ).toBe(true);
  expect(
    dayjsRange(startDate, otherDate).isOverlap(dayjsRange(startDate, endDate)),
  ).toBe(true);
  expect(
    dayjsRange(startDate, otherDate2).isOverlap(dayjsRange(endDate, otherDate)),
  ).toBe(true);
  expect(
    dayjsRange(endDate, otherDate).isOverlap(dayjsRange(startDate, otherDate2)),
  ).toBe(true);
  expect(dayjsRange(endDate, otherDate).isOverlap()).toBe(false);
  expect(
    dayjsRange(startDate, endDate).isOverlap(dayjsRange(startDate, null)),
  ).toBe(false);
  expect(
    dayjsRange(startDate, endDate).isOverlap(dayjsRange(endDate, endDate)),
  ).toBe(false);
});

it('range get date', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-16 19:00:00';

  expect(dayjsRange(startDate, endDate).startDate).toEqual(dayjs(startDate));
  expect(dayjsRange(startDate, endDate).endDate).toEqual(dayjs(endDate));
});

it('range add', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-17 19:00:00';

  const rangeBasic = dayjsRange(startDate, endDate);
  const rangeAddStart = rangeBasic.addStartRange(1, 'd');
  const rangeAddEnd = rangeBasic.addEndRange(1, 'd');

  expect(rangeAddStart.startDate).toEqual(dayjs(startDate).add(1, 'd'));
  expect(rangeAddEnd.endDate).toEqual(dayjs(endDate).add(1, 'd'));
  expect(rangeBasic.startDate).toEqual(dayjs(startDate));
  expect(rangeBasic.endDate).toEqual(dayjs(endDate));
});

it('range clone', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-16 10:00:00';

  const originalRange = dayjsRange(startDate, endDate);
  const cloneRange = originalRange.clone();
  expect(originalRange.isEqual(cloneRange)).toBe(true);
  expect(originalRange.addStartRange(1, 'd').isEqual(cloneRange)).toBe(false);
});

it('range subtract', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-17 19:00:00';

  const rangeBasic = dayjsRange(startDate, endDate);
  const rangeSubStart = rangeBasic.subtractStartRange(1, 'd');
  const rangeSubEnd = rangeBasic.subtractEndRange(1, 'd');

  expect(rangeSubStart.startDate).toEqual(dayjs(startDate).subtract(1, 'd'));
  expect(rangeSubEnd.endDate).toEqual(dayjs(endDate).subtract(1, 'd'));
  expect(rangeBasic.startDate).toEqual(dayjs(startDate));
  expect(rangeBasic.endDate).toEqual(dayjs(endDate));
});
