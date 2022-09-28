import { describe, test, expect } from "@jest/globals";
import { unixTs, MutableDate } from "../index";

describe("unixTs", () => {
    test("convert current date to unix (ms)", () => {
        const now = new Date();
        const unixNow = now.getTime();
        const result = unixTs(null, "milliseconds");
        expect(result).toBeCloseTo(unixNow, 1);
        expect(String(result)).toHaveLength(13);
    });

    test("convert current date to unix (s)", () => {
        const now = new Date();
        const unixNow = Math.floor(now.getTime() / 1000);
        const result = unixTs(null, "seconds");
        expect(result).toBeCloseTo(unixNow, 1);
        expect(String(result)).toHaveLength(10);
    });

    test("convert 2019-01-31 to unix (ms)", () => {
        const date = new Date("2019-01-31");
        const unixDate = date.getTime();
        const result = unixTs(date, "milliseconds");
        expect(result).toBe(unixDate);
        expect(String(result)).toHaveLength(13);
    });

    test("convert 2019-01-31 to unix (s)", () => {
        const date = new Date("2019-01-31");
        const unixDate = Math.floor(date.getTime() / 1000);
        const result = unixTs(date, "seconds");
        expect(result).toBe(unixDate);
        expect(String(result)).toHaveLength(10);
    });

    test("convert 2019-01-31 unix (ms) as MutableDate", () => {
        const date = new MutableDate("2019-01-31");
        const unixDate = date.toDate().getTime();
        const result = unixTs(date, "milliseconds");

        expect(result).toBe(unixDate);
        expect(String(result)).toHaveLength(13);
    });

    test("convert 2019-01-31 unix (s) as MutableDate", () => {
        const date = new MutableDate("2019-01-31");
        const unixDate = Math.floor(date.toDate().getTime() / 1000);
        const result = unixTs(date, "seconds");

        expect(result).toBe(unixDate);
        expect(String(result)).toHaveLength(10);
    });

    test("convert null to unix (ms)", () => {
        const result = unixTs(null, "milliseconds");
        expect(result).toBeCloseTo(new Date().getTime(), 1);
        expect(String(result)).toHaveLength(13);
    });

    test("convert null to unix (s)", () => {
        const result = unixTs(null, "seconds");
        expect(result).toBeCloseTo(Math.floor(new Date().getTime() / 1000), 1);
        expect(String(result)).toHaveLength(10);
    });
});
