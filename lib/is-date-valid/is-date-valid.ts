import { MutableDate } from "../mutable-date";
import { argumentIsNotDefined } from "../utils";
import { MutableDateArgument } from "../types";

/**
 * returns true if the input has a valid calendar date
 */
export function isDateValid(date: MutableDateArgument): boolean {
    if (argumentIsNotDefined(date)) {
        return false;
    }

    if (MutableDate.isInstance(date)) {
        return date.isValid();
    }

    return !isNaN(new Date(date).getTime());
}
