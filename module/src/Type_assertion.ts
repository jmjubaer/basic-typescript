// type assertion

// type assertion use by "as" key word (value as string) for declare the value type forcefully. it's means i am sure more than typescript of the value type. it's use for get the suggestions for this type method.

const KgToGm = (value: string | number) => {
    if (typeof value === "number") {
        return value * 1000;
    }
    if (typeof value === "string") {
        const convertedValue = parseFloat(value);
        return `Converted Value ${convertedValue * 1000}`;
    }
};


// We can get the declaration type suggestions.
const weightInGrams_1 = KgToGm("10") as number; // type assertion (value as number)
const weightInGrams_2 = KgToGm(10) as string; // type assertion (value as string)
