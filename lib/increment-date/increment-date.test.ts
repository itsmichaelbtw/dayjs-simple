import { describe, test, expect } from "@jest/globals";
import { incrementDate, MutableDate } from "../index";

describe("incrementDate", () => {
    test("should return an instance of MutableDate", () => {
        const instances = [
            incrementDate(null, 1, "day"),
            incrementDate(undefined, 5, "years"),
            incrementDate(new Date(), -1, "minutes"),
            incrementDate(new MutableDate(), 10, "seconds"),
            incrementDate(Date.now(), 135, "day"),
            incrementDate("2020-01-01", -13, "weeks")
        ];

        instances.forEach((instance) => {
            expect(instance).toBeInstanceOf(MutableDate);
        });
    });

    test("should increment the date by the specified amount", () => {
        const now = new Date();
        const incrementDay = incrementDate(now, 1, "day");
        const incrementMonth = incrementDate(now, 1, "month");
        const incrementYear = incrementDate(now, 1, "year");

        expect(incrementDay.toDate().getDate()).toBe(now.getDate() + 1);
        expect(incrementMonth.toDate().getMonth()).toBe(now.getMonth() + 1);
        expect(incrementYear.toDate().getFullYear()).toBe(
            now.getFullYear() + 1
        );
    });

    test("should mutate the original instance if passed", () => {
        const now = new Date();
        const mutableDate = new MutableDate(now);
        const incrementDay = incrementDate(mutableDate, 1, "day");

        expect(incrementDay.toISOString()).toEqual(mutableDate.toISOString());
    });

    test("should manage negative values", () => {
        const now = new Date();
        const mutable = new MutableDate(now);
        const incrementDay = incrementDate(now, -135, "days");
        const incrementMonth = incrementDate(now, -1, "month");
        const incrementYear = incrementDate(now, -10, "year");

        expect(incrementDay.toDate().getDate()).toBe(
            mutable.clone().add(-135, "days").toDate().getDate()
        );
        expect(incrementMonth.toDate().getMonth()).toBe(
            mutable.clone().add(-1, "month").toDate().getMonth()
        );
        expect(incrementYear.toDate().getFullYear()).toBe(
            mutable.clone().add(-10, "year").toDate().getFullYear()
        );
    });
});
