import { DateParam, dayjs, Dayjs, DiffUnitType } from "..";
import { isSameOrAfter, isSameOrBefore } from "../compare/compare";

type ResultArray = DateParam[];

/**
 * @description 获取日期所在月份的第一天和最后一天
 * @param  {DateParam} date
 * @param  {string} format?
 */
export function getFirstDayAndEndDayOfMonth(date: DateParam, format?: string) {
  const d = dayjs(date),
    result: ResultArray = [d.startOf("month"), d.endOf("month")];
  if (format) {
    result.forEach((x, index) => (result[index] = (x as Dayjs).format(format)));
  }

  return result;
}

/**
 * @description 获取日期所在周的第一天和最后一天
 * @param  {DateParam} date
 * @param  {string} format?
 */
export function getFirstDayAndEndDayOfWeek(date: DateParam, format?: string) {
  const d = dayjs(date),
    result: ResultArray = [d.startOf("week"), d.endOf("week")];

  if (format) {
    result.forEach((x, index) => (result[index] = (x as Dayjs).format(format)));
  }

  return result;
}

/**
 * 判断日期是否在start end范围内
 * @param  {DateParam} date
 * @param  {DateParam} start
 * @param  {DateParam} end
 */
export function isBetween(date: DateParam, start: DateParam, end: DateParam) {
  const d = dayjs(date),
    s = dayjs(start),
    e = dayjs(end);
  return isSameOrAfter(d, s) && isSameOrBefore(d, e);
}

/**
 * 计算日期的差值
 * @param  {DateParam} date1
 * @param  {DateParam} date2
 * @param  {DiffUnitType="milliseconds"} unit
 */
export function diff(date1: DateParam, date2: DateParam, unit: DiffUnitType = "milliseconds") {
  return dayjs(date1).diff(date2, unit);
}
