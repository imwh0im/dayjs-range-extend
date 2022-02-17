import dayjs, { ConfigType, Dayjs, OpUnitType } from 'dayjs';

/**
 * DayjsRange Instance
 */
class DayjsRange {
  /**
   * Required `startDate` `endDate`
   */
  constructor(public startDate: Dayjs, public endDate: Dayjs) {}

  /**
   * This returns a boolean indicating whether the DayjsRange object contains a valid date or not.
   * ```
   * dayjsRange('', '').isValidRange() // => boolean
   * ```
   */
  isValidRange(): boolean {
    return this.startDate.isValid() && this.endDate.isValid();
  }

  /**
   * All DayjsRange objects are immutable. Still, `dayjsRange#clone` can create a clone of the current object if you need one.
   * ```
   * dayjsRange().clone()// => DayjsRange
   * ```
   */
  clone(): DayjsRange {
    return new DayjsRange(this.startDate, this.endDate);
  }

  /**
   * Compare between DayjsRange objects.
   * ```
   * dayjsRange().isOverlap(dayjsRange()) // => boolean
   * ```
   */
  isOverlap(other?: DayjsRange): boolean {
    if (!(other instanceof DayjsRange) || !other.isValidRange()) {
      return false;
    }

    return (
      (this.startDate >= other.startDate && this.startDate <= other.endDate) ||
      (this.endDate >= other.startDate && this.endDate <= other.endDate) ||
      (this.startDate <= other.startDate && this.endDate >= other.endDate)
    );
  }

  /**
   * This indicates whether the DayjsRange object is the same as the other supplied DayjsRange.
   * ```
   * dayjsRange().isEqual(dayjsRange()) // => boolean
   * ```
   */
  isEqual(other: DayjsRange): Boolean {
    return (
      this.startDate.isSame(other.startDate) &&
      this.endDate.isSame(other.endDate)
    );
  }

  /**
   * Returns a cloned DayjsRange object with a start-date amount of time added.
   * ```
   * dayjsRange().addStartRange(7, 'day')// => DayjsRange
   * ```
   * Units are case insensitive, and support plural and short forms.
   */
  addStartRange(number: number, unit: OpUnitType): DayjsRange {
    return new DayjsRange(this.startDate.add(number, unit), this.endDate);
  }

  /**
   * Returns a cloned DayjsRange object with a end-date amount of time added.
   * ```
   * dayjsRange().addEndRange(7, 'day')// => DayjsRange
   * ```
   * Units are case insensitive, and support plural and short forms.
   */
  addEndRange(number: number, unit: OpUnitType): DayjsRange {
    return new DayjsRange(this.startDate, this.endDate.add(number, unit));
  }

  /**
   * Returns a cloned DayjsRange object with a start-date amount of time subtracted.
   * ```
   * dayjsRange().subtractStartRange(7, 'day')// => DayjsRange
   * ```
   * Units are case insensitive, and support plural and short forms.
   */
  subtractStartRange(number: number, unit: OpUnitType): DayjsRange {
    return new DayjsRange(this.startDate.subtract(number, unit), this.endDate);
  }

  /**
   * Returns a cloned DayjsRange object with a end-date amount of time subtracted.
   * ```
   * dayjsRange().subtractEndRange(7, 'day')// => DayjsRange
   * ```
   * Units are case insensitive, and support plural and short forms.
   */
  subtractEndRange(number: number, unit?: OpUnitType): DayjsRange {
    return new DayjsRange(this.startDate, this.endDate.subtract(number, unit));
  }
}

/**
 * Return `DayjsRange` Instance
 */
export default function dayjsRange(
  first?: ConfigType,
  second?: ConfigType,
): DayjsRange {
  const { firstDate, secondDate } = {
    firstDate: dayjs(first),
    secondDate: dayjs(second),
  };
  const { startDate, endDate } =
    firstDate > secondDate
      ? { startDate: secondDate, endDate: firstDate }
      : { startDate: firstDate, endDate: secondDate };

  return new DayjsRange(startDate, endDate);
}
