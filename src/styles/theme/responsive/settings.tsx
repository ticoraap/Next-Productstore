import { IResponsiveValue } from "./IResponsiveValue";

export const breakpointSettings: Required<
    Omit<IResponsiveValue<number>, "default">
> = {
    xl: 1200,
    l: 992,
    m: 768,
    s: 576,
};

export const gutterSettings: Required<IResponsiveValue<number>> = {
    default: 24,
    xl: 24,
    l: 24,
    m: 16,
    s: 16,
};
