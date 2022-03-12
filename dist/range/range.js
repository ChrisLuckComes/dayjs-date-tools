"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInRange = exports.getFirstDayAndEndDayOfWeek = exports.getFirstDayAndEndDayOfMonth = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
require("dayjs/locale/zh-cn");
var tool_1 = require("../tool/tool");
dayjs_1.default.locale("zh-cn"); //暂时只支持中文
/**
 * @description 获取日期所在月份的第一天和最后一天
 * @param  {DateParam} date
 * @param  {string} format?
 */
function getFirstDayAndEndDayOfMonth(date, format) {
    var d = dayjs_1.default(date), result = [d.startOf("month"), d.endOf("month")];
    if (format) {
        result.forEach(function (x, index) { return (result[index] = x.format(format)); });
    }
    return result;
}
exports.getFirstDayAndEndDayOfMonth = getFirstDayAndEndDayOfMonth;
/**
 * @description 获取日期所在周的第一天和最后一天
 * @param  {DateParam} date
 * @param  {string} format?
 */
function getFirstDayAndEndDayOfWeek(date, format) {
    var d = dayjs_1.default(date), result = [d.startOf("week"), d.endOf("week")];
    if (format) {
        result.forEach(function (x, index) { return (result[index] = x.format(format)); });
    }
    return result;
}
exports.getFirstDayAndEndDayOfWeek = getFirstDayAndEndDayOfWeek;
/**
 * 判断日期是否在start end范围内
 * @param  {DateParam} date
 * @param  {DateParam} start
 * @param  {DateParam} end
 */
function isInRange(date, start, end) {
    var d = dayjs_1.default(date), s = dayjs_1.default(start), e = dayjs_1.default(end);
    return tool_1.isSameOrAfter(d, s) && tool_1.isSameOrBefore(d, e);
}
exports.isInRange = isInRange;
