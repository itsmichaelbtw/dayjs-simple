import dayjs from "dayjs";

import { isDateValid } from "../is-date-valid";
import { isDateInstance } from "../is-date-instance";
import { argumentIsNotDefined } from "../utils";
import {
    DateArgument,
    MutableDateArgument,
    MutableTimeZone,
    ParentLibType,
    CompareInclusivity,
    MutableUnitType,
    OpMutableUnitType,
    QMutableUnitType,
    ManipulateType,
    UnixUnitConversion,
    OutputConversionOptions
} from "../types";

type InvokeDayJs = (
    date?: DateArgument,
    format?: string,
    strict?: boolean
) => ParentLibType;

export class MutableDate {
    protected $currentDate: ParentLibType;
    protected $timezone: MutableTimeZone;
    protected $instance: InvokeDayJs;

    constructor(date?: DateArgument, timezone: MutableTimeZone = "utc") {
        this.$timezone = timezone;
        this.init(date);
    }

    static isInstance(date?: DateArgument | MutableDate): date is MutableDate {
        return isMutableDateInstance(date);
    }

    static create(
        date?: DateArgument,
        timezone: MutableTimeZone = "utc"
    ): MutableDate {
        return new MutableDate(date, timezone);
    }

    private init(date?: DateArgument) {
        this.$instance = this.libHandler(this.$timezone);

        if (MutableDate.isInstance(date)) {
            this.$currentDate = this.$instance(date.toDate());
        } else if (argumentIsNotDefined(date)) {
            this.$currentDate = this.$instance();
        } else if (isDateInstance(date) || isDateValid(date)) {
            this.$currentDate = this.$instance(date);
        } else {
            this.$currentDate = this.$instance();
        }
    }

    private libHandler(timezone: MutableTimeZone): InvokeDayJs {
        if (timezone === "utc") {
            return dayjs.utc;
        }

        return dayjs;
    }

    get timezone(): MutableTimeZone {
        return this.$timezone;
    }

    toDate(): Date {
        return this.$currentDate.toDate();
    }

    toISOString(): string {
        return this.$currentDate.toISOString();
    }

    toJSON(): string {
        return this.$currentDate.toJSON();
    }

    toString(): string {
        return this.$currentDate.toString();
    }

    isAfter(date: MutableDateArgument, unit?: OpMutableUnitType): boolean {
        if (MutableDate.isInstance(date)) {
            return this.$currentDate.isAfter(date.toDate(), unit);
        }

        return this.$currentDate.isAfter(date, unit);
    }

    isBefore(date: MutableDateArgument, unit?: OpMutableUnitType): boolean {
        if (MutableDate.isInstance(date)) {
            return this.$currentDate.isBefore(date.toDate(), unit);
        }

        return this.$currentDate.isBefore(date, unit);
    }

    isBetween(
        start: MutableDateArgument,
        end: MutableDateArgument,
        unit?: OpMutableUnitType,
        inclusivity?: CompareInclusivity
    ): boolean {
        if (MutableDate.isInstance(start)) {
            start = start.toDate();
        }

        if (MutableDate.isInstance(end)) {
            end = end.toDate();
        }

        return this.$currentDate.isBetween(start, end, unit, inclusivity);
    }

    isSame(date: DateArgument, unit?: OpMutableUnitType): boolean {
        if (MutableDate.isInstance(date)) {
            return this.$currentDate.isSame(date.toDate(), unit);
        }

        return this.$currentDate.isSame(date, unit);
    }

    isSameOrAfter(date: DateArgument, unit?: OpMutableUnitType): boolean {
        if (MutableDate.isInstance(date)) {
            return (
                this.$currentDate.isSame(date.toDate(), unit) ||
                this.isAfter(date, unit)
            );
        }

        return this.$currentDate.isSame(date, unit) || this.isAfter(date, unit);
    }

    isSameOrBefore(date: DateArgument, unit?: OpMutableUnitType): boolean {
        if (MutableDate.isInstance(date)) {
            return (
                this.$currentDate.isSame(date.toDate(), unit) ||
                this.isBefore(date, unit)
            );
        }

        return (
            this.$currentDate.isSame(date, unit) || this.isBefore(date, unit)
        );
    }

