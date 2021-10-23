export class DayjsRange {
  constructor(
    startDate,
    endDate,
  ) {
    const { s, e } = startDate > endDate ? { s: endDate, e: startDate } : { s: startDate, e: endDate }

    this.startDate = s
    this.endDate = e
  }

  isValidRange() {
    return this.start.isValid() && this.end.isValid()
  }
}

export default (option, dayjsClass, dayjsFunction) => {
  dayjsFunction.prototype.range = (startDate, endDate) => {
    return new DayjsRange(startDate, endDate)
  }
}
