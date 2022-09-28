import { describe, test, expect } from "@jest/globals";
import { decrementDate, MutableDate } from "../index";

describe("decrementDate", () => {
    test("should return an instance of MutableDate", () => {
        const instances = [
            decrementDate(null, 1, "day"),
            decrementDate(undefined, 5, "years"),
            decrementDate(new Date(), -1, "minutes"),
            decrementDate(new MutableDate(), 10, "seconds"),
            decrementDate(Date.now(), 135, "day"),
            decrementDate("2020-01-01", -13, "weeks")
        ];

        instances.forEach((instance) => {
            expect(instance).toBeInstanceOf(MutableDate);
        });
    });

    test("should decrement the date by the specified amount", () => {
        const now = new Date();
        const mutable = new MutableDate(now);
        const decrementDay = decrementDate(now, 10, "days");
        const decrementMonth = decrementDate(now, 13, "months");
        const decrementYear = decrementDate(now, 5, "years");

        expect(decrementDay.toDate().getDate()).toBe(
            mutable.clone().subtract(10, "days").toDate().getDate()
        );
        expect(decrementMonth.toDate().getMonth()).toBe(
            mutable.clone().subtract(13, "months").toDate().getMonth()
        );
        expect(decrementYear.toDate().getFullYear()).toBe(
            mutable.clone().subtract(5, "years").toDate().getFullYear()
        );
    });

    test("should mutate the original instance if passed", () => {
        const now = new Date();
        const mutableDate = new MutableDate(now);
        const decrementDay = decrementDate(mutableDate, 1, "day");

        expect(decrementDay.toISOString()).toEqual(mutableDate.toISOString());
    });

    test("should manage negative values", () => {
        const now = new Date();
        const mutable = new MutableDate(now);
        const decrementDay = decrementDate(now, -101, "days");
        const decrementMonth = decrementDate(now, -5, "month");
        const decrementYear = decrementDate(now, -10, "year");

        expect(decrementDay.toDate().getDate()).toBe(
            mutable.clone().subtract(-101, "days").toDate().getDate()
        );
        expect(decrementMonth.toDate().getMonth()).toBe(
            mutable.clone().subtract(-5, "month").toDate().getMonth()
        );
        expect(decrementYear.toDate().getFullYear()).toBe(
            mutable.clone().subtract(-10, "year").toDate().getFullYear()
        );
    });
});