    isLeapYear(): boolean {
        return this.$currentDate.isLeapYear();
    }

    isValid(): boolean {
        return this.$currentDate.isValid();
    }

    isUTC(): boolean {
        return this.$timezone === "utc";
    }

    add(value: number, unit?: ManipulateType): MutableDate {
        this.$currentDate = this.$currentDate.add(value, unit);
        return this;
    }

    subtract(value: number, unit?: ManipulateType): MutableDate {
        this.$currentDate = this.$currentDate.subtract(value, unit);
        return this;
    }

    clone(): MutableDate {
        return new MutableDate(this.$currentDate.toDate(), this.$timezone);
    }

    unix(unit?: UnixUnitConversion): number {
        const unix = this.$currentDate.unix();

        if (unit === "milliseconds") {
            return unix * 1000;
        }

        return unix;
    }

    format(template?: string): string {
        if (template) {
            return this.$currentDate.format(template);
        }

        return this.toISOString();
    }

    diff(
        date?: DateArgument,
        unit?: QMutableUnitType | OpMutableUnitType,
        float?: boolean
    ): number {
        return this.$currentDate.diff(date, unit, float);
    }

    get(unit: MutableUnitType): number {
        return this.$currentDate.get(unit);
    }

    set(unit: MutableUnitType, value: number): MutableDate {
        this.$currentDate = this.$currentDate.set(unit, value);
        return this;
    }

    millisecond(): number;
    millisecond(value: number): MutableDate;
    millisecond(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.millisecond();
        }

        this.$currentDate = this.$currentDate.millisecond(value);
        return this;
    }

    second(): number;
    second(value: number): MutableDate;
    second(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.second();
        }

        this.$currentDate = this.$currentDate.second(value);
        return this;
    }

    minute(): number;
    minute(value: number): MutableDate;
    minute(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.minute();
        }

        this.$currentDate = this.$currentDate.minute(value);
        return this;
    }

    hour(): number;
    hour(value: number): MutableDate;
    hour(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.hour();
        }

        this.$currentDate = this.$currentDate.hour(value);
        return this;
    }

    day(): number;
    day(value: number): MutableDate;
    day(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.day();
        }

        this.$currentDate = this.$currentDate.day(value);
        return this;
    }

    month(): number;
    month(value: number): MutableDate;
    month(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.month();
        }

        this.$currentDate = this.$currentDate.month(value);
        return this;
    }

    year(): number;
    year(value: number): MutableDate;
    year(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.year();
        }

        this.$currentDate = this.$currentDate.year(value);
        return this;
    }

    date(): number;
    date(value: number): MutableDate;
    date(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.date();
        }

        this.$currentDate = this.$currentDate.date(value);
        return this;
    }

    startOf(unit: MutableUnitType): MutableDate {
        this.$currentDate = this.$currentDate.startOf(unit);
        return this;
    }

    endOf(unit: MutableUnitType): MutableDate {
        this.$currentDate = this.$currentDate.endOf(unit);
        return this;
    }

    valueOf(): number {
        return this.$currentDate.valueOf();
    }

    daysInMonth(): number {
        return this.$currentDate.daysInMonth();
    }

    // // custom methods

    to(outputConversion: OutputConversionOptions) {
        if (outputConversion === "Date") {
            return this.$currentDate.toDate() as Date;
        }

        if (outputConversion === "MutableDate") {
            return this as MutableDate;
        }

        if (outputConversion === "number") {
            return this.$currentDate.valueOf() as number;
        }

        if (outputConversion === "string") {
            return this.$currentDate.toISOString() as string;
        }

        return this;
    }

    // getDifference(date: DateArgument) {
    //     return {};
    // }

    // // isPastDate() {
    // //     return this.isBefore(this.$instance());
    // // }

    // // isFutureDate(): boolean {
    // //     return this.isAfter(this.$instance());
    // // }

    // isEqualDate(date: DateArgument): boolean {
    //     return this.isSame(date);
    // }

    // currentTimezone(): MutableTimeZone {
    //     return this.$timezone;
    // }
}

export function isMutableDateInstance(date: any): date is MutableDate {
    return date instanceof MutableDate;
}
