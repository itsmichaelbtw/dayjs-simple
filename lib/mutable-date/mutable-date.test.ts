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

    describe("isToday()", () => {
        test("should return true if the date is today", () => {
            const date = new MutableDate("2020-01-01");
            const today = new MutableDate();

            expect(date.isToday()).toBe(false);
            expect(today.isToday()).toBe(true);
        });
    });

    describe("isTomrrow()", () => {
        test("should return true if the date is tomorrow", () => {
            const date = new MutableDate("2020-01-01");
            const tomorrow = new MutableDate().add(1, "days");

            expect(date.isTomorrow()).toBe(false);
            expect(tomorrow.isTomorrow()).toBe(true);
        });
    });

    describe("isYesterday()", () => {
        test("should return true if the date is yesterday", () => {
            const date = new MutableDate("2020-01-01");
            const yesterday = new MutableDate().subtract(1, "days");

            expect(date.isYesterday()).toBe(false);
            expect(yesterday.isYesterday()).toBe(true);
        });
    });

    describe("isPast()", () => {
        test("should return true if the date is in the past", () => {
            const date = new MutableDate("2020-01-01");
            const today = new MutableDate();

            expect(date.isPast()).toBe(true);
            expect(today.isPast()).toBe(false);
        });
    });

    describe("isFuture()", () => {
        test("should return true if the date is in the future", () => {
            const date = new MutableDate("2020-01-01");
            const today = new MutableDate();

            expect(date.isFuture()).toBe(false);
            expect(today.isFuture()).toBe(false);
        });
    });
});
