"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameOrAfter = exports.isSameOrBefore = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
/**
 * 判断日期是否小于等于另一个日期
 * @param  {DateParam} date
 * @param  {DateParam} dateToCompare
 */
function isSameOrBefore(date, dateToCompare) {
    var d = dayjs_1.default(date), dToC = dayjs_1.default(dateToCompare);
    return d.isSame(dToC) || d.isBefore(dToC);
}
exports.isSameOrBefore = isSameOrBefore;
/**
 * 判断日期是否大于等于另一个日期
 * @param  {DateParam} date
 * @param  {DateParam} dateToCompare
 */
function isSameOrAfter(date, dateToCompare) {
    var d = dayjs_1.default(date), dToC = dayjs_1.default(dateToCompare);
    return d.isSame(dToC) || d.isAfter(dToC);
}
exports.isSameOrAfter = isSameOrAfter;
