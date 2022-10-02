import { MutableDate } from "../mutable-date";
import { isDateValid } from "../is-date-valid";
import { argumentIsNotDefined } from "../utils";

import { UnixUnitConversion, MutableDateArgument } from "../types";

export function computeUnix(date: Date, unit: UnixUnitConversion) {
    if (unit === "milliseconds") {
        return date.getTime();
    }

    return Math.floor(date.getTime() / 1000);
}

/**
 * Returns the unix timestamp of the given date. If no date is given, the current date is used.
 */

export function unixTs(
    date?: MutableDateArgument,
    unit: UnixUnitConversion = "milliseconds"
): number {
    const unixNow = computeUnix(new Date(), unit);

    if (argumentIsNotDefined(date)) {
        return unixNow;
    }

    if (MutableDate.isInstance(date)) {
        return date.unix(unit);
    }

    if (isDateValid(date)) {
        return computeUnix(new Date(date), unit);
    }

    return unixNow;
}
