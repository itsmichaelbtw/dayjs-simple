import { ConfigType } from "dayjs";

const toObjectString = Object.prototype.toString;

export type DayJsArgumentInput = ConfigType;
export type DateArgumentInput = string | number | Date | null | undefined;
export type ObjectPrototypes =
    | "[object Object]"
    | "[object String]"
    | "[object Array]"
    | "[object Date]"
    | "[object RegExp]"
    | "[object Error]"
    | "[object Map]"
    | "[object Set]"
    | "[object WeakMap]"
    | "[object WeakSet]"
    | "[object Int8Array]"
    | "[object Uint8Array]"
    | "[object Uint8ClampedArray]"
    | "[object Int16Array]"
    | "[object Uint16Array]"
    | "[object Int32Array]"
    | "[object Uint32Array]"
    | "[object Float32Array]"
    | "[object Float64Array]";

export function callObjectType(input: any): ObjectPrototypes {
    return toObjectString.call(input);
}
