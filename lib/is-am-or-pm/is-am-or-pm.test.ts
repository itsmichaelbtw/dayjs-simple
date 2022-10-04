import { describe, expect, test } from "@jest/globals";
import { isAMOrPM } from "../index";

describe("isAMOrPM", () => {
    test("a date that is AM", () => {
        const date = new Date("2020-01-01T00:00:00.000Z");
        expect(isAMOrPM(date)).toBe("AM");
    });

    test("a date that is PM", () => {
        const date = new Date("2020-01-01T12:00:00.000Z");
        expect(isAMOrPM(date)).toBe("PM");
    });

    test("a date that is invalid returns 'Invalid Date'", () => {
        const date = new Date("2020-92-01T29:00:00.000Z");
        expect(isAMOrPM(date)).toBe("Invalid Date");
    });
});
