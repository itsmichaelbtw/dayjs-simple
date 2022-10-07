import { MutableDate } from "../mutable-date";
import { MutableDateArgument } from "../types";
import { getTimezoneOffset, getTimezoneString } from "../utils";

export class LocaleDate extends MutableDate {
    constructor(date?: MutableDateArgument) {
        super(date, "utc");
    }

    /**
     * Returns the absolute difference between the local timezone and UTC in minutes.
     */
    static getTimezoneOffset(): number {
        return getTimezoneOffset();
    }

    /**
     * Uses `new Intl.DateTimeFormat()` to get the local timezone string. Only available in modern browsers.
     */
    static getTimezoneString(): string {
        return getTimezoneString();
    }

    convertToUTC(): MutableDate {
        return this.switchTimezone("utc");
    }
}
