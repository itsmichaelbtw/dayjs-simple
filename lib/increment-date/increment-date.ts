import { isDateValid } from "../is-date-valid";
import { MutableDate } from "../mutable-date";
import {
    ManipulateType,
    MutableDateArgument,
    OutputConversionOptions
} from "../types";

/**
 * Increment a given date by a given amount of time. If an invalid date is provided, the current date is used.
 * Passing an instance of MutableDate will mutate the original instance.
 */
export function incrementDate(
    date: MutableDateArgument,
    value: number,
    unit: ManipulateType,
    outputConversion?: OutputConversionOptions
): MutableDate {
    if (MutableDate.isInstance(date)) {
        return date.add(value, unit);
    }

    if (isDateValid(date)) {
        return MutableDate.create(date).add(value, unit);
    }

    return MutableDate.create().add(value, unit);
}
