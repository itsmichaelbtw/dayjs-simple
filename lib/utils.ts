import { MutableDate } from "./mutable-date";
import { ObjectTypes, OutputConversionOptions } from "./types";

const toObjectString = Object.prototype.toString;

export function callObjectType(input: any): ObjectTypes {
    const type = toObjectString.call(input);
    const objectType = type.slice(8, -1).toLowerCase();
    return objectType;
}

export function argumentIsNotDefined(input: any): boolean {
    return input === null || input === undefined;
}
