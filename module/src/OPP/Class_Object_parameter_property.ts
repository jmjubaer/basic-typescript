{
    //Class_Object_parameter_property

    // Class constructor ================================================
    class User_1 {
        public name: string; // by default its public, so public write is optional
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        // method
        // in object method mus be a normal function. because the arrow function not supported the  "this" keyword
        greet(): void {
            console.log(
                `Hello, my name is ${this.name} and I'm ${this.age} years old.`
            );
        }
    }

    // parameters properties =======================================
    //public name: string; the public key use is parameter properties

    class User_2 {
        constructor(public name: string, public age: number) {} // ita more dynamic and clean
        // method
        // in object method mus be a normal function. because the arrow function not supported the  "this" keyword
        greet(): void {
            console.log(
                `Hello, my name is ${this.name} and I'm ${this.age} years old.`
            );
        }
    }

    const user_1 = new User_1("jm", 20);
    const user_2 = new User_1("Pinik", 19);
    user_1.greet();
}
