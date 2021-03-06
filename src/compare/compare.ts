import { DateParam, dayjs } from "..";

/**
 * 判断日期是否小于等于另一个日期
 * @param  {DateParam} date
 * @param  {DateParam} dateToCompare
 */
export function isSameOrBefore(date: DateParam, dateToCompare: DateParam) {
  const d = dayjs(date),
    dToC = dayjs(dateToCompare);
  return d.isSame(dToC) || d.isBefore(dToC);
}

/**
 * 判断日期是否大于等于另一个日期
 * @param  {DateParam} date
 * @param  {DateParam} dateToCompare
 */
export function isSameOrAfter(date: DateParam, dateToCompare: DateParam) {
  const d = dayjs(date),
    dToC = dayjs(dateToCompare);
  return d.isSame(dToC) || d.isAfter(dToC);
}
