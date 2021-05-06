export interface IResponsive<T = number> {
    xl?: T;
    l?: T;
    m?: T;
    s?: T;
}

export interface IResponsiveValue<T> extends IResponsive<T> {
    default: T;
}

export type BreakpointOptions = keyof Omit<IResponsiveValue<number>, "default">;
