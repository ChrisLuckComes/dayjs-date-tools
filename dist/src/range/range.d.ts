import "dayjs/locale/zh-cn";
import { DateParam } from "../..";
declare type ResultArray = DateParam[];
/**
 * @description 获取日期所在月份的第一天和最后一天
 * @param  {DateParam} date
 * @param  {string} format?
 */
export declare function getFirstDayAndEndDayOfMonth(date: DateParam, format?: string): ResultArray;
/**
 * @description 获取日期所在周的第一天和最后一天
 * @param  {DateParam} date
 * @param  {string} format?
 */
export declare function getFirstDayAndEndDayOfWeek(date: DateParam, format?: string): ResultArray;
/**
 * 判断日期是否在start end范围内
 * @param  {DateParam} date
 * @param  {DateParam} start
 * @param  {DateParam} end
 */
export declare function isInRange(date: DateParam, start: DateParam, end: DateParam): boolean;
export {};
