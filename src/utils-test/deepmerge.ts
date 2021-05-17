import merge from "deepmerge";

export function deepmerge<T>(value: T, overrides: DeepPartial<T>): T {
    return merge(value as T, overrides as T);
}
