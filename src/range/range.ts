import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/zh-cn";
import { DateParam } from "../..";
import { isSameOrAfter, isSameOrBefore } from "../tool/tool";

type ResultArray = DateParam[];

dayjs.locale("zh-cn"); //暂时只支持中文

/**
 * @description 获取日期所在月份的第一天和最后一天
 * @param  {DateParam} date
 * @param  {string} format?
 */
export function getFirstDayAndEndDayOfMonth(date: DateParam, format?: string) {
  let d = dayjs(date),
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
  let d = dayjs(date),
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
export function isInRange(date: DateParam, start: DateParam, end: DateParam) {
  const d = dayjs(date),
    s = dayjs(start),
    e = dayjs(end);
  return isSameOrAfter(d, s) && isSameOrBefore(d, e);
}
