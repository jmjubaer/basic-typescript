{
    // Generic type

    type GenericArrayType<T> = Array<T>; // Generic type

    // const rollArray: number[] = [45,75,12,34,46]  // Normal way to type declaration

    // const rollArray: Array<number> = [45,75,12,34,46] // Normal way to type declaration

    const rollArray: GenericArrayType<number> = [45, 75, 12, 34, 46]; // generic type declaration

    // const mentorArray: string[] = ["hn","mir","joy"]  // Normal way to type declaration

    // const mentorArray: Array<string> = ["hn","mir","joy"] // Normal way to type declaration

    const mentorArray: GenericArrayType<string> = ["hn", "mir", "joy"]; // generic type declaration

    const genericObject: GenericArrayType<{ name: string }> = [
        // Generic type for object
        {
            name: " Hessian",
        },
        {
            name: " jm",
        },
    ];

    // Genetic tuple type declaration

    type GenericTuple<X, Y> = [X, Y];

    const genericArray: GenericTuple<number, { name: string }> = [
        // tuple type declaration
        12,
        { name: "jm" },
    ];

    // Generic type declaration by Interface================================

    interface Developer<T, X = null> {
        // we can pass multiple type arguments and also set a default value
        name: string;
        computer: T;
        skill?: X;
    }
    interface Computer {
        module: string;
        version: number;
    }
    const FrontEndDeveloper_1: Developer<Computer, string[]> = {
        // we can pass type by type alice or we can pass directly.
        name: "John Doe",
        computer: {
            module: "G3",
            version: 16.13,
        },
        skill: ["React", "JavaScript"],
    };

    //
}
