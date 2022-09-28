import dayjs from "dayjs";

import { MutableDate } from "./mutable-date";

export type ParentLibType = dayjs.Dayjs;

export type DateArgument = string | number | null | undefined | Date;
export type MutableDateArgument = DateArgument | MutableDate;
export type MutableTimeZone = "local" | "utc";

export type UnitTypeShort = "d" | "D" | "M" | "y" | "h" | "m" | "s" | "ms";

export type UnitTypeLong =
    | "millisecond"
    | "second"
    | "minute"
    | "hour"
    | "day"
    | "month"
    | "year"
    | "date";

export type UnitTypeLongPlural =
    | "milliseconds"
    | "seconds"
    | "minutes"
    | "hours"
    | "days"
    | "months"
    | "years"
    | "dates";

export type MutableUnitType = UnitTypeShort | UnitTypeLong | UnitTypeLongPlural;

export type OpMutableUnitType = MutableUnitType | "week" | "weeks" | "w";
export type QMutableUnitType = MutableUnitType | "quarter" | "quarters" | "Q";
export type ManipulateType = Exclude<OpMutableUnitType, "date" | "dates">;

export type CompareInclusivity = "()" | "(]" | "[)" | "[]";

export type ObjectTypes =
    | "null"
    | "undefined"
    | "object"
    | "array"
    | "string"
    | "number"
    | "boolean"
    | "function"
    | "date";
