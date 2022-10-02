import { describe, expect, test } from "@jest/globals";
import { MutableDate, isDateInstance } from "../index";

// write better unit tests for timezone switching
// will do it later

describe("new MutableDate", () => {
    describe("constructor", () => {
        test("should create a new date with the current date and time", () => {
            const date = new MutableDate();

            expect(date.toDate().getTime()).toBeCloseTo(
                new Date().getTime(),
                -2
            );
        });

        test("passing either a string, number or date input returns a date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate(1577836800000);
            const date3 = new MutableDate(new Date("2020-01-01"));

            expect(date1.toDate().getTime()).toBe(1577836800000);
            expect(date2.toDate().getTime()).toBe(1577836800000);
            expect(date3.toDate().getTime()).toBe(1577836800000);
        });

        test("selecting a timezone returns the correct date", () => {
            const _date1 = new Date("2022-01-01T00:00:00.000Z");
            const _date2 = new Date(Date.UTC(2022, 0, 1, 0, 0, 0, 0));
            const date1 = new MutableDate(_date1, "local");
            const date2 = new MutableDate(_date2, "utc");

            expect(date1.toDate().getTime()).toBe(_date1.getTime());
            expect(date2.toDate().getTime()).toBe(_date2.getTime());
        });
    });

    describe("toDate()", () => {
        test("returns the date as a date object", () => {
            const date = new MutableDate("2020-01-01");

            expect(isDateInstance(date.toDate())).toBe(true);
        });
    });

    describe("toJSON()", () => {
        test("returns the correct string", () => {
            const _date = new Date("2022-01-01");
            const date = new MutableDate(_date);

            expect(date.toJSON()).toBe(_date.toJSON());
        });
    });

    describe("toString()", () => {
        test("returns the correct string", () => {
            const _date = new Date("2022-01-01");
            const date = new MutableDate(_date);

            expect(date.toString()).toBe(_date.toString());
        });
    });

    describe("toISOString()", () => {
        test("returns the correct string", () => {
            const _date = new Date("2022-01-01");
            const date = new MutableDate(_date);

            expect(date.toISOString()).toBe(_date.toISOString());
        });

        test("the string is in the ISO format", () => {
            const _date = new Date("2022-01-01");
            const date = new MutableDate(_date);

            expect(date.toISOString()).toMatch(_date.toISOString());
        });
    });

    describe("toUTCString()", () => {
        test("returns the correct string", () => {
            const _date = new Date("2022-01-01");
            const date = new MutableDate(_date);

            expect(date.toUTCString()).toBe(_date.toUTCString());
        });

        test("the string is in the UTC format", () => {
            const _date = new Date("2022-01-01");
            const date = new MutableDate(_date);

            expect(date.toUTCString()).toMatch(_date.toUTCString());
        });
    });

    describe("isAfter()", () => {
        test("returns true if the date is after the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");

            expect(date2.isAfter(date1)).toBe(true);
        });

        test("returns false if the date is before the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");

            expect(date1.isAfter(date2)).toBe(false);
        });

        test("returns false if the date is equal to the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-01");

            expect(date1.isAfter(date2)).toBe(false);
        });

        test("dates with time are compared with time", () => {
            const date1 = new MutableDate("2020-01-01T04:35:00.000Z");
            const date2 = new MutableDate("2020-01-01T12:24:00.000Z");

            expect(date2.isAfter(date1)).toBe(true);
        });
    });

    describe("isBefore()", () => {
        test("returns true if the date is before the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");

            expect(date1.isBefore(date2)).toBe(true);
        });

        test("returns false if the date is after the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");

            expect(date2.isBefore(date1)).toBe(false);
        });

        test("returns false if the date is equal to the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-01");

            expect(date1.isBefore(date2)).toBe(false);
        });

        test("dates with time are compared with time", () => {
            const date1 = new MutableDate("2020-01-01T04:35:00.000Z");
            const date2 = new MutableDate("2020-01-01T12:24:00.000Z");

            expect(date1.isBefore(date2)).toBe(true);
        });
    });

    describe("isBetween()", () => {
        test("returns true if the date is between the given dates", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");
            const date3 = new MutableDate("2020-01-03");

            expect(date2.isBetween(date1, date3)).toBe(true);
        });

        test("returns false if the date is not between the given dates", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");
            const date3 = new MutableDate("2020-01-03");

            expect(date1.isBetween(date2, date3)).toBe(false);
        });

        test("dates with time are compared with time", () => {
            const date1 = new MutableDate("2020-01-01T04:35:00.000Z");
            const date2 = new MutableDate("2020-01-01T12:24:00.000Z");
            const date3 = new MutableDate("2020-01-01T20:13:00.000Z");

            expect(date2.isBetween(date1, date3)).toBe(true);
        });

        test("the date is inclusive", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");
            const date3 = new MutableDate("2020-01-03");

            expect(date2.isBetween(date1, date3, "day", "()")).toBe(true);
        });
    });

    describe("isSame()", () => {
        test("returns true if the date is the same as the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-01");

            expect(date1.isSame(date2)).toBe(true);
        });

        test("returns false if the date is not the same as the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");

            expect(date1.isSame(date2)).toBe(false);
        });

        test("dates with time are compared with time", () => {
            const date1 = new MutableDate("2020-01-01T04:35:00.000Z");
            const date2 = new MutableDate("2020-01-01T12:24:00.000Z");

            expect(date1.isSame(date2)).toBe(false);
        });
    });

    describe("isSameOrAfter()", () => {
        test("returns true if the date is the same as the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-01");

            expect(date1.isSameOrAfter(date2)).toBe(true);
        });

        test("returns true if the date is after the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");

            expect(date2.isSameOrAfter(date1)).toBe(true);
        });

        test("returns false if the date is before the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");

            expect(date1.isSameOrAfter(date2)).toBe(false);
        });

        test("dates with time are compared with time", () => {
            const date1 = new MutableDate("2020-01-01T04:35:00.000Z");
            const date2 = new MutableDate("2020-01-01T12:24:00.000Z");

            expect(date2.isSameOrAfter(date1)).toBe(true);
        });
    });

    describe("isSameOrBefore()", () => {
        test("returns true if the date is the same as the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-01");

            expect(date1.isSameOrBefore(date2)).toBe(true);
        });

        test("returns true if the date is before the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");

            expect(date1.isSameOrBefore(date2)).toBe(true);
        });

        test("returns false if the date is after the given date", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = new MutableDate("2020-01-02");

            expect(date2.isSameOrBefore(date1)).toBe(false);
        });

        test("dates with time are compared with time", () => {
            const date1 = new MutableDate("2020-01-01T04:35:00.000Z");
            const date2 = new MutableDate("2020-01-01T12:24:00.000Z");

            expect(date1.isSameOrBefore(date2)).toBe(true);
        });
    });

    describe("isLeapYear()", () => {
        test("returns true if the date is in a leap year", () => {
            const date = new MutableDate("2020-01-01");

            expect(date.isLeapYear()).toBe(true);
        });

        test("returns false if the date is not in a leap year", () => {
            const date = new MutableDate("2021-01-01");

            expect(date.isLeapYear()).toBe(false);
        });
    });

    describe("isValid()", () => {
        test("returns true if the date is valid", () => {
            const date = new MutableDate("2020-01-01");

            expect(date.isValid()).toBe(true);
        });

        test("returns true with date overflow", () => {
            const date = new MutableDate("2020-13-01");

            expect(date.isValid()).toBe(true);
        });

        test("returns true with time overflow", () => {
            const date = new MutableDate("2020-01-01T25:00:00.000Z");

            expect(date.isValid()).toBe(true);
        });
    });

    describe("clone()", () => {
        test("cloning a mutable date returns a new instance", () => {
            const date1 = new MutableDate("2020-01-01");
            const date2 = date1.clone();

            expect(date1).not.toBe(date2);
        });
    });
});
