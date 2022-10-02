import { describe, expect, test } from "@jest/globals";
import { getDateDifference, MutableDate } from "../index";

describe("getDateDifference", () => {
    test("should return the difference between two local dates", () => {
        const date1 = new MutableDate("2020-01-01", "local");
        const date2 = new MutableDate("2020-01-02", "local");

        const difference = getDateDifference(date2, date1, true);

        expect(difference).toEqual({
            years: 0,
            months: 0,
            days: 1,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        });
    });

    test("should return the difference between two utc dates", () => {
        const date1 = new MutableDate("2020-01-01T06:25:11", "utc");
        const date2 = new MutableDate("2020-04-15T15:30:10", "utc");

        const difference = getDateDifference(date2, date1, true);

        expect(difference).toEqual({
            years: 0,
            months: 3,
            days: 15,
            hours: 9,
            minutes: 4,
            seconds: 59,
            milliseconds: 0
        });
    });

    test("should return the difference between two dates with a different timezone", () => {
        const date1 = new MutableDate("2020-01-01", "local");
        const date2 = new MutableDate("2020-01-02", "utc");

        const difference = getDateDifference(date1, date2, true);

        expect(difference).toEqual({
            years: 0,
            months: 0,
            days: -1,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        });
    });

    test("should return x.0 if an invalid date is passed", () => {
        const date1 = new Date("2020-01-01");
        const date2 = new Date("invalid");

        const difference = getDateDifference(date1, date2, true);

        expect(difference).toEqual({
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        });
    });

    test("should return a negative value if the first argument is smaller", () => {
        const date1 = new MutableDate("2020-01-01", "local");
        const date2 = new MutableDate("2020-01-02", "local");

        const difference = getDateDifference(date1, date2, true);

        expect(difference).toEqual({
            years: 0,
            months: 0,
            days: -1,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        });
    });
});
