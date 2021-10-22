import dayjs, { Dayjs } from 'dayjs';

export class DayjsRange {
  constructor(
    private start: Dayjs,
    private end: Dayjs
  ) {
    const { s, e } = start > end ? { s: end, e: start } : { s: start, e: end }

    start = s
    end = e
  }

  isValidRange() {
    return this.start.isValid() && this.end.isValid()
  }

  clone() {
    return new DayjsRange(this.start, this.end)
  }

  isOverlap(other: DayjsRange) {
    if (!(other instanceof DayjsRange) || !(other.isValidRange())) {
      return false
    }

    if (
      (this.start >= other.start && this.start <= other.end) ||
      (this.end >= other.start && this.end <= other.end) ||
      (this.start <= other.start && this.end >= other.end)
    ) {
      return true
    }

    return false
  }

  isEqual(other: DayjsRange) {
    return this.start.isSame(other.start) && this.end.isSame(other.end)
  }

  addStartRange(number: number, unit: dayjs.ManipulateType) {
    return new DayjsRange(this.start.add(number, unit), this.end)
  }

  addEndRange(number: number, unit: dayjs.ManipulateType) {
    return new DayjsRange(this.start, this.end.add(number, unit))
  }

  subtractStartRange(number: number, string: dayjs.ManipulateType) {
    return new DayjsRange(this.start.subtract(number, string), this.end)
  }

  subtractEndRange(number: number, string: dayjs.ManipulateType) {
    return new DayjsRange(this.start, this.end.subtract(number, string))
  }
}

const range = (start: Dayjs, end: Dayjs) => {
  return new DayjsRange(start, end);
}

export default range;
exports = module.exports = range;
