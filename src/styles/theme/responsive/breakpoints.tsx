import { IResponsive } from "./IResponsiveValue";
import { breakpointSettings } from "./settings";

type Key = keyof IResponsive;
export const breakpoint = Object.keys(breakpointSettings)
    .map((key) => [key, breakpointSettings[key as Key]] as [Key, number])
    .reduce(
        (prev, [key, width]) => ({
            ...prev,
            ...{ [key]: `@media (max-width: ${width}px)` },
        }),
        {}
    ) as IResponsive<string>;
