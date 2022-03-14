import { format, getChineseMonth } from "./format/format";

import {
  getFirstDayAndEndDayOfWeek,
  getFirstDayAndEndDayOfMonth,
  isBetween,
  diff,
} from "./range/range";

import { isSameOrAfter, isSameOrBefore } from "./compare/compare";

import { getWeek, getMonth, getStartOfWeek, getEndOfWeek } from "./value/value";

import dayjs, { Dayjs, QUnitType, OpUnitType } from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");

export type DateParam = string | Date | Dayjs;

export type DiffUnitType = QUnitType | OpUnitType;

export { dayjs, Dayjs };

export { format, getChineseMonth };

export { getWeek, getMonth, getStartOfWeek, getEndOfWeek };

export { getFirstDayAndEndDayOfWeek, getFirstDayAndEndDayOfMonth, isBetween, diff };

export { isSameOrBefore, isSameOrAfter };
