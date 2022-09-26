import dayjs from "dayjs";

type UnixUnit = "milliseconds" | "seconds";

export function unixTs(time: number, unit: UnixUnit): dayjs.Dayjs {
    if (unit === "milliseconds") {
        return dayjs.unix(time / 1000);
    }

    return dayjs.unix(time);
}
