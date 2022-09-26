import dayjs from "dayjs";
import { isDateInstance } from "../is-date-instance";
import { DateArgumentInput } from "../utils";

export function localeDate(date?: DateArgumentInput): dayjs.Dayjs {
    if (date === null || date === undefined) {
        return dayjs();
    }

    if (isDateInstance(date)) {
        return dayjs(date);
    }

    return dayjs(new Date(date));
}

class MutableDate {
    constructor() {
        return dayjs();
    }
}

console.log(new MutableDate());
