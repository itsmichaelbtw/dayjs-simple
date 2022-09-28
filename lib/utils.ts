import { MutableDate } from "./mutable-date";
import { ObjectTypes } from "./types";

const toObjectString = Object.prototype.toString;

export function callObjectType(input: any): ObjectTypes {
    const type = toObjectString.call(input);
    const objectType = type.slice(8, -1).toLowerCase();
    return objectType;
}

export function argumentIsNotDefined(input: any): boolean {
    return input === null || input === undefined;
}

// export function transpileOutput(
//     date: string | MutableDate,
//     transpile: DateManipulateReturnType
// ) {
//     const isMutableDate = MutableDate.isInstance(date);

//     if (isMutableDate && transpile === "matchType") {
//         return date as MutableDate;
//     }

//     if (isMutableDate && transpile === "iso-string") {
//         return date.toISOString() as string;
//     }

//     if (!isMutableDate && transpile === "matchType") {
//         return MutableDate.create(date) as MutableDate;
//     }

//     if (!isMutableDate && transpile === "iso-string") {
//         return MutableDate.create(date).toISOString() as string;
//     }
// }

// transpileOutput(new MutableDate(), "matchType");
