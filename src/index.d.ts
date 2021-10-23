import { Dayjs, PluginFunc } from "dayjs";

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface DayjsRange {
    startDate: Dayjs
    endDate: Dayjs

    isValidRange(): boolean
  }

  export function range(startDate: Dayjs, endDate: Dayjs): DayjsRange
}
