import {
  getFirstDayAndEndDayOfWeek,
  getFirstDayAndEndDayOfMonth,
  isInRange,
} from "./src/range/range";

import { isSameOrAfter, isSameOrBefore } from "./src/tool/tool";

import { Dayjs } from "dayjs";

export type DateParam = string | Date | Dayjs;

export {
  getFirstDayAndEndDayOfWeek,
  getFirstDayAndEndDayOfMonth,
  isInRange,
  isSameOrBefore,
  isSameOrAfter,
};
