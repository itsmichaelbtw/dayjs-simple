import { isDateValid } from "../is-date-valid";
import { MutableDate } from "../mutable-date";
import {
    ManipulateType,
    MutableDateArgument,
    OutputConversionOptions
} from "../types";

/**
 * Decrement a given date by a given amount of time. If an invalid date is provided, the current date is used.
 * Passing an instance of MutableDate will mutate the original instance.
 */
export function decrementDate(
    date: MutableDateArgument,
    value: number,
    unit: ManipulateType,
    outputConversion?: OutputConversionOptions
): MutableDate {
    if (MutableDate.isInstance(date)) {
        return date.subtract(value, unit);
    }

    if (isDateValid(date)) {
        return MutableDate.create(date).subtract(value, unit);
    }

    return MutableDate.create().subtract(value, unit);
}
