// normal function

// function type declaration (aug: number (arguments type),aug: number): number the return type
function add(num1: number, num2: number): number {
    return num1 + num2;
}
// function type declaration (aug: number (arguments type),aug: number): number the return type

const addNumber = (num1: number, num2: number): number => num1 + num2;

// When we store a function in a object is call method, Method function must be a normal function. we can not write a arrow function

const myInfo = {
    name: "John",
    age: 25,
    // you can also pass parameters as a normal function. But when you want to access the inner object data you need to use "this" keyword.
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
};

// map function types declaration

const numArray: number[] = [1, 5, 2, 5, 4, 5];

const doubledArray: number[] = numArray.map((num: number): number => num * 2); // you can define return type.
