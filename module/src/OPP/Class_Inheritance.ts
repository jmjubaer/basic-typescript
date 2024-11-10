{
    // Class inheritance 
    class Person {
        name: string;
        age: number;
        address: string;
         constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        // method
        greet(): void {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    }
    
    // Inheritance example
    class Student extends Person {
        grade: number;
        constructor(name: string, age: number, address: string, grade: number) {
            super(name, age, address);
            this.grade = grade;
        }
        
        // Method overriding
        // if we redeclare the method its override and if not declare its get the parent constructor method.
        greet(): void {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old. I'm in grade ${this.grade}.`);
        }
    }
    class Teacher extends Person {
        subject: string;
        constructor(name: string, age: number, address: string, subject: string) {
            super(name, age, address);
            this.subject = subject;
        }
        // Method
        intro(experience: number){
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old. I teach ${this.subject}. I have ${experience} year experience.`);
        }
    }
    
    // Creating instances
    const john = new Student("John Doe", 20, "123 Main St", 12);
    john.greet(); // Output: Hello, my name is John Doe and I'm 20 years old. I'm in grade 12.

    const jane = new Teacher("jane",50, "123 Main St","Mathematics");
    jane.intro(5); // Output: Hello, my name is Jane Doe and I'm 50 years old. I teach Mathematics. I have 5 year experience.







}