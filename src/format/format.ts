import { DateParam, dayjs } from "..";
import weekOfYear from "dayjs/plugin/weekOfYear";

/**
 * 格式化日期
 * @param  {DateParam} date
 * @param  {string} format="YYYY-MM-DD"
 */
export function format(date: DateParam, format = "YYYY-MM-DD") {
  return dayjs(date).format(format);
}


/**
 * 获取中文月份
 * @param  {DateParam} date
 */
export function getChineseMonth(date: DateParam) {
  return dayjs(date).format("MMM");
}
