{
    // "?" this symbol has three use case in typescript
    // ternary operator, optional chaining operator, nullish coalescing operator

    // ternary operator

    const age: number = 18;
    const isAdult: string = age >= 18 ? "Adult" : "NonAdult";
    console.log(isAdult);

    // optional chaining operator

    type User = {
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        age: number;
    };

    const user: User = {
        name: {
            firstName: "John",
            lastName: "Doe",
        },
        age: 30,
    };
    const firstName = user?.name?.firstName
    console.log(firstName);

    // nullish coalescing operator
    // Nullish coalescing operator is not same as ternary operator operator. Nullish coalescing operator work when the value is null or undefined.
    const middleName = user?.name?.middleName ?? "not available";

}
