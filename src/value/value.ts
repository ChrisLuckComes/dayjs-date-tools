import { DateParam, dayjs } from "..";
import weekOfYear from "dayjs/plugin/weekOfYear";

/**
 * 获取当前周是全年第几周
 * @param  {DateParam} date
 */
export function getWeek(date: DateParam) {
  dayjs.extend(weekOfYear);
  return dayjs(date).week();
}

/**
 * 获取当前周一
 * @param  {DateParam} date
 * @param  {string} format="YYYY-MM-DD"
 */
export function getStartOfWeek(date: DateParam, format = "YYYY-MM-DD") {
  return dayjs(date).startOf("week").format(format);
}

/**
 * 获取当前周末
 * @param  {DateParam} date
 * @param  {string} format="YYYY-MM-DD"
 */
export function getEndOfWeek(date: DateParam, format = "YYYY-MM-DD") {
  return dayjs(date).endOf("week").format(format);
}

/**
 * 获取月份
 * @param  {DateParam} date
 */
export function getMonth(date: DateParam) {
  return dayjs(date).month() + 1;
}
