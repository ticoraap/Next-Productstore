const breakpoints = {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
};

export const breakpoint = Object.keys(breakpoints)
    .map((key) => [key, breakpoints[key]])
    .reduce(
        (prev, [key, width]) => ({
            ...prev,
            ...{ [key]: `@media (max-width: ${width}px)` },
        }),
        {}
    ) as typeof breakpoints;
