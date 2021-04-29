export const usToEuNumber = (input: string) => {
    return Number(
        input.replace(/[,.]/g, function (x) {
            return x == "," ? "." : ",";
        })
    );
};
