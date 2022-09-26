import dayjs from "dayjs";
import { DayJsArgumentInput } from "../utils";

/**
 * returns true if the input has a valid calendar date
 */
export function isDateValid(
    date: DayJsArgumentInput,
    allowStrict: boolean
): boolean {
    if (allowStrict) {
        return dayjs(date, undefined, true).isValid();
    }

    return dayjs(date).isValid();
}
