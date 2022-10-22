import { isDateInstance } from "./is-date-instance";

import type { ObjectTypes } from "./types";

const toObjectString = Object.prototype.toString;

export function callObjectType(input: any): ObjectTypes {
    const type = toObjectString.call(input);
    const objectType = type.slice(8, -1).toLowerCase();
    return objectType;
}

export function argumentIsNotDefined(input: any): input is undefined | null {
    return input === undefined || input === null;
}

export function swapArguments<T>(arg1: T, arg2: T): [T, T] {
    return [arg2, arg1];
}

export function isNegative(input: number): boolean {
    return input < 0;
}

export function isPositive(input: number): boolean {
    return input > 0;
}

export function absolute(input: number): number {
    return Math.abs(input);
}

export function round(number: number): number {
    if (isNegative(number)) {
        return Math.ceil(number);
    }

    return Math.floor(number);
}

export function getTimezoneOffset(date?: Date): number {
    let offset: number = 0;

    if (isDateInstance(date)) {
        offset = date.getTimezoneOffset();
    } else {
        offset = new Date().getTimezoneOffset();
    }

    return -round(offset / 15) * 15;
}

export function getTimezoneString(): string {
    if (
        typeof Intl !== "undefined" &&
        typeof Intl.DateTimeFormat !== "undefined"
    ) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    return "UTC";
}
