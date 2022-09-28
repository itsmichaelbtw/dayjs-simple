import { callObjectType, argumentIsNotDefined } from "../utils";

/** checks if the input is an instance of new Date. */

export function isDateInstance(date: any): date is Date {
    if (argumentIsNotDefined(date)) {
        return false;
    }

    const objectType = callObjectType(date);

    if (objectType === "date") {
        return true;
    }

    return false;
}
