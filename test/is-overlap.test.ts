import MockDate from 'mockdate';
import dayjsRange from '../src';

beforeEach(() => {
  MockDate.set(new Date());
});

afterEach(() => {
  MockDate.reset();
});

describe('range isOverlap', () => {
  const startDate = '2021-07-15 19:01:00';
  const endDate = '2021-07-16 19:00:00';
  const otherDate = '2021-07-17 00:00:00';
  const otherDate2 = '2021-07-19 00:00:00';

  it('Case. overlap', () => {
    expect(
      dayjsRange(startDate, otherDate).isOverlap(
        dayjsRange(endDate, otherDate2),
      ),
    ).toBe(true);
    expect(
      dayjsRange(endDate, otherDate2).isOverlap(
        dayjsRange(startDate, otherDate),
      ),
    ).toBe(true);
  });

  it('Case. overlap same startDate', () => {
    expect(
      dayjsRange(startDate, endDate).isOverlap(
        dayjsRange(startDate, otherDate),
      ),
    ).toBe(true);
    expect(
      dayjsRange(startDate, otherDate).isOverlap(
        dayjsRange(startDate, endDate),
      ),
    ).toBe(true);
  });

  it('Case. overlap include range', () => {
    expect(
      dayjsRange(startDate, otherDate2).isOverlap(
        dayjsRange(endDate, otherDate),
      ),
    ).toBe(true);
    expect(
      dayjsRange(endDate, otherDate).isOverlap(
        dayjsRange(startDate, otherDate2),
      ),
    ).toBe(true);
  });

  it('Case. overlap same range', () => {
    expect(
      dayjsRange(startDate, endDate).isOverlap(dayjsRange(startDate, endDate)),
    ).toBe(true);
  });

  it('Case. not overlap', () => {
    expect(
      dayjsRange(startDate, endDate).isOverlap(
        dayjsRange(otherDate, otherDate2),
      ),
    ).toBe(false);
    expect(
      dayjsRange(otherDate, otherDate2).isOverlap(
        dayjsRange(startDate, endDate),
      ),
    ).toBe(false);
  });

  it('Case. not overlap same date', () => {
    expect(
      dayjsRange(startDate, endDate).isOverlap(dayjsRange(endDate, otherDate)),
    ).toBe(false);
    expect(
      dayjsRange(endDate, otherDate).isOverlap(dayjsRange(startDate, endDate)),
    ).toBe(false);
    expect(
      dayjsRange(startDate, startDate).isOverlap(
        dayjsRange(startDate, endDate),
      ),
    ).toBe(false);
    expect(
      dayjsRange(startDate, endDate).isOverlap(
        dayjsRange(startDate, startDate),
      ),
    ).toBe(false);
    expect(
      dayjsRange(endDate, endDate).isOverlap(dayjsRange(startDate, endDate)),
    ).toBe(false);
    expect(
      dayjsRange(startDate, endDate).isOverlap(dayjsRange(endDate, endDate)),
    ).toBe(false);
  });

  it('Case. invalid parameter', () => {
    expect(dayjsRange(endDate, otherDate).isOverlap()).toBe(false);
    expect(
      dayjsRange(startDate, endDate).isOverlap(dayjsRange(startDate, null)),
    ).toBe(false);
  });
});
