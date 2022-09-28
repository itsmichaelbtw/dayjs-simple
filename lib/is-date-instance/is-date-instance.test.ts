import { describe, test, expect } from "@jest/globals";
import { isDateInstance, MutableDate } from "../index";

describe("isDateInstance", () => {
    test("null should be false", () => {
        const result = isDateInstance(null);
        expect(result).toBe(false);
    });

    test("undefined should be false", () => {
        const result = isDateInstance(undefined);
        expect(result).toBe(false);
    });

    test("new Date should be true", () => {
        const result = isDateInstance(new Date());
        expect(result).toBe(true);
    });

    test("current timestamp should be true", () => {
        const currentTimestamp = new Date().getTime();
        const result = isDateInstance(currentTimestamp);
        expect(result).toBe(false);
    });

    test("2021-01-01 should be true", () => {
        const result = isDateInstance("2021-01-01");
        expect(result).toBe(false);
    });

    test("2021-01-01 as MutableDate should be true", () => {
        const date = new MutableDate("2021-01-01");
        const result = isDateInstance(date.toDate());
        expect(result).toBe(true);
    });
});
