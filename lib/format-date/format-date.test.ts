import { describe, test, expect } from "@jest/globals";
import { formatDate, MutableDate } from "../index";

describe("formatDate", () => {
    test("should return ISO format if no format string is given", () => {
        const date = new Date("2021-01-01T00:00:00.000Z");
        expect(formatDate(date)).toBe("2021-01-01T00:00:00.000Z");
    });

    test("should return the date in the given format", () => {
        const date = new Date("2021-01-01T00:00:00.000Z");
        expect(formatDate(date, "YYYY-MM-DD")).toBe("2021-01-01");
    });

    test("should return 'Invalid Date' if the given date is invalid", () => {
        const date = new Date("invalid");
        expect(formatDate(date)).toBe("Invalid Date");
    });

    test("should return 'Invalid Date' with a given template", () => {
        const date = new Date("invalid");
        expect(formatDate(date, "YYYY-MM-DD")).toBe("Invalid Date");
    });

    test("should format the date if the given date is a mutable date", () => {
        const date = MutableDate.create("2021-01-01T00:00:00.000Z");
        expect(formatDate(date, "YYYY-MM-DD")).toBe("2021-01-01");
    });
});
