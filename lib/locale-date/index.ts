import { MutableDate } from "../mutable-date";
import { getTimezoneOffset, getTimezoneString } from "../utils";

import type { MutableDateArgument } from "../types";

export class LocaleDate extends MutableDate {
    constructor(date?: MutableDateArgument) {
        super(date, "local");
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
