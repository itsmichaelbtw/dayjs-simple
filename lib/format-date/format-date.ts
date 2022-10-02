import { MutableDate } from "../mutable-date";
import { isDateValid } from "../is-date-valid";
import { MutableDateArgument } from "../types";
import { INVALID_DATE } from "../constants";

/**
 * Format a given date using the given format string. If an invalid date is
 * given, it will return "Invalid Date".
 *
 * If no format string is given, it will return the date in ISO format.
 */
export function formatDate(
    date: MutableDateArgument,
    template?: string
): string {
    if (MutableDate.isInstance(date)) {
        return date.format(template);
    }

    if (isDateValid(date)) {
        return MutableDate.create(date).format(template);
    }

    return INVALID_DATE;
}
