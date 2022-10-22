import { formatDate } from "../format-date";
import { INVALID_DATE } from "../constants";

import type { MutableDateArgument } from "../types";

type AmOrPm = "AM" | "PM" | typeof INVALID_DATE;

/**
 * Returns "am" or "pm" depending on the time of day. If an invalid date is
 * given, it will return "Invalid Date".
 */
export function isAMOrPM(date: MutableDateArgument): AmOrPm {
    return formatDate(date, "A") as AmOrPm;
}
