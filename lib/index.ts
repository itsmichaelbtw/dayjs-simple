import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import isBetween from "dayjs/plugin/isBetween";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(utc);
dayjs.extend(isBetween);
dayjs.extend(isLeapYear);

export * from "./mutable-date";
export * from "./is-date-instance";
export * from "./is-date-valid";
export * from "./unix-ts";
export * from "./increment-date";
