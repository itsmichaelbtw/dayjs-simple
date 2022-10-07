import { describe, expect, test } from "@jest/globals";
import { LocaleDate } from "../index";

describe("new LocaleDate", () => {
    test("should create a new instance", () => {
        const date = new LocaleDate();
        expect(date).toBeInstanceOf(LocaleDate);
    });

    test("should create a new instance with a date", () => {
        const date = new LocaleDate(new Date());
        expect(date).toBeInstanceOf(LocaleDate);
    });
});
