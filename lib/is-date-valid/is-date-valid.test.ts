import { describe, test, expect } from "@jest/globals";
import { MutableDate, isDateValid } from "../index";

describe("isDateValid", () => {
    test("null should be false", () => {
        const result = isDateValid(null);
        expect(result).toBe(false);
    });

    test("undefined should be false", () => {
        const result = isDateValid(undefined);
        expect(result).toBe(false);
    });

    test("new Date should be true", () => {
        const result = isDateValid(new Date());
        expect(result).toBe(true);
    });

    test("current timestamp should be true", () => {
        const currentTimestamp = new Date().getTime();
        const result = isDateValid(currentTimestamp);
        expect(result).toBe(true);
    });

    test("2021-01-1 should be true", () => {
        const result = isDateValid("2021-01-01");
        expect(result).toBe(true);
    });

    test("2021-01-31 should be false", () => {
        const result = isDateValid("2021-01-32");
        expect(result).toBe(false);
    });

    test("2021-01-01 as MutableDate should be true", () => {
        const date = new MutableDate("2021-01-01");
        const result = isDateValid(date);
        expect(result).toBe(true);
    });

    test("2021-01-01T25:00:00 should be false", () => {
        const result = isDateValid("2021-01-01T25:00:00");
        expect(result).toBe(false);
    });

    test(`'invalid date' should be false`, () => {
        const result = isDateValid(new Date("invalid date"));
        expect(result).toBe(false);
    });
});
