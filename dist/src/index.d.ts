import { getFirstDayAndEndDayOfWeek, getFirstDayAndEndDayOfMonth, isInRange } from "./range/range";
import { isSameOrAfter, isSameOrBefore } from "./tool/tool";
import { Dayjs } from "dayjs";
export declare type DateParam = string | Date | Dayjs;
export { getFirstDayAndEndDayOfWeek, getFirstDayAndEndDayOfMonth, isInRange, isSameOrBefore, isSameOrAfter, };
