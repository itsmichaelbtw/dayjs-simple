import { MutableDate } from "../mutable-date";
import { argumentIsNotDefined } from "../utils";
import { MutableDateArgument } from "../types";

/**
 * Checks if the input is a valid date.
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
