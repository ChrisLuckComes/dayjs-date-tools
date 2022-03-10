import dayjs, { Dayjs } from "dayjs";

type DateParam = string | Date | Dayjs;

type ResultArray = DateParam[];

/**
 *
 * @param date {DateParam} string | Date | Dayjs
 * @param format {string}
 */
export function getFirstDayAndEndDayOfMonth(date: DateParam, format?: string) {
  let d = dayjs(date),
    result: ResultArray = [d.startOf("month"), d.endOf("month")];
  if (format) {
    result.forEach((x, index) => (result[index] = (x as Dayjs).format(format)));
  }

  return result;
}
