//spread operator

// spread operator for objects

const person1 = { name: "John", age: 30 };
const person2 = { city: "New York" };

const mergedPerson = { ...person1, ...person2 };

// spread operator for arrays

const numbers1: number[] = [1, 2, 3];
const numbers2: number[] = [4, 5, 6];
const mergedNumbers = [...numbers1, ...numbers2];

// numbers2.push(numbers1);     Wrong way: in typescript not allowed
numbers2.push(...numbers1); // Right way: in typescript not allowed

// Rest operator

const GreetFriends = (...args: string[]) => {
    // catch the all arguments in a Array
    args.forEach((friend: string) =>
        console.log(`Hello, my friends ${friend} `)
    );
};

GreetFriends("a", "b", "c");

// Destructuring

// object destructuring

const person = {
    name: {
        firstName: "John",
        lastName: "Doe",
    },
    age: 30,
};

// in typescript not allowed to define type when destructuring. But we can change the properties name like "firstName" as fullName
const {
    name: { firstName: fullName },
    age,
} = person;

// array destructuring

const friends = ["a", "b", "c", "d"];
const [, , main, ...rest] = friends; // we can scape  the properties by "," and we can catch the rest properties by using the rest operator "..."
