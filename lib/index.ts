import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import isBetween from "dayjs/plugin/isBetween";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(utc);
dayjs.extend(isBetween);
dayjs.extend(isLeapYear);

export * from "./is-date-instance";
export * from "./is-date-valid";
export * from "./is-am-or-pm";
export * from "./mutable-date";
export * from "./locale-date";
export * from "./unix-ts";
export * from "./increment-date";
export * from "./decrement-date";
export * from "./format-date";
export * from "./get-date-difference";

export * from "./types";

export { ISO_8601, ISO_8601_WITH_TZ_OFFSET, LOCALE } from "./constants";
