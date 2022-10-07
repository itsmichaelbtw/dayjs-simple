import { formatDate } from "../format-date";
import { MutableDateArgument } from "../types";
import { INVALID_DATE } from "../constants";

type AmOrPm = "AM" | "AM" | typeof INVALID_DATE;

/**
 * Returns "am" or "pm" depending on the time of day. If an invalid date is
 * given, it will return "Invalid Date".
 */
export function isAMOrPM(date: MutableDateArgument): AmOrPm {
    return formatDate(date, "A") as AmOrPm;
}
