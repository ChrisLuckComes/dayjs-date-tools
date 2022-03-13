import { getFirstDayAndEndDayOfWeek, getFirstDayAndEndDayOfMonth, isBetween } from "./range/range";

import { isSameOrAfter, isSameOrBefore } from "./tool/tool";

import dayjs, { Dayjs, QUnitType, OpUnitType } from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");

export type DateParam = string | Date | Dayjs;

export type DiffUnitType = QUnitType | OpUnitType;

export { dayjs, Dayjs };

export {
  getFirstDayAndEndDayOfWeek,
  getFirstDayAndEndDayOfMonth,
  isBetween,
  isSameOrBefore,
  isSameOrAfter,
};
