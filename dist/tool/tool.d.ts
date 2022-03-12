import { DateParam } from "..";
/**
 * 判断日期是否小于等于另一个日期
 * @param  {DateParam} date
 * @param  {DateParam} dateToCompare
 */
export declare function isSameOrBefore(date: DateParam, dateToCompare: DateParam): boolean;
/**
 * 判断日期是否大于等于另一个日期
 * @param  {DateParam} date
 * @param  {DateParam} dateToCompare
 */
export declare function isSameOrAfter(date: DateParam, dateToCompare: DateParam): boolean;
