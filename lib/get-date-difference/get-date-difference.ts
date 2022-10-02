import { MutableDate } from "../mutable-date";
import { isDateValid } from "../is-date-valid";
import { isDateInstance } from "../is-date-instance";
import { swapArguments, round } from "../utils";
import {
    MILLIS_IN_YEAR,
    MILLIS_IN_MONTH,
    MILLIS_IN_DAY,
    MILLIS_IN_HOUR,
    MILLIS_IN_MINUTE,
    MILLIS_IN_SECOND
} from "../constants";
import { MutableDateArgument, ParsableDuration } from "../types";

const DefaultDateDifference: ParsableDuration = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
};

/**
 * Parses a duration into a parsable duration object.
 */
export function parseDurationFromMilliseconds(ms: number): ParsableDuration {
    const years = round(ms / MILLIS_IN_YEAR);
    ms -= years * MILLIS_IN_YEAR;

    const months = round(ms / MILLIS_IN_MONTH);
    ms -= months * MILLIS_IN_MONTH;

    const days = round(ms / MILLIS_IN_DAY);
    ms -= days * MILLIS_IN_DAY;

    const hours = round(ms / MILLIS_IN_HOUR);
    ms -= hours * MILLIS_IN_HOUR;

    const minutes = round(ms / MILLIS_IN_MINUTE);
    ms -= minutes * MILLIS_IN_MINUTE;

    const seconds = round(ms / MILLIS_IN_SECOND);
    ms -= seconds * MILLIS_IN_SECOND;

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds: ms
    };
}

/**
 * Gets the difference between two dates. If either date is invalid, it will return 0.
 *
 * Returning negative values indicates that the first date is after the second date and it is measuring the
 * past difference. For consistency, it is recommended to always pass the end date as the first argument.
 *
 * @example
 * const future = getDateDifference(new Date("2020-01-02"), new Date("2020-01-01")); // days = 1
 * const past = getDateDifference(new Date("2020-01-01"), new Date("2020-01-02")); // days = -1
 */
export function getDateDifference(
    end: MutableDateArgument,
    start: MutableDateArgument,
    roundNegativeZero: boolean = false
): ParsableDuration {
    if (!MutableDate.isInstance(start)) {
        start = MutableDate.create(start, "utc");
    }

    if (!MutableDate.isInstance(end)) {
        end = MutableDate.create(end, "utc");
    }

    if (!isDateValid(start) || !isDateValid(end)) {
        return DefaultDateDifference;
    }

    start.switchTimezone("utc");
    end.switchTimezone("utc");

    const duration = end.diff(start, "milliseconds");
    const parsed = parseDurationFromMilliseconds(duration);

    if (roundNegativeZero) {
        for (const key in parsed) {
            // round all -0 values

            if (parsed[key] === -0) {
                parsed[key] = 0;
            }
        }
    }

    return parsed;
}
