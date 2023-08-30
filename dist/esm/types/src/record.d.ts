import { UnknownRecord } from "type-fest";
import { Nullable } from "./primitives";
export { EmptyObject, UnknownRecord } from "type-fest";
export type NullableProperties<T extends UnknownRecord> = {
    [K in keyof T]: Nullable<T[K]>;
};
//# sourceMappingURL=record.d.ts.map