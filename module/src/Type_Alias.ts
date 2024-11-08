{
    // object type alias

    // we can define a type alias as a global type and we can use its multiple times
    type UserType = {
        name: string;
        age: number;
    };

    const user1: UserType = {
        name: "John Doe",
        age: 30,
    };
    const user2: UserType = {
        name: "Rock Doe",
        age: 20,
    };

    // we can also define a type alias for single properties
    type UserNameType = string;

    const name: UserNameType = "Rock Doe";

    // we can also define a type alias for functions with arguments and return values types
    type AddFunction = (num1: number, num2: number) => number;

    const add_1 = (num1: number, num2: number): number => num1 + num2; // this normal type declaration

    const add_2: AddFunction = (num1, num2) => num1 + num2; // there use type alias for type declarations
}
