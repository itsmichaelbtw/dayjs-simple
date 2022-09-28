import { describe, test, expect } from "@jest/globals";
import { isDateInstance } from "./index";

describe("isDateInstance", () => {
    test("null", () => {
        const result = isDateInstance(null);
        expect(result).toBe(false);
    });

    test("undefined", () => {
        const result = isDateInstance(undefined);
        expect(result).toBe(false);
    });

    test("new Date", () => {
        const result = isDateInstance(new Date());
        expect(result).toBe(true);
    });

    test("YYYY-MM-DD", () => {
        const result = isDateInstance("2021-01-01");
        expect(result).toBe(false);
    });

    test("timestamp", () => {
        const result = isDateInstance(1612137600000);
        expect(result).toBe(false);
    });
});
