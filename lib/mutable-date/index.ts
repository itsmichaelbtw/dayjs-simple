import dayjs from "dayjs";

import { isDateValid } from "../is-date-valid";
import { isDateInstance } from "../is-date-instance";
import { getDateDifference } from "../get-date-difference";
import { argumentIsNotDefined, absolute, getTimezoneOffset } from "../utils";

import type {
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
    OutputConversionOptions,
    ParsableDuration
} from "../types";

type InvokeDayJs = (
    date?: DateArgument,
    format?: string,
    strict?: boolean
) => ParentLibType;

type MutableDateAsArray = [
    number,
    number,
    number,
    number,
    number,
    number,
    number
];

export class MutableDate {
    protected $instance: InvokeDayJs; // either returns dayjs() or dayjs.utc()
    protected $currentDate: ParentLibType; // current date using after calling this.$instance
    protected $timezone: MutableTimeZone; // current timezone

    constructor(
        date?: MutableDateArgument,
        timezone: MutableTimeZone = "utc",
        strict?: boolean
    ) {
        this.$timezone = timezone;
        this.init(date, strict);
    }

    static isInstance(date?: any): date is MutableDate {
        return isMutableDateInstance(date);
    }

    static create<T extends typeof MutableDate>(
        this: T,
        date?: MutableDateArgument,
        timezone: MutableTimeZone = "utc",
        strict?: boolean
    ): InstanceType<T> {
        return new this(date, timezone, strict) as InstanceType<T>;
    }

    private init(date?: MutableDateArgument, strict?: boolean) {
        this.$instance = this.libHandler(this.$timezone);

        const invokeInstance = (date: any): dayjs.Dayjs => {
            return this.$instance(date, undefined, strict);
        };

        if (MutableDate.isInstance(date)) {
            this.$currentDate = invokeInstance(date.toDate());
        } else if (isDateInstance(date) || isDateValid(date)) {
            this.$currentDate = invokeInstance(date);
        } else {
            this.$currentDate = invokeInstance(new Date());
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

    // dayjs provided functions

    toDate(): Date {
        return this.$currentDate.toDate();
    }

    toJSON(): string {
        return this.$currentDate.toJSON();
    }

    toString(): string {
        return this.toDate().toString();
    }

    toISOString(): string {
        return this.$currentDate.toISOString();
    }

    toUTCString(): string {
        return this.toDate().toUTCString();
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

    isSame(date: MutableDateArgument, unit?: OpMutableUnitType): boolean {
        if (MutableDate.isInstance(date)) {
            return this.$currentDate.isSame(date.toDate(), unit);
        }

        return this.$currentDate.isSame(date, unit);
    }

    isSameOrAfter(
        date: MutableDateArgument,
        unit?: OpMutableUnitType
    ): boolean {
        if (MutableDate.isInstance(date)) {
            return (
                this.$currentDate.isSame(date.toDate(), unit) ||
                this.isAfter(date, unit)
            );
        }

        return this.$currentDate.isSame(date, unit) || this.isAfter(date, unit);
    }

    isSameOrBefore(
        date: MutableDateArgument,
        unit?: OpMutableUnitType
    ): boolean {
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
        return this.$currentDate.isUTC();
        // return this.$timezone === "utc";
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
        date?: MutableDateArgument,
        unit?: QMutableUnitType | OpMutableUnitType,
        float?: boolean
    ): number {
        if (MutableDate.isInstance(date)) {
            date = date.toDate();
        }

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
    millisecond(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.millisecond();
        }

        this.$currentDate = this.$currentDate.millisecond(value);
        return this;
    }

    second(): number;
    second(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.second();
        }

        this.$currentDate = this.$currentDate.second(value);
        return this;
    }

    minute(): number;
    minute(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.minute();
        }

        this.$currentDate = this.$currentDate.minute(value);
        return this;
    }

    hour(): number;
    hour(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.hour();
        }

        this.$currentDate = this.$currentDate.hour(value);
        return this;
    }

    day(): number;
    day(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.day();
        }

        this.$currentDate = this.$currentDate.day(value);
        return this;
    }

    month(): number;
    month(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.month();
        }

        this.$currentDate = this.$currentDate.month(value);
        return this;
    }

    year(): number;
    year(value?: number): number | MutableDate {
        if (argumentIsNotDefined(value)) {
            return this.$currentDate.year();
        }

        this.$currentDate = this.$currentDate.year(value);
        return this;
    }

    date(): number;
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

    utcOffset(): number {
        return this.$currentDate.utcOffset();
    }

    // extended methods

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

    isToday(): boolean {
        return this.isSame(MutableDate.create().toDate(), "day");
    }

    isTomorrow(): boolean {
        return this.isSame(MutableDate.create().add(1, "day").toDate(), "day");
    }

    isYesterday(): boolean {
        return this.isSame(
            MutableDate.create().subtract(1, "day").toDate(),
            "day"
        );
    }

    isPast(): boolean {
        return this.isBefore(MutableDate.create().toDate());
    }

    isFuture(): boolean {
        return this.isAfter(MutableDate.create().toDate());
    }

    getTime(): number {
        return this.toDate().getTime();
    }

    toArray(): MutableDateAsArray {
        return [
            this.year(),
            this.month(),
            this.date(),
            this.hour(),
            this.minute(),
            this.second(),
            this.millisecond()
        ];
    }

    toObject(): ParsableDuration {
        return {
            years: this.year(),
            months: this.month(),
            days: this.date(),
            hours: this.hour(),
            minutes: this.minute(),
            seconds: this.second(),
            milliseconds: this.millisecond()
        };
    }

    getDifference(date: MutableDateArgument): ParsableDuration {
        return getDateDifference(this.toDate(), date);
    }

    currentTimezone(): MutableTimeZone {
        return this.$timezone;
    }

    // currently broken
    switchTimezone(timezone: MutableTimeZone): MutableDate {
        if (this.$timezone === timezone) {
            return this;
        }

        // tidy this up

        const offset = getTimezoneOffset(this.toDate());

        if (timezone === "utc") {
            if (offset > 0) {
                this.$currentDate = this.$currentDate.add(offset, "minutes");
            } else if (offset < 0) {
                this.$currentDate = this.$currentDate.subtract(
                    Math.abs(offset),
                    "minutes"
                );
            }
        }

        if (timezone === "local") {
            if (offset > 0) {
                this.$currentDate = this.$currentDate.subtract(
                    Math.abs(offset),
                    "minutes"
                );
            } else if (offset < 0) {
                this.$currentDate = this.$currentDate.add(offset, "minutes");
            }
        }

        this.$timezone = timezone;
        return this;
    }

    getTimezoneOffset(): number {
        return getTimezoneOffset(this.toDate());
    }
}

export function isMutableDateInstance(date: any): date is MutableDate {
    return date instanceof MutableDate;
}
