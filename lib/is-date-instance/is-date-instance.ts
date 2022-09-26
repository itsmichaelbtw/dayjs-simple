import { callObjectType, DateArgumentInput } from "../utils";

/** returns true if the input is a date. Alternatively,
 * if a string is passed, it will check if the input
 * is an instance of new Date
 *
 * this will not validate if the input string is a
 * valid date, 50/12/2020 will still return true */

export function isDateInstance(date: DateArgumentInput): boolean {
    if (date === null || date === undefined) {
        return false;
    }

    const objectType = callObjectType(date);

    if (objectType === "[object Date]") {
        return true;
    }

    return false;
}
