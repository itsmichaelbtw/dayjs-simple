import { describe, test, expect } from "@jest/globals";
import { isDateValid } from "./index";

describe("isDateValid", () => {
    test("null", () => {
        const result = isDateValid(null);
        expect(result).toBe(false);
    });

    test("undefined", () => {
        const result = isDateValid(undefined);
        expect(result).toBe(false);
    });

    test("new Date", () => {
        const result = isDateValid(new Date());
        expect(result).toBe(true);
    });

    test("YYYY-MM-DD", () => {
        const result = isDateValid("2021-01-01");
        expect(result).toBe(true);
    });

    test("timestamp", () => {
        const result = isDateValid(1612137600000);
        expect(result).toBe(true);
    });

    test("invalid date", () => {
        const result = isDateValid("2021-01-32");
        expect(result).toBe(false);
    });

    test("invalid time", () => {
        const result = isDateValid("2021-01-01T25:00:00");
        expect(result).toBe(false);
    });
});
